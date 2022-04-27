import ItemList from "./ItemList"

function ItemListContainer({greeting}) {
  return (
    <>
      <div>{greeting}</div>
      <ItemList/>
    </>
  )
}
export default ItemListContainer