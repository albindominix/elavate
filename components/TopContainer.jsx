import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Wrapper from "./Wrapper";
import Header from "./Header";
import { Carousel } from "react-responsive-carousel";
import { MdOutlineArrowBackIosNew,MdOutlineArrowForwardIos } from "react-icons/md";

export default function TopContainer() {
  return (
    <div className="bg-[url('../assets/banner-bg.webp')]" style={{backgroundSize:"100% 100%"}}>
      <Wrapper className="hidden md:flex h-12  justify-between items-center clipPath bg-black ">
        <div className="flex justify-center items-center gap-16 w-full">
          <div className="text-white">Best Sellers</div>
          <div className="text-white">Gift Ideas</div>
          <div className="text-white"> New Releases</div>
          <div className="text-white">Today's Deals</div>
          <div className="text-white">Customer Service</div>
        </div>
      </Wrapper>

      <Wrapper className="flex justify-center items-center">
        <div className="font-bold text-5xl py-8">Eflyer</div>
      </Wrapper>
      <Header />

      <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto py-[90px]">
        <Carousel 
        style="display:flex;align-items:center"
          autoPlay={true}
          infiniteLoop={true} //
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(clickHandler,hasPrev)=>(
            <div onClick={clickHandler}
            className='absolute left-[31px] md:left-[51px] max-[400px]:left-[14px] max-[768px]:top-0 bottom-2/4 w-[50px] h-[50px] bg-black opacity-50 rounded-full z-10 flex items-center justify-center cursor-pointer hover:opacity-90'>
                <MdOutlineArrowBackIosNew className='text-2xl md:text-lg text-white '/>
    
            </div>
           )}
           renderArrowNext={(clickHandler,hasPrev)=>(
            <div onClick={clickHandler}
            className='absolute right-[31px] bottom-2/4 md:right-[51px] max-[400px]:right-[14px] max-[768px]:top-0  w-[50px] h-[50px]  bg-black opacity-50 rounded-full z-10 flex items-center justify-center cursor-pointer hover:opacity-90'>
                <MdOutlineArrowForwardIos className='text-2xl md:text-lg'/>
    
            </div>
           )}
           >

            {[1,1,1].map((item,index)=>(
               <div key={index} className="flex flex-col items-center gap-6">
               <div className="flex flex-col gap-3">
               <div className="font-bold  text-3xl sm:text-5xl md:text-6xl text-lg-6.75xl   text-black">GET START</div>
                <div className="font-bold text-3xl sm:text-5xl md:text-6xl text-lg-6.75xl   text-black">
                  YOUR FAVRIOT SHOPPING
                </div></div> 
                <div className="py-4 px-8 bg-black rounded-md text-white">BUY NOW</div>
              </div>
            ))
         }
        </Carousel>
      </div>
    </div>
  );
}
