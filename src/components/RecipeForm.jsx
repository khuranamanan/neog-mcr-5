import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

function RecipeForm() {
  const { state, dispatch } = useContext(RecipeContext);

  const handleSaveRecipe = (recipe) => {
    dispatch({ type: "ADD_RECIPE", payload: recipe });
  };

  return (
    <div className="p-3 h-[90vh] overflow-y-scroll">
      <h2 className="text-xl font-bold mb-4">Add/Edit Recipe</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSaveRecipe(state.modalRecipe);
        }}
      >
        <label className="block mb-4">
          Recipe Name
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
            value={state.modalRecipe.name}
            required
            onChange={(event) =>
              dispatch({
                type: "SHOW_MODAL",
                payload: { ...state.modalRecipe, name: event.target.value },
              })
            }
          />
        </label>
        <label className="block mb-4">
          Ingredients
          <textarea
            rows="4"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
            value={state.modalRecipe.ingredients}
            required
            onChange={(event) =>
              dispatch({
                type: "SHOW_MODAL",
                payload: {
                  ...state.modalRecipe,
                  ingredients: event.target.value,
                },
              })
            }
          ></textarea>
        </label>
        <label className="block mb-4">
          Instructions
          <textarea
            rows="4"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
            value={state.modalRecipe.instructions}
            required
            onChange={(event) =>
              dispatch({
                type: "SHOW_MODAL",
                payload: {
                  ...state.modalRecipe,
                  instructions: event.target.value,
                },
              })
            }
          ></textarea>
        </label>
        <label className="block mb-4">
          Cuisine
          <input
            type="text"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
            value={state.modalRecipe.cuisine}
            required
            onChange={(event) =>
              dispatch({
                type: "SHOW_MODAL",
                payload: {
                  ...state.modalRecipe,
                  cuisine: event.target.value,
                },
              })
            }
          />
        </label>
        <label className="block mb-4">
          Image URL
          <input
            type="url"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
            value={state.modalRecipe.image}
            onChange={(event) =>
              dispatch({
                type: "SHOW_MODAL",
                payload: {
                  ...state.modalRecipe,
                  image: event.target.value,
                },
              })
            }
          />
        </label>
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default RecipeForm;
