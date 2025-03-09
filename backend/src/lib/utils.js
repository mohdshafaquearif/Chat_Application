import jwt from "jsonwebtoken";
// Genrating a jwt token
export const generateToken=(userId,res)=>{
const token=jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:"7d"//7 days
})
// Sending jwt token in a cookie
res.cookie("jwt",token,{
    maxAge:7*24*60*60*1000,// in MS(7days)
    httpOnly:true,//prevent XSS attacks cross-site scripting attacks
    sameSite:"strict",//CSRF attacks cross-site request forgery attacks
    secure:process.env.NODE_ENV!=="development"
})
return token;
}

