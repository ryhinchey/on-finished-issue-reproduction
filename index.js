var path = require('path');
var express = require('express');
var onFinished = require('on-finished');

var app = express();

app.use('/', (req, res) => {

  onFinished(res, (err, res) => {
    console.log('transfer done');
  });

  res.sendFile(path.join(process.cwd(), 'test.txt'), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('sent file');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));