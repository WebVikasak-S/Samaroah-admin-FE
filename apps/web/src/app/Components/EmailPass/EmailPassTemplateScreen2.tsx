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
        <button className="bg-blue-600 flex items-center justify-center w-full p-5 text-white rounded-2xl text-lg font-black">
          GET OTP
        </button>
        <div className="text-lg text-[#989898]">
          Don't have an account ?{" "}
          <span className="text-[#3D64FF] underline">Register Now</span>
        </div>
      </div>
    </div>
  );
};

export default EmailPassTemplateScreen2;
