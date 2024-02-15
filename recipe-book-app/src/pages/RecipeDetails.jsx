import { Link, useParams } from "react-router-dom";
import kcal from "../assets/images/kcal.png";
import servings from "../assets/images/servings.png"
import { useState } from "react";
import recipes from '../recipes.json';

function RecipeDetails() {

    const {recipesId} = useParams();


    const thisRecipe = recipes.find((recipe) =>{
        return recipe.id === recipesId
    })

    const [name,setName] = useState(thisRecipe.name);
    const [calories,setCalories] = useState(thisRecipe.calories);
    const [serving,setServing] = useState(thisRecipe.servings);


    return (
        <section>
            <div>
                {
                thisRecipe ? (
                <div key={thisRecipe.id} style={{margin: 20, border:"2px solid black", padding: 20 }}>
                    <h3>{name}</h3>
                    <img src={thisRecipe.image} alt={name} width={350} height={350} />
                    <h4><img src={kcal} width={20}height={20} /> Calories: {calories} {calories >= 350 && <span style={{backgroundColor: "lightGrey", padding: "5px",borderRadius: 5}}>🔥 High Calories</span>}{calories < 200 && <span style={{backgroundColor: "lightGrey", padding: "5px",borderRadius: 5}}>🥬 Low Calories  </span>}</h4>
                    <h4><img src={servings} width={20}height={20} /> Servings: {serving}</h4>
                    <h2>Edit Recipe</h2>
                    <form>
                        <label>Name</label>
                        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Calories</label>
                        <input type='number' name='calories' value={calories} onChange={(e) => setCalories(e.target.value)} min={0} />
                        <label>Servings</label>
                        <input type='number' name='servings' value={serving} onChange={(e)=> setServing(e.target.value)} min={1} />
                    </form>
                    <Link to="/">
                        <button>Back</button>
                    </Link>
                </div> ) : (<p>No recipe found</p>)
                }
            </div>
        </section>
    )
}

export default RecipeDetails