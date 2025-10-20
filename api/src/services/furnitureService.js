import Furniture from "../models/Furniture.js"

export default {
    create(furnitureData, ownerId) {
        return Furniture.create({
            ...furnitureData,
            _ownerId: ownerId
        })
    },
    getAll(filter) {
        return Furniture.find(filter).select({ description: true, price: true, img: true, })
    },

    getOne(furnitureId) {
        return Furniture.findById(furnitureId)
    },

    update(furnitureId, furnitureData) {
        return Furniture.findByIdAndUpdate(furnitureId, furnitureData, { runValidators: true })
    },
    delete(furnitreuId) {
        return Furniture.findByIdAndDelete(furnitreuId)
    }

}