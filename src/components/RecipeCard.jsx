import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
      <img src={recipe.imgUrl} alt={recipe.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{recipe.name}</h2>
      <p className="text-sm text-gray-600">By {recipe.chef}</p>
      <p className="text-yellow-500 font-bold">{recipe.avgRating} ★</p>
      <p className="text-sm text-gray-500">{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
