const { default: axios } = require('axios');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/resultData', async (req, res) => {

    axios.get(`https://api.cryptowat.ch/markets/kraken/btceur/price?apikey=207TS7YTQBZVYZVIAEQ3`)
        .then((response) => {
            const data = response.data
            res.send({
                data
            })
        })
        .catch((err) => {
            console.log((err))
        })
})

app.get('/orderbookData', async (req, res) => {
    axios.get(`https://api.cryptowat.ch/markets/kraken/btceur/orderbook?apikey=207TS7YTQBZVYZVIAEQ3`)
        .then((response) => {
            const data = response.data
            res.send({
                data
            })
        })
        .catch((err) => {
            console.log((err))
        })
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})