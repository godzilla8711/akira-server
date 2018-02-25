/**
 * Maintains requried envirionment settings.
 */

const _ = require('lodash');

process.env.NODE_ENV = 'dev';
process.env.AKIRA_SERVER_PORT = 5000;
process.env.AKIRA_SERVER = `http://localhost:${process.env.AKIRA_SERVER_PORT}`;
process.env.DB_USER = 'postgres';
process.env.DB_SERVER = 'localhost';
process.env.DB_PORT = 5432;
process.env.DB_DEFAULT_DATABASE = 'gpsdb';
process.env.DB_SCHEMA = 'gps';
process.env.DB_STORE = 'pg';
process.env.DB_POOL_MIN = 4;
process.env.DB_POOL_MAX = 20;

const configEnv = {
  settings: {
    NODE_ENV: _.trim(process.env.NODE_ENV),
    AKIRA_SERVER: _.trim(process.env.AKIRA_SERVER),
    AKIRA_SERVER_PORT: _.trim(process.env.AKIRA_SERVER_PORT),
    DB_USER: _.trim(process.env.DB_USER),
    DB_PASS: _.trim(process.env.DB_PASS),
    DB_SERVER: _.trim(process.env.DB_SERVER),
    DB_PORT: _.trim(process.env.DB_PORT),
    DB_DEFAULT_DATABASE: _.trim(process.env.DB_DEFAULT_DATABASE),
    DB_STORE: _.trim(process.env.DB_STORE),
    DB_SCHEMA: _.trim(process.env.DB_SCHEMA),
    DB_POOL_MIN: _.trim(process.env.DB_POOL_MIN) || 4,
    DB_POOL_MAX: _.trim(process.env.DB_POOL_MAX) || 20,
    DEBUG: _.trim(process.env.DEBUG)
  },

  validateSettings() {
    let isValid = true;
    _.forIn(configEnv.settings, (value, name) => {
      if (!value) {
        console.log(`The following environment variable is required: ${name}`);
        isValid = false;
      }
    });
    if (!isValid) {
      console.log('Exiting due to missing environment settings...');
      process.exit();
    }
  },

  debugSettings() {
    _.forIn(configEnv.settings, (value, name) => {
      if (name !== 'DB_PASS') {
        console.log(`${name} = ${value}`);
      } else {
        console.log(`${name} = ####`);
      }
    });
  }
};

// Ensure all required environment variables are defined.
configEnv.debugSettings();
configEnv.validateSettings();

module.exports = configEnv.settings;

