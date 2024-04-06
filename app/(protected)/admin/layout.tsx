import React from "react";

interface AdminLayoutI {
  children: React.ReactNode;
}

const Adminlayout: React.FC<AdminLayoutI> = ({ children }) => {
  return <div className="flex h-screen overflow-hidden">{children}</div>;
};

export default Adminlayout;
