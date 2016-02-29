/* eslint no-console:0 */
import path from 'path';
import express from 'express';
const app = express();
const port = process.env.PORT || 8082;

app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎 Open up http://localhost:${port}/ in your browser.`);
  }
});
