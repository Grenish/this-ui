"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AuthForm1() {
  const [seePassword, setSeePassword] = useState(false);

  const handleSeePassword = () => {
    setSeePassword(!seePassword);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#b1ac7034] w-full">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="flex flex-col w-full max-w-md p-2 mb-2 ">
          <Image
            src="/logoipsum-289.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-1/3 mb-2 mx-auto"
          />
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <p className="text-sm text-center">Let's get you started</p>
        </div>

        <form action="" method="post" className="flex flex-col w-full max-w-md">
          <div className="border-2 border-gray-600 flex items-center justify-between p-2 rounded-xl">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="outline-none w-full bg-transparent"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
            </svg>
          </div>

          <div className="border-2 border-gray-600 flex items-center justify-between p-2 rounded-xl mt-2">
            <input
              type={seePassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="outline-none w-full bg-transparent"
              required
            />
            <button type="button" onClick={handleSeePassword}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d={
                    seePassword
                      ? "M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Z"
                      : "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"
                  }
                />
              </svg>
            </button>
          </div>

          <button
            type="submit"
            className="bg-[#ccd8e5] hover:bg-[#98a4c3] transition-colors mt-2 p-2 rounded-xl"
          >
            Login
          </button>

          <div className="flex flex-col md:flex-row items-center mt-2 gap-2">
            <button className="bg-[#9c9cbc] hover:bg-[#868eb1] transition-colors p-2 rounded-xl w-full">
              Forget Password
            </button>
            <Link href="/onboarding/signup" className="w-full">
              <button className="bg-[#cdcdde] hover:bg-[#bacddf] transition-colors p-2 rounded-xl w-full">
                Signup
              </button>
            </Link>
          </div>

          <span className="flex items-center w-full p-2">
            <hr className="flex-grow border-gray-400" />
            <p className="mx-2">Or</p>
            <hr className="flex-grow border-gray-400" />
          </span>

          <button className="bg-indigo-500 rounded-xl p-2 flex items-center justify-center gap-5 text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              width="22"
              height="22"
              fill="currentColor"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            Login with Google
          </button>
          <button className="bg-black rounded-xl p-2 flex items-center justify-center gap-5 text-gray-200 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
            </svg>
            Login with GitHub
          </button>
        </form>
      </div>

      <div className="hidden md:block md:w-1/2 p-2">
        <Image
          src="https://images.unsplash.com/photo-1525426846044-691f3a72e3b9?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welcome Back"
          width={500}
          height={500}
          className="pointer-events-none object-cover w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
}
