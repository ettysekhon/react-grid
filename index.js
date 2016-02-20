require('babel-register');
if (process.env.NODE_ENV === 'production') {
  require('./src/server/server.prod');
} else {
  require('./src/server/server.dev');
}
