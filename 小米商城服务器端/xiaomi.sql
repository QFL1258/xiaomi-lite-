SET NAMES xiaomi;
DROP DATABASE IF EXISTS xiaomi;
CREATE DATABASE xiaomi CHARSET=UTF8;
/*1:进入库qq*/
USE xiaomi;
/*轮播图*/
CREATE TABLE imagelist(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255)
);
INSERT INTO imagelist VALUES(NULL,"http://127.0.0.1:3000/img/轮播图/1.jpg");
INSERT INTO imagelist VALUES(NULL,"http://127.0.0.1:3000/img/轮播图/2.jpg");
INSERT INTO imagelist VALUES(NULL,"http://127.0.0.1:3000/img/轮播图/3.jpg");
/*导航*/
CREATE TABLE navlist(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  nav_name VARCHAR(20)
);
INSERT INTO navlist VALUES(NULL,"http://127.0.0.1:3000/img/导航/1.png","手机");
INSERT INTO navlist VALUES(NULL,"http://127.0.0.1:3000/img/导航/2.png","电视");
INSERT INTO navlist VALUES(NULL,"http://127.0.0.1:3000/img/导航/3.png","电脑");
INSERT INTO navlist VALUES(NULL,"http://127.0.0.1:3000/img/导航/4.png","智能");
INSERT INTO navlist VALUES(NULL,"http://127.0.0.1:3000/img/导航/5.png","生态链");
INSERT INTO navlist VALUES(NULL,"http://127.0.0.1:3000/img/导航/6.png","新品");
INSERT INTO navlist VALUES(NULL,"http://127.0.0.1:3000/img/导航/7.png","小米闪购");
INSERT INTO navlist VALUES(NULL,"http://127.0.0.1:3000/img/导航/8.png","以旧换新");
INSERT INTO navlist VALUES(NULL,"http://127.0.0.1:3000/img/导航/9.png","1分拼团");
INSERT INTO navlist VALUES(NULL,"http://127.0.0.1:3000/img/导航/10.png","每日精选");
/* 商品一*/
CREATE TABLE product_1(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title  VARCHAR(20),
  info VARCHAR(20)
);
INSERT INTO product_1 VALUES(NULL,"http://127.0.0.1:3000/img/product_1/1.png","小米play","4GB+64GB 一年流量免费用");
INSERT INTO product_1 VALUES(NULL,"http://127.0.0.1:3000/img/product_1/2.png","智能好物精选","全场最高减300元");
INSERT INTO product_1 VALUES(NULL,"http://127.0.0.1:3000/img/product_1/3.png","智能电视特惠","55.4K超清电视仅仅1999元");
/*everyday_img*/
CREATE TABLE every_day(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title  VARCHAR(255),
  info VARCHAR(255),
  money_now VARCHAR(20),
  money_list VARCHAR(20) 
);
INSERT INTO every_day VALUES(NULL,"http://127.0.0.1:3000/img/everyday_img/1.png","小米8 青春版","潮流镜面渐变色，自拍旗舰",1399,NULL);
INSERT INTO every_day VALUES(NULL,"http://127.0.0.1:3000/img/everyday_img/2.png","小米8 屏幕指纹版","压感屏幕指纹，潮流外观",2999,3199);
INSERT INTO every_day VALUES(NULL,"http://127.0.0.1:3000/img/everyday_img/3.png","红米6","小屏高性能的双摄手机",729,799);
INSERT INTO every_day VALUES(NULL,"http://127.0.0.1:3000/img/everyday_img/4.png","小米6X","轻薄美观的拍照手机",1299,1799);
INSERT INTO every_day VALUES(NULL,"http://127.0.0.1:3000/img/everyday_img/5.png","小米8SE","三星 AMOLED 全面屏",1699,1999);
INSERT INTO every_day VALUES(NULL,"http://127.0.0.1:3000/img/everyday_img/6.png","小米平板4","追剧神器 / 支持AI人脸识别",1099,NULL);
INSERT INTO every_day VALUES(NULL,"http://127.0.0.1:3000/img/everyday_img/7.png","黑鲨游戏手机 Helo","双液冷，更能打",3199,NULL);
INSERT INTO every_day VALUES(NULL,"http://127.0.0.1:3000/img/everyday_img/8.png","红米6A","好用好看不贵",549,599);