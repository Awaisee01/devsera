"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Spin } from "antd";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(".project-card");

      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, [visibleCount]);

  const showMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 10, projects.length));
      setLoading(false);
    }, 800); // fake loading for smoothness
  };

  const showLess = () => {
    setVisibleCount((prev) => Math.max(prev - 10, 10));
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-light text-text-primary leading-tight mb-6"
          >
            Our <span className="text-terracotta">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto mb-8"
          >
            Discover how we're driving change through innovative projects,
            strong partnerships, and measurable outcomes.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-white">
        <div
          ref={containerRef}
          className="max-w-6xl mx-auto space-y-24 relative"
        >
          {projects.slice(0, visibleCount).map((project, index) => (
            <div
              key={project.id}
              className={`project-card flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2 space-y-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className={`${
                        tag === "Web3" || tag === "SaaS"
                          ? "bg-premium text-white"
                          : tag === "FinTech" || tag === "Payments"
                          ? "bg-amber text-white"
                          : tag === "Gaming" || tag === "Enterprise"
                          ? "bg-terracotta text-white"
                          : "bg-muted"
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-3xl font-light text-text-primary"
                >
                  {project.title}
                </motion.h3>

                {/* Funding */}
                {project.funding && (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-light text-premium">
                      {project.funding}
                    </span>
                    <span className="text-text-secondary">raised</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-text-secondary text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                {project.results && project.results.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-text-primary">
                      Key Results:
                    </h4>
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-terracotta" />
                        <span className="text-text-primary">{result}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">
                      Technology Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-muted text-text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timeline + Industry */}
                {project.timeline && (
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span>
                      Timeline:{" "}
                      <strong className="text-text-primary">
                        {project.timeline}
                      </strong>
                    </span>
                    <span>•</span>
                    <span>
                      Industry:{" "}
                      <strong className="text-text-primary">
                        {project.industry}
                      </strong>
                    </span>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button className="btn-primary">View Case Study</Button>
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      className="border-sage text-text-primary hover:bg-warm-bg"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Site
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Controls */}
        <div className="flex justify-center gap-4 mt-16">
          {visibleCount < projects.length && (
            <Button onClick={showMore} className="btn-primary" disabled={loading}>
              {loading ? <Spin size="small" /> : "Show More"}
            </Button>
          )}
          {visibleCount > 10 && (
            <Button
              onClick={showLess}
              variant="outline"
              className="border-sage text-text-primary hover:bg-warm-bg"
            >
              Show Less
            </Button>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
  