import { Inter, Poppins } from 'next/font/google'
import styles from './styles.module.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], })

export default function Family() {
  return (
    <>
      <div className={styles.content}>
        <section className={styles.faithWrapper}>
          <h3 className={`${inter.className} ${styles.faithTitle}`}>Tudo se inicia pela Fé</h3>
          <p className={`${poppins.className} ${styles.faithDescription}`}>Pela fé, entendemos que o universo foi formado pela palavra de Deus, de maneira que o visível veio a existir das coisas que não são visíveis.</p>
        </section>
        <hr className={styles.faithLine} />
        <section className={styles.familyWrapper}>
          <div className={styles.imagesGalery}>
            Galeria de imagens
          </div>
          <div className={styles.familyTexts}>
            <p className={`${poppins.className} ${styles.familyLeadText}`}>Família é a base de tudo</p>
            <h2 className={`${inter.className} ${styles.familyTitle}`}>Eu e a minha casa serviremos ao SENHOR!</h2>
            <p className={`${poppins.className} ${styles.familyParagraph}`}>Na Igreja Renovada, consideramos a família como a base fundamental de todos os valores morais e espirituais que transmitimos a futuras gerações. É por isso que o versículo de Josué 24:15 é tão importante para nós: &ldquo;Eu e minha casa serviremos ao Senhor&ldquo;.</p>
            <p className={`${poppins.className} ${styles.familyParagraph}`}>Como ensinado por Jesus em Lucas 8:21, &ldquo;… minha mãe e meus irmãos são aqueles que ouvem a palavra de Deus e a põem em prática.&ldquo; Viver conforme a palavra de Deus em casa e fora dela, colocando em prática seus princípios, é fundamental para que a promessa em Atos 16:31 se torne realidade em nossas vidas: &ldquo;... Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.&ldquo;</p>
            <a href="#" className={`${poppins.className} ${styles.familyLink}`}>
              Conheça nosso departamento de Famílias
              <Image 
                src='/images/arrow-right.svg'
                alt="arrow right"
                width={20}
                height={20}
              />
            </a>
          </div>
        </section>
      </div>
    </>
  )
}