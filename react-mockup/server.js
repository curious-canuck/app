const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = DEV && require('dotenv').config();

const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const path        = require('path');

const app         = express();
const PORT        = process.argv[2] || process.env.PORT || 3000;

app.set('superSecret', 'my super secret word')

// set up some logging
app.use(logger('dev'));

// we're only going to accept json
app.use(bodyParser.json());

// bring in the  routes
app.use( '/userapi',        require('./routes/userApi')   );
app.use( '/userapi/users',  require('./routes/users') );

app.use( express.static(path.join(__dirname, 'dist')))


// Let's go!
app.listen(PORT , ()=> console.log(`server here! listening on`, PORT ) )
