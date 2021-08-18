import { photos } from './photos'

export function getPhotosData() {
  return photos.map(({ id, unsplash, date }) => {
    return {
      id,
      unsplash,
      date,
    }
  })
}

export function getAllPhotoIds() {
  return photos.map(({ id, _ }) => {
    return {
      params: {
        id: id,
      },
    }
  })
}
