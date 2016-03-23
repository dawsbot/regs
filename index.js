'use strict';
const expressions = require('./expressions.json');

const flagHandler = (regexType, flags) => {
  if (expressions[regexType]) {
    if (flags) {
      return new RegExp(expressions[regexType], flags);
    }
    return new RegExp(expressions[regexType]);
  }
  throw new Error(`RegExpType "${regexType}" not found`);
};

module.exports = {
  yeoman: (flags) => {
    return flagHandler('yeoman', flags);
  },
  trim: (flags) => {
    return flagHandler('trim', flags);
  },
  email: (flags) => {
    return flagHandler('email', flags);
  }
};
