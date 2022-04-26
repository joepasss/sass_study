import './styles/app.scss';

import SideNav from './components/sideNav/SideNav.jsx';
import MainNav from './components/mainNav/MainNav';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className='App'>
      <aside id='side-nav'>
        <SideNav />
      </aside>

      <main>
        <MainNav />
        <Hero />
      </main>
    </div>
  );
}

export default App;
