const uuid = require('uuid')
const path = require('path');
const {Device, DeviceInfo} = require('../models/models');
const ApiError = require('../error/ApiError');
const { response } = require('express');


class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, editorData} = req.body
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName, data: editorData})
            return res.json(device)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {name} = req.body;
            const device = await Device.findOne({
                where: {
                    name: name
                 }
            });
            if (device) {
              await device.destroy(); 
              res.sendStatus(204);
            } else {
            next(ApiError.badRequest('Устройство с таким именем не найдено!'))
            }
        }  catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
       
            
        const {brandId, typeId} = req.query
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAll()
        }
        if (brandId && !typeId) {
            devices = await Device.findAll({where:{brandId: brandId}})
        }
        if (!brandId && typeId) {
            devices = await Device.findAll({where:{typeId: typeId}})
        }
        if (brandId && typeId) {
            devices = await Device.findAll({where:{brandId, typeId}});

        }
        return res.json(devices)
  
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id}
            }
        )
        return res.json(device); 
    }
}

module.exports = new DeviceController()