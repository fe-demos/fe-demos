//

function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
          };
    return _setPrototypeOf(o, p);
}
var Rectangle = function Rectangle(w, h) {
    this.w = w;
    this.h = h;
};

var Square = /*#__PURE__*/ (function (_Rectangle) {
    _inheritsLoose(Square, _Rectangle);
    function Square(side) {
        var _this;
        _this = _Rectangle.call(this, side, side) || this;
        _this.side = side;
        return _this;
    }
    return Square;
})(Rectangle);
