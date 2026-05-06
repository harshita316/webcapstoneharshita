import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">TechGear</Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          <Link to="/products" className="hover:text-blue-300 transition">Products</Link>
          <Link to="/cart" className="bg-blue-600 px-4 py-2 rounded font-bold">
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}
