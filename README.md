# Task management
It is simple task management application. In this application you can create, view, update and delete tasks. Node.js and expressjs used at the back-end and vanilla javascript used for front-end with axios library for http request.

![task](https://user-images.githubusercontent.com/37697829/153877151-ebc6d342-6d72-4ec2-90cc-577f9c367503.PNG)


## To run
1. install packages  -> npm install 
2. create database connection url either by using cloud database or local
3. create .env file and store your url to the variable 
4. require('dotenv').config();
5. pass the variable to database connect method as url parameter, pass like  this -> Process.env.variable
6. npm start
