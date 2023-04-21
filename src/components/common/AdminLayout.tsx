import React, { PropsWithChildren } from "react";

import AdminNavbar from "@/components/common/AdminNavbar/AdminNavbar";
const AdminLayout = (props: PropsWithChildren) => {
  return (
    <>
          <AdminNavbar />
      {props.children}
    </>
  );
};
export default AdminLayout;