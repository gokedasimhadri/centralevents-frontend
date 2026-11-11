export const CATEGORIES = [
  'All',
  'Technology',
  'Culture',
  'Music',
  'Business',
  'Design',
  'Sports',
  'Food & Dining',
  'Gaming'
];

export const INITIAL_EVENTS = [
  {
    id: 'evt-veda',
    title: 'VEDA - National Level Tech Fest',
    tagline: 'Think. Create. Present. Innovate. Inspire.',
    description: 'VEDA is the premier national-level technological, entrepreneurial, and student innovation symposium organized by Aditya University. Join thousands of young engineers, developers, and innovators for robotics competitions, project exhibitions, 24hr hackathons, coding contests, and technical workshops.',
    category: 'Technology',
    date: '2026-09-11',
    time: '09:00 AM - 05:30 PM IST',
    location: 'Aditya University Campus, Surampalem, Andhra Pradesh',
    locationType: 'In-person',
    link: 'https://veda.adityauniversity.in/',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    price: 'Free',
    attendees: 3850,
    capacity: 5000,
    organizer: {
      name: 'Aditya University',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: true,
    tags: ['Veda', 'TechFest', 'Robotics', 'Coding', 'AdityaUniversity'],
    speakers: [
      { name: 'Technical Convenor', role: 'Symposium Lead', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80' },
      { name: 'Dr. Innovation Lead', role: 'Faculty Advisor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-colours-2027',
    title: 'Colours 2027 - National Youth Festival',
    tagline: 'The Grand Annual Youth, Cultural & Sports Extravaganza.',
    description: 'Colours 2027 is Aditya University’s flagship national youth festival celebrated every year. Experience 3 electrifying days of high-octane cultural performances, celebrity musical concerts, national dance battles, traditional arts, sports tournaments, and the signature Colours Blast celebration.',
    category: 'Culture',
    date: '2027-01-09',
    time: '10:00 AM - 10:00 PM IST',
    location: 'Aditya University Stadium & Grounds, Surampalem',
    locationType: 'In-person',
    link: 'https://colours.adityauniversity.in/',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    price: 'Free',
    attendees: 18500,
    capacity: 25000,
    organizer: {
      name: 'Aditya University',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: true,
    tags: ['Colours2027', 'YouthFest', 'Cultural', 'Concert', 'AdityaUniversity'],
    speakers: [
      { name: 'Celebrity Guest Artists', role: 'Live Concert Performers', avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=120&q=80' },
      { name: 'Colours Steering Committee', role: 'Festival Organizers', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80' }
    ]
  },
  {
    id: 'evt-forensithon',
    title: 'Forensithon - Forensic Science & Cyber Forensics Hackathon',
    tagline: 'Decode Clues. Analyze Evidence. Solve the Investigation.',
    description: 'Forensithon is a premier national cyber forensics and crime scene investigation hackathon hosted by Aditya University. Students and cyber enthusiasts compete in simulated crime scene analyses, digital evidence extraction, CTF challenges, malware investigation, and cyber defense protocols.',
    category: 'Technology',
    date: '2026-12-10',
    time: '09:00 AM - 06:00 PM IST',
    location: 'School of Forensic Sciences, Aditya University, Surampalem',
    locationType: 'In-person',
    link: 'https://events.adityauniversity.in/forensithon/',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    price: 'Free',
    attendees: 1450,
    capacity: 2000,
    organizer: {
      name: 'Department of Forensic Science, Aditya University',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    featured: true,
    tags: ['Forensithon', 'ForensicScience', 'CyberSecurity', 'CTF', 'AdityaUniversity'],
    speakers: [
      { name: 'Dr. Cyber Forensics Lead', role: 'Department Head & Chief Mentor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
      { name: 'Digital Investigation Specialist', role: 'CTF Coordinator', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80' }
    ]
  }
];
