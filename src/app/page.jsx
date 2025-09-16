import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CRUD Completo</h1>
      <p className={styles.subtitle}>
        Sistema completo de gerenciamento de dados com todas as operações CRUD
      </p>
      
      <nav className={styles.nav}>
        <Link href="/get" className={`${styles.navLink} ${styles.getLink}`}>
          <span className={styles.icon}>📋</span>
          GET
        </Link>
        
        <Link href="/post" className={`${styles.navLink} ${styles.postLink}`}>
          <span className={styles.icon}>➕</span>
          POST
        </Link>
        
        <Link href="/put" className={`${styles.navLink} ${styles.putLink}`}>
          <span className={styles.icon}>✏️</span>
          PUT
        </Link>
        
        <Link href="/delete" className={`${styles.navLink} ${styles.deleteLink}`}>
          <span className={styles.icon}>🗑️</span>
          DELETE
        </Link>
      </nav>

      <div className={styles.description}>
        <p>
          Explore as diferentes operações CRUD para gerenciar comentários. 
          Cada seção oferece funcionalidades específicas para criar, ler, 
          atualizar e deletar dados de forma intuitiva e eficiente.
        </p>
      </div>
    </div>
  );
}