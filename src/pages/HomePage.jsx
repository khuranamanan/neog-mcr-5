import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeModal from "../components/RecipeModal";
import { AiOutlinePlusCircle } from "react-icons/ai";
import RecipeCard from "../components/RecipeCard";

function HomePage() {
  const { state, dispatch } = useContext(RecipeContext);
  console.log(state);

  const handleSearchTerm = (event) => {
    dispatch({ type: "SEARCH_TERM", payload: event.target.value });
  };

  const handleSearchCategory = (event) => {
    dispatch({ type: "SEARCH_CATEGORY", payload: event.target.value });
  };

  const handleAddRecipe = () => {
    dispatch({ type: "SHOW_MODAL" });
  };

  const sortedRecipes =
    state.searchTerm === ""
      ? state.recipes
      : state.recipes.filter((recipe) => {
          return recipe[state.searchCategory]
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase());
        });

  return (
    <div className="container mx-auto p-2 flex flex-col">
      {/* Search-Filter Box */}
      <div className="overflow-hidden border border-slate-400 rounded-lg w-full flex gap-3 items-center flex-wrap justify-center md:justify-start">
        <div className="w-48 h-10 border md:border-y-0 md:border-l-0 md:border-r border-slate-400">
          <input
            type="text"
            value={state.searchTerm}
            onChange={handleSearchTerm}
            className="h-full  w-full focus:border-none p-1"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-6 items-center">
          <p className="font-bold text-lg">Filters</p>
          <div className="flex gap-8 items-center accent-purple-700">
            <label className="flex gap-3 items-center">
              <input
                type="radio"
                name="searchCategory"
                value="name"
                checked={state.searchCategory === "name"}
                onChange={handleSearchCategory}
              />
              Name
            </label>
            <label className="flex gap-3 items-center">
              <input
                type="radio"
                name="searchCategory"
                value="ingredients"
                checked={state.searchCategory === "ingredients"}
                onChange={handleSearchCategory}
              />
              Ingredients
            </label>
            <label className="flex gap-3 items-center">
              <input
                type="radio"
                name="searchCategory"
                value="cuisine"
                checked={state.searchCategory === "cuisine"}
                onChange={handleSearchCategory}
              />
              Cuisine
            </label>
          </div>
        </div>
      </div>

      {/* Add Recipe Box */}
      {state.showModal && <RecipeModal />}

      <h1 className="font-bold text-2xl">All Recipes:</h1>

      <div className="flex gap-4 flex-wrap items-center">
        {sortedRecipes.length !== 0 ? (
          <div className="flex gap-4 flex-wrap">
            {sortedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p>
            {state.recipes.length !== 0
              ? "No recipes found"
              : "No Recipes. Add One Now"}
          </p>
        )}

        <div className="h-full max-w-[15rem]">
          <button
            className="text-slate-500 cursor-pointer border border-slate-400 rounded-lg h-full w-full p-2 flex justify-center items-center"
            onClick={handleAddRecipe}
          >
            <AiOutlinePlusCircle size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
