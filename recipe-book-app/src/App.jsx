import './App.css'
import Footer from "./components/footer";
import Sidebar from './components/sidebar';
import Navbar from "./components/Navbar";
import RecipeList from "./components/ListRecipes";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About"
import Error from './pages/Error';
import RecipeDetails from './pages/RecipeDetails';
import recipes from './recipes.json';

function App() {


  return (
    <><div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Footer></Footer>
    </div>
    <div>
    <Routes>
      <Route path='/' element={<RecipeList />} />
      <Route path="/recipelist" element={<RecipeList />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipelist/:recipesId" element={<RecipeDetails recipes={recipes} />} /> 
      <Route path="*" element={<Error />} />
    </Routes>
    </div>
    </>
    
  )
}

export default App
