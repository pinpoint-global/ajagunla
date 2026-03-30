const liveUrl = 'https://ajagunla1.com';

const toKeywords = (phrases: string[]) => phrases.map(phrase => ({ phrase }));
const toTextLines = (lines: string[]) => lines.map(text => ({ text }));

export const siteGlobalSeed = {
  branding: {
    siteName: 'Senator Olubiyi Fadeyi-Ajagunla',
    logoAlt: 'Senator Olubiyi Fadeyi-Ajagunla logo',
    // Media relations are set in CMS; URL fallbacks are seeded for immediate use.
    logoDesktopUrl: 'https://static.ajagunla1.com/images/logo-full.svg',
    logoMobileUrl: 'https://static.ajagunla1.com/images/logo-full.svg',
    logoLoaderUrl: 'https://static.ajagunla1.com/images/logo.svg',
  },
  navLinks: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about', footerOnlySuffix: ' Sen. Olubiyi Fadeyi' },
    { text: 'Legislative Work', href: '/legislative-work' },
    { text: 'Community', href: '/community-engagement' },
    { text: 'Contact', href: '/contact' },
  ],
  contactInformation: {
    address: toTextLines(['National Assembly Complex,', 'Three Arms Zone, Abuja']),
    constituencyOffice: toTextLines(['Osun Central Senatorial District,', 'Oshogbo, Osun State']),
    tel: toTextLines(['+234 701 234 5678', '+234 812 345 6789']),
    whatsapp: '+234 701 234 5678',
    email: toTextLines(['info@ajagunla1.com']),
    locationUrl: 'https://maps.app.goo.gl/bBVU6r6zVEhxURAW9',
    mapEmbedUrl: '',
    officeHours: [
      { days: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
      { days: 'Saturday - Sunday', time: 'Closed' },
    ],
  },
  contactCardsForFooter: [
    {
      iconName: 'MapPin',
      href: 'https://maps.app.goo.gl/bBVU6r6zVEhxURAW9',
      texts: [{ text: 'National Assembly Complex,' }, { text: 'Three Arms Zone, Abuja' }],
    },
    {
      iconName: 'Phone',
      texts: [
        { text: '+234 701 234 5678', link: 'tel:+2347012345678' },
        { text: '+234 812 345 6789', link: 'tel:+2348123456789' },
      ],
    },
    {
      iconName: 'Mail',
      texts: [{ text: 'info@ajagunla1.com', link: 'mailto:info@ajagunla1.com' }],
    },
  ],
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com', iconKey: 'Instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com', iconKey: 'Facebook' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com', iconKey: 'Linkedin' },
    { label: 'X', href: 'https://wwww.x.com', iconKey: 'TwitterX' },
  ],
  seo_titleDefault:
    'Senator Olubiyi Fadeyi-Ajagunla - Serving Osun Central Senatorial District',
  seo_titleTemplate: '%s | Senator Fadeyi-Ajagunla',
  seo_description:
    'Official portfolio of Senator Olubiyi Fadeyi-Ajagunla. Committed to community development, education, and empowerment. Discover legislative achievements and community initiatives.',
  seo_ogDesc: 'Serving the People of Osun Central with Integrity and Progress',
  seo_siteUrl: liveUrl,
  seo_imageUrl: 'https://static.ajagunla1.com/images/site-preview.webp',
  seo_iconsUrl: 'https://static.ajagunla1.com/favicon.png',
  seo_keywords: toKeywords([
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
  ]),
  seo_canonicalUrl: liveUrl,
  seo_robots: 'index_follow' as const,
  seo_ogType: 'website' as const,
  seo_ogTitle: undefined,
  seo_ogDescription: undefined,
  seo_twitterCard: 'summary_large_image' as const,
};

