import React from "react";
import EmailIcon from "/emailIcon.svg";
import Link from "next/link";
const LoginTemplate3 = () => {
  return (
    <div className="w-full h-screen login3BG bg-cover flex justify-center items-center">
      <div className="w-[90%] md:w-[50%] xl:w-[30%] h-[80%] border-2 border-gray-400 flex justify-center items-center rounded-3xl bg-[linear-gradient(164.72deg,rgba(255,255,255,0)_6.23%,#065AD8_66.54%)] py-4">
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <p className=" text-white text-2xl md:text-4xl font-bold my-4">
            Hello There!
          </p>
          <p className="text-white text-lg font-normal mt-4">
            Enter Your Credential to login into your Account
          </p>
          <div className="flex items-center w-full max-w-md bg-transparent border border-white rounded-xl p-3 mb-4 mt-10">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="#fff"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="css-i6dzq1"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input
              type="email"
              placeholder="Email Address"
              className="ml-3 bg-transparent outline-none text-white placeholder-white w-full"
            />
          </div>
          <button className="bg-white w-full rounded-2xl !h-12">
            <Link href="/OTP">Get OTP</Link>
          </button>
          <p className="text-white mt-4 font-medium text-lg">Or Login With</p>
          <div className="flex items-center justify-center mt-4">
            <div className="h-2 flex-1 border-t border-white"></div>
            <div className="flex space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="70"
                  height="70"
                  viewBox="0,0,256,256"
                  className="p-2"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    // style={{mix-blend-mode: "normal"}}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M25.99609,48c-12.68359,0 -23.00391,-10.31641 -23.00391,-23c0,-12.68359 10.32031,-23 23.00391,-23c5.74609,0 11.24609,2.12891 15.49219,5.99609l0.77344,0.70703l-7.58594,7.58594l-0.70312,-0.60156c-2.22656,-1.90625 -5.05859,-2.95703 -7.97656,-2.95703c-6.76562,0 -12.27344,5.50391 -12.27344,12.26953c0,6.76563 5.50781,12.26953 12.27344,12.26953c4.87891,0 8.73438,-2.49219 10.55078,-6.73828h-11.55078v-10.35547l22.55078,0.03125l0.16797,0.79297c1.17578,5.58203 0.23438,13.79297 -4.53125,19.66797c-3.94531,4.86328 -9.72656,7.33203 -17.1875,7.33203z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="70"
                  height="70"
                  viewBox="0,0,256,256"
                  className="p-2"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    // style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex-1 border-t border-white"></div>
          </div>
          <p className="font-medium text-white mt-8">
            Don't have an account{" "}
            <span className="underline">Register Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate3;
