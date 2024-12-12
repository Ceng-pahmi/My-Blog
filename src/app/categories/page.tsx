import Link from 'next/link'
import Image from 'next/image'

export default function Categories() {
  const categories = [
    { 
      name: 'Technology', 
      description: 'Explore the latest in tech innovations and digital trends',
      recentPosts: ['The Future of AI', '5G Revolution: What You Need to Know', 'Cybersecurity in the Age of IoT'],
      image: "/IT.jpeg?height=300&width=400"
    },
    { 
      name: 'Travel', 
      description: 'Discover new destinations and travel tips',
      recentPosts: ['Hidden Gems in Southeast Asia', 'Budget Travel Hacks for Europe', 'Sustainable Tourism: A Guide'],
      image: "/travel1.jpeg?height=300&width=400"
    },
    { 
      name: 'Food', 
      description: 'Delve into culinary adventures and recipes',
      recentPosts: ['Farm-to-Table Movement', 'International Street Food Guide', 'Vegan Desserts That Will Amaze You'],
      image: "/food1.jpeg?height=300&width=400"
    },
    { 
      name: 'Lifestyle', 
      description: 'Tips and insights for better living',
      recentPosts: ['Minimalism: Less is More', 'Work-Life Balance in the Digital Age', 'Sustainable Living: Small Changes, Big Impact'],
      image: "/lifestyle1.jpeg?height=300&width=400"
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <h3 className="text-lg font-semibold mb-2">Recent Posts:</h3>
              <ul className="space-y-1">
                {category.recentPosts.map((post) => (
                  <li key={post}>
                    <Link href="#" className="text-blue-600 hover:underline">
                      {post}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={`/categories/${category.name.toLowerCase()}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                View All {category.name} Posts
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

