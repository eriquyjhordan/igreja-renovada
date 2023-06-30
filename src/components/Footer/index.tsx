import { Inter, Poppins } from 'next/font/google'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], })

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <Image
            src="/images/logo-branca-sem-fundo.svg"
            width={137}
            height={89}
            alt='logo igreja renovada'
            className={styles.logo}
          />
          <p className={styles.description}>Comprometidos em pregar e viver as Sagradas Escrituras, com o objetivo de restaurar a Família, adorar a Deus e socorrer os necessitados.</p>
          <h4 className={styles.socialNetworkTitle}>Siga nossas redes sociais:</h4>
          <div className={styles.socialNetworkWrapper}>
            <div className={styles.instagran}>
              <a href="" target="_blank" rel="noreferrer noopener">
              <BsInstagram size={24} color="#fff"/>
              </a>
            </div>
            <div className={styles.facebook}>
              <a href="" target="_blank" rel="noreferrer noopener">
              <BsFacebook size={24} color="#fff"/>
              </a>
            </div>
            <div className={styles.youtube}>
              <a href="" target="_blank" rel="noreferrer noopener">
              <BsYoutube size={24} color="#fff"/>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.institutional}>
          <h4 className={styles.title}>Institucional</h4>
          <nav className={styles.links}>
            <a href="#">Departamento de Família</a>
            <a href="#">Estudos bíblicos</a>
            <a href="#">Ações Sociais</a>
            <a href="#">Próximos Eventos</a>
          </nav>
        </div>
        <div className={styles.membersLinks}>
          <h4 className={styles.title}>Area para Membros</h4>
          <nav className={styles.links}>
            <a href="#">Hinário</a>
            <a href="#">Kit de ensaio</a>
            <a href="#">Motivos de oração</a>
          </nav>
        </div>
        <div className={styles.contact}>
          <Link href="" className={styles.login}>Login</Link>
          <a href="" className={styles.picpay}>
            <Image
              src='/simple-icons_picpay.svg'
              alt='picpay logo'
              width={20}
              height={20}
            />
            Faça uma Doação
          </a>
          <a href="" className={styles.contactLink}>Entre em contato</a>
        </div>        
      </div>
      <hr style={{ maxWidth: '76rem', margin: '0 auto' }}  /> 
      <div>
        <div className={styles.copyright}>
          <p className={styles.church}>2022 &copy; Todos os direitos reservados. <span className={styles.churchName}>Igreja Renovada</span></p>
          <p className={styles.developer}>Desenvolvido por: <a href="" className={styles.personalWebsite}>Eriquy Jhordan</a></p>
        </div>
      </div>
    </footer>
  )
}