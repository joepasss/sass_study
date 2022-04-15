import './mainNav.scss';

function MainNav() {
  return (
    <header id='header'>
      <nav className='header__main-nav'>
        <div className='header__main-nav--hamburger'>
          <div className='line line1'></div>
          <div className='line line2'></div>
          <div className='line line3'></div>
        </div>

        <ul className='header__main--links'>
          <li>
            <a href='#!'>home</a>
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
