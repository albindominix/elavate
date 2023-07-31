import React from "react";

export default function ProductCard({ item }) {
  return (
    <div className="h-[600px] flex flex-col justify-around  cursor-pointer">
      <div className="text-center font-semibold text-2xl">{item.category}</div>
      <div className="flex justify-center gap-3">
        <p className="mr-2 text-lg text-[red] font-semibold">Price</p>
        <p className="mr-2 text-lg font-semibold">${item.price}</p>
      </div>
      <img
        className="w-full h-[400px] object-contain p-12 hover:scale-105"
        src={item.image}
        alt="Product Image"
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{item.title}</h2>
      </div>
    </div>
  );
}
