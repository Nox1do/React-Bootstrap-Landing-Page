//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/navbar.js";
import Jumbotron from "./component/jumbotron.js";
import Card from "./component/card.js";
import Footer from "./component/footer.js"

//render your react application
ReactDOM.render(
    <div>
<Home />,
<Navbar />,
<Jumbotron/>,

<Card/>,
<Footer/>
</div>,
 document.querySelector("#app"));