export const pageHomeSeed = {
  hero: {
    heroTitle: 'Senator Olubiyi Fadeyi-Ajagunla',
    heroSubtitle: 'Serving Osun Central Senatorial District',
    heroTagline: 'Empowering Communities Through Leadership, Education & Development',
    backgroundImageUrl: 'https://static.ajagunla1.com/images/senator-fadeyi-2.webp',
  },
  heroStats: [
    { title: '2023', text: 'Elected to Senate' },
    { title: '2 Committees', text: 'Vice Chairman' },
    { title: '2024', text: 'Philanthropist of The Year' },
  ],
  aboutSummaries: [
    {
      iconName: 'Award',
      title: 'Political Leadership',
      text: 'Elected Senator for Osun Central in 2023. Vice Chairman of Communications and Trade & Investment Committees.',
    },
    {
      iconName: 'Briefcase',
      title: 'Business Excellence',
      text: 'Former Executive Vice Chairman of Fane Group and Chairman of Harvard Continental Hotels.',
    },
    {
      iconName: 'GraduationCap',
      title: 'Education & Training',
      text: 'BA from OAU, LLM from University of Cumbria, Executive courses from Harvard Kennedy School and LSE.',
    },
  ],
  communitySummaries: [
    {
      iconName: 'Heart',
      title: 'Ajagunla Foundation',
      description:
        'Non-profit organization focused on education, empowerment, and community development across Osun State.',
    },
    {
      iconName: 'Users',
      title: 'Youth Empowerment',
      description:
        'Skills acquisition programs, job placements, and entrepreneurship support for young people.',
    },
    {
      iconName: 'Calendar',
      title: 'Regular Town Halls',
      description:
        'Open forums for constituents to discuss issues and participate in decision-making processes.',
    },
  ],
  aboutPreviewHighlights: toTextLines([
    'Strategic Brand Development',
    'Visual Identity Design',
    'Brand Storytelling',
  ]),
  legislativeHighlights: [
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
  ],
  seo_metaTitle: undefined,
  seo_metaDescription:
    'Official portfolio of Senator Olubiyi Fadeyi-Ajagunla — Osun Central Senatorial District',
  seo_keywords: toKeywords([
    'Senator Olubiyi Fadeyi',
    'Osun Central',
    'Ajagunla',
    'Nigerian Senate',
  ]),
  seo_canonicalUrl: liveUrl,
  seo_robots: 'index_follow' as const,
  seo_ogType: 'website' as const,
  seo_ogTitle: undefined,
  seo_ogDescription: undefined,
  seo_twitterCard: 'summary_large_image' as const,
};

export const pageAboutSeed = {
  biographyTexts: toTextLines([
    "Olubiyi Fadeyi-Ajagunla is a Nigerian politician, businessman, and philanthropist currently serving as a Senator representing the Osun Central Senatorial District. Elected in 2023 under the People's Democratic Party (PDP), he has demonstrated unwavering commitment to public service and community development.",
    'In the February 25, 2023 Senate election, Fadeyi-Ajagunla won the Osun Central Senatorial District seat by polling 134,229 votes, defeating the incumbent Senator and spokesperson of the 9th Senate, Ajibola Basiru of the APC who scored 117,609 votes. This victory marked a significant shift in the political landscape of Osun Central.',
    'In the 10th National Assembly, Senator Fadeyi-Ajagunla serves as the Vice Chairman of both the Senate Communications and the Trade & Investment committees, where he has been instrumental in shaping policies that benefit not just his constituency, but Nigeria as a whole.',
  ]),
  education: [
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
  ],
  businesses: [
    {
      iconName: 'Briefcase',
      title: 'Business Leadership',
      paragraphs: toTextLines([
        'Before entering politics, Senator Fadeyi-Ajagunla built an impressive career in business, serving as the Executive Vice Chairman of Fane Group, a diversified conglomerate with interests spanning consultancy, real estate, energy, and hospitality sectors.',
        'He has also served as Chairman of Harvard Continental Hotels, demonstrating his versatility and leadership in the private sector.',
      ]),
    },
    {
      iconName: 'Heart',
      title: 'Ajagunla Foundation',
      paragraphs: toTextLines([
        'Senator Fadeyi-Ajagunla is the founder of the Ajagunla Foundation, a non-profit organization dedicated to community development, education, and empowerment initiatives across Osun State and beyond.',
        'Through the foundation, he has impacted thousands of lives through scholarship programs, skills acquisition training, healthcare interventions, and infrastructure development projects.',
      ]),
    },
  ],
  awards: [
    {
      year: '2024',
      name: 'Vanguard Philanthropist of the Year',
      desc: 'Awarded by Vanguard Newspaper in recognition of outstanding contributions to community development and humanitarian services across Nigeria.',
    },
  ],
  senateCommittees: [
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
  ],
  legislativeImpact: [
    { heading: '2023', text: 'Elected to Senate' },
    { heading: '2', text: 'Committee Vice Chairman' },
    { heading: '14+', text: 'Youth Employed' },
    { heading: '100,000+', text: 'Lives Impacted' },
  ],
  aboutPreviewHighlights: toTextLines([
    'Strategic Brand Development',
    'Visual Identity Design',
    'Brand Storytelling',
  ]),
  seo_metaTitle: 'About Senator Olubiyi Fadeyi-Ajagunla',
  seo_metaDescription:
    'Learn about Senator Olubiyi Fadeyi-Ajagunla — Osun Central Senatorial District',
  seo_keywords: toKeywords(['about', 'biography', 'Osun Central', 'Senator']),
  seo_canonicalUrl: `${liveUrl}/about`,
  seo_robots: 'index_follow' as const,
  seo_ogType: 'website' as const,
  seo_twitterCard: 'summary_large_image' as const,
};

