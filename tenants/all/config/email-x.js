const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://indm.serve.email-x.io');

config
  .setAdUnits('fm-today', [
    {
      name: 'header',
      id: '5ddd5531c044ef4d6c9d4055',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('id-today', [
    {
      name: 'header',
      id: '5ddd570255da06ed43436a55',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('impo-mag-today', [
    {
      name: 'header',
      id: '5ddd57f0c044efa60c9d40cd',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('manufacturing-today', [
    {
      name: 'header',
      id: '5ddd585b55da06bd77436acd',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('mbt-today', [
    {
      name: 'header',
      id: '5ddd58ac55da0684a3436b05',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
