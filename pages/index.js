import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Masonry from 'react-masonry-css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  const childElements = allPostsData.map((post) => {
    return (
      <Link href={`posts/${post.id}`}>
        <img
          className={utilStyles.listImage}
          src={`/images/${post.image}`}
        />
      </Link>
    );
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Masonry breakpointCols={3} style={{display: 'flex'}}>
          {childElements}
        </Masonry>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
