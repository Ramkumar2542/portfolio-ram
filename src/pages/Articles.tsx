import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { CyberButton } from "@/components/ui/cyber-button";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  featured: boolean;
  url: string;
}

const Articles = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: "Mastering Angular 18: Signals, Standalone Components, and More",
      excerpt:
        "A complete guide to Angular 18’s latest features including signals, standalone APIs, and performance improvements.",
      publishedAt: "2024-08-12",
      readTime: "9 min read",
      category: "Angular",
      featured: true,
      url: "https://medium.com/@anaswaratr/mastering-angular-18-a-developers-guide-to-the-latest-game-changing-features-2fde0cb21cee",
    },
    {
      id: 2,
      title:
        "Improving Web Application Performance with Lazy Loading in Angular",
      excerpt:
        "How to implement lazy loading effectively in Angular projects to reduce bundle size and improve initial load performance.",
      publishedAt: "2024-07-30",
      readTime: "7 min read",
      category: "Performance",
      featured: true,
      url:"https://v17.angular.io/guide/lazy-loading-ngmodules"
    },
    {
      id: 3,
      title: "RxJS in Action: Handling Async Data Streams in Angular",
      excerpt:
        "Explore practical use cases of RxJS operators like switchMap, forkJoin, and catchError in Angular applications.",
      publishedAt: "2024-07-20",
      readTime: "10 min read",
      category: "RxJS",
      featured: false,
      url:"https://v17.angular.io/guide/rx-library"
    },
    {
      id: 4,
      title: "Building Accessible Web Applications with Angular",
      excerpt:
        "Learn how to meet accessibility standards (WCAG) in Angular apps using ARIA roles, semantic HTML, and Angular Material components.",
      publishedAt: "2024-07-10",
      readTime: "6 min read",
      category: "Accessibility",
      featured: false,
      url:"https://angular.dev/best-practices/a11y",
    },
    {
      id: 5,
      title: "CI/CD with Jenkins and SonarQube for Angular Projects",
      excerpt:
        "Step-by-step guide to setting up automated pipelines with Jenkins and integrating SonarQube for code quality and security in Angular apps.",
      publishedAt: "2024-06-25",
      readTime: "12 min read",
      category: "DevOps",
      featured: false,
      url:"https://www.jenkins.io/doc/pipeline/steps/sonar/"
    },
    {
      id: 6,
      title:
        "Designing Reusable Angular Components for Enterprise Applications",
      excerpt:
        "Best practices for building reusable, scalable, and maintainable Angular components in enterprise-grade projects.",
      publishedAt: "2024-06-15",
      readTime: "8 min read",
      category: "Best Practices",
      featured: false,
      url:"https://www.angularminds.com/blog/how-to-build-reusable-and-maintainable-angular-components"
    },
  ];

  const categories = [
    "All",
    "React",
    "Web Development",
    "Backend",
    "CSS",
    "Database",
    "3D Development",
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
            Featured Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern web development,
            emerging technologies, and best practices in software engineering.
          </p>
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-primary mb-8 flex items-center">
            <BookOpen className="mr-3" size={24} />
            Featured Posts
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {articles
              .filter((article) => article.featured)
              .map((article) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="group glass rounded-2xl p-8 border border-primary/30 hover:border-primary/60 hover:shadow-glow-primary transition-all duration-500"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary-glow transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <CyberButton
                    variant="cyber"
                    className="group"
                    onClick={() => window.open(article.url, "_blank")}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </CyberButton>
                </motion.article>
              ))}
          </div>
        </motion.div>

        {/* All Articles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-primary mb-8">
            All Articles
          </h2>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                variants={itemVariants}
                className="group glass rounded-xl p-6 border border-border/50 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="px-2 py-1 bg-surface text-muted-foreground text-xs font-medium rounded-full border border-border/50">
                        {article.category}
                      </span>
                      {article.featured && (
                        <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-glow transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:ml-6">
                    <CyberButton variant="ghost" size="sm" className="group"  onClick={() => window.open(article.url, "_blank")}>
                      Read More
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </CyberButton>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <CyberButton variant="neon" size="lg" disabled>
              Load More Articles
            </CyberButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
