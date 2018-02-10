const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))

console.log(this)

var rsp = ['Hello World!', 'Da Wae', 'Goodbye World!']

app.get('/todos', (req, res) => {
  res.send(rsp)
}
)

app.post('/addTodo', (req, res) => {
  var bodyRsp = JSON.parse(req.body.toString())
  var newArray = rsp.concat(bodyRsp)
  res.send(newArray)
}
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
