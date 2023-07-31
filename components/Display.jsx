import { GlobalContext } from "@/context/context";
import React, { useContext, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

export default function Display({ products }) {

  // Configuring the responsive behavior of the carousel based on the device width.
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Filtering products data based on category to display different carousels.

  // Filtering products related to men's and women's clothing.
  const mensData = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  // Filtering products related to electronics.
  const electronicData = products.filter(
    (item) => item.category === "electronics"
  );

  // Filtering products related to jewelry.
  const jeweleryData = products.filter((item) => item.category === "jewelery");

  return (
    <>
      {/* Display the carousel for men's and women's clothing if there are items to display. */}
      {mensData.length > 0 && (
        <>
          <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-center">
            Mens & Womans
          </h1>
          <div className="my-16">
            {/* The Carousel component from react-multi-carousel is used to display products in a carousel format. */}
            <Carousel responsive={responsive}>
              {/* Iterating through each product in 'mensData' and rendering a ProductCard component for each one. */}
              {mensData.map((item, index) => (
                <div key={index}
                  className="m-4"
                  style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                >
                  {/* Passing the 'item' as a prop to the ProductCard component. */}
                  <ProductCard key={index} item={item} />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      )}

      {/* Display the carousel for jewelry if  are items to display. */}
      {jeweleryData.length > 0 && (
        <>
          <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-center">
            Jewellery
          </h1>
          <div className="my-16">
            <Carousel responsive={responsive}>
              {jeweleryData.map((item, index) => (
                <div key={index}
                  className="m-4"
                  style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                >
                  <ProductCard key={index} item={item} />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      )}

      {/* Display the carousel for electronics if there are items to display. */}
      {electronicData.length > 0 && (
        <>
          <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-center">
            Electronics
          </h1>
          <div className="my-16">
            <Carousel responsive={responsive}>
              {electronicData.map((item, index) => (
                <div key={index}
                  className="m-4"
                  style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                >
                  <ProductCard key={index} item={item} />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
}
