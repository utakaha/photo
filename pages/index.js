import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Masonry from 'react-masonry-css'
import Layout from '../components/layout'
import Post from '../components/post'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

export default function Home({ allPostsData }) {
  const router = useRouter()

  const childElements = allPostsData.map((post) => {
    return (
      <Link
        key={post.id}
        href={`/?postId=${post.id}`}
        as={`/posts/${post.id}`}
      >
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

      <Modal
        isOpen={!!router.query.postId}
        onRequestClose={() => router.push('/')}
      >
        <Post id={router.query.postId} />
      </Modal>

      <main>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={utilStyles.masonryGrid}
          columnClassName='my-masonry-grid_column'
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
