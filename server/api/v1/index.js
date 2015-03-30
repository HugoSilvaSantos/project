'use strict';

var express = require('express');
var controller = require('./v1.controller');

var router = express.Router();

router.get('/all', controller.index);
router.get('/companyName/:companyName', controller.showcompany); //display data from a particular company
router.get('/costumerAddress/:costumerAddress', controller.showadress); //display data by costumer address
router.delete('/orderId/:orderId', controller.delorderid); //delete by order id
router.get('/orderedItem', controller.showallitem); //display all items
router.get('/', controller.documentation); //display documentation

module.exports = router;