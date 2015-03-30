/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/v1/v1.model');


Thing.find({}).remove(function() {
  Thing.create({
    "orderId": "001",
    "companyName": "SuperTrader",
    "costumerAddress": "Steindamm 80",
    "orderedItem": "Macbook"
  },{
    "orderId": "002",
    "companyName": "Cheapskates",
    "costumerAddress": "Reeperbahn 153",
    "orderedItem": "Macbook"
  },{
    "orderId": "003",
    "companyName": "MegaCorp",
    "costumerAddress": "Steindamm 80",
    "orderedItem": "Book \"Guide to Hamburg\""
  }, {
    "orderId": "004",
    "companyName": "SuperTrader",
    "costumerAddress": "Sternstrasse 125",
    "orderedItem": "Book \"Cooking 101\""
  },{
    "orderId": "005",
    "companyName": "SuperTrader",
    "costumerAddress": "Ottenser Hauptstrasse 24",
    "orderedItem": "Inline Skates"
  },{
    "orderId": "006",
    "companyName": "MegaCorp",
    "costumerAddress": "Reeperbahn 153",
    "orderedItem": "Playstation"
},{
    "orderId": "007",
    "companyName": "Cheapskates",
    "costumerAddress": "Lagerstrasse 11",
    "orderedItem": "Flux compensator"
},{
    "orderId": "008",
    "companyName": "SuperTrader",
    "costumerAddress": "Reeperbahn 153",
    "orderedItem": "Inline Skates"
  });
});
