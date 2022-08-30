import Header from "./components/Header";
import ItemInfo from "./components/ItemListContainer/ItemInfo/ItemInfo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
