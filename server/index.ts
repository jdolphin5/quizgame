const express = require('express');
const app = express();

// Serve static files from the 'dist' folder
app.use(express.static('../dist'));

// ... other server configurations and routes

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
