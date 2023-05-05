const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async getOne(req, res) {
        const {id} = req.params
        const brand = await Brand.findOne(
            {
                where: {id},
        
            }
        )
        return res.json(brand); 
    }

    async delete(req, res, next) {
        try {
            const {name} = req.body;
            const brand = await Brand.findOne({
                where: {
                    name: name
                 }
            });
            if (brand) {
              await brand.destroy();
              res.send("Успешно удалено");
            } else {
            next(ApiError.badRequest('Такого бренда не найдено!'))
            }
        }  catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    
}

module.exports = new BrandController()