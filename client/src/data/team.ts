export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
  skills?: string[];
  linkedin?: string;
  github?: string;
  dribbble?: string;
  email?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "Senior UX Designer",
    bio: "Specializes in user research and conversion optimization with 6+ years experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Toronto, Canada",
    skills: ["User Research", "Figma", "Prototyping"],
    linkedin: "https://linkedin.com/in/alexchen",
    dribbble: "https://dribbble.com/alexchen",
    email: "alex@phenomenonstudio.com"
  },
  {
    id: "sarah-rodriguez",
    name: "Sarah Rodriguez",
    role: "Lead Full-Stack Developer",
    bio: "Expert in React, Node.js, and cloud architecture with startup experience.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b60b95b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Austin, USA",
    skills: ["React", "Node.js", "AWS"],
    linkedin: "https://linkedin.com/in/sarahrodriguez",
    github: "https://github.com/sarahrodriguez",
    email: "sarah@phenomenonstudio.com"
  },
  {
    id: "michael-kim",
    name: "Michael Kim",
    role: "Product Manager",
    bio: "Strategic product leader with experience scaling startups from MVP to IPO.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "San Francisco, USA",
    skills: ["Product Strategy", "Analytics", "Growth"],
    linkedin: "https://linkedin.com/in/michaelkim",
    email: "michael@phenomenonstudio.com"
  },
  {
    id: "emma-thompson",
    name: "Emma Thompson",
    role: "Senior UI Designer",
    bio: "Creates beautiful, accessible interfaces with attention to detail and user needs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "London, UK",
    skills: ["UI Design", "Design Systems", "Accessibility"],
    linkedin: "https://linkedin.com/in/emmathompson",
    dribbble: "https://dribbble.com/emmathompson",
    email: "emma@phenomenonstudio.com"
  },
  {
    id: "dmitri-petrov",
    name: "Dmitri Petrov",
    role: "Senior Backend Developer",
    bio: "Scalable system architect with expertise in microservices and distributed systems.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Kyiv, Ukraine",
    skills: ["Python", "Microservices", "PostgreSQL"],
    linkedin: "https://linkedin.com/in/dmitripetrov",
    github: "https://github.com/dmitripetrov",
    email: "dmitri@phenomenonstudio.com"
  },
  {
    id: "maria-garcia",
    name: "Maria Garcia",
    role: "UX Researcher",
    bio: "Data-driven researcher focused on understanding user behavior and market needs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Barcelona, Spain",
    skills: ["User Research", "Data Analysis", "Survey Design"],
    linkedin: "https://linkedin.com/in/mariagarcia",
    email: "maria@phenomenonstudio.com"
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Frontend Developer",
    bio: "Passionate about creating smooth, performant user experiences with modern JavaScript.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Dublin, Ireland",
    skills: ["React", "TypeScript", "Animation"],
    linkedin: "https://linkedin.com/in/jameswilson",
    github: "https://github.com/jameswilson",
    email: "james@phenomenonstudio.com"
  },
  {
    id: "anna-kowalski",
    name: "Anna Kowalski",
    role: "DevOps Engineer",
    bio: "Cloud infrastructure specialist ensuring reliable, scalable deployments.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Warsaw, Poland",
    skills: ["AWS", "Docker", "Kubernetes"],
    linkedin: "https://linkedin.com/in/annakowalski",
    github: "https://github.com/annakowalski",
    email: "anna@phenomenonstudio.com"
  },
  {
    id: "lars-eriksson",
    name: "Lars Eriksson",
    role: "Mobile Developer",
    bio: "Cross-platform mobile development expert with React Native and Flutter experience.",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Stockholm, Sweden",
    skills: ["React Native", "Flutter", "iOS"],
    linkedin: "https://linkedin.com/in/larseriksson",
    github: "https://github.com/larseriksson",
    email: "lars@phenomenonstudio.com"
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    role: "AI/ML Engineer",
    bio: "Machine learning specialist building intelligent features and data-driven solutions.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Mumbai, India",
    skills: ["Python", "TensorFlow", "Data Science"],
    linkedin: "https://linkedin.com/in/priyapatel",
    github: "https://github.com/priyapatel",
    email: "priya@phenomenonstudio.com"
  },
  {
    id: "thomas-mueller",
    name: "Thomas Mueller",
    role: "Quality Assurance Lead",
    bio: "Ensures product quality through comprehensive testing strategies and automation.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Berlin, Germany",
    skills: ["Test Automation", "Selenium", "Quality Assurance"],
    linkedin: "https://linkedin.com/in/thomasmueller",
    email: "thomas@phenomenonstudio.com"
  },
  {
    id: "sophie-martin",
    name: "Sophie Martin",
    role: "Brand Designer",
    bio: "Creates cohesive brand experiences across digital and print media.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Paris, France",
    skills: ["Brand Design", "Illustration", "Typography"],
    linkedin: "https://linkedin.com/in/sophiemartin",
    dribbble: "https://dribbble.com/sophiemartin",
    email: "sophie@phenomenonstudio.com"
  },
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    role: "Blockchain Developer",
    bio: "Web3 and blockchain specialist building decentralized applications and smart contracts.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Bangalore, India",
    skills: ["Solidity", "Web3", "DeFi"],
    linkedin: "https://linkedin.com/in/rahulsharma",
    github: "https://github.com/rahulsharma",
    email: "rahul@phenomenonstudio.com"
  },
  {
    id: "olivia-johnson",
    name: "Olivia Johnson",
    role: "Content Strategist",
    bio: "Develops content strategies that engage users and drive business objectives.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b60b95b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Vancouver, Canada",
    skills: ["Content Strategy", "Copywriting", "SEO"],
    linkedin: "https://linkedin.com/in/oliviajohnson",
    email: "olivia@phenomenonstudio.com"
  },
  {
    id: "carlos-rodriguez",
    name: "Carlos Rodriguez",
    role: "Data Engineer",
    bio: "Builds robust data pipelines and analytics infrastructure for data-driven decisions.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Mexico City, Mexico",
    skills: ["Python", "Apache Spark", "Data Warehousing"],
    linkedin: "https://linkedin.com/in/carlosrodriguez",
    github: "https://github.com/carlosrodriguez",
    email: "carlos@phenomenonstudio.com"
  },
  {
    id: "elena-popov",
    name: "Elena Popov",
    role: "Security Engineer",
    bio: "Cybersecurity expert ensuring applications are secure and compliant.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    location: "Tallinn, Estonia",
    skills: ["Cybersecurity", "Penetration Testing", "Compliance"],
    linkedin: "https://linkedin.com/in/elenapopov",
    email: "elena@phenomenonstudio.com"
  }
];
