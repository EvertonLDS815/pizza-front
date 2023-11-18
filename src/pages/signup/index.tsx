/* import {useState, FormEvent, useContext} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';
import logoImg from '../../../public/logo.svg';
import {toast} from 'react-toastify';

import {Input} from '../../components/ui/input';
import { Button } from '../../components/ui/button';

import {AuthContext} from '../../contexts/authContext';

import Link from 'next/link'

export default function SignUp() {
  const {signUp} = useContext(AuthContext)
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    try {
      
      if (name === '' || email === '' || password === '') {
        throw new Error('Preencha todos os campos')
      }
  
      setLoading(true);
  
      let data = {
        name,
        email,
        password
      }
  
      await signUp(data);
  
      setLoading(false);
    } catch (err: any) {
      console.log(err.message);
      toast.warning(err.message);
    }

  }

  return (
    <>
      <Head>
        <title>Faça seu Cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image className={styles.logoImage} src={logoImg} alt="logo sujeito pizzaria" />
        
        <div className={styles.login}>
        <h1>Criando sua conta</h1>
          <form onSubmit={handleSignUp}>
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
            <Input
              type="email"
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
            <Button type="submit" loading={loading} >Cadastrar</Button>
          </form>

          <Link href="/" legacyBehavior>
            <a className={styles.text}>Já possui uma conta? Faça seu login</a>
          </Link>
        </div>
      </div>
    </>
  )
}
 */