const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1vpIytb0bjB-_056Jet8BCVWTIql2AOBbtlp_LaNvFZY')


const run = async() => {
    try{
       await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        await sheet.addRow({
            Nome: 'Hugo Carvalho',
            Email: 'hugosc@gmail.com',
            Whatsapp: '21 99999999',
            Cupom: 'desconto 10%',
            Promo: 'opnião' 
        })
    }catch (err){
        console.log(err)
    }
}
run()