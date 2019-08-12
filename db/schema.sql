DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger (
  id INT auto_increment primary key,
  burger_name varchar(30),
  devoured boolean
);