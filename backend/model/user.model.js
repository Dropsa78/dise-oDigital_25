
import{Schema, model} from 'mongoose'
const esquemaDrogas = new Schema({

    name:{
        type:String
    }

})
export const modeloDrogas = new model('drogas', esquemaDrogas) //literal exportamos a controladores el tipo de dato que creamos en modelo