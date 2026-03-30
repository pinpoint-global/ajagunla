import { FooterContactRowProps } from '@/components/layout/Footer';
import { HeaderLinkProps } from '@/components/layout/Header';
import { BusinessProps } from '@/components/sections/about/Business';
import { EducationProps } from '@/components/sections/about/Education';
import { AwardProps } from '@/components/sections/about/Recognition';
import { FoundationAchievement } from '@/components/sections/community/AjagunlaFoundation';
import { UpcomingEvent } from '@/components/sections/community/UpcomingEvents';
import { ContactCardProps } from '@/components/sections/contact/Content';
import { AboutSummary } from '@/components/sections/home/About';
import { CommunityEngagementProps } from '@/components/sections/home/Community';
import { HeroQuickStats } from '@/components/sections/home/Hero';
import { LegislativeHighlightProps } from '@/components/sections/home/Legislative';
import { ImpactCardProps } from '@/components/sections/legislative-work/LegislativeImpact';
import { ProjectCategoryButton } from '@/components/sections/legislative-work/LegislativeProjects';
import { CommitteeCardProps } from '@/components/sections/legislative-work/SenateCommittees';

const liveUrl = process.env.live_url || 'https://ajagunla1.com';

export const SEO_DETAILS = {
  title: {
    default: 'Senator Olubiyi Fadeyi-Ajagunla - Serving Osun Central Senatorial District',
    template: '%s | Senator Fadeyi-Ajagunla',
  },
  description:
    'Official portfolio of Senator Olubiyi Fadeyi-Ajagunla. Committed to community development, education, and empowerment. Discover legislative achievements and community initiatives.',
  ogDesc: 'Serving the People of Osun Central with Integrity and Progress',
  metadataBase: new URL(liveUrl),
  alternates: {
    canonical: liveUrl,
  },
  image: 'https://static.ajagunla1.com/images/site-preview.webp',
  icons: 'https://static.ajagunla1.com/favicon.png',
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
  { text: 'About', href: '/about', footerOnlySuffix: ' Sen. Olubiyi Fadeyi' },
  { text: 'Legislative Work', href: '/legislative-work' },
  { text: 'Community', href: '/community-engagement' },
  { text: 'Contact', href: '/contact' },
];

export const CONTACT_INFORMATION = {
  address: ['National Assembly Complex,', 'Three Arms Zone, Abuja'],
  constituencyOffice: ['Osun Central Senatorial District,', 'Oshogbo, Osun State'],
  tel: ['+234 701 234 5678', '+234 812 345 6789'],
  whatsapp: '+234 701 234 5678',
  email: ['info@ajagunla1.com'],
  locationUrl: 'https://maps.app.goo.gl/bBVU6r6zVEhxURAW9',
  mapEmbedUrl: '',
  officeHours: [
    {
      days: 'Monday - Friday',
      time: '9:00 AM - 5:00 PM',
    },
    {
      days: 'Saturday - Sunday',
      time: 'Closed',
    },
  ],
};

export const CONTACT_CARDS: ContactCardProps[] = [
  {
    iconName: 'MapPin',
    title: 'Senate Office',
    href: CONTACT_INFORMATION.locationUrl,
    texts: CONTACT_INFORMATION.address.map(text => ({
      text,
    })),
    allowSameRow: true,
  },
  {
    iconName: 'MapPin',
    title: 'Constituency Office',
    texts: CONTACT_INFORMATION.constituencyOffice.map(text => ({
      text,
    })),
    allowSameRow: true,
  },
  {
    iconName: 'Phone',
    title: 'Phone',
    texts: CONTACT_INFORMATION.tel.map(phone => ({
      text: phone,
      link: `tel:${phone.replaceAll(' ', '')}`,
    })),
  },
  {
    iconName: 'Mail',
    title: 'Email',
    texts: CONTACT_INFORMATION.email.map(text => ({ text, link: `mailto:${text}` })),
  },
];

