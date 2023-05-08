const { Device, BasketDevice, Basket } = require("../models/models")
const ApiError = require('../error/ApiError');

class BasketController {
 
    async addToBasket(req,res,next){
        const user = req.user
        const {deviceId} = req.body
        const basket = await BasketDevice.create({basketId : user.id, deviceId : deviceId})
        return res.json(basket)
    }

    async getBasketUser(req,res){
        const {id} = req.user
        const basket = await BasketDevice.findAll({include: {
                model: Device
            }, where: {basketId: id}})

        return res.json(basket)
    }

    async deleteFromBasket(req, res, next) {
        try {
            const {id} = req.body;
            const device = await BasketDevice.findOne({
                where: {
                    id:id
                 }
            });
            if (device) {
              await device.destroy();
              res.send("Успешно удалено");
            } else {
            next(ApiError.badRequest('Такого устройства не найдено!'))
            }
        }  catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new BasketController()