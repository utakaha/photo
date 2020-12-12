import { useState } from 'react'
import styles from '../styles/header.module.css'
import Link from 'next/link'

export default function Header() {
  const [mobileNavShown, setMobileNavShown] = useState(false)
  const toggle = () => setMobileNavShown(!mobileNavShown)

  return (
    <div className={styles.navbar}>
      <header className={styles.header}>
        <h1>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PHOTOGRAPHY.
          </Link>
        </h1>

        <nav className={styles.desktopNav}>
          <Link href="https://instagram.com/iavivai">
            <a rel="noopener noreferrer" target="_blank" className={styles.navItem}>Instagram</a>
          </Link>
          <Link href="https://unsplash.com/@iavivai">
            <a rel="noopener noreferrer" target="_blank" className={styles.navItem}>Unsplash</a>
          </Link>
          <Link href="https://iavivai.com/about">
            <a rel="noopener noreferrer" target="_blank" className={styles.navItem}>ABOUT</a>
          </Link>
        </nav>

        <span className={styles.toggle} onClick={toggle}>
          ▼
        </span>
      </header>

      <nav className={`${styles.mobileNav} ${mobileNavShown ? styles.active : ''}`}>
        <Link href="https://instagram.com/iavivai">
          <a rel="noopener noreferrer" target="_blank" className={styles.navItem}>Instagram</a>
        </Link>
        <Link href="https://unsplash.com/@iavivai">
          <a rel="noopener noreferrer" target="_blank" className={styles.navItem}>Unsplash</a>
        </Link>
        <Link href="https://iavivai.com/about">
          <a rel="noopener noreferrer" target="_blank" className={styles.navItem}>ABOUT</a>
        </Link>
      </nav>
    </div>
  )
}
