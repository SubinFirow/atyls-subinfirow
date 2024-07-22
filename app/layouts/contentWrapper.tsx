import React, { ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div className="w-full bg-[#191920] rounded-lg flex items-center p-4 space-x-4">
      {children}
    </div>
  );
};

export default ContentWrapper;
