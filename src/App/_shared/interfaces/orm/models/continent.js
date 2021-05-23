import { Model } from "@vuex-orm/core"

export default class Continent extends Model{
  static entity = 'continent'
  static fields(){
    return {
      code: this.attr(null),
      name: this.attr(null), 
      countries: this.hasMany(Country, 'code')
    }
  }
}