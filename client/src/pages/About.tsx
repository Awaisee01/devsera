import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Users, Globe, Clock, Award } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const values = [
    {
      icon: <Globe className="w-8 h-8 text-terracotta" />,
      title: "Global Expertise",
      description: "Our team spans 6 countries, bringing diverse perspectives and world-class expertise to every project."
    },
    {
      icon: <Clock className="w-8 h-8 text-premium" />,
      title: "24/7 Coverage",
      description: "With team members across multiple time zones, we provide continuous support and faster turnaround times."
    },
    {
      icon: <Award className="w-8 h-8 text-amber" />,
      title: "Proven Results",
      description: "5+ years average experience with a track record of helping clients raise $500M+ in funding."
    }
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-16 px-6" ref={heroRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-light text-text-primary leading-tight">
                About <span className="text-terracotta">Phenomenon</span> Studio
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Since 2019, we've been empowering startups to build exceptional digital products that users love and investors back.
              </p>
              <div className="space-y-4">
                {[
                  "98% customer satisfaction rate",
                  "$500M+ raised by our clients", 
                  "50+ expert team members globally"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-terracotta" />
                    <span className="text-text-primary">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/contact">
                <Button className="btn-primary" data-testid="about-hero-cta">
                  <Users className="w-4 h-4 mr-2" />
                  Work With Us
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              className="hero-illustration flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse team of professionals collaborating in a modern workspace environment" 
                className="rounded-2xl shadow-lg w-full h-auto"
                data-testid="about-hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-6 bg-white" ref={valuesRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light text-text-primary mb-4">
              Our <span className="text-terracotta">Mission</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              To democratize access to world-class design and development, helping startups compete with enterprise-level products from day one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="service-card text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                data-testid={`value-card-${index}`}
              >
                <div className="mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-light text-text-primary mb-4">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-warm-bg p-12 rounded-2xl border border-sage"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-light text-text-primary mb-6">Why Choose Phenomenon Studio?</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-medium text-text-primary mb-4">Design that lasts beyond trends</h4>
                  <p className="text-text-secondary mb-6">
                    We don't chase fads. We build digital products that stay relevant, designed around long-term value with scalable systems and smart UX.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-text-primary mb-4">Developer-ready implementation</h4>
                  <p className="text-text-secondary mb-6">
                    Every component is built with devs in mind: design tokens, accessibility, reusability, and real-world constraints.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-text-primary mb-4">Embedded collaboration</h4>
                  <p className="text-text-secondary mb-6">
                    We plug into your tools and adapt to your sprint cycles, operating like an extension of your team.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-text-primary mb-4">Proven tech expertise</h4>
                  <p className="text-text-secondary mb-6">
                    Specialized in SaaS, FinTech, Web3, and AI where UX and business strategy intersect for maximum growth impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 px-6 bg-warm-bg" ref={teamRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-text-primary">
                Meet the team driving your product's <span className="text-terracotta">success</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Established in 2019, our team of strategists, designers, developers, and product experts brings global expertise to every project.
              </p>
              <div className="space-y-4">
                {[
                  "6 countries, one vision",
                  "24/7 coverage across time zones", 
                  "5+ years average experience"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={teamInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-terracotta" />
                    <span className="text-text-primary">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/team">
                <Button className="btn-primary" data-testid="about-team-cta">
                  <Users className="w-4 h-4 mr-2" />
                  Meet the Full Team
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Team member working on design" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
                data-testid="about-team-image-1"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Team member in meeting" 
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
                data-testid="about-team-image-2"
              />
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Team member coding" 
                className="rounded-xl shadow-lg w-full h-48 object-cover -mt-8"
                data-testid="about-team-image-3"
              />
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Team member presenting" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
                data-testid="about-team-image-4"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
