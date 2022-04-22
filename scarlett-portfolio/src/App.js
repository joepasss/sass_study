import SideNavbar from './components/sideNavbar/SideNavbar';
import MainNav from './components/mainNav/MainNav';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className='App'>
      <aside id='side-nav'>
        <SideNavbar />
      </aside>

      <main>
        <MainNav />
        <Hero />
      </main>
    </div>
  );
}

export default App;
