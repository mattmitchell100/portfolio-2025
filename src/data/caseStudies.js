import pearsonStoreImg from '../assets/case-studies/pearson-store.png'
import providerPortalImg from '../assets/case-studies/provider-portal.png'
import beckDesignSystemImg from '../assets/case-studies/beck-design-system.png'
import notificationSettings from '../assets/case-studies/notifications-settings.png'
import mobileUX from '../assets/case-studies/mobile-ux.png'

const caseStudies = [
  {
    slug: 'responsive-redesign',
    title: 'Responsive Redesign',
    year: '2012',
    role: 'Lead UI Designer & UI Developer',
    summary: 'Responsive redesign, record-breaking results.',
    responsibilities: [
      'Led responsive UI design and front-end development',
      'Partnered with product and engineering across 15+ properties',
      'Established a reusable UI pattern library'
    ],
    process: 'Audit, rapid wireframes, user flows, high-fidelity prototypes in HTML/CSS/JS, iterative usability reviews, and design system extraction.',
    outcomes: [
      'Record-breaking sales in the following quarter',
      'Standardized components across eCommerce platforms',
      'Improved mobile conversion and page speed'
    ],
  image: pearsonStoreImg,
  // Optional richer media gallery overriding single image when present
  media: [
    { type: 'image', src: pearsonStoreImg, alt: 'Pearson responsive redesign storefront' },
    { type: 'image', src: providerPortalImg, alt: 'Related component library example' },
    { type: 'image', src: beckDesignSystemImg, alt: 'Design system token snapshot' }
  ],
  featured: true,
  figma: 'https://www.figma.com/file/pearson-responsive-redesign',
  },
  {
    slug: 'provider-portal-redesign',
    title: 'Healthcare Provider Portal Redesign',
    year: '2017',
    role: 'UI Designer & Front-End Developer',
    summary: 'First fully-responsive member portal and redesigned provider experience.',
    responsibilities: [
      'Defined requirements with PM and stakeholders',
      'Built responsive layouts with accessibility baked in',
      'Implemented client-side validation for Medicare registration'
    ],
    process: 'Stakeholder workshops, wireframes, design specs, and production-ready CSS/JS with accessibility checks.',
    outcomes: [
      'Faster task completion for providers',
      'Improved accessibility and device support',
      'Reduced implementation time for new clients'
    ],
  image: providerPortalImg,
  media: [
    { type: 'image', src: providerPortalImg, alt: 'Provider portal dashboard' },
    { type: 'image', src: notificationSettings, alt: 'Notification settings pattern' }
  ],
  featured: false,
  figma: 'https://www.figma.com/file/provider-portal-redesign',
  },
  {
    slug: 'notification-settings',
    title: 'Notification Settings',
    year: '2023',
    role: 'Sr UX Designer',
    summary: 'Designed a unified notification settings experience across web and mobile apps.',
    responsibilities: [
      'Refined user flows and interactions',
      'Designed an improved notification settings UI',
      'Worked closely with product teams to align on requirements'
    ],
    process: 'Component inventory, theming strategy, contribution model, and documentation with examples.',
    outcomes: [
      'Notifications are received by multiple users',
      'Consistent UX across surfaces',
    ],
  image: notificationSettings,
  media: [
    { type: 'image', src: notificationSettings, alt: 'Notification settings UI' }
  ],
  featured: true,
  figma: 'https://www.figma.com/file/notification-settings',
  },
    {
      slug: 'FS-mobile-ux',
      title: 'Mobile UX Redesign',
      year: '2025',
      role: 'Lead UX Designer',
      summary: 'Mobile UX redesign to enhance user experience on smartphones and tablets.',
      responsibilities: [
        'Developed detailed user flows and plan of action',
        'User Experience audit of current mobile app',
        'Conducted usability testing sessions'
      ],
      process: 'Wireframes, prototypes, usability testing, and iterative design reviews.',
      outcomes: [
        'Customers are able to use the app more effectively',
        'Less time spent with workarounds, more time for core tasks'
      ],
  image: mobileUX,
  media: [
    { type: 'image', src: mobileUX, alt: 'Mobile UX redesign screen' }
  ],
  featured: true,
  figma: 'https://www.figma.com/file/provider-portal-redesign',
    }
]

export default caseStudies
