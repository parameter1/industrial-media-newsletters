const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://indm.serve.email-x.io');

config
  .setAdUnits('ien-today', [
    {
      name: 'header',
      id: '5c7fd8a7dd5ae704948d03fb',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('ien-weekly', [
    {
      name: 'header',
      id: '5e41bd4bc9c827744d3bd55b',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('video-showcase', [
    {
      name: 'header',
      id: '5c7fd95344d39f0b6db85fdb',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('product-showcase', [
    {
      name: 'header',
      id: '5c7fd93add5ae7033c8d046b',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('industrial-technology-today', [
    {
      name: 'header',
      id: '5c7fd8e644d39f0f19b85f7f',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('industrial-software-technology', [
    {
      name: 'header',
      id: '5c7fd961dd5ae7189f8d0487',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('industrial-management-today', [
    {
      name: 'header',
      id: '5c7fd8fbdd5ae787f98d042a',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('food-beverage-insider', [
    {
      name: 'header',
      id: '5c7fd97144d39f8d00b85ff7',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('finishing-world', [
    {
      name: 'header',
      id: '5c7fd918dd5ae73bdd8d044f',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('industrial-technology-today', [
    {
      name: 'header',
      id: '5c7fd8e644d39f0f19b85f7f',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('engineering-news-today', [
    {
      name: 'header',
      id: '5c7fd92944d39fefc6b85fbf',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('ien-update', [
    {
      name: 'header',
      id: '5c7fd8c7dd5ae749ea8d040e',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
