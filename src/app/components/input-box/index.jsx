"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
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
import moment from "moment";
import EmojiPicker from "emoji-picker-react";
import { useMutation, useQueryClient } from "react-query";

const InputBox = () => {
  const session = useSession();
  const [text, setText] = useState("");
  const inputFile = useRef(null);
  const [file, setFile] = useState(null);
  const [isError, setIsError] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const queryClieny = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["add post"],
    mutationFn: async () =>
      await fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          author: session?.data?.user?.name,
          email: session?.data?.user?.email,
          image: session?.data?.user?.image,
          uploadFile: file,
          timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
        }),
      }),
    onSuccess: () => {
      onOpen();
      setText("");
      setFile(null);
      setIsError(false);
      setShowEmoji(false);
      queryClieny.invalidateQueries(["posts"]);
    },
  });

  const clickSendPost = (e) => {
    e.preventDefault();
    if (!text) {
      setIsError(true);
      return;
    }
    mutate();
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
  const clickCancelPost = () => {
    setText("");
    setFile(null);
    setIsError(false);
  };
  const clickShowHandleEmoji = () => setShowEmoji((prev) => !prev);
  const clickHandleEmoji = (e) => setText((prev) => `${prev}${e.emoji}`);

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 space-y-4">
      <div className="flex items-center space-x-4 p-4">
        <Profile className={"w-12 h-12"} />
        <Input
          value={text}
          onValueChange={setText}
          isInvalid={isError}
          errorMessage={"Please enter your text"}
          type="text"
          size="md"
          placeholder="What's on your mind?"
          autoComplete="off"
        />
      </div>
      <EmojiPicker
        open={showEmoji}
        style={{
          width: "75%",
          margin: "0 auto",
          height: "350px",
        }}
        onEmojiClick={clickHandleEmoji}
      />
      {file && (
        <div className="relative w-1/2 h-[300px] mx-auto transition duration-300  hover:brightness-110 hover:scale-105">
          <Image
            src={file}
            alt="file"
            fill
            className="object-cover object-center rounded-md"
          />
        </div>
      )}
      <div className="flex justify-around p-3 border-t-2">
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
      <div className={"flex justify-evenly"}>
        <div className={"w-1/3"}>
          <Button fullWidth color={"danger"} onClick={clickCancelPost}>
            Cancel
          </Button>
        </div>
        <div className={"w-1/3"}>
          <Button fullWidth color={"success"} onClick={clickSendPost}>
            Send
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Message</ModalHeader>
          <ModalBody>
            <p className={"text-green-500 font-semibold text-center"}>
              You send a post successfully.
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default InputBox;
