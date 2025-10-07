import { motion } from "framer-motion";
const About = () => {
  const achievements = [
    { number: "7", label: "Years Experience" },
    { number: "3", label: "Companies Worked With" },
    { number: "10+", label: "Technologies Mastered" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.165, 0.84, 0.44, 1],
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 glass rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-glow-primary">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Skilled Angular Developer with 6+ years of experience building
                responsive, scalable web applications. Proficient in Angular
                (v2–18), TypeScript, and RxJS, with a strong foundation in UI
                design, performance optimization, and REST API integration.
                Experienced in Agile environments, CI/CD pipelines, and
                cross-functional collaboration. Adept at mentoring junior
                developers and delivering high-quality, user-centric solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-surface-elevated rounded-xl border border-border/50">
                <h3 className="font-semibold text-primary mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">
                Angular (2–18), TypeScript, JavaScript, RxJS, NgRx, Redux, HTML5, SASS, CSS3, Angular
                Material, PrimeNG, React.
                </p>
              </div>
              <div className="text-center p-6 bg-surface-elevated rounded-xl border border-border/50">
                <h3 className="font-semibold text-accent mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground">
                REST APIs, Node.js, NestJS, Salesforce, MongoDB.
                </p>
              </div>
              <div className="text-center p-6 bg-surface-elevated rounded-xl border border-border/50">
                <h3 className="font-semibold text-secondary mb-2">Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Docker, AWS, Git, Figma, VS Code, Git, GitHub, SourceTree, Jenkins.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