export const CONTACT_CARDS_FOR_FOOTER: FooterContactRowProps[] = [
  {
    iconName: 'MapPin',
    href: CONTACT_INFORMATION.locationUrl,
    texts: CONTACT_INFORMATION.address.map(text => ({ text })),
  },
  {
    iconName: 'Phone',
    texts: CONTACT_INFORMATION.tel.map(phone => ({
      text: phone,
      link: `tel:${phone.replaceAll(' ', '')}`,
    })),
  },
  {
    iconName: 'Mail',
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
    iconKey: 'Instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    iconKey: 'Facebook',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    iconKey: 'Linkedin',
  },
  {
    label: 'X',
    href: 'https://wwww.x.com',
    iconKey: 'TwitterX',
  },
];

export const HERO_STATS: HeroQuickStats[] = [
  { title: '2023', text: 'Elected to Senate' },
  { title: '2 Committees', text: 'Vice Chairman' },
  { title: '2024', text: 'Philanthropist of The Year' },
];

export const ABOUT_SUMMARIES: AboutSummary[] = [
  {
    iconName: 'Award',
    title: 'Political Leadership',
    text: 'Elected Senator for Osun Central in 2023. Vice Chairman of\
    Communications and Trade & Investment Committees.',
  },
  {
    iconName: 'Briefcase',
    title: 'Business Excellence',
    text: 'Former Executive Vice Chairman of Fane Group and Chairman\
    of Harvard Continental Hotels.',
  },
  {
    iconName: 'GraduationCap',
    title: 'Education & Training',
    text: 'BA from OAU, LLM from University of Cumbria, Executive\
    courses from Harvard Kennedy School and LSE.',
  },
];

export const COMMUNITY_SUMMARIES: CommunityEngagementProps[] = [
  {
    iconName: 'Heart',
    title: 'Ajagunla Foundation',
    description:
      'Non-profit organization focused on education, empowerment,\
      and community development across Osun State.',
  },
  {
    iconName: 'Users',
    title: 'Youth Empowerment',
    description:
      'Skills acquisition programs, job placements, and entrepreneurship\
      support for young people.',
  },
  {
    iconName: 'Calendar',
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
    iconName: 'GraduationCap',
    title: 'Education Infrastructure',
    description: 'NOUN classroom block construction in Oke-Ila for enhanced learning',
  },
  {
    iconName: 'Users',
    title: 'Youth Employment',
    description: 'Secured Federal Fire Service positions for 14 youths in October 2025',
  },
  {
    iconName: 'Wifi',
    title: 'Senate Communications',
    description: "Vice Chairman shaping Nigeria's communications policy",
  },
  {
    iconName: 'TrendingUp',
    title: 'Trade & Investment',
    description: 'Vice Chairman driving economic growth and investment opportunities',
  },
];

export const BIOGRAPHY_TEXTS = [
  "Olubiyi Fadeyi-Ajagunla is a Nigerian politician, businessman, and philanthropist currently\
  serving as a Senator representing the Osun Central Senatorial District. Elected in 2023 under\
  the People's Democratic Party (PDP), he has demonstrated unwavering commitment to public service\
  and community development.",
  'In the February 25, 2023 Senate election, Fadeyi-Ajagunla won the Osun Central Senatorial\
  District seat by polling 134,229 votes, defeating the incumbent Senator and spokesperson of\
  the 9th Senate, Ajibola Basiru of the APC who scored 117,609 votes. This victory marked a\
  significant shift in the political landscape of Osun Central.',
  'In the 10th National Assembly, Senator Fadeyi-Ajagunla serves as the Vice Chairman of both\
  the Senate Communications and the Trade & Investment committees, where he has been instrumental\
  in shaping policies that benefit not just his constituency, but Nigeria as a whole.',
];

export const EDUCATION: EducationProps[] = [
  {
    degree: 'Bachelor of Arts',
    course: 'Archaeology',
    institution: 'Obafemi Awolowo University, Ile-Ife, Nigeria',
  },
  {
    degree: 'Master of Laws (LLM)',
    course: 'Business International Law',
    institution: 'University of Cumbria, United Kingdom',
  },
  {
    degree: 'Executive Education',
    course: 'Senior Executive Courses',
    institution: 'Harvard Kennedy School & London School of Economics',
  },
];

