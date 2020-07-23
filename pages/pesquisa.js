import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return (
        <div>
            <h1>Pesquisa</h1>
            <div>
                <Link href='/'>
                    <a>Home  |</a>
                </Link>
                <Link href='/sobre'>
                    <a>Sobre  |</a>
                </Link>
                <Link href='/contato'>
                    <a>Contato</a>
                </Link>
            </div>
        </div>

    )
}

export default Pesquisa