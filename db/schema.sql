create database burgers_db;
use burgers_db;

create table burgers (
    id int not null auto_increment,
    burger_name varchar(34) not null,
    devoured default false,
    primary key (id)
);
