import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // Async API Call
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2 className="text-center text-2xl mt-10">Loading awesome products...</h2>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Products</h1>
      
      {/* Grid Layout mapping through data */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md flex flex-col bg-white">
            <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
            <h2 className="font-semibold text-lg line-clamp-2">{product.title}</h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
            
            <button 
              onClick={() => addToCart(product)}
              className="mt-auto bg-gray-900 text-white py-2 rounded hover:bg-gray-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
