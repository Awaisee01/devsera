import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Linkedin, 
  Twitter, 
  Dribbble, 
  Github,
  CheckCircle,
  Clock,
  Users,
  Rocket
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Locations",
      content: "Canada • USA • Ukraine • Poland • Estonia • Switzerland",
      bgColor: "bg-terracotta"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      bgColor: "bg-premium"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email", 
      content: "hello@phenomenonstudio.com",
      bgColor: "bg-amber"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      content: "Within 24 hours",
      bgColor: "bg-premium"
    }
  ];

  const reasons = [
    {
      icon: <Users className="w-6 h-6 text-terracotta" />,
      title: "Expert Team",
      description: "50+ designers and developers with 5+ years average experience"
    },
    {
      icon: <Rocket className="w-6 h-6 text-premium" />,
      title: "Proven Results",
      description: "$500M+ raised by our clients with 98% satisfaction rate"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-amber" />,
      title: "End-to-End Support",
      description: "From discovery to launch and beyond, we're your dedicated partner"
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
              Let's Build Something <span className="text-terracotta">Amazing</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl mx-auto mb-8">
              Ready to take your project to the next level? Get in touch with our team of experts and let's discuss how we can help bring your vision to life.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  data-testid={`contact-reason-${index}`}
                >
                  <div className="flex justify-center mb-3">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-medium text-text-primary mb-2">{reason.title}</h3>
                  <p className="text-text-secondary text-sm">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-white" ref={formRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-4xl font-light text-text-primary mb-4">
                  Get In <span className="text-terracotta">Touch</span>
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={formInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    data-testid={`contact-info-${index}`}
                  >
                    <div className={`contact-icon ${info.bgColor} text-white`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-text-primary font-medium mb-1">{info.title}</h4>
                      <p className="text-text-secondary">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-6">
                <h4 className="text-text-primary font-medium mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { Icon: Linkedin, href: "#", color: "text-terracotta" },
                    { Icon: Twitter, href: "#", color: "text-premium" },
                    { Icon: Dribbble, href: "#", color: "text-amber" },
                    { Icon: Github, href: "#", color: "text-text-primary" }
                  ].map(({ Icon, href, color }, index) => (
                    <a 
                      key={index}
                      href={href} 
                      className={`social-link bg-white ${color} hover:bg-terracotta hover:text-white border border-sage`}
                      data-testid={`contact-social-${index}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="bg-warm-bg p-8 rounded-2xl border border-sage"
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-text-primary font-medium">Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            {...field}
                            className="border-sage focus:border-terracotta"
                            data-testid="contact-form-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-text-primary font-medium">Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@email.com" 
                            {...field}
                            className="border-sage focus:border-terracotta"
                            data-testid="contact-form-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-text-primary font-medium">Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company name" 
                            {...field}
                            className="border-sage focus:border-terracotta"
                            data-testid="contact-form-company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-text-primary font-medium">Project Budget *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              className="border-sage focus:border-terracotta"
                              data-testid="contact-form-budget"
                            >
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                            <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                            <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                            <SelectItem value="100k+">$100k+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-text-primary font-medium">Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project, goals, and timeline..."
                            rows={5}
                            {...field}
                            className="border-sage focus:border-terracotta resize-none"
                            data-testid="contact-form-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="btn-primary w-full" 
                    disabled={contactMutation.isPending}
                    data-testid="contact-form-submit"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
