import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    {/**background is because of app__bg which has its own css properties defined in app.css */}
    {/**declaring app__bg towards main div allows us to have the same bg throughout the whole aboutus component */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="gletter" />
    </div>
    {/**now below this div for left side ie for all about us contents */}
    <div className="app__aboutus-content flex__center">
      {/**for left */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img' />
        <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type='button' className='custom__button'>No More</button>
      </div>
      {/**for middle image */}
      <div className="app__aboutus-content_knife flexcenter">
        <img src={images.knife} alt="knife" />
      </div>
      {/**for right our history */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img' />
        <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type='button' className='custom__button'>No More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
