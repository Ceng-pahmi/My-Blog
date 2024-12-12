import Link from 'next/link'
import Image from 'next/image'

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

interface CategoryPageProps {
  category: string;
  posts: Post[];
  
}

export default function CategoryPage({ category, posts,  }: CategoryPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{category} Posts</h1>
      
      {/* Featured Video */}
      <div className="mb-12">
        {/* <h2 className="text-2xl font-bold mb-4">Featured {category} Video</h2> */}
        <div className="aspect-w-16 aspect-h-9">
          {/* <iframe
            src={`https://youtu.be/Ho4A8-wne2U/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe> */}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/posts/${post.id}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

