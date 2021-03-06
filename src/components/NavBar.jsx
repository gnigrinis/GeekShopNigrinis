import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext";
import CartWidget from "./CartWidget"

const NavBar = () => {
  const {cart} = useCartContext();
  let  quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  let price = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  

  return (
  <div className="App"> 
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to={"/"}>Geek Shop</Link>
      </div>
      <div>
        <Link className="btn btn-ghost normal-case text-xl" to={`/category/videoCards`}>Video Cards</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={`/category/mouse`}>Mouse</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={`/category/cases`}>Cases</Link>
      </div>
      <div className="flex-none">
        {(cart.length==0)? undefined :<CartWidget quantity={quantity} price={price} />}
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" alt="Ramdom shoes"/>
            </div>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <article className="justify-between">
                Profile
                <p className="badge">New</p>
              </article>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar
