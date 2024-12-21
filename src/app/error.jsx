"use client";
import { Button } from "@nextui-org/react";
import React from "react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="w-screen h-screen flex flex-col space-y-3 justify-center items-center text-center p-1">
      <p className={"text-red-600 font-semibold text-2xl"}>Oops, there is an error: {error.message}!</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
};

export default ErrorPage;
