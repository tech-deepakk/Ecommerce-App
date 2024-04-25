import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProducts(data);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <ProductList products={products}></ProductList>
    </>
  );
}

export default App;
