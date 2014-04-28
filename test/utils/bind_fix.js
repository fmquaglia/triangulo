/**
 * This function helps to fix the lack of Function.bind in phantomJS
 * This is meant to be used in the context of Karma Testing
 * This is an adaptation the node module function-bind https://github.com/Raynos/function-bind
 *
 * @param that
 * @returns {bound}
 */

Function.prototype.bind = function bind(that) {
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var slice = Array.prototype.slice;
  var target = this;
  if (typeof target !== "function") {
    throw new TypeError(ERROR_MESSAGE + target)
  }
  var args = slice.call(arguments, 1);

  return function bound() {
    if (this instanceof bound) {
      var F = function() {};
      F.prototype = target.prototype;
      var self = new F();

      var result = target.apply(
        self,
        args.concat(slice.call(arguments))
      );
      if (Object(result) === result) {
        return result;
      }
      return self;
    } else {
      return target.apply(
        that,
        args.concat(slice.call(arguments))
      )
    }
  }
};
