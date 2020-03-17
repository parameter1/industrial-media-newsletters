const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://indm.serve.email-x.io');

config
  .setAdUnits('design-development-update', [
    {
      name: 'header',
      id: '5c7fd61044d39f5560b85eed',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('design-development-today', [
    {
      name: 'header',
      id: '5c7fd480dd5ae7f7fb8d037b',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
