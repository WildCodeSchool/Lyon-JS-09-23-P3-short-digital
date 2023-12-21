CREATE DATABASE IF NOT EXISTS shortDigital;
USE shortDigital;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS video_category;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS video;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
firstname VARCHAR(45) NOT NULL,
lastname VARCHAR(45) NOT NULL,
mail VARCHAR(80) NOT NULL,
pseudo VARCHAR(45) NOT NULL);


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
user_id INT NOT NULL,
CONSTRAINT ownBy
FOREIGN KEY (user_id)
REFERENCES user(id));

CREATE TABLE category (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
name VARCHAR(45)
);

CREATE TABLE video_category (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
category_id INT,
video_id INT,
CONSTRAINT assigned
	FOREIGN KEY (category_id)
    REFERENCES category(id),
CONSTRAINT class 
	FOREIGN KEY (video_id)
    REFERENCES video(id)
);


CREATE TABLE likes (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
user_id INT,
video_id INT,
CONSTRAINT likedBy
	FOREIGN KEY (user_id)
    REFERENCES user(id),
CONSTRAINT beLiked
	FOREIGN KEY (video_id)
    REFERENCES video(id));

INSERT INTO user (firstname, lastname, mail, pseudo) VALUES 
('lulu', 'lapraline', 'luluentreprise@mail.com', 'TotoDu69'), 
('gary', 'tortue', 'tjrplusvite@studio.com', 'lievre'),
('aglae', 'martin', 'cupcake4life@mail.com', 'die4cakes'),
('ulrick', 'dupont', 'dout@dupont.com', 'Alexandre');

INSERT INTO video (title, link, image, description, weight, duration, user_id) VALUES 
('commencer le css', 'https://css-master.com/', 'cssM.png', 'commencer le css et devenez un expert en 2mn', '10mo', 120, 1),
('tout comprendre fonction asychrone js', 'https://jstoutcomprendre.com/', 'jsttc.jpg', 'vous avez rien compris mais vous voulez tout comprendre ?', '12mo', 122, 1),
('terrasser java', 'https://javaoupas.com/','java.png', 'javascript c est trop long a dire, mais java, cava ?', '13mo', 123, 2),
('Johnny quenouille', 'https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/quenouille.mp4?alt=media&token=98ef1dac-1a49-4eee-9b24-40466622f095', 'n', 'Ceci est une vidéo très instructive sur les quenouilles. On prend le temps calmement de découvrir les quenouilles, et c est fantastique. Je suis fasciné par le fait que les quenouilles ont des grenouilles qui font des choses dans les quenouilles', '1kB', 91, 1);


INSERT INTO category (name) VALUES ('css'), ('javaScript'), ('java'), ('Autre');

INSERT INTO video_category (category_id, video_id) VALUES ( 1, 1), (2, 2), (3, 3), (4, 4);

INSERT INTO likes ( user_id, video_id) VALUES (1, 1), (1, 2), (1, 3), (2, 2), (3, 1), (3, 2), (4, 2), (4, 1), (2, 4);
