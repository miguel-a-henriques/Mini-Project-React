import recipes from "../assets/data/recipes.json";
import { useState } from "react";

function RecipeList() {
    const [recipeList, setRecipeList] = useState(recipes);  
    const removeRecipe = (id) => {
      setRecipeList(recipeList.filter((recipe) => recipe.id !== id));
    }
    return (

          <div style={{alignItems:'center',
          justifyContent:'center'}}>
            {recipeList.map((recipe) => (
              <div key={recipe.id}>
                <h3>{recipe.name}</h3>
                <img src={recipe.image} alt={recipe.name} width={300} height={200} />
                <h4><img src="src\assets\images\kcal.png" width={15}height={15} /> Calories: {recipe.calories} {recipe.calories >= 175 && <span> 🔥 Higth Calories</span>}{recipe.calories < 90 && <span> 🥬Low Calories  </span>}</h4>
                <h4><img src="src\assets\images\servings.png" width={15}height={15} /> Servings: {recipe.servings}</h4>
                <button onClick={() => removeRecipe(recipe.id)}><img src="src\assets\images\delete.png" width={25}height={25} /></button>
              </div>
            ))}
          </div>

    )
   
}
export default RecipeList
