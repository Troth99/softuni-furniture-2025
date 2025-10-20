import Furniture from "../models/Furniture.js"

export default {
    create(furnitureData){
       return Furniture.create(furnitureData)
    },
    getAll(){
        return Furniture.find().select({description: true, price: true, img: true,})
    },

    getOne(furnitureId){
        return Furniture.findById(furnitureId)
    }


}