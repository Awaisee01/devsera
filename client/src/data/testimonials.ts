export interface Testimonial {
  id: string;
  name: string;
  title: string;
  content: string;
  avatarBg: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "john-doe",
    name: "John Doe",
    title: "CEO, KlickEx",
    content: "Phenomenon Studio delivered exceptional results. The redesign boosted our conversion rate by 35% and the team's expertise in fintech was evident throughout the project.",
    avatarBg: "bg-terracotta",
    initials: "JD"
  },
  {
    id: "sarah-miller",
    name: "Sarah Miller",
    title: "CTO, Isora",
    content: "Working with this team was a game-changer. Their attention to detail and ability to understand our complex requirements was outstanding. The platform now serves thousands of users seamlessly.",
    avatarBg: "bg-premium",
    initials: "SM"
  },
  {
    id: "robert-kim",
    name: "Robert Kim",
    title: "Founder, Shaga",
    content: "The user engagement on our platform increased by 40% after the redesign. The team's expertise in Web3 and gaming was exactly what we needed to create an award-winning experience.",
    avatarBg: "bg-amber",
    initials: "RK"
  },
  {
    id: "michelle-chang",
    name: "Michelle Chang",
    title: "Product Director, Nomupay",
    content: "Phenomenon Studio transformed our vision into reality. The €35.9M funding round success was partly due to the incredible product experience they helped us build.",
    avatarBg: "bg-premium",
    initials: "MC"
  },
  {
    id: "david-anderson",
    name: "David Anderson",
    title: "VP Engineering, One Text",
    content: "As a Y Combinator startup, we needed to move fast without compromising quality. The team delivered a production-ready MVP that impressed investors and users alike.",
    avatarBg: "bg-terracotta",
    initials: "DA"
  },
  {
    id: "lisa-wong",
    name: "Lisa Wong",
    title: "Head of Product, DoStuffMedia",
    content: "The redesign helped us achieve 2.5M monthly visits and 23M social impressions. The team understood our entertainment industry needs perfectly.",
    avatarBg: "bg-amber",
    initials: "LW"
  },
  {
    id: "alex-petrov",
    name: "Alex Petrov",
    title: "CTO, Tokenize",
    content: "Building a secure, scalable exchange required deep technical expertise. The team delivered a platform that handles thousands of transactions with 99.9% uptime.",
    avatarBg: "bg-premium",
    initials: "AP"
  },
  {
    id: "fatima-hassan",
    name: "Fatima Hassan",
    title: "Director, Qurtuba Online",
    content: "Becoming South Africa's top EdTech institution was possible because of the exceptional learning platform they built. Student engagement increased by 300%.",
    avatarBg: "bg-terracotta",
    initials: "FH"
  },
  {
    id: "james-stewart",
    name: "James Stewart",
    title: "Operations Director, Airportr",
    content: "Being recognized as a top 5 UK transport tech firm was accelerated by the innovative logistics platform. Baggage handling time reduced by 60%.",
    avatarBg: "bg-amber",
    initials: "JS"
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    title: "Product Manager, MedConnect Pro",
    content: "HIPAA compliance and user experience don't often go hand in hand, but they made it work beautifully. 50k+ patients trust our platform daily.",
    avatarBg: "bg-premium",
    initials: "PS"
  }
];
