import { Header } from '@/components/Header';
import {canSSRAuth} from '../../utils/canSSRAuth';
import Head from 'next/head';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';
import styles from './styles.module.scss';
import { FiRefreshCcw } from 'react-icons/fi';

export default function Dashboard() {
    const {user} = useContext(AuthContext);

    return (
        <>
        <Head>
            <title>Painel - Sujeito Pizzaria</title>
        </Head>
        <Header />
        <main className={styles.container}>
            <div className={styles.containerHeader}>
                <h1>Últimos pedidos</h1>
                <button>
                    <FiRefreshCcw size={25} color="#3fffa3" />
                </button>
            </div>

            <article className={styles.listOrders}>

                <section className={styles.orderItem}>
                    <button>
                        <div className={styles.tag}></div>
                        <span>Mesa 20</span>
                    </button>
                </section>

            </article>
        </main>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }
})