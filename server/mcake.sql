SET NAMES UTF8;
DROP DATABASE IF EXISTS mcake_pc;
CREATE DATABASE mcake_pc CHARSET=UTF8;
USE mcake_pc;

-- 首页轮播图
CREATE TABLE mcake_pc_banner(
  url VARCHAR(64),
  href VARCHAR(128)
);
INSERT INTO mcake_pc_banner VALUES("../../public/images/banner01.jpg","/index.html");
INSERT INTO mcake_pc_banner VALUES("../../public/images/banner02.jpg","/index.html");
INSERT INTO mcake_pc_banner VALUES("../../public/images/banner03.jpg","/index.html");
INSERT INTO mcake_pc_banner VALUES("../../public/images/banner04.jpg","/index.html");
INSERT INTO mcake_pc_banner VALUES("../../public/images/banner05.jpg","/index.html");
