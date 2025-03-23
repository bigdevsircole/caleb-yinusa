import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-icons">
        <a href="https://x.com/calebyinusaa" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/calebyinusa/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/caleb-yinusa-3ab3442b4/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Caleb Yinusa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;