import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Lightbulb, 
  PaintbrushVertical, 
  Code, 
  Rocket, 
  Users, 
  RotateCw,
  Search,
  Palette,
  Smartphone,
  Building,
  HeartPulse,
  GraduationCap,
  DollarSign,
  Bitcoin
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [industriesRef, industriesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const services = [
    {
      icon: <Lightbulb className="w-12 h-12 text-terracotta" />,
      title: "Product Discovery",
      description: "Map out key features, user flows, and architecture to align your team and reduce risks before development.",
      features: ["User journey mapping", "Technical architecture planning", "Feature prioritization", "Risk assessment"],
      timeline: "2-4 weeks"
    },
    {
      icon: <PaintbrushVertical className="w-12 h-12 text-premium" />,
      title: "UX/UI Design",
      description: "Create intuitive, conversion-focused designs that users love and businesses need to succeed.",
      features: ["User research & testing", "Wireframing & prototyping", "Visual design systems", "Accessibility compliance"],
      timeline: "4-8 weeks"
    },
    {
      icon: <Code className="w-12 h-12 text-amber" />,
      title: "Custom Development",
      description: "Build scalable, production-ready applications with modern tech stacks and best practices.",
      features: ["Full-stack development", "API integration", "Database design", "Performance optimization"],
      timeline: "8-16 weeks"
    },
    {
      icon: <Rocket className="w-12 h-12 text-premium" />,
      title: "MVP Development",
      description: "Launch your MVP 50% faster with lean sprints and pre-built frameworks for rapid iteration.",
      features: ["Rapid prototyping", "Core feature development", "User feedback integration", "Iterative improvements"],
      timeline: "6-12 weeks"
    },
    {
      icon: <Users className="w-12 h-12 text-terracotta" />,
      title: "Team Extension",
      description: "Scale instantly with dedicated designers and developers ready to integrate with your existing team.",
      features: ["Dedicated specialists", "Agile integration", "Daily collaboration", "Knowledge transfer"],
      timeline: "Ongoing"
    },
    {
      icon: <RotateCw className="w-12 h-12 text-amber" />,
      title: "Product Redesign",
      description: "Upgrade legacy interfaces with scalable, business-driven UX and UI that drives growth.",
      features: ["UX audit & analysis", "Modern UI redesign", "Performance improvements", "Conversion optimization"],
      timeline: "6-10 weeks"
    }
  ];

  const industries = [
    {
      icon: <Building className="w-10 h-10 text-premium" />,
      title: "SaaS",
      description: "Scalable platforms for growth-focused teams",
      challenges: ["High churn from poor UX", "Scaling features without compromising speed", "Converting freemium to paid"],
      solutions: ["Streamlined user flows", "Modular design systems", "Optimized billing UX"]
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-terracotta" />,
      title: "Healthcare",
      description: "HIPAA-compliant design for health tech products",
      challenges: ["Complex health workflows", "Data privacy compliance", "Building patient trust"],
      solutions: ["Patient-first UX design", "Secure infrastructure", "Professional, trustworthy UI"]
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-amber" />,
      title: "EdTech",
      description: "Digital learning platforms that engage and scale",
      challenges: ["Low engagement rates", "Accessibility compliance", "High concurrent user loads"],
      solutions: ["Gamified learning UX", "Adaptive interfaces", "Scalable cloud architecture"]
    },
    {
      icon: <DollarSign className="w-10 h-10 text-premium" />,
      title: "FinTech",
      description: "Secure, compliant digital products for finance",
      challenges: ["Complex compliance requirements", "Onboarding friction", "Real-time integrations"],
      solutions: ["Frictionless onboarding", "Secure transaction UI", "High-performance APIs"]
    },
    {
      icon: <Bitcoin className="w-10 h-10 text-terracotta" />,
      title: "Web3",
      description: "Decentralized platforms with human-first UX",
      challenges: ["Steep learning curves", "Low user trust", "Complex wallet integrations"],
      solutions: ["Simplified onboarding", "Trust-focused design", "Native wallet integration"]
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
              Our <span className="text-terracotta">Services</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto mb-8">
              Tailored support from first prototype to long-term scale. We help startups launch, grow, and succeed with comprehensive design and development services.
            </p>
            <Link href="/contact">
              <Button className="btn-primary" data-testid="services-hero-cta">
                <Rocket className="w-4 h-4 mr-2" />
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white" ref={servicesRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light text-text-primary mb-4">
              Comprehensive <span className="text-terracotta">Solutions</span>
            </h2>
            <p className="text-xl text-text-secondary">End-to-end services for every stage of your product journey</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                data-testid={`service-detail-${index}`}
              >
                <div className="service-icon mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-light text-text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-text-primary mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-text-secondary">
                        <ArrowRight className="w-4 h-4 text-terracotta" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-text-secondary">
                    Timeline: <span className="font-medium text-text-primary">{service.timeline}</span>
                  </div>
                  <Link href="/contact">
                    <button className="text-terracotta hover:text-premium transition-colors duration-200" data-testid={`service-cta-${index}`}>
                      Get Started <ArrowRight className="w-4 h-4 ml-1 inline" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-warm-bg" ref={industriesRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light text-text-primary mb-4">
              Industry <span className="text-terracotta">Expertise</span>
            </h2>
            <p className="text-xl text-text-secondary">Specialized knowledge across key industries</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                data-testid={`industry-card-${index}`}
              >
                <div className="mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-light text-text-primary mb-2">{industry.title}</h3>
                <p className="text-text-secondary mb-6">{industry.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-text-primary mb-2 uppercase tracking-wide">Challenges:</h4>
                  <ul className="space-y-1">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="w-1 h-1 bg-terracotta rounded-full mt-2 flex-shrink-0"></span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-text-primary mb-2 uppercase tracking-wide">Our Solutions:</h4>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-sm text-text-secondary flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-terracotta mt-1 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientTestimonials />
      
      <Footer />
    </div>
  );
}
