const GAMConfiguration = require('@base-cms/marko-newsletters-gam/config');

const config = new GAMConfiguration('137873098');

config
  .setAdUnits('design-development-update', [
    {
      name: 'header',
      path: 'DDT-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('design-development-today', [
    {
      name: 'header',
      path: 'DDT-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
