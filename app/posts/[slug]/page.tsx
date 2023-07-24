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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:sticky top-0 grid-cols-1 md:col-span-4 max-[500px]:px-3 max-[500px]:mt-6 md:self-start md:text-right ">
                <div className="max-[500px]:flex max-[500px]:flex-row">
                    <Link href="/" className="text-base text-slate-600 max-[500px]:basis-1/3 md:absolute md:right-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                    <div className="md:mt-2 md:pt-10 max-[500px]:flex max-[500px]:justify-between max-[500px]:basis-2/3">
                        <h1 className="text-lg text-slate-600">
                            {post.data.title}
                        </h1>
                        <p className="text-slate-400 md:mt-2 text-xs">{post.data.date}</p>
                    </div>
                </div>
            </div>
            <article className="prose col-span-1 md:col-span-8 md:py-10 px-5">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
};

export default PostPage;