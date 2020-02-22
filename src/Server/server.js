const express = require('express');
const app = express();
const port = 3000;
var cookieParser = require('cookie-parser');
var session = require('express-session')
app.use(cookieParser());
app.use(session({secret: 'Secret'}))

app.get('/test/:id',
    (req, res) => {
        console.log('test');
        console.log(req.params.id);

        var savedCookie = req.cookies.id === undefined ? 'brak': req.cookies.id;

        res.cookie('id', `${req.params.id}`, {maxAge: 36000000000})
            .send(`Poprzedni parametr: ${savedCookie}, Obecny parametr: ${req.params.id}`)
    }
);

app.get('/test/:id/:xd',
    (req, res) => {
        console.log('test');
        console.log(req.params.id);
        res.cookie(`${req.params.id}`, `${req.params.xd}`, {maxAge: 36000000000})
            .send(`Podstrona z parametrem o wartości: id: ${req.params.id} xd: ${req.params.xd}`);
    }
);

app.get('/',
    (req, res) => {
        if (req.session.page_views) {
            req.session.page_views++;
            res.send("'HellOooO for the " + req.session.page_views + " time");
        } else {
            req.session.page_views = 1;
            res.send("'HellOooO for the first time!");
        }
    }
);

app.get('*',
    (req, res) => res.send('Brak wskazanego adresu')
    );

app.listen(port,
    () => console.log(`Example app listening on port ${port}`));