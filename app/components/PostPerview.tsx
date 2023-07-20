import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const postPreview = (props: PostMetadata) => {
    return (    
        <div className="border border-voilet-300 p-4 rounded-md shadow-sm bg-white">
            <Link rel="stylesheet" href={`/posts/${props.slug}`}>
                <h2 className="font-bold text-violet-600 hover:underline">{props.title}</h2>
            </Link>
            <p className="text-sm text-slate-400">{props.date}</p>
            <p className="text-slate-700">{props.subtitle}</p>
        </div>
      );
};

export default postPreview