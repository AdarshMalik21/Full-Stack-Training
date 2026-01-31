function Cart({ cartData }) {
  const { cart, increase, decrease, remove } = cartData;
console.log(cart);
  if (cart.length === 0) {
    return <p>Cart is empty</p>;
  }

  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return (
    <div>
      <h2>My Cart</h2>

      {cart.map(item => (
        <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p>{item.name}</p>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
          <button onClick={() => remove(item.id)}>Remove</button>
        </div>
      ))}

      <hr />
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>
    </div>
  );
}

export default Cart;
