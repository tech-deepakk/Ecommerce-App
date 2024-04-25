import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length != 0 &&
        products.map((item) => <ProductCard key={item.title} product={item} />)}
    </div>
  );
}

export default ProductList;
