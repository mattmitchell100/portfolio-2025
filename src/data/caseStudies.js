import pearsonStoreImg from '../assets/case-studies/pearson-store.png'
import providerPortalImg from '../assets/case-studies/provider-portal.png'
import beckDesignSystemImg from '../assets/case-studies/beck-design-system.png'

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
    featured: true,
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
    featured: true,
  },
  {
    slug: 'beck-design-system',
    title: 'Design System for Internal & Customer Apps',
    year: '2025',
    role: 'Lead UX Designer',
    summary: 'Established and maintained a Figma design system to streamline delivery across teams.',
    responsibilities: [
      'Mentored junior designers and drove consistency',
      'Set up tokens, components, and usage guidelines',
      'Partnered with dev leads on UI kit parity'
    ],
    process: 'Component inventory, theming strategy, contribution model, and documentation with examples.',
    outcomes: [
      'Higher delivery velocity across squads',
      'Consistent UX across surfaces',
      'Clear governance and contribution workflow'
    ],
    image: beckDesignSystemImg,
    featured: true,
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
      featured: false,
    },
    {
      slug: 'beck-design-system',
      title: 'Design System for Internal & Customer Apps',
      year: '2025',
      role: 'Lead UX Designer',
      summary: 'Established and maintained a Figma design system to streamline delivery across teams.',
      responsibilities: [
        'Mentored junior designers and drove consistency',
        'Set up tokens, components, and usage guidelines',
        'Partnered with dev leads on UI kit parity'
      ],
      process: 'Component inventory, theming strategy, contribution model, and documentation with examples.',
      outcomes: [
        'Higher delivery velocity across squads',
        'Consistent UX across surfaces',
        'Clear governance and contribution workflow'
      ],
      image: beckDesignSystemImg,
      featured: false,
    }
]

export default caseStudies
