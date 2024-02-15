import recipes from '../recipes.json';
import { useParams } from 'react-router-dom';
import { useState } from 'react';



function EditRecipe (props) {

    const {recipesId} = useParams();

    const thisRecipe = recipes.find((recipe)=> {
        return recipe.id === recipesId
    })

    const [name,setName] = useState("");
    const [calories,setCalories] = useState("");
    const [servings,setServings] = useState("");

    function handleSubmit(e) {

        e.preventDefault ();

        const editedRecipe = {
            name,
            calories,
            servings
        }

        props.addEditedRecipe(editedRecipe);
        //setId ();
        setName("");
        setCalories("");
        setServings(1);
        //setImage("");

    }

    return (
        <section>
            {thisRecipe && 
                <div key={thisRecipe.id}>
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Calories</label>
                        <input type='number' name='calories' value={calories} onChange={(e) => setCalories(e.target.value)} min={0} />
                        <label>Servings</label>
                        <input type='number' name='servings' value={servings} onChange={(e)=> setServings(e.target.value)} min={1} />
                        <button type='submit'>Edit Recipe</button>
                    </form>
                </div>}
        </section>
    )
}

export default EditRecipe