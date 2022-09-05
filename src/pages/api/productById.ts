// Get the product data from the API in firebase
export default async function getProducts(pid: string) {
  const response = await fetch(
    "https://lexir-7639a-default-rtdb.firebaseio.com/products.json"
  );
  const data = await response.json();

  // Fetches all products and returns product by ID
  return data[pid];
}
