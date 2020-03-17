const GAMConfiguration = require('@base-cms/marko-newsletters-gam/config');

const config = new GAMConfiguration('137873098');

config
  .setAdUnits('cen-today', [
    {
      name: 'header',
      path: 'CEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
