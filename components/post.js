import utilStyles from '../styles/utils.module.css'
import useSWR from 'swr'
import { SITE_URL } from '../lib/constants'

const fetcher = (id) =>
      fetch(
        `${SITE_URL}/api/posts/${id}`
      ).then((response) => response.json());

export default function Post({ id }) {
  const { data, error } = useSWR(id, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className={utilStyles.modalItem}>
      <div className={utilStyles.imgContener}>
        <img
          src={`/images/${data.image}`}
          className={utilStyles.modalImage}
          alt={data.title}
        />
      </div>
    </div>
  )
}
