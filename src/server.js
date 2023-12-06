const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017');

// Create User schema
// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// });

// const User = mongoose.model('User', userSchema);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello Kid");
});

// app.post('/register', (req, res) => {
//     const newUser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//     });

//     newUser.save((err) => {
//         if (err) {
//             console.log(err);
//             res.redirect('/error');
//         } else {
//             res.redirect('/success');
//         }
//     });
// });

// app.get('/success', (req, res) => {
//     res.sendFile(__dirname + '/views/success.html');
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
