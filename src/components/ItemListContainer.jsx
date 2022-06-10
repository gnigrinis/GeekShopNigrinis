import ItemList from "./ItemList"

function ItemListContainer({greeting}) {
  return (
    <>
      <h1 className="flex justify-center text-xl">{greeting}</h1>
      <ItemList/>
    </>
  )
}
export default ItemListContainer