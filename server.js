const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Signups = require('./api/models/signupModel');
const routes = require('./api/routes/signupRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://edward:${ process.env.MONGOPW }@cluster0.8gicm4a.mongodb.net/?retryWrites=true&w=majority`);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
	res.status(404).send({ url: `${ req.originalUrl} was not found` });
});

console.log(`Server started on http://localhost:${ port }/`)