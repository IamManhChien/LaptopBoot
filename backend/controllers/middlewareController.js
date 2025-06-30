import jwt from "jsonwebtoken";
const middlewareController = {
    verifiedToken: (req,res,next)=>{
        const token = req.headers.authorization;
        if(token){
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken,process.env.JWT_ACCESS_KEY,(err,user)=>{
                if(err){
                    res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            }); 
        }else{
            res.status(401).json("You're not authenticated")
        }
    },
    verifyTokenAndAdminAuth:(req,res,next)=>{
        middlewareController.verifiedToken(req,res,()=>{
            
        });
    }
}
export default middlewareController;