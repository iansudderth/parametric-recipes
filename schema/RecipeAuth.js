const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const recipeAuthSchema = new Schema({
  recipeId: Schema.Types.ObjectId,
  password: String,
});

recipeAuthSchema.plugin(passportLocalMongoose);

const RecipeAuth = mongoose.model('RecipeAuth', recipeAuthSchema);

module.exports = RecipeAuth;
