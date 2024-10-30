import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Dashboard Navbar</h1>
      <div>{children}</div>
    </div>
  );
}
