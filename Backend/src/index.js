import app from './app';
const bp = require('body-parser')

app.listen(app.get('port'))

console.log('server on port', app.get('port'));