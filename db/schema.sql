drop database if exists burgers_db;
CREATE DATABASE burgers_db;
 
USE burgers_db;
 
create table burgers (
id integer not null auto_increment,
   burger_name varchar(30) NOT NULL, 
   devoured BOOLEAN NOT NULL DEFAULT FALSE,
   Primary key(id)
);