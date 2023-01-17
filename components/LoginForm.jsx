import React, { useState,  } from "react";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setuserMobile] = useState("");

  const [showRegister, setShowRegister] = useState(true);


  const formSub = function (e) {
    e.preventDefault();
    setEmail("")
    setPassword("")
    setUserName("")
    setLastName("")
    setuserMobile("")
    alert('Form Submitted Successfully')
  };

  return (
    <>
      <div className="h-fit w-[440px] p-3 px-8 pt-6 shadow-md  shadow-green-500 ">
        <div>
          <img src="/logo.png" className="w-[180px]" />
        </div>
        <div className="my-2 leading-6">
          <h1 className="text-white	">
            {(showRegister && "Register Now") || "Login "}
          </h1>
          <label className="text-[#9f9f9f] text-[12px]">
            {(showRegister && "Register now ") ||
              "Welcome back! Please sign in to continue."}
          </label>
        </div>
        <div className="mt-[10px]">
          <form onSubmit={formSub}>
            {showRegister && (
              <>
                <label className="text-[#9f9f9f]">First Name</label>
                <br />
                <input
                  placeholder="Enter your name"
                  type="text"
                  className="w-[100%] mt-2 p-2 outline:none  rounded-md bg-black text-white password"
                  value={userName}
                  required={true}
                  onChange={(e) => setUserName(e.target.value)}
                  pattern="[a-zA-Z]*$"
                  minlength={4} maxlength={10}
                />
              </>
            )}

            <label className="text-[#9f9f9f] pt-2 pb-2">Last Name</label>
            <br />

            <input
              className="w-[100%] mt-2 p-2 outline:none rounded-md bg-black text-white "
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your Last Name"
              pattern="[a-zA-Z]*$"
              required={true}
              minlength={4}
              maxLength={16}
            />
            {/* {error &&
             <p className="text-red-500 text-[12px] font-semibold">Please enter a valid email address</p> }
             */}
            <br />

            <label className="text-[#9f9f9f]">Your Email</label>
                <br />
                <input
                  placeholder="Enter your email"
                  type="email"
                  className="w-[100%] mt-2 p-2 outline:none  rounded-md bg-black text-white password"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                  pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                />

            {showRegister && (
              <>
                <label className="text-[#9f9f9f]">Phone No</label>
                <br />
                <input
                  placeholder="Enter your mobile"
                  type="tel"
                  className="w-[100%] mt-2 p-2 outline:none  rounded-md bg-black text-white password"
                  value={mobile}
                  onChange={(e) => setuserMobile(e.target.value)}
                  required={true}
                  minLength={10}
                  maxLength={10}
                />
              </>
            )}

            <label className="text-[#9f9f9f]">Password</label>
            <br />
            <input
              placeholder="Enter your password"
              type="password"
              id="password"
              name="password"
              className="w-[100%] mt-2 p-2 outline:none  rounded-md bg-black text-white password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              maxLength={16}
            />

            
            {/* {error &&           
            <p className="text-red-500 text-[12px] my-1 font-semibold">Please enter correct password</p>
              } */}

            <br />
            <p className="text-[12px] cursor-pointer mt-3  flex justify-end text-[#1de9b6] my-1 font-semibold">
              Forget password?
            </p>
            <div className="m-auto w-fit  flex justify-center my-1">
              <button
                className=" mt-2 bg-[#1de9b6] outline-none cursor-pointer w-[100%] p-2 rounded-md test-center"
                type="submit"
              >
                {(showRegister && "Register now") || "Sign In"}
              </button>
            </div>
            <p className="text-[#9f9f9f] mt-6 text-center text-[13px] font-semibold">
              {(showRegister && " ") || "Dont have Account?"}
              {(!showRegister && (
                <span
                  className="text-[#1de9b6] ml-1 cursor-pointer"
                >
                  Create a Account
                </span>
              )) || (
                <span
                  className="text-[#1de9b6] ml-1   cursor-pointer"

                >
                  Sign In
                </span>
              )}
            </p>
            <br />
          </form>
        </div>
      </div>
    </>
  );
}
