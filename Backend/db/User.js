const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model('users',userSchema)



//8
//const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const connectDB = async ()=>{
//     mongoose.connect('mongodb://localhost:27017/e-comm')
//     const productShema = new mongoose.Schema({})
//     const product = mongoose.model('product',productShema);
//     const data = await product.find();
//     console.log(data);
// }

// connectDB();

// const express = require('express')
// const cors = require('cors')
// require('./db/config');
// const User = require('./db/User');
// const Product = require('./db/Product')
//  const Jwt = require('jsonwebtoken');
//  const Jwtkey = 'e-comm'
// const app = express();

// app.use(express.json());
// app.use(cors());

// app.post('/register',async (req,res)=>{
//    let user = new User(req.body)
//     let result = await user.save();
//     result = result.toObject();
//     delete result.password;
//     // res.send(result)
//    Jwt.sign({result},Jwtkey ,{expiresIn:'2h'},(err,token)=>{
//     if(err){
//         res.send({result:'something went wrong please try after some time'})
//     }
//     res.send({result, auth:token})
// })

// })


// app.post('/login',async (req,res)=>{
//     console.log(req.body);
//     if(req.body.password && req.body.password){
//     let user = await User.findOne(req.body).select('-password');
//     if(user){
//         Jwt.sign({user},Jwtkey ,{expiresIn:'2h'},(err,token)=>{
//             if(err){
//                 res.send({result:'something went wrong please try after some time'})
//             }
//             res.send({user,auth:token})
//         })
//     }
//     else{
//         res.send({result:'no user found'});
//     }
//  }else{
//         res.send({result:'no user found'});
//     }
    
    
// })


// app.post('/add-product',verifyToken, async (req,res)=>{
//     let  product = new Product(req.body);
//     let result = await product.save();
//     res.send(result)

// })

// app.get('/products',verifyToken,async(req,res)=>{
//    let products = await Product.find();
//    if(products.length>0){
//     res.send(products)
//    }
//    else{
//     res.send({result:"no product found"})
//    }

// })

// app.delete("/product/:id",verifyToken, async(req,res)=>{
//     const  result = await Product.deleteOne({_id:req.params.id})
//     res.send(result);
// })

// app.get('/product/:id',verifyToken, async (req,res)=>{
//     let result = await Product.findOne({_id:req.params.id})
//     if(result){
//         res.send(result)

//     }else{
//         res.send({result:'not found'})
//     }
// })

//  app.put('/product/:id',verifyToken, async(req,res)=>{
//    let result = await Product.updateOne(
//     {_id:req.params.id},
//     {
//         $set:req.body
//     }
//    )

//    res.send(result)
//  })
//   app.get('/search/:key',verifyToken,async(req,res)=>{
//     let result = await Product.find({
//         '$or':[
//             {name:{$regex:req.params.key}},
//             {price:{$regex:req.params.key}},
//             {category:{$regex:req.params.key}},
//             {company:{$regex:req.params.key}}
//         ]
//     })
//    res.send(result);
//   })


//     function verifyToken(req,res,next){
//         let token = req.headers['authentication'];
//         if(token){
//                     token = token.split(' ')[1];
//                     Jwt.verify(token,Jwtkey,(erorr,valid)=>{
//                      if(erorr){
//                         res.status(401).send({result:'please add token with header'})
//                      }else{
//                         next();
//                      } 
//                     })
//         }else{
//             res.status(403).send({result:'please add token with header'});

//         }
      
//     }

// app.listen(4500);