const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card product-card" >
        <img
          src={product.thumbnail}
          className="card-img-top product-thumbnail"
          alt="..."
        />
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-text">{product.description}</p>
          <p className="product-rating">Rating: {product.rating}</p>
          <p className="product-price">Price: ${product.price} </p>
          <p className="product-discount">
            Discount: {product.discountPercentage}%
          </p>
        </div>
      </div>
    </> 
    // <div className="product-card">
    //   <img
    //     src={product.thumbnail}
    //     alt={product.title}
    //     className="product-thumbnail"
    //   />
    //   <h2 className="product-title">{product.title}</h2>
    //   <p className="product-description">{product.description}</p>
    //   <p className="product-price">Price: ${product.price}</p>
    //   <p className="product-discount">
    //     Discount: {product.discountPercentage}%
    //   </p>
    //   <p className="product-rating">Rating: {product.rating}</p>
    //   <p className="product-stock">Stock: {product.stock}</p>
    //   <p className="product-brand">Brand: {product.brand}</p>
    //   <p className="product-category">Category: {product.category}</p>
    //   <div className="product-images">
    //     {product.images.map((image, index) => (
    //       <img
    //         key={index}
    //         src={image}
    //         alt={`Product ${index + 1}`}
    //         className="product-image"
    //       />
    //     ))}
    //   </div>
    // </div>
  );
};

export default ProductCard;
