/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </header>

  );
}
