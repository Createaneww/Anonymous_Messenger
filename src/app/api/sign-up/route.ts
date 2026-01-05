import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail} from "@/helpers/sendVerfificationEmail";
import { success } from "zod";



export async function POST(request: Request){
    await dbConnect()

    try {
        const {username , email , password} = await request.json()

        const ExistingUserVerifiedByUsername = await UserModel.findOne({
            username,
            isVerified:true
        })

        if(ExistingUserVerifiedByUsername){
            return Response.json({
                success: false,
                message: "Username already taken"
            } , {
                status: 400
            })
        }
        const ExistingUserByEmail = await UserModel.findOne({email})

        if(ExistingUserByEmail){
            true //TODO right here
        }else{
            const hashpassword = 
        }

    } catch (error) {
        console.error("Error registering user" , error)
        return Response.json({
            success: false,
            message: "Error registering user"
        },
        {
            status: 500
        }
    )
    }
}