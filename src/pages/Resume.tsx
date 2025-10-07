import { motion } from "framer-motion";
import {
  Download,
  Eye,
  FileText,
  Calendar,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { CyberButton } from "@/components/ui/cyber-button";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ramkumar_Eswaran_Profile.pdf"; // file inside public/
    link.download = "Ramkumar_Resume.pdf";
    link.click();

    toast({
      title: "Resume Downloaded!",
      description: "Ramkumar_Resume.pdf has been downloaded to your device.",
    });
  };

  const handlePreview = () => {
    window.open("/Ramkumar_Resume.pdf", "_blank");

    toast({
      title: "Opening Preview",
      description: "Resume preview is opening in a new tab.",
    });
  };

  const experiences = [
    {
      title: "Programmer Analyst",
      company: "Novigo Solutions",
      period: "Oct 2021 – Present",
      location: "Bangalore, India",
      description:
        "Contributing to a Financial Banking Service – Account Opening System project, building scalable and responsive Angular applications.",
      achievements: [
        "Designed and developed a responsive Angular 15-based digital onboarding platform",
        "Built reusable components for digital and branch onboarding workflows",
        "Integrated Salesforce services and automated deployment pipelines via Jenkins",
        "Implemented multi-step forms with validations for identity, funding, and e-signatures",
        "Focused on accessibility compliance and performance tuning",
        "Increased code reusability by 30% using custom modules",
        "Implemented Lazy Loading for modules to enhance application performance",
        "Integrated SonarQube in Jenkins pipeline for code quality and security compliance",
        "Used RxJS operators like switchMap, forkJoin, and catchError for efficient async handling",
      ],
    },
    {
      title: "Software Developer",
      company: "SolutionChamps Technologies",
      period: "Aug 2019 – Oct 2021",
      location: "Coimbatore, India",
      description:
        "Worked on a TeleMedicine Application, developing secure online consultation features with Angular and NestJS.",
      achievements: [
        "Developed a secure medical consultation platform using Angular 9 and NestJS",
        "Implemented role-based authentication for patients and doctors",
        "Created responsive UI components with real-time communication features",
        "Ensured seamless user experience with proper validations and error handling",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Syntorion Software Solutions",
      period: "Aug 2018 – Aug 2019",
      location: "Coimbatore, India",
      description:
        "Supported Angular and JavaScript-based web application development in an Agile team environment.",
      achievements: [
        "Participated in Agile ceremonies, testing, and debugging",
        "Assisted in UI enhancements and performance improvements",
        "Supported development of Angular-based web applications",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Information Technology",
      school:
        "Institute of Road and Transport Technology (IRTT), Erode – Anna University",
      period: "2013 – 2017",
      location: "Tamil Nadu, India",
      description: "Graduated with 69%, specialized in Information Technology.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "K.G.M. Higher Secondary School",
      period: "2011 – 2013",
      location: "Tamil Nadu, India",
      description: "Secured 91% in Higher Secondary studies.",
    },
    {
      degree: "SSLC",
      school: "Government High School",
      period: "2010 – 2011",
      location: "Tamil Nadu, India",
      description: "Achieved 93% in Secondary School studies.",
    },
  ];

  const skills = {
    Frontend: [
      "Angular (2–18)",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "NgRx",
      "Redux",
      "HTML5",
      "SASS",
      "CSS3",
      "Angular Material",
      "PrimeNG",
      "React",
    ],
    Backend: ["REST APIs", "Node.js (Basics)", "NestJS", "Salesforce (Basics)"],
    Tools: ["Git", "GitHub", "SourceTree", "Jenkins"],
    Methodologies: ["Agile", "CI/CD", "Code Quality (SonarQube)"],
    Languages: ["English", "Tamil"],
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-glow-primary mb-4">
            My Resume
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Download my complete resume or preview it online. Get a
            comprehensive overview of my experience, skills, and achievements.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 border border-primary/30 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-500 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-40 bg-surface border-2 border-primary/30 rounded-lg flex items-center justify-center relative overflow-hidden group">
                <FileText className="text-primary" size={40} />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-primary mb-2">
                Ramkumar - Resume
              </h2>
              <p className="text-muted-foreground mb-4">
                Complete professional resume including experience, education,
                skills, and projects.
              </p>
              <div className="text-sm text-muted-foreground mb-6">
                <p>Last updated: March 15, 2024</p>
                <p>Format: PDF | Size: 2.3 MB</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <CyberButton
                  variant="neon"
                  size="lg"
                  onClick={handleDownload}
                  className="group"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
                  Download PDF
                </CyberButton>

                <CyberButton
                  variant="cyber"
                  size="lg"
                  onClick={handlePreview}
                  className="group"
                >
                  <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
                  Preview Online
                </CyberButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resume Content */}
        <div className="space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Ramkumar</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Senior Angular Developer
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>ramkumar@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 7010587804</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Bangalore</span>
              </div>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              Professional Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Skilled Angular Developer with 6+ years of experience building
              responsive, scalable web applications. Proficient in Angular
              (v2–18), TypeScript, and RxJS, with a strong foundation in UI
              design, performance optimization, and REST API integration.
              Experienced in Agile environments, CI/CD pipelines, and
              cross-functional collaboration. Adept at mentoring junior
              developers and delivering high-quality, user-centric solutions.
            </p>
          </motion.section>

          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-6">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="glass rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h4>
                    <div className="text-sm text-muted-foreground flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <p className="text-accent font-medium">{exp.company}</p>
                    <div className="text-sm text-muted-foreground flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">
                      Key Achievements:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-6">
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="glass rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <div className="text-sm text-muted-foreground flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <p className="text-accent font-medium">{edu.school}</p>
                  <div className="text-sm text-muted-foreground flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-6">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="glass rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-surface text-muted-foreground text-sm font-medium rounded-full border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
