import {resend} from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { success } from "zod";


export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
  from: 'you@example.com',
  to: email,
  subject: 'Anonyoum message Verification code',
  react: VerificationEmail({username , otp: verifyCode}),
});
        return {success: true , message: "Verification email send successfully"}
    } catch (emailError) {
        console.error("Error sending in verification code" , emailError)
        return {success: false , message: " Failed to send verification email"}
    }
}