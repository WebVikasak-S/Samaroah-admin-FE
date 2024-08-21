import React from "react";

const OtpScreenTemplate1 = (props: any) => {
  const { view, setView } = props;
  return (
    <div className=" flex justify-around bg-white w-full mx-4 lg:mx-0 lg:w-1/2 p-6 lg:p-0">
      <div className=" md:w-[80%] lg:w-[70%]">
        <h2 className="text-4xl text-center lg:text-left lg:text-5xl font-bold mb-4 text-secondary">
          Verify Your Account
        </h2>
        <p className=" text-[#9D88B2] mb-4 text-lg font-normal text-center lg:text-left ">
          Please enter the verification code sent to your email
        </p>
        <form className="space-y-6 my-8">
          <div className="flex justify-center w-full space-x-1 ">
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            className="w-full bg-[#08E59C] text-white py-2 rounded-full hover:bg-[#00B277] transition duration-300"
          >
            VERIFY OTP
          </button>
          <button
            type="button"
            className="w-full  border border-[#00337C] text-[#071952] font-extrabold py-2 rounded-full hover:bg-[#00B277] transition duration-300"
          >
            RESEND OTP
          </button>
          <p className="cursor-pointer" onClick={() => setView("login")}>
            Back to Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default OtpScreenTemplate1;
