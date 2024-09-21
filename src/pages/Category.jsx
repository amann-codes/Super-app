import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import image from "../components/image.png";

export default function Category() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedCategories =
      JSON.parse(localStorage.getItem("selectedCategories")) || [];
    setSelectedCategories(storedCategories);
  }, []);

  const selectCategory = (title) => {
    if (!selectedCategories.includes(title)) {
      const updatedCategories = [...selectedCategories, title];
      setSelectedCategories(updatedCategories);

      // Reset error message if 3 or more categories are selected
      if (updatedCategories.length >= 3) {
        setError("");
      }
    }
  };

  const removeCategory = (title) => {
    const updatedCategories = selectedCategories.filter(
      (category) => category !== title
    );
    setSelectedCategories(updatedCategories);

    // Reset error message if fewer than 3 categories are selected
    if (updatedCategories.length < 3) {
      setError("Minimum 3 categories required to proceed.");
    }
  };

  const handleNextPage = () => {
    if (selectedCategories.length < 3) {
      setError("Minimum 3 categories required to proceed.");
    } else {
      // Store in local storage and proceed to the next page
      localStorage.setItem(
        "selectedCategories",
        JSON.stringify(selectedCategories)
      );
      // Redirect logic goes here (e.g., using react-router)
    }
  };

  return (
    <div className="flex flex-col justify-between w-screen h-screen bg-black">
      <div className="flex flex-row justify-between w-screen h-screen">
        <div className="flex flex-col justify-start mx-auto my-auto">
          <img src={image} className="w-[200px]" alt="Category" />
          <p className="text-5xl w-1/2 leading-[60px] whitespace-wrap text-white font-dmsans mt-5">
            Choose your entertainment category
          </p>
          <div className="mt-4 flex flex-wrap gap-4 w-[400px]">
            {selectedCategories.length > 0 ? (
              selectedCategories.map((category) => (
                <li
                  key={category}
                  className="flex justify-between w-max items-center text-white text-lg bg-[#148A08] p-2 rounded-3xl mt-2"
                >
                  {category}
                  <button
                    className="ml-3 text-[#085C00]"
                    onClick={() => removeCategory(category)}
                  >
                    ✕
                  </button>
                </li>
              ))
            ) : (
              <p className="text-white mt-2">No categories selected yet.</p>
            )}
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="grid grid-cols-3 gap-6 mx-auto my-auto">
          <CategoryCard
            color={"#FF5209"}
            title={"Action"}
            borderColor={"#11B800"}
            onClick={selectCategory}
          />
          <CategoryCard
            color={"#D7A4FF"}
            title={"Drama"}
            borderColor={"#11B800"}
            onClick={selectCategory}
          />
          <CategoryCard
            color={"#148A08"}
            title={"Romance"}
            borderColor={"none"}
            onClick={selectCategory}
          />
          <CategoryCard
            color={"#84C2FF"}
            title={"Thriller"}
            borderColor={"#11B800"}
            onClick={selectCategory}
          />
          <CategoryCard
            color={"#902500"}
            title={"Western"}
            borderColor={"#11B800"}
            onClick={selectCategory}
          />
          <CategoryCard
            color={"#7358FF"}
            title={"Horror"}
            borderColor={"#11B800"}
            onClick={selectCategory}
          />
          <CategoryCard
            color={"#FF4ADE"}
            title={"Fantasy"}
            borderColor={"#11B800"}
            onClick={selectCategory}
          />
          <CategoryCard
            color={"#E61E32"}
            title={"Music"}
            borderColor={"#11B800"}
            onClick={selectCategory}
          />
          <CategoryCard
            color={"#6CD061"}
            title={"Fiction"}
            borderColor={"#11B800"}
            onClick={selectCategory}
          />
        </div>
      </div>
      <div className="flex justify-end my-auto mr-[72px] pb-5">
        <button
          className="bg-[#148A08] text-white font-dmsans font-medium rounded-full w-max py-2 px-3"
          onClick={handleNextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
