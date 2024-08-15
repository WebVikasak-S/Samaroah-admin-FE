import React from "react";

const EmailPassTemplateScreen2 = () => {
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
        <span className="text-4xl text-black font-extrabold ">Hello There</span>
        <span className="text-sm text-[#989898]">
          We are very happy to see you again!
        </span>
        <div className="flex items-center justify-center gap-3 w-full text-sm">
          <div className="flex items-center gap-4 bg-[#ffffffec] border border-white rounded-xl px-5 py-3 w-2/5">
            <img src="/assets/google.png" alt="google" className="w-5 h-5" />
            <span>Sign in with Google</span>
          </div>
          <div className="flex items-center gap-4 bg-[#ffffffe9] border border-white rounded-xl px-5 py-3 w-2/5">
            <img src="/assets/twitter.png" alt="twitter" className="w-5 h-5" />
            <span>Sign in with X</span>
          </div>
        </div>

        <div className="relative w-full ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="email"
            id="input-email"
            className="block w-full ps-10 p-2.5 border text-sm rounded-lg"
            placeholder="Email Address"
          />
        </div>
        <button className="bg-blue-600 flex items-center justify-center w-full p-5 text-white rounded-2xl text-lg font-black">
          GET OTP
        </button>
        <div className="text-lg text-[#989898]">
          Don't have an account ?{" "}
          <span className="text-[#3D64FF]">Register Now</span>
        </div>
      </div>
    </div>
  );
};

export default EmailPassTemplateScreen2;
