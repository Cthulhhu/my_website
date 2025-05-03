'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  const pathname = usePathname();
  
  // Determine which CSS class to use based on the current path
  const getHeaderClass = () => {
    switch(pathname) {
      case '/about':
        return styles.aboutHeader;
      case '/contact':
        return styles.contactHeader;
      case '/projects':
        return styles.projectsHeader;
      default:
        return styles.homeHeader;
    }
  };
  
  return (
    <header className={`${styles.header} ${getHeaderClass()}`}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>HOME</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>ABOUT</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>CONTACT</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects" className={styles.navLink}>MY PROJECTS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}