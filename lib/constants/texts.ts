import { Facebook, Instagram, Linkedin, TwitterX } from '@/components/icons';
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
import { LegislativeWork, ProjectSummary } from '@/lib/types/legislative-work';
import { CommunityInitiative, CommunityInitiativeSummary } from '@/lib/types/community-initiative';
import { CommitteeCardProps } from '@/components/sections/legislative-work/SenateCommittees';
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
  Building2,
} from 'lucide-react';

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
    LucideIcon: MapPin,
    title: 'Senate Office',
    href: CONTACT_INFORMATION.locationUrl,
    texts: CONTACT_INFORMATION.address.map(text => ({
      text,
    })),
    allowSameRow: true,
  },
  {
    LucideIcon: MapPin,
    title: 'Constituency Office',
    // href: CONTACT_INFORMATION.locationUrl,
    texts: CONTACT_INFORMATION.constituencyOffice.map(text => ({
      text,
    })),
    allowSameRow: true,
  },
  {
    LucideIcon: Phone,
    title: 'Phone',
    texts: CONTACT_INFORMATION.tel.map(phone => ({
      text: phone,
      link: `tel:${phone.replaceAll(' ', '')}`,
    })),
  },
  {
    LucideIcon: Mail,
    title: 'Email',
    texts: CONTACT_INFORMATION.email.map(text => ({ text, link: `mailto:${text}` })),
  },
];

