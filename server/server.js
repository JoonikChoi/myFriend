const e = require("express");
const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", 3000);
app.get("/login", (req, res) => {
  res.json(req.body.id);
});

app.use(cors());

app.post("/", (req, res) => { // 서버가 요청을 받아서 처리하고 요청한 클라이언트에게 응답해줌
  console.log('request from client [POST]!!');

  console.log(req.body.id);
  console.log(req.body.password);
  // DB에 저장된 id, password와 일치하는지 확인

  res.json({nickname : "hellokitty"}); // json으로 응답, 받는 쪽도 json으로 받아줘야됨.
  // res.send('hellokiity'); // string으로 응답, 받는 쪽도 string으로 받아줘야됨.
});

app.get("/", (req, res) => { 
  console.log('request from client [GET]!!');
  res.json({hello : "hello!"});
});

app.listen(3030, () => { // 자기아이피:3030 으로 접속하면 됨 localhost:3030
  console.log("server on port", 3030);
});

