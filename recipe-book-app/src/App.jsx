import './App.css'
import Footer from "./components/footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import RecipeList from "./components/ListRecipes";

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Footer></Footer>
    < RecipeList />
    </>
    
  )
}

export default App
