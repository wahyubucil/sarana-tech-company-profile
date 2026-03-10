export const companyInfo = {
  name: 'Sarana Group',
  tagline: 'Empowering Your Digital Transformation',
  description:
    'We are a premier digital agency and startup incubator based in Bali, driving innovation through software development, talent empowerment, and smart solutions.',
  contact: {
    phone: '+62 813-3827-0676',
    email: 'info@saranatech.id',
    website: 'www.sarana.tech',
    address: 'Bali, Indonesia',
  },
  socials: [
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },
  ],
};

export const brands = [
  {
    name: 'Sarana Tech',
    description:
      'Your partner in crafting robust digital ecosystems. We specialize in high-performance websites, mobile applications, and comprehensive management systems tailored to your business needs.',
    icon: 'code',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Geek Impact',
    description:
      'Bridging the gap between talent and industry. We provide top-tier education, career development, and resource outsourcing to fuel the digital workforce of tomorrow.',
    icon: 'users',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Xarana',
    description:
      'Revolutionizing transportation management. A startup focused on delivering smart, efficient, and scalable logistics and transport solutions.',
    icon: 'map',
    color: 'from-teal-500 to-emerald-500',
  },
];

export const caseStudies = [
  {
    id: 'ebc',
    client: 'Eco Beach City',
    category: 'Real Estate & Property Tech',
    title: 'Digitalizing Sustainable Living in Sumba',
    challenge:
      'Eco Beach City (EBC) faced significant hurdles in processing international property bookings (USD/EUR) and visualizing complex vector maps for plot selection. They needed a system to handle high-resolution assets and seamless transactions without compromising performance.',
    solution:
      'We deployed a dedicated team to engineer a custom booking engine with multi-currency support. By optimizing vector-to-plot conversion and implementing a Laravel-backed subdomain, we ensured a smooth, responsive user experience for international investors.',
    results: [
      'Optimized plot booking flow with real-time availability.',
      'Seamless multi-currency payment integration.',
      'High-performance map visualization for large vector assets.',
    ],
    image: '/placeholder-ebc.jpg',
  },
  {
    id: 'unbi',
    client: 'Universitas Bali Internasional',
    category: 'EdTech & FinTech',
    title: 'Modernizing Campus Financial Ecosystems',
    challenge:
      'Managing finances for over 2,000 students across 12 programs was becoming a bottleneck. UNBI struggled with manual manual budgeting, lack of real-time cash flow visibility, and limited payment channels that frustrated non-local students.',
    solution:
      'We integrated a comprehensive Virtual Account (VA) system for automated payments and built a real-time budgeting dashboard. The new multi-channel payment gateway allows students to pay via various banks and retail merchants like Indomaret.',
    results: [
      'Automated tuition reconciliation via Virtual Accounts.',
      'Real-time financial dashboard for unit-based budgeting.',
      'Multi-channel payment options improving student accessibility.',
    ],
    image: '/placeholder-unbi.jpg',
  },
  {
    id: 'sun',
    client: 'SUN Rent a Car',
    category: 'Automotive & B2C',
    title: 'Accelerating Digital Presence for Vehicle Rentals',
    challenge:
      'Despite being a major player since 1974, SUN Rent a Car relied on manual WhatsApp orders and lacked a digital catalog. Scheduling was inefficient, and they had zero SEO presence, making it hard to capture online demand.',
    solution:
      'We delivered a full-stack transformation: a custom booking engine with high/low season dynamic pricing, automated reminders, and a high-performance website optimized for SEO and core web vitals.',
    results: [
      '92/100 SEO Score & 100/100 Performance on PageSpeed Insight.',
      '85% increase in operational efficiency via dashboard centralization.',
      '0.6s Page Speed Index for lightning-fast user experience.',
    ],
    image: '/placeholder-sun.jpg',
  },
];

export const testimonials = [
  {
    name: 'Enrique Medina',
    role: 'Project Manager, Webfeeling',
    quote:
      'Working with Sarana Tech has been a pleasure. They are highly skilled, knowledgeable, and their meticulous approach ensures every application is well-structured and loyal to our UI designs.',
    avatar: '/placeholder-avatar-1.jpg',
  },
  {
    name: 'I Nyoman Sudiarta',
    role: 'Chairman of PAWIBA',
    quote:
      'I am very impressed with the development services provided. They exceeded my expectations in every aspect, showing extraordinary professionalism and deep understanding of our business needs.',
    avatar: '/placeholder-avatar-2.jpg',
  },
];

export const partners = [
  'Google Digital Garage',
  'DailySocial.id',
  'Binar Academy',
  'TechInAsia',
  'Rumah Perubahan',
  'Tribun Bali',
  'BNSP',
  'GDG Bali',
  'Kementerian Pemuda dan Olahraga',
  'Ristek-Brin',
];
