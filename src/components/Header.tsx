
// function Header(){

import { Link } from "react-router-dom";

// }
const Header = () => {
  return (
    <header>
      <h2>React Developer Dashboard</h2>
      
      <nav>
        <Link to={"/"} id="H1">Home</Link>
        <Link to={"/about"} id="H1">About</Link>
        <Link to={"/contact"} id="H1">Contact</Link>
        <Link to={"/products"} id="H1">Products</Link>

        {/* <a href="https://www.npmjs.com/package/react-router-dom" target="_blank" >ext</a> */}

      </nav>
    </header>
  );
}

export default Header; 