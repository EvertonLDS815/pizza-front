import Head from 'next/head';
import Image from 'next/image'
import styles from '../../styles/home.module.scss';
import logoImg from '../../public/logo.svg';

import {Input} from '../components/ui/input';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujeito Pizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="logo sujeito pizzaria" />
      </div>
      
      <div className={styles.login}>
        <form>
          <Input type="text" placeholder="Digite seu email" />
          <Input type="password" placeholder="Digite sua senha" />
        </form>
      </div>
    </>
  )
}
