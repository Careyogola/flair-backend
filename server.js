import express from 'express'
import dotenv from 'dotenv'
import sequelize from './database/database.js';


dotenv.config();
const app = express();
app.use(express.json());



app.get('/api', (req, res)=>{
    res.send('Hello world, WELCOME TO FLAIR!')
});

sequelize.authenticate().then(()=> console.log('Database connected successfully')).catch(err=> console.error('Database error', err));

const port = process.env.PORT || 4580 ;
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
});