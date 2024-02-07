import github from "../assets/images/github.png"

function Footer (props) {

    // should display the link to the GitHub repository
    return (
        <footer id="footer">
            <a href="https://github.com/miguel-a-henriques/Mini-Project-React">
            <img src={github} alt="GitHub logo"></img>
            </a>
        </footer>
    )
}

export default Footer