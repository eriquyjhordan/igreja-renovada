import { Inter, Poppins } from 'next/font/google'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], })

export default function EventsCards() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src='/images/piquenic.webp'
          alt="event image"
          width={742}
          height={414}
          className={styles.eventImage}
        />
        <div className={`${poppins.className} ${styles.infos}`}>
          <p className={`${poppins.className} ${styles.date}`}>Dom, 21 Ago · 09:00</p>
          <h3 className={`${inter.className} ${styles.title}`}>Piquenique em Família</h3>
          <p className={`${poppins.className} ${styles.location}`}>Parque Pedra da Cebola</p>
          <p className={`${poppins.className} ${styles.description}`}>Cada família deve levar um prato e uma bebida. Somos uma grande família e iremos celebrar juntos 😉Não esqueça de levar sua toalha de piquenique(um tecido para forrar no chão)♥️</p>
          <a href='#' className={`${poppins.className} ${styles.mapLink}`}>Veja no Mapa</a>
        </div>
      </div>

    </div>
  )
}