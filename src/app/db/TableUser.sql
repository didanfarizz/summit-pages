create table user (
id INT AUTO_INCREMENT PRIMARY KEY,
fullname varchar (255),
email varchar (255) unique,
pass varchar (255),
phone varchar (15)
);
