import styles from './styles.module.css'

export default function Gallery() {
  return (
    <div className={styles.container}>
      <div style={{ borderRadius: '16px 0px 0px 0px' }} className={styles.square}></div>
      <div style={{ backgroundColor: '#216095' }} className={styles.square}></div>
      <div style={{ backgroundColor: '#008BC5' }} className={styles.square}></div>
      <div style={{ borderRadius: '0px 16px 0px 0px' }} className={styles.square}></div>
      <div style={{ backgroundColor: '#9E181F' }} className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div style={{ backgroundColor: '#008BC5' }} className={styles.square}></div>
      <div className={styles.square}></div>
      <div style={{ backgroundColor: '#9E181F' }} className={styles.square}></div>
      <div style={{ backgroundColor: '#6AD1B3', borderRadius: '0px 0px 0px 16px' }} className={styles.square}></div>
      <div className={styles.square}></div>
      <div style={{ backgroundColor: '#216095' }} className={styles.square}></div>
      <div style={{ borderRadius: '0px 0px 16px 0px' }} className={styles.square}></div>
    </div>
  )
}