const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/subject', (req, res) => {
  res.send('ITE314');
});


app.get('/exam', (req, res) => {
  res.send('P2');
});


app.get('/node', (req, res) => {
  res.send('NODEJS');
});


app.get('/mydata', (req, res) => {
  res.json({
    subject: 'ITE314',
    exam: 'P2',
    node: 'NODEJS'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
