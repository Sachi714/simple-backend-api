const express = require('express');
const app = express();
const PORT = 3000;

app.get('/sayHello', (req, res) => {
	res.json({ message: 'Hello User' });
});

app.listen(PORT, () => {
	console.log('Server running on port ${PORT}');
});


