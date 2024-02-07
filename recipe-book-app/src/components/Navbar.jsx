
function Navbar (props) {

    //should display the App's name and logo

    return (
        <header id="header" style={{width: "100%", position: "fixed", top: 0, left: 0, padding: "10px 0", backgroundColor: "orange", display:"flex", justifyContent: "center", alignItems: "center", height: 50}}>
            <h1>Recipe Book APP</h1><img src="" alt="app logo"></img>
        </header>
    )
    
}

export default Navbar