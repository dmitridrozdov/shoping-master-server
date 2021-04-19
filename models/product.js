import mongoose from 'mongoose'

const productsSchema = mongoose.Schema({
    product: String,
    category: String,
    picture: String,
    // createAt: {
    //     type: Date,
    //     default: new Date()
    // }
})

const Product = mongoose.model('Product', productsSchema)

export default Product