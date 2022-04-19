import ItemCount from "./ItemCount"

function ItemListContainer({greeting}) {
  return (
    <>
      <div>{greeting}</div>
      <ItemCount stock="5" initial="1"/>
    </>
  )
}
export default ItemListContainer