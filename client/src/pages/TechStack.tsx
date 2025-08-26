import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Cloud, 
  Shield,
  Zap,
  Layers,
  Gavel,
  Cpu
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function TechStack() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [stackRef, stackInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const techCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8 text-premium" />,
      description: "Modern, responsive user interfaces",
      technologies: [
        { name: "React", icon: "⚛️", description: "Component-based UI library" },
        { name: "TypeScript", icon: "🔷", description: "Type-safe JavaScript" },
        { name: "Next.js", icon: "▲", description: "Full-stack React framework" },
        { name: "Vue.js", icon: "💚", description: "Progressive framework" },
        { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework" },
        { name: "Framer Motion", icon: "🎭", description: "Animation library" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-terracotta" />,
      description: "Scalable server-side solutions",
      technologies: [
        { name: "Node.js", icon: "💚", description: "JavaScript runtime" },
        { name: "Express.js", icon: "🚀", description: "Web application framework" },
        { name: "Python", icon: "🐍", description: "Versatile programming language" },
        { name: "Django", icon: "🎯", description: "High-level Python framework" },
        { name: "FastAPI", icon: "⚡", description: "Modern Python API framework" },
        { name: "GraphQL", icon: "🔗", description: "Query language for APIs" }
      ]
    },
    {
      title: "Database Solutions",
      icon: <Database className="w-8 h-8 text-amber" />,
      description: "Robust data storage and management",
      technologies: [
        { name: "PostgreSQL", icon: "🐘", description: "Advanced relational database" },
        { name: "MongoDB", icon: "🍃", description: "NoSQL document database" },
        { name: "MySQL", icon: "🐬", description: "Popular relational database" },
        { name: "Redis", icon: "📦", description: "In-memory data structure store" },
        { name: "Supabase", icon: "⚡", description: "Open source Firebase alternative" },
        { name: "Prisma", icon: "🔶", description: "Next-generation ORM" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8 text-premium" />,
      description: "Cross-platform mobile applications",
      technologies: [
        { name: "React Native", icon: "📱", description: "Cross-platform mobile apps" },
        { name: "Flutter", icon: "🦋", description: "UI toolkit by Google" },
        { name: "Expo", icon: "🎪", description: "React Native development platform" },
        { name: "Swift", icon: "🍎", description: "iOS native development" },
        { name: "Kotlin", icon: "🤖", description: "Android native development" },
        { name: "Ionic", icon: "⚡", description: "Hybrid mobile apps" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-terracotta" />,
      description: "Scalable cloud infrastructure",
      technologies: [
        { name: "AWS", icon: "☁️", description: "Amazon Web Services" },
        { name: "Azure", icon: "🌐", description: "Microsoft cloud platform" },
        { name: "Docker", icon: "🐳", description: "Containerization platform" },
        { name: "Kubernetes", icon: "⚙️", description: "Container orchestration" },
        { name: "Vercel", icon: "▲", description: "Frontend deployment platform" },
        { name: "Netlify", icon: "🌐", description: "Web development platform" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="w-8 h-8 text-amber" />,
      description: "Intelligent solutions and automation",
      technologies: [
        { name: "OpenAI API", icon: "🤖", description: "GPT and AI models" },
        { name: "TensorFlow", icon: "🧠", description: "Machine learning framework" },
        { name: "PyTorch", icon: "🔥", description: "Deep learning framework" },
        { name: "LangChain", icon: "🔗", description: "LLM application framework" },
        { name: "Hugging Face", icon: "🤗", description: "ML model hub" },
        { name: "Pinecone", icon: "🌲", description: "Vector database" }
      ]
    }
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-16 px-6" ref={heroRef}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-text-primary leading-tight mb-6">
              Our <span className="text-terracotta">Tech Stack</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto mb-8">
              Cutting-edge technologies and frameworks that power modern, scalable, and performant digital products. We stay ahead of the curve to deliver the best solutions.
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-light text-premium">50+</span>
                <span className="text-text-secondary">Technologies Mastered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-light text-terracotta">6</span>
                <span className="text-text-secondary">Core Specializations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 px-6 bg-white" ref={stackRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={stackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light text-text-primary mb-4">
              Technologies We <span className="text-terracotta">Master</span>
            </h2>
            <p className="text-xl text-text-secondary">Building with the right tools for maximum impact and scalability</p>
          </motion.div>
          
          <div className="space-y-16">
            {techCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="tech-category"
                initial={{ opacity: 0, y: 40 }}
                animate={stackInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                data-testid={`tech-category-${categoryIndex}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  {category.icon}
                  <div>
                    <h3 className="text-3xl font-light text-text-primary">{category.title}</h3>
                    <p className="text-text-secondary">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div 
                      key={techIndex}
                      className="tech-item group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={stackInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (techIndex * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                      data-testid={`tech-item-${categoryIndex}-${techIndex}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{tech.icon}</div>
                        <div>
                          <h4 className="text-lg font-medium text-text-primary group-hover:text-terracotta transition-colors duration-200">
                            {tech.name}
                          </h4>
                          <p className="text-text-secondary text-sm">{tech.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Stack Section */}
      <section className="py-20 px-6 bg-warm-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-text-primary">
                Why Our <span className="text-terracotta">Tech Stack</span> Matters
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our carefully curated technology stack ensures your product is built for performance, scalability, and maintainability from day one.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    icon: <Zap className="w-6 h-6 text-premium" />,
                    title: "Performance First",
                    description: "Optimized for speed and user experience"
                  },
                  {
                    icon: <Layers className="w-6 h-6 text-terracotta" />,
                    title: "Scalable Architecture",
                    description: "Built to grow with your business needs"
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-amber" />,
                    title: "Security Focused",
                    description: "Enterprise-grade security best practices"
                  },
                  {
                    icon: <Gavel className="w-6 h-6 text-premium" />,
                    title: "Developer Experience",
                    description: "Maintainable and extensible codebases"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {benefit.icon}
                    <div>
                      <h4 className="text-lg font-medium text-text-primary">{benefit.title}</h4>
                      <p className="text-text-secondary">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/contact">
                <Button className="btn-primary" data-testid="tech-stack-cta">
                  <Code className="w-4 h-4 mr-2" />
                  Discuss Your Tech Needs
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern technology development workspace with multiple monitors showing code" 
                className="rounded-2xl shadow-lg w-full h-auto"
                data-testid="tech-stack-image"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
