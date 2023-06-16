use classcode;

INSERT INTO tecnologias(idTecnologia, nomeTecnologia)
VALUES (1, 'HTML'),
        (2, 'CSS'),
        (3, 'Javascript'),
        (4, 'NodeJS'),
        (5, 'ReactJS'),
        (6, 'Java'),
        (7, 'Firebase'),
        (8, 'MySQL');

INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("4uygo45h45j36", "Gustavo", "guga@gmail.com", "https://i.pinimg.com/236x/aa/e9/01/aae9010062b1fe06e40b6a9d3bbc1ad0.jpg");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("435i345435345", "Junior", "junin@gmail.com", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIjnXfhCEaKP6oKX3e-WwLpdWhQo_h1StOyCiz6cMY5JL7UPhkjsmQ5yCaHFZpDjD2RU&usqp=CAU");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("64f64f456456", "Alice", "alice@gmail.com", "https://example.com/alice.jpg");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("456456dfgdfg", "Madruga", "bob@gmail.com", "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/39442191_2053137301372451_325886338710634496_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZVQf2pbbZGgAX-s1_3A&_nc_ht=scontent-gru2-2.xx&oh=00_AfAB3FgTDFsKONPteEMInwIlQpX3t-iZwDWHPnYFDt_n0g&oe=64B2D291");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("5435v4vt34tt", "Carol", "carol@gmail.com", "https://media.licdn.com/dms/image/C5603AQETeq5jiJ-2ZQ/profile-displayphoto-shrink_800_800/0/1517497185931?e=2147483647&v=beta&t=HaneJknYheV5eIv7h95Cw9XBSJmwQrnISq7U5H5FuYQ");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("jkljkljkljkl", "Carlos", "david@gmail.com", "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2014_48/786271/141128-chespirito-2242.jpg");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("34vtv3t4wt47", "Eva", "eva@gmail.com", "https://static.wikia.nocookie.net/disney/images/6/67/3625885-4897998087-Wall-.jpg/revision/latest?cb=20160718000255&path-prefix=pt-br");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("6n7n5656556e", "Frank", "frank@gmail.com", "https://static.wikia.nocookie.net/onepiece/images/3/30/Franky_Anime_Pre_Timeskip_Infobox.png/revision/latest?cb=20220913095711");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("n556eddgdgfd", "Giselle", "giselle@gmail.com", "https://hips.hearstapps.com/gioit.h-cdn.co/assets/17/32/1280x960/sd-aspect-1502300140-giselebundchen.jpg");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("b56b567e4322", "Henry", "henry@gmail.com", "https://s2-monet.glbimg.com/CdZEzcP9Anb3b4RJXmpH9Zv2qP0=/0x0:891x645/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e7c91519bbbb4fadb4e509085746275d/internal_photos/bs/2023/P/X/jydujORCS2xBVpbp6UAA/picsart-23-03-13-15-43-18-931.jpg");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("vgdffv344543", "Edna", "edna@gmail.com","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGNYEUsbdAyiY04ot_6UBLLAFjwSIG5E-fgmiFPfp&s");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("vsxf34vv3443", "Jack", "jack@gmail.com", "https://marciatravessoni.com.br/wp-content/uploads/2022/09/zendaya_272350445_470989791066853_8963836764632250176_n-819x1024.jpg");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("dg5v6653v534", "Dilma", "karen@gmail.com", "https://memorialdaresistenciasp.org.br/wp-content/uploads/tainacan-items/3161/50944/DilmaRousseff-scaled.jpg");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("wverwerv35v3", "Lisa", "liam@gmail.com", "https://i.pinimg.com/originals/04/9b/fc/049bfc2b9942b2ff4f8ee6f972760995.jpg");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("n46784342v2r", "Gaules", "mia@gmail.com", "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2021/11/youtube-gaules-reproducao-950x631.jpg");
INSERT INTO tutores (authId, nome, email, perfilImg) VALUES ("ertyberybywt", "Érico Veriscismo", "oscar@gmail.com", "https://media.licdn.com/dms/image/C4D03AQFLww7Okjwbcw/profile-displayphoto-shrink_200_200/0/1655824547188?e=1692230400&v=beta&t=GRh74Y3L_5kYQle8Zt_iBfnEla903v_vPcSX-yco2sw");

-- Relação entre tutores e tecnologias
-- Tecnologia 1 (HTML)
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (1, 1);
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (2, 1);
-- Tecnologia 2 (CSS)
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (3, 2);
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (4, 2);
-- Tecnologia 3 (Javascript)
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (5, 3);
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (6, 3);
-- Tecnologia 4 (NodeJS)
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (7, 4);
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (8, 4);
-- Tecnologia 5 (ReactJS)
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (9, 5);
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (10, 5);
-- Tecnologia 6 (Java)
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (11, 6);
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (12, 6);
-- Tecnologia 7 (Firebase)
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (13, 7);
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (14, 7);
-- Tecnologia 8 (MySQL)
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (15, 8);
INSERT INTO tecnologiatutors (idTutor, idTecnologia) VALUES (16, 8);


select * from duvidas;

select * from tutores;

select * from tecnologiatutors;


