import { useState } from "react";

function AddReceipe(props) {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState(1);
    const [image, setImage] = useState("");


    function handleSubmit(e) {
        // precent default action of form submission (i.e. refresh the page)
        //Why? with the refresh of a page the state values go to original state.
        e.preventDefault();

        const newRecipe = {
            id: Math.random().toString(16).slice(2),
            name,
            calories,
            servings,
            image
        }
        console.log(newRecipe);

        props.addNewRecipe(newRecipe);
        //setId ();
        setName("");
        setCalories("");
        setServings(1);
        setImage("");

    }
    function handleImageUpload(event) {
        const file = event.target.files[0]; // Obtenha o arquivo do evento
        if (file) {
          const reader = new FileReader(); // Crie um leitor de arquivo
          reader.onload = function(e) {
            const imageSrc = e.target.result; // Obtenha o caminho da imagem
            // Faça o que quiser com a URL da imagem, como exibi-la ou enviá-la para o servidor
            console.log("Imagem carregada:", imageSrc); 
          }
          reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
        }
      }


      

    return (
        <section>
            <form onSubmit={handleSubmit}>
                

                <label>Name</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Calories</label>
                <input type="number" name="calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
                <label>Servings</label>
                <input type="number" name="servings" value={servings} onChange={(e) => setServings(e.target.value)} />
                <label>Image</label>
                <input type="file" name="image/*" value={image} onChange={handleImageUpload /* (e) => setImage(e.target.value) */} />
         
                <button type="submit">Add Recipe</button>
            </form>
        </section>       
    )
}

export default AddReceipe