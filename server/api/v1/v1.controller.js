
'use strict';

var _ = require('lodash');
var Thing = require('./v1.model');


// Get list of things
exports.index = function(req, res) {
  Thing.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};

//showcompany
exports.showcompany = function(req, res) {
  console.log(req.params);
  Thing.find(req.params, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    return res.json(thing);
  });
};

//showadress
exports.showadress = function(req, res) {
  console.log(req.params);
  Thing.find(req.params, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    return res.json(thing);
  });
};

//delorderid
exports.delorderid = function(req, res) {
  Thing.remove(req.params, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    return res.send('Order Deleted!');

    });
  };

//showallitem
exports.showallitem = function(req, res) {
  Thing.aggregate(
    { $group: 
      { _id: '$orderedItem', Total: { $sum: 1 } } 
    },{$sort: {"Total": -1} },
    function (err, cena) {
      res.json(cena);
   } 
)};

// Rest API Documentation
exports.documentation = function(req,res) {
  res.json({
    "all" : {
      "list_endpoint" : "/api/v1/all",
      "method" : "GET",
      "details" : "Requests all orders"
    },
    "companyName" : {
      "list_endpoint" : "/api/v1/companyName/:companyName",
      "method" : "GET",
      "details" : "Requests all orders by company name"
    },
    "costumerAddress" : {     
      "list_endpoint" : "/api/v1/costumerAddress/:costumerAddress",
      "method" : "GET",
      "details" : "Requests all orders by costumer address"
    },
    "orderId" : {
      "list_endpoint" : "api/v1/orderId/:orderId",
      "method" : "DEL",      
      "details" : "Permits remove an order by order ID"
    },
    "orderedItem" : {
      "list_endpoint" : "/api/v1/orderedItem",
      "method" : "GET",      
      "details" : "Requests all ordered items and their quantities"
    }
  });
};

function handleError(res, err) {
  return res.send(500, err);
}