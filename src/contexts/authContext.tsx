import {createContext, ReactNode, useState, useEffect} from 'react';
import {api} from '../services/apiClient';

import {destroyCookie, setCookie, parseCookies} from 'nookies';
import Router from 'next/router';

import {toast} from 'react-toastify';
type AuthContextData = {
    user?: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    // signUp: (credentials: SignUpProps) => Promise<void>
}
type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

/* type SignUpProps = {
    name: string;
    email: string;
    password: string;
} */
export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
    try {
        destroyCookie(undefined, '@nextauth.token');
        Router.push('/');
    } catch (err) {
        console.log('Erro ao deslogar');
    }
}
export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    useEffect(() => {
        // Tentar pegar algo na nookie
        const {'@nextauth.token': token} = parseCookies()

        if (token) {
            api.get('/me').then(response => {
                const {id, name, email} = response.data;

                setUser({
                    id,
                    name,
                    email
                })
            })
            .catch(() => {
                // Se deu erro deslogamos o user
                signOut();
            })
        }
    }, [])

    async function signIn({email, password}: SignInProps) {
        try {
            const response = await api.post('/session', {
                email,
                password
            });

            // console.log(response.data)

            const {id, name, token} = response.data
            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, // expira em um mês
                path: "/" // quais caminhos terão acesso ao cookie
            });

            setUser({
                id,
                name,
                email
            });

            // passar as próximas requisições ao nosso token

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            // Redirecionar o user para a /dashboard
            toast.success('Logado com sucesso!');

            Router.push('/dashboard');
            
        } catch(err) {
            toast.error('Usuário/Senha inválida!');
            console.log(`Erro no ${err}`);
        }
    }

    /* async function signUp({name, email, password}: SignUpProps) {
        try {
            const response = await api.post('/users', {
                name,
                email,
                password
            });

            toast.success('Conta criada com sucesso!');

            Router.push('/');
        } catch (err) {
            toast.error('Erro ao cadastrar');
            console.log('Erro: ', err);
        }
    } */

    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut, /* signUp */}}>
            {children}
        </AuthContext.Provider>
    )
}