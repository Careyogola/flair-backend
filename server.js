import express from 'express'

const app = express();


app.get('/', (req, res)=>{
    res.send('Hello world, WELCOME TO FLAIR!')
});

const port = process.env.PORT || 4500 ;
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
});