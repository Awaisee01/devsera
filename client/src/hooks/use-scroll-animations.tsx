import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollAnimations() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from(".hero-text h1", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out"
      })
      .from(".hero-text p", {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power2.out"
      }, "-=0.8")
      .from(".hero-text .btn-primary, .hero-text .btn-secondary", {
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.5");

    // Stats section animation
    gsap.from(".stats-item", {
      scrollTrigger: {
        trigger: ".stats-item",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
    });

    // Service cards animation
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".service-card",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out"
    });

    // Project items animation
    gsap.from(".project-item", {
      scrollTrigger: {
        trigger: ".project-item",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out"
    });

    // Tech stack animation
    gsap.from(".tech-item", {
      scrollTrigger: {
        trigger: ".tech-item",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      duration: 0.6,
      scale: 0.8,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out(1.7)"
    });

    // Team members animation
    gsap.from(".team-member", {
      scrollTrigger: {
        trigger: ".team-member",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
    });

    // Testimonial cards animation
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      duration: 0.8,
      x: 50,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out"
    });

    // Contact section animation
    gsap.from(".contact-info, .contact-form", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none reverse"
      },
      duration: 1,
      y: 40,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out"
    });

    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    if (navbar) {
      ScrollTrigger.create({
        start: "top -100",
        end: 99999,
        toggleClass: { className: "navbar-scrolled", targets: navbar }
      });
    }

    // Parallax effect for hero illustration
    gsap.to(".hero-illustration", {
      scrollTrigger: {
        trigger: ".hero-illustration",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: -50,
      ease: "none"
    });

    // Fade in on scroll for sections
    const sections = gsap.utils.toArray("section");
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power2.out"
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Return animation control functions if needed
  return {
    refreshScrollTrigger: () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }
    },
    killAllScrollTriggers: () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    }
  };
}

// Hook for individual component animations
export function useElementAnimation(
  selector: string,
  animation: gsap.TweenVars,
  triggerConfig?: ScrollTrigger.Vars
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = gsap.utils.toArray(selector);
    if (elements.length === 0) return;

    let tween: gsap.core.Tween;

    if (triggerConfig) {
      tween = gsap.from(elements, {
        ...animation,
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          toggleActions: "play none none reverse",
          ...triggerConfig
        }
      });
    } else {
      tween = gsap.from(elements, animation);
    }

    return () => {
      tween.kill();
    };
  }, [selector, animation, triggerConfig]);
}

// Hook for staggered animations
export function useStaggerAnimation(
  selector: string,
  animation: gsap.TweenVars,
  stagger: number = 0.1
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = gsap.utils.toArray(selector);
    if (elements.length === 0) return;

    const tween = gsap.from(elements, {
      ...animation,
      stagger,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      tween.kill();
    };
  }, [selector, animation, stagger]);
}
