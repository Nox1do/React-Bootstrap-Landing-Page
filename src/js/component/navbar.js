import React from "react";

//include images into your bundle


//create your first component
const Navbar = () => {
	return (
		<nav class="navbar navbar-dark bg-dark ">
  <a class="navbar-brand" href="#">
    <img src="https://pbs.twimg.com/profile_images/1545121384816431104/o7jhodMZ_400x400.jpg" width="30" height="30" class="d-inline-block align-top" alt="foto" />
    4Geeks Academy
  </a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link text-white" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#">Service</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" href="#">Contact</a>
    </li>
    
  </ul>
</nav>
	);
};

export default Navbar;