set client_encoding = 'UTF8';

create table users(
    id serial primary key,
    name varchar(255),
    email varchar(255),
    age int
);
