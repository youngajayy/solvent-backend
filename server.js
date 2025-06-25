const express = require('express');
const app = express();
const PORT = 3000;

// This is your basic "kitchen" - it receives orders
app.use(express.json());

// When someone creates a token order
app.post('/create-token', (req, res) => {
    console.log('New token order received!');
    console.log(req.body);
    
    // For now, just say "order received"
    res.json({ 
        success: true, 
        message: 'Order received! We will process it soon.' 
    });
});

// Start the kitchen (server)
app.listen(PORT, () => {
    console.log(`Kitchen is running on port ${PORT}`);
}); 
