const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// Home
app.get('/', (req, res) => {
  res.send('Please add at the end of the URL address a date on Unix Time or in human readable format.');
});

// Some String is passed in the URL
app.get('/:str', (req, res) => {
  const str = req.params.str;
  let date, d;

  if (typeof +str === 'number' && !isNaN(str)) {
    // Unix time beingx passed
    d = new Date(+str);
  } else {
    // Natural time passed
    d = new Date(str);
  }

  if (d.getTime()) {
  	// Valid Date formatting
    date = {
      unix: d.getTime(),
      natural: d.toDateString(),
    };
  } else {
  	// Invalid date was received
    date = {
      unix: null,
      natural: null,
    };
  }

  res.send(date);
});

app.listen(port);
