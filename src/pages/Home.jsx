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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card'


const Home = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <Row>
            <Col md={6} style={{paddingTop:'10%'}}>
              <h2 className="heading" style={{paddingBottom:"20px"}}> ConnexLearnHeading</h2>
              <p style={{color:'black'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis at ipsa delectus aliquid quidem molestias excepturi
                magnam necessitatibus sunt voluptatum facere fuga, earum nam
                at ipsa delectus aliquid quidem moles
                modi nostrum dolores? Animi, at ipsa delectus aliquid quidem moles libero dignissimos!
              </p>
              <img src={welcome} alt="" className="wel" />
            </Col>
            <Col md={6}>
              <img src={photo} alt="" className="float-end" />
              <img src={conn} alt="" className="absolute conn mt-64" />
              <img src={email} alt="" className="mail absolute" />
            </Col>
          </Row>
        
        <div style={{marginTop: '100px'}}>

          <div>
            <h2 className=" fw-bold" style={{display:'flex', justifyContent:'center', paddingBottom:"20px"}}>Who <spam style={{color:'black', paddingLeft:'8px'}}> are we ?</spam></h2>
              <p className=" text-dark ">
              We’re a innovators / tech company trying to solve as many problems as possible for users/client
              and constantly delivering EdTech, research based tech solutions on different technologies , free
              events & many more . All in one platform for their overall growth of Manpower. </p>
          </div>

          <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-evenly' , marginTop:'50px'}}>

            <Card className="card"style={{marginBottom:'30px'}}>
              <img src={open} alt="" className="card-icon" style={{width:'130px', display:'block', margin:'auto',paddingTop:'20px'}} />
              <h5 className="text-dark" style={{display:'flex', justifyContent:'center', paddingTop:'20px',paddingBottom:'20px'}}>Open source services</h5>
            </Card>

            <Card className="card" style={{marginBottom:'30px'}}>
              <img src={clock} alt="" style={{width:'130px', display:'block', margin:'auto',paddingTop:'20px'}} />
              <h5 className="text-dark" style={{display:'flex', justifyContent:'center', paddingTop:'20px',paddingBottom:'20px'}}>24 Seven Available</h5>
            </Card>

            <Card className="card" style={{marginBottom:'30px'}}>
                <img src={idea} alt=""  style={{width:'100px', display:'block', margin:'auto',paddingTop:'20px'}} />
                <h5 className="text-dark" style={{display:'flex', justifyContent:'center', paddingBottom:'20px'}}>Problem Solvers</h5>
            </Card>
          </div>
        </div>


          {/* mission */}
          <div className="row my-5">
            <h1 className="text-black d-flex justify-content-center fw-bold text-decoration-underline"><img src={mission} className="mission-icon" alt="" /></h1>
            <p className="our_mission">
              With our innovative tools and solutions tailored to empower your business,
              you just need to sit back and see your problems solved, business
              operations accelerated and team productivity boosted.
            </p>

          <div className="col-md-7 col-12" style={{marginTop:'6%'}}s >
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
            <div className="col-md-5 col-12" style={{marginTop:'4%'}}>
              <img src={aim} alt=""  className="aim "/>
            </div>
          </div>



          {/* vision */}
          <div className="row">
          <h1 className="text-black d-flex justify-content-center fw-bold text-decoration-underline"><img src={vision} className="mission-icon" alt="" style={{marginBottom:'50px'}}/></h1>
            <div className="col-md-4" >
              <img src={photo2} alt=""  style={{height:"300px"}} className="imgvision"/>
            </div>

            <div className="col-md-8 col-12 " style={{paddingTop:'2%'}}>
              <p className="text-dark mt-5"><img src={ideaa} className="ideaa" alt=""  /> As our slogan is to associate with humans and technology. We're targeting
              manpower's in every sector be associated with technology. To envision, design, and
              construct the most magnificent EdTech , different types of research on different
              technologies with our own vision and produce skill manpower upto our reach .</p>

              <p className="text-dark mt-2 ">
              Our experience has taught us that to
              provide any solutions, we need creativity and lots of inspired thinking. So, hello Namaste to
              all of you in the field of technical or non-technical background. ConneX Learn is welcoming you
              to join with us to start making new innovative products and learn to grow your skills in one

              </p>
            </div>
          </div>


          
          {/* join us */}
          <div className="row my-5" style={{marginTop:'3px'}}>
          <div className="col-md-4 col-12">
            <div className="text-black fw-bold joinst">
              <h1 className="fw-bolder" style={{display:'flex', justifyContent:'center'}}>Join Our Team</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam velit rem ipsa deleniti hic?</p>
              <div style={{display:'flex', justifyContent:'center'}}>
                <button className="join-btn">Learn More</button>
              </div>
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
