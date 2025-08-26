import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function ClientTestimonials() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-light text-text-primary mb-4">
            What Our <span className="text-terracotta">Clients Say</span>
          </h2>
          <p className="text-xl text-text-secondary">5.0 average rating on Clutch & DesignRush</p>
        </div>
      </div>
      
      <div className="relative">
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`}
              className="testimonial-card"
              data-testid={`testimonial-${testimonial.id}-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-text-secondary mb-6" data-testid={`testimonial-content-${testimonial.id}`}>
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div 
                  className={`w-12 h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-medium`}
                  data-testid={`testimonial-avatar-${testimonial.id}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-text-primary font-medium" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-text-secondary text-sm" data-testid={`testimonial-title-${testimonial.id}`}>
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
