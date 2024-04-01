import React from "react";
import Typed from 'react-typed';
import './Herosection.css';

function Herosection(){
    return(

        <>

        <div className=" bgContainer w-full">
            <div className="max-w-[1250px] mx-auto  flex flex-col justify-center h-[80vh] pl-3 md:h-[75vh] gap-[15px]">
               <div className=" text-[50px] md:text-8xl text-bold text-white">
                    <h1>ONLINE</h1>
                    <h1> SHOPPING</h1>
                </div>
                <div  className="text-4xl text-bold text-white">
                    <h1>Unveiling the Ultimate </h1>
                    <h1>Online Retail Experience</h1>
                </div>
                <div  className=" text-1xl text-bold md:text-2xl text-bold text-white">
                    <p>Buy Now: 
                    <Typed
                    className="pl-2"
                strings={[
                    'Mobiles',
                    'Laptops',
                    'Clothes','Domestic Goods']}
                    typeSpeed={60}
                    backSpeed={50}
                    loop = {true}
                    
                    />
                    
               

                    </p>
                   

                </div>
                
                
                <div className="pt-10">
                    <button className="bg-[#4738d1] text-white text-bold text-3xl p-2 h-[50px] w-[200px] rounded-[15px]">SHOP NOW</button>
                </div>
            </div>
            
          
        </div>

        </>
    )

}
export default Herosection;