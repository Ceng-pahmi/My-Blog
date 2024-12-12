import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Blog Logo" width={50} height={50} />
          <span className="ml-2 text-2xl font-bold " >My Blog</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 ">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/posts" className="hover:text-blue-600">Blog Posts</Link></li>
            <li><Link href="/categories" className="hover:text-blue-600">Categories</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

