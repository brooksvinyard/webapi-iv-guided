require('dotenv').config();
const server = require('./api/server.js');

// We need to make the port dynamic when deploying to Heroku, OR in the local environment use port 4000
const port = process.env.PORT || 4000;
const greeting = process.env.GREETING;
server.listen(port, () => {
  console.log(`\n*** ${greeting} http://localhost:${port} ***\n`);
});
