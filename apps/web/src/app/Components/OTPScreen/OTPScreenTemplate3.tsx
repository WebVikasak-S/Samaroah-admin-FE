import React from "react";

const OTPScreenTemplate3 = () => {
  return (
    <div className="w-full h-screen login3BG bg-cover flex justify-center items-center">
      <div className="w-[90%] md:w-[50%] xl:w-[30%] h-[80%] border-2 border-gray-400 flex justify-center items-center rounded-3xl bg-[linear-gradient(164.72deg,rgba(255,255,255,0)_6.23%,#065AD8_66.54%)] py-4">
        <div className="flex flex-col items-center justify-center h-full text-center px-4 min-w-fit">
          <p className=" text-white text-2xl md:text-4xl font-bold my-4">
            Verify your Account
          </p>
          <p className="text-white text-md md:text-lg font-normal mt-4 px-6 md:px-0">
            Please enter the verification code sent to your email
          </p>
          <div className="my-6">
            <p className="text-white">01:20</p>
          </div>
          <div className="flex justify-center w-full space-x-2 mb-4 mt-8 ">
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 text-center border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 text-center border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 text-center border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 text-center border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 text-center border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 text-center border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="font-medium text-white mt-8 mb-4">
            Didn't receive OTP? <span className="underline">RESEND</span>
          </p>
          <button className="bg-white w-full rounded-2xl h-12 my-4">
            VERIFY OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPScreenTemplate3;
