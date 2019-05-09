const cv = require('opencv4nodejs');
const path = require('path')
const express = require('express')
const app =express()

const server =require('http').Server(app);
const io =require('socket.io')(server);

const wCap =new cv.VideoCapture(0);

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

setInterval(() => {
  const frame = wCap.read();  //read every secon da frame
  const image = cv.imcode('.jpg', frame).toString('base64');
  io.emit('image', 'some data');
}, 1000)

app.listen(3041);
