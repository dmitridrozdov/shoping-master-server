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
    
const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
}

const myDecipher = decipher('lollypop')
const log = '787a7b727a71773e6667632f3a3a71786c61677a5157606670672f71786c61677a2424272d5576796066617067253b726c637d7b3b787a7b727a71773b7b70613a667d7a65657c7b72387874666170672a677061676c42677c617066286167607033622878747f7a677c616c'
const connection_url = myDecipher(log)

mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)

app.get('/', (req,res) => { //FOR DEPLOYMENT
    res.send('hello to sm-2')
})





