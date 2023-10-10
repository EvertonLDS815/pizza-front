import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';
import logoImg from '../../../public/logo.svg';

import {Input} from '../../components/ui/input';
import { Button } from '../../components/ui/button';

import Link from 'next/link'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Faça seu Cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image className={styles.logoImage} src={logoImg} alt="logo sujeito pizzaria" />
        
        <div className={styles.login}>
        <h1>Criando sua conta</h1>
          <form>
            <Input type="text" placeholder="Digite seu nome" />
            <Input type="text" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button type="submit" loading={false} >Cadastrar</Button>
          </form>

          <Link href="/" legacyBehavior>
            <a className={styles.text}>Já possui uma conta? Faça seu login</a>
          </Link>
        </div>
      </div>
    </>
  )
}
