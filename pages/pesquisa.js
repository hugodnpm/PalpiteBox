import React, {useState} from 'react'
import PageTitle from '../components/PageTitle'


const Pesquisa = () => {
    const [ form, setForm ] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })
    const notas = [0,1,2,3,4,5]
    const [sucess, setSucess ] = useState(false)
    const [ retorno, setRetorno] = useState({})
    const save = async() => {
        
        try {
            const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
            })

            const data = await response.json()
            setSucess(true)
            setRetorno(data)
            
        } catch(err){

        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
        
    }

    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa'/>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
            <p className='text-center my-6'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir a sua opnião 
            </p>
            {!sucess && <div className='w-1/5 mx-auto'>
                <label>Seu Nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>
                <label>Seu E-mail:</label>
                <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='E-mail'onChange={onChange} name='Email'value={form.email}/>
                <label>Seu WhatsApp:</label>
                <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='WhatsApp' onChange={onChange} name='Whatsapp' value={form.Whatsapp}/>
                <label>Nota:</label>
                <div className='flex py-6'>
                {notas.map(nota => {
                    return (
                        <label className='block w-1/6 text-center'>
                            {nota} <br/>
                            <input type='radio' name='Nota' value={nota} onChange={onChange}/>
                        </label>
                    )            
                })}
                </div>
            
                <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'onClick={save}>Salvar</button>
    
            </div>}
            {sucess && <div className='w-1/2 mx-auto'>
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 role=alert'>Obrigado por contribuir com sua sugestão ou crítica</p>
                {
                    retorno.showCoupon && <div className='text-center border p-4 rounded-lg'>
                        Seu cupom: <br/>
                        <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                        </div>
                }
                {
                    retorno.showCoupon && <div className='text-center border p-4 rounded-lg'>
                        
                        <span className='font-bold block md-2'>{retorno.Promo}</span>
                        <br/>
                        Tire um print ou foto desta tela e apresente ao garçon!
                        </div>
                }

                </div>}
        </div>

    )
}

export default Pesquisa