const mongoose = require('mongoose');

let movieSchema = mongoose.Schema( { 
    Title: {type: String, required: true },
    Description: {Type: String, required: true },
    Genre: {
        Name: String,
        Description: String
    },
    Director: {
        Name: String,
        Bio: String
    },
});

let userSchema = mongoose.Schema( {
    Username: {type: String, required: true },
    Password: {type: String, required: true },
    Email: {type: String, required: true },
    Birthday: Date,
    FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }]
});

let Movie = mongoose.model('Movie', movieSchema);
let Director = mongoose.model('Director', movieSchema);
let Genre = mongoose.model('Genre', movieSchema);
let User = mongoose.model('User', userSchema);

module.exports.Movie = Movie;
module.exports.User = User;
