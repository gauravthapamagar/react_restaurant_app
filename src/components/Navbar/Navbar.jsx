import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  /**we are adding react state */

  const [toggleMenu,setToggleMenu] = React.useState(false);

  return (
  <nav className = "app__navbar">
    <div className="app__navbar-logo">{/*app=block,navbar=element,logo=modifier*/}
      <img src={images.gericht} alt="app" />
    </div>
    {/**end of div */}
    <ul className="app__navbar-links">
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
    {/**end of div */}
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'>Log In / Register</a>
      <div/>{/**single div*/}
      <a href="/" className='p__opensans'>Book Table</a>
    </div>
    {/**end of div */}
    {/**for small devices using hamburger icon */}
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
      {/**if toggle menu true then only show this to users */}
      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
        <ul className="app__navbar-smallscreen_links">
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#about">About</a></li>
          <li className='p__opensans'><a href="#menu">Menu</a></li>
          <li className='p__opensans'><a href="#awards">Awards</a></li>
          <li className='p__opensans'><a href="#contact">Contact</a></li>
        </ul>
      </div>
      )}
    </div>
  </nav>
  );
};


export default Navbar;
