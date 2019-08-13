//=============================================
// CONFIGS
//---------------------------------------------

//Dependencies
const express = require('express'),
	exphbs = require('express-handlebars');

const app = express(),
	PORT = process.env.PORT || 8080;

//Import Controllers
const indexRoutes = require('./controllers/index'),
	modelRoutes = require('./controllers/modelController');

//---------------------------------------------
// APP SET UP
//---------------------------------------------

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//=============================================
// ROUTING
//---------------------------------------------

app.use(indexRoutes);
app.use(modelRoutes);

//---------------------------------------------
// 404 - PAGE NOT FOUND
//---------------------------------------------

app.get('*', (req, res) => res.render('404'));

//=============================================
// SERVER START
//---------------------------------------------

app.listen(PORT, () => console.log(`==> Listening on port ${PORT}`));
