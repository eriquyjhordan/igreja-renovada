import Bible from '@/components/Blible'
import Family from '@/components/Family'
import Header from '@/components/header'
import Events from '@/components/Events'
import styles from '../styles/Home.module.css'
import SocialActions from '@/components/SocialActions'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className={styles.familyWrapper}>
        <Header />
        <Family />
      </div>
      <Bible />
      <SocialActions />
      <Events />
      <Footer />
    </>
  )
}
