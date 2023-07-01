import { v4 as uuid } from "uuid";
import { initRecipes } from "../data/data";

const storedRecipes = localStorage.getItem("recipes");

if (!storedRecipes) {
  localStorage.setItem("recipes", JSON.stringify(initRecipes));
}

export const initialState = {
  recipes: storedRecipes ? JSON.parse(storedRecipes) : initRecipes,
  searchCategory: "name",
  searchTerm: "",
  showModal: false,
  modalRecipe: {
    id: "",
    name: "",
    ingredients: "",
    instructions: "",
    cuisine: "",
    image: "",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE": {
      const newRecipe = {
        ...action.payload,
        id: uuid(),
      };
      const updatedRecipes = [...state.recipes, newRecipe];
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      return {
        ...state,
        recipes: updatedRecipes,
        showModal: false,
      };
    }

    case "DELETE_RECIPE": {
      const deletedRecipeId = action.payload;
      const filteredRecipes = state.recipes.filter(
        (recipe) => recipe.id !== deletedRecipeId
      );
      localStorage.setItem("recipes", JSON.stringify(filteredRecipes));
      return {
        ...state,
        recipes: filteredRecipes,
      };
    }

    case "SEARCH_CATEGORY":
      return {
        ...state,
        searchCategory: action.payload,
      };
    case "SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: true,
        modalRecipe: action.payload ? action.payload : { ...state.modalRecipe },
      };
    case "HIDE_MODAL":
      return {
        ...state,
        showModal: false,
        modalRecipe: { ...initialState.modalRecipe },
      };
    default:
      return state;
  }
};
