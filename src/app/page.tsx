import Image from "next/image";
export default function Home() {
  const imgUrl =
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg";
  return (
    <div className="w-relative w-screen h-screen">
      {/* Hero Image Section */}
      <div className="relative w-full h-[1100px] overflow-hidden ">
        {/* <img
        src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg"
        alt="Models sitting back to back, wearing Basic Tee in black and bone."
        className="w-full h-226 object-cover"
      /> */}
        <Image
          src={imgUrl}
          alt="hero"
          className="w-full h-226 object-cover"
          fill
        />
      </div>

      {/* Rest of the Content */}
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Our Store</h1>
        <p className="mt-2">
          Explore our latest collection of fashion and accessories.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
}
