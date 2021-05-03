var express = require('express');
var app = express()
const {User} = require("./model/User");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./db.js");
db();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.send({greeting: 'Hello React x Node.js'});
});

app.post('/api/users/register',(req,res) =>{
    const user = new User(req.body);
    user.save((err,userInfo)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        });
    });
   });
   
app.post('/api/users/login', (req, res) => {

    //요청된 이메일을 데이터베이스 있는지 찾는다.
    User.findOne({email:req.body.email},(err,user)=>{
        if(!user){
            return res.json({
                loginSuccess: "fail",
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
            if(err)return res.status(400).send(err);

            //토큰을 저장한다. 쿠키 or 로컬스토리지
            res.cookie("x-auth",user.token)
            .status(200)
            .json({loginSuccess:true,userId:user._id})
        })
    })
})
   
const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))