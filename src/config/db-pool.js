/**
 * Read the database connection properties and create knex instance.
 * @module config/db-connection-pool
 */

const debug = require('debug')('akira-server:db-pool');

const config = require('./config-env');

const knex = require('knex')({
  client: config.DB_STORE,
  debug: false,
  connection: {
    host: config.DB_SERVER,
    port: config.DB_PORT,
    user: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_DEFAULT_DATABASE,
    pooling: true
  },
  pool: {
    min: Number(config.DB_POOL_MIN),
    max: Number(config.DB_POOL_MAX)
  }
});

module.exports = {knex};
