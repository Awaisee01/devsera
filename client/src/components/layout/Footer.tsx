import { Link } from "wouter";
import { Linkedin, Twitter, Dribbble, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="footer-section">
            <div className="text-2xl font-light mb-6">
              Dev<span className="text-terracotta">sera</span>
            </div>
            <p className="text-gray-400 mb-6">
              Digital product design and development agency empowering startups to scale faster.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors duration-200"
                data-testid="footer-linkedin-link"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors duration-200"
                data-testid="footer-twitter-link"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors duration-200"
                data-testid="footer-dribbble-link"
              >
                <Dribbble className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors duration-200"
                data-testid="footer-github-link"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                    Product Discovery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                    UX/UI Design
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                    MVP Development
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                    Team Extension
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="text-white font-medium mb-4">Industries</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                  SaaS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                  FinTech
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                  Web3
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                  Healthcare
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                    Team
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-terracotta transition-colors duration-200">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm" data-testid="footer-copyright">
            © 2024 Devsera. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-gray-400 hover:text-terracotta text-sm transition-colors duration-200"
              data-testid="footer-privacy-link"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-terracotta text-sm transition-colors duration-200"
              data-testid="footer-terms-link"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
