import Head from 'next/head';
import Image from 'next/image'
import styles from '../../styles/home.module.scss';
import logoImg from '../../public/logo.svg';
import {useContext, FormEvent, useState} from 'react';

import {Input} from '../components/ui/input';
import { Button } from '@/components/ui/button';

import {AuthContext} from '../contexts/authContext'

import Link from 'next/link'

export default function Home() {
  const {signIn} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '') {
      alert("Preencha todos os dados!!");
      return;
    }

    setLoading(true);

    let data = {
      email,
      password
    }

    await signIn(data);

    setLoading(false);
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
            <Input
              type="text"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Digite sua senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={loading} >Acessar</Button>
          </form>

          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  )
}
