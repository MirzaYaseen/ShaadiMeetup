const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

// Middleware for JSON parsing
app.use(express.json());

// Define a route to fetch profiles
app.get('/api/profiles', async (req, res) => {
  try {
    // Replace with your actual API endpoint
    const apiUrl = 'http://192.168.18.31/api/profiles'; // Update with your API URL

    const response = await axios.get(apiUrl);
    const data = response.data.data.profiles;

    res.json({ status: 'success', data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
