import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface SignupProps {
  handleLogin: () => void;
  handleSubmit: (event: any) => void;
}

const Signup: React.FC<SignupProps> = ({ handleLogin, handleSubmit }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleToggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <React.Fragment>
      <p className="text-sm text-gray-600 text-center ">SIGN UP</p>
      <p className="text-base text-gray-100  text-center font-semibold">
        Create an account to continue
      </p>
      <form>
        <div className="space-y-4 pt-6">
          <div>
            <label htmlFor="email" className="block text-xs text-gray-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className=" px-3 py-2 mt-1 bg-[#27292D] border border-gray-700 text-gray-100 text-sm rounded-sm block w-full p-2.5 "
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs text-gray-400">
              Username
            </label>
            <input
              id="email"
              type="email"
              placeholder="Choose a preferred username"
              className=" px-3 py-2 mt-1 bg-[#27292D] border border-gray-700 text-gray-100 text-sm rounded-sm block w-full p-2.5 "
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs text-gray-400">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Choose a strong password"
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
          Continue
        </button>
        <div className="py-3 flex">
          <p className="text-xs text-gray-500">Already have an account?</p>
          <p
            className="text-xs text-gray-100 pl-1 cursor-pointer hover:text-[#4A96FF]"
            onClick={handleLogin}
          >
            Login →
          </p>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Signup;
