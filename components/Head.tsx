import Head from 'next/head'

const CustomHead = ({
  // Although these parameters are required, they don't work well in MDX files.
  // So, the default parameters are added here.
  title = 'Sha Mwe La',
  description = "Sha Mwe La's website",
  keywords = 'sha mwe la, shamwela, shamwela.com',
  imageUrl = '/images/sha-mwe-la-open-graph.png',
}: {
  title: string
  description: string
  keywords: string
  imageUrl: string
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:alt' content={title} />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta name='twitter:description' content={description} />

      <meta name='keywords' content={keywords} />
      <meta property='og:url' content='https://www.shamwela.com/' />

      <meta name='image' content={imageUrl} />
      <meta property='og:image' content={imageUrl} />
      <meta name='twitter:image' content={imageUrl} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@shamwela_' />
      <meta name='twitter:site' content='@shamwela_' />

      <meta property='og:type' content='blog' />
    </Head>
  )
}

export default CustomHead
