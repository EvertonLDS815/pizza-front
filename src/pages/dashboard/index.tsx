import { Header } from '@/components/Header';
import {canSSRAuth} from '../../utils/canSSRAuth';
import Head from 'next/head';
import { useState } from 'react';
import styles from './styles.module.scss';
import { FiRefreshCcw } from 'react-icons/fi';

import {setupAPIClient} from '../../services/api';

import {ModalOrder} from '../../components/ModalOrder';

import Modal from 'react-modal';

type OrderProps = {
    id: string;
    table: string | number;
    status: boolean;
    draft: boolean;
    name: string | null;
}
interface HomeProps {
    orders: OrderProps[];
}

export type OrderItemProps = {
    id: string;
    amount: number;
    order_id: string;
    product_id: string;
    product: {
        id: string;
        name: string;
        description: string;
        price: string;
        banner: string;
    }
    order: {
        id: string;
        table: string | number;
        status: boolean;
        name: string | null;
    }
}
export default function Dashboard({orders}: HomeProps) {
    const [orderList, setOrderList] = useState(orders || []);

    const [modaItem, setModalItem] = useState<OrderItemProps[]>();
    const [modalVisible, setIsModalVisible] = useState(false);

    function handleCloseModal() {
        setIsModalVisible(false);
    }

    async function handleOpenModalView(id: string) {
        const apiClient = setupAPIClient();

        const response = await apiClient.get('/order/detail', {
            params: {
                order_id: id,
            }
        });

        setModalItem(response.data);
        setIsModalVisible(true);
    }

    Modal.setAppElement('#__next');

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

                {orderList.map((item) => (
                <section key={item.id} className={styles.orderItem}>
                    <button onClick={() => handleOpenModalView(item.id)}>
                        <div className={styles.tag}></div>
                        <span>Mesa {item.table}</span>
                    </button>
                </section>

                ))}


            </article>
        </main>

        {modalVisible && (
            <ModalOrder />
        )}
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx: any) => {

    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/orders')

    return {
        props: {
            orders: response.data
        }
    }
})