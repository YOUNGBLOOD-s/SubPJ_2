// import  express  from "express";
const express = require("express");

const app = express();
const server = require("http").createServer(app);
const port = process.argv[2] || process.env.PORT || 8081;
const redis = require("socket.io-redis");

const io = require("socket.io")(server, {
  path: "/socket.io", // 클라이언트 사이드 코드의 path와 동일해야함
  transports: ["websocket"] // websocket만을 사용하도록 설정
});

// 프로세스를 여러개 띄웠을 때, 컨텍스트를 공유하기 위해  redis store를 바인딩
io.adapter(
  redis({
    host: "localhost",
    port: 6379
  })
);

io.sockets.on("connection", socket => {
  socket.on("message", message => {
    console.log(message);
    socket.broadcast.emit("message", message);
  });
});

server.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
