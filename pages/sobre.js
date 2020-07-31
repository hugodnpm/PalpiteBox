import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre'/>
            <h1>Sobre</h1>
            <div>
                <Link href='/'>
                    <a>Home  |</a>
                </Link>
                <Link href='/contato'>
                    <a>Contato  |</a>
                </Link>
                <Link href='/pesquisa'>
                    <a>Pesquisa</a>
                </Link>
            </div>
        </div>

    )
}

export default Sobre