"use server";

import { revalidatePath } from "next/cache";

export const getStoriesFeedAction = async () => {
  try {
    const res = await fetch(`${process.env.DATABASE_URL}stories`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`Server error: `, error);
  }
};

export const getPostsFeedAction = async () => {
  try {
    const res = await fetch(`${process.env.DATABASE_URL}posts`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`Server error: `, error);
  }
};

export const getContactsAction = async () => {
  try {
    const res = await fetch(`${process.env.DATABASE_URL}contacts`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`Server error: `, error);
  }
};

export const addPostAction = async (post) => {
  try {
    await fetch(`${process.env.DATABASE_URL}posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  } catch (error) {
    console.log(`Server error: `, error);
  }
  revalidatePath("/")
};

export const deletePostAction = async (id) => {
  try {
    await fetch(`${process.env.DATABASE_URL}posts/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(`Server error: `, error);
  }
  revalidatePath("/")
};
