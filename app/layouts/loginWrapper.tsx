import React, { ReactNode } from "react";

type LoginWrapperProps = {
  children: ReactNode;
};

const LoginWrapper = ({ children }: LoginWrapperProps) => {
  return (
    <div className="border-[0.5px] md:w-full max-w-md bg-gradient-to-r from-[#969696]  to-[#27292D] rounded-lg">
      <div className="p-6 space-y-2 bg-[#27292D] rounded-lg border-2 border-transparent bg-clip-border">
        {children}
      </div>
    </div>
  );
};

export default LoginWrapper;
