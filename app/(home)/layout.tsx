import React, { Suspense } from "react";
import AppBar from "@/components/appbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <div className="relative flex flex-col items-start lg:items-center justify-start min-h-screen w-full">
        <div className="flex flex-col lg:flex-row items-end lg:items-start mr-auto ml-auto gap-y-1 max-w-4xl w-full z-10">
          <AppBar />
          {children }
        </div>
      </div>
    </Suspense>
  );
};

export default HomeLayout;
