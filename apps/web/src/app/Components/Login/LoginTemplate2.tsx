"use client";
import Link from "next/link";
import React, { useState } from "react";
import EmailPassTemplateScreen1 from "../EmailPass/EmailPassTemplateScreen1";
import SignupTemplate1 from "../SignupTemplate/SignupTemplate1";
import OtpScreenTemplate1 from "../OTPScreen/OtpScreenTemplate1/OTPScreenTemplate1";

const LoginTemplate2 = () => {
  const [view, setView] = useState("login");
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between ">
      {view == "login" ? (
        <div className=" flex justify-around bg-white w-full mx-4 lg:mx-0 lg:w-1/2 p-6 lg:p-0">
          <div className=" md:w-[80%] lg:w-[70%]">
            <h2 className="text-4xl text-center lg:text-left lg:text-5xl font-bold mb-4 text-secondary">
              Welcome Back!
            </h2>
            <p className=" text-[#9D88B2] mb-4 text-lg font-normal text-center lg:text-left ">
              Please enter your email address to get OTP
            </p>
            <form className="space-y-6 my-8">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="button"
                onClick={() => setView("otp")}
                className="w-full bg-[#08E59C] text-white py-2 rounded-full hover:bg-[#00B277] transition duration-300"
              >
                <p>GET OTP</p>
              </button>
              <div className="flex items-center">
                <span className="mx-2 text-[#9D88B2]">Or Login with</span>
                <div className="flex justify-center space-x-4">
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300">
                    <img
                      src="../../../public/assets/google1.svg"
                      alt="Google"
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300">
                    <img
                      src="/apple-icon.png"
                      alt="Apple"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </div>
              <div className="border border-[#00337C] p-2 rounded-full text-center text-[#071952] mt-6">
                <p className="font-medium text-md lg:text-lg">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={() => setView("signup")}
                    className="underline font-bold"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : view == "otp" ? (
        <OtpScreenTemplate1 />
      ) : view == "emailPass" ? (
        <EmailPassTemplateScreen1 />
      ) : (
        <SignupTemplate1 />
      )}

      <div className="bg-primary lg:min-h-screen lg:ml-8 py-12 px-4 md:px-24 flex flex-col justify-center items-center text-center mx-auto lg:text-left lg:w-1/2 lg:mx-0 lg:px-16 rounded-bl-[12%] rounded-br-[12%] md:rounded-bl-[20%] md:rounded-br-[20%] lg:rounded-tl-[12%] lg:rounded-br-[0%]">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-white">
          5th Medical Conference{" "}
          <span className="text-4xl lg:text-6xl font-extrabold text-green-500">
            Health <br />& Safety{" "}
            <span className="text-white text-4xl lg:text-6xl">2024</span>
          </span>
        </h1>
        <p className="text-white mt-8 font-normal text-[21px] leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default LoginTemplate2;
