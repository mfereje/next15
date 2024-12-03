import React from "react";
import Navbar from "../components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-work-sans">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
