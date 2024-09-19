import React, { useState } from "react";
import image from "./image.png";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Field is required.";
    }

    if (!username.trim()) {
      newErrors.username = "Field is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Field is required.";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobile.trim()) {
      newErrors.mobile = "Field is required.";
    } else if (!mobilePattern.test(mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }

    if (!isChecked) {
      newErrors.checkbox = "Check this box if you want to proceed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      localStorage.setItem("username", username);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("mobile", mobile);
    }
  };

  return (
    <div className="flex flex-col items-center bg-black w-2/3">
      <div className="flex flex-col items-center">
        <img src={image} className="w-[239px] mt-[60px]" />
        <p className="font-normal text-2xl text-white font-dmsans my-[25px]">
          Create your new account
        </p>
      </div>

      <form
        className="flex flex-col items-center justify-start"
        onSubmit={handleSubmit}
      >
        <div className="w-[500px]">
          <input
            id="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="bg-[#292929] w-full h-[65px] py-4 pl-3 mb-[10px] text-xl text-white placeholder-[#7C7C7C] rounded-sm"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="w-[500px]">
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="bg-[#292929] w-full h-[65px] py-4 pl-3 mb-[10px] text-xl text-white placeholder-[#7C7C7C] rounded-sm"
            placeholder="Username"
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>
        <div className="w-[500px]">
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="bg-[#292929] w-full h-[65px] py-4 pl-3 mb-[10px] text-xl text-white placeholder-[#7C7C7C] rounded-sm"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="w-[500px]">
          <input
            id="mobile"
            onChange={(e) => setMobile(e.target.value)}
            type="text"
            className="bg-[#292929] w-full h-[65px] py-4 pl-3 mb-[10px] text-xl text-white placeholder-[#7C7C7C] rounded-sm"
            placeholder="Mobile Number"
          />
          {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
        </div>
        <div className="flex flex-row justify-start items-center w-[500px]">
          <input
            id="terms"
            type="checkbox"
            className="size-[18px] mr-2"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <p className="text-xl text-[#7C7C7C]">
            Share my registration data with Superapp
          </p>
        </div>
        {errors.checkbox && <p className="text-red-500">{errors.checkbox}</p>}
        <button
          type="submit"
          className="w-[500px] bg-[#72DB73] text-3xl font-semibold active:bg-green-600 text-white rounded-full py-[7px] mt-[30px]"
        >
          SIGN UP
        </button>
        <div className="w-[500px]">
          <p className="text-lg font-medium text-white">
            By clicking on Sign up, you agree to Superapp's{" "}
            <span className="text-[#72DB73]">Terms and Conditions of Use</span>
          </p>
          <p className="text-lg font-medium text-white">
            To learn more about how Superapp collects, uses, shares, and
            protects your personal data, please head to Superapp's
            <span className="text-[#72DB73]">Privacy Policy</span>
          </p>
        </div>
      </form>
    </div>
  );
}
