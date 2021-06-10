const { ObjectId } = require('bson');
const service = require('../services/productService');
const {unprocessableEntity} = require('../messages/messageCodes');
const {wrong, invalidData} = require('../messages');
const {objectError} = require('../helpers');
const findByProductId = async (id) => {

  if (!ObjectId.isValid(id)) return {
    code: unprocessableEntity,
    message: objectError(invalidData, wrong)
  };

  const product = await service.findByProductId(id);

  if (!product) return {
    code: unprocessableEntity,
    message: objectError(invalidData, wrong)
  };

  return product;
};

module.exports = {
  findByProductId,
};