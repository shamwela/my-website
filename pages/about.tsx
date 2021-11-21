import Head from 'components/Head'
import Image from 'next/image'
import ShaMweLaPhoto from 'public/images/sha-mwe-la-photo.jpg'

const About = () => {
  return (
    <>
      <Head
        title='About Sha Mwe La'
        description='Get to know Sha Mwe La'
        keywords='about, sha mwe la, shamwela, sha mwe'
        imageUrl='/images/sha-mwe-la-open-graph.png'
      />

      <h1>Hi, I'm Sha Mwe La.</h1>

      <div className='md:w-52'>
        <Image
          src={ShaMweLaPhoto}
          width={750}
          height={750}
          alt='Sha Mwe La'
          placeholder='blur'
          quality={100}
          priority={true}
          className='rounded-full'
        />
      </div>

      <p>
        I love building web and mobile apps. You can see my projects on{' '}
        <a href='https://github.com/shamwela' target='_blank' rel='noopener'>
          GitHub
        </a>
        . I also blog to help beginners and share my opinions. I'm also learning
        Software Engineering at GUSTO University. I live in Yangon, Myanmar.
      </p>

      <a
        href='mailto:shamwela@hotmail.com'
        target='_blank'
        rel='noopener'
        className='button'
      >
        Email me
      </a>
    </>
  )
}

export default About
