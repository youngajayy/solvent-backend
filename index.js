const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root route - this fixes the "Can't GET /" error
app.get('/', (req, res) => {
    res.send('<h1>SolMint Backend is Running!</h1><p>Kitchen is ready to cook tokens!</p>');
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'Kitchen is running!', timestamp: new Date() });
});

// Token creation endpoint
app.post('/api/token/create', (req, res) => {
    const { tokenName, tokenSymbol, totalSupply, senderAddress } = req.body;
    
    console.log('New token order:', {
        name: tokenName,
        symbol: tokenSymbol,
        supply: totalSupply,
        address: senderAddress
    });
    
    res.json({ 
        success: true, 
        orderId: 'TOKEN_' + Date.now(),
        message: 'Token order received! Send 0.3 SOL to process.' 
    });
});

// Liquidity creation endpoint
app.post('/api/liquidity/create', (req, res) => {
    console.log('New liquidity order:', req.body);
    
    res.json({ 
        success: true, 
        orderId: 'LIQ_' + Date.now(),
        message: 'Liquidity order received!' 
    });
});

app.listen(PORT, () => {
    console.log(`SolMint Backend running on port ${PORT}`);
});
