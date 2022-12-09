const express=require('express');
const port=4200;
const app=express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
const router=require('./routers');
app.use('/',router);



app.listen(port,function(error){
    if(error)
    {
        console.log("ERROR OCCURED");
        return;
    }
    console.log(`Port is running successfully on : ${port}`);

})