import React from 'react'

const Footer = () => {
    return(
    <div className='bg-gray-700 p-4 mt-10'>
        <div className='container mx-auto text-center font-bold text-white'>
            Projeto desenvolvido por: 
            <a className='hover:underline' href="https://hugo-resume-zeta.vercel.app/"> Hugo Carvalho </a>/
            <a className='hover:underline' href="https://www.linkedin.com/in/dev-hugo-carvalho/"> Likedin</a> /
            <a className='hover:underline' href="https://github.com/hugodnpm"> GitHub</a> 
        </div>
    </div>
    )
}
export default Footer