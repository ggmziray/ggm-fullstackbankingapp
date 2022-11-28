const app = require('./app');

const port = app.get('port');

app.listen(port, () => console.log(`runing on http://localhost:${port}`));  