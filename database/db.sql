CREATE DATABASE db_links3 ;
USE db_links3;
CREATE TABLE user{
   id  INT(10) NOT NULL,
   compras VARCHAR(60)  NULL,
   username VARCHAR(60) NOT NULL,
   password_user VARCHAR(10) NOT NULL
};
DESCRIBE users;
CREATE TABLE productos{
    marca VARCHAR(60) NOT NULL,
    id  INT(12) NOT NULL,
    descripcion VARCHAR(100)  NULL,
    precio VARCHAR(5) NOT NULL
}:

DESCRIBE productos;
USE db_links3;
selec * from users;