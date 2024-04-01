import React from "react";
import Shoes from "./shoes";
import shoes1 from './img/shoes-1.jpg';
import shoes2 from './img/shoes-2.webp';
import shoes3 from './img/shoes-4.jpg';
import shoes4 from './img/shoes-4.webp';
import watch1 from './img/watch-1.jpg';
import watch2 from './img/watch-2.jpg';
import watch3 from './img/watch-3.jpg';
import watch4 from './img/watch-4.jpg';

const Product = ()=>{
    return(
        <>
            <div className="bg-[#2d3a8c] py-[25px]">
            <h1 className="text-center text-bold text-2xl md:text-4xl text-white">OUR PREMIUM PRODUCTS</h1>
                <div className=" max-w-[1250px] py-[15px] mx-auto flex flex-row flex-wrap justify-center gap-5 md:justify-center md:gap-5">
                    
                    <Shoes name="Shoes" price="1200" image={shoes1}/>
                    <Shoes name="Stylish Shoes" price="1500" image={shoes2}/>
                    <Shoes name="Shoes" price="1000" image={shoes3}/>
                    <Shoes name="Stylish Shoes" price="500" image={shoes4}/>
                    <Shoes name="Watch" price="700" image={watch1}/>
                    <Shoes name="Stylish Watch" price="5000" image={watch2}/>
                    <Shoes name="New Watch" price="1500" image={watch3}/>
                    <Shoes name="Good Watch" price="2000" image={watch4}/>
                   
                    
                </div>
            </div>
        </>
    
    )
}
export default Product;