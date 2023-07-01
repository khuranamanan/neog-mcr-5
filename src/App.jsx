import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import RecipeDetailCard from "./pages/RecipeDetailCard";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailCard />} />
      </Routes>
    </>
  );
}

export default App;
