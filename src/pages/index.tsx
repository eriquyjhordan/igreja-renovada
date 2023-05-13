import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], })

export default function Home() {
  return (
    <>
      <h1 className={poppins.className}>First commit</h1>
    </>
  )
}
