 "use client"
import ProductsList from '@/components/ProductsList';
import Spinner from '@/components/Spinner';
import React, { Suspense } from 'react'


export default function products() {
  
  return (
    <Suspense fallback={ <Spinner/>}>
          <ProductsList/>
          </Suspense>
  );
}
