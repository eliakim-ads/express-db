
import app from './src/app.js'; // Import the Express application from the app.js file

const port = 3000; // Define the port number for the server to listen on

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});