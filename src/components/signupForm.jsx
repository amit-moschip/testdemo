import { useEffect, useState } from "react";
import FormIndex from "../forms/FormIndex";
import signup from "../assets/SignInLogo.svg";
import nameIcon from "../assets/name.svg";
import emailIcon from "../assets/email.svg";
import passIcon from "../assets/pass.svg";
// import { loginAction } from "../Redux/Actions/loginAction";
import { useDispatch } from "react-redux";
import registerAction from "../Redux/Actions/signupAction";

import Button from "../reusable_components/ButtonComp";

const SignUpForm = ({ selectedRole = "student" }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    stream: "",
    email: "",
    password: "",
    year: "",
    regno: "",
    role: selectedRole,
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, role: selectedRole }));
  }, [selectedRole]);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isStudent = formData.role === "student";
  const isInstructor = formData.role === "instructor";

  const inputFields = [
    {
      name: "name",
      type: "text",
      label: "Your Name",
      placeholder: "Enter your name",
      icon: nameIcon,
      componentType: "inputBox",
      value: formData.name,
      onChange: (e) => handleChange("name", e.target.value),
      class: {
        className: "bg-[#0D1321] text-white placeholder-white border-white",
        labelClassName: "text-white text-xl",
        iconClassName: "text-white",
      },
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
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
      placeholder: "Type your password",
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
    console.log("Submitted:", formData);
  
    const mappedForm = new FormData();
    mappedForm.append("email", formData.email);
    mappedForm.append("password", formData.password);
    mappedForm.append("full_name", formData.name);
    mappedForm.append("role_name", formData.role);
    mappedForm.append("stream", formData.stream);
    mappedForm.append("year", formData.year);
    mappedForm.append("clg_reg_no", formData.regno);
  
    console.log("Mapped for backend:", mappedForm);
    dispatch(registerAction(mappedForm));
  };

  const Buttons = [
        {
            buttonName: "Sign-Up",
            buttonIcon: "",
            class: {
                Divclass: '',
                className: '',      
                textClassName: '',      
                iconClassName: ''
            },
            type:'submit',
            disabled: ""

        }
    ]

  return (
    <form className="w-full py-6 space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="block text-white text-xl mb-1">Your Stream</label>
          <div className="relative">
            <img
              src={nameIcon}
              alt="stream-icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
            />
            <input
              type="text"
              placeholder="Enter your stream"
              value={formData.stream}
              onChange={(e) => handleChange("stream", e.target.value)}
              className="w-full bg-[#0D1321] text-white placeholder-white border-white border pl-10 pr-3 py-2 rounded-md focus:outline focus:ring-2 focus:ring-slate-400"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <label className="block text-white text-xl mb-1">Academic Year</label>
          <div className="relative">
            <img
              src={passIcon}
              alt="year-icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
            />
            <input
              type="text"
              placeholder="Type your Academic Year"
              value={formData.year}
              onChange={(e) => handleChange("year", e.target.value)}
              className="w-full bg-[#0D1321] text-white placeholder-white border-white border pl-10 pr-3 py-2 rounded-md focus:outline focus:ring-2 focus:ring-slate-400"
            />
          </div>
        </div>
      </div>

      <FormIndex formList={inputFields} />

      <div className="mb-4">
        <label className="block text-white text-xl mb-2">Select Role</label>
        <select
          value={formData.role}
          onChange={(e) => handleChange("role", e.target.value)}
          className="w-full bg-[#0D1321] text-white border border-white rounded px-3 py-2 focus:outline-none"
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-white text-xl mb-2">
          {isStudent ? "Student Registration Number" : "Instructor Employee ID"}
        </label>
        <div className="relative">
          <img
            src={nameIcon}
            alt="regno-icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
          />
          <input
            type="text"
            placeholder={
              isStudent ? "Enter student reg. no" : "Enter employee ID"
            }
            value={formData.regno}
            onChange={(e) => handleChange("regno", e.target.value)}
            className="w-full bg-[#0D1321] text-white placeholder-white border-white border pl-10 pr-3 py-2 rounded-md focus:outline focus:ring-2 focus:ring-slate-400"
          />
        </div>
      </div>

      <div className="flex justify-center w-1/3">
        <Button
          buttonValue={Buttons[0]}
        />
      </div>
    </form>
  );
};

export default SignUpForm;
