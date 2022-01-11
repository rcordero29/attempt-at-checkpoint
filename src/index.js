let express = require('express');
// const { route } = require('express/lib/router');
require('dotenv').config();
let app = express();
let routes = require('./routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(routes);

let PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log('your app is on', PORT);
});
