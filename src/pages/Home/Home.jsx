import React, { useRef } from 'react';
import './Home.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ReachOut Component
const ReachOut = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jqqfn9q', 'template_pjyxg1p', form.current, 'y-fZwQR7f20KakfWj')
      .then(() => {
        toast.success('Message sent successfully!');
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="reach-out-page">
      <h1>ReachOut Form</h1>
      <p>Feel free to send us a message when you have a project </p>
      <form ref={form} onSubmit={sendEmail} className="reach-out-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

// Home Component
const Home = () => {
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
      description: "A sleek, responsive design protfolio, blending modern aesthetics with a minimalist approach. Perfect for showcasing creative services with a touch of elegance.",
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
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">A developer and more</h1>
          <p className="hero-description">
          With more than a decade of hands-on experience in the tech industry, I’ve grown from modest beginnings, driven by an insatiable passion for learning and a firm belief that "Impossible is Nonsense." Throughout my journey, I’ve embraced challenges as opportunities to innovate and bring creative solutions to life.
            <br /> <br />
            As a Frontend Developer, I specialize in coding SEO standard websites and scalable web apps that align with client's objectives while consistently surpassing their expectations. My expertise lies in creating smooth digital experiences using technologies like JavaScript, React, NextJS, NodeJS, Git & GitHub, EmailJS, CSS, HTML, Photoshop, CorelDraw, WordPress, Canva, and Generative AI.
            <br /> <br />
            Beyond development, my skills extend into the world of design, digital marketing, and IT support technician but my journey doesn’t end there. I am also a dedicated Cyber Warrior, committed to protecting digital environments from evolving threats. Security is always a top priority in every project I undertake.
            <br /> <br />
            My career highlights include collaborations with respected organizations such as the Institute of Industrial Development, Bright Mind Academy, and RLABS in Nigeria. I’ve contributed my expertise to impactful projects across various industries, leaving a lasting impression on every initiative I’ve been part of.
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
      <div className="expertise-categories">
        <div className="category">
          <h2>Frontend Development</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            {/* <li>Tailwind CSS</li> */}
            {/* <li>Next.js</li> */}
            {/* <li>Node.js</li> */}
            <li>Git & GitHub</li>
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
          <h2>Digital Marketing</h2>
          <ul>
            <li>Email Marketing</li>
            <li>Social Media Marketing</li>
            <li>Search Engine Optimization</li>
            <li>FB and IG Ads Setup</li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
        <div className="project-list">
          {projects.map((project, index) => (
            <a href={project.link} key={index} className="project-item" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="read-more">
                  View
                </a>
              </div>
            </a>
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