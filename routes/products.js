import express from 'express'

import { getProducts, addProducts } from '../controllers/products.js'

const router = express.Router()

router.get('/', getProducts)
router.post('/', addProducts)
// router.patch('/:id', updateAgent)
// router.delete('/:id', deleteAgent)

export default router