SET NAMES UTF8;
DROP DATABASE IF EXISTS mcake_pc;
CREATE DATABASE mcake_pc CHARSET=UTF8;
USE mcake_pc;

-- 首页轮播图
CREATE TABLE mcake_pc_banner(
  url VARCHAR(128),
  href VARCHAR(128)
);
INSERT INTO mcake_pc_banner VALUES("https://act.mcake.com/fangli/2019/pc/mcake-banner/images/jpgs/memb-10.png","/index.html");
INSERT INTO mcake_pc_banner VALUES("https://act.mcake.com/fangli/2019/pc/mcake-banner/images/jpgs/zhou-nian.jpg","/index.html");
INSERT INTO mcake_pc_banner VALUES("https://act.mcake.com/fangli/2019/pc/mcake-banner/images/jpgs/mid-autumn-festival-2.png","/index.html");
INSERT INTO mcake_pc_banner VALUES("https://act.mcake.com/fangli/2019/pc/mcake-banner/images/jpgs/jianhang-85.jpg","/index.html");

