export const CATEGORIES = [
  'All',
  'Technology',
  'Music',
  'Business',
  'Design',
  'Sports',
  'Culture',
  'Food & Dining',
  'Gaming'
];

export const INITIAL_EVENTS = [
  {
    id: 'evt-1',
    title: 'Global React & Next.js Developers Summit 2026',
    tagline: 'Connect with core maintainers and industry pioneers building modern web apps.',
    description: 'Join over 2,500 developers for an immersive 2-day conference covering React 19, Server Components, Vite optimizations, modern architecture, and high-performance frontend engineering. Includes live hands-on coding labs and speaker Q&A.',
    category: 'Technology',
    date: '2026-11-20',
    time: '09:30 AM - 05:30 PM IST',
    location: 'HICC Novotel, Hitec City, Hyderabad',
    locationType: 'In-person',
    link: 'https://react.dev',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    price: 'Free',
    attendees: 1840,
    capacity: 2000,
    organizer: {
      name: 'TechWave Global',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: true,
    tags: ['React', 'Vite', 'Frontend', 'Next.js'],
    speakers: [
      { name: 'Dr. Dan Abramov', role: 'React Core Contributor', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80' },
      { name: 'Sophie Alpert', role: 'Frontend Architect', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-2',
    title: 'Hyderabad Indie Music Festival & Live Concert',
    tagline: 'An electric night under the stars with top indie and fusion artists.',
    description: 'Experience 8 sensational indie bands, acoustic sunset stages, artisan food trucks, craft mocktails, and interactive art installations. Grab your tickets before they sell out!',
    category: 'Music',
    date: '2026-11-25',
    time: '04:00 PM - 11:00 PM IST',
    location: 'Gachibowli Outdoor Stadium, Hyderabad',
    locationType: 'In-person',
    link: 'https://insider.in',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    price: '₹799',
    attendees: 3200,
    capacity: 4000,
    organizer: {
      name: 'Echoes Live India',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: true,
    tags: ['Live Concert', 'Indie', 'Acoustic', 'Nightlife'],
    speakers: [
      { name: 'The Local Train Band', role: 'Headliner Rock Band', avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-3',
    title: 'AI & Generative Agents Masterclass for Builders',
    tagline: 'Step-by-step masterclass on LLMs, MCP servers, and agentic workflows.',
    description: 'Live interactive workshop where you will build autonomous agents from scratch using modern SDKs. Ideal for software engineers, product founders, and technical enthusiasts.',
    category: 'Technology',
    date: '2026-11-22',
    time: '06:00 PM - 08:30 PM IST',
    location: 'Live on Google Meet & Discord',
    locationType: 'Online',
    link: 'https://deepmind.google',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    price: 'Free',
    attendees: 890,
    capacity: 1000,
    organizer: {
      name: 'Agentic AI Guild',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: false,
    tags: ['AI Agents', 'LLMs', 'Python', 'Hands-on'],
    speakers: [
      { name: 'Priya Sharma', role: 'Staff AI Researcher', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-4',
    title: 'Startup Pitch & Venture Capital Speed Dating',
    tagline: 'Pitch your early-stage startup directly to 20+ prominent Angel Investors and VCs.',
    description: 'A curated deal-making forum where pre-seed and seed founders get 5-minute rapid pitch sessions with active venture capital firms. Networking dinner and founder cocktail included.',
    category: 'Business',
    date: '2026-11-28',
    time: '10:00 AM - 04:00 PM IST',
    location: 'T-Hub 2.0 Catalyst Arena, Knowledge City',
    locationType: 'In-person',
    link: 'https://t-hub.co',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    price: '₹1,499',
    attendees: 140,
    capacity: 150,
    organizer: {
      name: 'VentureCatalysts Network',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: false,
    tags: ['Fundraising', 'Startups', 'Networking', 'Investors'],
    speakers: [
      { name: 'Karthik Reddy', role: 'Managing Partner @ Blume', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-5',
    title: 'Creative UI/UX & Figma Design Systems Bootcamp',
    tagline: 'Master design tokens, auto-layout, micro-interactions, and component libraries.',
    description: 'Level up your design skills with hands-on Figma techniques. Learn how top product design teams maintain scalable design systems across web and mobile platforms.',
    category: 'Design',
    date: '2026-12-02',
    time: '02:00 PM - 06:00 PM IST',
    location: 'Online Workshop (Zoom)',
    locationType: 'Online',
    link: 'https://figma.com',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    price: '₹499',
    attendees: 420,
    capacity: 500,
    organizer: {
      name: 'DesignCraft Studio',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: false,
    tags: ['UI/UX', 'Figma', 'Design Systems', 'Product'],
    speakers: [
      { name: 'Ananya Rao', role: 'Head of Product Design', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-6',
    title: 'Hyderabad City 10K Marathon & Fitness Expo',
    tagline: 'Run for wellness through the scenic Necklace Road and Tank Bund.',
    description: 'Join 5,000+ enthusiastic runners for the annual city marathon. Finisher medals, timing chips, breakfast kit, running jersey, and celebratory DJ after-party included.',
    category: 'Sports',
    date: '2026-12-06',
    time: '05:30 AM - 10:00 AM IST',
    location: 'Peoples Plaza, Necklace Road, Hyderabad',
    locationType: 'In-person',
    link: 'https://www.hyderabadrunners.com',
    imageUrl: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=80',
    price: '₹599',
    attendees: 3850,
    capacity: 5000,
    organizer: {
      name: 'Hyderabad Runners Club',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: true,
    tags: ['Fitness', 'Marathon', 'Running', 'Health'],
    speakers: [
      { name: 'Coach Rajesh Kumar', role: 'Olympic Marathon Coach', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-7',
    title: 'Telugu Literature & Cultural Heritage Fest 2026',
    tagline: 'Celebrating Telugu poetry, folk music, storytelling, and classic arts.',
    description: 'A vibrant weekend celebrating Telugu sahityam, classical dance, kavi sammelanam, traditional cuisine stalls, and interactive book launches with eminent Telugu writers.',
    category: 'Culture',
    date: '2026-12-12',
    time: '10:00 AM - 08:30 PM IST',
    location: 'Ravindra Bharathi Auditorium, Lakdikapool, Hyderabad',
    locationType: 'In-person',
    link: 'https://telangana.gov.in',
    imageUrl: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1200&q=80',
    price: 'Free',
    attendees: 1200,
    capacity: 1500,
    organizer: {
      name: 'Telugu Samskrutika Sangham',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: false,
    tags: ['Culture', 'Telugu Literature', 'Music', 'Heritage'],
    speakers: [
      { name: 'Dr. V. Prasad', role: 'Eminent Author & Historian', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-8',
    title: 'Cloud DevOps & Kubernetes Zero-to-Production Workshop',
    tagline: 'CI/CD pipelines, Docker containerization, Helm charts, and AWS deployment.',
    description: 'Learn modern DevOps practices from senior cloud engineers. Includes hands-on sandbox access to provision Kubernetes clusters, automated zero-downtime rollouts, and Prometheus monitoring.',
    category: 'Technology',
    date: '2026-12-15',
    time: '11:00 AM - 03:00 PM IST',
    location: 'Virtual Classroom (Live Hands-on)',
    locationType: 'Online',
    link: 'https://kubernetes.io',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    price: '₹299',
    attendees: 310,
    capacity: 400,
    organizer: {
      name: 'DevOps Cloud Tribe',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: false,
    tags: ['DevOps', 'Docker', 'Kubernetes', 'AWS'],
    speakers: [
      { name: 'Vikram Joshi', role: 'Principal SRE @ Enterprise', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-9',
    title: 'National 36-Hour Hackathon & Web3 Innovation Arena',
    tagline: 'Build groundbreaking open-source apps, smart contracts, and AI dApps with cash prizes ₹5,00,000.',
    description: 'Collaborate with teams of 2-4 developers in an exhilarating 36-hour sprint. Mentors from top tech enterprises on-site with free meals, energy drinks, gaming chill zones, and swags.',
    category: 'Technology',
    date: '2026-12-18',
    time: '08:00 AM (Day 1) - 08:00 PM (Day 2)',
    location: 'BITS Pilani Hyderabad Campus, Shameerpet',
    locationType: 'In-person',
    link: 'https://devpost.com',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    price: 'Free',
    attendees: 640,
    capacity: 700,
    organizer: {
      name: 'CodeArena India',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: true,
    tags: ['Hackathon', 'Web3', 'OpenSource', 'CashPrizes'],
    speakers: [
      { name: 'Siddharth Roy', role: 'Founder & Angel Investor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-10',
    title: 'Hyderabad Street Food & Biryani Carnival',
    tagline: 'Over 60 signature food pop-ups, authentic Hyderabadi Dum Biryani, and artisanal desserts.',
    description: 'Celebrate the royal culinary flavours of Hyderabad with masterchefs. Featuring live cooking challenges, acoustic evening gigs, and food stalls from historic Old City to trendy modern bistros.',
    category: 'Food & Dining',
    date: '2026-12-20',
    time: '12:00 PM - 10:30 PM IST',
    location: 'Hitex Exhibition Grounds, Izzat Nagar, Madhapur',
    locationType: 'In-person',
    link: 'https://zomato.com',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    price: '₹199',
    attendees: 4500,
    capacity: 6000,
    organizer: {
      name: 'Flavours of Deccan',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: false,
    tags: ['Biryani', 'StreetFood', 'Foodies', 'Carnival'],
    speakers: [
      { name: 'Chef Mehboob Alam', role: 'Master Biryani Specialist', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-11',
    title: 'Valorant & BGMI Esports Championship Grand Finals',
    tagline: 'Watch India’s top 16 esports teams battle live on giant LED stages for ₹10 Lakhs prize pool.',
    description: 'Experience heart-pounding esports gaming action with professional casters, cosplay competitions, VR gaming booths, and fan merchandise zones.',
    category: 'Gaming',
    date: '2026-12-24',
    time: '01:00 PM - 09:00 PM IST',
    location: 'Kotla Vijay Bhaskar Reddy Indoor Stadium, Yousufguda',
    locationType: 'In-person',
    link: 'https://youtube.com',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    price: '₹349',
    attendees: 2100,
    capacity: 2500,
    organizer: {
      name: 'Apex Esports League',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: true,
    tags: ['Esports', 'Valorant', 'BGMI', 'GamingTourney'],
    speakers: [
      { name: 'Mortal (Naman)', role: 'Guest Caster & Gaming Icon', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-12',
    title: 'Creative Wildlife & Street Photography Masterclass',
    tagline: 'Practical field techniques, framing, low-light mastery, and Adobe Lightroom grading.',
    description: 'Take your photography to the next level with hands-on photowalk around Charminar and Qutb Shahi Tombs. Includes 1-on-1 photo portfolio reviews and presets download kit.',
    category: 'Design',
    date: '2026-12-27',
    time: '06:30 AM - 11:30 AM IST',
    location: 'Charminar Historic Precinct, Hyderabad',
    locationType: 'In-person',
    link: 'https://adobe.com',
    imageUrl: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80',
    price: '₹449',
    attendees: 85,
    capacity: 100,
    organizer: {
      name: 'LensCrafters India',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      verified: false
    },
    featured: false,
    tags: ['Photography', 'Photowalk', 'Camera', 'Lightroom'],
    speakers: [
      { name: 'Arun Bhatia', role: 'National Geographic Contributor', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80' }
    ]
  }
];
