import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, component }: any) {
  return (
    <>
      <Header component={component} />
      <main className="min-h-[calc(100vh-2.5rem)] md:pt-25 pt-20 pb-5 md:px-8 px-4">
        <div className="mx-auto">{children}</div>
    </main>
      {/* <Footer /> */}
    </>
  );
}