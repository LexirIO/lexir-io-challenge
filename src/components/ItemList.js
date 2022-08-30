import Item from "./Item";

function ItemList({ products }) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {products.map((item) => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
}
export default ItemList;
