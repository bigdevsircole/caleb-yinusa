import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Expertise from './pages/Expertise/Expertise';
import Projects from './pages/Projects/Projects';
import ReachOut from './pages/ReachOut/ReachOut';
import { Analytics } from "@vercel/analytics/react"
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reachout" element={<ReachOut />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;