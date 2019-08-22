const express = require('express');






const app = express();

app.get('/api/home/date', (req, res)=>{
  res.json({
      code: 0,
      message: 'ok',
      data: require('./data/home.json')
  })
});

app.get('/api/home/wholebook', (req, res)=>{
  res.json({
      code: 0,
      message: 'ok',
      data: require('./data/wholebook.json')
  })
});

app.get('/api/home/free', (req, res)=>{
  res.json({
      code: 0,
      message: 'ok',
      data: require('./data/free.json')
  })
});







app.listen(9000, (error)=>{
  if(error)
      console.log('启动失败');
  else
      console.log('启动成功');
})