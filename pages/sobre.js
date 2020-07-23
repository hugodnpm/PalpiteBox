import React from 'react'
import Link from 'next/link'

const Sobre = () => {
    return (
        <div>
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