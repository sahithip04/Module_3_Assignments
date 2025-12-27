import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: Math.floor(Math.random() * 100) + 1,
}));

function App() {
  const [products] = useState(productsData);
  const [counter, setCounter] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  const handleSelectProduct = useCallback((productId) => {
    console.log("Selected product:", productId);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Performance Optimization</h1>

      <h2>Total Price: ${totalPrice}</h2>

      <button onClick={() => setCounter((prev) => prev + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

export default App;
