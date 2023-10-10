import Head from 'next/head';
import Image from 'next/image'
import styles from '../../styles/home.module.scss';
import logoImg from '../../public/logo.svg';
import {useContext, FormEvent} from 'react';

import {Input} from '../components/ui/input';
import { Button } from '@/components/ui/button';

import {AuthContext} from '../context/authContext'

import Link from 'next/link'

export default function Home() {
  const {signIn} = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: 'evertonlino1234@gmail.com',
      password: 'evertonqq123'
    }

    await signIn(data)
  }
  return (
    <>
      <Head>
        <title>Sujeito Pizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image className={styles.logoImage} src={logoImg} alt="logo sujeito pizzaria" />
        
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
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
