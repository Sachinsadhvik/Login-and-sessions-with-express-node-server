const UsersModel = require('../MODELS/usersModel');
const bcrypt = require('bcrypt');
const createUser =async (UserDetails)=>{
return new Promise((resolve,reject)=> {
    try{
        bcrypt.hash(UserDetails.password, 8, function(err, hash) {
            if(err){
                reject(e);
            }
            else{
                const newUser= new UsersModel();
                newUser.email= UserDetails.email;
                newUser.password= hash;
                newUser.save();
                resolve(newUser);
            }
        });

        
        }
        catch(e){
            //console.log("errors",e);
            //throw new ERROR('Error:',e)
            reject(e)
        }
})

}

const verifyUser= (UserDetails)=>{
    return new Promise(async (resolve,reject)=> {
        try{
            const user= await UsersModel.find({ email: UserDetails.email })
            console.log("user",user[0].password,"userdetails",UserDetails);
           bcrypt.compare(UserDetails.password, user[0].password, function(err, result) {
            // result == true
            if(!err){
                resolve(user[0]);
            } 
            else{
                throw Error('please verify the details provided');
            }  

        });
                     
        }
            catch(e){
                reject(e)
            }
    })
    
    }
    



module.exports.createUser=createUser;
module.exports.verifyUser=verifyUser;