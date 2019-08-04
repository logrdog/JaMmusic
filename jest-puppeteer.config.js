require('dotenv').config();

module.exports = {
  server: {
    setTimeout: 10000,
    launchTimeout: 180000,
    command: 'yarn build:prod && node server.js',
    port: process.env.PORT,
  },
};
