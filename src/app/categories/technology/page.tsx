import CategoryPage from '@/app/components/CategoryPage'

export default function TechnologyCategory() {
  const posts = [
    { 
      id: 1, 
      title: "The Future of AI", 
      excerpt: "Exploring the potential impacts of artificial intelligence on various industries.", 
      date: "2024-03-01",
      image: "/ai.jpg?height=400&width=600"
    },
    { 
      id: 2, 
      title: "5G Revolution: What You Need to Know", 
      excerpt: "Understanding the next generation of mobile networks and its implications.", 
      date: "2024-02-15",
      image: "/5G.jpeg?height=400&width=600"
    },
    { 
      id: 3, 
      title: "Cybersecurity in the Age of IoT", 
      excerpt: "Addressing security challenges in the growing Internet of Things ecosystem.", 
      date: "2024-01-30",
      image: "/cyber.jpeg?height=400&width=600"
    },
  ]

  return <CategoryPage category="Technology" posts={posts} />
}

