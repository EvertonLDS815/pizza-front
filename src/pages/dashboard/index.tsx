import { Header } from '@/components/Header';
import {canSSRAuth} from '../../utils/canSSRAuth';
import Head from 'next/head';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';
import styles from './styles.module.scss';

export default function Dashboard() {
    const {user} = useContext(AuthContext);

    return (
        <>
        <Head>
            <title>Painel - Sujeito Pizzaria</title>
        </Head>
        <Header />
            <h1 className={styles.title}>Olá {user?.name}</h1>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }
})