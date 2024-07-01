import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full ">
      <div className="h-screen flex flex-col items-center justify-center py-12 gap-10">
        <img
          src="https://cdn.vectorstock.com/i/500p/77/94/your-logo-here-placeholder-symbol-vector-25817794.jpg"
          width={60}
          height={60}
          alt="your logo"
        />
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
