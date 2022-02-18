# Naya_Pro
This is a MEA STACK project (MERN STACK). React not used -R
postman, express, node.js, mongodb used
for performing CRUD OPERATIONS on the data from Postman ex. GET, POST, PUT and DELETE.
To run do the following:
Open a new terminal in your IDE
install the dependencies for express, node.js, mongoose and mongodb
Then run : node app.js
You will get this in the console:
Naya's -  RESTful web services with Nodejs started on: 9000
Now, open postman:
For HTTP GET request: Add http://localhost:9000/nayacollection/ to the address bar of Postman
For HTTP POST request: Add http://localhost:9000/nayacollection/ to the address bar of Postman 
                        In BODY => x-www-form-urlencoded enter the key value pairs for the new item/product
For HTTP PUT request to update by id : Add http://localhost:9000/nayacollection/update/?productId= to the address bar of Postman
For HTTP DELETE request to delete by id : Add http://localhost:9000/nayacollection/delete/?productId=  to the address bar of Postman
