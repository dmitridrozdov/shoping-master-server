import mongoose from 'mongoose'

const currentListSchema = mongoose.Schema({
    product: String,
    category: String,
    wid: String,
})

const CurrentListProduct = mongoose.model('CurrentListProduct', currentListSchema)

export default CurrentListProduct