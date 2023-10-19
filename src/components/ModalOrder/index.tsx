import Modal from 'react-modal'
import styles from './styles.module.scss';

import { FiX } from 'react-icons/fi';
import {OrderItemProps} from '../../pages/dashboard';
interface ModalOrderProps {
    isOpen: boolean;
    onRequestClose: () => void;
    order: OrderItemProps[];
}
export function ModalOrder({isOpen, onRequestClose, order}: ModalOrderProps) {

    const customStyles = {
        content: {
            top: '50%',
            bottom: 'auto',
            left: '50%',
            right: 'auto',
            padding: '24px',
            backgroundColor: '#1d1d2e',
            transform: 'translate(-50%, -50%)',
            borderRadius: '0.8rem',
        }
    }

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        >

            <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
            style={{background: 'transparent', border: 0, float: 'right', marginTop: '6px'}}
            >
                <FiX size={38} color="#f34748" />
            </button>

            <div className={styles.container}>
                <h2>Detalhes do pedido</h2>
                <span className={styles.table}>
                    Mesa: <strong>{order[0]?.order.table}</strong>
                </span>

                {order.map( item => (
                    <section key={item.id} className={styles.containerItem}>
                        <span>{item.amount} - <strong>{item.product.name}</strong></span>
                        <span className={styles.description}>{item.product.description}</span>
                    </section>
                ))}

                <button className={styles.buttonOrder}>Concluir pedido</button>

            </div>
            
        </Modal>
    )
}