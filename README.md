# Product Management App

This project is an E-commerce Web Application for managing products. Users can sign up, log in, insert products, update product details, and delete products. The application is built using React.js for the frontend and Node.js, Express.js, and MongoDB for the backend.

## Features

- **User Authentication**: Users can sign up and log in to the web application.
- **Insert Products**: Authenticated users can add new products to the system.
- **Update Products**: Users can update the details of existing products.
- **Delete Products**: Users can remove products from the system.
- **View Products**: The application allows users to view the list of available products.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/)
- React.js: [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your_username/product-management-app.git
cd product-management-app
cd backend
npm install
Create a .env file in the backend directory and add the following variables:
PORT=3001
MONGODB_URI=mongodb://localhost:27017/productdb
JWT_SECRET=your_secret_key
npm start

cd ..
cd frontend
npm install
npm start

Technologies Used

    React.js: A JavaScript library for building user interfaces.
    Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
    Express.js: A minimal and flexible Node.js web application framework.
    MongoDB: A NoSQL database program, using JSON-like documents with schema.
