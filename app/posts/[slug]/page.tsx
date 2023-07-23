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
        <div className="grid grid-cols-12">
            <div className="sticky top-0 col-span-4 px-3 self-start">
                <Link href="/" className="text-base text-blue-500">Back to home</Link>
                <div className="my-12">
                    <h1 className="text-lg text-slate-600">
                        {post.data.title}
                    </h1>
                    <p className="text-slate-400 mt-2">{post.data.date}</p>
                </div>
            </div>
            <article className="prose col-span-8">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
};

export default PostPage;