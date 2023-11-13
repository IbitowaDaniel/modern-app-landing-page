import { FaFacebookF, FaTwitter, FaGithubAlt, FaFacebook, FaInstagram, FaDribbble, } from 'react-icons/fa';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { Paypal, Google, Dropbox, Editing, Speed, Vector, Briefcase, Secure, Smart, Winner, Cloud, Setting, Design, Chat, ArrowEven, ArrowOdd, Avatar1, Avatar2, Avatar3, Avatar4, } from '@app/assets';


export const Navigation = [
  { name: 'Home', path: "home" },
  { name: 'Features', path: 'features' },
  { name: 'Testimonial', path: 'testimonial' },
  { name: 'Pricing', path: 'pricing' },
];

export const SocialLinks = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

export const SponsorsData = [
  {
    id: 1,
    path: '#',
    image: Paypal,
    title: 'paypal',
  },
  {
    id: 2,
    path: '#',
    image: Google,
    title: 'google',
  },
  {
    id: 3,
    path: '#',
    image: Dropbox,
    title: 'dropbox',
  },
];


export const KeyFeatureData = [
  {
    id: 1,
    subTitle: 'Quality Features',
    MainTitle: 'Meet exciting feature of app',
    features: [
      {
        id: 1,
        imgSrc: Vector,
        altText: 'Vector',
        title: 'Vector Editing',
        text:
          'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
      {
        id: 2,
        imgSrc: Editing,
        altText: 'Monitoring',
        title: 'Customize & Monitoring',
        text:
          'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
      {
        id: 3,
        imgSrc: Speed,
        altText: 'Quality',
        title: 'Quality & Short-period',
        text:
          'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
    ]
  }
];

export const CoreFeatureData = [
  {
    id: 1,
    subTitle: 'Core features',
    mainTitle: 'Smart Jackpots that you may love this anytime & anywhere',
    features: [
      {
        id: 1,
        imgSrc: Briefcase,
        altText: 'Briefcase',
        title: 'Smart Features',
        text:
          'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
      {
        id: 2,
        imgSrc: Secure,
        altText: 'Secure',
        title: 'Secure Contents',
        text:
          'Get your blood tests delivered at home collect a sample from the your blood tests.',
      },
    ],
  },
];

export const FeatureData = [
  {
    id: 1,
    subTitle: 'Quality Features',
    mainTitle: 'Meet exciting feature of app',
    features: [
      {
        id: 1,
        imgSrc: Smart,
        altText: 'Smart',
        title: 'Smart Features',
        text:
          'Get your blood tests delivered at let home collect sample from the victory of the managements.',
      },
      {
        id: 2,
        imgSrc: Winner,
        altText: 'Performance',
        title: 'Fast Performance',
        text:
          'Get your blood tests delivered at let home collect sample from the victory of the managements.',
      },
      {
        id: 3,
        imgSrc: Cloud,
        altText: 'Content',
        title: 'Unlimited Content',
        text:
          'Get your blood tests delivered at let home collect sample from the victory of the managements.',
      },
      {
        id: 4,
        imgSrc: Setting,
        altText: 'Customization',
        title: 'Unlimited Customization',
        text:
          'Get your blood tests delivered at let home collect sample from the victory of the managements.',
      },
      {
        id: 5,
        imgSrc: Design,
        altText: 'Productivity',
        title: 'Boost Productivity',
        text:
          'Get your blood tests delivered at let home collect sample from the victory of the managements.',
      },
      {
        id: 6,
        imgSrc: Chat,
        altText: 'Support',
        title: 'Customer Support',
        text:
          'Get your blood tests delivered at let home collect sample from the victory of the managements.',
      },
    ],
  },
];

export const CoreFeature2Data = [
  {
    subTitle: 'Core features',
    mainTitle: 'Smart Jackpots that you may love this anytime & anywhere',
    description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
    btnText: 'Get Started',
    btnURL: '#',
  },
];

export const NumberedFunctionData = [
  {
    id: 1,
    subTitle: 'whats the function',
    mainTitle: "Let's see how it works",
    features: [
      {
        id: 1,
        no: 1,
        img: ArrowEven,
        title: 'Set disbursement Instructions',
        text: "Get your blood tests delivered at home collect a sample from the your blood tests."
      },
      {
        id: 2,
        no: 2,
        img: ArrowOdd,
        title: 'Assembly retrieves funds from your account',
        text: "Get your blood tests delivered at home collect a sample from the your blood tests."
      },
      {
        id: 3,
        no: 3,
        img: ArrowEven,
        title: 'Assembly initiates disbursement',
        text: "Get your blood tests delivered at home collect a sample from the your blood tests."
      },
      {
        id: 4,
        no: 4,
        title: 'Customer receives funds payment',
        text: "Get your blood tests delivered at home collect a sample from the your blood tests."
      },
    ]
  }
];

export const TestimonialData = [
  {
    id: 1,
    subTitle: 'testimonial',
    mainTitle: "Meet Client Satisfaction",
    features: [
      {
        id: 1,
        title: 'Modern look & trending design',
        description:
          'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        avatar: Avatar1,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 4,
      },
      {
        id: 2,
        title: 'Design Quality & performance',
        description:
          'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        avatar: Avatar2,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 5,
      },
      {
        id: 3,
        title: 'Layout and organized layers',
        description:
          'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        avatar: Avatar3,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 5,
      },
      {
        id: 4,
        title: 'Modern look & trending design',
        description:
          'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        avatar: Avatar4,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 4,
      },
    ]
  }
];

export const PaymentData = [
  {
    subTitle: 'payment security',
    mainTitle: 'Secure Payment Transaction System with #1 Ranking',
    description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
    btnText: 'Learn More',
    btnURL: '#',
  },
];


export const PricingData = [
  {
    id: 1,
    subTitle: 'our pricing plan',
    mainTitle: "Choose your pricing policy",
    features: [
      {
        name: 'Free Plan',
        description: 'For Small teams or office',
        buttonText: 'Signup Now',
        points: [
          {
            icon: <IoIosCheckmarkCircle />,
            text: 'Ultimate access to all course, exercises and assessments',
            isAvailable: true,
          },
          {
            icon: <IoIosCheckmarkCircle />,
            text:
              'Free access for all kind of exercise corrections with downloads.',
            isAvailable: true,
          },
          {
            icon: <IoIosCheckmarkCircle />,
            text: 'Total assessment corrections with free download access system',
            isAvailable: true,
          },
          {
            icon: <IoIosCloseCircle />,
            text: 'Unlimited download of courses on the mobile app contents',
            isAvailable: false,
            opacity: 'opacity-50',
            btnColor: 'text-white opacity-40',
          },
          {
            icon: <IoIosCloseCircle />,
            text: 'Download and print courses and exercises in PDF',
            isAvailable: false,
            opacity: 'opacity-50',
            btnColor: 'text-white opacity-40',
          },
        ],
      },
      {
        header: 'Recommended',
        name: 'Premium',
        description: 'For startup enterprise',
        priceDecription: 'Starting from',
        priceWithUnit: '$29.99/mo',
        buttonText: 'Signup Now',
        points: [
          {
            icon: <IoIosCheckmarkCircle />,
            text: 'Ultimate access to all course, exercises and assessments',
            isAvailable: true,
          },
          {
            icon: <IoIosCheckmarkCircle />,
            text:
              'Free access for all kind of exercise corrections with downloads.',
            isAvailable: true,
          },
          {
            icon: <IoIosCheckmarkCircle />,
            text: 'Total assessment corrections with free download access system',
            isAvailable: true,
          },
          {
            icon: <IoIosCheckmarkCircle />,
            text: 'Unlimited download of courses on the mobile app contents',
            isAvailable: true,
          },
          {
            icon: <IoIosCheckmarkCircle />,
            text: 'Download and print courses and exercises in PDF',
            isAvailable: true,
          },
        ],
      },
    ],
  },
];


export const FAQsData = [
  {
    subTitle: "Get your question's answer",
    mainTitle: 'Frequently asked question',
    features: [
      {
        id: 1,
        title: 'How to contact with riders emergency?',
        contents: 'Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.',
      },
      {
        id: 2,
        title: 'App installation failed, how to update system information?',
        contents: 'Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much when the mud dries it acts as protection from the sunburns and insects.',
      },
      {
        id: 3,
        title: 'Website response taking time, how to improve?',
        contents: 'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.',
      },
      {
        id: 4,
        title: 'New update fixed all bug and issues',
        contents: "If you're looking to hunt a unicorn, but don't know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers.",
      },
    ]
  }
];

export const FooterData = [
  {
    id: 1,
    header: 'About Us',
    items: [
      {
        path: '/',
        label: 'Support Center',
      },
      {
        path: '/',
        label: 'Customer Support',
      },
      {
        path: '/',
        label: 'About Us',
      },
      {
        path: '/',
        label: 'Copyright',
      },
    ],
  },
  {
    id: 2,
    header: 'Our Information',
    items: [
      {
        path: '/',
        label: 'Return Policy ',
      },
      {
        path: '/',
        label: 'Privacy Policy',
      },
      {
        path: '/',
        label: 'Terms & Conditions',
      },
      {
        path: '/',
        label: 'Site Map',
      },
    ],
  },
  {
    id: 3,
    header: 'My Account',
    items: [
      {
        path: '/',
        label: 'Press inquiries',
      },
      {
        path: '/',
        label: 'Social media ',
      },
      {
        path: '/',
        label: 'directories',
      },
      {
        path: '/',
        label: 'Images & B-roll',
      },
    ],
  },
  {
    id: 4,
    header: 'Contact',
    items: [
      {
        path: '/',
        label: 'Facebook',
        media: <FaFacebook />,
        btnColor: 'text-[#3B5998]',
      },
      {
        path: '/',
        label: 'Twitter',
        media: <FaTwitter />,
        btnColor: "text-[#55ACEE]",
      },
      {
        path: '/',
        label: 'Instagram',
        media: <FaInstagram />,
        btnColor: 'text-[#e4405f]',
      },
      {
        path: '/',
        label: 'Dribbble',
        media: <FaDribbble />,
        btnColor: 'text-[#E74D89]',
      },
    ],
  }
];
