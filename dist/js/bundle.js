(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.U4bi = global.U4bi || {})));
}(this, (function (exports) { 'use strict';

class Basic{
    constructor(type){
        this._type = type;

        this.init();

    }

    init(){
        console.log('basic init');
    };

    get type(){
        return this._type;
    }

    load(){
        return 'load '+this._type;
    }
}

exports.Basic = Basic;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9CYXNpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmFzaWN7XG4gICAgY29uc3RydWN0b3IodHlwZSl7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnYmFzaWMgaW5pdCcpO1xuICAgIH07XG5cbiAgICBnZXQgdHlwZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG5cbiAgICBsb2FkKCl7XG4gICAgICAgIHJldHVybiAnbG9hZCAnK3RoaXMuX3R5cGU7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNLEtBQUs7SUFDZCxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1FBRWxCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7S0FFZjs7SUFFRCxJQUFJLEVBQUU7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzdCOztJQUVELElBQUksSUFBSSxFQUFFO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3JCOztJQUVELElBQUksRUFBRTtRQUNGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDN0I7LDs7LDs7LDs7In0=
