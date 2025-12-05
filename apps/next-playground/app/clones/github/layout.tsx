import { Metadata } from "next";
import React from "react";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Github Clone",
};

export default function GithubLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
