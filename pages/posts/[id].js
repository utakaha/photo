import Layout from '../../components/layout'
import styles from '../../styles/photo.module.css'
import { getAllPhotoIds } from '../../lib/photo'
import Link from 'next/link'

export default function PostPage({ id }) {
  return (
    <Layout>
      <div className={styles.unsplash}>
        <Link href={`https://unsplash.com/photos/${id}`}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.unsplashLink}
          >
            Unsplash
          </a>
        </Link>
      </div>
      <img
        src={`/photos/${id}.jpg`}
        className={styles.image}
      />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPhotoIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.id
  return {
    props: {
      id
    }
  }
}
