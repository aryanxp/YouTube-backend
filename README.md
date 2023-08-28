# YouTube Subscribers Backend Project

This is a basic backend project called "YouTube Subscribers" that utilizes Express.js and MongoDB with Mongoose to create a RESTful API for performing CRUD operations on user data. The application allows you to fetch, create, update, and delete user records from the MongoDB database.

## Prerequisites

Before running this project, ensure that you have the following prerequisites installed on your system:

- Node.js (version >= 12.0.0)
- MongoDB (version >= 3.6.0)

## Getting Started

To get started with the "YouTube Subscribers" backend project, follow these steps:

1. Clone the repository:

   ````
   git clone https://github.com/aryanxp/YouTube-backend.git
   ````

2. Navigate to the project directory:

   ````
   cd YouTube-backend
   ````

3. Install the dependencies:

   ````
   npm install
   ````
   or if you want to use yarn
   
   ````
   yarn install
   ````

4. Set up the MongoDB connection:

   - Open the `.env` file and modify the `MONGODB_URI` variable to match your MongoDB connection string.

5. Start the server:

   ````
   npm start
   ````

   The server will be running at `http://localhost:3000`.


## API Endpoints

The following API endpoints are available for performing CRUD operations on user data:

- **GET /subscribers** - Fetches all subscribers from the database.
- **GET /subscribers/:id** - Fetches a subscriber with the specified ID.
- **POST /subscribers** - Creates a new subscriber.
- **PATCH /subscribers/:id** - Updates a subscriber with the specified ID.
- **DELETE /subscribers/:id** - Deletes a subscriber with the specified ID.

## Request and Response Examples

### Fetching all subscribers - GET /subscribers

**Request:**

```
GET /subscribers
```

**Response:**

```json
Status: 200 OK
Content-Type: application/json

[
  {
    "_id": "612c22b6a62e4b001f4e1a5a",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "subscribedOn": "2022-08-31T10:22:30.000Z",
    "__v": 0
  },
  {
    "_id": "61307c2fa62e4b001f4e1a5b",
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "subscribedOn": "2022-09-02T08:15:45.000Z",
    "__v": 0
  }
]


### Fetching a subscriber - GET /subscribers/:id

**Request:**

```
GET /subscribers/612c22b6a62e4b001f4e1a5a
```

**Response:**

```json
Status: 200 OK
Content-Type: application/json

{
  "_id": "612c22b6a62e4b001f4e1a5a",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "subscribedOn": "2022-08-31T10:22:30.000Z",
  "__v": 0
}
```

### Creating a subscriber - POST /subscribers

**Request:**

```
POST /subscribers
Content-Type: application/json

{
  "name": "Alice Johnson",
  "email": "alicejohnson@example.com"
}
```

**Response:**

```json
Status: 201 Created
Content-Type: application/json

{
  "_id": "61307c2fa62e4b001f4e1a5b",
  "name": "Alice Johnson",
  "email": "alicejohnson@example.com",
  "subscribedOn": "2023-08-28T12:00:00.000Z",
  "__v": 0
}
```

### Updating a subscriber - PATCH /subscribers/:id

**Request:**

```
PATCH /subscribers/61307c2fa62e4b001f4e1a5b
Content-Type: application/json

{
  "name": "Alice Thompson"
}
```

**Response:**

```json
Status: 200 OK
Content-Type: application/json

{
  "_id": "61307c2fa62e4b001f4e1a5b",
  "name": "Alice Thompson",
  "email": "alicejohnson@example.com",
  "subscribedOn": "2023-08-28T12:00:00.000Z",
  "__v": 0
}
```

### Deleting a subscriber -DELETE /subscribers/:id

**Request:**

```
DELETE /subscribers/61307c2fa62e4b001f4e1a5b
```

**Response:**

```json
Status: 204 No Content
```

## Conclusion

Congratulations! You've successfully set up and run the "YouTube Subscribers" backend project. Now you can use the provided API endpoints to fetch, create, update, and delete user data in the MongoDB database. Feel free to modify and expand the project according to your requirements.

If you have any questions or need further assistance, please don't hesitate to contact us.
