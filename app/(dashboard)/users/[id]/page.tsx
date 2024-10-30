import React from "react";

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>Usuario{id}</div>;
}
