import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Adidas Store",
      description: "A demo e-commerce web-app replicating Adidas's shopping experience. Implements React hooks, state management, and modern CSS techniques to deliver a seamless product browsing and checkout flow.",
      image: "/adidas-store.jpg",
      link: "https://adidas-store.vercel.app/"
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
    { id: 2, title: 'Design 2', image: 'emm-fire-birthday.PNG' },
    { id: 3, title: 'Design 3', image: '/tessy-delight.PNG' },
    { id: 4, title: 'Design 4', image: '/international-women-day-design.PNG' },
    { id: 5, title: 'Design 5', image: '/100-days-of-code.webp' },
    { id: 6, title: 'Design 6', image: '/natpheezy-pathetic.PNG' },
    { id: 7, title: 'Design 7', image: '/pablo-trade.PNG' },
    { id: 8, title: 'Design 8', image: '/po-wine.PNG' },
    { id: 9, title: 'Design 9', image: '/fabulous-flyer.png' },
    { id: 10, title: 'Design 10', image: '/hta-podcast.png' },
    { id: 11, title: 'Design 11', image: '/queency-at-cubana.PNG' },
    { id: 12, title: 'Design 12', image: '/grand-opening.png' },
  ];

  const contentCreation = [
    { id: 1, title: 'Video 1', video: '/abson-textile.mp4' },
    { id: 2, title: 'Video 2', video: '/dorime-freestyle.mp4' },
    { id: 3, title: 'Video 3', video: '/grill24.mp4' },
  ];

  return (
    <div className="projects-page">
      {/* Projects Section */}
      <section className="projects-section">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

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
  );
};

export default Projects;