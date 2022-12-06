const express = require('express')
const app = express()
const port = 3030
const fs = require('fs')


const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Worlddd!')
})

app.post('/lirefilm', (req, res) => {
  fs.readFile(req.body.name + ".ttl", 'utf8', function(err, data){      
    const information = data.replace(/\s/g,'').split(':');
    const name = information[8];
    if (req.body.db == "DBpedia") {
      res.send(information[11]);
    } else {
      res.send(information[14]);
    }
});;
});

app.post('/lireserie', (req, res) => {
  fs.readFile(req.body.name + ".ttl", 'utf8', function(err, data){      
    const information = data.replace(/\s/g,'').split(':');
    const name = information[8];
    if (req.body.db == "DBpedia") {
      res.send(information[17]);
    } else {
      res.send(information[20]);
    }
});;
});

app.post('/ecrire',(req, res) => {
  fs.writeFile(req.body.name + ".ttl", req.body.info, (err) => {
    if (err)
      console.log(err);
    else {
      console.log(fs.readFileSync("user.ttl", "utf8"));
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})