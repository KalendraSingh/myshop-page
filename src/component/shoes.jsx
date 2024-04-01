import React from "react";
import shoes1 from './img/shoes-1.jpg';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Shoes = (props)=>{

   const {name,price,image} = props;
    return(

        <>
             <div className="max-w-[300px] border flex flex-col justify-center p-4 bg-white  rounded hover:scale-125 duration-300 ">
                        <div className="max-w-[250px] mx-auto">
                          <img src= {image} alt ="in web" className="w-[250px] rounded-[10PX]"/>
                        </div>
                         
                         <h1 className="text-[#323f4b] text-bold text-[20px] pb-2">{name}</h1>
                         <p className="text-justify text-[#7b8794] pb-2 ">
                            Rs. {price}/-
                         </p>
                         <a href="#" className="inline text-red-800"><button className="bg-[#4738d1] p-2 text-white">Add to Cart<AiOutlineArrowRight className="inline text-white"/></button></a>
                    </div>
        </>
    )
}
export default Shoes;