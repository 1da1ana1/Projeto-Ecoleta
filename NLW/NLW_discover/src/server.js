const express = require("express")
const server = express()
const nunjucks = require("nunjucks");
const path = require("path");

server.use(express.static(path.join(__dirname, '..', 'public')))
//utilizando template engine

nunjucks.configure(path.join(__dirname,"views"),{
    express: server,
    noCache: true
})


server.get("/",(req, res)=>{
    return res.render("index.html",)
})

server.get("/create-point",(req, res)=>{
    return res.render("create-point.html")
})

server.get("/search",(req, res)=>{
    return res.render("search-results.html")
})


//liga o servidor
server.listen(3000)

