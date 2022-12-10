const express = require('express')
const app = express()
const port = 3030
const fs = require('fs')

// Page server, to parse and encode the .ttl

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
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
      console.log(information[6].replace('rdf', ''));
      res.send(information[6].replace('rdf', ''));
    } else {
      console.log(information[9]+ ':' + information[10].replace('rdf', ''));
      res.send(information[9]+ ':' + information[10].replace('rdf', ''));
    }
});;
});

app.post('/lireserie', (req, res) => {
  fs.readFile(req.body.name + ".ttl", 'utf8', function(err, data){      
    const information = data.replace(/\s/g,'').split(':');
    const name = information[8];
    if (req.body.db == "DBpedia") {
      console.log(information[13].replace('rdf', ''));
      res.send(information[13].replace('rdf', ''));
    } else {
      console.log(information[16]+ ':' + information[17].replace('rdf', ''));
      res.send(information[16]+ ':' + information[17].replace('rdf', ''));
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