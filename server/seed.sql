DROP DATABASE IF EXISTS Products;

CREATE DATABASE Products;

USE Products;

CREATE TABLE Products.info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT,
    miniDescription TEXT,
    price FLOAT,
    reviewAvg FLOAT,
    reviewCount INT,
    benefit TEXT NULL,
    size TEXT NULL,
    color TEXT NULL
);


INSERT INTO Products.info VALUES (
                                  id,
                                  'ANTILOP',
                                  'High chair with tray, white silver color, silver color',
                                  19.99,
                                  4.2,
                                  24,
                                  'ANTILOP high chair is easy to take apart and bring along so your child sits safely whether you are at home, at your friend’s place or at a restaurant. Enjoy your meal!',
                                  null,
                                  null
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'TOBIAS',
                                     'Chair, clear, chrome plated',
                                     79.00,
                                     4.3,
                                     73,
                                     'A transparent chair that mirrors its surroundings. It picks up the colors of the room and appears to be floating. And because there’s flexibility in the seat, you may feel like you are floating too.',
                                     null,
                                     null
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'HAVSTEN',
                                     'Chair, in/outdoor, beige, 32 5/8x37x35 3/8 "',
                                     260.00,
                                     5.0,
                                     1,
                                     'If you like the look, try how it feels. Generous seats, fluffy cushions as well as elastic mesh fabric make the sofa comfortable. Create your own combination, sit back and relax. Outdoors or indoors!',
                                     null,
                                     null
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'GLENN',
                                     'Bar stool, white, chrome plated, 26 "',
                                     79.99,
                                     4.5,
                                     35,
                                     null,
                                     '26 ", 30 3/8 "',
                                     null
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'FRANKLIN',
                                     'Bar stool with backrest, foldable, white, white, 24 3/4 "',
                                     29.99,
                                     4.9,
                                     12,
                                     null,
                                     null,
                                     null
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'JULES',
                                     'Child\'s desk chair, white',
                                     34.99,
                                     3.3,
                                     7,
                                     null,
                                     null,
                                     null
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'ÖRFJÄLL',
                                     'Swivel chair, white, Vissle blue',
                                     49.99,
                                     0,
                                     0,
                                     null,
                                     null,
                                     null
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'GRÖNADAL',
                                     'Rocking chair, gray, natural',
                                     249.00,
                                     4.4,
                                     7,
                                     'Hand-woven from rattan and ash makes each and every GRÖNADAL rocking chair one of a kind. The light shape and natural materials bring modern Scandinavian design to mind. Easy to place and yours to love.',
                                     null,
                                     null
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'VÅGSBERG / SPORREN',
                                     'Swivel chair, black',
                                     49.99,
                                     2.0,
                                     5,
                                     null,
                                     null,
                                     'Black, Black/white'
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'DIETMAR',
                                     'Underframe for armchair, chrome plated',
                                     40.00,
                                     5.0,
                                     3,
                                     null,
                                     null,
                                     null
                                 );
