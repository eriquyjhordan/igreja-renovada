import Image from 'next/image';
import styles from './styles.module.css'

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Image 
        style={{ borderRadius: '16px 0px 0px 0px' }} 
        className={styles.square}
        src="/images/fotos-cultos/IMG-20230522-1.webp"
        alt="galery image from the church"
        width={120}
        height={120} 
      />
      <div style={{ backgroundColor: '#216095' }} className={styles.square}></div>
      <div style={{ backgroundColor: '#008BC5' }} className={styles.square}></div>
      <Image 
        style={{ borderRadius: '0px 16px 0px 0px' }} 
        className={styles.square}
        src="/images/fotos-cultos/IMG-20230522-2.webp"
        alt="galery image from the church"
        width={120}
        height={120} 
      />
      <div style={{ backgroundColor: '#9E181F' }} className={styles.square}></div>
      <Image 
        className={styles.square}
        src="/images/fotos-cultos/IMG-20230522-3.webp"
        alt="galery image from the church"
        width={120}
        height={120} 
      />
      <Image 
        className={styles.square}
        src="/images/fotos-cultos/IMG-20230522-4.webp"
        alt="galery image from the church"
        width={120}
        height={120} 
      />
      <Image 
        className={styles.square}
        src="/images/fotos-cultos/IMG-20230522-5.webp"
        alt="galery image from the church"
        width={120}
        height={120} 
      />
      <Image 
        className={styles.square}
        src="/images/fotos-cultos/IMG-20230522-6.webp"
        alt="galery image from the church"
        width={120}
        height={120} 
      />
      <div style={{ backgroundColor: '#008BC5' }} className={styles.square}></div>
      <Image 
        className={styles.square}
        src="/images/fotos-cultos/IMG-20230522-7.webp"
        alt="galery image from the church"
        width={120}
        height={120} 
      />
      <div style={{ backgroundColor: '#9E181F' }} className={styles.square}></div>
      <div style={{ backgroundColor: '#6AD1B3', borderRadius: '0px 0px 0px 16px' }} className={styles.square}></div>
      <Image 
        className={styles.square}
        src="/images/fotos-cultos/IMG-20230522-8.webp"
        alt="galery image from the church"
        width={120}
        height={120} 
      />
      <div style={{ backgroundColor: '#216095' }} className={styles.square}></div>
      <Image 
        style={{ borderRadius: '0px 0px 16px 0px' }}
        className={styles.square}
        src="/images/fotos-cultos/IMG-20230522-4.webp"
        alt="galery image from the church"
        width={120}
        height={120} 
      />
    </div>
  )
}
