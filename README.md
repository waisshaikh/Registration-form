Bharat-intern-Task-1-Registration-form
Registration Form Project
Overview
This project is a simple registration form created during my internship at Bharat Intern. The form allows users to register by entering their name, email, and password. The data is stored in a MongoDB database. This project demonstrates the use of Express.js for server-side handling, Mongoose for MongoDB interactions, and basic HTML/CSS for the front end.

Features
User registration with name, email, and password
Data storage in MongoDB using Mongoose
Success and error handling with corresponding HTML pages
Basic CSS for styling with a glassmorphism effect
Technologies Used
Node.js: JavaScript runtime
Express.js: Web framework for Node.js
MongoDB: NoSQL database
Mongoose: MongoDB object modeling for Node.js
dotenv: Environment variable management
body-parser: Middleware for parsing request bodies
Installation
Prerequisites
Node.js installed
MongoDB Atlas account (or a local MongoDB instance)
Steps
Clone the repository:
git clone https://github.com/your-username/registration-form-project.git
cd registration-form-project

Install dependencies: npm install

Set up environment variables: Create a .env file in the root directory and add your MongoDB credentials: MONGOODB_USERNAME=your_username MONGOODB_PASSWORD=your_password PORT=3000 # Optional, defaults to 3000 if not specified

Directory Structure /pages ├── index.html # Main registration page ├── success.html # Success page └── error.html # Error page index.js # Main server file package.json # Project configuration and dependencies .env # Environment variables (not included in repo) How It Works Server Setup:

index.js sets up an Express server and connects to MongoDB using Mongoose. Environment variables are loaded using dotenv. Routes:

GET /: Serves the main registration page. POST /register: Handles form submissions, saves user data to MongoDB, and redirects to success or error pages. GET /success: Serves the success page. GET /error: Serves the error page. Form Handling:

The registration form in index.html posts data to the /register route. The server processes the form data, saves it to the database, and redirects based on the outcome.

