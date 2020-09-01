// Modules
const express = require('express');
const createError = require('http-errors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
// Routes
const indexRoute = require('./routes/indexRoute');
const usersRoute = require('./routes/usersRoute');
const postsRoutes = require('./routes/postsRoutes');
// Other Imports
const {setCORS} = require('./middlewares/security');
dotenv.config();
const config = require('./config/config');

// Server
const app = express();

// Port
const port = process.env.PORT || 3001;

// Listen
app.listen(port, () => console.log('... Server is running ...'));

// Database
mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', (err) => console.log(err));
mongoose.connection.on('open', () => console.log('... Databse is connected ...'));

// Middleware
app.use(express.static("client/build"));
app.use(express.json());
app.use(cookieParser());
app.use(setCORS);
app.use('/', indexRoute);
app.use('/users', usersRoute);
app.use('/posts', postsRoutes);

// Error handler
app.use((res, req, next) => {
    next(createError(404));
});

// Error function
app.use((err, req, res, next) => {
    res.json({
        status: err.status,
        message: err.message
    })
});


