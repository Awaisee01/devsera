import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/projects";

export default function Projects() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              Our <span className="text-terracotta">Projects</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto mb-8">
              Discover how we're driving change through innovative projects, strong partnerships, and measurable outcomes. From startup MVPs to enterprise solutions.
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-light text-premium">30+</span>
                <span className="text-text-secondary">Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-light text-terracotta">$500M+</span>
                <span className="text-text-secondary">Client Funding Raised</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-white" ref={projectsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`project-item ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: (index % 6) * 0.2 }}
                data-testid={`project-${project.id}`}
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
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary"
                        className={`${
                          tag === 'Web3' || tag === 'SaaS' ? 'bg-premium text-white' : 
                          tag === 'FinTech' || tag === 'Payments' ? 'bg-amber text-white' : 
                          tag === 'Gaming' || tag === 'Enterprise' ? 'bg-terracotta text-white' : 'bg-muted'
                        }`}
                        data-testid={`project-tag-${project.id}-${tagIndex}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-light text-text-primary" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  
                  {project.funding && (
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-light text-premium">{project.funding}</span>
                      <span className="text-text-secondary">raised</span>
                    </div>
                  )}
                  
                  <p className="text-text-secondary text-lg leading-relaxed" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-text-primary">Key Results:</h4>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-terracotta flex-shrink-0" />
                        <span className="text-text-primary" data-testid={`project-result-${project.id}-${resultIndex}`}>
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {project.tech && (
                    <div>
                      <h4 className="text-lg font-medium text-text-primary mb-2">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-muted text-text-primary px-3 py-1 rounded-full text-sm"
                            data-testid={`project-tech-${project.id}-${techIndex}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.timeline && (
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span>Timeline: <strong className="text-text-primary">{project.timeline}</strong></span>
                      <span>•</span>
                      <span>Industry: <strong className="text-text-primary">{project.industry}</strong></span>
                    </div>
                  )}
                  
                  <div className="flex gap-3 pt-2">
                    <Button className="btn-primary" data-testid={`project-case-study-${project.id}`}>
                      View Case Study
                    </Button>
                    {project.liveUrl && (
                      <Button 
                        variant="outline" 
                        className="border-sage text-text-primary hover:bg-warm-bg"
                        data-testid={`project-live-site-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Site
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
