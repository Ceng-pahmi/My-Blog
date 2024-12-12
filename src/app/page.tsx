"use client"

import { useEffect, useState } from "react";
import { client } from "@/utils/contentfuil";
import Link from 'next/link'

export default function Home() {
  const [fPost, setFpost]: Array<any> = useState([]);

  // const featuredPosts = [
  //   {
  //     id: 1,
  //     title: "The Future of AI in Everyday Life",
  //     excerpt: "Exploring how artificial intelligence will shape our daily routines and interactions.",
  //     image: "/ai.jpg?height=400&width=600",
  //     date: "2024-03-15",
  //     category: "Technology",
  //     videoId: "dQw4w9WgXcQ"
  //   },
  //   {
  //     id: 2,
  //     title: " Hidden Gems: Unexplored Travel Destinations ",
  //     excerpt: "Discover breathtaking locations off the beaten path for your next adventure.",
  //     image: "/hidden gem.jpeg?height=400&width=600",
  //     date: "2024-03-10",
  //     category: "Travel",
  //     videoId: "dQw4w9WgXcQ"
  //   },
  //   {
  //     id: 3,
  //     title: "Farm-to-Table: A Culinary Revolution",
  //     excerpt: "How the farm-to-table movement is changing the way we eat and support local communities.",
  //     image: "/farm.jpeg?height=400&width=600",
  //     date: "2024-03-05",
  //     category: "Food",
  //     videoId: "dQw4w9WgXcQ"
  //   }
  // ];

  const fetchFeaturePost = async () => {
    const data = await client.getEntries({
      limit: 3,
    });
    console.log(data.items);
    if (data.items.length) setFpost(data.items);
  };

  useEffect(() => {
    fetchFeaturePost();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      { <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-xl mb-8">Discover interesting articles on various topics</p>
          <Link href="/posts" className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-100">
            Explore Posts
          </Link>
        </div>
      </section> }

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <h3 className="text-xl font-bold mb-2">{item?.fields?.title}</h3>
                  {/* <p className="text-gray-900 mb-4">{post.excerpt}</p> */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{item?.fields?.dateAt}</span>
                    <Link href={`/posts/${item?.sys.id}`} className="text-blue-600 font-bold hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Technology', 'Travel', 'Food', 'Lifestyle'].map((category) => (
              <Link key={category} href={`/categories/${category.toLowerCase()}`} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for the latest posts and updates</p>
          <Link href="#" className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-100">
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  )
}

