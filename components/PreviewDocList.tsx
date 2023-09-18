'use client'


import { usePreview } from "../lib/sanity.preview";
import DocList from "./DocList"

type Props = {
    query: string;
};


export default function PreviewDocList({ query }: Props) {
        const posts = usePreview(null, query);
        
        return <DocList posts={posts} />
    }