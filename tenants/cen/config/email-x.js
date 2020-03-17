const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://indm.serve.email-x.io');

config
  .setAdUnits('cen-today', [
    {
      name: 'header',
      id: '5c7fd6b6dd5ae7933a8d03c4',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
