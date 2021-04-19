import mongoose from 'mongoose'
import CurrentList from '../models/currentList.js'

export const getCurrentList = async (req, res) => {
    try {
        const currentListProducts = await CurrentList.find()
        res.status(200).json(currentListProducts)
    } catch(error) {
        res.status(404).json({ message: error.message})
    }
}

export const addCurrentList =  async (req, res) => {
    const currentListProduct = req.body
    const newCurrentListProduct = new CurrentList(currentListProduct)
    try {
        await newCurrentListProduct.save()
        res.status(201).json(newCurrentListProduct)
    } catch(error) {
        res.status(409).json({ message: error.message})
    }
}

export const deleteProductCurrentList = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`)
    await CurrentList.findByIdAndRemove(id)
    res.json({ message: 'Product deleted successfully'})
}