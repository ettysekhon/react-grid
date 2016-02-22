/* eslint no-console:0 */
import express from 'express';
const app = express();
const port = 8082;

app.use(express.static('../../dist'));

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎 Open up http://localhost:${port}/ in your browser.`);
  }
});
