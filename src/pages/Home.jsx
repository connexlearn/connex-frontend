import React, { Fragment } from "react";
import "./home.css";
import "./css/home.css";
import photo from "./images/photo2.webp";
import email from "./images/mail-u.gif";
import conn from "./images/conn.gif";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
          <div className="col-md-6 col-12">
              <h1 className="md:mt-56 mt-20">
                ConnexLearnHeading
              </h1>
               <p className="mt-1">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis at ipsa delectus aliquid quidem molestias excepturi
                magnam necessitatibus sunt voluptatum facere fuga, earum nam
                at ipsa delectus aliquid quidem moles
                modi nostrum dolores? Animi, at ipsa delectus aliquid quidem moles libero dignissimos!
               </p>
              </div>
            <div className="col-md-6 col-12">
              <div className="mt-md-5">
                <img src={photo} alt="" className="float-end" />
                <img src={conn} alt="" className="absolute conn mt-64" />
                <img src={email} alt="" className="mail absolute" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
