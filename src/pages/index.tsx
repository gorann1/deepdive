import React from "react";

import { MyPage } from "@/components/common/types";
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
const HomePage: MyPage = () => {
  return (
    <>
          {/* <Seo templateTitle='Home' /> */}
    <Seo />
    <Header />
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">
            Welcome to NextJS Multiple Layouts Tutorial
          </h1>
        </div>
      </div>
    </div>
    </>
  );
};
export default HomePage;
HomePage.Layout = "Main";
// HomePage.Layout = "OtherLayout"; -> error Type '"OtherLayout"' is not assignable to type '"Main" | "Admin" | undefined'.