import Item from "./Item";

function ItemList({ products }: any) {
  return (
    <div className="grid lg:col-start-5 lg:col-end-13 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((item: any) => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
}
export default ItemList;
