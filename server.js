const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Send all requests to index.html so React Router can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CERPC Website server running on port ${PORT}`);
});
