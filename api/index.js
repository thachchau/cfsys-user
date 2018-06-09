var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    url = 'mongodb://coffeesys:superpassword@ds161039.mlab.com:61039/coffeesys';

mongoose.Promise = global.Promise;
mongoose.connect(url, (err, db) => {
    if (err) {
        console.log('Failed');
        console.log(err);
    }
    else {
        console.log('Successfully');
        db.collection("inits").find({}).toArray((err, items) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log(items);
            }
        });
        db.close(()=>{
            console.log('Closed');
        });
    }
});

app.listen(port, (err) => {
    if (!err)
        console.log('server is running port ' + port);
    else
        console.log(err);
});