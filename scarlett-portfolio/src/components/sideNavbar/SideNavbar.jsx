import './sideNavbar.scss';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaDribbble,
  FaPinterestP,
} from 'react-icons/fa';

import logo from '../../assets/img/logo-01.jpg';

// eslint-disable-next-line
function SideNavbar() {
  return (
    <div className='side-nav__content'>
      <div className='side-nav__content--logo'>
        <img src={logo} alt='logo' />
      </div>

      <ul className='side-nav__content--social'>
        <a href='#!'>
          <FaFacebookF className='icon' />
        </a>
        <a href='#!'>
          <FaTwitter className='icon' />
        </a>
        <a href='#!'>
          <FaLinkedinIn className='icon' />
        </a>
        <a href='#!'>
          <FaInstagram className='icon' />
        </a>
        <a href='#!'>
          <FaDribbble className='icon' />
        </a>
        <a href='#!'>
          <FaPinterestP className='icon' />
        </a>
      </ul>
    </div>
  );
}

export default SideNavbar;
