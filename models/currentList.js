import mongoose from 'mongoose'

const currentListSchema = mongoose.Schema({
    product: String,
    category: String,
    picture: String,
})

const CurrentListProduct = mongoose.model('CurrentListProduct', currentListSchema)

export default CurrentListProduct