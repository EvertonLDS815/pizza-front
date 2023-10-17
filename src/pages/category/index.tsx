import Head from "next/head";
import {Header} from '../../components/Header';
import styles from './styles.module.scss';
import { FormEvent, useState } from "react";

import {setupAPIClient} from '../../services/api';
import { toast } from "react-toastify";
import {canSSRAuth} from '../../utils/canSSRAuth';

export default function category() {

    const [name, setName] = useState('');

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (name === '') {
            toast.warning('Digite uma Categoria!');
            return;
        };

        const apiClient = setupAPIClient();
        await apiClient.post('/category', {
            name: name
        });

        toast.success('Categoria cadastrada com sucesso!');
        setName('');
    }

    return (
        <>
            <Head>
                <title>Nova Categoria - Sujeito Pizzaria</title>
            </Head>
            <Header />

            <main className={styles.container}>
                <h1>Cadastrar Categorias</h1>

                <form className={styles.form} onSubmit={handleRegister}>
                    <input 
                    type="text"
                    placeholder="Digite sua categoria"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <button className={styles.buttonAdd} type="submit">
                        Cadastrar
                    </button>
                </form>
            </main>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }
})