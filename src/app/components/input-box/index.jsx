"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useRef, useState } from "react";
import VideoIcon from "../video-icon";
import CameraIcon from "../camera-icon";
import HappyFaceIcon from "../happy-face-icon";
import Profile from "../profile";
import { useSession } from "next-auth/react";
import Image from "next/image";
import EmojiPicker from "emoji-picker-react";
import { addPostAction } from "@/actions";
import { toast } from "react-toastify";
import { revalidatePath } from "next/cache";
// import { useMutation, useQueryClient } from "react-query";
// import { toast } from "react-toastify";

const InputBox = () => {
  const session = useSession();
  const [text, setText] = useState("");
  const inputFile = useRef(null);
  const [file, setFile] = useState(null);
  // const [emoji, setEmoji] = useState("");
  const [openBoxEmoji, setOpenBoxEmoji] = useState(false);

  const clickSendPost = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    const promise = async () => {
      await addPostAction({
        message: text,
        author: session?.data?.user?.name,
        email: session?.data?.user?.email,
        image: session?.data?.user?.image,
        uploadFile: file,
        timestamp: new Date(),
      });
    };
    toast.promise(promise, {
      pending: "Add post is pending...",
      success: "Add post successfully",
      error: "Failed to add post",
    });

    setText("");
    setFile(null);
  };
  const clickOpenInputFile = () => inputFile.current.click();
  const changeFileToAddPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setFile(readerEvent.target.result);
    };
  };
  const clickShowHandleEmoji = () => setOpenBoxEmoji((prev) => !prev);
  const clickHandleEmoji = (e) => {
    setText((prev) => `${prev}${e.emoji}`);
  };

  // const clickAddEmojiToText = () => {
  //   if (emoji) {
  //     setText((prev) => `${prev}${emoji}`);
  //     onClose();
  //     setEmoji("");
  //   }
  // };

  return (
    <div className="relative bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium space-y-2 sm:space-y-4">
      <div className="flex items-center space-x-2 sm:space-x-4 p-1 sm:p-4">
        <Profile className={"w-7 h-7"} />
        <form className={"flex-grow"}>
          <Input
            value={text}
            onValueChange={setText}
            type="text"
            size="md"
            placeholder="What's on your mind?"
            autoComplete="off"
          />
          <Button type="submit" className={"hidden"} onClick={clickSendPost}>
            Send
          </Button>
        </form>
      </div>

      {file && (
        <div className="relative w-1/2 h-[300px] mx-auto transition duration-300  hover:brightness-110 hover:scale-105">
          <Image
            src={file}
            alt="file"
            fill
            className="object-contain object-center rounded-md"
          />
        </div>
      )}
      <div className="grid sm:grid-cols-3 border-t-2">
        <div className="inputIcon">
          <VideoIcon className="size-6 text-red-500" />
          <p className="text-xs sm:text-sm lg:text-base">Live Video</p>
        </div>
        <div className="inputIcon" onClick={clickOpenInputFile}>
          <CameraIcon className="size-6 text-green-600" />
          <p className="text-xs sm:text-sm lg:text-base">Photo/Video</p>
          <input
            type="file"
            onChange={changeFileToAddPost}
            className="hidden"
            ref={inputFile}
          />
        </div>
        <div className="inputIcon" onClick={clickShowHandleEmoji}>
          <HappyFaceIcon className="size-6 text-yellow-300" />
          <p className="text-xs sm:text-sm lg:text-base">Feeling/Activity</p>
        </div>
      </div>
      <div className={"absolute w-full top-full right-0 z-50"}>
        <EmojiPicker
          open={openBoxEmoji}
          style={{
            width: "100%",
            height: "300px",
          }}
          onEmojiClick={clickHandleEmoji}
          searchDisabled
        />
      </div>
    </div>
  );
};

export default InputBox;
