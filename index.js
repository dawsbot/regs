'use strict';
const expressions = require('./expressions.json');
const duplichar = require('duplichar');

const flagHandler = (regexType, flags, opts) => {
  if (expressions.hasOwnProperty(regexType)) {
    if (typeof flags !== 'undefined') {
      if (typeof opts !== 'undefined') {
        return new RegExp(duplichar(expressions[regexType], opts.position, opts.multiplier), flags);
      }
      return new RegExp(expressions[regexType], flags);
    }
    if (typeof opts !== 'undefined') {
      return new RegExp(duplichar(expressions[regexType], opts.position, opts.multiplier));
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
  },
  githubIssue: (flags) => {
    return flagHandler('githubIssue', flags);
  },
  markdownHeader: (multiplier, flags) => {
    const opts = {};
    opts.multiplier = multiplier || 1;
    opts.position = 1;
    return flagHandler('markdownHeader', flags, opts);
  }
};
