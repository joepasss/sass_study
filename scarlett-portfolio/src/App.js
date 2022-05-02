import './styles/app.scss';

import SideNav from './sections/sideNav/SideNav';
import MainNav from './sections/mainNav/MainNav';
import Hero from './sections/hero/Hero';
import Work from './sections/work/Work';
import Aboutme from './sections/aboutme/Aboutme';
import Services from './sections/services/Services';
import Skills from './sections/skills/Skills';
import Testimonials from './sections/testimonials/Testimonials';

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
        <Services />
        <Skills />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
