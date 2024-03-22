// Footer.js

import React from 'react';
import './Footer.css';
import {ReactComponent as LogoAlt} from '../assets/images/logoalt.svg';
import {ReactComponent as SocialIcon} from '../assets/images/logos.svg';
import {ReactComponent as FooterSection} from '../assets/images/footersection.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Content for the footer */}
        <div style={{display:'flex', justifyContent: 'space-between', padding: '4px', marginBottom: '15px'}}>
          <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20}}> 
            <LogoAlt/>
            <p>Forum</p>
            <p>Snapshot</p>
          </div>
          {/* <div style={{display:'flex', justifyContent: 'space-between', gap: 20}}> */}
            <SocialIcon/>
          {/* </div> */}
        </div>
        <div style={{padding: '4px', marginBottom: '15px'}}>
            <FooterSection/>
        </div>
        <div style={{display:'flex', justifyContent: 'space-between', padding: '4px'}}>
          <p style={{color: '#ABB7BD'}}>&copy; 2022 Sperax Inc. All rights reserved.</p>
          <div style={{display:'flex', justifyContent: 'space-between', gap: 15, alignItems: 'center'}}>
            <p>Terms of Service</p>
            <div style={{height: '5px', width: '5px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block'}}>

            </div>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
