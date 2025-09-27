import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ngePOS | Sign Up",
  description: "This is NgePOS Sign Up Page",
};

export default function SignUp() {
  return <SignUpForm />;
}
