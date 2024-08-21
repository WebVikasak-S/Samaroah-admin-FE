"use client";

import React, { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const registerFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Full Name",
    required: true,
    icon: "assets/email.png",
  },
  {
    name: "phone",
    type: "text",
    placeholder: "Mobile Number",
    required: true,
    icon: "assets/email.png",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
    required: true,
    icon: "assets/email.png",
  },
  {
    name: "organization",
    type: "text",
    placeholder: "Organization",
    required: true,
    icon: "assets/email.png",
  },
];

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputOtp = searchParams.get("input-otp");
  const register = searchParams.get("register");
  const [otp, setOtp] = useState(Array(6).fill(""));

  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    // Only allow single digit input
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Move focus to the next input
      if (index < length - 1 && inputs && inputs.current) {
        inputs.current[index + 1]?.focus();
      }
    }
    // Move focus to previous input on backspace
    if (value === "" && index > 0 && inputs && inputs.current) {
      inputs.current[index - 1]?.focus();
    }
  };

  const getLoginScreen = () => (
    <>
      <span className="text-4xl text-black font-extrabold ">Hello There</span>
      <span className="text-sm text-[#989898]">
        We are very happy to see you again!
      </span>
      <div className="flex items-center justify-center gap-3 w-full text-sm">
        <div className="flex items-center gap-4 bg-[#ffffffec] border border-white rounded-xl px-5 py-3 w-max">
          <img src="/assets/google.png" alt="google" className="w-5 h-5" />
          <span>Sign in with Google</span>
        </div>
        <div className="flex items-center gap-4 bg-[#ffffffe9] border border-white rounded-xl px-5 py-3 w-max">
          <img src="/assets/twitter.png" alt="twitter" className="w-5 h-5" />
          <span>Sign in with X</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 w-full text-sm">
        <div className="flex-1 border-t border-black" />
        <div className="flex-1">or continue with email</div>
        <div className="flex-1 border-t border-black" />
      </div>
      <div className="relative w-full bg-[#ffffffe9] border border-white rounded-xl">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <img
            src="/assets/email.png"
            alt="email"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
          />
        </div>
        <input
          type="email"
          id="input-email"
          className="block w-full ps-11 p-3.5 text-sm rounded-lg"
          placeholder="Email Address"
        />
      </div>
      <button
        className="bg-blue-600 flex items-center justify-center w-full p-5 text-white rounded-2xl text-lg font-black"
        onClick={() => router.push("/login2?input-otp=true")}
      >
        GET OTP
      </button>
      <div className="text-lg text-[#989898]">
        Don't have an account ?{" "}
        <span
          className="text-[#3D64FF] underline"
          onClick={() => router.push("/login2?register=true")}
        >
          Register Now
        </span>
      </div>
    </>
  );

  const getOtpScreen = () => (
    <>
      <span className="text-4xl text-black font-extrabold ">
        Verify your account
      </span>
      <span className="text-sm text-[#989898]">
        Please enter the verification code sent to your email
      </span>
      <div className="flex flex-col gap-6 w-full items-center">
        <div className="flex gap-5 w-full items-center justify-between px-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <input
              key={item}
              type="number"
              name={item.toString()}
              id="input-email"
              className="block w-[50px] h-[50px] text-sm rounded-lg"
              onChange={(e) => handleOtpChange(e, index)}
              ref={(el) => {
                if (inputs) {
                  inputs.current[index] = el;
                }
              }}
            />
          ))}
        </div>
        <div className="text-lg text-[#989898]">
          Don't Receive code?{" "}
          <span
            className="text-[#3D64FF] underline"
            onClick={() => router.push("/login2?register=true")}
          >
            Resend
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="text-lg text-[#989898] ml-auto">
          Remaining Time:{" "}
          <span
            className="text-[#3D64FF] underline"
            onClick={() => router.push("/login2?register=true")}
          >
            0:40s
          </span>
        </div>
        <button
          className="bg-blue-600 flex items-center justify-center w-full p-5 text-white rounded-2xl text-lg font-black"
          onClick={() => router.push("/login2?input-otp=true")}
        >
          GET OTP
        </button>
      </div>
    </>
  );

  const getRegisterScreen = () => (
    <>
      <span className="text-4xl text-black font-extrabold ">
        Create an account
      </span>
      <span className="text-sm text-[#989898]">
        Fill the quick steps to Sign up in SamaRoah
      </span>
      <div className="flex items-center justify-center gap-3 w-full text-sm">
        <div className="flex items-center gap-4 bg-[#ffffffec] border border-white rounded-xl px-5 py-3 w-max">
          <img src="/assets/google.png" alt="google" className="w-5 h-5" />
          <span>Sign in with Google</span>
        </div>
        <div className="flex items-center gap-4 bg-[#ffffffe9] border border-white rounded-xl px-5 py-3 w-max">
          <img src="/assets/twitter.png" alt="twitter" className="w-5 h-5" />
          <span>Sign in with X</span>
        </div>
      </div>
      {registerFields.map((field) => {
        const { name, type, placeholder, required, icon } = field;
        return (
          <div className="relative w-full bg-[#ffffffe9] border border-white rounded-xl">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <img
                src={icon}
                alt={name}
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
              />
            </div>
            <input
              className="block w-full ps-11 p-3.5 text-sm rounded-lg"
              type={type}
              name={name}
              required={required}
              id={`register-${name}`}
              placeholder={placeholder}
            />
          </div>
        );
      })}
      <div className="text-lg text-[#989898]">
        Already have an account{" "}
        <span
          className="text-[#3D64FF] underline"
          onClick={() => router.push("/login2")}
        >
          Sign in
        </span>
      </div>
    </>
  );

  const getSubScreen = () => {
    if (register) {
      return getRegisterScreen();
    } else if (inputOtp) {
      return getOtpScreen();
    } else {
      return getLoginScreen();
    }
  };

  return (
    <div className="flex md:flex-row items-center emailPassBg2 bg-cover w-screen h-screen justify-between">
      <div className="md:w-3/6 h-4/5 flex flex-col justify-between items-start bg-[#ffffffc3] border-2 border-white rounded-tr-3xl rounded-br-3xl pl-8 pr-20 py-12">
        <div className="smLogo bg-cover w-[179px] h-[44px]" />
        <div className="font-black text-6xl flex flex-col">
          <span className="text-blue-600 ">Machine.</span>
          <span className="text-black">Intelligence.</span>
          <span className="text-blue-600">Symposium.</span>
        </div>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi
          error placeat hic esse, possimus adipisci temporibus voluptates
          consequatur architecto, delectus atque magnam.
        </span>
      </div>
      <div className="md:w-2/5 h-4/5 flex flex-col justify-between py-12 items-center px-12 m-auto bg-[#edededc7] border-2 border-white rounded-3xl">
        {getSubScreen()}
      </div>
    </div>
  );
};

export default page;
