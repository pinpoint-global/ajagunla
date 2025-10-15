import { Facebook, Instagram, Linkedin, TwitterX } from '@/components/icons';
import { FooterContactRowProps } from '@/components/layout/Footer';
import { HeaderLinkProps } from '@/components/layout/Header';
import { AboutSummary } from '@/components/sections/home/About';
import { CommunityEngagementProps } from '@/components/sections/home/Community';
import { HeroQuickStats } from '@/components/sections/home/Hero';
import { LegislativeHighlightProps } from '@/components/sections/home/Legislative';
import {
  Phone,
  Mail,
  // Clock,
  // ArrowRight,
  GraduationCap,
  Users,
  Wifi,
  TrendingUp,
  MapPin,
  Award,
  Briefcase,
  Heart,
  Calendar,
} from 'lucide-react';

const liveUrl = process.env.live_url || 'https://ajagunla1.com';

export const SEO_DETAILS = {
  title: {
    default: 'Senator Olubiyi Fadeyi-Ajagunla - Serving Osun Central Senatorial District',
    template: '%s | Senator Olubiyi Fadeyi-Ajagunla',
  },
  description:
    'Official portfolio of Senator Olubiyi Fadeyi-Ajagunla. Committed to community development, education, and empowerment. Discover legislative achievements and community initiatives.',
  ogDesc: 'Serving the People of Osun Central with Integrity and Progress',
  metadataBase: new URL(liveUrl),
  alternates: {
    canonical: liveUrl,
  },
  image: 'https://static.pinpoint.ng/ajagunla/images/site-preview.webp',
  icons: '/favicon.png',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
    },
  },
  authors: [{ name: 'Edward-Precious Omegbu', url: 'https://portfolio-codegiyu.vercel.app' }],
  keywords: [
    'Ajagunla',
    'Senator Olubiyi Fadeyi',
    'Nigerian senator',
    'Osun state senator',
    'APC senator',
    'Ajagunla foundation',
    'Osun Central Senatorial District',
    'Senator Olubiyi Fadeyi Osun Central',
    'Ajagunla projects',
    'Senator Olubiyi Fadeyi campaign',
    'Senator Olubiyi Fadeyi official website',
    'Ajagunla official website',
  ],
  generator: 'Next.js',
  // referrer: 'no-referrer',
  publisher: 'Pinpoint Global Limited',
  category: 'Creative Agency',
  classification: 'Complete solution for branding, marketing, packaging and digital products',
};

export const NAV_LINKS: HeaderLinkProps[] = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '#', footerOnlySuffix: ' Sen. Olubiyi Fadeyi' },
  { text: 'Legislative Work', href: '#' },
  { text: 'Community', href: '#' },
  { text: 'Contact', href: '#' },
];

export const CONTACT_INFORMATION = {
  address: ['No 10 Stephen Akinbolagbe Street,', 'Off Omi Asoro, Ilesa. Osun State.'],
  tel: ['+234 901 147 9072', '+234 706 498 6996'],
  whatsapp: '+234 706 498 6996',
  email: ['info@ajagunla1.com'],
  locationUrl: 'https://maps.app.goo.gl/s3zc3XerGysdCCvp8',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5703515735695!2d4.781864784491368!3d7.6216388727818725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1038196968766f3f%3A0xd48f876bbd0bdc6b!2sHardunni%20Limited!5e0!3m2!1sen!2sng!4v1759507060782!5m2!1sen!2sng',
};

// export const CONTACT_CARDS: ContactCardProps[] = [
//   {
//     LucideIcon: MapPin,
//     title: 'Our Locations',
//     texts: CONTACT_INFORMATION.address.map(text => ({
//       text,
//       link: CONTACT_INFORMATION.locationUrl,
//     })),
//     pretext: 'Hardunni Limited',
//   },
//   {
//     LucideIcon: Phone,
//     title: 'Phone',
//     texts: CONTACT_INFORMATION.tel.map(phone => ({
//       text: phone,
//       link: `tel:${phone.replaceAll(' ', '')}`,
//     })),
//   },
//   {
//     LucideIcon: Mail,
//     title: 'Email',
//     texts: CONTACT_INFORMATION.email.map(text => ({ text, link: `mailto:${text}` })),
//   },
//   // {
//   //   Icon: Whatsapp,
//   //   title: 'Whatsapp',
//   //   texts: [
//   //     {
//   //       text: CONTACT_INFORMATION.whatsapp,
//   //       link: `https://wa.me/${CONTACT_INFORMATION.whatsapp.slice(1).replaceAll(' ', '')}`,
//   //     },
//   //   ],
//   // },
//   {
//     LucideIcon: Clock,
//     title: 'Business Hours',
//     texts: [
//       { text: 'Monday - Friday: 7:00 AM - 6:00 PM' },
//       { text: 'Saturday: 8:00 AM - 4:00 PM' },
//       { text: 'Sunday: Closed' },
//     ],
//   },
// ];

