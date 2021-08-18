export const NAME = 'utakaha'
export const SITE_TITLE = `@${NAME}'s photography`
export const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://photos.utakaha.com'
    : 'http://localhost:3000'
export const SITE_DESCRIPTION = `@${NAME} の写真をまとめたサイト`
