import { Outlet } from 'react-router';
import { useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
  const location = useLocation();
  const isListingPage = location.pathname === '/cars';

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Navbar />
      <main className="pt-16 sm:pt-20">
        <Outlet />
      </main>
      {!isListingPage && <Footer />}
    </div>
  );
};

export default Root;
