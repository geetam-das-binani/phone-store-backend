import express from 'express'
import { addphone } from '../controllers/phone-routes.mjs'
import { getPhones } from '../controllers/phone-routes.mjs'
import { getEditPhone } from '../controllers/phone-routes.mjs'
import { EditPhone } from '../controllers/phone-routes.mjs'
import { deletePhone } from '../controllers/phone-routes.mjs'

const router=express.Router()

router.post('/add',addphone)
router.get('/get',getPhones)
router.get('/edit/:id',getEditPhone)
router.post('/edited/:id',EditPhone)
router.delete('/delete/:id',deletePhone)



export {router}