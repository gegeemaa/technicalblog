import Link from "next/link";
import PostPerview from "./components/PostPerview";
import getPostMetadata from "./components/getPostMetadata";


const header = (
  <header>
    <div className='text-center p-8 mt-6 mb-6 rounded-md'>
      <Link href="/">
        <h1 className='text-3xl text-blue-500'>Gerelmaa's note</h1>
      </Link>
      <p className='text-slate-300'>Welcome to my tech note.</p>
    </div>
  </header>
);

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post)=> (
    <PostPerview key={post.slug} {...post} />
  ))

  return (
    <div className='mx-auto max-w-7xl px-6'>
      {header}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {postPreviews}
      </div>
    </div>

  )
}
