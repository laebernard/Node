const { response } = require('express')
const express = require('express')
const app = express()

// port du localhost
const port = 3000


const metrics = {
  status: "healthy",
  resquestCount: {},
}

app.use((req, res, next) => {
  const route = req.url
  if (route in metrics.resquestCount){
    metrics.resquestCount[route]++
  }
  else{
    metrics.resquestCount[route]=1
  }
  console.log(`[${new Date().toISOString()}]: ${req.url}`);
  next();
  
});

// permet d'afficher un message sur la page
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/welcome', (req, res) => {
    res.send('TP 1 du cours d architecture logicielle')
  })

// permet d'ajouter un message en console 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/secret',(req,res) =>{
    // res.write('Erreur 404');
    // // res.send(statutCodes.NotFound);
    // res.send('Vous ne possédez pas les droits pour accéder à ma page secrète',404);

    res.status(401).send('Vous ne possédez pas les droits pour accéder à ma page secrète');
})

app.get('/error', (req, res) => {
    res.status(500).json({message: "erreur"})
  })

app.get('/img',(req,res) => {
    res.download("./image.jpg");
})

app.get('/redirectMe',(req,res) => {
  res.redirect('http://extra.univ-littoral.fr/')
})

app.get('/users/:name',(req,res) => {
    var name = "laetitia"
    res.send("Bienvenue sur la page de" + name);
    // res.send('Bienvenue sur la page de'.json({name}))
})

app.get('/somme', (req, res) => {
    const a = parseInt(req.query.a );
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(`Le résultat de la somme entre ${a} et ${b} est ${sum}.`);
  });

app.get('/metrics',(req,res,next) => {
    metrics.uptime = process.uptime()
    return res.json(metrics)
  
  }) 
  
app.use((req, res, next) => {
    res.status(404).send('Cette page n\'existe pas!');
    });

