module.exports = {
    "extends": "standard",
    "plugins": [
      "standard",
      "promise"
    ],
    "globals"   : {
      /* testing globals */
      "pending"    : false,
      "browser"    : false,
      "expect"     : false,
      "describe"   : false,
      "it"         : false,
      "before"     : false,
      "beforeEach" : false,
      "after"      : false,
      "afterEach"  : false
  }
};
