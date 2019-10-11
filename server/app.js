const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const pool = require("./pool.js");
const mysql = require("mysql");

var app = express();
app.listen(3000);

app.use(cors({
    origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5050","http://127.0.0.1:8081", "http://127.0.0.1:8080","http://localhost:8080"],
    credentials: true
}))
app.use(session({
    secret: "128位字符串", //#安全字符串
    resave: true, //#每次请求保存数据 
    saveUninitialized: true //#保存初始化数据
}));


app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(express.static("public"));

//获取首页轮播图列表 
app.get("/index/banner", (req, res) => {
        var sql = "SELECT * FROM mcake_pc_banner";
        pool.query(sql, [], (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    })
