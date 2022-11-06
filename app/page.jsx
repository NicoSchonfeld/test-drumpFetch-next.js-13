import { drumpFetch } from "drumpfetch";

import PostsFetch from "./PostsFetch";
import SendPostButton from "./SendPostButton";

const api = drumpFetch("https://jsonplaceholder.typicode.com/");

const fetchPosts = async () => {
  return await api.get("posts").then((res) => {
    if (!res.error) {
      return res;
    }
  });
};

export default async function page() {
  const posts = await fetchPosts();

  const newPost = {
    id: undefined,
    title: "EL JUAN",
    body: "QUE PASA PRIMOOOOOOOOOOOO",
  };

  return (
    <main>
      <PostsFetch posts={posts} />

      <SendPostButton newPost={newPost} />
    </main>
  );
}
