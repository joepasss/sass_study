import './styles/app.scss';

import SideNav from './components/sideNav/SideNav.jsx';

function App() {
  return (
    <div className='App'>
      <aside id='side-nav'>
        <SideNav />
      </aside>
    </div>
  );
}

export default App;
