import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Linkedin, Github, Dribbble, Mail, Globe, Clock, Award, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { teamMembers } from "@/data/team";

export default function Team() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { icon: <Globe className="w-8 h-8 text-terracotta" />, number: "6", label: "Countries" },
    { icon: <Clock className="w-8 h-8 text-premium" />, number: "24/7", label: "Coverage" },
    { icon: <Award className="w-8 h-8 text-amber" />, number: "5+", label: "Years Avg Experience" },
    { icon: <Users className="w-8 h-8 text-premium" />, number: "50+", label: "Team Members" },
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
              Meet Our <span className="text-terracotta">Team</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto mb-8">
              The talented individuals driving your product's success. Our global team of designers, developers, and strategists brings diverse expertise to every project.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  data-testid={`team-stat-${index}`}
                >
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-light text-text-primary">{stat.number}</div>
                  <div className="text-text-secondary text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6 bg-white" ref={teamRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light text-text-primary mb-4">
              Our <span className="text-terracotta">People</span>
            </h2>
            <p className="text-xl text-text-secondary">Meet the experts who bring your vision to life</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="team-member"
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                data-testid={`team-member-${member.id}`}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  data-testid={`team-member-image-${member.id}`}
                />
                
                <h3 className="text-lg font-medium text-text-primary mb-1" data-testid={`team-member-name-${member.id}`}>
                  {member.name}
                </h3>
                
                <p className="text-text-secondary text-sm mb-2" data-testid={`team-member-role-${member.id}`}>
                  {member.role}
                </p>
                
                <div className="flex items-center justify-center gap-1 mb-4">
                  <MapPin className="w-3 h-3 text-text-secondary" />
                  <span className="text-text-secondary text-xs" data-testid={`team-member-location-${member.id}`}>
                    {member.location}
                  </span>
                </div>
                
                <p className="text-text-secondary text-sm mb-4 text-center" data-testid={`team-member-bio-${member.id}`}>
                  {member.bio}
                </p>
                
                {member.skills && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-muted text-text-primary px-2 py-1 rounded-full text-xs"
                          data-testid={`team-member-skill-${member.id}-${skillIndex}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-center gap-3">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      className="text-premium hover:text-terracotta transition-colors duration-200"
                      data-testid={`team-member-linkedin-${member.id}`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.github && (
                    <a 
                      href={member.github} 
                      className="text-premium hover:text-terracotta transition-colors duration-200"
                      data-testid={`team-member-github-${member.id}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.dribbble && (
                    <a 
                      href={member.dribbble} 
                      className="text-premium hover:text-terracotta transition-colors duration-200"
                      data-testid={`team-member-dribbble-${member.id}`}
                    >
                      <Dribbble className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-premium hover:text-terracotta transition-colors duration-200"
                      data-testid={`team-member-email-${member.id}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-warm-bg" ref={valuesRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-text-primary">
                Global Expertise, <span className="text-terracotta">Local Dedication</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our team spans Canada, the U.S., Ukraine, Poland, Estonia, and Switzerland, bringing diverse perspectives and world-class expertise to every project.
              </p>
              
              <div className="space-y-4">
                {[
                  "Collaborative culture across time zones",
                  "Continuous learning and skill development", 
                  "Client-first mindset in everything we do",
                  "Transparent communication and regular updates"
                ].map((value, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Award className="w-5 h-5 text-terracotta" />
                    <span className="text-text-primary">{value}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link href="/contact">
                <Button className="btn-primary" data-testid="team-cta">
                  <Users className="w-4 h-4 mr-2" />
                  Work With Our Team
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Team collaboration in modern workspace" 
                className="rounded-xl shadow-lg w-full h-40 object-cover"
                data-testid="team-culture-image-1"
              />
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Remote team video call" 
                className="rounded-xl shadow-lg w-full h-40 object-cover mt-8"
                data-testid="team-culture-image-2"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Creative brainstorming session" 
                className="rounded-xl shadow-lg w-full h-40 object-cover -mt-8"
                data-testid="team-culture-image-3"
              />
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Team celebrating success" 
                className="rounded-xl shadow-lg w-full h-40 object-cover"
                data-testid="team-culture-image-4"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
