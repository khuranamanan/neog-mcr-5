import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeForm from "./RecipeForm";

function RecipeModal() {
  const { dispatch } = useContext(RecipeContext);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]"
      onClick={() => dispatch({ type: "HIDE_MODAL" })}
    >
      <div
        className="bg-white border-2 border-solid border-darkerGray rounded-xl overflow-hidden w-[80%] sm:w-[50%] lg:w-[35rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <RecipeForm />
      </div>
    </div>
  );
}

export default RecipeModal;
