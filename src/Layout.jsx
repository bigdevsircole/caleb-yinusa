import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;