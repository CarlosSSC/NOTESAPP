const express = require('express');
const path = require('path');
const exphbs =require('express-handlebars');


//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partiaksDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs');


//global variables
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//static files

// Server is listening
app.listen(app.get('port'), () =>{
    console.log('Server is listening on port: ', app.get('port'));
});