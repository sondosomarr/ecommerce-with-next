import ProductType from "@/types/productType";
import Link from "next/link";
import React from "react";
interface Props {
  products: ProductType;
}
export default function ProductCard({ products }: Props) {
  return (
    <>
      {/* Product Card */}
      <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition duration-300">
        <Link href={`/products/${products.id}`}>
        <img
          src={products.image}
          alt={products.title}
          className="w-full h-48 object-contain mb-4"
        />
        </Link>
        <h2 className="text-sm font-semibold">{products.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{products.category}</p>
        <p className="text-green-600 font-bold">${products.price}</p>
        <button className="mt-3 w-full bg-orange-700 text-white py-2 rounded-md hover:bg-orange-800 transition">
          Add to Cart
        </button>
      </div>
    </>
  );
}
