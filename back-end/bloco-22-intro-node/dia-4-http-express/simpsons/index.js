const express = require('express');
const fs = require('fs');
const simpsonsRouter = require('./routes/simpsonsRoutes');

const app = express();

app.use(express.json());

app.use('/simpsons', simpsonsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server runing at port ${PORT}`));
