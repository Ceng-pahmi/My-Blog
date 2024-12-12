import * as React from "react";
import { client } from "@/utils/contentfuil";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// const posts = [
//   {
//     id: 1,
//     title: "The Future of AI in Everyday Life",
//     content: "Artificial Intelligence is rapidly evolving and integrating into our daily lives. From smart home devices to personalized recommendations, AI is changing the way we interact with technology and each other. This post delves into the potential future applications of AI and how they might impact various aspects of our lives, including work, education, and leisure.",
//     date: "2024-03-15",
//     category: "Technology",
//     image: "/placeholder.svg?height=400&width=600",
//     videoId: "dQw4w9WgXcQ"
//   },
//   {
//     id: 2,
//     title: "Hidden Gems: Unexplored Travel Destinations",
//     content: "While popular tourist destinations have their charm, there's something special about discovering hidden gems around the world. This post takes you on a journey to lesser-known but equally stunning locations, from secluded beaches to charming mountain villages. We'll provide tips on how to reach these destinations and what to expect when you arrive.",
//     date: "2024-03-10",
//     category: "Travel",
//     image: "/hidden gem.jpeg?height=400&width=600",
//     videoId: "dQw4w9WgXcQ"
//   },
//   {
//     id: 3,
//     title: "Farm-to-Table: A Culinary Revolution",
//     content: "The farm-to-table movement has gained significant momentum in recent years, emphasizing the importance of locally sourced, fresh ingredients. This post explores the benefits of this approach, both for consumers and local farmers. We'll discuss how farm-to-table practices are influencing restaurant menus, farmers' markets, and even home cooking, as well as the positive impact on local economies and the environment.",
//     date: "2024-03-05",
//     category: "Food",
//     image: "/farm.jpeg?height=400&width=600",
//     videoId: "dQw4w9WgXcQ"
//   },
//   {
//     id: 4,
//     title: "Mindfulness in the Digital Age",
//     content: "In our fast-paced, technology-driven world, it's becoming increasingly challenging to stay present and mindful. This post explores various techniques and practices that can help you cultivate mindfulness in the digital age. From meditation apps to digital detox strategies, we'll provide practical tips for finding balance and maintaining mental well-being amidst the constant flow of information and notifications.",
//     date: "2024-02-28",
//     category: "Lifestyle",
//     image: "/tecnology.jpeg?height=400&width=600",
//     videoId: "dQw4w9WgXcQ"
//   },
// ]

export default async function BlogPost({
    params,
}: {
  params: Promise<{ id: string }>;
}) {
  const {id} = (await params)
  const blog = (await client.getEntry(id)).fields as any;

  // console.log(blog.fields.content1.content[2]);
  console.log(blog,"blog");
  

  return (
    <div className="container mx-auto px-4 py-8">
      <img
        src={blog.image.fields.file.url}
        alt={blog.title}
        width={1200}
        height={600}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="text-gray-600 mb-4">
        <span>{blog.date}</span> | <span>{blog.category}</span>
      </div>
      <div className="prose lg:prose-xl max-w-none mb-8">
        {/* <p>{blog.content}</p> */}
          {documentToReactComponents(blog.content)}
      </div>
      <div className="aspect-w-16 aspect-h-9 mb-8">
        {/* <iframe
          src={`https://youtu.be/1LdS8b5ur7M?si=F7sif-xw7q43fPj5`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe> */}
      </div>
    </div>
  )
}

