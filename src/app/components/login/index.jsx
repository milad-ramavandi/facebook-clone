"use client";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import React from "react";
import ArrowRightIn from "../arrow-right-in";

const Login = () => {
  const clickSignIn = () => signIn();
  return (
    <div
      className={
        "max-w-screen-sm min-h-screen mx-auto flex justify-center items-center"
      }
    >
      <div
        className={
          "w-3/4 sm:w-1/2 mx-auto bg-gray-100 shadow-lg p-2 rounded-sm flex flex-col text-center space-y-3"
        }
      >
        <p className={"font-bold text-lg truncate"}>Welcome to Facebook Clone</p>

        <Button
          radius="full"
          variant={"ghost"}
          onClick={clickSignIn}
          className={"w-3/4 mx-auto"}
          endContent={<ArrowRightIn />}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Login;
