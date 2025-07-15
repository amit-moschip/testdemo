import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Image from "../assets/Image.svg";
import { useNavigate } from 'react-router-dom';

import SignUpForm from "../components/signupForm";
import SignInForm from "../components/SigninForm";
import CardGrid from "../components/cardgrid";

const SignUp = () => {
  // const [mode, setMode] = useState(null); 
  const [mode, setMode] = useState("signup");
  const navigate = useNavigate();

  const handleCardSelect = (role) => {
    if (role === "signup") {
      navigate("/signup");
    } else if (role === "instructor") {
      navigate("/signin/instructor");
    } else if (role === "student") {
      navigate("/signin/student");
    }
  };
  
  return (
    <div className="flex min-h-screen overflow-y-scroll hide-scrollbar">
      <div className="w-1/2 flex flex-col justify-start items-start px-10 pt-[50px]">
        <img src={Logo} alt="QuizWiz Logo" className="w-[200px] h-[42.5px]" />

        <h1 className="text-[#C5D86D] text-4xl font-semibold mt-[50px] mb-6 text-left">
          Create an account and start using QuizWiz..!!!
        </h1>

        {/* <CardGrid selected={mode} onCardSelect={(role) => setMode(role)} /> */}
        <CardGrid onCardSelect={handleCardSelect} />

        {mode === "signup" && <SignUpForm selectedRole={"student"} />} 
        {(mode === "student" || mode === "instructor") && <SignInForm selectedRole={mode} />}

        {mode && (
          <p className="text-white mt-4">
            {mode === "signup" ? "Already have an account?" : "Don't have an account?"}{""}
            <span
              className="text-[#C5D86D] underline cursor-pointer"
              onClick={() => setMode(mode === "signup" ? "student" : "signup")}
            >
              {mode === "signup" ? "Log In" : "Sign Up"}
            </span>
          </p>
        )}
      </div>

      <div className="fixed right-0 w-1/2 h-screen flex items-center justify-center my-8">
        <img
          src={Image}
          alt="Sign Up Illustration"
          className="max-w-full object-contain h-full"
        />
      </div>
    </div>
  );
};

export default SignUp;
