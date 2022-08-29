const joi = require('joi');

const nameValidador = (name) => {
  if (typeof name !== 'string') return { message: 'name precisa ser um string' };
  return name;
};

module.exports = {
  nameValidador,
};