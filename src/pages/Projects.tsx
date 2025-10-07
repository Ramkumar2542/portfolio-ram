import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectEcommerce from "@/assets/working-project.jpg"
import banking from "@/assets/banking.jpg";
import teleMed from "@/assets/telemed.jpeg";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image: string;
}

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Financial Banking Service – Account Opening System",
      description: `Designed and developed a responsive Angular 15-based digital onboarding platform. 
Built reusable components for digital and branch onboarding workflows. 
Integrated Salesforce services and automated deployment pipelines via Jenkins. 
Implemented multi-step forms with validations for identity, funding, and e-signatures. 
Focused on accessibility compliance and performance tuning. 
Increased code reusability by 30% using custom modules. 
Implemented Lazy Loading for modules to enhance application performance and reduce initial load time. 
Integrated SonarQube into Jenkins pipeline to enforce code quality gates, track technical debt, and ensure high code maintainability and security compliance. 
Used RxJS operators like switchMap, forkJoin, and catchError to manage asynchronous calls efficiently and improve responsiveness.`,
      technologies: ["Angular 15", "RxJS", "Salesforce", "Jenkins", "Lazy Loading", "SonarQube"],
      liveUrl: "https://novigo-example.com",
      githubUrl: "https://github.com/yourusername/financial-onboarding",
      featured: true,
      image: banking,
    },
    {
      id: 2,
      title: "TeleMedicine Application",
      description: `Developed a secure online medical consultation platform using Angular 9 and NestJS. 
Implemented role-based authentication for patients and doctors. 
Created responsive UI components and integrated real-time communication features. 
Ensured seamless user interactions through validation and error handling.`,
      technologies: ["Angular 9", "NestJS", "Role-based Auth", "Real-time Communication", "Responsive UI"],
      liveUrl: "https://solutionchamps-example.com",
      githubUrl: "https://github.com/yourusername/telemedicine-app",
      featured: true,
      image: teleMed,
    },
    {
      id: 3,
      title: "Angular & JavaScript Web Applications",
      description: `Supported development of Angular and JavaScript-based web applications. 
Participated in Agile ceremonies, testing, and code debugging. 
Assisted in UI enhancements and performance improvements.`,
      technologies: ["Angular", "JavaScript", "UI Enhancements", "Agile", "Testing", "Debugging"],
      featured: false,
      image: projectEcommerce,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((p) => p.featured)
      : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  function openModal(project: Project) {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setSelectedProject(null);
    document.body.style.overflow = "";
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-primary-glow transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-surface border border-border/50 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 pt-2 border-t border-border/50">
                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center space-x-1 text-sm text-primary hover:text-primary-glow transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Read More</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={closeModal}
        >
          <motion.div
            className="relative w-full max-w-2xl h-[80vh] glass border border-border/50 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable content */}
            <div className="h-full overflow-y-auto">
              <div className="flex flex-col">
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-56 object-cover opacity-90"
                  />
                  <button
                    onClick={closeModal}
                    aria-label="Close"
                    className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/80 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-muted-foreground whitespace-pre-wrap mb-4">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs font-medium bg-surface border border-border/50 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-3 flex-wrap">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-surface border border-border/50 rounded-md"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
