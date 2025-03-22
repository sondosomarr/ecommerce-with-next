import React from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/productsApi";
import ProductType from "@/types/productType";

const products = await getProducts();

export default  function ProductsList() {
  return (
    <div>
      <div className="p-8 flex-1  bg-gray-100 ">
        <h1 className="text-3xl text-orange-700 font-bold text-center border-b mb-6">
          Products
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: ProductType) => (
            <ProductCard key={product.id} products={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
