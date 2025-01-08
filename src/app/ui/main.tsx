"use client";

import type { ReactNode } from "react";
import React from "react";
import { Locale } from "./dictionaries";
// import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

const Main = ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { className: string };
}>): ReactNode => {
  // const queryClient = new QueryClient();

  // const { isLoading } = useCentralStore();

  return (
    // <QueryClientProvider client={queryClient}>
    <html
      className={`scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-200 scrollbar-track-white`}
    >
      <body className={params.className}>
        <div className="relative">
          {/* <h1>Test</h1>
          <h1>Test</h1> */}
          {children}
          {
            <div className="absolute z-50"> </div>
          }
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
    // </QueryClientProvider>
  );
};

export default Main;
