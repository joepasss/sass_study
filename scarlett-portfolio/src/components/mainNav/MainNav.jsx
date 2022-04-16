import './mainNav.scss';

function MainNav() {
  return (
    <header id='header'>
      <nav className='main-nav'>
        <div className='main-nav--hamburger'>
          <div className='line line1'></div>
          <div className='line line2'></div>
          <div className='line line3'></div>
        </div>

        <ul className='main-links'>
          <li>
            <a href='#!'>HOME</a>
          </li>
          <li>
            <a href='#!'>About</a>
          </li>
          <li>
            <a href='#!'>Projects</a>
          </li>
          <li>
            <a href='#!'>Services</a>
          </li>
          <li>
            <a href='#!'>Hire Me!</a>
          </li>
          <li>
            <a href='#!'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
