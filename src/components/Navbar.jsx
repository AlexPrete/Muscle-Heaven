import logo from './logo.jpg';
import { useState } from 'react';
import { Link } from "react-router-dom";
// creo il componente navbar 
// importo il mio css
import "./Navbar.css";

//importo eventiali altri component
//import Link from "./Link";



function Navbar(){
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
      setIsMenuActive(!isMenuActive)
    };

    return (
    // DIV principale che contiene tutto il mio codice del return, posso usare i FRAMMENTI (fragment) al posto del div, sono dei semplici tag vuoti <>

<nav className="navbar">
  <div className="navbar-container">
      <img className="navbar-logo" src={logo} alt="logo" />
     
     
     
    

    <div className="menu-icon" id="menu-icon"  onClick={toggleMenu}>
      <i className="fas fa-bars"></i>
    </div>

    <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`} id="nav-menu">
      <li className="nav-item">
            <Link to= {`/`} className="nav-links">Home</Link>
      </li>

      <li className="nav-item">
            <Link to= {`/contatti`} className="nav-links">Contatti</Link>
      </li>

      <li className="nav-item">
            <Link to= {`/cards`} className="nav-links">Cards V1</Link>
      </li>
      
      <li className="nav-item">
            <Link to= {`/about`} className="nav-links">About</Link>
      </li>

     

      <li className="nav-item">
            <Link to= {`/cards-children`} className="nav-links">Cards V2</Link>
      </li>
    </ul>
  </div>
</nav>

        // <ul>
        //     <li> 
        //     <Link to= {`/`}>Home</Link>
        //     </li>
        //     <li> 
        //     <Link to= {`/contatti`}>Contatti</Link>
        //     </li>
        //     <li> 
        //     <Link to= {`/about`}>About</Link>
        //     </li>
        //     <li> 
        //     <Link to= {`/cards`}>Cards V1</Link>
        //     </li>
        //     <li> 
        //     <Link to= {`/cards-children`}>Cards V2</Link>
        //     </li>
        // </ul>
    

    );
}
          


//esporto la mia navbar per poterla richiamare altrove (es.app.jsx)
export default Navbar;