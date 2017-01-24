const express = require('express');

const app = express();

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

  res.send(date);
});

app.listen(8080);
