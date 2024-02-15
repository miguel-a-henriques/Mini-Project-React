import banner from "../assets/images/banner.png"
function Navbar (props) {

    //should display the App's name and logo

    return (
        <header id="header" style={{width: "100%", position: "fixed", top: 0, left: 0, padding: "10px 0", display:"flex", justifyContent: "center", alignItems: "center", height: 50, backgroundColor: "orange"}}>
             {/* <img src={banner} alt="app logo" position="fixed" ></img> */} 
            {/* <img src="../assets/banner.png" alt="" /> */}
        </header>
    )
    
}

export default Navbar