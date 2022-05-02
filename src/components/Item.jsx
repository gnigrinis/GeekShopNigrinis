import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const item = ({item}) => {
  const {id, title, pictureUrl} = item
  
  const onAdd = (cantidad) => { 
    console.log(cantidad)
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-500 w-200">
      <p>{id}</p>
      <figure><img src={pictureUrl} alt={title}/></figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <Link to={`/itemDetail/${id}`} className="btn btn-primary">More info</Link>
        <ItemCount stock="5" initial="1" onAdd={onAdd}/>
      </div>
    </div>
  )
}
export default item