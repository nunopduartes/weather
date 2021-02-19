const path = require('path');
const express = require('express');
const hbs = require('hbs'); 
const geocode =  

const app = express();

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(publicPath));

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

const autor = 'Nuno';

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather APP',
        nome: 'Nuno',
        author: autor,
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App | About',
        heading1: 'Sobre a nossa aplicação',
        author: autor,
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.city) {
        return res.send({
            error: "localização não definida"
        })
    }

    //function teste(address, (error, {latitude, longitude, location} = {}))

    geocode(req.query.city, (error, {latitude, longitude, location} = {}) => {
            
    });

    res.send({
        forecast: "Sol",
        location: "Porto",
        address: req.query.city,
    })
});

app.get('*', (req, res) => {
    res.render('404');
})

app.listen(3000, () => {
    console.log('O servidor iniciou');
});