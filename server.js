const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// Home with instructions
app.get('/', (req, res) => {
  res.send('Please ask for a date on the params');
});

// If passed a date
app.get('/:str', (req, res) => {
  const str = req.params.str;
  let date, d;

  if (typeof + str === 'number' && !isNaN(str)) {
    // Unix unixtime passed
    d = new Date(+str);
  } else {
    // Natural time passed
    d = new Date(str);
  }

  if (d.getTime()) {
    date = {
      unix: d.getTime() || null,
      natural: d.toDateString() || null,
    };
  } else {
    date = {
      unix: null,
      natural: null,
    };
  }

  if (str) {
    res.send(date);
  } else {
    res.send('Instructions');
  }

});

app.listen(port);
