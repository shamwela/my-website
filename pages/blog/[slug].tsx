import Head from 'components/Head'
import { allBlogs } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { getMDXComponents } from 'utilities/getMDXComponents'
import { getImageProperties } from 'utilities/plaiceholder'
import type { Blog } from 'contentlayer/generated'
import type { ImageProperty } from 'types/imageProperty'

export const getStaticPaths = () => {
  const paths = allBlogs.map((blog) => ({ params: { slug: blog.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const blog = allBlogs.find((blog) => blog.slug === context.params.slug)
  const imagesProperties = await getImageProperties()

  return {
    props: {
      blog,
      imagesProperties,
    },
  }
}

const BlogPage = ({
  blog,
  imagesProperties,
}: {
  blog: Blog
  imagesProperties: ImageProperty[]
}) => {
  const Component = useMDXComponent(blog.body.code)
  if (!blog) {
    return <p>Sorry. Couldn't find this blog on the server.</p>
  }
  const { title, imageUrl, date, formattedDate } = blog
  const MDXComponents = getMDXComponents(imagesProperties)

  return (
    <>
      <Head title={title} imageUrl={imageUrl} date={date} />
      <h1>{title}</h1>
      <p>{formattedDate}</p>

      <Component components={MDXComponents} />
    </>
  )
}

export default BlogPage
