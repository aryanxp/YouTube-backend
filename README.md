# YouTube Subscribers Backend Project

This is a basic backend project called "YouTube Subscribers" that utilizes Express.js and MongoDB with Mongoose to create a RESTful API for performing CRUD operations on user data. The application allows you to fetch, create, update, and delete user records from the MongoDB database.

# Project Summary

https://docs.google.com/document/d/1Jt4zVS1UI-1CEChg08msUh13gaQNqk5w/edit?usp=sharing&ouid=102128415381824138785&rtpof=true&sd=true

# YouTube Video Link

Demo Tutorial on - https://youtu.be/-AkijTXhK0o

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
    "_id": "64ec47fbba60e5124859c1a8",
    "name": "Jeread Krus",
    "subscribedChannel": "CNET",
    "subscribedDate": "2023-08-28T07:08:43.619Z",
    "__v": 0
  },
  {
    "_id": "64ec47fbba60e5124859c1a9",
    "name": "John Doe",
    "subscribedChannel": "freeCodeCamp.org",
    "subscribedDate": "2023-08-28T07:08:43.620Z",
    "__v": 0
  },
  {
    "_id": "64ec47fbba60e5124859c1aa",
    "name": "Lucifer",
    "subscribedChannel": "Sentex",
    "subscribedDate": "2023-08-28T07:08:43.621Z",
    "__v": 0
  },
  {
    "_id": "64ec47fbba60e5124859c1ab",
    "name": "Aryan",
    "subscribedChannel": "CNET",
    "subscribedDate": "2023-08-28T07:08:43.621Z",
    "__v": 0
  },
  {
    "_id": "64ec47fbba60e5124859c1ac",
    "name": "Aniket",
    "subscribedChannel": "freeCodeCamp.org",
    "subscribedDate": "2023-08-28T07:08:43.621Z",
    "__v": 0
  },
  {
    "_id": "64ec47fbba60e5124859c1ad",
    "name": "Aryanupdated",
    "subscribedChannel": "Youtubeupdated",
    "subscribedDate": "2023-08-28T07:08:43.621Z",
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
   "message": "User created successfully"
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
   "message": "Subscriber Updated",
   "modified": 1
}
```

### Deleting a subscriber -DELETE /subscribers/:id

**Request:**

```
DELETE /subscribers/61307c2fa62e4b001f4e1a5b
```

**Response:**

```json
{
  "message": "Subscriber deleted"
}
```

## Conclusion

Congratulations! You've successfully set up and run the "YouTube Subscribers" backend project. Now you can use the provided API endpoints to fetch, create, update, and delete user data in the MongoDB database. Feel free to modify and expand the project according to your requirements.

If you have any questions or need further assistance, please don't hesitate to contact us.
