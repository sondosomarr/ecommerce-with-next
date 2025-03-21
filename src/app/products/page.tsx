import React from 'react'
interface Product{
  id: number,
  title: string,
  image: string,
  category: string,
  // color: string,
  description: string,
  price: number,
}
export default async function products() {
  const res = await fetch("https://fakestoreapi.com/products")
  // console.log(data);
  const products: Product[] = await res.json();
  
  return (
    <div className="p-8 flex-1  bg-gray-100 ">
      <h1 className="text-3xl text-orange-700 font-bold text-center border-b mb-6">Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-sm font-semibold">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.category}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
            <button className="mt-3 w-full bg-orange-700 text-white py-2 rounded-md hover:bg-orange-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
