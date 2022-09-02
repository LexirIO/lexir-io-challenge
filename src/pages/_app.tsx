import { ProductContextProvider } from "src/context/ProductsContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <ProductContextProvider>
      <Component {...pageProps} />
    </ProductContextProvider>
  );
}

export default MyApp;
