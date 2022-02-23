//백엔드의 시작점

//express 모듈을 가져옴
const express = require('express')
//새로운 express 앱 만듦
const app = express()
//포트 설정
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://goakgoak:jisungpark@boilerplate.8pmfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected....'))
  .catch(err => console.log(err))

  
//루트 디렉토리에 Hello World! 출력
app.get('/',(req, res) => res.send('Hello World!'))
//실행
app.listen(port, () => console.log(`Example app listening on port ${port}!`))