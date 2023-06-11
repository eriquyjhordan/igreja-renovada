import { Inter, Poppins } from 'next/font/google'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], })

export default function SocialActions() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={`${poppins.className} ${styles.leadText}`}>Ações Sociais</p>
        <div className={styles.header}>
          <h2 className={`${inter.className} ${styles.title}`}>O meu mandamento é este: Amem-se uns aos outros como eu os amei.</h2>
          <Link
            href="#"
            className={`${poppins.className} ${styles.actionsButton}`}
          >
            Veja nossas ações
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.images}>
            <Image
              src='/images/fotos-cultos/IMG-20230522-3.webp'
              alt=''
              width={385}
              height={588}
              className={styles.mainImage}
            />
            <div className={styles.asideImages}>
              <div className={styles.empityBox}></div>
              <Image
                src='/images/fotos-cultos/IMG-20230522-4.webp'
                alt=''
                width={183}
                height={283}
                className={styles.asideImg}
              />
              <Image
                src='/images/fotos-cultos/IMG-20230522-8.webp'
                alt=''
                width={183}
                height={283}
                className={`${styles.lastImage} ${styles.asideImg}`}
              />
            </div>
          </div>
          <div className={styles.textWrapper}>
            <p className={`${poppins.className} ${styles.text}`}>
              Cristo proferiu muitos ensinos sobre a prática da justiça e da misericórdia
              (Mt 5.6-7; 19.21; 23.23), especialmente através de suas parábolas (Mt 25.34-40).
              Acima de tudo, ele exerceu misericórdia, socorrendo continuamente os sofredores
              (Mt 4.23; 9.2,6,36; 12.9-13; 14.14,19; 15.30). À semelhança do Antigo Testamento,
              Jesus insistiu que meras palavras e atos externos de religiosidade não são suficientes
              na vida com Deus (Mt 7.21-23), e sim os frutos, a prática da fé (vv. 16-20,24).
            </p>
          </div>
        </div>
        <Image
          src='/ilustracaoEstetoscopio.webp'
          alt=''
          width={93}
          height={93}
          className={styles.estetoscopio}
        />
      </div>
    </div>
  )
}