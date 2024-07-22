"use client";

import Login from "./components/login";
import Image from "next/image";
import React, { useState } from "react";
import LoginWrapper from "./layouts/loginWrapper";
import { Mode } from "./helpers/login-helper";
import Signup from "./components/signup";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(Mode.LOGIN);

  const handleRegister = () => {
    setActiveItem(Mode.SIGNUP);
  };

  const handleLogin = () => {
    setActiveItem(Mode.LOGIN);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push("/feed");
  };

  return (
    <React.Fragment>
      <div className="flex justify-center items-center pb-8">
        <Image
          src="/Logo.png"
          alt="Example Image"
          width={40}
          height={500}
          className="rounded-md"
        />
      </div>
      <LoginWrapper>
        {activeItem === Mode.SIGNUP && (
          <Signup handleLogin={handleLogin} handleSubmit={handleSubmit} />
        )}
        {activeItem === Mode.LOGIN && (
          <Login handleRegister={handleRegister} handleSubmit={handleSubmit} />
        )}
      </LoginWrapper>
    </React.Fragment>
  );
}