export const CONTACT_CARDS_FOR_FOOTER: FooterContactRowProps[] = [
  {
    LucideIcon: MapPin,
    href: 'https://maps.app.goo.gl/bBVU6r6zVEhxURAW9',
    texts: [
      { text: 'National Assembly Complex,' },
      { text: 'Three Arms Zone,' },
      { text: 'Abuja' },
    ],
  },
  {
    LucideIcon: Phone,
    texts: CONTACT_INFORMATION.tel.map(phone => ({
      text: phone,
      link: `tel:${phone.replaceAll(' ', '')}`,
    })),
  },
  {
    LucideIcon: Mail,
    texts: CONTACT_INFORMATION.email.map(mail => ({
      text: mail,
      link: `mailto:${mail}`,
    })),
  },
];

export const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    Icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    Icon: Facebook,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    Icon: Linkedin,
  },
  {
    label: 'X',
    href: 'https://wwww.x.com',
    Icon: TwitterX,
  },
  // {
  //   label: 'Tiktok',
  //   href: 'https://www.tiktok.com/@pinpointglobal?_t=ZS-8yRAXCYmRLp&_r=1',
  //   Icon: Tiktok,
  // },
];

export const HERO_STATS: HeroQuickStats[] = [
  { title: '2023', text: 'Elected to Senate' },
  { title: '2 Committees', text: 'Vice Chairman' },
  { title: '2024', text: 'Philanthropist of The Year' },
];

export const ABOUT_SUMMARIES: AboutSummary[] = [
  {
    Icon: Award,
    title: 'Political Leadership',
    text: 'Elected Senator for Osun Central in 2023. Vice Chairman of\
    Communications and Trade & Investment Committees.',
  },
  {
    Icon: Briefcase,
    title: 'Business Excellence',
    text: 'Former Executive Vice Chairman of Fane Group and Chairman\
    of Harvard Continental Hotels.',
  },
  {
    Icon: GraduationCap,
    title: 'Education & Training',
    text: 'BA from OAU, LLM from University of Cumbria, Executive\
    courses from Harvard Kennedy School and LSE.',
  },
];

export const COMMUNITY_SUMMARIES: CommunityEngagementProps[] = [
  {
    Icon: Heart,
    title: 'Ajagunla Foundation',
    description:
      'Non-profit organization focused on education, empowerment,\
      and community development across Osun State.',
  },
  {
    Icon: Users,
    title: 'Youth Empowerment',
    description:
      'Skills acquisition programs, job placements, and entrepreneurship\
      support for young people.',
  },
  {
    Icon: Calendar,
    title: 'Regular Town Halls',
    description:
      'Open forums for constituents to discuss issues and participate\
      in decision-making processes.',
  },
];

export const ABOUT_PREVIEW_HIGHLIGHTS = [
  'Strategic Brand Development',
  'Visual Identity Design',
  'Brand Storytelling',
];

export const LEGISLATIVE_HIGHLIGHTS: LegislativeHighlightProps[] = [
  {
    Icon: GraduationCap,
    title: 'Education Infrastructure',
    description: 'NOUN classroom block construction in Oke-Ila for enhanced learning',
  },
  {
    Icon: Users,
    title: 'Youth Employment',
    description: 'Secured Federal Fire Service positions for 14 youths in October 2025',
  },
  {
    Icon: Wifi,
    title: 'Senate Communications',
    description: "Vice Chairman shaping Nigeria's communications policy",
  },
  {
    Icon: TrendingUp,
    title: 'Trade & Investment',
    description: 'Vice Chairman driving economic growth and investment opportunities',
  },
];

// export const previewProjects = [
//   'tech-startup-rebrand',
//   'community-festival-identity',
//   'organic-skincare-packaging',
// ];

