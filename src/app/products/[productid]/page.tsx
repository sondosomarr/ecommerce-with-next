import { getProduct } from '@/services/productsApi';
import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import Link from 'next/link';

interface Props {
  params: { productid: string };
}
export const generateMetadata = async ({ params}:Props)=>{
    const product = await getProduct(Number(params.productid));
    return {
      title: product.title,
      
    };
}

export default async function Page({ params }: Props) {
  console.log('Product ID from params:', params.productid);

  try {
    const product = await getProduct(Number(params.productid));
    if (!product) {
      return <p>Product not found.</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Back Button */}
            <div className="p-4 border-b">
              <Link href="/products" className="text-blue-500 hover:underline">
                ← Back to Products
              </Link>
            </div>
    
            {/* Flex Container for Image and Details */}
            <div className="flex flex-col md:flex-row p-6">
              {/* Product Image */}
              <div className="md:w-1/2 lg:w-1/3 relative h-96">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
    
              {/* Product Details */}
              <div className="md:w-1/2 lg:w-2/3 p-6">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
    
                {/* Price and Category */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-green-600 font-bold text-2xl">
                    ${product.price}
                  </p>
                  <p className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {product.category}
                  </p>
                </div>
    
                {/* Add to Cart Button */}
                <button className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  } catch (error) {
    console.error('Error fetching product:', error);
    return <p>Failed to load product. Please try again later.</p>;
  }
}