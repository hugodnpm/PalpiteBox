import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
    return (
        <div>
            <PageTitle title='Contato'/>
            <h1>Contato</h1>
            <div>
                <Link href='/'>
                    <a>Home  |</a>
                </Link>
                <Link href='/sobre'>
                    <a>Sobre  |</a>
                </Link>
                <Link href='/pesquisa'>
                    <a>Pesquisa</a>
                </Link>
            </div>

        </div>
    )
}
export default Contato