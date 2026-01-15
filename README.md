# Backend Project

## Overview
This project is a simple Express 5 application that uses EJS templates and TailwindCSS-in-the-browser to manage a list of users stored in MongoDB. It demonstrates basic create, read, update, and delete (CRUD) operations with Mongoose and server-rendered views.

## Prerequisites
- Node.js 18 or newer
- npm (bundled with Node.js)
- A running MongoDB instance accessible at mongodb://localhost:27017/myapp (default connection string in models/user.js)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Ensure MongoDB is running locally or update the connection string in models/user.js.
3. Start the development server:
   ```bash
   node app.js
   ```
4. Open http://localhost:3000 in your browser.

## Project Structure
```
app.js                 # Express application entry point
models/user.js         # Mongoose schema and connection
public/                # Static assets served by Express
  stylesheets/style.css
Views/                 # EJS templates for each screen
  index.ejs            # Create form
  read.ejs             # List all users
  edit.ejs             # Update form
```

## Available Routes
- GET / — render the user creation form.
- POST /create — create a new user; responds with the created user JSON.
- GET /read — render the list of users with edit/delete links.
- GET /edit/:id — render the update form for a specific user.
- POST /update/:id — update an existing user and redirect to /read.
- GET /delete/:id — delete a user and redirect to /read.

## Tailwind and Static Assets
The EJS views pull Tailwind utilities from the CDN at runtime. Additional styling can be added in public/stylesheets/style.css, which is served through Express static middleware.

## Development Notes
- All database operations are performed with async/await; add error handling as needed for production use.
- To change the database name or host, update mongoose.connect in models/user.js.
- Add an npm start script or integrate nodemon for auto-reloading during development if desired.
