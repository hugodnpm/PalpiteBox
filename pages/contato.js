import React from 'react'
import Link from 'next/link'

const Contato = () => {
    return (
        <div>
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