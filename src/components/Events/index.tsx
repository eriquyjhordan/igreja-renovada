import { Inter, Poppins } from 'next/font/google'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'
import EventsCards from '../EventsCards'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], })

export default function Events() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={`${poppins.className} ${styles.leadText}`}>Participe conosco dos</p>
          <h3 className={`${inter.className} ${styles.title}`}>Próximos Eventos</h3>
        </div>
        <div className={styles.cards}>
          <EventsCards />
        </div>
      </div>
    </div>
  )
}