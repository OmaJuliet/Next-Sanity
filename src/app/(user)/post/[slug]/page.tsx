import { groq } from "next-sanity";
import { client } from "../../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../../lib/urlFor";
// import { PortableText } from "@portabletext/react"

type Props = {
    params: {
        slug: string;
    };
};

async function Post({ params: { slug } }: Props) {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
  `;

    const post: Post = await client.fetch(query, { slug })

    return (
        <article className="px-10 pb-28">
            <section className="space-y-2 border border-blue-500 text-white">
                <div className="min-h-56 flex flex-col md:flex-row justify-between">

                    <section className="p-5 bg-blue-500 w-full">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-bold">{post.title}</h1>
                                <p>
                                    {new Date(post._createdAt).toLocaleDateString
                                        ("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })
                                    }
                                </p>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Image
                                    className="rounded-full w-64"
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.author.name}
                                    //  fill
                                    width={700}
                                    height={700}
                                />
                            </div>

                            <div className="w-64">
                                <h3 className="text-lg font-bold">{post.author.name}</h3>
                                <div></div>
                            </div>
                        </div>

                        <div>
                            <h2 className="italic pt-10">{post.description}</h2>
                            <div>
                                {post.categories.map ((category) => (
                                    <p key={category._id} className="">
                                        {category.title}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </article>
    )
}

export default Post;
