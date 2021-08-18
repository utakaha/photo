import homeStyles from '../styles/home.module.css'
import Layout from '../components/layout'
import ModalPhoto from '../components/modal-photo'
import { getPhotosData } from '../lib/photo'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import Photos from '../components/photos'

Modal.setAppElement('#__next')

export default function Home({ allPhotosData }) {
  const router = useRouter()

  return (
    <Layout home>
      <Modal
        isOpen={!!router.query.postId}
        onRequestClose={() => router.push('/')}
        className={homeStyles.modal}
      >
        <ModalPhoto id={router.query.postId} />
      </Modal>

      <Photos photosData={allPhotosData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPhotosData = getPhotosData()
  return {
    props: {
      allPhotosData,
    },
  }
}
