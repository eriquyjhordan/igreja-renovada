import { Inter, Poppins } from 'next/font/google'
import styles from './styles.module.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'], })

export default function Family() {
  return (
    <a href='#' style={{ padding: '1rem 0' }}>
      <Image 
        src='/rectangle.png'
        alt=''
        width={383}
        height={225}
        className={styles.cardImage}
      />
      <h3 className={`${poppins.className} ${styles.cardTitle}`}>Assunto biblico</h3>
      <p className={`${poppins.className} ${styles.cardText}`}>
        Pequena descrição do estudo biblico para chamar a atenção do usuário, é necessário ser sucinto
      </p>
    </a>
  )
}