import React, { ReactNode } from "react";

type PostWrapperProps = {
  children: ReactNode;
};

const PostWrapper = ({ children }: PostWrapperProps) => {
  return (
    <div className="w-full bg-[#35373B] rounded-lg border-[2px] border-[#4B4D51] p-4 space-y-4">
      {children}
    </div>
  );
};

export default PostWrapper;
