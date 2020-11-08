import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Masonry from 'react-masonry-css'
import Layout from '../components/layout'
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

  const breakpointColumnsObj = {
    default: 3,
    768: 1
  };

  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={utilStyles.masonryGrid}
        >
          {childElements}
        </Masonry>
      </main>
    </Layout>
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
