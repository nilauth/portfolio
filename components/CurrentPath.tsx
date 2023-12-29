"use client";
import { usePathname } from "next/navigation";
import React from "react";

const CurrentPath = () => {
  const path = usePathname();
  return <div>{path}</div>;
};

export default CurrentPath;
