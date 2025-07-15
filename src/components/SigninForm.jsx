import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignInlogo from "../assets/SignInLogo.svg";
import emailIcon from "../assets/email.svg";
import passIcon from "../assets/pass.svg";
import FormIndex from "../forms/FormIndex";
import Button from "../reusable_components/ButtonComp";

import {
  selectLoading,
  selectError,
  selectMessage,
} from "../Redux/Selector/authSelector";
import loginAction from "../Redux/Actions/loginAction";

const SignInForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const message = useSelector(selectMessage);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputFields = [
    {
      name: "email",
      type: "text",
      label: "Registered Email address",
      placeholder: "Enter your email",
      icon: emailIcon,
      componentType: "inputBox",
      value: formData.email,
      onChange: (e) => handleChange("email", e.target.value),
      class: {
        className: "bg-[#0D1321] text-white placeholder-white border-white",
        labelClassName: "text-white text-xl",
        iconClassName: "text-white",
      },
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      icon: passIcon,
      componentType: "inputBox",
      value: formData.password,
      onChange: (e) => handleChange("password", e.target.value),
      class: {
        className: "bg-[#0D1321] text-white placeholder-white border-white",
        labelClassName: "text-white text-xl",
        iconClassName: "text-white",
      },
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const form = new FormData(); // ✅ Use FormData to match FastAPI
    form.append("email", formData.email);
    form.append("password", formData.password);
  
    console.log("FormData values:", Object.fromEntries(form.entries()));
  
    dispatch(loginAction(form)); // ✅ send FormData, not JSON
  };

  const Buttons = [
        {
            buttonName: "Sign In",
            buttonIcon: "",
            class: {
                Divclass: "bg-black w-16 text-white p-2 m-2 fixed left-4 bottom-4",
                className: "bg-black w-16 text-black p-2 m-2 fixed left-4 bottom-4",      
                textClassName: 'text-black',      
                iconClassName: ''
            },
            type:'submit',
            disabled: ""

        }
    ]
  
  return (
    <form className="w-full py-6 space-y-6" onSubmit={handleSubmit}>
      <FormIndex formList={inputFields} />

      {error && <p className="text-red-500 text-center">{error}</p>}
      {message && <p className="text-green-500 text-center">{message}</p>}

      <div className="flex justify-center w-1/3">
        <Button
          buttonValue={Buttons[0]}
        />
      </div>
    </form>
  );
};

export default SignInForm;
