create table users(
    user_id int NOT NULL,
    username varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    UNIQUE (username, email),
    PRIMARY KEY (user_id)
);
insert into users ( user_id, username, email, first_name, last_name, password)
values (1, 'yur_ochka', 'iliayurchenko06@gmail.com', 'Illia', 'Yurchenko', 'qwerty123')
RETURNING *;
