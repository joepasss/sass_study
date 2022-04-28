import SideNavbar from './components/sideNavbar/SideNavbar';
import MainNav from './components/mainNav/MainNav';
import Hero from './components/hero/Hero';
import Work from './components/work/Work';
import Aboutme from './components/aboutme/Aboutme';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className='App'>
      <aside id='side-nav'>
        <SideNavbar />
      </aside>

      <main>
        <MainNav />
        <Hero />
        <Work />
        <Aboutme />
        <Services />
        <Skills />
      </main>
    </div>
  );
}

export default App;
