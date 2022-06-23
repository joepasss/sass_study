import './footer.scss';
import { FaGithub, FaDribbble } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer id='footer'>
      <p>All Rights Reserved. &copy; VLV</p>
      <div className='social'>
        <a href='#!' className='social-link'>
          <FaGithub className='icon' />
        </a>

        <a href='#!' className='social-link'>
          <FaDribbble className='icon' />
        </a>
      </div>
    </footer>
  );
};
