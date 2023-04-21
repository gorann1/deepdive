// components/common/MainLayout.tsx
import React, { PropsWithChildren } from "react";

import { Navbar } from "./Navbar";
const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default MainLayout;