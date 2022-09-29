import mongoose from 'mongoose'

const productsSchema = mongoose.Schema({
    product: String,
    category: String,
    wid: String,
})

const Product = mongoose.model('Product', productsSchema)

export default Product