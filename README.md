# project
###Test webapp using Yeoman and MEAN stack (MongoDB, Express, Angular, Node.js)

### Requirements
**Node.js**,
**npm**,
**git** and
**MongoDB**

### To Buil the Webapp

1. **$ ./install.sh** to install all dependencies

2. **$ grunt serve**

3. Consume the REST API with a client, ex. POSTMAN

4. Available endpoints


| Routes      						| Verb   | Action 							  | Example                                                  |
| ----------------------------------|:------:| :---------------------------------:|:--------------------------------------------------------|
| /     							| GET    | Retrieves REST Documentation 	  |http://localhost:9000/api/v1/                             |		
| /all      						| GET    | Retrieves all orders 			  |http://localhost:9000/api/v1/all 						 |
| /companyName/:companyName 		| GET    | Retrieves order by company name    |http://localhost:9000/api/v1/companyName/SuperTrader 	 |
| /costumerAddress/:costumerAddress | GET 	 | Retrieves order by costumer address|http://localhost:9000/api/v1/costumerAddress/Steindamm 80 |
| /orderId/:orderId      			| Delete | Delete order by order ID 		  |http://localhost:9000/api/v1/orderId002                   |
| /orderedItem 						| GET    | Retrieves all ordered items and qty|http://localhost:9000/api/v1/orderedItem                  |
