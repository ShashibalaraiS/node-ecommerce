const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const indexRouter = require('./routes');


app.use('/', indexRouter);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});