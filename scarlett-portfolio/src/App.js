import SideNavbar from './components/sideNavbar/SideNavbar';
import MainNav from './components/mainNav/MainNav';

function App() {
  return (
    <div className='App'>
      <aside id='side-nav'>
        <SideNavbar />
      </aside>

      <main>
        <MainNav />
      </main>
    </div>
  );
}

export default App;
