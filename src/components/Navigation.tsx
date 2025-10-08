import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Code, Mail, FileText, Award, BookOpen, Github } from "lucide-react";
import { CyberButton } from "@/components/ui/cyber-button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/projects", label: "Projects", icon: Code },
    { path: "/skills", label: "Skills", icon: Award },
    { path: "/articles", label: "Articles", icon: BookOpen },
    { path: "/profiles", label: "Profiles", icon: Github },
    { path: "/resume", label: "Resume", icon: FileText },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="glass border-b border-border/20 px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link to="/" className="text-xl font-bold text-glow-primary">
              RK
            </Link>
            
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-primary shadow-glow-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:shadow-glow-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <Icon size={16} />
                      <span className="hidden lg:inline">{item.label}</span>
                    </span>
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border border-primary/50"
                        layoutId="activeNav"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20 px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg font-bold text-glow-primary">
              Portfolio
            </Link>
            <CyberButton
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </CyberButton>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg"
              onClick={() => setIsOpen(false)}
            >
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed right-0 top-0 h-full w-80 max-w-[80vw] glass border-l border-border/20 p-6 pt-20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                            isActive(item.path)
                              ? "text-primary shadow-glow-primary bg-primary/10 border border-primary/30"
                              : "text-muted-foreground hover:text-primary hover:shadow-glow-primary hover:bg-primary/5"
                          }`}
                        >
                          <Icon size={20} />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;