import express from 'express'

import { getCurrentList, addCurrentList, deleteProductCurrentList } from '../controllers/currentList.js'

const router = express.Router()

router.get('/', getCurrentList)
router.post('/', addCurrentList)
router.delete('/:id', deleteProductCurrentList)

export default router