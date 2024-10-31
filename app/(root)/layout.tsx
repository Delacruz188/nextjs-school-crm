import React, { ReactNode } from "react";
import RootNavbar from "../components/Root/RootNavbar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <RootNavbar />
      {children}
    </div>
  );
}
