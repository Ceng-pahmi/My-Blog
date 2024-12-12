import CategoryPage from '@/app/components/CategoryPage'

export default function TravelCategory() {
  const posts = [
    { 
      id: 4, 
      title: "Hidden Gems in Southeast Asia", 
      excerpt: "Discover off-the-beaten-path destinations in Southeast Asia.", 
      date: "2024-03-05",
      image: "/asean.jpeg?height=400&width=600"
    },
    { 
      id: 5, 
      title: "Budget Travel Hacks for Europe", 
      excerpt: "Tips and tricks for exploring Europe without breaking the bank.", 
      date: "2024-02-20",
      image: "/eropa.jpeg?height=400&width=600"
    },
    { 
      id: 6, 
      title: "Sustainable Tourism: A Guide", 
      excerpt: "How to travel responsibly and minimize your environmental impact.", 
      date: "2024-02-01",
      image: "/traveler.jpeg?height=400&width=600"
    },
  ]

  return <CategoryPage category="Travel" posts={posts} />
}

