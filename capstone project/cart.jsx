import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart } = useCart();

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Conditional Rendering (Module 7): What to show if the cart is empty
  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty!</h2>
        <Link to="/products" className="text-blue-600 hover:underline text-lg font-semibold">
          ← Go back to Products
        </Link>
      </div>
    );
  }

  // What to show if there are items in the cart
  return (
    <div className="container mx-auto p-4 max-w-4xl mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Map through the cart array to display each item */}
        {cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between border-b py-4 last:border-b-0">
            <div className="flex items-center gap-6">
              <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
              <div>
                <h2 className="font-semibold text-lg line-clamp-1">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Total Price Section */}
        <div className="mt-6 pt-6 border-t flex justify-between items-center">
          <h2 className="text-2xl font-bold">Total:</h2>
          <span className="text-2xl font-bold text-green-600">${totalPrice.toFixed(2)}</span>
        </div>
        
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
