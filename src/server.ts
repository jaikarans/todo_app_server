import express from 'express'
import handleRoot from './routes/root'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import loginRouter from './routes/signin';
import signinRouter from './routes/signin';
import signupRouter from './routes/signup';

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.qq8t57w.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log(console.log('connected to MongoDB database')))
  .catch((re) => (console.log('database is not connected', re)))


const app = express();

// app.use(logger);
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', handleRoot);
app.use('/signup', signupRouter)
app.use('/signin', signinRouter);
// login router

app.use(loginRouter)



app.listen(3000);
