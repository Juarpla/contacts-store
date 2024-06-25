# Contacts Store

Welcome to **Contacts Store**! This is a Node.js application that allows you to manage contacts. 

- **Owner**: Juan Plasencia
- **Production URL**: [https://contacts-store.onrender.com/](https://contacts-store.onrender.com/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Documentation](#documentation)

## Installation

To get started with Contacts Store, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Juarpla/contacts-store
    ```
2. Navigate to the project directory:
    ```bash
    cd contacts-store
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To start the application, use the following command:
```bash
npm start
```

The application will run on [http://localhost:8080](http://localhost:8080) by default.

## API Endpoints

Here are the available API endpoints:

- **GET** `/contacts` - Retrieve all contacts.
- **GET** `/contacts/:id` - Retrieve a contact by ID.
- **POST** `/contacts` - Register a new contact.
- **PUT** `/contacts/:id` - Modify a contact by ID.
- **DELETE** `/contacts/:id` - Delete a contact by ID.


## Documentation

You can find the API documentation at the following URL:
[https://contacts-store.onrender.com/api-docs](https://contacts-store.onrender.com/api-docs)


Also, it is possible to find .rest files to test the different end points with documented examples, in this path `/docs/api`:

- **development** `/docs/api/development.rest` - with local host and development environment.
- **production** `/docs/api/production.rest` - with render.com and production environment.

### Swagger Setup

We use Swagger for API documentation. To view the Swagger UI locally, follow these steps:

1. Ensure your application is running.
2. Open your browser and navigate to [http://localhost:8080/api-docs](http://localhost:8080/api-docs).
