"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import DeleteIcon from "../delete-icon";
import EditIcon from "../edit-icon";

const EllipsisVertical = ({ id }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["delete post", id],
    mutationFn: async () =>
      await fetch(`http://localhost:8000/posts/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      onOpen();
      queryClient.invalidateQueries(["posts"]);
    },
  });
  const clickHandlerDelete = () => {
    mutate();
  };
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="edit"
            className="text-lg"
            startContent={<EditIcon />}
          >
            Edit
          </DropdownItem>
          <DropdownItem
            key="delete"
            className="text-danger text-lg"
            color="danger"
            onClick={clickHandlerDelete}
            startContent={<DeleteIcon />}
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Message</ModalHeader>
          <ModalBody>
            <p className={"text-red-500 font-semibold text-center"}>
              You delete the post successfully.
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EllipsisVertical;
