import React from "react";

const Footer = () => {
  return (
    <div className="border-2">
      <div className="flex justify-around  ">
        <div className="p-5">
        <h2 className="font-semibold text-4xl p-4">
          online<span className="text-blue-900">Store</span>
        </h2>
          <p className="font-semibold text-md mt-6">
            Subscribe to our newsletter for regular updates about Offers,
            Coupons & more
          </p>
          <input type="text" placeholder="Your Email Address" className="p-2 w-full mt-4"/>
          <button className="bg-blue-500 text-white p-2 mt-5  text-xl w-full ">Subscribe</button>
        </div>
        <div className="p-5">
          < p className="font-semibold text-xl p-4">Follow us on</p>
          <div className="p-4">
            <i class="bi bi-facebook text-3xl p-3 " ></i>
          <i class="bi bi-messenger  text-3xl p-3 "></i>
          <i class="bi bi-whatsapp  text-3xl p-3 "></i>
          <i class="bi bi-youtube  text-3xl p-3 "></i>
          <i class="bi bi-instagram  text-3xl p-3 "></i>
          </div>
          < p className="font-semibold text-xl p-4">Mobile Apps</p>
          <button className="border-2 p-3 font-semibold mr-4"> Googleplay</button>
          <button className="border-2 p-3 font-semibold"> Apple Store</button>
        </div>
      </div>
      <hr />
      <div className="col-span-3  grid grid-cols-4 ">
        <div className="">hello</div>
        <div>hdv</div>
      </div>
    </div>
  );
};

export default Footer;
