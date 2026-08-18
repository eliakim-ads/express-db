import express from 'express'; // Import the Express library using ES6 module syntax
const app = express(); // Create an instance of the Express application

// Create a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Im a backend developer, my API REST with Express!'); // Send a response to the client
});
export default app; // Export the Express application for use in other files
