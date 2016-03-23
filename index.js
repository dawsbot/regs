'use strict';
module.exports = {
  yeoman: (flags) => {
    if (flags) {
      return new RegExp('<%=?\\s([^=>]*)\\s%>', flags);
    }
    return new RegExp('<%=?\\s([^=>]*)\\s%>');
  }
};
