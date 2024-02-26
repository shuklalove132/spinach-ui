import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import WhiteComonent from './Components/WhiteComonent';
import BlackSliderComponent from './Components/BlackSliderComponent';
import BlueComponent from './Components/BlueComponent'
import BlackInfoComponent from './Components/BlackInfoComponent';
import Footer from './Components/Footer';
function App() {


  return (
    <div className="designSysystem">
      <div className='leftVerticalLine'></div>
      <div className='rightVerticalLine'></div>
      <Navbar />
      <div className='heroSection'>
        <div className='heroSectionUpper'>
          <div className='heroSectionUpperContent'>
            <h1 className='heroSectionUpperContentHeading'>Design Systems for scale</h1>
            <p className='heroSectionUpperContentLine'>Add consistency to the scaling up of User Experience with an organized 
            assembly of guidelines, components and documentation.</p>
          </div>
        </div>
        <div className='heroSectionLower'>
     <img className='heroSectionImage'  src='https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Homepage%2FDesign%20System%20Banner%20-%20Web.png?alt=media&token=339e4978-c2c9-4dfe-950b-91ea83041ae5' alt='hero section banner'/>
     </div>
     </div>
     <WhiteComonent/>
     <BlackSliderComponent/>
     <BlueComponent/>
     <BlackInfoComponent/>
     <Footer/>
      </div>
    
  );
}

export default App;
