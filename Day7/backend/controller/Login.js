import { User } from "../model/admin.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export  const login = async (req, res) =>{
    
    try{
        const {email,password} = req.body;

        if(!email || !password) {
            return res.status(400).json({message: "Email and password are required!"})

        }
        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).json({message: "Invalid credentials"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid credentials"})
        }

        const token = jwt.sign(
            {id:user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: '7d'}
        );

        res.json({
            message: "Login successful",
            token,
            user:{
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
        
        });
    }
    catch(error){
        res.status(500).json({message : "server Error", error: error.message})
    }
}
export default login;