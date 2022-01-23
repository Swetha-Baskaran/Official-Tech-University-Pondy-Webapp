import './navbar.css'
import React from "react";
import FirstBar from './first_bar';
import SecondBar from './second_bar';
import ThirdBar from './thirdbar';

const Navbar = () => {
    return <>
             <FirstBar />
             <SecondBar />
             <ThirdBar />
           </>
}

export default Navbar;