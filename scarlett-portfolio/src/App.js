import './styles/app.scss';

import SideNav from './components/sideNav/SideNav.jsx';
import MainNav from './components/mainNav/MainNav';
import Hero from './components/hero/Hero';
import Work from './components/work/Work';
import Aboutme from './components/aboutme/Aboutme';

function App() {
  return (
    <div className='App'>
      <aside id='side-nav'>
        <SideNav />
      </aside>

      <main>
        <MainNav />
        <Hero />
        <Work />
        <Aboutme />
      </main>
    </div>
  );
}

export default App;
