'use client'
import { useState } from 'react'

export default function BlogPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to my blog!",
      content: "This is my first blog post. More content coming soon!",
      date: new Date().toISOString().split('T')[0]
    }
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() && content.trim()) {
      const newPost = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        date: new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
      }
      setPosts([newPost, ...posts])
      setTitle('')
      setContent('')
    }
  }

  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a href="/" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Home
          </a>
          <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        </div>

        {/* Blog post form */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Write a New Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your blog post title..."
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                placeholder="Write your blog post content here..."
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Publish Post
            </button>
          </form>
        </div>

        {/* Display blog posts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Recent Posts</h2>
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <div className="text-gray-700 whitespace-pre-wrap">{post.content}</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}