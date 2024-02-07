
function Sidebar (props) {

    // should contain links to Home and About page
    return (
        <div id="sidebar" style={{height:"100%",position:"fixed", left: 0, overflowX:"hidden", backgroundColor:"red",display:"flex", flexDirection:"column", width:"10%", justifyContent:"flex-start", top: 70}}>
            <h3>Menu</h3>
            <button style={{marginBottom:"5px"}}>Home</button>
            <button style={{marginBottom:"5px"}}>Add Recipe</button>
            <button style={{marginBottom:"5px"}}>About</button>
        </div>
    )
}


export default Sidebar