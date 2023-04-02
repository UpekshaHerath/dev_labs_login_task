create database loginDB; -- create the loginDB
use loginDB; -- use the loginDB

-- create the users table
create table users(
	userID int primary key,
	userName varchar(100),
    password varchar(255)
);

-- drop table users;