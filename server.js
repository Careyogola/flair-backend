import express from 'express'
import dotenv from 'dotenv'
import sequelize from './database/database.js';
import User from './models/users.js';

import authRoutes from './routes/authRoutes.js'


dotenv.config();
const app = express();
app.use(express.json());


// routes 
app.use('/api/auth', authRoutes);



app.get('/api', (req, res)=>{
    res.send('Hello world, WELCOME TO FLAIR!')
});

sequelize.authenticate().then(()=> console.log('Database connected successfully')).catch(err=> console.error('Database error', err));
sequelize.sync({ alter: true}).then(()=> console.log('users table synced')).catch(err=> console.error('eror syncing tables', err));

const port = process.env.PORT || 4580 ;
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
});