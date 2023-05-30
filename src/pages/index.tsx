import Bible from '@/components/Blible'
import Family from '@/components/Family'
import Header from '@/components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.familyWrapper}>
        <Header />
        <Family />
      </div>
      <Bible />
    </>
  )
}
