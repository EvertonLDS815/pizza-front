import Link from 'next/link';
import {useContext} from 'react';
import styles from './styles.module.scss';

import {FiLogOut} from 'react-icons/fi';
import { AuthContext } from '@/contexts/authContext';

export function Header() {

    const {signOut} = useContext(AuthContext);

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <img src="/logo.svg" width={190} height={60} />
                </Link>

                <nav className={styles.menuNav}>
                    <Link href="/category">
                        <span>Categoria</span>
                    </Link>
                    <Link href="/product">
                        <span>Cardápio</span>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color="#fff" size={24} />
                    </button>
                </nav>
            </div>
        </header>
    )
}