const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/solve', (req, res) => {
    const { cities } = req.body;
    // Call the TSP solver function here
    res.json({ solution: 'solution goes here' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
