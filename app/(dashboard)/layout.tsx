import React, { ReactNode } from "react";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <DashboardNavbar />
      <div>{children}</div>
    </div>
  );
}
