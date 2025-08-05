import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  return (
    <div className='bg-[#040204] grid grid-rows-[auto_1fr_auto] min-h-screen lg:pt-[73px] lg:px-[75px] xl:px-[90px] font-vazirmatn'>
      <Header />
      <main className='flex gap-[114px]'>
        <NavBar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;