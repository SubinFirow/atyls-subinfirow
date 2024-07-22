import React, { useState } from "react";
import LoginWrapper from "../layouts/loginWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

interface LoginProps {
  handleRegister: () => void;
  handleSubmit: (event: any) => void;
}

const Login: React.FC<LoginProps> = ({ handleRegister, handleSubmit }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();

  const handleToggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <React.Fragment>
      <p className="text-sm text-gray-600 text-center ">WELCOME BACK</p>
      <p className="text-base text-gray-100  text-center font-semibold">
        Log into your account
      </p>
      <form>
        <div className="space-y-4 pt-6">
          <div>
            <label htmlFor="email" className="block text-xs text-gray-400">
              Email or Username
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email or username"
              className=" px-3 py-2 mt-1 bg-[#27292D] border border-gray-700 text-gray-100 text-sm rounded-sm   block w-full p-2.5 "
            />
          </div>
          <div>
            <div className="flex justify-between">
              {" "}
              <label htmlFor="password" className="block text-xs text-gray-400">
                Password
              </label>
              <p className="text-end text-xs text-gray-400">Forgot password?</p>
            </div>
            <div className="relative">
              <input
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="px-3 py-2 mt-1 bg-[#27292D] border border-gray-700 text-gray-100 text-sm rounded-sm block w-full pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 "
                onClick={handleToggleVisibility}
              >
                {isPasswordVisible ? (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="text-gray-400"
                  />
                ) : (
                  <FontAwesomeIcon icon={faEye} className="text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 mt-6 text-white bg-[#4A96FF] rounded-sm text-sm"
          onClick={handleSubmit}
        >
          Login now
        </button>
        <div className="py-3 flex">
          <p className="text-xs text-gray-500">Not registered yet?</p>
          <p
            className="text-xs text-gray-100 pl-1 cursor-pointer hover:text-[#4A96FF]"
            onClick={handleRegister}
          >
            Register →
          </p>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
