"use client";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import VideoIcon from "../icons/video-icon";
import CameraIcon from "../icons/camera-icon";
import HappyFaceIcon from "../icons/happy-face-icon";
import Profile from "../profile";
import { useSession } from "next-auth/react";
import Image from "next/image";
import EmojiPicker from "emoji-picker-react";
// import { addPostAction } from "@/actions";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";
import { useInView } from "framer-motion";
import ImageIcon from "../icons/image-icon";
import FilmIcon from "../icons/film-icon";

const InputBox = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const videoRef = useRef(null);
  useEffect(() => {
    inView ? videoRef?.current?.play() : videoRef?.current?.pause();
  }, [inView]);
  const MAX_FILE_SIZE = 2000000;
  const [text, setText] = useState("");
  const inputFile = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [openBoxEmoji, setOpenBoxEmoji] = useState(false);
  const session = useSession();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["add-post"],
    mutationFn: () => {
      const newPost = {
        message: text,
        author: session?.data?.user?.name,
        email: session?.data?.user?.email,
        image: session?.data?.user?.image,
        uploadFile: preview,
      };
      const promise = async () => {
        await fetch(`${process.env.DATABASE_URL}posts`, {
          method: "POST",
          headers: {
            "Content-Type": "applocation/json",
          },
          body: JSON.stringify(newPost),
        });
      };

      return toast.promise(promise, {
        pending: "Add post is pending...",
        success: "Add post successfully",
        error: "Failed to add post",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("posts")
      queryClient.invalidateQueries("stories")
    }
  });

  const clickSendPost = (e) => {
    e.preventDefault();
    if (!text) {
      toast.error("Post input should not be empty");
      return;
    }
    // (
    //   async () => {
    //     await addPostAction({
    //       // id:crypto.randomUUID(),
    //       message: text,
    //       author: session?.data?.user?.name,
    //       email: session?.data?.user?.email,
    //       image: session?.data?.user?.image,
    //       uploadFile: file,
    //       // timestamp: new Date(),
    //     });
    //   }
    // )();
    // toast.promise(promise, {
    //   pending: "Add post is pending...",
    //   success: "Add post successfully",
    //   error: "Failed to add post",
    // });

    if (file.size > MAX_FILE_SIZE) {
      return toast.error("Max allowed size is 2MB");
    }
    mutate();
    setText("");
    setPreview(null);
    setFile(null)
  };
  const clickOpenInputFile = () => inputFile.current.click();
  const changeFileToAddPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setPreview(readerEvent.target.result);
    };
  };
  const clickShowHandleEmoji = () => setOpenBoxEmoji((prev) => !prev);
  const clickHandleEmoji = (e) => {
    setText((prev) => `${prev}${e.emoji}`);
  };

  return (
    <div className="relative bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium space-y-2 sm:space-y-4">
      <div className="flex items-center space-x-2 sm:space-x-4 sm:p-4">
        <Profile className={"hidden sm:block"} />
        <form className={"flex-grow"}>
          <div className="space-y-2 sm:flex sm:space-x-1 sm:space-y-0">
            <Input
              value={text}
              onValueChange={setText}
              type="text"
              size="md"
              placeholder={`What's on your mind, ${session?.data?.user?.name}?`}
              autoComplete="off"
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                color={"primary"}
                variant={"ghost"}
                onClick={clickSendPost}
              >
                Post
              </Button>
            </div>
          </div>
        </form>
      </div>

      {preview && (
        <div
          ref={ref}
          className="relative w-1/2 h-[300px] mx-auto transition duration-300  hover:brightness-110 hover:scale-105"
        >
          {file.type.startsWith("image") ? (
            <Image
              src={preview}
              alt="file"
              fill
              className="object-contain object-center rounded-md"
            />
          ) : (
            <video
              ref={videoRef}
              src={preview}
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
            />
          )}
        </div>
      )}
      <div className="grid sm:grid-cols-3 border-t-2 pt-2">
        <div className="inputIcon">
          <VideoIcon className="size-6 text-red-500" />
          <p className="text-xs sm:text-sm lg:text-base">Live Video</p>
        </div>
        <div className="inputIcon" onClick={clickOpenInputFile}>
          {!file ? (
            <>
              <CameraIcon className="size-6 text-green-500" />
              <p className="text-xs sm:text-sm lg:text-base">Photo/Video</p>
            </>
          ) : (
            <>
              {file.type.startsWith("image") ? <ImageIcon /> : <FilmIcon />}
              <p className="text-xs sm:text-sm lg:text-base">Change</p>
            </>
          )}
          <input
            type="file"
            onChange={changeFileToAddPost}
            className="hidden"
            ref={inputFile}
          />
        </div>
        <div className="inputIcon" onClick={clickShowHandleEmoji}>
          <HappyFaceIcon className="size-6 text-yellow-500" />
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
