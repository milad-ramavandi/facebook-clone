"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { useRef, useState } from "react";
import CloudUpload from "../icons/cloud-upload";
import Image from "next/image";
import CheckCircle from "../icons/check-circle";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const UploadModal = ({ isOpen, onClose, onOpenChange }) => {
  const session = useSession();
  const queryClient = useQueryClient();
  const inputFile = useRef(null);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setPreview(readerEvent.target.result);
    };
  };
  const handleOpenFile = () => {
    inputFile.current?.click();
  };
  const handleDeleteFile = () => {
    setPreview(null);
    setFile(null);
  };
  const { mutate } = useMutation({
    mutationKey: ["add-story"],
    mutationFn: () => {
      const newStory = {
        name: session?.data?.user?.name,
        src: preview,
        profile: session?.data?.user?.image,
        description: session?.data?.user?.name,
      };
      const promise = async () => {
        await fetch(`${process.env.DATABASE_URL}stories`, {
          method: "POST",
          body: JSON.stringify(newStory),
        });
      };
      return toast.promise(promise, {
        pending: "Add story is pending...",
        success: "Add story successfully",
        error: "Failed to add story",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("stories")
      setFile(null);
      setPreview(null)
      onClose()
    }
  });
  const addStoryClick = () => {
    mutate();
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"sm"}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Add a story</ModalHeader>
        <ModalBody>
          {!preview ? (
            <div className="flex flex-col space-y-2 justify-center items-center h-[300px] p-3 border-2 border-dashed border-gray-300 rounded-lg hover:text-gray-400">
              <CloudUpload />
              <p className="text-[17px]">Select image/video to upload</p>

              <div className={"w-3/4 mx-auto"}>
                <Button color={"danger"} fullWidth onClick={handleOpenFile}>
                  Select file
                </Button>
              </div>
              <input
                ref={inputFile}
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="relative h-[300px]">
              <Image
                src={preview}
                fill
                className={"object-contain"}
                alt="your story"
              />
            </div>
          )}
          {file && (
            <div className="flex items-center justify-between rounded-xl border py-2 px-1 border-gray-300">
              <div className="flex items-center space-x-1">
                <CheckCircle />
                <p className="text-[11px] whitespace-nowrap">
                  {file.name.split(".")[0].slice(0, 10)}...
                  {file.name.split(".")[1]}
                </p>
              </div>
              <Button color={"danger"} onClick={handleDeleteFile} size="sm">
                Delete file
              </Button>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button color="primary" onPress={addStoryClick} isDisabled={!file}>
            Apply
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UploadModal;
