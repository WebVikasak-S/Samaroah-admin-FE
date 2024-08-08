import React from "react";

const OtpScreenTemplate2 = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between ">
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
          </form>
        </div>
      </div>
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

export default OtpScreenTemplate2;
