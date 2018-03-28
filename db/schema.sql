

-- Created the DB "burgers_db" 
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "burgers" 
CREATE TABLE burgers (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR( 10 ) NOT NULL,
  `devoured` BOOLEAN,
  `date` TIMESTAMP,
  PRIMARY KEY(id)
);

