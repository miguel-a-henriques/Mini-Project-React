import { NavLink } from "react-router-dom";
import recipes from "../assets/data/recipes.json";
import { useState } from "react";

function RecipeList() {
    const [recipeList, setRecipeList] = useState(recipes);  
    const removeRecipe = (id) => {
      setRecipeList(recipeList.filter((recipe) => recipe.id !== id));
    }
    return (

          <div style={{alignItems:'center',justifyContent:'center', display: "flex", flexWrap: "wrap", margin: 50}}>
            {recipeList.map((recipe) => (
              <div key={recipe.id} style={{margin: 20, border:"2px solid black", padding: 10 }}>
                <NavLink to={`/recipelist/${recipe.id}`}>
                <h3>{recipe.name}</h3>
                <img src={recipe.image} alt={recipe.name} width={300} height={200} />
                </NavLink>
                <br></br>
                <button onClick={() => removeRecipe(recipe.id)}><img src="src\assets\images\delete.png" width={25}height={25} /></button>
              </div>
            ))}
          </div>

    )
   
}
export default RecipeList
