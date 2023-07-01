/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router";

function RecipeCard({ recipe }) {
  const { dispatch } = useContext(RecipeContext);
  const { id, name, cuisine, image } = recipe;
  const imageUrl = image || "https://picsum.photos/200";
  const navigate = useNavigate();

  const handlerecipeDetailNavigation = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleDeleteRecipe = (id) => {
    dispatch({ type: "DELETE_RECIPE", payload: id });
  };

  return (
    <div className="relative bg-white max-w-[15rem] shadow-lg p-4 rounded-lg flex flex-col gap-4">
      <div className="w-full aspect-square  overflow-hidden">
        <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
      </div>

      <h2 className="text-lg font-semibold">{name}</h2>

      <p className="text-black flex justify-between">
        <span className="font-semibold">Cuisine: </span>
        {cuisine}
      </p>

      <div className="text-black flex justify-between text-sm">
        <span className="font-semibold">Ingredients: </span>
        <button
          className="flex items-center text-purple-700 font-semibold"
          onClick={() => handlerecipeDetailNavigation(id)}
        >
          See Recipe
          <BsChevronRight className="ml-1" size={18} />
        </button>
      </div>

      <div className="text-black flex justify-between text-sm">
        <span className="font-semibold">Instructions: </span>
        <button
          className="flex items-center text-purple-700 font-semibold"
          onClick={() => handlerecipeDetailNavigation(id)}
        >
          See Recipe
          <BsChevronRight className="ml-1" size={18} />
        </button>
      </div>

      <div className="bg-white p-2 absolute top-0 right-0">
        <button
          className="p-1  cursor-pointer"
          onClick={() => handleDeleteRecipe(id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
