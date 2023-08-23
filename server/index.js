const express = require('express');
const chalk = require('chalk');
require('dotenv').config();
const cors = require('cors');
// const compression = require('compression');
const path = require('path');
const helmet = require('helmet');

const keys = require('./config/keys');
const routes = require('./routes');
const setupDB = require('./utils/db');


const app = express();
setupDB();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
    helmet({
      contentSecurityPolicy: false,
      frameguard: true
    })
);
app.use(express.static(path.resolve(__dirname, '../dist')));


// Routes
app.use('/', Routes);

console.log('process.env.NODE_ENV ', process.env.NODE_ENV);

// Production
if (process.env.NODE_ENV === 'production') {
    // app.use(compression());
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    });
}
  

app.listen(port, () => {
    console.log(
      `${chalk.green('✓')} ${chalk.blue(
        `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
      )}`
    );
});