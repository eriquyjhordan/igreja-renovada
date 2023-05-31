import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import styles from './styles.module.css'
import BlogCard from '../BlogCard'


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], })

export default function Bible() {
  return (
    <div className={styles.container}>
      <div className={styles.blogHeader}>
        <div>
          <p className={`${poppins.className} ${styles.blogLead}`}>Blog</p>
          <h3 className={`${inter.className} ${styles.blogTitle}`}>Estudos Biblicos</h3>
        </div>
        <a href='#' className={`${poppins.className} ${styles.blobLink}`}>
          <Image 
            src='/blog-icon.svg'
            alt='blog icon'
            width={20}
            height={20}
            style={{marginLeft: '0.625rem'}}
          />
          Veja todos os estudos
        </a>
      </div>
      <div className={styles.slides}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}