import VuexORM from '@vuex-orm/core'
import CountryModel from "@/App/_shared/interfaces/orm/models/country"
import ContinentModel from "@/App/_shared/interfaces/orm/models/continent"

const db = new VuexORM.Database()

db.register(ContinentModel)
db.register(CountryModel)


export default VuexORM.install(db)