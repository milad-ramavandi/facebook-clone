'use client'
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";


const Login = () => {
  const clickSignIn = () => signIn('google');
  return (
    <div className="max-w-screen-md h-screen mx-auto flex justify-center items-center">
      <div className="grid justify-center items-center">
        <div className="w-[400px] h-[400px] relative">
          <Image
            src="https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj"
            fill
            alt="google"
            className="object-cover"
          />
        </div>
        <Button inputMode="submit" radius="full" onClick={clickSignIn}>
          Login with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
