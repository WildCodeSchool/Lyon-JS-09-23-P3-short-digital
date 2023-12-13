CREATE DATABASE IF NOT EXISTS shortDigital;
USE shortDigital;

DROP TABLE IF EXISTS video;

CREATE TABLE video (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
title VARCHAR(100) NOT NULL,
link VARCHAR(255) NOT NULL,
image VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
weight VARCHAR(10) NOT NULL,
duration INT NOT NULL,
nb_view INT NOT NULL DEFAULT 0,
user_id INT NOT NULL);

INSERT INTO video (title, link, image, description, weight, duration)
VALUES ( 'Johnny Crying - Super Quenouille', 'https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/quenouille.mp4?alt=media&token=98ef1dac-1a49-4eee-9b24-40466622f095',
'https://i.ytimg.com/vi/yw35BYhKVoo/maxresdefault.jpg', 'Voici un petit vidéo sur les quenouilles du japon', '36MB', 126);


DROP TABLE IF EXISTS category;
CREATE TABLE category (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
name VARCHAR(45));

INSERT INTO category (name) VALUES ( 'test');

DROP TABLE IF EXISTS video_category;
CREATE TABLE video_category (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
category_id INT,
video_id INT);

DROP TABLE IF EXISTS user;
CREATE TABLE users (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
firstname VARCHAR(45) NOT NULL,
lastname VARCHAR(45) NOT NULL,
mail VARCHAR(80) NOT NULL,
pseudo VARCHAR(45) NOT NULL);

INSERT INTO user (firstname, lastname, mail, pseudo) VALUES ( 'Lulu', 'Martin', 'lulu.martin@bidonmail.com', 'luluLaPraline');

DROP TABLE IF EXISTS likes;
CREATE TABLE likes (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
user_id INT,
video_id INT);

