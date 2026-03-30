/** Seed rows for `legislative-project` — mirrors former `LEGISLATIVE_WORKS` in the web app. */
export const legislativeWorkSeeds = [
  {
    stableId: 'noun-classroom-block-construction',
    slug: 'noun-classroom-block-construction',
    category: 'education' as const,
    iconName: 'GraduationCap',
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
  {
    stableId: 'federal-fire-service-employment',
    slug: 'federal-fire-service-employment',
    category: 'youth' as const,
    iconName: 'Users',
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
  {
    stableId: 'scholarship-and-educational-support',
    slug: 'scholarship-and-educational-support',
    category: 'education' as const,
    iconName: 'GraduationCap',
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
  {
    stableId: 'community-infrastructure-development',
    slug: 'community-infrastructure-development',
    category: 'infrastructure' as const,
    iconName: 'Building2',
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
  {
    stableId: 'skills-acquisition-program',
    slug: 'skills-acquisition-program',
    category: 'youth' as const,
    iconName: 'Users',
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
  {
    stableId: 'digital-literacy-initiative',
    slug: 'digital-literacy-initiative',
    category: 'technology' as const,
    iconName: 'Wifi',
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
];
