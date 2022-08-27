const Post =  require('./Post');
const User= require('./User');


//Una orden pertenece a UN usuario
Post.belongsTo(User)
//Un usuario puede tener muchas ordenes
User.hasMany(Post)


module.exports= {Post, User}