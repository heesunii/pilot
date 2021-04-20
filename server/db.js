const mongoose = require('mongoose');
module.exports = () => {
  function connect() {
    mongoose.connect( 'mongodb+srv://spectra:artceps@cluster0.row7g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    , {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false
    }).then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};