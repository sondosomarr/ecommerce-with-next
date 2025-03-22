export const getProducts = async function () {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Products could not be loaded");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};
export async function getProduct(productId: number) {
    if (!productId) {
      throw new Error('Invalid product ID');
    }
  
    try {
      const url = `https://fakestoreapi.com/products/${productId}`;
      console.log('Fetching product from:', url);
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch product:', error);
      throw new Error('Failed to fetch product');
    }
  }