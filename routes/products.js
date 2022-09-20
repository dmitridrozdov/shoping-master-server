import express from 'express'

import { getProducts, addProducts, getALLProducts } from '../controllers/products.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/', getALLProducts)
router.post('/', addProducts)
// router.patch('/:id', updateAgent)
// router.delete('/:id', deleteAgent)

export default router