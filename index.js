import express from 'express'
// import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import productsRouts from './routes/products.js'
import currentListRouts from './routes/currentList.js'

const app = express()
dotenv.config()


app.use(express.json({ limit: '30mb', extended: true}))
app.use(express.urlencoded({ limit: '30mb', extended: true}))
app.use(cors())
app.use('/products', productsRouts)
app.use('/currentlist', currentListRouts)

const PORT = process.env.PORT || 5000

const connection_url = process.env.CONNECTION_URL
console.log("blablabala")

mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)

app.get('/', (req,res) => { //FOR DEPLOYMENT
    res.send('hello to sm-2')
})





