import Item from "./Item";

function ItemList({ products }: any) {
  return (
    <div className="grid justify-items-center sm:grid-cols-2 md:mx-auto md:max-w-2xl md:grid-cols-3 xl:grid-cols-4 xl:col-start-3 xl:col-end-7 gap-8">
      {products.map((item: any) => (
        <Item key={item.id} product={item} />
      ))}
    </div>
  );
}
export default ItemList;
