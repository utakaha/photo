import styles from '../styles/photo.module.css'
import useSWR from 'swr'
import fetch from 'node-fetch'
import { SITE_URL } from '../lib/constants'
import Link from 'next/link'
import { SiUnsplash } from 'react-icons/si'

const fetcher = (id) =>
  fetch(`${SITE_URL}/api/posts/${id}`).then((response) => response.json())

export default function ModalPhoto({ id }) {
  const { data, error } = useSWR(id, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className={styles.modalItem}>
      <div className={styles.imgContener}>
        <img src={`/photos/${data.id}.jpg`} className={styles.modalImage} />
      </div>

      <div className={styles.unsplashButton}>
        <Link href={`https://unsplash.com/photos/${data.id}`}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.unsplashLink}
          >
            <SiUnsplash className={styles.icon} size={18} />
            Unsplash
          </a>
        </Link>
      </div>
    </div>
  )
}
