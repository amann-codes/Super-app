import React, { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState();
  return (
    <div className="w-[270px] h-[438px] bg-[#F1C75B] rounded-3xl  p-4">
      <p className="text-black font-bold text-xl mb-3">All notes</p>
      <textarea
        type="text"
        className="text-black h-5/6 pr-3 w-full resize-none text-base focus:outline-none bg-[#F1C75B] scrollbar"
        onChange={(e) => {
          setNotes(e.target.value);
          localStorage.setItem('notes', notes)
        }}
      />
    </div>
  );
}
