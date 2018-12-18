const express = require('express')

const checkoutController = require('../controllers/checkoutController')
const authorize = require('../../utils/authorize')

const router = express.Router()

router.post('/order/create/:cartId/', authorize('User'), checkoutController.checkout)
router.delete('/order/cancel/:orderId', authorize('User'), checkoutController.cancelOrder)

module.exports = router