export const pageContactSeed = {
  heroTitle: 'Get In Touch',
  heroSubtitle: "We'd love to hear from you — reach out to the Senator's office",
  contactCards: [
    {
      iconName: 'MapPin',
      title: 'Senate Office',
      href: 'https://maps.app.goo.gl/bBVU6r6zVEhxURAW9',
      texts: [{ text: 'National Assembly Complex,' }, { text: 'Three Arms Zone, Abuja' }],
      allowSameRow: true,
    },
    {
      iconName: 'MapPin',
      title: 'Constituency Office',
      texts: [{ text: 'Osun Central Senatorial District,' }, { text: 'Oshogbo, Osun State' }],
      allowSameRow: true,
    },
    {
      iconName: 'Phone',
      title: 'Phone',
      texts: [
        { text: '+234 701 234 5678', link: 'tel:+2347012345678' },
        { text: '+234 812 345 6789', link: 'tel:+2348123456789' },
      ],
    },
    {
      iconName: 'Mail',
      title: 'Email',
      texts: [{ text: 'info@ajagunla1.com', link: 'mailto:info@ajagunla1.com' }],
    },
  ],
  seo_metaTitle: 'Contact',
  seo_metaDescription: "Contact Senator Olubiyi Fadeyi-Ajagunla's office",
  seo_keywords: toKeywords(['contact', 'Senator', 'Osun Central']),
  seo_canonicalUrl: `${liveUrl}/contact`,
  seo_robots: 'index_follow' as const,
  seo_ogType: 'website' as const,
  seo_twitterCard: 'summary_large_image' as const,
};

export const pageLegislativeSeed = {
  senateCommittees: [
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
  ],
  legislativeImpact: [
    { heading: '2023', text: 'Elected to Senate' },
    { heading: '2', text: 'Committee Vice Chairman' },
    { heading: '14+', text: 'Youth Employed' },
    { heading: '100,000+', text: 'Lives Impacted' },
  ],
  projectCategoryButtons: [
    { value: 'all', label: 'All Initiatives', iconName: 'Briefcase' },
    { value: 'education', label: 'Education', iconName: 'GraduationCap' },
    { value: 'youth', label: 'Youth Empowerment', iconName: 'Users' },
    { value: 'infrastructure', label: 'Infrastructure', iconName: 'Building2' },
    { value: 'technology', label: 'Technology & Innovation', iconName: 'Wifi' },
  ],
  featuredImageUrl: 'https://static.ajagunla1.com/images/senator-fadeyi-3.webp',
  seo_metaTitle: 'Legislative Work & Achievements',
  seo_metaDescription:
    "Explore Senator Olubiyi Fadeyi-Ajagunla's legislative achievements, bills sponsored, and community-focused initiatives.",
  seo_keywords: toKeywords([
    'legislative work',
    'Senate bills',
    'Osun Central initiatives',
    'education infrastructure',
    'youth empowerment',
    'technology innovation',
  ]),
  seo_canonicalUrl: `${liveUrl}/legislative-work`,
  seo_robots: 'index_follow' as const,
  seo_ogType: 'website' as const,
  seo_twitterCard: 'summary_large_image' as const,
};

export const pageCommunitySeed = {
  foundationAchievements: [
    { value: 1000, text: 'Scholarships Awarded' },
    { value: 50, text: 'Communities Reached' },
    { value: 5000, text: 'People Empowered' },
  ],
  upcomingEvents: [
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
  ],
  seo_metaTitle: 'Community Engagement & Initiatives',
  seo_metaDescription:
    "Discover the Ajagunla Foundation's community initiatives including education support, youth empowerment programs, and healthcare interventions across Osun Central.",
  seo_keywords: toKeywords([
    'community engagement',
    'Ajagunla Foundation',
    'youth empowerment',
    'scholarships',
    'healthcare',
    'town halls',
    'Osun Central development',
  ]),
  seo_canonicalUrl: `${liveUrl}/community-engagement`,
  seo_robots: 'index_follow' as const,
  seo_ogType: 'website' as const,
  seo_twitterCard: 'summary_large_image' as const,
};
