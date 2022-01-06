'use strict';

module.exports = {
  randint: (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
  },
};
