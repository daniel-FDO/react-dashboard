import Header from "./components/Header";
import Stat from "./components/Stat";
import Project from "./components/Projects";
import Learningstatus from "./components/Learningstatus";
import { Homepage } from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ProdDetails } from "./pages/ProdDetails";
import { Products } from "./pages/Products";


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        
        <Route path="/Prod/:id" element={<ProdDetails />} />
      </Routes>
    </>
  );
}

export default App;
