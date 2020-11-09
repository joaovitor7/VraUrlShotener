require('dotenv').config;
require('./helpers/DatabaseHelper');
//Import modules
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

//Import Schemas
const ShortURL =  require('./models/shortUrl');

//Create a express app
const app = express();
const { SERVER_PORT } = process.env;

//Setting app params
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

app.post('/url', async (req,res) =>{   
    const { url, shortUrlId } = req.body;
    //Bad Request
    if (!url) return res.sendStatus(400);
    
    if (!shortUrlId){
        await ShortURL.create({url});
    } else {
        await ShortURL.create({url, shortUrlId});
    }

    res.sendStatus(200);
});

app.get('/:id', async (req,res) => {
    const { id } = req.params;
    const shortUrl = await ShortURL.findOne({ shortUrlId: id });
    // Not Found
    if (shortUrl == null) return res.sendStatus(404);

    shortUrl.clicks++;
    shortUrl.save();
    
    res.redirect(shortUrl.url);
});


app.listen(SERVER_PORT, () => {
    console.log(`Server is up on port ${SERVER_PORT}`);
});