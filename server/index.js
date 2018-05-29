/* eslint no-console: "off" */
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();



app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/:search', (req, res)=>{
    axios({
    headers: {
       Authorization: 'Bearer IzXYbCUe7TZQojZDmT9D3nievfCeItsvpDHSYVBsZoitQ-SxKST5mEFD0bCSgvo2_nbM5xsSrUcJ5z4Iw0IAklqjmlwbAdlr6w4sMSm2IOj7eOb8N5ojWUki8CL1WnYx'},
    method: 'GET',
    url: `https://api.yelp.com/v3/businesses/search?term=${req.params.search}`
})
  .then( response=>{
    res.send(response.data)
  })
  .catch( function(error){
      console.log('error2: ', error)
  })}
)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
