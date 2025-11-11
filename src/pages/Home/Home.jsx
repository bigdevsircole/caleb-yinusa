import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';
import ReachOut from '../ReachOut/ReachOut.jsx';

// Home Component
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Use hash (/#section) for deep linking
    if (location && location.hash) {
      const id = location.hash.replace('#', '');
      // slight delay to ensure DOM has rendered
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [location]);
  const projects = [
      {
      title: "Adidas Store",
      description: "A demo e-commerce web-app replicating Adidas's shopping experience. Implements React hooks, state management, and modern CSS techniques to deliver a seamless product browsing and checkout flow.",
      image: "/adidas-store.jpg",
      link: "https://adidas-store.vercel.app/"
    },
      {
      title: "Mobile Banking Demo",
      description: "A responsive web-app showcasing a modern mobile banking interface. Built with HTML, JavaScript and native CSS, it features account overviews, transaction history, fund transfers, and a clean, intuitive design for a smooth user experience.",
      image: "/mobile-bank-demo.jpg",
      link: "https://mobile-banking-demo.vercel.app/"
    },
    {
      title: "Design Portfolio",
      description: "A sleek, responsive design portfolio, blending modern aesthetics with a minimalist approach. Perfect for showcasing creative services with a touch of elegance.",
      image: "/design-portfolio.jpg",
      link: "https://caleb-design-portfolio.vercel.app/"
    },
    {
      title: "Project X",
      description: "Project X explores dark and light mode themes with dynamic hero banner slides, blending sleek design and functionality. A hands-on experiment showcasing my ability to create visually engaging, user-friendly web experiences.",
      image: "/project-x-project.jpg",
      link: "https://project-x-plum-omega.vercel.app/"
    },
    {
      title: "QR-Code Generator",
      description: "You can upload your document in JPEG, JPG and PNG format while you input the URL you want the QR-code to redirect. This website will generate a QR-code below the document which can be downloaded for use.",
      image: "/qr_code.png",
      link: "https://qr-code-generator-teal-one.vercel.app/"
    },
    {
      title: "SM Generator",
      description: "Explore my responsive social media credentials generator, crafted with HTML, CSS and Javascript. This site showcases my progress and passion for web development. Perfectly designed for all devices for modern web experiences.",
      image: "/two-passion-one-purpose.jpg",
      link: "https://sm-generator-one.vercel.app/"
    },
    {
      title: "Guess the Number Game",
      description: "Test your intuition with the Guess the Number game! A fun, interactive challenge where you predict the hidden number, blending logic and luck for an engaging, quick-play experience.",
      image: "/guess-the-number-game.jpg",
      link: "https://guess-the-number-game-neon.vercel.app/"
    },
    {
      title: "My First React Work",
      description: "Dive into my first React project, where I harnessed the power of useState and useEffect to create dynamic, interactive components. A foundational step in mastering modern React development.",
      image: "/my-first-react-work.png",
      link: "https://myfirst-react-work.vercel.app/"
    },
    {
      title: "Frontend Aptitude Test",
      description: "Dynamic assessment tool with integrated code editor, automated test runners, and real-time validation. Demonstrates advanced React patterns, state management, and interactive UI design for technical evaluation workflows.",
      image: "/frontend-development.jpg",
      link: "https://cfat.vercel.app/"
    },
    {
      title: "Perfume Card",
      description: "A sleek, responsive perfume card design, blending modern aesthetics with a minimalist approach. Perfect for showcasing products or services with a touch of elegance.",
      image: "/perfume-card.jpg",
      link: "https://perfume-card-psi.vercel.app/"
    },
  ];

  const designs = [
    { id: 1, title: 'Design 1', image: '/dania-exchange.PNG' },
    { id: 2, title: 'Design 2', image: '/full-height-protection.png' },
    { id: 3, title: 'Design 3', image: 'emm-fire-birthday.PNG' },
    { id: 4, title: 'Design 4', image: '/tessy-delight.PNG' },
    { id: 5, title: 'Design 5', image: '/respiratory-protection.png' },
    { id: 6, title: 'Design 6', image: '/fall-arrest-systems.png' },
    { id: 7, title: 'Design 7', image: '/site-hazard-signages.png' },
    { id: 8, title: 'Design 8', image: '/international-women-day-design.PNG' },
    { id: 9, title: 'Design 9', image: '/100-days-of-code.webp' },
    { id: 10, title: 'Design 10', image: '/natpheezy-pathetic.PNG' },
    { id: 11, title: 'Design 11', image: '/pablo-trade.PNG' },
    { id: 12, title: 'Design 12', image: '/po-wine.PNG' },
    { id: 13, title: 'Design 13', image: '/fabulous-flyer.png' },
    { id: 14, title: 'Design 14', image: '/hta-podcast.png' },
    { id: 15, title: 'Design 15', image: '/queency-at-cubana.PNG' },
    { id: 16, title: 'Design 16', image: '/grand-opening.png' },
    { id: 17, title: 'Design 17', image: '/first-aid-kit-flyer.png' },
    { id: 18, title: 'Design 18', image: '/hse-document-audit.png' },
    { id: 19, title: 'Design 19', image: '/welding-ppe.png' },
    { id: 20, title: 'Design 20', image: '/gas-leakages.png' },
    // { id: 21, title: 'Design 21', image: '/confined_space-safety.png' },
    { id: 22, title: 'Design 22', image: '/reflective-jacket.png' },
  ];

  const contentCreation = [
    { id: 1, title: 'Video 1', video: '/abson-textile.mp4' },
    { id: 2, title: 'Video 2', video: '/dorime-freestyle.mp4' },
    { id: 3, title: 'Video 3', video: '/grill24.mp4' },
  ];

  return (
    <div id="home" className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">A Developer & More</h1>
          <p className="hero-description">
          With over 10 years of experience in the tech industry, I've dedicated my career to helping businesses and individuals leverage technology to achieve their goals.
            <br /> <br />
            As a Frontend Developer, I specialize in coding SEO standard websites and scalable web apps that align with client's objectives while consistently surpassing their expectations.
            <br /> <br />
            Beyond development, I am also a dedicated Cyber Warrior, committed to protecting digital environments from evolving threats. Security is always a top priority in every project I undertake.
            <br /> <br />
            I believe in building long-term relationships with my clients, providing not just services but sustainable solutions that grow with their businesses.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/+2348180402086" target="_blank" rel="noopener noreferrer" className="hire-me-button">
              Hire Me
            </a>
            <a href="/Caleb Yinusa CV 2025.pdf" download className="view-cv-button">
              View CV
            </a>
          </div>
        </div >
        <div className='glowing-border'>
          <img src="/caleb-yinusa-photo.png" alt="Caleb Yinusa" className="hero-image" />
        </div>
      </div>


  {/* Expertise Section */}
  <div id="expertise" className="expertise-categories">
        <div className="category">
          <h2>Web Development</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>WordPress</li>
            <li>React</li>
          </ul>
        </div>

        <div className="category">
          <h2>Design</h2>
          <ul>
            <li>Photoshop</li>
            <li>CorelDraw</li>
            <li>Canva</li>
            <li>Generative AI</li>
          </ul>
        </div>

        <div className="category">
          <h2>Other Services</h2>
          <ul>
            <li>Facebook & Instagram Ads</li>
            <li>Content Creation</li>
            <li>Video Editing</li>
            <li>Coding Class</li>
          </ul>
        </div>
      </div>

  {/* Projects Section */}
  <div id="projects" className="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
        <div className="project-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item"
              style={{ backgroundImage: `url(${project.image})` }}
              role="link"
              tabIndex={0}
              onClick={() => window.open(project.link, '_blank', 'noopener')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(project.link, '_blank', 'noopener');
                }
              }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="read-more">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Designs Section */}
      <section className="designs-section">
        <h1>Designs</h1>
        <div className="designs-grid">
          {designs.map((design) => (
            <div key={design.id} className="design-card">
              <img src={design.image} alt={design.title} />
            </div>
          ))}
        </div>
      </section>

      {/* Content Creation Section */}
      <section className="content-creation-section">
        <h1>Content Creation</h1>
        <div className="content-grid">
          {contentCreation.map((content) => (
            <div key={content.id} className="content-card">
              <video controls>
                <source src={content.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>

      </div>

      {/* ReachOut Form Section */}
      <ReachOut />
    </div>
  );
};

export default Home;