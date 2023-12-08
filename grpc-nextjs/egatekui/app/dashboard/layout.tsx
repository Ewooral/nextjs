// import SideNav from '@/app/ui/dashboard/sidenav';
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
            <div className="flex-none w-full bg-blue-600 md:w-64">
                {/*<SideNav />*/}
                <div className="">Sidebar</div>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}

export default Layout