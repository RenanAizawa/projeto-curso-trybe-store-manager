const st = require('./stringsToUse');

const mini5 = (name) => {
  if (name.length < 5) {
    return {
      message: st.STRING_MIN,
      code: 422,
    };
  }
  
  return name;
};

const empty = (name) => {
  if (name.length === 0) {
    return {
      message: st.STRING_EMPTY,
      code: 400,
    };
  }
  
  return mini5(name);
};

const noName = (name) => {
  if (name === undefined) {
    return {
      message: st.STRING_EMPTY,
      code: 400,
    };
  }
  return empty(name);
};

const nameValidador = (name) => noName(name);

module.exports = {
  nameValidador,
};