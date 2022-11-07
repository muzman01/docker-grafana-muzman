const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/flip-coin", (req, res) => {
  let randomNumber = Math.random();
  let conValue = '';
  if(randomNumber < 0.5) {
    conValue = 'heads';
  } else {
    conValue = 'tails';
  }
    res.send(conValue);
});

app.get('/flip-coins',(req,res)=>{
    const times = req.query.times;
    if(times && times > 0){
        let heads = 0;
        let tails = 0;
        for(let i = 0; i < times; i++){
            let randomNumber = Math.random();
            if(randomNumber < 0.5){
                heads++;
            }else{
                tails++;
            }
        }
        res.send(`Heads: ${heads}, Tails: ${tails}`);
    } else {
        res.send('Please provide a valid number of times to flip the coin');
    }
})

app.listen(5000, () => {
    console.log("app 500 de");
})