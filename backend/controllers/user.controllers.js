import { modeloDrogas } from "../model/user.model.js";// llamando el modelo de la bd


export const test = ()=>{
    console.log('se llamo bien el controler')
}
modeloDrogas.create({
    name:"Mota"
})
