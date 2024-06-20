const express = require('express');
const session = require('express-session');
const ejs = require('ejs');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'rakfanmakmak',
    resave: false,
    saveUninitialized: false,
}));

app.get('/', (req, res, next) => {
    res.render('index', { loggedIn: req.session.loggedIn });
});

app.get('/incorrect', (req, res, next) => {
    res.render('incorrect', { loggedIn: req.session.loggedIn });
});

app.get('/fivemouths', (req, res) => {
    if (req.session.loggedIn) {
        res.render('fivemouth');
    } else {
        res.redirect('/incorrect');
    };
});

app.post('/verify', (req, res) => {
    const { code } = req.body;
    if (!code) {
        res.redirect('/incorrect');
    } else if (code === process.env.PASS) {
        req.session.loggedIn = true;
        res.redirect('/fivemouths');
    } else {
        res.redirect('/incorrect');
    }
});

app.post('/byeee', (req, res) => {
    res.redirect('https://google.com')
})

app.listen(PORT, () => {
    console.log(`WebSite is running on http://localhost:${PORT}`)
})