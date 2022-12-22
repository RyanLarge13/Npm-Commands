# Npm-Commands
A repository that allows a user to view and add an npm command to the list and display it from Mongodb straight into the browser! 

## Purpose
This site was built in purpose of displaying backend skills such
as creating user sessions, and minipulating a database.
This application is not currently deployed anywhere and is for
code viewing only.

## About
This is a monorepo application that uses Express, MongoDB, and EJS.
The code allows for the creation of user accounts and allows a user to
add a new npm command. Anyone can add anything they please and while logged in,
a user is welcome to add an npm command creation to their personal list.

## How to run the code?
1. Download the src code
2. In your terminal ``` cd Npm-Commands ``` into the directory and run ``` npm install ``` and ``` touch .env ```
3. You must have a MongoDB account to set the database
4. In the .env file add these line: 
``` 
MONGODB_URI = <your database connection string> 
SESSION_SECRET = <a random code you create>
PORT = 0.0.0.0
```
5. Once those steps are complete, from the root directory
you can run ``` npm start ``` in your terminal and the code should execute.
6. For development run ``` npm run dev ``` in the terminal instead.

## Conclusion
* If any issues occur you can create an issue on github
* If you want to contribute to the code please create a pull request the repository
Enjoy!! 
