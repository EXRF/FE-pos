import { ISignUpForm } from "@/types/auth/signup";
import { useCallback, useState } from "react";
import { toast } from "sonner";



export const useSignUp = () => {
   const [payload, setPayload] = useState<ISignUpForm>({
    email: "",
    username: "",
    password: "",
  });

  const handleSignUp = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { isValid, errors } = validateForm();

    if (!isValid) {
      toast.error(errors.join(", "));
      return;
    }

    /// TODO: handle sign up with endpoint below


    ///
    toast.success("Sign Up Success!");
  }, [payload]);

  function validateForm(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (payload.username.trim() === "") {
        errors.push("Username kosong");
    } else if (payload.username.length < 3) {
        errors.push("Username minimal 3 karakter");
    }

    if (payload.password.trim() === "") {
        errors.push("Password kosong");
    } else if (payload.password.length < 6) {
        errors.push("Password minimal 6 karakter");
    }

    if (payload.email.trim() === "") {
        errors.push("Email kosong");
    } else if (!payload.email.includes("@")) {
        errors.push("Email tidak valid");
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
  }

  return { payload, setPayload, handleSignUp };
}

function useForm<T>(arg0: { mode: string; }): { register: any; handleSubmit: any; formState: { errors: any; isValid: any; }; trigger: any; } {
    throw new Error("Function not implemented.");
}
