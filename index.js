const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

// middlewares

app.use(cors());
app.use(express.json());


// routers

const router = require('./Routes/noteRouter');
app.use('/api', router);


app.get('/', (req, res) => {
    res.send('Server is running');
})

app.listen(PORT, () => {
    console.log(`server has started in port: ${PORT}`);
})