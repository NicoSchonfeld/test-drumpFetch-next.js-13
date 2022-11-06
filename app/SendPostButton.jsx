"use client";

import { drumpFetch } from "drumpfetch";
const api = drumpFetch("https://jsonplaceholder.typicode.com/");

export default function SendPostButton({ newPost }) {
  const handlePost = async (value) => {
    const options = {
      body: value,
    };

    await api.post("posts", options).then((res) => {
      if (!res.error) console.log("SI FUNCAAAAAAAAAA");
    });
  };

  return <button onClick={() => handlePost(newPost)}>send post</button>;
}