export const CONTACT_CARDS_FOR_FOOTER: FooterContactRowProps[] = [
  {
    LucideIcon: MapPin,
    href: CONTACT_INFORMATION.locationUrl,
    texts: CONTACT_INFORMATION.address.map(text => ({ text })),
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
    Icon: Briefcase,
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
    Icon: Heart,
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
    LucideIcon: Wifi,
    position: 'Vice Chairman',
    committee: 'Senate Committee on Communications',
    note: '10th National Assembly',
  },
  {
    LucideIcon: TrendingUp,
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
  { value: 'all', label: 'All Initiatives', LucideIcon: Briefcase },
  { value: 'education', label: 'Education', LucideIcon: GraduationCap },
  { value: 'youth', label: 'Youth Empowerment', LucideIcon: Users },
  { value: 'infrastructure', label: 'Infrastructure', LucideIcon: Building2 },
  { value: 'technology', label: 'Technology & Innovation', LucideIcon: Wifi },
];

export const LEGISLATIVE_WORKS: Record<string, Omit<LegislativeWork, 'slug'>> = {
  'noun-classroom-block-construction': {
    category: 'education',
    lucideIcon: 'GraduationCap',
    title: 'NOUN Classroom Block Construction',
    description:
      'Facilitating the construction of a modern classroom block for the National Open University in Oke-Ila to enhance educational infrastructure',
    status: 'Ongoing',
    impact: 'Improved learning environment for students',
    keywords: [
      'NOUN classroom construction',
      'National Open University Nigeria',
      'Oke-Ila education',
      'educational infrastructure Osun Central',
      'university facilities',
      'modern classroom block',
      'Senator Fadeyi-Ajagunla education projects',
    ],
    fullDescription: `This project aims to address the growing need for modern educational infrastructure in Osun Central. The National Open University of Nigeria (NOUN) serves thousands of students across the region, and this new classroom block will significantly enhance the learning experience.

The facility will include state-of-the-art lecture halls, study spaces, and digital learning resources. This initiative reflects our commitment to making quality education accessible to all, regardless of location or economic background.`,
    objectives: [
      'Construct a 4-story modern classroom block',
      'Equip facilities with modern learning tools',
      'Create conducive learning spaces for 500+ students',
      'Improve access to quality education in Oke-Ila',
    ],
    timeline: [
      { phase: 'Project Approval', status: 'Completed', date: 'March 2024' },
      { phase: 'Groundbreaking Ceremony', status: 'Completed', date: 'June 2024' },
      {
        phase: 'Foundation & Structural Work',
        status: 'In Progress',
        date: 'July - December 2024',
      },
      { phase: 'Completion & Commissioning', status: 'Upcoming', date: 'Q2 2026' },
    ],
    beneficiaries: 'Students, Faculty, and the entire Oke-Ila community',
    location: 'Oke-Ila, Osun Central Senatorial District',
  },
  'federal-fire-service-employment': {
    category: 'youth',
    lucideIcon: 'Users',
    title: 'Federal Fire Service Employment',
    description:
      'Secured Federal Fire Service positions for 14 youths from Osun Central Senatorial District',
    status: 'Completed',
    impact: '14 youths employed (October 2025)',
    keywords: [
      'Federal Fire Service employment',
      'youth jobs Osun Central',
      'public service careers',
      'emergency services employment',
      'federal employment opportunities',
      'youth empowerment jobs',
      'Senator Fadeyi-Ajagunla employment initiatives',
    ],
    fullDescription: `In October 2025, through strategic advocacy and engagement with the Federal Fire Service, we successfully secured employment for 14 young people from Osun Central Senatorial District. This achievement represents our commitment to youth empowerment and creating tangible opportunities for our constituents.

The employment drive focused on ensuring fair representation of Osun Central in federal employment opportunities while addressing the unemployment challenge facing young people in our district.`,
    objectives: [
      'Secure federal employment opportunities for youth',
      'Provide stable career paths in public service',
      'Reduce youth unemployment in Osun Central',
      'Build capacity in emergency response services',
    ],
    timeline: [
      { phase: 'Advocacy & Engagement', status: 'Completed', date: 'May 2025' },
      { phase: 'Application & Screening', status: 'Completed', date: 'July 2025' },
      { phase: 'Training & Deployment', status: 'Completed', date: 'October 2025' },
    ],
    beneficiaries: '14 young men and women from various communities in Osun Central',
    location: 'Osun Central Senatorial District',
  },
  'scholarship-and-educational-support': {
    category: 'education',
    lucideIcon: 'GraduationCap',
    title: 'Scholarship & Educational Support',
    description:
      'Through Ajagunla Foundation, providing scholarships and educational materials to deserving students across Osun Central',
    status: 'Active',
    impact: 'Hundreds of students supported annually',
    keywords: [
      'Ajagunla Foundation scholarships',
      'educational support Osun Central',
      'student scholarships Nigeria',
      'educational materials support',
      'student financial aid',
      'scholarship programs Osun',
      'Senator Fadeyi-Ajagunla education initiatives',
    ],
    fullDescription: `The Ajagunla Foundation's scholarship program is a cornerstone of our commitment to education. We believe that no child should be denied quality education due to financial constraints. This ongoing initiative provides comprehensive support including tuition, textbooks, uniforms, and other essential learning materials.

Our scholarship program has helped hundreds of students complete their primary, secondary, and tertiary education, with many alumni now contributing meaningfully to society.`,
    objectives: [
      'Provide full and partial scholarships to deserving students',
      'Supply educational materials and learning resources',
      'Support students from primary to tertiary levels',
      'Create mentorship opportunities for scholarship recipients',
    ],
    timeline: [
      { phase: 'Annual Applications Open', status: 'Recurring', date: 'January - February' },
      { phase: 'Selection & Awards', status: 'Recurring', date: 'March' },
      { phase: 'Ongoing Support', status: 'Active', date: 'Throughout Academic Year' },
    ],
    beneficiaries: 'Hundreds of students across Osun Central annually',
    location: 'All communities in Osun Central Senatorial District',
  },
  'community-infrastructure-development': {
    category: 'infrastructure',
    lucideIcon: 'Building2',
    title: 'Community Infrastructure Development',
    description:
      'Facilitating rural infrastructure improvements including roads, water supply, and electrification projects',
    status: 'Ongoing',
    impact: 'Multiple communities benefited',
    keywords: [
      'infrastructure development Osun Central',
      'rural roads construction',
      'water supply projects Nigeria',
      'rural electrification',
      'community infrastructure',
      'rural development projects',
      'Senator Fadeyi-Ajagunla infrastructure initiatives',
    ],
    fullDescription: `Infrastructure development is fundamental to improving quality of life and economic opportunities. This multi-faceted initiative addresses critical infrastructure gaps in rural communities across Osun Central.

We are working with federal agencies and state government to facilitate road construction, rural electrification, and potable water supply projects that will transform communities and open up new economic possibilities.`,
    objectives: [
      'Improve road networks connecting rural communities',
      'Extend electricity to underserved areas',
      'Provide access to clean water sources',
      'Facilitate economic development through infrastructure',
    ],
    timeline: [
      { phase: 'Community Needs Assessment', status: 'Completed', date: '2024' },
      { phase: 'Project Approvals & Funding', status: 'In Progress', date: '2024-2025' },
      { phase: 'Implementation', status: 'Ongoing', date: '2025-2026' },
    ],
    beneficiaries: 'Residents of multiple rural communities across Osun Central',
    location: 'Various locations in Osun Central Senatorial District',
  },
  'skills-acquisition-program': {
    category: 'youth',
    lucideIcon: 'Users',
    title: 'Skills Acquisition Programs',
    description:
      'Vocational training and skills acquisition initiatives for youth empowerment and economic independence',
    status: 'Active',
    impact: 'Thousands trained in various skills',
    keywords: [
      'vocational training Osun Central',
      'skills acquisition programs',
      'youth empowerment training',
      'entrepreneurship training Nigeria',
      'vocational skills development',
      'youth skills training',
      'Senator Fadeyi-Ajagunla youth programs',
    ],
    fullDescription: `Our skills acquisition programs equip young people with practical skills that enable them to become self-employed or more employable. Training is offered in various vocational areas including tailoring, catering, ICT, automotive repairs, and modern agricultural practices.

Participants receive training materials, starter kits upon completion, and mentorship support to help them establish their businesses or secure employment.`,
    objectives: [
      'Train youth in marketable vocational skills',
      'Provide starter kits and business support',
      'Create pathways to self-employment',
      'Reduce dependency on white-collar jobs',
    ],
    timeline: [
      { phase: 'Enrollment & Training', status: 'Recurring', date: 'Quarterly Batches' },
      { phase: 'Graduation & Starter Kits', status: 'Recurring', date: 'After 3-6 months' },
      { phase: 'Post-Training Support', status: 'Ongoing', date: 'Continuous' },
    ],
    beneficiaries: 'Thousands of young men and women trained since program inception',
    location: 'Training centers across Osun Central',
  },
  'digital-literacy-initiative': {
    category: 'technology',
    lucideIcon: 'Wifi',
    title: 'Digital Literacy Initiative',
    description:
      'ICT training programs for youth and women to enhance digital skills and opportunities',
    status: 'Active',
    impact: 'Bridging the digital divide',
    keywords: [
      'digital literacy training',
      'ICT training Osun Central',
      'computer skills training',
      'digital skills development',
      'technology training Nigeria',
      'digital divide Nigeria',
      'Senator Fadeyi-Ajagunla technology initiatives',
    ],
    fullDescription: `In today's digital economy, computer literacy is no longer optional. Our digital literacy initiative provides comprehensive ICT training to youth and women, covering basic computer operations, internet usage, social media for business, and digital marketing.

This program is particularly impactful for women entrepreneurs who want to expand their businesses online and young people seeking remote work opportunities.`,
    objectives: [
      'Improve digital literacy across communities',
      'Enable participation in the digital economy',
      'Train beneficiaries in online business tools',
      'Bridge the urban-rural digital divide',
    ],
    timeline: [
      { phase: 'ICT Center Establishment', status: 'Completed', date: '2024' },
      { phase: 'Ongoing Training Programs', status: 'Active', date: 'Continuous' },
      { phase: 'Advanced Courses', status: 'In Progress', date: '2025' },
    ],
    beneficiaries: 'Youth and women across Osun Central',
    location: 'ICT centers in major communities',
  },
};

// Derive project summaries from full legislative works
export const LEGISLATIVE_PROJECT_SUMMARIES: ProjectSummary[] = Object.entries(
  LEGISLATIVE_WORKS
).map(([slug, work]) => ({
  slug,
  category: work.category,
  title: work.title,
  description: work.description,
  impact: work.impact,
  status: work.status.toLowerCase(),
}));

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

export const COMMUNITY_INITIATIVES: Record<string, Omit<CommunityInitiative, 'slug'>> = {
  'education-support': {
    lucideIcon: 'GraduationCap',
    title: 'Education Support',
    description:
      'Scholarship programs and educational infrastructure development across Osun Central',
    fullDescription: `The Ajagunla Foundation's education support program is built on the belief that education is the foundation of individual and community development. Through comprehensive scholarship programs, we remove financial barriers that prevent bright students from achieving their educational dreams.

Beyond scholarships, we work to improve educational infrastructure, provide learning materials, and create supportive environments where students can thrive. Our holistic approach addresses not just tuition, but all aspects of the educational journey.`,
    impact: 'Over 1,000 students supported with scholarships and educational materials',
    objectives: [
      'Provide full and partial scholarships from primary to tertiary levels',
      'Supply textbooks, uniforms, and essential learning materials',
      'Improve school infrastructure in underserved communities',
      "Mentor and track scholarship recipients' progress",
      'Partner with schools to identify deserving students',
    ],
    achievements: [
      '1,000+ scholarships awarded since inception',
      'Renovated 5 primary school classrooms',
      'Provided over 5,000 textbooks to students',
      '100% completion rate among scholarship recipients',
    ],
    beneficiaries: 'Students from low-income families across all communities in Osun Central',
    location: 'All Local Government Areas in Osun Central Senatorial District',
    howToParticipate:
      'Applications for scholarships open annually in January. Contact the Ajagunla Foundation office for eligibility criteria and application forms.',
    keywords: [
      'education support',
      'scholarships Osun Central',
      'educational infrastructure',
      'student financial aid',
      'Ajagunla Foundation education',
    ],
  },
  'healthcare-access': {
    lucideIcon: 'Heart',
    title: 'Healthcare Access',
    description: 'Health fairs, medical outreach programs, and healthcare facility improvements',
    fullDescription: `Access to quality healthcare should not be determined by economic status or location. Our healthcare initiative brings medical services to underserved communities through regular health fairs, free medical outreach programs, and support for healthcare facilities.

We partner with medical professionals and healthcare institutions to provide screening, treatment, and health education. Our focus areas include maternal and child health, preventive care, and management of chronic diseases.`,
    impact: 'Thousands of free medical consultations and treatments provided annually',
    objectives: [
      'Organize quarterly health fairs in rural communities',
      'Provide free medical screening and consultations',
      'Supply essential medicines to health centers',
      'Support maternal and child health programs',
      'Create health awareness campaigns',
    ],
    achievements: [
      '20+ health fairs conducted across Osun Central',
      '5,000+ patients treated at no cost',
      'Equipped 3 primary health centers with medical supplies',
      'Conducted successful health awareness campaigns',
    ],
    beneficiaries: 'Community members of all ages, with focus on vulnerable groups',
    location: 'Rural and underserved communities across Osun Central',
    howToParticipate:
      'Health fairs are announced in advance. Watch for announcements in your community or contact our office for the schedule.',
    keywords: [
      'healthcare access',
      'health fairs Osun Central',
      'medical outreach',
      'community health',
      'free medical consultations',
    ],
  },
  'youth-empowerment': {
    lucideIcon: 'Users',
    title: 'Youth Empowerment',
    description: 'Skills training, job placements, and entrepreneurship support for young people',
    fullDescription: `Youth empowerment is central to our vision for Osun Central's future. Through comprehensive training programs, we equip young people with practical skills that enable them to create their own opportunities.

Our programs cover vocational skills, entrepreneurship training, digital literacy, and soft skills development. We don't just train; we provide starter kits, mentorship, and connections to help graduates succeed in their chosen paths.`,
    impact: 'Thousands of youth trained and empowered with vocational and entrepreneurial skills',
    objectives: [
      'Provide vocational skills training in high-demand areas',
      'Offer entrepreneurship and business management training',
      'Facilitate job placements and internships',
      'Provide starter kits and business support',
      'Create mentorship and networking opportunities',
    ],
    achievements: [
      '3,000+ youth trained in various skills',
      '1,500+ starter kits distributed',
      '500+ youth placed in employment',
      '200+ small businesses established by graduates',
    ],
    beneficiaries: 'Young men and women aged 18-35 from all communities',
    location: 'Training centers in major towns across Osun Central',
    howToParticipate:
      'Training programs run quarterly. Visit any of our training centers or contact the foundation office to register for upcoming batches.',
    keywords: [
      'youth empowerment',
      'skills training Osun Central',
      'vocational training',
      'youth employment',
      'entrepreneurship support',
    ],
  },
  infrastructure: {
    lucideIcon: 'Building2',
    title: 'Infrastructure Development',
    description: 'Road construction, electrification, and water supply projects',
    fullDescription: `Good infrastructure is the backbone of community development and economic prosperity. We work with government agencies and development partners to facilitate infrastructure projects that connect communities and improve quality of life.

Our infrastructure focus includes rural roads, electrification projects, water supply schemes, and community facilities. These projects open up economic opportunities and improve living conditions across Osun Central.`,
    impact: 'Multiple communities now connected with improved roads, power, and water supply',
    objectives: [
      'Facilitate rural road construction and rehabilitation',
      'Support rural electrification projects',
      'Establish potable water supply schemes',
      'Renovate community facilities',
      'Advocate for federal and state infrastructure investment',
    ],
    achievements: [
      'Facilitated 15km of rural road construction',
      'Connected 10 communities to the national grid',
      'Established 8 solar-powered borehole projects',
      'Renovated 4 community halls',
    ],
    beneficiaries: 'Entire communities benefiting from improved infrastructure',
    location: 'Rural and underserved communities across Osun Central',
    howToParticipate:
      'Communities can submit infrastructure needs through their traditional rulers or local government representatives.',
    keywords: [
      'infrastructure development',
      'rural roads Osun Central',
      'rural electrification',
      'water supply projects',
      'community infrastructure',
    ],
  },
  'women-empowerment': {
    lucideIcon: 'Handshake',
    title: 'Women Empowerment',
    description: 'Economic empowerment programs and leadership training for women',
    fullDescription: `Empowering women is essential for community development. Our women empowerment initiative provides training, resources, and support to help women achieve economic independence and participate fully in community leadership.

We focus on microenterprise development, cooperative societies, skills training, and leadership development. Special attention is given to widows, single mothers, and women in rural areas.`,
    impact:
      'Hundreds of women economically empowered and actively participating in community leadership',
    objectives: [
      'Provide business and financial literacy training',
      'Facilitate access to microfinance',
      "Support women's cooperative societies",
      'Offer leadership and civic education',
      'Create market linkages for women entrepreneurs',
    ],
    achievements: [
      '800+ women trained in business skills',
      '50+ women cooperative societies supported',
      'Facilitated ₦20 million in microloans',
      '100+ women now holding community leadership positions',
    ],
    beneficiaries: 'Women of all ages, particularly those in rural areas and vulnerable situations',
    location: 'All communities across Osun Central Senatorial District',
    howToParticipate:
      'Join or form a cooperative society and register with the foundation. Training programs are conducted regularly across all LGAs.',
    keywords: [
      'women empowerment',
      'women economic empowerment Osun Central',
      'women cooperative societies',
      'microfinance women',
      'women leadership training',
    ],
  },
  'community-development': {
    lucideIcon: 'Award',
    title: 'Community Development',
    description: 'Supporting local initiatives and strengthening community organizations',
    fullDescription: `Strong communities are built from within. Our community development initiative supports grassroots organizations, traditional institutions, and local initiatives that strengthen social cohesion and drive progress.

We provide grants, capacity building, and technical support to community-based organizations. We also facilitate dialogue between communities and government, ensuring that local voices are heard in development planning.`,
    impact: 'Dozens of community organizations strengthened and local initiatives supported',
    objectives: [
      'Provide grants to community-based organizations',
      'Build capacity of traditional institutions',
      'Support cultural preservation initiatives',
      'Facilitate community dialogues and peace building',
      'Strengthen local governance structures',
    ],
    achievements: [
      '50+ community organizations supported with grants',
      'Facilitated 30+ community dialogue sessions',
      'Supported 10 cultural festivals',
      'Trained 100+ community leaders',
    ],
    beneficiaries: 'Community organizations, traditional institutions, and entire communities',
    location: 'All communities in Osun Central Senatorial District',
    howToParticipate:
      'Registered community organizations can apply for support. Contact the foundation office for guidelines and application procedures.',
    keywords: [
      'community development',
      'community organizations Osun Central',
      'community grants',
      'cultural preservation',
      'community dialogue',
    ],
  },
};

// Derive initiative summaries from full community initiatives
export const COMMUNITY_INITIATIVE_SUMMARIES: CommunityInitiativeSummary[] = Object.entries(
  COMMUNITY_INITIATIVES
).map(([slug, initiative]) => ({
  slug,
  lucideIcon: initiative.lucideIcon,
  title: initiative.title,
  description: initiative.description,
}));

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
