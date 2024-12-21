"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

const StoryModal = ({ isOpen, onClose, onOpenChange, id, src, name }) => {
  const session = useSession();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const { mutate } = useMutation({
    mutationKey: ["delete-story", id],
    mutationFn: async () => {
      setIsLoading(true);

      const data = await fetch(
        `${process.env.DATABASE_URL}stories?` +
          new URLSearchParams({ storyID: id }).toString(),
        {
          method: "DELETE",
        }
      );
      const res = await data.json();
      if (res.status === 200) {
        toast.success("Delete story successfully");
      } else if (res.status === 500) {
        throw new Error("Server error");
      } else {
        toast.error("Failed to delete story");
      }

      setIsLoading(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("stories");
      onClose();
    },
  });
  const deleteStoryClick = () => {
    mutate();
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{session?.data?.user?.name === name ? "Your story" : `${name} story`}</ModalHeader>
        <ModalBody>
          <div className="relative h-[350px]">
            <Image src={src} fill className="object-contain" alt="your_story" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          {session?.data?.user?.name === name && (
            <Button
              color={"danger"}
              onClick={deleteStoryClick}
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              Delete
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StoryModal;
