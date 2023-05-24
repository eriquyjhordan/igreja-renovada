import { Inter, Poppins } from 'next/font/google'
import Image from 'next/image'
import styles from './styles.module.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], })

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <Image
              src="/images/logo-branca-sem-fundo.svg"
              width={137}
              height={89}
              alt='logo igreja renovada'
              className={styles.logo}
            />
            <nav className={`${inter.className} ${styles.linksContainer}`}>
              <a href="#" className={styles.link}>Início</a>
              <a href="#" className={styles.link}>Sobre</a>
              <a href="#" className={styles.link}>Estudos Biblícos</a>
              <a href="#" className={styles.link}>Hinário</a>
              <a href="#" className={styles.loginButton}>Login</a>
            </nav>
            <a href="#" className={styles.hambugerMenu}>
              <Image
                src="/images/round-menu.svg"
                alt='Hamburguer menu'
                width={40}
                height={40}
              />
            </a>
          </header>
          <section className={styles.titleWrapper}>
            <h1 className={`${inter.className} ${styles.title}`}>Tudo o que tem vida louve o Senhor!</h1>
            <p className={`${poppins.className} ${styles.subTitle}`}>Comprometidos em pregar e viver as Sagradas Escrituras, com o objetivo de restaurar a Família, adorar a Deus e socorrer os necessitados.</p>
          </section>
        </div>
        <div className={styles.principles}>
          <a href="#">
            <div className={styles.principleItem}>
              <Image
                src="/images/family.svg"
                width={72}
                height={51.53}
                alt="familia"
                className={styles.principleImage}
              />
              <p className={`${inter.className} ${styles.principlesText}`}>Família</p>
            </div>
          </a>
          <a href="#">
            <div className={styles.principleItem}>
              <Image
                src="/images/bible.svg"
                width={144}
                height={24}
                alt="evangelismo"
                className={`${styles.evangelismImage} ${styles.principleImage}`}
              />
              <p className={`${inter.className} ${styles.principlesText}`}>Evangelismo</p>
            </div>
          </a>
          <a href="#">
            <div className={styles.principleItem}>
              <Image
                src="/images/heart.svg"
                width={72}
                height={52}
                alt="Ação Social"
                className={styles.principleImage}

              />
              <p className={`${inter.className} ${styles.principlesText}`}>Ação social</p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
