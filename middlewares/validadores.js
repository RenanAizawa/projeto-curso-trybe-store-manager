const joi = require('joi');
const st = require('./stringsToUse');

const nameValidador = (name) => {
  const validador = joi.string().min(1).max(255).required
    .message({
      'string.base': st.STRING_BASE,
      'string.empty': st.STRING_EMPTY,
      'string.min': st.STRING_MIN,
      'string.max': st.STRING_MAX,
    });
  const { error } = validador.validate(name);
  if (error === undefined) {
    return name;
  } 
  return {
    message: error.details[0].message,
  };
};

module.exports = {
  nameValidador,
};