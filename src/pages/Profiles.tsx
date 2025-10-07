import { motion } from "framer-motion";
import {
  ExternalLink,
  Trophy,
  Star,
  GitBranch,
  Code,
  Users,
} from "lucide-react";
import { CyberButton } from "@/components/ui/cyber-button";

interface Profile {
  id: number;
  platform: string;
  username: string;
  description: string;
  stats: {
    label: string;
    value: string;
    icon: any;
  }[];
  profileUrl: string;
  color: string;
  verified: boolean;
}

const Profiles = () => {
  const profiles: Profile[] = [
    {
      id: 1,
      platform: "GitHub",
      username: "Ramkumar",
      description:
        "Open source contributor and maintainer. Building the future of web development one commit at a time.",
      stats: [{ label: "Repositories", value: "7", icon: GitBranch }],
      profileUrl: "https://github.com/Ramkumar2542",
      color: "primary",
      verified: true,
    },
    {
      id: 2,
      platform: "LinkedIn",
      username: "ramkumar",
      description:
        "Connecting with professionals and sharing insights on Angular, Node.js, and modern web development practices.",
      stats: [
        { label: "Connections", value: "200+", icon: Users }
      ],
      profileUrl: "https://www.linkedin.com/in/ramkumar-e-1b5160191/",
      color: "accent",
      verified: true,
    },
    {
      id: 3,
      platform: "Personal Website",
      username: "ramkumar.dev",
      description:
        "My digital portfolio showcasing Angular 18 projects, blog posts, and case studies.",
      stats: [
        { label: "Projects", value: "10+", icon: Code },
        { label: "Visitors", value: "2k+", icon: Users },
      ],
      profileUrl: "https://ramkumar.dev",
      color: "accent",
      verified: true,
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          glow: "shadow-glow-primary",
          button: "primary",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          border: "border-accent/30",
          text: "text-accent",
          glow: "shadow-glow-accent",
          button: "accent",
        };
      case "secondary":
        return {
          bg: "bg-secondary/10",
          border: "border-secondary/30",
          text: "text-secondary",
          glow: "shadow-glow-secondary",
          button: "secondary",
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          glow: "shadow-glow-primary",
          button: "primary",
        };
    }
  };

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
            Coding Profiles
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my coding journey across various platforms. From competitive
            programming to open source contributions, here's where you can find
            my work and progress.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {profiles.map((profile, index) => {
            const colorClasses = getColorClasses(profile.color);

            return (
              <motion.div
                key={profile.id}
                variants={itemVariants}
                className={`glass rounded-2xl p-6 border ${colorClasses.border} hover:${colorClasses.glow} transition-all duration-500 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className={`text-xl font-semibold ${colorClasses.text} flex items-center space-x-2`}
                    >
                      <span>{profile.platform}</span>
                      {profile.verified && (
                        <div
                          className={`w-5 h-5 ${colorClasses.bg} rounded-full flex items-center justify-center`}
                        >
                          <svg
                            className={`w-3 h-3 ${colorClasses.text}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </h3>
                    <p className="text-muted-foreground font-mono text-sm">
                      @{profile.username}
                    </p>
                  </div>

                  <CyberButton
                    variant={colorClasses.button as any}
                    size="sm"
                    asChild
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      Visit
                    </a>
                  </CyberButton>
                </div>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {profile.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {profile.stats.map((stat, statIndex) => {
                    const Icon = stat.icon;
                    return (
                      <div key={statIndex} className="text-center">
                        <div
                          className={`w-8 h-8 ${colorClasses.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}
                        >
                          <Icon className={colorClasses.text} size={16} />
                        </div>
                        <div
                          className={`text-lg font-semibold ${colorClasses.text}`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <CyberButton variant="cyber" className="w-full group" asChild>
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </CyberButton>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-primary text-center mb-8">
            Professional Stats
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-glow-primary mb-2">
                18
              </div>
              <div className="text-muted-foreground text-sm">
                Angular Versions Mastered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-glow-accent mb-2">
                50+
              </div>
              <div className="text-muted-foreground text-sm">
                Reusable Components
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-glow-secondary mb-2">
                10+
              </div>
              <div className="text-muted-foreground text-sm">
                Key Integrations (APIs/Services)
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-glow-primary mb-2">3</div>
              <div className="text-muted-foreground text-sm">
                Major Domains (Banking, Healthcare, SaaS)
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-glow-primary mb-2">3</div>
              <div className="text-muted-foreground text-sm">
                Companies Worked
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-glow-primary mb-2">
                100%
              </div>
              <div className="text-muted-foreground text-sm">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-glow-primary mb-2">
                100%
              </div>
              <div className="text-muted-foreground text-sm">
                Delivery Success
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-glow-secondary mb-2">
                5+
              </div>
              <div className="text-muted-foreground text-sm">
                Team Mentorships
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profiles;
