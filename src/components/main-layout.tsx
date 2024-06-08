"use client";
import React from "react";
import Navbar from "./navbar";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  let showHeader: boolean = true;

  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    showHeader =
      path === "/auth/login" || path === "/auth/signup" ? false : true;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
