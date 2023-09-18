import previewData from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import PreviewSuspense from "../../../components/PreviewSuspense";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import PreviewDocList from "../../../components/PreviewDocList";
import DocList from "../../../components/DocList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export default async function Home() {
  // if (previewData) {
  //   return (
  //     <PreviewSuspense 
  //       fallback={
  //       <div role="status">
  //         <p className="text-center text-lg animate-pulse">Loading Preview Data...</p>
  //       </div>
  //       }
  //     >
  //       <PreviewDocList query={query}/>
  //     </PreviewSuspense>
  //   )
  // }

  const posts = await client.fetch(query)
  console.log(posts);

  return (
    <main className="">
      <DocList posts={posts}/>
      {/* <section className="flex flex-row justify-between px-4">
        <h1 className="text-xl font-medium">Top Doctors</h1>
        <p className="text-blue-400">View all</p>
      </section>

      <section className="px-4 my-5">
        <section className="flex flex-col lg:flex-row md:flex-row">
          <article className="mb-5">
            <section className="flex flex-row">
              <div className="bg-gray-200 rounded-lg p-1 w-20 h-20">
                <img src="/assets/images/doctor1.svg" className="h-auto" alt="" />
              </div>
              <div className="flex flex-col pl-4">
                <p className="font-medium text-lg">Doctor's name</p>
                <div className="flex flex-row text-gray-400 text-sm">
                  <p>Field</p>
                  <div className="p-1 w-1 h-1 rounded-full bg-gray-300 mt-2 ml-3"></div>
                  <p className="ml-2 text-blue-500">Hospital Name</p>
                </div>
                <div className="mt-2 flex flex-row justify-between">
                  <div className="flex mt-1">
                    <FaStar className="ml-1 text-orange-500" />
                    <FaStar className="ml-1 text-orange-500" />
                    <FaStar className="ml-1 text-orange-500" />
                    <FaStar className="ml-1 text-orange-500" />
                    <FaStar className="ml-1 text-orange-500" />
                  </div>
                </div>
              </div>

            </section>
          </article>

        </section>
      </section> */}
    </main>
  )
}
