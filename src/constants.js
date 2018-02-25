const { name: MODULE_NAME, version: MODULE_VERSION } = require('../package.json');

const { DB_SCHEMA } = require('./config/config-env');

module.exports = {
  MODULE_NAME,
  MODULE_VERSION,
  DB_TABLE_TRACKING_ITEM: `${DB_SCHEMA}.tracked_item_t`
};
