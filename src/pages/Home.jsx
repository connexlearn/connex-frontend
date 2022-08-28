import React, { Fragment } from "react";
import "./home.css";
import "./css/home.css";
import photo from "./images/photo2.webp";
import email from "./images/mail-u.gif";
import conn from "./images/conn.gif";
import photo2 from "./images/photo2.jpeg";
import open from "./images/open.png";
import clock from "./images/clock.gif";
import idea from "./images/idea.gif";
import ideaa from "./images/idea.png";
import mission from "./images/mission.png";
import vision from "./images/vision.png";
import aim from "./images/aim.gif";
import welcome from "./images/wl.gif";
import join from './images/join.webp'

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
          <div className="col-md-6 col-12">
              <h1 className="md:mt-56 mt-20 text-black">
                ConnexLearnHeading
              </h1>
               <p className="mt-1 text-black">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis at ipsa delectus aliquid quidem molestias excepturi
                magnam necessitatibus sunt voluptatum facere fuga, earum nam
                at ipsa delectus aliquid quidem moles
                modi nostrum dolores? Animi, at ipsa delectus aliquid quidem moles libero dignissimos!
               </p>
               <img src={welcome} alt="" className="w-50 " />
              </div>
            <div className="col-md-6 col-12">
              <div className="mt-md-5">
                <img src={photo} alt="" className="float-end" />
                <img src={conn} alt="" className="absolute conn mt-64" />
                <img src={email} alt="" className="mail absolute" />
              </div>
            </div>
          </div>


          <div className="row my-5">
            <div className="col">
              {/* <h1 className="text-dark fw-bold text-decoration-underline d-flex justify-content-center">About Us</h1> */}

              <h3 className="text-black mt-5 ms-md-5 fw-bold">Who are we ?</h3>
              <p className="px-md-5 text-dark fw-semibold">
              We’re a innovators / tech company trying to solve as many problems as possible for users/client
              and constantly delivering EdTech, research based tech solutions on different technologies , free
              events & many more . All in one platform for their overall growth of Manpower. </p>

             <div className="d-md-flex mt-4">
             <div className="card">
                <img src={open} alt="" className="card-icon d-flex justify-content-center" />
                <h5 className="text-dark ps-3">Open source services</h5>
              </div>
              <div className="card">
                <img src={clock} alt="" className="w-50 ml-14 d-flex justify-content-center" />
                <h5 className="text-dark ps-3 ms-3">24 Seven Available</h5>
              </div>

              <div className="card">
                <img src={idea} alt="" className="card-icon d-flex justify-content-center" />
                <h5 className="text-dark ps-3 ms-4 mt-1">Problem Solvers</h5>
              </div>
             </div>
            </div>
          </div>

          {/* mission */}
          <div className="row my-5">
          <h1 className="text-black d-flex justify-content-center fw-bold text-decoration-underline"><img src={mission} className="mission-icon" alt="" /></h1>
            <div className="col-md-7 col-12">
            
              {/* <p className="our_mission">
              With our innovative tools and solutions tailored to empower your business,
              you just need to sit back and see your problems solved, business
              operations accelerated and team productivity boosted.</p> */}
              <p className="text-dark text-bold fs"> <img src={ideaa} className="ideaa" alt="" /> To develop problem solving mindsets in terms of tech problems to all the
                enthusiastic technophile in the most efficient and effective ways. Mentioning above we’re
                </p>
                <p className="text-black fs">Some other missions in technology :&#8594;</p>
                <ul>
                  <li className="text-dark text-semibold fs">○ EdTech</li>
                  <li className="text-dark fs">○ Research on different technologies</li>
                  <li className="text-dark fs">○ Provide Highest return on investment to our clients.</li>
                  <li className="text-dark fs">○ Developing innovative products like web's , software's, Apps .</li>
                </ul>
            </div>
            <div className="col-md-5 col-12">
              <img src={aim} alt=""  className="aim "/>
            </div>
          </div>

          {/* vision */}

          <div className="row">
          <h1 className="text-black d-flex justify-content-center fw-bold text-decoration-underline"><img src={vision} className="mission-icon" alt="" /></h1>
            <div className="col-md-4 col-12">
              <img src={photo2} alt="" className="photo2" />
            </div>

            <div className="col-md-8 col-12 ">
              <p className="text-dark mt-5 fw-bold"><img src={ideaa} className="ideaa" alt="" /> As our slogan is to associate with humans and technology. We're targeting
              manpower's in every sector be associated with technology. To envision, design, and
              construct the most magnificent EdTech , different types of research on different
              technologies with our own vision and produce skill manpower upto our reach .</p>

              <p className="text-dark mt-4 fw-bold">
              Our experience has taught us that to
              provide any solutions, we need creativity and lots of inspired thinking. So, hello Namaste to
              all of you in the field of technical or non-technical background. ConneX Learn is welcoming you
              to join with us to start making new innovative products and learn to grow your skills in one

              </p>
            </div>
          </div>
          {/* join us */}
          <div className="row my-5">
            <div className="col-md-4 col-12">
           <div className="text-black fw-bold mt-40 ml-20">
           <h1 className="fw-bolder">Join Our Team</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam velit rem ipsa deleniti hic?</p>

            <button className="join-btn">Learn More</button>
           </div>
            </div>
            <div className="col-md-8 col-12">
              <img src={join} alt="" className="join" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
