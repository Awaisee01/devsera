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

   <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-24"
            ref={teamRef}
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <h2 className="text-6xl font-thin text-gray-900 mb-3 tracking-tight">
                Our Team
              </h2>
              <div className="w-16 h-1 bg-terracotta mx-auto rounded-full"></div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="text-center">
                  
                  {/* Profile Image */}
                  <div className="relative mb-8 inline-block">
                    <div className="w-32 h-32 mx-auto mb-6 relative overflow-hidden rounded-3xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    
                    {/* Name */}
                    <h3 className="text-2xl font-light text-gray-900 tracking-tight">
                      {member.name}
                    </h3>
                    
                    {/* Role */}
                    <p className="text-terracotta font-medium text-sm uppercase tracking-[0.2em]">
                      {member.role}
                    </p>

                    {/* Location */}
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{member.location}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>

                    {/* Skills */}
                    {member.skills && (
                      <div className="flex flex-wrap gap-2 justify-center pt-2">
                        {member.skills.slice(0, 3).map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Socials */}
                    <div className="flex justify-center gap-6 pt-4">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.github && (
                        <a 
                          href={member.github} 
                          className="text-gray-300 hover:text-gray-600 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {member.dribbble && (
                        <a 
                          href={member.dribbble} 
                          className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
                        >
                          <Dribbble className="w-5 h-5" />
                        </a>
                      )}
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`} 
                          className="text-gray-300 hover:text-terracotta transition-colors duration-300"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
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
                <Button className="btn-primary mt-3" data-testid="team-cta">
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
