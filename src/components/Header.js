// Header.js

import React from 'react';
import './Header.css';
import {ReactComponent as Logo} from '../assets/images/logo.svg';
import {ReactComponent as Redirect} from '../assets/images/redirect.svg';
import {ReactComponent as More} from '../assets/images/more.svg';
import {ReactComponent as Small} from '../assets/images/smalllogo.svg';
import {ReactComponent as Sun} from '../assets/images/sun.svg';
import {ReactComponent as Dots} from '../assets/images/dots.svg';
import { Button } from 'react-bootstrap';
import '../App.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><div style={{display:'flex', alignItems: 'center', gap: 25}}><Logo/><a href="#home"> Home</a></div></li>
          <li><div style={{display:'flex', alignItems: 'center', gap: 5}}><p style={{color: 'black'}}>Demeter </p><a href="#demeter"><Redirect/></a></div></li>
          <li><a href="#gauge">Gauge</a></li>
          <li><a href="#stake">Stake</a></li>
          <li><a href="#buypack">Buyback</a></li>
          <li><a href="#swap">Swap</a></li>
          <li><a href="#more">More <More/></a></li>
          <li><button>Buy SPA and USDs</button></li>
          <li><Button className='button-white' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, paddingLeft:'3px'}}><Small/> 0 <More/></Button></li>
          <li><button>Connect wallet</button></li>
          <li><a href="#link"><Sun/></a></li>
          <li><a href="link"><Dots/></a></li>

            
        </ul>
      </nav>
    </header>
  );
};

export default Header;
