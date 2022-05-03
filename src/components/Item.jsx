import { Link } from 'react-router-dom'

const item = ({item}) => {
  const {id, title, pictureUrl} = item

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={pictureUrl} alt={title}/></figure>
      <div className="card-body">
        <h2 className="card-title justify-center">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <Link to={`/itemDetail/${id}`} className="btn btn-primary">More info</Link>
      </div>
    </div>
  )
}
export default item