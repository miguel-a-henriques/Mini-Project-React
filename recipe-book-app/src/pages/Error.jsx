import { Link } from "react-router-dom";

function Error() {

    return (
        <section>
            <h2>We can't seem to find the recipe you're looking for.</h2>
            <Link to="/">Go back to All Recipes</Link>
        </section>
    )
}

export default Error