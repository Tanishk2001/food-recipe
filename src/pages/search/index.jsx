import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function SearchResults() {
  const { recipeList } = useContext(GlobalContext);

  return (
    <div className="min-h-screen bg-blue-400">
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10 text-white">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-white font-extrabold">
              Nothing to show. Please search something else
            </p>
          </div>
        )}
      </div>
    </div>
  );
}