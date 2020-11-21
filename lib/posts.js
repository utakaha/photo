import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'public/photos')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.jpg$/, '')
    const fullPath = path.join(postsDirectory, fileName)

    return {
      id
    }
  })

  // TODO: exifでソート
  return allPostsData.sort((a, b) => {
    if (a.id < b.id) {
      return 1
    } else {
      return -1
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
