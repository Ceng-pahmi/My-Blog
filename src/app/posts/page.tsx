"use client"
import Link from 'next/link'
import { useEffect, useState } from "react";
import { client } from "@/utils/contentfuil";

export default function BlogPosts() {
  const [fPost, setFpost]: Array<any> = useState([]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "The Future of AI in Everyday Life",
  //     excerpt: "Exploring how artificial intelligence will shape our daily routines and interactions.",
  //     content: "Artificial Intelligence is rapidly evolving and integrating into our daily lives. From smart home devices to personalized recommendations, AI is changing the way we interact with technology and each other. This post delves into the potential future applications of AI and how they might impact various aspects of our lives, including work, education, and leisure.",
  //     date: "2024-03-15",
  //     category: "Technology",
  //     image: "/ai.jpg?height=400&width=600",
  //     videoId: "dQw4w9WgXcQ"
  //   },
  //   {
  //     id: 2,
  //     title: "Hidden Gems: Unexplored Travel Destinations",
  //     excerpt: "Discover breathtaking locations off the beaten path for your next adventure.",
  //     content: "While popular tourist destinations have their charm, there's something special about discovering hidden gems around the world. This post takes you on a journey to lesser-known but equally stunning locations, from secluded beaches to charming mountain villages. We'll provide tips on how to reach these destinations and what to expect when you arrive.",
  //     date: "2024-03-10",
  //     category: "Travel",
  //     image: "/hidden gem.jpeg?height=400&width=600",
  //     videoId: "dQw4w9WgXcQ"
  //   },
  //   {
  //     id: 3,
  //     title: "Farm-to-Table: A Culinary Revolution",
  //     excerpt: "How the farm-to-table movement is changing the way we eat and support local communities.",
  //     content: "The farm-to-table movement has gained significant momentum in recent years, emphasizing the importance of locally sourced, fresh ingredients. This post explores the benefits of this approach, both for consumers and local farmers. We'll discuss how farm-to-table practices are influencing restaurant menus, farmers' markets, and even home cooking, as well as the positive impact on local economies and the environment.",
  //     date: "2024-03-05",
  //     category: "Food",
  //     image: "/farm.jpeg?height=400&width=600",
  //     videoId: "dQw4w9WgXcQ"
  //   },
  //   {
  //     id: 4,
  //     title: "Mindfulness in the Digital Age",
  //     excerpt: "Techniques for staying present and focused in an increasingly connected world.",
  //     content: "In our fast-paced, technology-driven world, it's becoming increasingly challenging to stay present and mindful. This post explores various techniques and practices that can help you cultivate mindfulness in the digital age. From meditation apps to digital detox strategies, we'll provide practical tips for finding balance and maintaining mental well-being amidst the constant flow of information and notifications.",
  //     date: "2024-02-28",
  //     category: "Lifestyle",
  //     image: "/tecnology.jpeg?height=400&width=600",
  //     videoId: "dQw4w9WgXcQ"
  //   },
  // ]
  const fetchFeaturePost = async () => {
      const data = await client.getEntries({
        
      });
      console.log(data.items);
      if (data.items.length) setFpost(data.items);
    };
  
    useEffect(() => {
      fetchFeaturePost();
    }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {fPost.map((item: any, index: number) => {
            return (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={item?.fields.image?.fields?.file?.url}
              alt={item?.fields?.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/posts/${item?.sys.id}`} className="hover:text-blue-600">
                  {item?.fields?.title}
                </Link>
              </h2>
              {/* <p className="text-gray-800 mb-4">{post.excerpt}</p> */}
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{item?.fields?.dateAt}</span>
                {/* <span>{post.category}</span> */}
              </div>
              {/* <p className="text-gray-700 mb-4">{post.content.substring(0, 150)}...</p> */}
              <Link href={`/posts/${item?.sys.id}`} className="text-blue-600 hover:underline">
                Read More
              </Link>
            </div>
          </div>
       );
      })}
      </div>
    </div>
  )
}

