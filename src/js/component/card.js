import React from "react";

//include images into your bundle


//create your first component
const Card = () => {
	return (
		<div className="container">
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2019/03/01/18/52/house-4028391__340.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <hr/>
          <button type="button" class="btn btn-dark justify-center">Find out more</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2019/02/25/19/22/brownie-4020342__340.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <hr/>
          <button type="button" class="btn btn-dark justify-center">Find out more</button>
        </div>
        
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2019/03/02/10/10/swan-4029559__340.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <hr/>
          <button type="button" class="btn btn-dark justify-center">Find out more</button>
        </div>
      </div>
    </div>
  </div>
</div>

	);
};

export default Card;