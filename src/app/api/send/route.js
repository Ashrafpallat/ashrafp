import { NextResponse } from "next/server";
import { Resend } from "resend";
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      // from: myEmail,
      from: 'Acme <onboarding@resend.dev>',
      to: [myEmail],
      subject: `${email}: ${subject}`,
      text: message,
      // react: (
      //   <>
      //     <h1>{subject}</h1>
          
      //     <p>{message}</p>
      //   </>
      // ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}