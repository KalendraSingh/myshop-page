import React from "react";
import shoes1 from './img/shoes-1.jpg';
import shoes2 from './img/shoes-2.webp';
import shoes3 from './img/shoes-4.jpg';
import shoes4 from './img/shoes-4.webp';
import python from './python.jpg';
import react from './react.jpg';
import {AiOutlineArrowRight} from 'react-icons/ai';

function Courses(){
    return(
        <>
            <div className="bg-[#2d3a8c] py-[15px]">
            <h1 className="text-center text-bold text-2xl md:text-4xl text-white">OUR PREMIUM PRODUCTS</h1>
                <div className=" max-w-[1250px] py-[15px] mx-auto flex flex-row flex-wrap justify-center gap-5 md:justify-center md:gap-5">
                    <div className="max-w-[300px] border flex flex-col justify-center p-4 bg-white  rounded hover:scale-125 duration-300 ">
                        <div className="max-w-[250px] mx-auto">
                          <img src= {shoes1} alt ="in web" className="w-[250px] rounded-[10PX]"/>
                        </div>
                         
                         <h1 className="text-[#323f4b] text-bold text-[20px] pb-2">Shoes</h1>
                         <p className="text-justify text-[#7b8794] pb-2 ">
                            Rs. 1200/-
                         </p>
                         <a href="#" className="inline text-red-800"><button className="bg-[#4738d1] p-2 text-white">Add to Cart<AiOutlineArrowRight className="inline text-white"/></button></a>
                    </div>
                    <div className="max-w-[300px] border flex flex-col justify-center p-4 bg-white  rounded hover:scale-125 duration-300">
                        <div className="max-w-[250px] mx-auto">
                          <img src= {shoes2} alt ="in web" className="w-[250px] rounded-[10PX]"/>
                        </div>
                         
                         <h1 className="text-[#323f4b] text-bold text-[20px] pb-2">Shoes</h1>
                         <p className="text-justify text-[#7b8794] pb-2 ">
                            Rs. 1200/-
                         </p>
                         <a href="#" className="inline text-red-800"><button className="bg-[#4738d1] p-2 text-white">Add to Cart<AiOutlineArrowRight className="inline text-white"/></button></a>
                    </div>
                    <div className="max-w-[300px] border flex flex-col justify-center p-4 bg-white  rounded hover:scale-125 duration-300">
                        <div className="max-w-[250px] mx-auto">
                          <img src= {shoes3} alt ="in web" className="w-[250px] rounded-[10PX]"/>
                        </div>
                         
                         <h1 className="text-[#323f4b] text-bold text-[20px] pb-2">Shoes</h1>
                         <p className="text-justify text-[#7b8794] pb-2 ">
                            Rs. 1200/-
                         </p>
                         <a href="#" className="inline text-red-800"><button className="bg-[#4738d1] p-2 text-white">Add to Cart<AiOutlineArrowRight className="inline text-white"/></button></a>
                    </div>
                    <div className="max-w-[300px] border flex flex-col justify-center p-4 bg-white  rounded hover:scale-125 duration-300">
                        <div className="max-w-[250px] mx-auto">
                          <img src= {shoes4} alt ="in web" className="w-[250px] rounded-[10PX]"/>
                        </div>
                         
                         <h1 className="text-[#323f4b] text-bold text-[20px] pb-2">Shoes</h1>
                         <p className="text-justify text-[#7b8794] pb-2 ">
                            Rs. 1200/-
                         </p>
                         <a href="#" className="inline text-red-800"><button className="bg-[#4738d1] p-2 text-white">Add to Cart<AiOutlineArrowRight className="inline text-white"/></button></a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Courses;