// export const projects: FullProject[] = [
//   {
//     _id: 'tech-startup-rebrand',
//     slug: 'tech-startup-rebrand',
//     title: 'Tech Startup Complete Rebrand',
//     category: 'Personal Branding',
//     description:
//       'Complete brand identity redesign for a growing tech startup, including logo, color palette, and brand guidelines.',
//     fullDescription:
//       'A comprehensive rebranding project for an emerging technology company transitioning from startup to scale-up phase. The project encompassed every aspect of the brand identity system.',
//     image: '/placeholder.svg',
//     challenge:
//       'The company had outgrown their initial DIY branding and needed a professional identity that could compete in the enterprise market while maintaining their innovative spirit.',
//     solution:
//       'Developed a sophisticated yet approachable brand system featuring a modern geometric logo, vibrant color palette, and comprehensive brand guidelines for consistent application across all touchpoints.',
//     results: [
//       '300% increase in brand recognition',
//       'Successful $5M Series A funding round',
//       'Featured in major tech publications',
//       '25% improvement in client conversion rates',
//     ],
//     year: '2024',
//     createdAt: '',
//     updatedAt: '',
//   },
//   {
//     _id: 'community-festival-identity',
//     slug: 'community-festival-identity',
//     title: 'Annual Community Festival Identity',
//     category: 'Community Branding',
//     description:
//       'Vibrant brand identity for a local cultural festival celebrating diversity and creativity.',
//     fullDescription:
//       'Created a dynamic and inclusive brand identity for an annual community festival that brings together diverse cultures, artists, and local businesses.',
//     image: '/placeholder.svg',
//     challenge:
//       'The festival needed a brand that could appeal to multiple generations and cultural backgrounds while standing out in a crowded event calendar.',
//     solution:
//       'Designed a flexible identity system with colorful, modular elements that could be customized for different cultural celebrations while maintaining brand cohesion.',
//     results: [
//       '40% increase in attendance',
//       '50+ local businesses participated',
//       'Won Best Community Event Award',
//       'Secured major sponsorships',
//     ],
//     year: '2023',
//     createdAt: '',
//     updatedAt: '',
//   },
//   {
//     _id: 'organic-skincare-packaging',
//     slug: 'organic-skincare-packaging',
//     title: 'Organic Skincare Line Packaging',
//     category: 'Packaging Design',
//     description:
//       'Eco-friendly packaging design for a sustainable skincare brand launching their premium product line.',
//     fullDescription:
//       'Developed a complete packaging system for an organic skincare brand committed to sustainability and natural ingredients.',
//     image: '/placeholder.svg',
//     challenge:
//       'Create premium packaging that communicates luxury while using eco-friendly materials and maintaining cost-effectiveness for a new market entrant.',
//     solution:
//       'Designed minimalist packaging using recyclable materials with elegant typography and nature-inspired illustrations, creating a distinctive shelf presence.',
//     results: [
//       'Sold out first production run in 3 weeks',
//       'Featured in beauty magazines',
//       'Won sustainable packaging award',
//       'Expanded to 50+ retail locations',
//     ],
//     year: '2024',
//     createdAt: '',
//     updatedAt: '',
//   },
//   {
//     _id: 'executive-coach-personal-brand',
//     slug: 'executive-coach-personal-brand',
//     title: 'Executive Coach Personal Brand',
//     category: 'Brand Developer',
//     description:
//       'Complete personal brand development for a leadership coach transitioning from corporate to entrepreneurship.',
//     fullDescription:
//       'End-to-end brand development for an executive coach building their independent practice after 15 years in corporate leadership roles.',
//     image: '/placeholder.svg',
//     challenge:
//       'Position the coach as a credible authority while differentiating from countless other leadership coaches in a saturated market.',
//     solution:
//       'Developed a strategic brand platform emphasizing their unique methodology, combined with a premium visual identity and content strategy.',
//     results: [
//       'Fully booked within 3 months',
//       'Speaking engagements at 3 major conferences',
//       'Published thought leadership articles',
//       'Premium pricing accepted by clients',
//     ],
//     year: '2023',
//     createdAt: '',
//     updatedAt: '',
//   },
//   {
//     _id: 'restaurant-chain-rebrand',
//     slug: 'restaurant-chain-rebrand',
//     title: 'Restaurant Chain Modernization',
//     category: 'Personal Branding',
//     description:
//       'Brand refresh for a 20-year-old restaurant chain targeting younger demographics while honoring heritage.',
//     fullDescription:
//       'Modernization project for an established restaurant chain looking to attract millennial and Gen-Z customers without alienating their loyal customer base.',
//     image: '/placeholder.svg',
//     challenge:
//       'Balance tradition with innovation, maintaining brand equity while signaling a fresh, contemporary approach to dining.',
//     solution:
//       'Created an evolved brand identity that retained core equity elements while introducing modern aesthetics, updated menu design, and social media presence.',
//     results: [
//       '35% increase in under-35 customer segment',
//       'Social media following grew 200%',
//       'Successful launch of 5 new locations',
//       'Positive press coverage in food media',
//     ],
//     year: '2024',
//     createdAt: '',
//     updatedAt: '',
//   },
//   {
//     _id: 'coffee-brand-packaging',
//     slug: 'coffee-brand-packaging',
//     title: 'Artisan Coffee Brand Packaging',
//     category: 'Packaging Design',
//     description:
//       'Distinctive packaging series for specialty coffee roaster highlighting origin stories and flavor profiles.',
//     fullDescription:
//       "Packaging design for a craft coffee roaster who sources beans directly from farmers and wanted packaging that told each coffee's unique story.",
//     image: '/placeholder.svg',
//     challenge:
//       "Create a cohesive brand family while making each origin's packaging distinctive enough to aid customer selection and build collection appeal.",
//     solution:
//       'Developed an illustrated packaging system featuring custom artwork for each origin, unified by consistent typography and structural design.',
//     results: [
//       '60% increase in retail sales',
//       'Packaging featured in design blogs',
//       'Wholesale accounts doubled',
//       'Customer collection behavior increased repeat purchases',
//     ],
//     year: '2023',
//     createdAt: '',
//     updatedAt: '',
//   },
// ];

