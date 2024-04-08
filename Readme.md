# Phonebook Backend API

This is a simple RESTful API for managing contacts in a phonebook. It allows you to perform CRUD (Create, Read, Update, Delete) operations on contacts.

## Getting Started

To get started with this API, follow the steps below:

1. Install Node.js and npm if you haven't already.
2. Clone this repository to your local machine.
3. Install dependencies by running `npm install`.
4. Set up a MongoDB database and obtain the connection URI.
5. Create a `.env` file in the root directory and add your MongoDB URI as `DB_URI`.
6. Start the server by running `npm run dev`.
7. The server will start running on http://localhost:8000 by default.

## API Endpoints

- **GET /api/contacts**: Get all contacts.
- **GET /api/contacts/:id**: Get a single contact by ID.
- **POST /api/contacts**: Create a new contact.
- **PUT /api/contacts/:id**: Update a contact by ID.
- **DELETE /api/contacts/:id**: Delete a contact by ID.

## Request and Response Format

### Create Contact (POST /api/contacts)

Request Body:
```json
{
  "name": "John Doe",
  "phone": "123-456-7890"
}
