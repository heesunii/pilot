const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
const mongoose = require('mongoose')
const {User} = require("./model/User");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
mongoose.connect( 'mongodb+srv://spectra:artceps@cluster0.row7g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err));
app.use(cors())
app.use('/api', api);



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/', function(req, res) {

    res.send({greeting: 'Hello React x Node.js'});
});

app.post('/register',(req,res) =>{
 const user = new User(req.body);
 user.save((err,userInfo)=>{
     if(err) return res.json({success:false,err})
     return res.status(200).json({
         success:true
     });
 });
});

app.post('/login',(req,res)=>{
    //요청된 이메일을 데이터베이스 있는지 찾는다.
    User.findOne({email:req.body.email},(err,user)=>{
        if(!user){
            return res.json({
                loginSuccess: fail,
                message:"제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        //요청된 이메일이 데이터베이스에 있다면, 비밀번호를 확인한다.
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch)
            return res.json({loginSuccess:false,message:'비밀번호가 틀렸습니다.'})
        })
        //비밀번호 확인되면, 토큰을 생성한다.
        user.generateToken((err,user)=>{
            if(err)return res.satatus(400).send(err);

            //토큰을 저장한다. 쿠키 or 로컬스토리지
            res.cookie("x-auth",user.token)
            .status(200)
            .json({loginSuccess:true,userId:user._id})
        })
    })
})

const port = 3002;
app.listen(port, ()=>console.log('Listening on port ${port}'));
