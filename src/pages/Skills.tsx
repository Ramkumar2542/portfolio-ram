import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Server, Zap } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: any;
  color: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Globe,
      color: "primary",
      skills: [
        { name: "Angular(2-18)", level: 95, category: "frontend" },
        { name: "TypeScript", level: 90, category: "frontend" },
        { name: "JavaScript", level: 85, category: "frontend" },
        { name: "ReactJS", level: 80, category: "frontend" },
        { name: "RxJS", level: 90, category: "frontend" },
        { name: "NgRx", level: 80, category: "frontend" },
        { name: "Redux", level: 80, category: "frontend" },
        { name: "HTML5", level: 90, category: "frontend" },
        { name: "CSS3", level: 90, category: "frontend" },
        { name: "Angular Material", level: 80, category: "frontend" },
        { name: "PrimeNG", level: 80, category: "frontend" }
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "accent",
      skills: [
        { name: "Node.js", level: 90, category: "backend" },
        { name: "NestJS ", level: 85, category: "backend" },
        { name: "Express", level: 80, category: "backend" },
        { name: "RestAPI", level: 85, category: "backend" },
        { name: "Salesforce", level: 50, category: "backend" },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "secondary",
      skills: [
        { name: "PostgreSQL", level: 70, category: "database" },
        { name: "MongoDB", level: 80, category: "database" },
      ],
    },
    {
      title: "Tools & Other",
      icon: Code,
      color: "secondary",
      skills: [
        { name: "Git", level: 95, category: "tools" },
        { name: "VS Code", level: 95, category: "tools" },
        { name: "Figma", level: 80, category: "tools" },
        { name: "Postman", level: 85, category: "tools" },
        { name: "Jenkins", level: 80, category: "tools" },
        { name: "Jira", level: 90, category: "tools" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.165, 0.84, 0.44, 1],
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2,
      },
    }),
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/20",
          text: "text-primary",
          border: "border-primary/50",
          glow: "shadow-glow-primary",
          bar: "bg-primary",
        };
      case "accent":
        return {
          bg: "bg-accent/20",
          text: "text-accent",
          border: "border-accent/50",
          glow: "shadow-glow-accent",
          bar: "bg-accent",
        };
      case "secondary":
        return {
          bg: "bg-secondary/20",
          text: "text-secondary",
          border: "border-secondary/50",
          glow: "shadow-glow-secondary",
          bar: "bg-secondary",
        };
      default:
        return {
          bg: "bg-primary/20",
          text: "text-primary",
          border: "border-primary/50",
          glow: "shadow-glow-primary",
          bar: "bg-primary",
        };
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-glow-primary mb-4">
            My Skills
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains. 
            From frontend frameworks to backend technologies, databases, and development tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);

            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className={`glass rounded-2xl p-6 border ${colorClasses.border} hover:${colorClasses.glow} transition-all duration-500`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center`}>
                    <Icon className={colorClasses.text} size={24} />
                  </div>
                  <h2 className={`text-xl font-semibold ${colorClasses.text}`}>
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-semibold ${colorClasses.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative w-full bg-surface-elevated rounded-full h-2 overflow-hidden">
                        <motion.div
                          variants={skillBarVariants}
                          initial="hidden"
                          animate="visible"
                          custom={skill.level}
                          className={`h-full ${colorClasses.bar} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: "7", label: "Years Experience", color: "primary" },
            { number: "20+", label: "Technologies", color: "accent" },
            { number: "3+", label: "Projects Completed", color: "secondary" },
            { number: "100%", label: "Client Satisfaction", color: "primary" },
          ].map((stat, index) => {
            const colorClasses = getColorClasses(stat.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className={`glass rounded-xl p-6 text-center border ${colorClasses.border} hover:${colorClasses.glow} transition-all duration-300`}
              >
                <div className={`text-3xl font-bold ${colorClasses.text} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;