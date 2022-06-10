import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext"
import CardList from "./CardList";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Cart = () => {

  const [buyer, setBuyer] = useState({})
  const {cart} = useCartContext();
  let total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  
  const checkout = async () => {
    
    const user = {
      buyer: {buyer},
      items: cart.map(item => ({id: item.id, title: item.title, price: item.price})),
      total: total
    }
    
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
  
    const reponse = await addDoc(ordersCollection, user);

    const MySwal = withReactContent(Swal)

    MySwal.fire({
      didOpen: () => {
        MySwal.fire(<p> Hi {buyer.name}, your order was created. Your orden number is {reponse.id}</p>)
      }
    })
  }

  return (
      <div className="flex-col gap-8">
        {(cart.length==0) ? 
        <>
          <div className="flex items-center">
            <h1>The cart is empty</h1>
            
            <Link to="/" className="h-8 btn btn-primary"> Back</Link>
          </div>
        </>:
        <>
          <div className="flex flex-col items-center gap-8">
            {cart.map( data => <CardList key={data.id} item={data}/>)}
            <Formik
              initialValues={{ name: '', phone: '', email: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setBuyer(values)
                  setSubmitting(true)
                }, 0);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-1">
                  <label htmlFor="name">Full Name</label>
                  <Field type="name" name="name" />
                  <ErrorMessage name="name" component="div" />
                  <label htmlFor="phone">Phone Number</label>
                  <Field type="phone" name="phone" />
                  <ErrorMessage name="phone" component="div" />
                  <label htmlFor="email">Email</label>                  
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <button type="submit" disabled={isSubmitting} onClick={checkout} className="h-8 btn btn-primary"> Checkout</button>
                </Form>
              )}
            </Formik>
          </div>
        </>
        }
      </div>
  )
}
export default Cart