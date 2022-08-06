import React from 'react';
import { Container } from "reactstrap";
import './header.css'


const navLinks = [
    {
        display:'Home',
        url:'#'
    },
    {
        display:'Events',
        url:'#'
    },{
        display:'Community',
        url:'#'
    },{
        display:'Course',
        url:'#'
    },{
        display:'Blogs',
        url:'#'
    },
];

const Header = () =>
{
  return (
    <Container>
        <div className="navigation">
            <div className="logo">
                <h2><i class="ri-pantone-line"></i>conneXlearn</h2>
            </div>
            <div className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                    {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
                         
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  );
  
};


export default Header;
