import React from "react";
import {AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";
import { useState } from "react";

function Header() {

  const [toggle,setToggle] = useState(false);


  return (
    <>
    <div className="bg-[#4738d1] p-4" >
      <div className=" max-w-[1250px] flex justify-between items-center  mx-auto">
        <div>
          <h1 className="text-white text-bold text-4xl">MyShop</h1>
        </div>
        {
          toggle?
          
          <AiOutlineClose onClick={()=>setToggle(!toggle)} className="text-white text-3xl hover:text-yellow-400 cursor-pointer md:hidden block" />
          :
          <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-white text-3xl hover:text-yellow-400 cursor-pointer md:hidden block"/>

        }
          
          <ul className=" md:flex gap-[15px] text-2xl text-white items-center hidden">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Product</li>
            <li className="hover:text-yellow-400 cursor-pointer">Category</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
            <li className="hover:text-yellow-400 cursor-pointer">Login</li>
          </ul>
      </div>
      
    </div>
    <div>
          <ul className={`duration-300 bg-[#6a2fa1] py-[20px] gap-[20px] text-2xl text-white text-center flex flex-col absolute 
           ${toggle? "left-0" : "left-[-100%]"}  w-full  md:hidden `}>
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Product</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
            <li className="hover:text-yellow-400 cursor-pointer">Category</li>
            <li className="hover:text-yellow-400 cursor-pointer">Login</li>
          </ul>
    </div>
    </>
    
  );
}

export default Header;
