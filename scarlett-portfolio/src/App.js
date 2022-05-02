<<<<<<< HEAD
import SideNavbar from './components/sideNavbar/SideNavbar';
import MainNav from './components/mainNav/MainNav';
import Hero from './components/hero/Hero';
import Work from './components/work/Work';
import Aboutme from './components/aboutme/Aboutme';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
=======
import './styles/app.scss';

import SideNav from './sections/sideNav/SideNav';
import MainNav from './sections/mainNav/MainNav';
import Hero from './sections/hero/Hero';
import Work from './sections/work/Work';
import Aboutme from './sections/aboutme/Aboutme';
import Services from './sections/services/Services';
import Skills from './sections/skills/Skills';
import Testimonials from './sections/testimonials/Testimonials';
import Contact from './sections/contact/Contact';
>>>>>>> main

function App() {
  return (
    <div className='App'>
      <aside id='side-nav'>
<<<<<<< HEAD
        <SideNavbar />
=======
        <SideNav />
>>>>>>> main
      </aside>

      <main>
        <MainNav />
        <Hero />
        <Work />
        <Aboutme />
        <Services />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
