import ItemList from "./ItemList"

function ItemListContainer({greeting}) {
  return (
    <>
      <h1 className="flex justify-center">{greeting}</h1>
      <ItemList/>
    </>
  )
}
export default ItemListContainer