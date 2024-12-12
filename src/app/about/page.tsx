import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Our Blog</h1>

      {/* Blog History */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
        {`  Founded in 2020, our blog started as a passion project to share insights on technology, travel, food, and lifestyle. 
          Over the years, we've grown into a community of curious minds and avid readers, always exploring new ideas and experiences.`}
        </p>
      </section>

      {/* Author Bio */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Meet the Author</h2>
        <div className="flex items-center mb-4">
          <Image src="/avatr.png" alt="Author" width={100} height={100} className="rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-bold">Muhamad Pahmi Adriansah</h3>
            <p className="text-gray-600">Founder & Lead Writer</p>
          </div>
        </div>
        <p className="text-gray-700">
         {'Pahmi is a tech enthusiast, avid traveler, and foodie. With a background in computer science and a passion for writing, she combines her love for technology and exploration in her blog posts'}         </p>
      </section>

      {/* Mission and Vision */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
        {'We aim to inspire curiosity, foster learning, and encourage our readers to explore the world around them. Whether its through technology, travel, food, or lifestyle choices, we believe in the power of knowledge and new experiences.'}   </p>
        <h3 className="text-xl font-bold mb-2">Our Values</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Curiosity and continuous learning</li>
          <li>Authenticity in our content and experiences</li>
          <li>Respect for diverse perspectives and cultures</li>
          <li>Commitment to accuracy and quality information</li>
        </ul>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-2">{'Wed love to hear from you! Reach out to us at:'}</p>
        <p className="text-gray-700">Email: muhammadpahmi1310@gmail.com</p>
        <div className="mt-4">
          <a href="#" className="text-black-600 hover:underline mr-4">Twitter</a>
          <a href="#" className="text-black-600 hover:underline mr-4">Facebook</a>
          <a href="#" className="text-black-600 hover:underline">Instagram</a>
        </div>
      </section>
    </div>
  )
}

