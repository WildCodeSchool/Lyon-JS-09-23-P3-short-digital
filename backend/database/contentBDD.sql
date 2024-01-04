USE shortDigital;

INSERT INTO user (firstname, lastname, mail, pseudo) VALUES 
('lulu', 'lapraline', 'luluentreprise@mail.com', 'Praluxor'), 
('gary', 'tortue', 'tjrplusvite@studio.com', 'lievre'),
('aglae', 'martin', 'cupcake4life@mail.com', 'die4cakes'),
('ulrick', 'dupont', 'dout@dupont.com', 'Alexandre');

INSERT INTO video (title, link, image, description, weight, duration, user_id) VALUES 
('commencer le css', 'https://css-master.com/', 'cssM.png', 'commencer le css et devenez un expert en 2mn', '10mo', 120, 1),
('tout comprendre fonction asychrone js', 'https://jstoutcomprendre.com/', 'jsttc.jpg', 'vous avez rien compris mais vous voulez tout comprendre ?', '12mo', 122, 1),
('terrasser java', 'https://javaoupas.com/','java.png', 'javascript c est trop long a dire, mais java, cava ?', '13mo', 123, 2),
('Johnny quenouille', 'https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/quenouille.mp4?alt=media&token=98ef1dac-1a49-4eee-9b24-40466622f095', 'n', 'Ceci est une vidéo très instructive sur les quenouilles', '1kB', 91, 1),
('lulu mange des gateaux', 'https://luluLifeOnFire.com', 'gateaux-lulu.png', 'lulu s enfile 3 paquets de gateaux dans le caisson', '14mo', 120, 1);


INSERT INTO category (name) VALUES ('css'), ('JavaScript'), ('Java'), ('Autre'), ('php'), ('Python');

INSERT INTO video_category (category_id, video_id) VALUES ( 1, 1), (2, 2), (3, 3), (4, 4), (4, 5);

INSERT INTO likes ( user_id, video_id) VALUES (1, 1), (1, 2), (1, 3), (2, 2), (3, 1), (3, 2), (4, 2), (4, 1), (2, 4), (1, 5);
