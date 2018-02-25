     
DROP VIEW IF EXISTS gps.location;
DROP TABLE IF EXISTS gps.location_t;
DROP VIEW IF EXISTS gps.measurement_gga;
DROP TABLE IF EXISTS gps.measurement_gga_t;
DROP VIEW IF EXISTS gps;

-- Create the device, resource, tracked_item
CREATE TABLE IF NOT EXISTS gps.tracked_item_t (
  tracked_item_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(1024)
);

CREATE TABLE IF NOT EXISTS gps.location_t (
  location_id SERIAL PRIMARY KEY,
  recordedTime TIMESTAMP NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  altitude DOUBLE PRECISION NOT NULL
);

INSERT INTO gps.tracked_item_t (name, description)
VALUES ( 'Akira', 'Family dog');

INSERT INTO gps.location_t (recordedTime, latitude, longitude, altitude)
VALUES ( '2018-01-30T04:47:09.000Z', 39.00687166666667, -76.88168833333333, 57.7);
INSERT INTO gps.location_t (recordedTime, latitude, longitude, altitude)
VALUES ( '2018-01-30T04:47:09.100Z', 39.00787166666667, -76.88268833333333, 57.8);
INSERT INTO gps.location_t (recordedTime, latitude, longitude, altitude)
VALUES ( '2018-01-30T04:47:09.200Z', 39.00887166666667, -76.88368833333333, 57.9);

