const GAMConfiguration = require('@base-cms/marko-newsletters-gam/config');

const config = new GAMConfiguration('137873098');

config
  .setAdUnits('ien-today', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('ien-weekly', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('video-showcase', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('product-showcase', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('industrial-technology-today', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('industrial-software-technology', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('industrial-management-today', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('food-beverage-insider', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('finishing-world', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('industrial-technology-today', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('engineering-news-today', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('ien-update', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
