import Logo from "../assets/Logo.svg";
import Image from "../assets/Image.svg";
import { Link } from "react-router-dom";
import SignInForm from "../components/SigninForm";

const Login = () => {
  return (
    <div className="flex  items-start overflow-y-hidden">
    <div className="w-1/2 flex flex-col justify-center items-start px-10 box-border">
         <img src={Logo} alt="Logo" className="w-[200px] h-[42.5px] mb-8 mt-[50px]" />
        
         <h1 className="text-[#C5D86D] text-4xl font-semibold mb-6 text-left mt-[50px]">
           Continue your journey with QuizWiz
         </h1>
         <SignInForm />

      <p className="text-white text-xl mt-16 text-left">
        Forgot Password?{" "}
        <a href="#" className="text-[#C5D86D] underline hover:text-[#a3bc57]">
          Click here
        </a>
      </p>

      <p className="text-white text-xl mt-4 text-left">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-[#C5D86D] underline hover:text-[#a3bc57]">
          Sign up
        </Link>
      </p>
       </div>
       
         <div className="w-1/2 flex items-center justify-center my-8 overflow-hidden h-screen">
            <img
            src={Image}
            alt="Sign In Illustration"
            className="max-w-full h-full object-contain "
            />
          </div>
          
     </div>
  );
};

export default Login;