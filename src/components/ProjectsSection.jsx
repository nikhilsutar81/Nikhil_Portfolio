import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SchedRx",
    description: "Full-Stack Saas Doctor Appointment Booking System with Three-Tier Authentication: Patients, Doctors, and Admin",
    image: "/projects/project1.png",
    tags: ["MERN Stack", "TailwindCSS", "Razorpay"],
    demoUrl: "https://schedrx-client.vercel.app/",
  githubUrl: "https://github.com/nikhilsutar81/SchedRx",
  },
  {
    id: 2,
    title: "EternaCart",
    description: "Full-Stack E-Commerce Platform with Secure User Authentication, Product Management, and Payment Integration",
    image: "/projects/project2.png",
    tags: ["MERN Stack", "TailwindCSS", "Stripe"],
    demoUrl: "https://eternacart-client.vercel.app/",
  githubUrl: "https://github.com/nikhilsutar81/EternaCart",
  },
  {
    id: 3,
    title: "LeafyLane",
    description: "Full Stack Grocery Delivery System build using MERN Stack and Tailwind CSS pre-built UI Components and Stripe",
    image: "/projects/project3.png",
    tags: ["MERN Stack", "Tawilwind CSS"],
    demoUrl: "https://leafylane-client.vercel.app/",
  githubUrl: "https://github.com/nikhilsutar81/LeafyLane",
  },
  {
    id: 4,
    title: "Fleet.ai",
    description: "AI SaaS Application - AI Powered tools for Content Generation, Editing and Processing",
    image: "/projects/project4.png",
    tags: ["PERN Stack", "Neon", "Gemini API"],
    demoUrl: "https://fleetai-saas.vercel.app/",
  githubUrl: "https://github.com/nikhilsutar81/Fleet.ai",
  },
  {
    id: 5,
    title: "Bitess",
    description: "Full-Stack Food Ordering and Delivery System with Real-Time Order Tracking and and Efficient Management",
    image: "/projects/project5.png",
    tags: ["MERN Stack", "TailwindCSS", "Stripe"],
    demoUrl: "https://bitess-client.vercel.app/",
  githubUrl: "https://github.com/nikhilsutar81/Bitess",
  },
];


import { useState } from "react";

export const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="w-full aspect-video overflow-hidden cursor-pointer" onClick={() => openModal(project.image)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-black"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full image view */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative">
              <img
                src={modalImage}
                alt="Full Project"
                className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 text-lg font-bold shadow hover:bg-gray-200"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12 flex flex-col items-center gap-4">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/nikhilsutar81"
          >
            Check My Github <ArrowRight size={16} />
          </a>
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="/nikhil_cv.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
