import './mainNav.scss';

import { useState } from 'react';

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [fade, setFade] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
    if (!fade) {
      setTimeout(setFade(true), 5000);
    } else {
      setFade(false);
    }
  };

  const mainNavList = [
    'home',
    'About',
    'Projects',
    'Services',
    'Hire Me!',
    'Contact',
  ];

  return (
    <header id='header'>
      <nav id='header__main-nav' className={isOpen ? 'open' : ''}>
        <div id='header__main-nav--hamburger' onClick={onClick}>
          <div className='line line1'></div>
          <div className='line line2'></div>
          <div className='line line3'></div>
        </div>

        <ul className='header__main--links'>
          {mainNavList.map((text, idx) => (
            <li key={idx} className={fade ? 'fade' : ''}>
              <a href='#!'>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
