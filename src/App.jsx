import React from 'react';
import './App.css';
import headerlogo from './assets/header-logo.png';
import avatar from './assets/Gleb.png';
import hometitle from './assets/title.png';
import aboutimgs from './assets/Sills.png';
import group3 from './assets/group3.png';
import porfolito from './assets/porfolito.png';

const App = () => {
  return (
    <div>
      <header>
        <group-1 className="header-logo">
          <img src={headerlogo} className="header-img" />
          <h1 className="header-h1">notitanic</h1>
        </group-1>
        <group-2 className="pages">
          <h1 className="page-h1">Home</h1>
          <h1 className="page-h1">About me</h1>
          <h1 className="page-h1">Portfolio</h1>
          <h1 className="page-h1">Contact</h1>
        </group-2>
      </header>
      <home-page>
        <img src={hometitle} className="home-title" />
        <img src={avatar} className="home-avatar" />
      </home-page>
      <div className="about-me">
        <img src={aboutimgs} className="aboutimgs" />
        <img src={group3} alt="" className="group3" />
      </div>
        <h1 className="porfolito-h1">PORFOLITO</h1>
      <div className="porfolito">
        <div className="porfolito-div">
          <div className="porfolito-img">
            <img src={porfolito} className="porfolitoimg" />
          </div>
          <div className="porfolito-texts">
            <h1 className='porfolito-heading'>Landing Ice-cream</h1>
            <p className="porfolito-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</p>
            <p className="more">More</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="ota1">
          <h1 className="footer-h1">Home</h1>
          <h1 className="footer-h1">About me</h1>
          <h1 className="footer-h1">Porfolito</h1>
          <h1 className="footer-h1">Contact</h1>
        </div>
        <div className="ota2">
          <h1 className="ota2-h1">Contact</h1>
          <h1 className="ota2-h1">Email: notitanic33@gmail.com</h1>
          <h1 className="ota2-h1">Inst: notitanic33</h1>
          <h1 className="ota2-h1">Calls: +7 (900) - 121 - 54 - 54</h1>
        </div>
      </footer>
    </div>
  );
};

export default App;
