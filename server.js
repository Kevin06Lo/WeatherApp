import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors()); //This allows requests from my frontend
const PORT = 3000;

//Simple weatehr endopoint
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if(!city) return res.status(400).json({error: "City is required"});
    
    try{
        const apiKey = process.env.API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        res.json(data);
    }catch (err){
        console.error(err);
        res.status(500).json({error: "Failed to fetch weather data"});
    }
});

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}}`));