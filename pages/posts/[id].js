import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds } from '../../lib/posts'

export default function PostPage({ id }) {
  return (
    <Layout>
      <img
        src={`/photos/${id}.jpg`}
        className={utilStyles.image}
      />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
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
