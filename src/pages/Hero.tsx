import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { CyberButton } from "@/components/ui/cyber-button";
import { Link } from "react-router-dom";
import profile from "@/assets/profile-photo.jpg";

const Hero = () => {
  const achievements = [
    { number: "7", label: "Years Experience" },
    { number: "3", label: "Companies Worked With" },
    { number: "10+", label: "Technologies Mastered" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block text-glow-primary">Ramkumar</span>
                <span className="block text-2xl md:text-3xl text-muted-foreground font-medium">
                  Angular Developer
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Crafting cutting-edge digital experiences with Angular 18 and
                Node.js. Specializing in building immersive, high-performance web
                applications that push the boundaries of modern web development.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 py-6"
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-glow-accent">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <CyberButton variant="neon" size="lg" className="group">
                  Let's Work Together
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </CyberButton>
              </Link>

              <Link to="/resume">
                <CyberButton variant="cyber" size="lg">
                  <Download className="w-4 h-4" />
                  Download Resume
                </CyberButton>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 pt-4"
            >
              <span className="text-muted-foreground text-sm">
                Connect with me:
              </span>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300"
                >
                  <Linkedin size={16} />
                </a>
                <Link
                  to="/contact"
                  className="p-2 rounded-lg bg-surface border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300"
                >
                  <Mail size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: PROFILE PHOTO WITH ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center items-center h-96 lg:h-[500px] order-first lg:order-last"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-glow-pulse" />

            <motion.div
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <motion.img
                src={profile}
                alt="Ramkumar"
                className="w-full h-full object-cover rounded-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
