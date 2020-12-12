import Link from 'next/link'
import { isMobile } from 'react-device-detect'
import styles from '../styles/photo.module.css'
import Masonry from 'react-masonry-css'

export default function Photos({ photosData }) {
  const items = isMobile ? (
    photosData.map((photo) => {
      return (
        <Link key={photo.id} href={`posts/${photo.id}`}>
          <img
            className={styles.listImage}
            src={`/photos/${photo.id}.jpg`}
          />
        </Link>
      )
    })
  ) : (
    photosData.map((photo) => {
      return (
        <Link
          key={photo.id}
          href={`/?postId=${photo.id}`}
          as={`/posts/${photo.id}`}
        >
          <img
            className={styles.listImage}
            src={`/photos/${photo.id}.jpg`}
          />
        </Link>
      )
    })
  )

  const breakpoint = {
    default: 3,
    700: 1
  }

  return (
    <Masonry
      breakpointCols={breakpoint}
      className={styles.masonryGrid}
      columnClassName='my-masonry-grid_column'
    >
      {items}
    </Masonry>
  )
}
