import React from "react";
import Link from "next/link";

const Home = () => {
  <style></style>;
  return (
    <>
     

      <div className="home">
        <div className=" container mx-auto py-48  flex-col items-center">
          <h1 className="text-6xl  px-30 font-medium mb-4 text-white">
            We Provide <br /> best Quality Product
          </h1>
          <p className="text-white font-semibold px-30 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            praesentium
            <br /> dolorum nostrum ipsam iusto eos, perspiciatis autem, .
          </p>
          <div className="mt-5 px-30">
            <Link  href = "/"className=" bg-blue-900 rounded   text-white p-2">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="container flex justify-center gap-10 mx-auto ">
        <div className=" w-10/12  py-8 items-center grid grid-cols-3 gap-6 mx-auto  justify-center">
          <div className="border-2 shadow-md flex  border-blue-200 rounded-sm   py-5  justify-center items-center gap-5">
            <i class="bi bi-truck text-5xl"></i>
            <div>
              <h1 className="text-xl font-semibold">Free Shopping</h1>
              <p>Order over 200</p>
            </div>
          </div>
          <div className="border-2  shadow-md flex border-blue-200 rounded-sm py-5 justify-center items-center gap-5">
            <i class="bi bi-coin text-5xl"></i>
            <div>
              <h1 className="text-xl font-semibold">Money Returns</h1>
              <p className="text-gray-500">7 Days money return</p>
            </div>
          </div>
          <div className="border-2 shadow-md flex  border-blue-200 rounded-sm   py-5  justify-center items-center gap-5">
            <i class="bi bi-clock text-5xl"></i>
            <div>
              <h1 className="text-xl font-semibold">24/7 Support</h1>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-[1080px] mx-auto min-h-[200px] bg-white">
        <h1 className="text-3xl font-medium mb-6 pt-3 pl-2 uppercase">
          Categories
        </h1>
        <div className="grid grid-cols-3 gap-3">
          <div className="relative rounded-sm overflow-hidden">
            <Link href = "/">
              <img src={'./assets/images/flower.jpg'} alt="" />
              <p className="absolute inset-0 bg-black opacity-50 flex items-center justify-center text-xl text-white font-medium hover:bg-opacity-65 shadow-sm">
                Electronics
              </p>
            </Link>
          </div>
          <div className="relative rounded-sm overflow-hidden">
            <Link href = "/">
              <img src={'./assets/images/flower.jpg'}  alt="" />
              <p className="absolute inset-0 bg-black opacity-50 flex items-center justify-center text-xl text-white font-medium  hover:bg-opacity-65 shadow-sm">
                Floweing and Gardening
              </p>
            </Link>
          </div>
          <div className="relative rounded-sm overflow-hidden">
            <Link href = "/">
              <img src={'./assets/images/flower.jpg'}  alt="" />
              <p className="absolute inset-0 bg-black opacity-50 flex items-center justify-center text-xl text-white font-medium  hover:bg-opacity-65 shadow-sm">
                {" "}
                Beauty & Health
              </p>
            </Link>
          </div>
          <div className="relative rounded-sm overflow-hidden">
            <Link href = "/">
              <img src={'./assets/images/flower.jpg'}  alt="" />
              <p className="absolute inset-0 bg-black opacity-50 flex items-center justify-center text-xl text-white font-medium  hover:bg-opacity-65 shadow-sm">
                Stationary
              </p>
            </Link>
          </div>
          <div className="relative rounded-sm overflow-hidden">
            <Link href = "/">
              <img src={'./assets/images/flower.jpg'}  alt="" />
              <p className="absolute inset-0 bg-black opacity-50 flex items-center justify-center text-xl text-white font-medium  hover:bg-opacity-65 shadow-sm">
                Babies & Toys
              </p>
            </Link>
          </div>
          <div className="relative rounded-sm overflow-hidden">
            <Link href = "/">
              <img src={'./assets/images/flower.jpg'} alt="" />
              <p className="absolute inset-0 bg-black opacity-50 flex items-center justify-center text-xl text-white font-medium  hover:bg-opacity-65 shadow-sm">
                Sports & Outdoor
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="container max-w-[1080px] mx-auto min-h-[200px] bg-white mt-10">
        <h1 className="text-3xl font-medium mb-6 pt-3 pl-2 uppercase">
          Top New Arrival
        </h1>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white shadow-md overflow-hidden rounded">
            <div className="relative">
              <img src={'./assets/images/flower.jpg'}  alt="" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-1">
                <Link href = "/">
                  {" "}
                  <i class="bi bi-heart text-lg w-9 h-8 text-white font-bold px-2 hover:bg-blue-800"></i>
                </Link>
                <Link href = "/">
                  {" "}
                  <i class="bi bi-search text-lg w-9 h-8 text-white font-bold px-2 hover:bg-blue-800"></i>
                </Link>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <h4 className="uppercase font-medium text-xl mb-2">Flower</h4>
              <p className="text-blue-600 font-semibold">$45.50</p>
            </div>
            <button className="bg-blue-700 text-white w-full rounded p-1">
              Add to cart
            </button>
          </div>
          <div className="bg-white shadow-md overflow-hidden rounded">
            <div className="relative">
              <img src={'./assets/images/flower.jpg'}  alt="" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-1">
                <Link href = "/">
                  {" "}
                  <i class="bi bi-heart text-lg w-9 h-8 text-white font-bold px-2 hover:bg-blue-800"></i>
                </Link>
                <Link href = "/">
                  {" "}
                  <i class="bi bi-search text-lg w-9 h-8 text-white font-bold px-2 hover:bg-blue-800"></i>
                </Link>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <h4 className="uppercase font-medium text-xl mb-2">Flower</h4>
              <p className="text-blue-600 font-semibold">$45.50</p>
            </div>
            <button className="bg-blue-700 text-white w-full rounded p-1 mb-1">
              Add to cart
            </button>
          </div>
          <div className="bg-white shadow-md overflow-hidden rounded">
            <div className="relative">
              <img src={'./assets/images/flower.jpg'}  alt="" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-1">
                <Link href = "/">
                  {" "}
                  <i class="bi bi-heart text-lg w-9 h-8 text-white font-bold px-2 hover:bg-blue-800"></i>
                </Link>
                <Link href = "/">
                  {" "}
                  <i class="bi bi-search text-lg w-9 h-8 text-white font-bold px-2 hover:bg-blue-800"></i>
                </Link>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <h4 className="uppercase font-medium text-xl mb-2">Flower</h4>
              <p className="text-blue-600 font-semibold">$45.50</p>
            </div>
            <button className="bg-blue-700 text-white w-full rounded p-1 mb-1">
              Add to cart
            </button>
          </div>
          <div className="bg-white shadow-md overflow-hidden rounded">
            <div className="relative">
              <img src={'./assets/images/flower.jpg'}  alt="" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-1">
                <Link href = "/">
                  {" "}
                  <i class="bi bi-heart text-lg w-9 h-8 text-white font-bold px-2 hover:bg-blue-800"></i>
                </Link>
                <Link href = "/">
                  {" "}
                  <i class="bi bi-search text-lg w-9 h-8 text-white font-bold px-2 hover:bg-blue-800"></i>
                </Link>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <h4 className="uppercase font-medium text-xl mb-2">Flower</h4>
              <p className="text-blue-600 font-semibold">$45.50</p>
            </div>
            <button className="bg-blue-700 text-white w-full rounded p-1 mb-1">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
