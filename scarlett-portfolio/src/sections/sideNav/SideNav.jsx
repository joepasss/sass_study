import './sideNav.scss';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaDribbble,
  FaPinterestP,
} from 'react-icons/fa';

import logo from '../../assets/img/logo-01.jpg';

function SideNav() {
  return (
    <div className='content'>
      <div className='content--logo'>
        <img src={logo} alt='logo' />
      </div>

      <div className='content--social'>
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
      </div>
    </div>
  );
}

export default SideNav;
