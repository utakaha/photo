import utilStyles from '../styles/utils.module.css'
import Masonry from 'react-masonry-css'
import Layout from '../components/layout'
import Post from '../components/post'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { isBrowser, isMobile } from 'react-device-detect'

Modal.setAppElement('#__next')

export default function Home({ allPostsData }) {
  const router = useRouter()

  const childElements = allPostsData.map((post) => {
    if (isMobile) {
      return (
        <Link key={post.id} href={`posts/${post.id}`}>
          <img
            className={utilStyles.listImage}
            src={`/images/${post.image}`}
          />
        </Link>
      )
    } else {
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
      )
    }
  });

  const breakpointColumnsObj = {
    default: 3,
    700: 1
  };

  return (
    <Layout home>
      <Modal
        isOpen={!!router.query.postId}
        onRequestClose={() => router.push('/')}
        className={utilStyles.modal}
      >
        <Post id={router.query.postId} />
      </Modal>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={utilStyles.masonryGrid}
        columnClassName='my-masonry-grid_column'
      >
        {childElements}
      </Masonry>
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
