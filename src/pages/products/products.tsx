const products = [
  {
    id: 1,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 2,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 3,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 4,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 5,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 6,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 7,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 8,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 9,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 10,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 11,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 12,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 13,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 14,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 15,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 16,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 17,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 18,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 19,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
  {
    id: 20,
    brand: "MR GASTON",
    price: 32,
    image: "https://product-cdn.systembolaget.se/productimages/24564985/24564985_800.png",
    category: "BRANDY",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};
