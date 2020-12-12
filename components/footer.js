import styles from '../styles/footer.module.css'
import { NAME } from '../lib/constants'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        © {NAME}, All rights reserved
      </div>
    </footer>
  )
}
