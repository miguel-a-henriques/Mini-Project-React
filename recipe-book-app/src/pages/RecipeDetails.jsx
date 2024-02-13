import { NavLink, useParams } from "react-router-dom";
import kcal from "../assets/images/kcal.png";
import servings from "../assets/images/servings.png"

function RecipeDetails(props) {

    const {recipesId} = useParams();

    const {recipes} = props;

    const thisRecipe = recipes.find((recipe) =>{
        return recipe.id === recipesId
    })

    return (
        <section>
            <div>
                {
                thisRecipe ? (
                <div key={thisRecipe.id} style={{margin: 20, border:"2px solid black", padding: 50 }}>
                    <h3>{thisRecipe.name}</h3>
                    <img src={thisRecipe.image} alt={thisRecipe.name} width={450} height={400} />
                    <h4><img src={kcal} width={20}height={20} /> Calories: {thisRecipe.calories} {thisRecipe.calories >= 350 && <span style={{backgroundColor: "lightGrey", padding: "5px",borderRadius: 5}}>🔥 High Calories</span>}{thisRecipe.calories < 200 && <span style={{backgroundColor: "lightGrey", padding: "5px",borderRadius: 5}}>🥬 Low Calories  </span>}</h4>
                    <h4><img src={servings} width={20}height={20} /> Servings: {thisRecipe.servings}</h4>
                    <NavLink to="/">
                        <button>Back</button>
                    </NavLink>
                </div> ) : (<p>No recipe found</p>)
                }
            </div>
        </section>
    )
}

export default RecipeDetails