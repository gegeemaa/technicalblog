import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/getPostMetadata";
import Link from "next/link";

const getPostContent = (slug: string) =>{
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return( 
        <div className="grid grid-cols-12 gap-10">
            <div className="sticky top-0 col-span-4 px-3 self-start text-right">
                <Link href="/" className="text-base text-slate-600">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" className="w-6 h-6 right-3 absolute">
                    <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
                <div className="my-10">
                    <h1 className="text-lg text-slate-600">
                        {post.data.title}
                    </h1>
                    <p className="text-slate-400 mt-2">{post.data.date}</p>
                </div>
            </div>
            <article className="prose col-span-8 py-10">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
};

export default PostPage;