export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  results: string[];
  tech?: string[];
  funding?: string;
  timeline?: string;
  industry?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "shaga-odyssey",
    title: "Shaga Odyssey",
    description: "Award-winning web3 gamepad platform that increased user engagement by 40% and won Awwwards 'Site of the Day' for Best Interactive Design.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Web3", "Gaming"],
    results: [
      "+40% increase in user engagement",
      "3x faster platform navigation",
      "Awwwards 'Site of the Day'"
    ],
    tech: ["React", "Three.js", "Web3.js", "Node.js"],
    funding: "$1M",
    timeline: "5 months",
    industry: "Gaming",
    liveUrl: "https://shaga.xyz"
  },
  {
    id: "klickex",
    title: "KlickEx",
    description: "Cross-border payments platform that boosted conversion by 35% and helped raise $1M in additional funding within 6 months.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["FinTech", "Payments"],
    results: [
      "+35% 'Add Money' conversion rate",
      "+30% 'Money Transfer' completion rate",
      "Raised $1M in additional funding"
    ],
    tech: ["Next.js", "TypeScript", "React Redux", "PostgreSQL"],
    funding: "$1M",
    timeline: "6 months",
    industry: "FinTech"
  },
  {
    id: "isora-grc",
    title: "Isora GRC Platform",
    description: "Governance, risk, and compliance platform trusted by Berkeley, Yale, and other leading institutions. TechStars graduate with 2x faster workflows.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["SaaS", "Enterprise"],
    results: [
      "2x faster user workflows",
      "50% shorter time-to-market",
      "Nominated for UX Design Award 2024"
    ],
    tech: ["React", "Python", "AWS", "PostgreSQL"],
    timeline: "12 months",
    industry: "SaaS"
  },
  {
    id: "nomupay",
    title: "Nomupay",
    description: "Digital asset exchange platform that raised €35.9 million to expand unified payments access in Asia market.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["FinTech", "Web3"],
    results: [
      "€35.9M funding raised",
      "50% increase in transaction volume",
      "Launched in 5 Asian markets"
    ],
    tech: ["Vue.js", "Node.js", "MongoDB", "Docker"],
    funding: "€35.9M",
    timeline: "8 months",
    industry: "FinTech"
  },
  {
    id: "onetext",
    title: "One Text",
    description: "Y Combinator-backed SaaS startup enabling frictionless payments via SMS with revolutionary user experience.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["SaaS", "Payments"],
    results: [
      "Y Combinator acceptance",
      "95% SMS payment success rate",
      "200% increase in user adoption"
    ],
    tech: ["React Native", "Node.js", "Twilio", "Stripe"],
    timeline: "4 months",
    industry: "SaaS"
  },
  {
    id: "dostuffmedia",
    title: "DoStuffMedia",
    description: "Entertainment platform with 2.5 million monthly website visits and 23 million monthly social impressions.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Entertainment", "Media"],
    results: [
      "2.5M monthly website visits",
      "23M monthly social impressions",
      "150% increase in engagement"
    ],
    tech: ["React", "Django", "PostgreSQL", "Redis"],
    timeline: "10 months",
    industry: "Entertainment"
  },
  {
    id: "tokenize-exchange",
    title: "Tokenize",
    description: "One of Asia's leading Digital Asset Exchanges (DAX), raising US$11.5M to expand its Web3 solutions across Southeast Asia.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Web3", "FinTech"],
    results: [
      "$11.5M funding raised",
      "100k+ active traders",
      "24/7 trading with 99.9% uptime"
    ],
    tech: ["React", "Rust", "PostgreSQL", "WebSocket"],
    funding: "$11.5M",
    timeline: "14 months",
    industry: "Web3"
  },
  {
    id: "qurtuba-online",
    title: "Qurtuba Online",
    description: "Recognized as South Africa's top-performing EdTech institution in 2023, revolutionizing online Islamic education.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["EdTech", "Education"],
    results: [
      "Top EdTech institution in South Africa",
      "300% increase in student enrollment",
      "95% course completion rate"
    ],
    tech: ["Next.js", "MongoDB", "Zoom SDK", "Stripe"],
    timeline: "7 months",
    industry: "EdTech"
  },
  {
    id: "airportr",
    title: "Airportr",
    description: "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023, streamlining airport logistics.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Logistics", "Transportation"],
    results: [
      "Top 5 UK transport tech firms",
      "60% reduction in baggage handling time",
      "Partnership with 12 major airports"
    ],
    tech: ["React", "Express.js", "MySQL", "Socket.io"],
    timeline: "9 months",
    industry: "Logistics"
  },
  {
    id: "healthtech-platform",
    title: "MedConnect Pro",
    description: "HIPAA-compliant telemedicine platform connecting patients with specialists, featuring AI-powered diagnosis assistance.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Healthcare", "AI"],
    results: [
      "HIPAA compliance certification",
      "50k+ patient consultations",
      "99.8% platform reliability"
    ],
    tech: ["React", "Python", "AWS", "TensorFlow"],
    timeline: "11 months",
    industry: "Healthcare"
  },
  {
    id: "ecommerce-ai",
    title: "ShopSmart AI",
    description: "AI-powered e-commerce platform with personalized recommendations, increasing average order value by 45%.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["E-commerce", "AI"],
    results: [
      "+45% average order value",
      "3x improvement in conversion rate",
      "1M+ products catalogued"
    ],
    tech: ["Next.js", "Python", "TensorFlow", "Elasticsearch"],
    timeline: "6 months",
    industry: "E-commerce"
  },
  {
    id: "fitness-tracking",
    title: "FitTrack Pro",
    description: "Comprehensive fitness tracking application with wearable device integration and social features for motivation.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Health", "Mobile"],
    results: [
      "500k+ active users",
      "Integration with 15+ wearable devices",
      "85% user retention rate"
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "Redis"],
    timeline: "8 months",
    industry: "Health & Fitness"
  },
  {
    id: "supply-chain",
    title: "LogiChain Analytics",
    description: "Supply chain optimization platform using IoT and blockchain for transparent, efficient logistics management.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Supply Chain", "Blockchain"],
    results: [
      "30% reduction in logistics costs",
      "Real-time tracking for 1000+ vehicles",
      "Blockchain-verified authenticity"
    ],
    tech: ["React", "Solidity", "IoT sensors", "MongoDB"],
    timeline: "12 months",
    industry: "Logistics"
  },
  {
    id: "social-learning",
    title: "EduSocial",
    description: "Social learning platform combining video content, peer interaction, and gamification for enhanced educational outcomes.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["EdTech", "Social"],
    results: [
      "200k+ registered learners",
      "90% course completion rate",
      "Featured in EdTech Weekly"
    ],
    tech: ["Vue.js", "Django", "WebRTC", "PostgreSQL"],
    timeline: "9 months",
    industry: "EdTech"
  },
  {
    id: "renewable-energy",
    title: "GreenEnergy Hub",
    description: "Renewable energy management platform for monitoring solar and wind installations with predictive maintenance.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Energy", "IoT"],
    results: [
      "1000+ installations monitored",
      "25% improvement in energy efficiency",
      "Predictive maintenance alerts"
    ],
    tech: ["React", "Python", "InfluxDB", "Grafana"],
    timeline: "10 months",
    industry: "Energy"
  },
  {
    id: "real-estate",
    title: "PropTech Navigator",
    description: "Virtual property touring platform with AR visualization and AI-powered property matching for buyers and sellers.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Real Estate", "AR"],
    results: [
      "50k+ virtual tours conducted",
      "40% faster property sales",
      "AR technology integration"
    ],
    tech: ["React", "ARKit", "Node.js", "MongoDB"],
    timeline: "7 months",
    industry: "Real Estate"
  },
  {
    id: "food-delivery",
    title: "FreshEats Network",
    description: "Farm-to-table food delivery platform connecting local farmers with consumers, promoting sustainable agriculture.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Food Tech", "Sustainability"],
    results: [
      "500+ local farmers onboarded",
      "100k+ orders delivered",
      "Carbon-neutral delivery network"
    ],
    tech: ["React Native", "Express.js", "PostgreSQL", "Stripe"],
    timeline: "6 months",
    industry: "Food & Agriculture"
  },
  {
    id: "music-streaming",
    title: "SoundWave Studio",
    description: "Independent artist-focused music streaming platform with blockchain-based royalty distribution and fan engagement tools.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Music", "Blockchain"],
    results: [
      "10k+ independent artists",
      "Blockchain royalty payments",
      "1M+ monthly streams"
    ],
    tech: ["React", "Solidity", "IPFS", "Web3.js"],
    timeline: "11 months",
    industry: "Entertainment"
  },
  {
    id: "mental-health",
    title: "MindfulCare",
    description: "Mental health support platform offering therapy matching, mood tracking, and crisis intervention with 24/7 support.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Healthcare", "Mental Health"],
    results: [
      "25k+ therapy sessions facilitated",
      "95% user satisfaction rate",
      "24/7 crisis support available"
    ],
    tech: ["React", "Python", "PostgreSQL", "WebRTC"],
    timeline: "8 months",
    industry: "Healthcare"
  },
  {
    id: "travel-planning",
    title: "WanderAI",
    description: "AI-powered travel planning platform creating personalized itineraries based on preferences, budget, and real-time data.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Travel", "AI"],
    results: [
      "100k+ itineraries generated",
      "AI-powered recommendations",
      "Integration with 500+ travel services"
    ],
    tech: ["Next.js", "Python", "OpenAI API", "MongoDB"],
    timeline: "5 months",
    industry: "Travel"
  },
  {
    id: "automotive-tech",
    title: "AutoConnect Pro",
    description: "Connected car platform for fleet management with predictive maintenance, route optimization, and driver analytics.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Automotive", "IoT"],
    results: [
      "5000+ vehicles connected",
      "30% reduction in maintenance costs",
      "Real-time fleet tracking"
    ],
    tech: ["React", "Python", "IoT sensors", "InfluxDB"],
    timeline: "13 months",
    industry: "Automotive"
  },
  {
    id: "gaming-platform",
    title: "GameVerse Arena",
    description: "Competitive gaming platform with tournament management, live streaming, and NFT-based rewards for players.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Gaming", "Web3"],
    results: [
      "50k+ registered gamers",
      "500+ tournaments hosted",
      "NFT-based reward system"
    ],
    tech: ["React", "Solidity", "WebRTC", "IPFS"],
    timeline: "9 months",
    industry: "Gaming"
  },
  {
    id: "agriculture-tech",
    title: "CropSense AI",
    description: "Precision agriculture platform using drones and AI for crop monitoring, yield prediction, and pest detection.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Agriculture", "AI"],
    results: [
      "10k+ acres monitored",
      "25% increase in crop yield",
      "Early pest detection system"
    ],
    tech: ["React", "Python", "TensorFlow", "Drone APIs"],
    timeline: "10 months",
    industry: "Agriculture"
  },
  {
    id: "fintech-lending",
    title: "LendTech Solutions",
    description: "Alternative lending platform using machine learning for credit scoring and automated loan approvals for SMEs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["FinTech", "AI"],
    results: [
      "$50M+ in loans processed",
      "2-minute approval process",
      "15% default rate reduction"
    ],
    tech: ["React", "Python", "Scikit-learn", "PostgreSQL"],
    timeline: "8 months",
    industry: "FinTech"
  },
  {
    id: "legal-tech",
    title: "LegalEase Platform",
    description: "Legal technology platform automating contract analysis and document generation for law firms and businesses.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Legal Tech", "AI"],
    results: [
      "1000+ law firms using platform",
      "80% reduction in document review time",
      "99.5% accuracy in contract analysis"
    ],
    tech: ["React", "Python", "NLP models", "MongoDB"],
    timeline: "12 months",
    industry: "Legal"
  },
  {
    id: "fashion-tech",
    title: "StyleSync AR",
    description: "Fashion technology platform with virtual try-on capabilities and AI-powered style recommendations for online retailers.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Fashion", "AR"],
    results: [
      "2M+ virtual try-ons",
      "40% reduction in return rates",
      "Integration with 100+ fashion brands"
    ],
    tech: ["React", "ARCore", "TensorFlow", "PostgreSQL"],
    timeline: "7 months",
    industry: "Fashion"
  },
  {
    id: "construction-tech",
    title: "BuildSmart Management",
    description: "Construction project management platform with drone surveying, progress tracking, and safety compliance monitoring.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Construction", "IoT"],
    results: [
      "200+ construction projects managed",
      "30% improvement in project timelines",
      "Zero safety incidents"
    ],
    tech: ["React", "Python", "Drone APIs", "PostgreSQL"],
    timeline: "11 months",
    industry: "Construction"
  },
  {
    id: "media-analytics",
    title: "MediaInsight Pro",
    description: "Media analytics platform providing real-time audience insights and content performance optimization for broadcasters.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Media", "Analytics"],
    results: [
      "50+ media companies using platform",
      "Real-time audience analytics",
      "25% increase in content engagement"
    ],
    tech: ["React", "Python", "Kafka", "Elasticsearch"],
    timeline: "6 months",
    industry: "Media"
  },
  {
    id: "sports-tech",
    title: "AthleteMax Performance",
    description: "Sports performance analytics platform using wearable sensors and AI to optimize athlete training and prevent injuries.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Sports", "AI"],
    results: [
      "500+ professional athletes tracked",
      "40% reduction in injury rates",
      "Performance optimization algorithms"
    ],
    tech: ["React", "Python", "IoT sensors", "TensorFlow"],
    timeline: "9 months",
    industry: "Sports"
  },
  {
    id: "insurance-tech",
    title: "ClaimAI Processor",
    description: "Insurance technology platform automating claims processing with computer vision and fraud detection algorithms.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Insurance", "AI"],
    results: [
      "100k+ claims processed automatically",
      "90% reduction in processing time",
      "95% fraud detection accuracy"
    ],
    tech: ["React", "Python", "OpenCV", "PostgreSQL"],
    timeline: "10 months",
    industry: "Insurance"
  },
  {
    id: "retail-analytics",
    title: "RetailVision Analytics",
    description: "Retail analytics platform using computer vision for customer behavior analysis and inventory optimization.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Retail", "Computer Vision"],
    results: [
      "1000+ retail stores analyzed",
      "25% increase in sales conversion",
      "Real-time inventory tracking"
    ],
    tech: ["React", "Python", "OpenCV", "MongoDB"],
    timeline: "8 months",
    industry: "Retail"
  }
];
