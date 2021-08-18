import Link from 'next/link'
import { isMobile } from 'react-device-detect'
import styles from '../styles/photo.module.css'

export default function Photos({ photosData }) {
  const separateColumnPhotos = (() => {
    const leftColumn = []
    const centerColumn = []
    const rightColumn = []

    const leftNum = 1
    const centerNum = 2
    const rightNum = 3
    let tmpNum = 1

    photosData.forEach((photo) => {
      switch (tmpNum) {
        case leftNum:
          leftColumn.push(photo)
          break
        case centerNum:
          centerColumn.push(photo)
          break
        case rightNum:
          rightColumn.push(photo)
          break
      }

      tmpNum++
      if (tmpNum > rightNum) tmpNum = leftNum
    })

    return [leftColumn, centerColumn, rightColumn]
  })()

  const items = isMobile
    ? photosData.map((photo) => {
        return (
          <Link key={photo.id} href={`posts/${photo.id}`}>
            <img className={styles.listImage} src={`/photos/${photo.id}.jpg`} />
          </Link>
        )
      })
    : separateColumnPhotos.map((photos, index) => {
        return (
          <div key={index}>
            {photos.map((photo) => {
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
            })}
          </div>
        )
      })

  return <div className={styles.masonryGrid}>{items}</div>
}
