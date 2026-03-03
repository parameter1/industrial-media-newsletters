const brands = require('./brands');
const nativeX = require('./native-x');
const emailX = require('./email-x');
const gam = require('./gam');

module.exports = {
  mindfulAdsDate: '2025-01-25',
  nativeX,
  emailX,
  gam,
  defaultEsp: 'omeda',
  'adm-today': {
    ...brands.adm,
    name: 'Automotive Design Manufacturing Today',
    preheader: true,
    // subscribeText: 'SUBSCRIBE TEXT HERE',
  },
  'adm-weekly': {
    ...brands.adm,
    name: 'Automotive Design Manufacturing Weekly',
    preheader: true,
    logo: {
      src: '/files/base/indm/adm/ADD_Weekly_2026.png',
      footerWidth: 200,
    },
  },
  ddt: {
    socialMediaLinks: [
      {
        provider: 'facebook',
        href: 'https://www.facebook.com/designdevelopmenttoday/',
        title: 'Follow us on Facebook',
      },
      {
        provider: 'twitter',
        href: 'https://twitter.com/DesignDevelop12',
        title: 'Follow us on Twitter',
      },
      {
        provider: 'linkedin',
        href: 'https://www.linkedin.com/groups/13611964',
        title: 'Follow us on LinkedIn',
      },
    ],
  },

  cen: {
    socialMediaLinks: [
      {
        provider: 'linkedin',
        href: 'https://www.linkedin.com/company/cannabis-equipment-news/',
        title: 'Follow us on LinkedIn',
      },
      {
        provider: 'instagram',
        href: 'https://www.instagram.com/cannabisequipmentnews/?hl=en',
        title: 'Follow us on Instagram',
      },
      {
        provider: 'youtube',
        href: 'https://www.youtube.com/channel/UCe37Mhsr0aaBUuBzk1RR6AA/featured',
        title: 'Follow us on YouTube',
      },
      {
        provider: 'facebook',
        href: 'https://www.facebook.com/CannaEquipmentNews/',
        title: 'Follow us on Facebook',
      },
      {
        provider: 'twitter',
        href: 'https://twitter.com/news_cen',
        title: 'Follow us on Twitter',
      },
    ],
  },

  ien: {
    socialMediaLinks: [
      {
        provider: 'facebook',
        href: 'https://www.facebook.com/Industrial-Equipment-News-153179218105048',
        title: 'Follow us on Facebook',
      },
      {
        provider: 'twitter',
        href: 'https://twitter.com/IEN_Now',
        title: 'Follow us on Twitter',
      },
      {
        provider: 'youtube',
        href: 'https://www.youtube.com/channel/UCwKursTtvT5lmEJBhdYeRbQ',
        title: 'Follow us on YouTube',
      },
      {
        provider: 'instagram',
        href: 'https://www.instagram.com/ien_now/',
        title: 'Follow us on Instagram',
      },
    ],
  },

  mdd: {
    socialMediaLinks: [
      {
        provider: 'linkedin',
        href: 'https://www.linkedin.com/company/medical-design-development/',
        title: 'Follow us on LinkedIn',
      },
      {
        provider: 'facebook',
        href: 'https://www.facebook.com/medicaldesigndevelopment/',
        title: 'Follow us on Facebook',
      },
      {
        provider: 'twitter',
        href: 'https://twitter.com/MedDevelopment',
        title: 'Follow us on Twitter',
      },
    ],
  },
};
