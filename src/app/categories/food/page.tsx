import CategoryPage from '@/app/components/CategoryPage'

export default function FoodCategory() {
  const posts = [
    { 
      id: 7, 
      title: "Farm-to-Table Movement", 
      excerpt: "Exploring the benefits and challenges of the farm-to-table dining concept.", 
      date: "2024-03-10",
      image: "/farm.jpeg?height=400&width=600"
    },
    { 
      id: 8, 
      title: "International Street Food Guide", 
      excerpt: "A culinary journey through the world's best street food scenes.", 
      date: "2024-02-25",
      image: "/sreet food.jpeg?height=400&width=600"
    },
    { 
      id: 9, 
      title: "Vegan Desserts That Will Amaze You", 
      excerpt: "Delicious plant-based dessert recipes that everyone will love.", 
      date: "2024-02-05",
      image: "/vegetane.jpeg?height=400&width=600"
    },
  ]

  return <CategoryPage category="Food" posts={posts}/>
}

