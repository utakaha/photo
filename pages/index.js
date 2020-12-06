import utilStyles from '../styles/utils.module.css'
import Masonry from 'react-masonry-css'
import Layout from '../components/layout'
import Post from '../components/post'
import { getPhotosData } from '../lib/posts'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { isMobile } from 'react-device-detect'

Modal.setAppElement('#__next')

export default function Home({ allPhotosData }) {
  const router = useRouter()

  const childElements = allPhotosData.map((photo) => {
    if (isMobile) {
      return (
        <Link key={photo.id} href={`posts/${photo.id}`}>
          <img
            className={utilStyles.listImage}
            src={`/photos/${photo.id}.jpg`}
          />
        </Link>
      )
    } else {
      return (
        <Link
          key={photo.id}
          href={`/?postId=${photo.id}`}
          as={`/posts/${photo.id}`}
        >
          <img
            className={utilStyles.listImage}
            src={`/photos/${photo.id}.jpg`}
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
  const allPhotosData = getPhotosData()
  return {
    props: {
      allPhotosData
    }
  }
}
