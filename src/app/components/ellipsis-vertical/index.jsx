"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import DeleteIcon from "../delete-icon";
import EditIcon from "../edit-icon";
import { toast } from "react-toastify";

const EllipsisVertical = ({ id }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["delete-post", id],
    mutationFn: () => {
      const promise = async () => {
        await fetch(`http://localhost:9000/posts/${id}`, {
          method: "DELETE",
        });
      };
      return toast.promise(promise, {
        pending: "Delete post is pending...",
        success: "Delete post successfully",
        error: "Failed to delete post",
      });
    },

    onSuccess: () => queryClient.invalidateQueries(["posts"]),
  });
  const clickHandlerDelete = () => {
    mutate();
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={
            "size-10 p-2 cursor-pointer hover:bg-gray-100 hover:rounded-full"
          }
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
  );
};

export default EllipsisVertical;
