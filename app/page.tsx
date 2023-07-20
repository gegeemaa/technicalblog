

import getPostMetadata from "./components/getPostMetadata";
import PostPerview from "./components/PostPerview";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post)=> (
    <PostPerview key={post.slug} {...post} />
  ))

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {postPreviews}
    </div>
  )
}
