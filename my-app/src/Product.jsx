function Product({ name, quantity, price }) {
  return (
    <div className="product-container">
      <h3>{name}</h3>
      <div className="product-info">
        <h4>Quantity: {quantity}</h4>
    
        <h4>Price: {price}</h4>
      </div>
    </div>
  );
}

export default Product;
