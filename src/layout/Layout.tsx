import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <NavBar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;