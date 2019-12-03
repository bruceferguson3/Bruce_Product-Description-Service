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
    color TEXT NULL,
    onSale BOOLEAN,
    new BOOLEAN
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
                                  null,
                                  false,
                                  false
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
                                     null,
                                     false,
                                     false
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
                                     null,
                                     false,
                                     false
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
                                     null,
                                     false,
                                     false
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
                                     null,
                                     false,
                                     false
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
                                     null,
                                     false,
                                     false
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
                                     null,
                                     false,
                                     false
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
                                     null,
                                     false,
                                     false
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
                                     'Black, Black/white',
                                     false,
                                     false
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
                                     null,
                                     false,
                                     false
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'LANGUR',
                                     'High chair tray, white',
                                     10.00,
                                     0,
                                     0,
                                     null,
                                     null,
                                     null,
                                     false,
                                     false
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'JOKKMOKK',
                                     'Table and 4 chairs, antique stain',
                                     129.00,
                                     4.6,
                                     143,
                                     'A simple and sturdy set that’s perfect for your breakfast nook or smaller dining area. The solid pine holds up well over time and will endure all the family meals and activities around the table.',
                                     null,
                                     null,
                                     false,
                                     false
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'STEFAN',
                                     'Chair, brown-black',
                                     25.00,
                                     4.3,
                                     59,
                                     'A sturdy chair with a solid wood construction that can handle the challenges of everyday life! Combines nicely with most styles, and if you’re looking for extra comfort, simply add a chair pad. ',
                                     null,
                                     null,
                                     false,
                                     false
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'BALTSAR',
                                     'Chair, black-blue, brown',
                                     169.00,
                                     5.0,
                                     1,
                                     null,
                                     null,
                                     null,
                                     false,
                                     false
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'HARRY',
                                     'Chair, black, Knisa light gray',
                                     55.00,
                                     0,
                                     0,
                                     null,
                                     null,
                                     null,
                                     true,
                                     true
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'MARIUS',
                                     'Stool, black',
                                     5.99,
                                     4.5,
                                     71,
                                     null,
                                     null,
                                     null,
                                     true,
                                     false
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'MARTIN',
                                     'Chair, black, black',
                                     19.00,
                                     3.7,
                                     3,
                                     null,
                                     null,
                                     null,
                                     false,
                                     false
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'TROLLBERGET',
                                     'Sit/stand support, Glose black',
                                     149.00,
                                     4.6,
                                     5,
                                     'Moves you when seated. This sit/stand support helps you to sit actively. A smart mechanism keeps your body in constant motion, strengthens muscles and the spine – and gives you a naturally healthy posture.',
                                     null,
                                     'Glose black, Grann beige',
                                     false,
                                     false
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'KOLON',
                                     'Floor protector, 47 1/4x39 3/8 "',
                                     24.99,
                                     3.8,
                                     107,
                                     'A practical solution under your child’s chair at the dining table or under your work chair to spare your floor from spills, wear and dirt. It’s transparent so your rug or floor will shine through.',
                                     null,
                                     null,
                                     false,
                                     false
                                 );
INSERT INTO Products.info VALUES (
                                     id,
                                     'MALINDA',
                                     'Chair pad, light beige, 16/14x15x3 "',
                                     4.49,
                                     4.3,
                                     48,
                                     'The extra thick filling provides soft, cushiony comfort even on the hardest of chairs. Two identical sides offers a longer life – simply turn the chair pad over when one side becomes worn or dirty.',
                                     null,
                                     null,
                                     false,
                                     false
                                 );
