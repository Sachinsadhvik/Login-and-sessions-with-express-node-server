const {
    MONGODB_USERNAME,
    MONGODB_PASSWORD,
    MONGODB_CLUSTER,
   }=process.env;
   
   var db1= require('mongoose');
   var url = "mongodb+srv://sachinsa:asdf0001@firstcluster.cumtl.mongodb.net/testdb?retryWrites=true&w=majority"
   db1.connect(url, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex: true
   }).then(()=>{
   console.log("succesfully connected to database");
     //console.error(err);
   }).catch((err)=>{
    console.error("error connecting to database")
   })
   
   module.exports=db1;