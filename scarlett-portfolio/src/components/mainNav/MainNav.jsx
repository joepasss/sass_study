import './mainNav.scss';
import { useState, useEffect } from 'react';

function MainNav() {
  const [colapse, setColapse] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isFade, setIsFade] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    return () => window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width < 690) {
      setColapse(true);
    }

    if (size.width > 691) {
      setColapse(false);
      setIsOpen(false);
      setIsFade(false);
    }
  }, [size.width, colapse]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsFade(!isOpen);
    }, 250);
  };

  return (
    <header id={!colapse ? 'header' : 'header-colapse'}>
      <nav
        id={!colapse ? 'main-nav' : 'main-nav-colapse'}
        className={isOpen ? 'open' : ''}
      >
        <div id='main-nav--hamburger' onClick={toggleOpen}>
          <div className='line line1'></div>
          <div className='line line2'></div>
          <div className='line line3'></div>
        </div>

        <ul className='main-links'>
          <li className={isFade ? 'fade' : ''}>
            <a href='#!'>HOME</a>
          </li>
          <li className={isFade ? 'fade' : ''}>
            <a href='#!'>About</a>
          </li>
          <li className={isFade ? 'fade' : ''}>
            <a href='#!'>Projects</a>
          </li>
          <li className={isFade ? 'fade' : ''}>
            <a href='#!'>Services</a>
          </li>
          <li className={isFade ? 'fade' : ''}>
            <a href='#!'>Hire Me!</a>
          </li>
          <li className={isFade ? 'fade' : ''}>
            <a href='#!'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
