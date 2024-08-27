const mongoose = require('mongoose');
const URI = 'mongodb+srv://jessicalimabasilio1:sucesso0123*@clusterdev.1pxipsg.mongodb.net/?retryWrites=true&w=majority&appName=ClinicaBemEstar';

//mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('userCreateIndex', true);
//mongoose.set('useUnifiedTopology', true);

mongoose.connect(URI).then(() => console.log('DB is up')).catch(() => console.log(err));