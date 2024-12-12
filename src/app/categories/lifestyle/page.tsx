import CategoryPage from '@/app/components/CategoryPage'

export default function LifestyleCategory() {
  const posts = [
    { 
      id: 10, 
      title: "Minimalism: Less is More", 
      excerpt: "How embracing minimalism can lead to a more fulfilling life.", 
      date: "2024-03-15",
      image: "/minimal.jpeg?height=400&width=600"
    },
    { 
      id: 11, 
      title: "Work-Life Balance in the Digital Age", 
      excerpt: "Strategies for maintaining a healthy work-life balance in a connected world.", 
      date: "2024-03-01",
      image: "/work balance.jpeg?height=400&width=600"
    },
    { 
      id: 12, 
      title: "Sustainable Living: Small Changes, Big Impact", 
      excerpt: "Simple ways to adopt a more environmentally friendly lifestyle.", 
      date: "2024-02-10",
      image: "/small.jpeg?height=400&width=600"
    },
  ]

  return <CategoryPage category="Lifestyle" posts={posts} />
}

