SET NAMES UTF8;
DROP DATABASE IF EXISTS nx;
CREATE DATABASE nx CHARSET=UTF8;
USE nx;
CREATE TABLE nx_user(
uid INT PRIMARY KEY,
uname VARCHAR(32),
upwd VARCHAR(32),
email VARCHAR(64),
phone VARCHAR(16),
avatar VARCHAR(128),
user_name VARCHAR(32),
gender INT
);
CREATE TABLE nx_receiver_address(
aid INT PRIMARY KEY,
user_id INT,
receiver VARCHAR(16),
province VARCHAR(16),
county VARCHAR(16),
address VARCHAR(128),
cellphone VARCHAR(16),
fixedphone VARCHAR(16),
postcode VARCHAR(6),
tag VARCHAR(16),
is_default TINYINT,
FOREIGN KEY(user_id) REFERENCES nx_user(uid)
);
CREATE TABLE nx_cake_family(
fid INT PRIMARY KEY,
name VARCHAR(32)
);
CREATE TABLE nx_cake(
cid INT PRIMARY KEY,
family_id INT,
product_id INT,
title VARCHAR(128),
subtitle VARCHAR(128),
price DECIMAL(10,2),
promise VARCHAR(64),
spec VARCHAR(64),
name VARCHAR(32),
FOREIGN KEY(family_id) REFERENCES nx_cake_family(fid)
);
CREATE TABLE xz_shopping_cart(
sid INT PRIMARY KEY,
user_id INT,
product_id INT,
count INT,
FOREIGN KEY(user_id) REFERENCES nx_user(uid),
FOREIGN KEY(product_id) REFERENCES nx_cake(cid)
);
CREATE TABLE nx_order(
aid INT PRIMARY KEY,
user_id INT,
address_id INT,
order_time BIGINT,
pay_time BIGINT,
deliver_time BIGINT,
received_time BIGINT,
FOREIGN KEY(address_id) REFERENCES nx_receiver_address(aid),
FOREIGN KEY(user_id) REFERENCES nx_user(uid)
);
CREATE TABLE nx_order_detail(
did INT PRIMARY KEY,
order_id INT,
product_id INT,
count INT,
FOREIGN KEY(order_id) REFERENCES nx_order(aid)
);
CREATE TABLE nx_cake_pic(
pid INT PRIMARY KEY,
cake_id INT,
sm VARCHAR(128),
md VARCHAR(128),
lg VARCHAR(128),
FOREIGN KEY(cake_id) REFERENCES nx_cake(cid)
);
CREATE TABLE nx_index_carousel(
cid INT PRIMARY KEY,
img VARCHAR(128),
title VARCHAR(64),
herf VARCHAR(128)
);
CREATE TABLE nx_index_product(
pid INT PRIMARY KEY,
title VARCHAR(64),
details VARCHAR(128),
pic VARCHAR(128),
price DECIMAL(10,2),
href VARCHAR(128),
seq_recommended TINYINT,
seq_new_arrival TINYINT,
seq_top_sale TINYINT
);