import { NavLink } from "react-router-dom"


function Sidebar (props) {

    // should contain links to Home and About page
    return (
        <div id="sidebar" style={{height:"100%",position:"fixed", left: 0, overflowX:"hidden",display:"flex", flexDirection:"column", width:"10%", justifyContent:"flex-start", top: 70}}>
            <h3 style={{color:"white"}}>Menu</h3>
            <NavLink to="/">
            <button style={{marginBottom:"5px"}}>Home</button>
            </NavLink>
    
            <NavLink to="/about">
            <button style={{marginBottom:"5px"}}>About</button>
            </NavLink>
        </div>
    )
}


export default Sidebar