import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="gradient-bg pt-24 pb-16 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="hero-text space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-text-primary leading-tight">
              Digital Product <br />
              <span className="text-terracotta">Design & Development</span> <br />
              Agency
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Empowering startups to launch, scale, and succeed faster with cutting-edge design and development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="btn-primary" data-testid="hero-cta-primary">
                  <Rocket className="w-4 h-4 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              <Link href="/projects">
                <Button className="btn-primary" data-testid="hero-cta-secondary">
                  <Play className="w-4 h-4 mr-2" />
                  View Our Work
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-3xl font-light text-premium" data-testid="hero-stat-number">98%</div>
              <div className="text-text-secondary" data-testid="hero-stat-label">Customer satisfaction rate</div>
            </div>
          </motion.div>
          
          {/* Hero Illustration */}
          <motion.div 
            className="hero-illustration flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern digital agency workspace with creative team collaboration" 
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="hero-illustration"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
