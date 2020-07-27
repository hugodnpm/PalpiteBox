import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <p className='mt-6 text-center'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir a sua opnião
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar Opinião ou Sugestão</a>
                </Link>
            </div>  
            <p className='my-6 text-center'>
                Mensagem desconto.
            </p>          
        </div>
    )

}

export default Index