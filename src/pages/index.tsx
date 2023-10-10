import Head from 'next/head';
import Image from 'next/image'
import styles from '../../styles/home.module.scss';
import logoImg from '../../public/logo.svg';

import {Input} from '../components/ui/input';
import { Button } from '@/components/ui/button';

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujeito Pizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image className={styles.logoImage} src={logoImg} alt="logo sujeito pizzaria" />
        
        <div className={styles.login}>
          <form>
            <Input type="text" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button type="submit" loading={false} >Acessar</Button>
          </form>

          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  )
}
