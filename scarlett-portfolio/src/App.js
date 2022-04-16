import './styles/app.scss';

import SideNav from './components/sideNav/SideNav.jsx';
import MainNav from './components/mainNav/MainNav';

function App() {
  return (
    <div className='App'>
      <aside id='side-nav'>
        <SideNav />
      </aside>

      <main>
        <MainNav />
      </main>
    </div>
  );
}

export default App;
