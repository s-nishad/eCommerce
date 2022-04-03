import express from 'express';
import products_data from './products_data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(products_data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port} `);
});
