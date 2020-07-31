const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1vpIytb0bjB-_056Jet8BCVWTIql2AOBbtlp_LaNvFZY')


const run = async() => {
    try{
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:B3')
        console.log(sheet.title)
        const mostrarPromocaoCell = sheet.getCell(2, 0)
        console.log(mostrarPromocaoCell.value)
        const mostrarTextoCell = sheet.getCell(2, 1)
        console.log(mostrarTextoCell.value)
    }catch (err) {
        console.log(err)
    }
}
run()