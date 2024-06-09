import React from "react";

const page = () => {
  return (
    <>
      
        <div className='p-5 rounded-lg shadow-lg '>
          <h2 class="mb-4 text-2xl font-semibold text-center">Add product</h2>
          <form action="#" className="w-full">
            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div class="sm:col-span-2">
                <label for="name">
                  Product Name :
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-[500px] p-2 ml-2 rounded-xl"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="brand"
                 
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="w-[250px] p-2 ml-2 rounded-xl"
                  value="Apple"
                  placeholder="Product brand"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="price"
                  
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="w-[250px] p-2 ml-2 rounded-xl"
                  value="2999"
                  placeholder="$299"
                  required=""
                />
              </div>
              <div>
                <label
                  for="category"
                
                >
                  Category
                </label>
                <select
                  id="category"
                  className="w-[250px] p-2 ml-2 rounded-xl"
                >
                  <option selected="">Electronics</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div>
                <label
                  for="item-weight"
              
                >
                  Item Weight (kg)
                </label>
                <input
                  type="number"
                  name="item-weight"
                  id="item-weight"
                 className="w-[250px] p-2 ml-2 rounded-xl"
                  value="15"
                  placeholder="Ex. 12"
                  required=""
                />
              </div>
              <div>
                <label
                 
                  for="user_avatar"
                >
                  Upload file
                </label>
                <input
                  className="w-[250px] p-2 ml-2 rounded-xl"
                  id="user_avatar"
                  type="file"
                />
                <div
                  class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="user_avatar_help"
                ></div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="8"
                  className="w-full p-2 ml-2 rounded-xl"
                  placeholder="Write a product description here..."
                ></textarea>
              </div>
            </div>
           
          </form>
        </div>
    
    </>
  );
};

export default page;
