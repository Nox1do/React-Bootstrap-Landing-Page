import React from "react";

//include images into your bundle


//create your first component
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
       <div class="container-fluid">
  <a class="navbar-brand" href="#">
    <img src="https://pbs.twimg.com/profile_images/1545121384816431104/o7jhodMZ_400x400.jpg" width="30" height="30" class="d-inline-block align-top" alt="foto" />
    4Geeks Academy
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Service</a>
        <a class="nav-link">Contact</a>
        
      </div>
    </div>
    </div>
  
</nav>
	);
};

export default Navbar;