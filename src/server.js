const express = require('express');
const app = express();
const axios = require('axios')
const port = 5000;

app.use(express.json());


app.get('/api/snowtooth', async (req, res) => {
  const url = 'https://snowtooth.moonhighway.com/';
  const query = `
  query {
    allLifts {
    name,
    elevationGain,
    status
    }
  }
`;
  try {
    const response = await axios.post(url, { query }, {
      headers: { 'Content-Type': 'application/json' },
    });

    // Handle the data as needed
    res.json(response.data);
  } catch (error) {
    // Handle the error
    console.error('API request failed:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});