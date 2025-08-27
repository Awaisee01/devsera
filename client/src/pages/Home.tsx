import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Users, Lightbulb, PaintbrushVertical, Code, Rocket, RotateCw } from "lucide-react";
import { projects } from "@/data/projects";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Featured projects (first 6)
  const featuredProjects = projects.slice(0, 6);

  const services = [
    {
      icon: <Lightbulb className="w-10 h-10 text-terracotta" />,
      title: "Product Discovery",
      description: "Map out key features, user flows, and architecture to align your team and reduce risks.",
    },
    {
      icon: <PaintbrushVertical className="w-10 h-10 text-premium" />,
      title: "UX/UI Design",
      description: "Create intuitive, conversion-focused designs that users love and businesses need.",
    },
    {
      icon: <Code className="w-10 h-10 text-amber" />,
      title: "Custom Development",
      description: "Build scalable, production-ready applications with modern tech stacks.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-premium" />,
      title: "MVP Development",
      description: "Launch your MVP 50% faster with lean sprints and pre-built frameworks.",
    },
    {
      icon: <Users className="w-10 h-10 text-terracotta" />,
      title: "Team Extension",
      description: "Scale instantly with dedicated designers and developers ready to start.",
    },
    {
      icon: <RotateCw className="w-10 h-10 text-amber" />,
      title: "Product Redesign",
      description: "Upgrade legacy interfaces with scalable, business-driven UX and UI.",
    },
  ];

  return (
    <div>
      <Navbar />
      
      <Hero />
      
      <Stats />
      
      {/* About Section */}
      <section className="py-20 px-6 bg-warm-bg" ref={aboutRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="about-text space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-text-primary">
                Building a startup is hard, but finding the right partner 
                <span className="text-terracotta"> shouldn't be</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Since 2019, we've been the go-to digital product design agency for startups looking to launch, scale, and innovate. Our global team brings world-class expertise to every project.
              </p>
              <div className="space-y-4">
                {[
                  "Design that lasts beyond trends",
                  "Developer-ready implementations",
                  "Agile, embedded collaboration"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-terracotta" />
                    <span className="text-text-primary">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/team">
                <Button className="btn-primary mt-4" data-testid="about-cta-button">
                  <Users className="w-4 h-4 mr-2" />
                  Meet Our Team
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional business team collaborating in modern office environment" 
                className="rounded-2xl shadow-lg w-full h-auto"
                data-testid="about-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white" ref={servicesRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light text-text-primary mb-4">
              Our <span className="text-terracotta">Services</span>
            </h2>
            <p className="text-xl text-text-secondary">Tailored support from first prototype to long-term scale</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                data-testid={`service-card-${index}`}
              >
                <div className="service-icon mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-light text-text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                <Link href="/services">
                  <button className="text-terracotta hover:text-premium transition-colors duration-200" data-testid={`service-learn-more-${index}`}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 bg-warm-bg" ref={projectsRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light text-text-primary mb-4">
              Featured <span className="text-terracotta">Projects</span>
            </h2>
            <p className="text-xl text-text-secondary">Discover how we're driving change through innovative projects</p>
          </motion.div>
          
          {/* Display first 6 projects */}
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`project-item ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.3 }}
                data-testid={`featured-project-${project.id}`}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-2xl shadow-lg w-full h-auto"
                    data-testid={`project-image-${project.id}`}
                  />
                </div>
                <div className="project-details space-y-4">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`${
                          tag === 'Web3' ? 'bg-premium' : 
                          tag === 'FinTech' ? 'bg-amber' : 
                          tag === 'SaaS' ? 'bg-premium' : 'bg-terracotta'
                        } text-white px-3 py-1 rounded-full text-sm`}
                        data-testid={`project-tag-${project.id}-${tagIndex}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-light text-text-primary" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-lg" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-terracotta" />
                        <span className="text-text-primary" data-testid={`project-result-${project.id}-${resultIndex}`}>
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button className="btn-primary" data-testid={`project-case-study-${project.id}`}>
                    View Case Study
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* More Projects CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Link href="/projects">
              <Button className="btn-primary" data-testid="view-all-projects-button">
                <ArrowRight className="w-4 h-4 mr-2" />
                View All 30+ Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <ClientTestimonials />
      
      <Footer />
    </div>
  );
}