// export const services: FullService[] = [
//   {
//     _id: 'personal-branding',
//     slug: 'personal-branding',
//     iconName: 'Sparkles',
//     title: 'Personal Branding',
//     description:
//       'I teach the art of effective storytelling to communicate personal and professional journeys in a compelling way.',
//     href: '/services/personal-branding',
//     colorClass: 'from-accent to-gold-end',
//     createdAt: '',
//     updatedAt: '',
//   },
//   {
//     _id: 'community-branding',
//     slug: 'community-branding',
//     iconName: 'Users',
//     title: 'Community Branding',
//     description:
//       'Building cohesive brand identities that bring communities together and create lasting connections.',
//     href: '/services/community-branding',
//     colorClass: 'from-primary to-hero-dark',
//     createdAt: '',
//     updatedAt: '',
//   },
//   {
//     _id: 'packaging-design',
//     slug: 'packaging-design',
//     iconName: 'Package',
//     title: 'Packaging Design',
//     description:
//       'Creating stunning packaging that not only protects products but tells compelling brand stories.',
//     href: '/services/packaging-design',
//     colorClass: 'from-gold-start to-accent',
//     createdAt: '',
//     updatedAt: '',
//   },
//   {
//     _id: 'brand-developer',
//     slug: 'brand-developer',
//     iconName: 'Target',
//     title: 'Brand Developer',
//     description:
//       'Comprehensive brand development services to elevate your business and create remarkable market presence.',
//     href: '/services/brand-developer',
//     colorClass: 'from-hero-dark to-primary',
//     createdAt: '',
//     updatedAt: '',
//   },
// ];

// export const getProjectsLookup = () =>
//   projects.reduce<Partial<Record<string, FullProject>>>((acc, curr) => {
//     acc[curr.slug] = curr;
//     return acc;
//   }, {});

// export const getPreviewProjects = () => {
//   const samples: ProjectPreviewCardProps[] = [];
//   const projectsLookup = getProjectsLookup();

//   for (const slug of previewProjects) {
//     const project = projectsLookup[slug];

//     if (project) {
//       samples.push({
//         slug: project.slug,
//         title: project.title,
//         description: project.description,
//         category: project.category,
//         image: project.image,
//         year: project.year,
//       });
//     }
//   }

//   return samples;
// };

// export const getServicesLookup = () =>
//   services.reduce<Partial<Record<string, FullService>>>((acc, curr) => {
//     acc[curr.slug] = curr;
//     return acc;
//   }, {});

// export const getServiceSummariess = () => {
//   return services.map<ServicePreviewProps>(service => ({
//     slug: service.slug,
//     title: service.title,
//     description: service.description,
//     iconName: service.iconName,
//     colorClass: service.colorClass,
//     href: service.href,
//   }));
// };
