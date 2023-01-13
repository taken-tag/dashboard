import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setuserMobile] = useState("");

  const [showRegister, setShowRegister] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  //   let loginID = localStorage.getItem("loginID");
  //   if (!loginID) {
  //    return;
  //   }
  // });

  console.log(email, password, confirmPassword, userName, mobile, "fasdas");
  function validationCheck(checkfor) {
    if (checkfor === "register") {
      if (!(email && password && confirmPassword && userName && mobile)) {
        console.log('field shouldn"t be empty');
        return false;
      }
      if (password !== confirmPassword) {
        return false;
      }
    }

    if (checkfor === "login") {
      if (!email && !password) {
        console.log('field shouldn"t be empty');
        return false;
      }
    }

    return true;
  }

  const formSub = async function (e) {
    e.preventDefault();
    let registerApi = "https://api.verifyapi.in/api/register";
    let LoginApi = "https://api.verifyapi.in/api/login";
    let validationresponse = validationCheck(
      (showRegister && "register") || "login"
    );
    console.log(validationresponse, "validation response");
    if (!validationresponse) {
      return;
    }

    const headers = { "Content-Type": "application/json" };
    const res = await fetch((showRegister && registerApi) || LoginApi, {
      method: "POST",
      body: JSON.stringify(
        (showRegister && {
          name: userName,
          email: email,
          mobile: mobile,
          password: password,
          password_confirmation: confirmPassword,
        }) || {
          email: email,
          password: password,
        }
      ),
      headers,
    });
    setEmail("");
    setPassword("");
    const result = await res.json();

    await localStorage.setItem("userData", JSON.stringify(result));
    router.push("/dashboard")
  };

  return (
    <>
      <div className="h-fit w-[340px] p-3 px-8 pt-6 shadow-md  shadow-green-500 translate-x-[-60px]">
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
          <form>
            {showRegister && (
              <>
                <label className="text-[#9f9f9f]">Name</label>
                <br />
                <input
                  placeholder="Enter your name"
                  type="text"
                  id="password"
                  className="w-[100%] mt-2 p-2 outline:none  rounded-md bg-black text-white password"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </>
            )}

            <label className="text-[#9f9f9f] pt-2 pb-2">Email address</label>
            <br />

            <input
              className="w-[100%] mt-2 p-2 outline:none rounded-md bg-black text-white "
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
            {/* {error &&
             <p className="text-red-500 text-[12px] font-semibold">Please enter a valid email address</p> }
             */}
            <br />

            {showRegister && (
              <>
                <label className="text-[#9f9f9f]">Mobile</label>
                <br />
                <input
                  placeholder="Enter your mobile"
                  type="mobile"
                  id="password"
                  className="w-[100%] mt-2 p-2 outline:none  rounded-md bg-black text-white password"
                  value={mobile}
                  onChange={(e) => setuserMobile(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />

            {showRegister && (
              <>
                <label className="text-[#9f9f9f]">Confirm Password</label>
                <br />
                <input
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                  name="password"
                  className="w-[100%] mt-2 p-2 outline:none  rounded-md bg-black text-white password"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </>
            )}
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
                onClick={formSub}
              >
                {(showRegister && "Register now") || "Sign In"}
              </button>
            </div>
            <p className="text-[#9f9f9f] mt-6 text-center text-[13px] font-semibold">
              {(showRegister && " ") || "Dont have Account?"}
              {(!showRegister && (
                <span
                  className="text-[#1de9b6] ml-1 cursor-pointer"
                  onClick={() => setShowRegister(true)}
                >
                  Create a Account
                </span>
              )) || (
                <span
                  className="text-[#1de9b6] ml-1   cursor-pointer"
                  onClick={() => setShowRegister(false)}
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
