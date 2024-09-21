// CategoryCard.jsx
import React from "react";
import image from '../components/action.png'
export default function CategoryCard({ color, borderColor, title, onClick }) {
  return (
    <div
      onClick={() => onClick(title)}
      style={{ backgroundColor: color, borderColor:borderColor }}
      className="size-[150px] flex flex-col justify-between rounded-2xl border-2 cursor-pointer"
    >
      <p className="text-white font-dmsans text-2xl font-medium ml-2 mt-2">
        {title}
      </p>
      <img
        src={image}
        className="w-[130px] rounded-xl mx-auto mb-4"
        alt={title}
      />
    </div>
  );
}
