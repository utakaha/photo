import { useState } from 'react'
import styles from '../styles/header.module.css'
import Link from 'next/link'
import { SiInstagram, SiUnsplash } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'

export default function Header() {
  const [mobileNavShown, setMobileNavShown] = useState(false)
  const toggle = () => setMobileNavShown(!mobileNavShown)

  return (
    <div className={styles.navbar}>
      <header className={styles.header}>
        <h1>
          <Link href="/" target="_blank" rel="noopener noreferrer">
            PHOTOGRAPHY.
          </Link>
        </h1>

        <nav className={styles.desktopNav}>
          <Link href="https://instagram.com/yukitakaiha">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={styles.navItem}
            >
              <SiInstagram className={styles.icon} size={24} />
              Instagram
            </a>
          </Link>
          <Link href="https://unsplash.com/@utakaha">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={styles.navItem}
            >
              <SiUnsplash className={styles.icon} size={20} />
              Unsplash
            </a>
          </Link>
          <Link href="https://utakaha.com/about">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={styles.navItem}
            >
              <CgProfile className={styles.icon} size={26} />
              ABOUT
            </a>
          </Link>
        </nav>

        <span className={styles.toggle} onClick={toggle}>
          ▼
        </span>
      </header>

      <nav
        className={`${styles.mobileNav} ${mobileNavShown ? styles.active : ''}`}
      >
        <Link href="https://instagram.com/yukitakaiha">
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={styles.navItem}
          >
            <SiInstagram className={styles.icon} size={16} />
            Instagram
          </a>
        </Link>
        <Link href="https://unsplash.com/@utakaha">
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={styles.navItem}
          >
            <SiUnsplash className={styles.icon} size={16} />
            Unsplash
          </a>
        </Link>
        <Link href="https://iavivai.com/about">
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={styles.navItem}
          >
            <CgProfile className={styles.icon} size={16} />
            ABOUT
          </a>
        </Link>
      </nav>
    </div>
  )
}
