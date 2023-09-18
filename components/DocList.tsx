import Image from "next/image";
import urlFor from "../lib/urlFor";
import { FaStar } from "react-icons/fa";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
};


const DocList = ({ posts }: Props) => {
    console.log(posts.length);
    return (
        <div>
            <hr className="border-blue-400 lg:mb-12" />
            <section className="px-4 my-5">
                {posts.map(post => (
                    <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                        <div className="flex flex-col lg:flex-row md:flex-row">
                            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                                <article className="mb-5">
                                    <section className="flex lg: flex-col flex-row">
                                        {/* <figure className="bg-gray-200 rounded-lg p-1"> */}
                                        <Image
                                            className="rounded-lg"
                                            src={urlFor(post.mainImage).url()}
                                            alt={post.author.name}
                                            //  fill
                                            width={500}
                                            height={500}
                                        /> 
                                        {/* </figure> */}
                                        <div className="flex flex-col lg:pl-0 md:pl-0 pl-4 lg:mt-4">
                                            <p className="font-medium text-lg">{post.title}</p>
                                            <div className="">
                                                {post.categories.map(category => (
                                                    <div className="bg-blue-500 text-gray-300 py-1 rounded-full text-sm font-semibold">
                                                        <p>{category.title}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <p className="text-sm text-gray-300">
                                                {new Date(post._createdAt).toLocaleDateString
                                                    ("en-US", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                    })
                                                }
                                            </p>

                                            <p className="text-gray-500 mt-4">{post.description}</p>
                                            <p>Read more</p>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </div>
                    </ClientSideRoute>
                ))}
            </section>
        </div>
    )
}

export default DocList