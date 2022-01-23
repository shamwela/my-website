import type { BlogMeta } from 'types/blog'
import Head from 'components/Head'
import Link from 'next/link'
import { getAllBlogsMeta } from 'functions/MDX'
import { useEffect, useState } from 'react'

export const getStaticProps = async () => {
  const blogs = getAllBlogsMeta()

  const nestedAndDuplicatedTopics = blogs.map(({ topics }) => topics)
  const duplicatedTopics = nestedAndDuplicatedTopics.flat()
  const topics = [...new Set(duplicatedTopics)]

  return { props: { blogs, topics } }
}

const Blog = ({ blogs, topics }: { blogs: BlogMeta[]; topics: string[] }) => {
  const [query, setQuery] = useState('')
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)

  useEffect(() => {
    if (selectedTopics.length === 0) {
      setFilteredBlogs(blogs)
    } else {
      const filteredBlogs = blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query.toLowerCase()) &&
          blog.topics.some((topic) => selectedTopics.includes(topic))
      )

      setFilteredBlogs(filteredBlogs)
    }
  }, [blogs, query, selectedTopics])

  const handleTopicsChange = (event) => {
    if (event.target.checked) {
      const { value } = event.target

      setSelectedTopics((previousTopics) => {
        const topics = [...previousTopics, value]
        const uniqueTopics = topics.filter(
          (value, index, array) => array.indexOf(value) === index
        )
        return uniqueTopics
      })
    } else {
      const { value } = event.target

      setSelectedTopics((previousTopics) => {
        const topics = previousTopics.filter((topic) => topic !== value)
        return topics
      })
    }
  }

  return (
    <>
      <Head
        title="Sha Mwe La's blog"
        description="Sha Mwe La's blog"
        imageUrl='/images/sha-mwe-la-open-graph.png'
      />

      <h1>Blog</h1>

      <input
        placeholder='Search blogs'
        aria-label='Search blogs'
        type='search'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <h2>Search blog by topics</h2>

      <section className='flex flex-wrap gap-x-4'>
        {topics.map((topic) => (
          <span key={topic}>
            <input
              id={topic}
              value={topic}
              onChange={handleTopicsChange}
              type='checkbox'
              // Implement this later
              // aria-checked='false'
              className='cursor-pointer'
            />
            <label htmlFor={topic} className='cursor-pointer'>
              {topic}
            </label>
          </span>
        ))}
      </section>

      {filteredBlogs.length === 0 && (
        <p>No blogs found. Please search other stuffs.</p>
      )}
      {filteredBlogs.map(({ slug, title, readingTime }) => (
        <article key={slug} className='flex flex-col'>
          <Link href={'/blog/' + slug}>
            <a>
              <span className='font-bold'>{title}</span>
            </a>
          </Link>
          <span>{readingTime}</span>
        </article>
      ))}
    </>
  )
}

export default Blog
