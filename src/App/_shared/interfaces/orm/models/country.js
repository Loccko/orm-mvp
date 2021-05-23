import { Model } from "@vuex-orm/core"
import Continent from "./continent"

export default class Country extends Model{
  static entity = 'country'
  static fields(){
    return {
      code: this.attr(null),
      name: this.attr(null), 
      phone: this.attr(''),
      capital: this.attr(''),
      currency:this.attr(''),
      continent: this.hasOne(Continent, 'name')
    }
  }
}