DROP DATABASE gpsdb;

----------------
-- Database: GPSDB
CREATE DATABASE gpsdb
  WITH
  OWNER = postgres
  ENCODING = 'UTF8'
  LC_COLLATE = 'en_US.UTF-8'
  LC_CTYPE = 'en_US.UTF-8'
  TABLESPACE = pg_default
  CONNECTION LIMIT = -1;

COMMENT ON DATABASE postgres IS 'GPS Database';

\connect gpsdb

--------------
-- Schema: GPS
CREATE SCHEMA gps AUTHORIZATION postgres;
COMMENT ON SCHEMA gps IS 'GPS data schema';
GRANT ALL ON SCHEMA gps TO postgres;
-- GRANT ALL ON SCHEMA gps TO PUBLIC;
