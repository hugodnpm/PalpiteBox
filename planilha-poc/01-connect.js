const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1vpIytb0bjB-_056Jet8BCVWTIql2AOBbtlp_LaNvFZY')


const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
}
run()