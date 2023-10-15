import Head from "next/head";
import {Header} from '../../components/Header';
import styles from './styles.module.scss';
import { FormEvent, useState } from "react";

export default function category() {

    const [name, setName] = useState('');

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        alert(`Categoria "${name}" cadastrada`)
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