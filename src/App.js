import React  from 'react';
import './App.css';
import card_img from './drawers.jpg';
import person_img from './avatar-michelle.jpg';
import icon_share from './icon-share.svg';
import icon_facebook from './icon-facebook.svg';
import icon_twitter from './icon-twitter.svg';
import icon_pinterest from './icon-pinterest.svg';
import { useState } from 'react';
import { ExternalLink } from 'react-external-link';

function App() {

  const [isClick, setIsClick] = useState(true);

  const onClickButton = () => {
    setIsClick(!isClick)
  }

  return (
    <div className="App">
        <div className="container">
            <div className="card">
                  <div className="card-image"> 
                    <img src={card_img} alt="card"></img>
                  </div>
                  <div className='card-content'>
                    <h1> Shift the overall look and feel by adding these wonderful 
  touches to furniture in your home</h1>
                    <p> Ever been in a room and felt like something was missing? Perhaps 
  it felt slightly bare and uninviting. I’ve got some simple tips 
  to help you make any room feel complete.</p>
                   
                   
                   <div className='bottom-content'> 
                    <div className='person'>
                        <img src={person_img} alt='person' className='person-img'></img>
                        <div> <ul> 
                                <li>Michelle Appleton</li>
                                <li>28 Jun 2020</li>
                              </ul>
                        </div>
                  </div>

                  <div className={`share  ${isClick ? 'share-false' : ''}`}> 
                <span> SHARE </span>
              <ExternalLink href="https://facebook.com"> <img src={icon_facebook} alt='icon-facebook'/> </ExternalLink>
              <ExternalLink href="https://twitter.com"> <img src={icon_twitter} alt='icon-twitter'/> </ExternalLink>
              <ExternalLink href="https://pinterest.com"> <img src={icon_pinterest} alt='icon-pinterest'/> </ExternalLink>
          </div>
          <div className={`button ${isClick ? '' : 'button-active'}`} onClick={onClickButton}> <img src={icon_share} alt='share'/></div>
    

                  </div>

                  </div>
                 
            </div>
        </div>
    </div>
  );
}

export default App;

