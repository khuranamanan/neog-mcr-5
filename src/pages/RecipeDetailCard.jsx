import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { RecipeContext } from "../context/RecipeContext";
import { AiOutlineArrowLeft } from "react-icons/ai";

function RecipeDetailCard() {
  const { id } = useParams();
  const { state } = useContext(RecipeContext);
  const navigate = useNavigate();

  const recipe = state.recipes.find((recipe) => recipe.id === id);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <div className="w-fit self-start">
        <button
          className="p-2 bg-purple-700 hover:bg-purple-500 rounded-full text-white cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <AiOutlineArrowLeft />
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-center lg:text-left">
        {recipe.name}
      </h1>
      <div className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-lg overflow-hidden p-3">
        <div className="lg:w-1/3">
          <img
            src={recipe.image || "https://picsum.photos/200"}
            alt={recipe.name}
            className="object-cover object-center w-full aspect-square"
          />
        </div>
        <div className="flex flex-col justify-center lg:w-2/3 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
            <p>{recipe.ingredients}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
            <p>{recipe.instructions}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Cuisine:</h3>
            <p>{recipe.cuisine}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailCard;
