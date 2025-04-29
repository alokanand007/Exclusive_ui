import React, { useState } from "react";
import Ui_img from ".././Assets/Ui_img.png";
import { Link } from "react-router-dom";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  //  jis jis feild me kuch bhi type hua hai wo isske through setFormData me save ho jaega
  // or prev isliye use kiya hai taki agar user koi bhi field empty chodega toh previus(empty string feild) save ho jaega
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      name: "",
      email: "",
      password: "",
    };

    if (!/^[a-zA-Z]+$/.test(formData.name)) {
      newErrors.name = "Only alphabets are allowed";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === "");
    if (isValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="grid grid-cols-5 mt-8">
      <div className="col-span-3 ">
        <img
          src={Ui_img}
          alt="UI preview"
          className="w-full h-5/6 object-cover"
        />
      </div>

      <div className=" col-span-2 pt-12 px-20">
        <p className="text-2xl mb-4 font-bold">Create an account</p>

        {/* Name Field */}
        <p
          className={`text-sm h-5 mt-1 ${
            errors.name ? "text-red-500" : "text-transparent"
          }`}
        >
          {errors.name || "placeholder"}
        </p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-2 p-1 outline-none border-b-2 border-gray-400 focus:border-black"
        />

        {/* Email Field */}
        <p
          className={`text-sm h-5 mt-1 ${
            errors.email ? "text-red-500" : "text-transparent"
          }`}
        >
          {errors.email || "placeholder"}
        </p>
        <input
          type="text"
          name="email"
          placeholder="Email or Phone Number"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-1 mb-2 outline-none border-b-2 border-gray-400 focus:border-black"
        />

        {/* Password Field */}
        <p
          className={`text-sm h-5 mt-1 ${
            errors.password ? "text-red-500" : "text-transparent"
          }`}
        >
          {errors.password || "placeholder"}
        </p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-1 mb-2 outline-none border-b-2 border-gray-400 focus:border-black"
        />

        <button
          className="bg-red-500 p-2 mt-8 text-white w-full rounded-md hover:bg-red-600 transition duration-300"
          onClick={handleSubmit}
        >
          Create Account
        </button>

        <button className="bg-white p-2 mt-4 text-black w-full border-2 rounded-md hover:bg-neutral-100 transition duration-300 border-gray-400">
          Sign up with Google
        </button>

        <div className="flex justify-center mt-8 ">
          Already have an account?{" "}
          <div className="pl-2">
            <Link
              className="hover:text-blue-500 hover:underline transition-all duration-500 ease-in-out"
              to="signin"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
