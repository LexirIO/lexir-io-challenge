import DesktopWidthProvider from "@components/context/DesktopWidthProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <DesktopWidthProvider>
      <Component {...pageProps} />
    </DesktopWidthProvider>
  );
}

export default MyApp;
