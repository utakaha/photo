import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    // TODO
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <main>
        <h1>{postData.title}</h1>
        <div>
          <p>{postData.date}</p>
        </div>
        <img
          src={`/images/${postData.image}`}
          className={utilStyles.image}
          alt={postData.title}
        />
      </main>
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
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
