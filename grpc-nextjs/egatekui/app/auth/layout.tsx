// import SideNav from '@/app/ui/dashboard/sidenav';
import React from "react";
import SignUpLeftSide from "../components/SignUpLeftSide";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
    //   <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
    //     <SignUpLeftSide />

        
    //   </div>
    // </div>
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
        {/* LEFT SIGN UP TEMPLATE */}
          <SignUpLeftSide logoSrc="/Exclude.svg" title="EgaBank" imageSrcSet="/Illustration.svg"  />
        {/* RIGHT SIGNUP TEMPLATE */}
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          {children}
        </div>

      </div>
    </div>
  );
};

export default Layout;
