import fs from 'fs'
import path from 'path'
import { photos } from './photos'

const postsDirectory = path.join(process.cwd(), 'public/photos')

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    const id = fileName.replace(/\.jpg$/, '')
    return {
      id
    }
  })
}

export function getPhotosData() {
  return photos.map(({id, unsplash, date}, i) => {
    return {
      id,
      unsplash,
      date
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.jpg$/, '')
      }
    }
  })
}
