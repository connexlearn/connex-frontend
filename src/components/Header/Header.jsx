import React, {useState} from 'react';
import { Container } from "reactstrap";
import './header.css'




const Header = () =>
{

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

  let [open,setOpen]=useState(false);

  return (
    <header className='header'>
    <Container>
        <div className="navigation d-flex align-items-center ">
            <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> ConnexLearn.
            </h2>
            </div>
            
            <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden ">
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>

            <div className="nav">
                <div className="nav_menu">
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 md:mt-0 mt-1 absolute  md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                     transition-all-duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px] '} `}>
                    {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}  className="text">{item.display} </a>
                  </li>
                ))}

                <li>
                <button className='btn d-flex d-md-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg> <span className='ms-1'>My Account</span></button>
                </li>
              
                    </ul>
                </div>
            </div>
           <div className="my_account">
           <button className='btn d-flex text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg> <span className='ms-1'>My Account</span></button>
           </div>
        </div>
    </Container>
    </header>
  );
  
};


export default Header;