export const BUSINESSES: BusinessProps[] = [
  {
    iconName: 'Briefcase',
    title: 'Business Leadership',
    paragraphs: [
      'Before entering politics, Senator Fadeyi-Ajagunla built an impressive career in\
      business, serving as the Executive Vice Chairman of Fane Group, a diversified\
      conglomerate with interests spanning consultancy, real estate, energy, and\
      hospitality sectors.',
      'He has also served as Chairman of Harvard Continental Hotels, demonstrating his\
      versatility and leadership in the private sector.',
    ],
  },
  {
    iconName: 'Heart',
    title: 'Ajagunla Foundation',
    paragraphs: [
      'Senator Fadeyi-Ajagunla is the founder of the Ajagunla Foundation, a non-profit\
      organization dedicated to community development, education, and empowerment\
      initiatives across Osun State and beyond.',
      'Through the foundation, he has impacted thousands of lives through scholarship\
      programs, skills acquisition training, healthcare interventions, and infrastructure\
      development projects.',
    ],
  },
];

export const AWARDS: AwardProps[] = [
  {
    year: '2024',
    name: 'Vanguard Philanthropist of the Year',
    desc: 'Awarded by Vanguard Newspaper in recognition of outstanding contributions to community\
      development and humanitarian services across Nigeria.',
  },
];

export const SENATE_COMMITTEES: CommitteeCardProps[] = [
  {
    iconName: 'Wifi',
    position: 'Vice Chairman',
    committee: 'Senate Committee on Communications',
    note: '10th National Assembly',
  },
  {
    iconName: 'TrendingUp',
    position: 'Vice Chairman',
    committee: 'Senate Committee on Trade & Investment',
    note: '10th National Assembly',
  },
];

export const LEGISLATIVE_IMPACT: ImpactCardProps[] = [
  {
    heading: '2023',
    text: 'Elected to Senate',
  },
  {
    heading: '2',
    text: 'Committee Vice Chairman',
  },
  {
    heading: '14+',
    text: 'Youth Employed',
  },
  {
    heading: '100,000+',
    text: 'Lives Impacted',
  },
];

export const LEGISLATIVE_PROJECT_CATEGORIES = [
  'all',
  'education',
  'youth',
  'infrastructure',
  'technology',
] as const;
export type LegislativeProjectCategory = (typeof LEGISLATIVE_PROJECT_CATEGORIES)[number];

export const PROJECT_CATEGORY_BUTTONS: ProjectCategoryButton[] = [
  { value: 'all', label: 'All Initiatives', iconName: 'Briefcase' },
  { value: 'education', label: 'Education', iconName: 'GraduationCap' },
  { value: 'youth', label: 'Youth Empowerment', iconName: 'Users' },
  { value: 'infrastructure', label: 'Infrastructure', iconName: 'Building2' },
  { value: 'technology', label: 'Technology & Innovation', iconName: 'Wifi' },
];

export {
  LEGISLATIVE_WORKS,
  COMMUNITY_INITIATIVES,
  LEGISLATIVE_PROJECT_SUMMARIES,
  COMMUNITY_INITIATIVE_SUMMARIES,
} from './derived-data';

export const AJAGUNLA_FOUNDATION_ACHIEVEMENTS: FoundationAchievement[] = [
  {
    value: 1000,
    text: 'Scholarships Awarded',
  },
  {
    value: 50,
    text: 'Communities Reached',
  },
  {
    value: 5000,
    text: 'People Empowered',
  },
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    title: 'Town Hall Meeting - Oke-Ila',
    date: 'December 15, 2025',
    time: '10:00 AM',
    location: 'Oke-Ila Community Center',
    description: 'Open forum for constituents to discuss local issues and development priorities',
  },
  {
    title: 'Youth Empowerment Workshop',
    date: 'December 20, 2025',
    time: '2:00 PM',
    location: 'Osogbo Youth Center',
    description: 'Skills acquisition and entrepreneurship training for young people',
  },
  {
    title: 'Community Health Fair',
    date: 'January 10, 2026',
    time: '9:00 AM',
    location: 'Multiple Locations - Osun Central',
    description: 'Free health screening and medical consultations for community members',
  },
];
