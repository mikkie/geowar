(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _statesBootJs = require("./states/Boot.js");

var _statesBootJs2 = _interopRequireDefault(_statesBootJs);

var _statesPreloadJs = require("./states/Preload.js");

var _statesPreloadJs2 = _interopRequireDefault(_statesPreloadJs);

var _statesStartScreenJs = require("./states/StartScreen.js");

var _statesStartScreenJs2 = _interopRequireDefault(_statesStartScreenJs);

var _statesGameJs = require("./states/Game.js");

var _statesGameJs2 = _interopRequireDefault(_statesGameJs);

var game;

window.onload = function () {
                       game = new Phaser.Game(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, Phaser.AUTO, 'game');
                       game.state.add('boot', _statesBootJs2["default"]);
                       game.state.add('preload', _statesPreloadJs2["default"]);
                       game.state.add('startScreen', _statesStartScreenJs2["default"]);
                       game.state.add('game', _statesGameJs2["default"]);
                       game.state.start('boot');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs0QkFFaUIsa0JBQWtCOzs7OytCQUNmLHFCQUFxQjs7OzttQ0FDakIseUJBQXlCOzs7OzRCQUNoQyxrQkFBa0I7Ozs7QUFMbkMsSUFBSSxJQUFJLENBQUM7O0FBT1QsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZO0FBQzFCLDJCQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3RGLE1BQU0sQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQ3pGLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUMsMkJBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sNEJBQU0sQ0FBQztBQUM1QiwyQkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUywrQkFBUyxDQUFDO0FBQ2xDLDJCQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLG1DQUFhLENBQUM7QUFDMUMsMkJBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sNEJBQU0sQ0FBQztBQUM1QiwyQkFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDMUIsQ0FBQyIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdhbWU7XG5cbmltcG9ydCBCb290IGZyb20gXCIuL3N0YXRlcy9Cb290LmpzXCI7XG5pbXBvcnQgUHJlbG9hZCBmcm9tIFwiLi9zdGF0ZXMvUHJlbG9hZC5qc1wiO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gXCIuL3N0YXRlcy9TdGFydFNjcmVlbi5qc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc3RhdGVzL0dhbWUuanNcIjtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgIFBoYXNlci5BVVRPLCAnZ2FtZScpO1xuICBnYW1lLnN0YXRlLmFkZCgnYm9vdCcsQm9vdCk7XG4gIGdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkJyxQcmVsb2FkKTtcbiAgZ2FtZS5zdGF0ZS5hZGQoJ3N0YXJ0U2NyZWVuJyxTdGFydFNjcmVlbik7XG4gIGdhbWUuc3RhdGUuYWRkKCdnYW1lJyxHYW1lKTtcbiAgZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xufTtcbiJdfQ==
},{"./states/Boot.js":11,"./states/Game.js":12,"./states/Preload.js":13,"./states/StartScreen.js":14}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _UtilsJs = require('./Utils.js');

var _UtilsJs2 = _interopRequireDefault(_UtilsJs);

var CanvasHelper = (function () {
    function CanvasHelper(canvas, json, colorSet) {
        _classCallCheck(this, CanvasHelper);

        this.canvas = canvas;
        this.texture = json;
        this.colorSet = colorSet;
    }

    _createClass(CanvasHelper, [{
        key: 'drawTexture',
        value: function drawTexture() {
            this.ctx = this.canvas.ctx;
            this.ctx.beginPath();
            for (var key in this.texture) {
                this.updateCtxProp(this.texture[key].ctxProp);
                for (var i in this.texture[key].draw) {
                    var part = this.texture[key].draw[i];
                    var x = this.parseExpress(part.x);
                    var y = this.parseExpress(part.y);
                    if (part.drawType == 'move') {
                        this.ctx.moveTo(x, y);
                    } else if (part.drawType == 'line') {
                        this.ctx.lineTo(x, y);
                    } else if (part.drawType == 'arc') {
                        var radius = this.parseExpress(part.radius);
                        var arc = this.parseExpress(part.arc);
                        this.ctx.arc(x, y, radius, 0, arc, false);
                    }
                }
                this.ctx.closePath();
                if (this.texture[key].style == 'stroke') {
                    this.ctx.strokeStyle = this.getColor(key);
                    this.ctx.stroke();
                } else if (this.texture[key].style == 'fill') {
                    this.ctx.fillStyle = this.getColor(key);
                    this.ctx.fill();
                }
            }
        }
    }, {
        key: 'updateCtxProp',
        value: function updateCtxProp(ctxProp) {
            if (ctxProp) {
                for (var k in ctxProp) {
                    this.ctx[k] = ctxProp[k];
                }
            }
        }
    }, {
        key: 'getColor',
        value: function getColor(key) {
            if (this.colorSet && this.colorSet[key]) {
                return this.colorSet[key];
            }
            return _UtilsJs2['default'].generateRandomColor();
        }
    }, {
        key: 'parseExpress',
        value: function parseExpress(pos) {
            if (isNaN(pos) && /\$\{.*\}/.test(pos)) {
                pos = pos.replace(/canvas.height/gi, this.canvas.height).replace(/canvas.width/gi, this.canvas.width);
                pos = pos.substring(2, pos.length - 1);
                pos = eval(pos);
                return pos;
            }
            return pos;
        }
    }]);

    return CanvasHelper;
})();

exports['default'] = CanvasHelper;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9jb21tb24vQ2FudmFzSGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt1QkFBa0IsWUFBWTs7OztJQUVULFlBQVk7QUFFbEIsYUFGTSxZQUFZLENBRWpCLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzhCQUZuQixZQUFZOztBQUd6QixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNwQixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUM1Qjs7aUJBTmdCLFlBQVk7O2VBUWxCLHVCQUFHO0FBQ1YsZ0JBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDM0IsZ0JBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDckIsaUJBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUMxQixvQkFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLHFCQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ2xDLHdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyx3QkFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsd0JBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLHdCQUFJLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxFQUFFO0FBQ3pCLDRCQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3pCLE1BQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sRUFBRTtBQUM5Qiw0QkFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUN6QixNQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUU7QUFDN0IsNEJBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLDRCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0Qyw0QkFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDN0M7aUJBQ0o7QUFDRCxvQkFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNyQixvQkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUU7QUFDckMsd0JBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsd0JBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ3JCLE1BQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFDeEMsd0JBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsd0JBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ25CO2FBQ0o7U0FDSjs7O2VBR1ksdUJBQUMsT0FBTyxFQUFFO0FBQ25CLGdCQUFJLE9BQU8sRUFBRTtBQUNULHFCQUFLLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRTtBQUNuQix3QkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7U0FDSjs7O2VBSU8sa0JBQUMsR0FBRyxFQUFFO0FBQ1YsZ0JBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3JDLHVCQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7QUFDRCxtQkFBTyxxQkFBTSxtQkFBbUIsRUFBRSxDQUFDO1NBQ3RDOzs7ZUFHVyxzQkFBQyxHQUFHLEVBQUU7QUFDZCxnQkFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNwQyxtQkFBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RyxtQkFBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkMsbUJBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEIsdUJBQU8sR0FBRyxDQUFDO2FBQ2Q7QUFDRCxtQkFBTyxHQUFHLENBQUE7U0FDYjs7O1dBcEVnQixZQUFZOzs7cUJBQVosWUFBWSIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvY29tbW9uL0NhbnZhc0hlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tICcuL1V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzSGVscGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywganNvbiwgY29sb3JTZXQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGpzb247XG4gICAgICAgIHRoaXMuY29sb3JTZXQgPSBjb2xvclNldDtcbiAgICB9XG5cbiAgICBkcmF3VGV4dHVyZSgpIHtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50ZXh0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN0eFByb3AodGhpcy50ZXh0dXJlW2tleV0uY3R4UHJvcCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMudGV4dHVyZVtrZXldLmRyYXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHRoaXMudGV4dHVyZVtrZXldLmRyYXdbaV07XG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLnBhcnNlRXhwcmVzcyhwYXJ0LngpO1xuICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5wYXJzZUV4cHJlc3MocGFydC55KTtcbiAgICAgICAgICAgICAgICBpZiAocGFydC5kcmF3VHlwZSA9PSAnbW92ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgsIHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJ0LmRyYXdUeXBlID09ICdsaW5lJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcnQuZHJhd1R5cGUgPT0gJ2FyYycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl1cyA9IHRoaXMucGFyc2VFeHByZXNzKHBhcnQucmFkaXVzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyYyA9IHRoaXMucGFyc2VFeHByZXNzKHBhcnQuYXJjKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHJhZGl1cywgMCwgYXJjLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlW2tleV0uc3R5bGUgPT0gJ3N0cm9rZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuZ2V0Q29sb3Ioa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudGV4dHVyZVtrZXldLnN0eWxlID09ICdmaWxsJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ2V0Q29sb3Ioa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHVwZGF0ZUN0eFByb3AoY3R4UHJvcCkge1xuICAgICAgICBpZiAoY3R4UHJvcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBjdHhQcm9wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHhba10gPSBjdHhQcm9wW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGdldENvbG9yKGtleSkge1xuICAgICAgICBpZiAodGhpcy5jb2xvclNldCAmJiB0aGlzLmNvbG9yU2V0W2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yU2V0W2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFV0aWxzLmdlbmVyYXRlUmFuZG9tQ29sb3IoKTtcbiAgICB9XG5cblxuICAgIHBhcnNlRXhwcmVzcyhwb3MpIHtcbiAgICAgICAgaWYgKGlzTmFOKHBvcykgJiYgL1xcJFxcey4qXFx9Ly50ZXN0KHBvcykpIHtcbiAgICAgICAgICAgIHBvcyA9IHBvcy5yZXBsYWNlKC9jYW52YXMuaGVpZ2h0L2dpLCB0aGlzLmNhbnZhcy5oZWlnaHQpLnJlcGxhY2UoL2NhbnZhcy53aWR0aC9naSwgdGhpcy5jYW52YXMud2lkdGgpO1xuICAgICAgICAgICAgcG9zID0gcG9zLnN1YnN0cmluZygyLCBwb3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBwb3MgPSBldmFsKHBvcyk7XG4gICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NcbiAgICB9XG5cbn0iXX0=
},{"./Utils.js":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Utils = (function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: 'generateRandomColor',
        value: function generateRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }]);

    return Utils;
})();

exports['default'] = Utils;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9jb21tb24vVXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQixLQUFLO2FBQUwsS0FBSzs4QkFBTCxLQUFLOzs7aUJBQUwsS0FBSzs7ZUFDSSwrQkFBRztBQUN6QixnQkFBSSxPQUFPLEdBQUcsa0JBQWtCLENBQUM7QUFDakMsZ0JBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNoQixpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN4QixxQkFBSyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO0FBQ0QsbUJBQU8sS0FBSyxDQUFDO1NBQ2hCOzs7V0FSZ0IsS0FBSzs7O3FCQUFMLEtBQUsiLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL2NvbW1vbi9VdGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcbiAgICBzdGF0aWMgZ2VuZXJhdGVSYW5kb21Db2xvcigpIHtcbiAgICAgICAgdmFyIGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XG4gICAgICAgIHZhciBjb2xvciA9ICcjJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxufSJdfQ==
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _PlayerJs = require('./Player.js');

var _PlayerJs2 = _interopRequireDefault(_PlayerJs);

var _commonCanvasHelperJs = require('../common/CanvasHelper.js');

var _commonCanvasHelperJs2 = _interopRequireDefault(_commonCanvasHelperJs);

var _texturesPlayersCircleplayerJson = require('../textures/players/circleplayer.json');

var _texturesPlayersCircleplayerJson2 = _interopRequireDefault(_texturesPlayersCircleplayerJson);

var CirclePlayer = (function (_Player) {
    _inherits(CirclePlayer, _Player);

    function CirclePlayer() {
        _classCallCheck(this, CirclePlayer);

        _get(Object.getPrototypeOf(CirclePlayer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CirclePlayer, [{
        key: 'draw',
        value: function draw() {
            new _commonCanvasHelperJs2['default'](this.canvas, _texturesPlayersCircleplayerJson2['default']).drawTexture();
        }
    }]);

    return CirclePlayer;
})(_PlayerJs2['default']);

exports['default'] = CirclePlayer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL0NpcmNsZVBsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFtQixhQUFhOzs7O29DQUNQLDJCQUEyQjs7OzsrQ0FDN0IsdUNBQXVDOzs7O0lBRXpDLFlBQVk7Y0FBWixZQUFZOzthQUFaLFlBQVk7OEJBQVosWUFBWTs7bUNBQVosWUFBWTs7O2lCQUFaLFlBQVk7O2VBRXpCLGdCQUFHO0FBQ0gsa0RBQWlCLElBQUksQ0FBQyxNQUFNLCtDQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUQ7OztXQUpnQixZQUFZOzs7cUJBQVosWUFBWSIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvcHJlZmFicy9DaXJjbGVQbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBDYW52YXNIZWxwZXIgZnJvbSAnLi4vY29tbW9uL0NhbnZhc0hlbHBlci5qcyc7XG5pbXBvcnQgcGxheWVySnNvbiBmcm9tICcuLi90ZXh0dXJlcy9wbGF5ZXJzL2NpcmNsZXBsYXllci5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcblxuICAgIGRyYXcoKSB7XG4gICAgICAgIG5ldyBDYW52YXNIZWxwZXIodGhpcy5jYW52YXMscGxheWVySnNvbikuZHJhd1RleHR1cmUoKTtcbiAgICB9XG5cbn0iXX0=
},{"../common/CanvasHelper.js":2,"../textures/players/circleplayer.json":16,"./Player.js":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _WeaponJs = require('./Weapon.js');

var _WeaponJs2 = _interopRequireDefault(_WeaponJs);

var _commonUtilsJs = require('../common/Utils.js');

var _commonUtilsJs2 = _interopRequireDefault(_commonUtilsJs);

var _commonCanvasHelperJs = require('../common/CanvasHelper.js');

var _commonCanvasHelperJs2 = _interopRequireDefault(_commonCanvasHelperJs);

var _texturesWeaponsDirtweaponJson = require('../textures/weapons/dirtweapon.json');

var _texturesWeaponsDirtweaponJson2 = _interopRequireDefault(_texturesWeaponsDirtweaponJson);

var DirtWeapon = (function (_Weapon) {
    _inherits(DirtWeapon, _Weapon);

    function DirtWeapon() {
        _classCallCheck(this, DirtWeapon);

        _get(Object.getPrototypeOf(DirtWeapon.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DirtWeapon, [{
        key: 'createBullet',
        value: function createBullet() {
            this.bmd = this.game.make.bitmapData(12, 12);
            new _commonCanvasHelperJs2['default'](this.bmd, _texturesWeaponsDirtweaponJson2['default']).drawTexture();
        }
    }]);

    return DirtWeapon;
})(_WeaponJs2['default']);

exports['default'] = DirtWeapon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL0RpcnRXZWFwb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBbUIsYUFBYTs7Ozs2QkFDZCxvQkFBb0I7Ozs7b0NBQ2IsMkJBQTJCOzs7OzZDQUM3QixxQ0FBcUM7Ozs7SUFFdkMsVUFBVTtjQUFWLFVBQVU7O2FBQVYsVUFBVTs4QkFBVixVQUFVOzttQ0FBVixVQUFVOzs7aUJBQVYsVUFBVTs7ZUFFZix3QkFBRztBQUNYLGdCQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0Msa0RBQWlCLElBQUksQ0FBQyxHQUFHLDZDQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkQ7OztXQUxnQixVQUFVOzs7cUJBQVYsVUFBVSIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvcHJlZmFicy9EaXJ0V2VhcG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYXBvbiBmcm9tICcuL1dlYXBvbi5qcyc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vY29tbW9uL1V0aWxzLmpzJztcbmltcG9ydCBDYW52YXNIZWxwZXIgZnJvbSAnLi4vY29tbW9uL0NhbnZhc0hlbHBlci5qcyc7XG5pbXBvcnQgd2VhcG9uSnNvbiBmcm9tICcuLi90ZXh0dXJlcy93ZWFwb25zL2RpcnR3ZWFwb24uanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcnRXZWFwb24gZXh0ZW5kcyBXZWFwb257XG5cbiAgICBjcmVhdGVCdWxsZXQoKSB7XG4gICAgICAgIHRoaXMuYm1kID0gdGhpcy5nYW1lLm1ha2UuYml0bWFwRGF0YSgxMiwgMTIpO1xuICAgICAgICBuZXcgQ2FudmFzSGVscGVyKHRoaXMuYm1kLHdlYXBvbkpzb24pLmRyYXdUZXh0dXJlKCk7XG4gICAgfVxuXG59Il19
},{"../common/CanvasHelper.js":2,"../common/Utils.js":3,"../textures/weapons/dirtweapon.json":18,"./Weapon.js":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCanvasHelperJs = require('../common/CanvasHelper.js');

var _commonCanvasHelperJs2 = _interopRequireDefault(_commonCanvasHelperJs);

var _texturesPlayersPlayerJson = require('../textures/players/Player.json');

var _texturesPlayersPlayerJson2 = _interopRequireDefault(_texturesPlayersPlayerJson);

var Player = (function (_Phaser$Sprite) {
    _inherits(Player, _Phaser$Sprite);

    function Player(game, x, y, width, height, color, weaponFactory) {
        _classCallCheck(this, Player);

        _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, game, x, y, game.make.bitmapData(width, height));
        this.canvas = this.key;
        this.color = color;

        this.draw();

        this.speed = 300;
        this.angle = -90;
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.drag.set(60);

        this.weaponFactory = weaponFactory;
        this.createWeapon();
    }

    _createClass(Player, [{
        key: 'draw',
        value: function draw() {
            new _commonCanvasHelperJs2['default'](this.canvas, _texturesPlayersPlayerJson2['default']).drawTexture();
        }
    }, {
        key: 'update',
        value: function update() {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            this.body.angularVelocity = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.angularVelocity = -200;
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.angularVelocity = 200;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.game.physics.arcade.velocityFromAngle(this.angle, 300, this.body.velocity);
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.game.physics.arcade.velocityFromAngle(this.angle, 300, this.body.velocity);
            }

            if (this.fireButton.isDown) {
                this.weapon.fire();
            }
        }
    }, {
        key: 'createWeapon',
        value: function createWeapon() {
            this.weapon = this.weaponFactory.createWeapon('dirt');

            this.weapon.trackSprite(this, this.width / 2 + 5, 0, true);

            this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
        }
    }]);

    return Player;
})(Phaser.Sprite);

exports['default'] = Player;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL1BsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O29DQUF5QiwyQkFBMkI7Ozs7eUNBQzdCLGlDQUFpQzs7OztJQUVuQyxNQUFNO2NBQU4sTUFBTTs7QUFFWixhQUZNLE1BQU0sQ0FFWCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7OEJBRjVDLE1BQU07O0FBR25CLG1DQUhhLE1BQU0sNkNBR2IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFO0FBQ3ZELFlBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN2QixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7QUFFbkIsWUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOztBQUVaLFlBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDakIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLFlBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0RCxZQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztBQUNwQyxZQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRXZCLFlBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ25DLFlBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN2Qjs7aUJBbEJnQixNQUFNOztlQXFCbkIsZ0JBQUc7QUFDSCxrREFBaUIsSUFBSSxDQUFDLE1BQU0seUNBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxRDs7O2VBRUssa0JBQUc7QUFDTCxnQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixnQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixnQkFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDOztBQUU5QixnQkFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDdkQsb0JBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ3BDLE1BQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDN0Qsb0JBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQzthQUNuQztBQUNELGdCQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNyRCxvQkFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkYsTUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM1RCxvQkFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkY7O0FBRUQsZ0JBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDeEIsb0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEI7U0FDSjs7O2VBRVcsd0JBQUc7QUFDWCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFdEQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDOztBQUUzRCxnQkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUU7OztXQXREZ0IsTUFBTTtHQUFTLE1BQU0sQ0FBQyxNQUFNOztxQkFBNUIsTUFBTSIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvcHJlZmFicy9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzSGVscGVyIGZyb20gJy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnO1xuaW1wb3J0IHBsYXllckpzb24gZnJvbSAnLi4vdGV4dHVyZXMvcGxheWVycy9QbGF5ZXIuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIHdlYXBvbkZhY3RvcnkpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgZ2FtZS5tYWtlLmJpdG1hcERhdGEod2lkdGgsIGhlaWdodCkpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMua2V5O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRyYXcoKTtcblxuICAgICAgICB0aGlzLnNwZWVkID0gMzAwO1xuICAgICAgICB0aGlzLmFuZ2xlID0gLTkwO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ib2R5LmRyYWcuc2V0KDYwKTtcblxuICAgICAgICB0aGlzLndlYXBvbkZhY3RvcnkgPSB3ZWFwb25GYWN0b3J5O1xuICAgICAgICB0aGlzLmNyZWF0ZVdlYXBvbigpO1xuICAgIH1cblxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbmV3IENhbnZhc0hlbHBlcih0aGlzLmNhbnZhcyxwbGF5ZXJKc29uKS5kcmF3VGV4dHVyZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSAwO1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIHRoaXMuYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5MRUZUKSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IC0yMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuUklHSFQpKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMjAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5VUCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS52ZWxvY2l0eUZyb21BbmdsZSh0aGlzLmFuZ2xlLCAzMDAsIHRoaXMuYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuRE9XTikpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS52ZWxvY2l0eUZyb21BbmdsZSh0aGlzLmFuZ2xlLCAzMDAsIHRoaXMuYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5maXJlQnV0dG9uLmlzRG93bikge1xuICAgICAgICAgICAgdGhpcy53ZWFwb24uZmlyZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlV2VhcG9uKCkge1xuICAgICAgICB0aGlzLndlYXBvbiA9IHRoaXMud2VhcG9uRmFjdG9yeS5jcmVhdGVXZWFwb24oJ2RpcnQnKTtcblxuICAgICAgICB0aGlzLndlYXBvbi50cmFja1Nwcml0ZSh0aGlzLCB0aGlzLndpZHRoIC8gMiArIDUsIDAsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuZmlyZUJ1dHRvbiA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleUNvZGUuU1BBQ0VCQVIpO1xuICAgIH1cblxufSJdfQ==
},{"../common/CanvasHelper.js":2,"../textures/players/Player.json":15}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _PlayerJs = require('./Player.js');

var _PlayerJs2 = _interopRequireDefault(_PlayerJs);

var _SquarePlayerJs = require('./SquarePlayer.js');

var _SquarePlayerJs2 = _interopRequireDefault(_SquarePlayerJs);

var _CirclePlayerJs = require('./CirclePlayer.js');

var _CirclePlayerJs2 = _interopRequireDefault(_CirclePlayerJs);

var _WeaponFactoryJs = require('./WeaponFactory.js');

var _WeaponFactoryJs2 = _interopRequireDefault(_WeaponFactoryJs);

var _commonUtilsJs = require('../common/Utils.js');

var _commonUtilsJs2 = _interopRequireDefault(_commonUtilsJs);

var PlayerFactory = (function () {
    function PlayerFactory(game) {
        _classCallCheck(this, PlayerFactory);

        this._playerTypes = ['triangle', 'square', 'circle'];

        this.game = game;
        this.weaponFactory = new _WeaponFactoryJs2['default'](game);
    }

    _createClass(PlayerFactory, [{
        key: 'createPlayer',
        value: function createPlayer(defaultType) {
            var type = defaultType;
            if (!type) {
                type = this._playerTypes[Math.floor(Math.random() * this._playerTypes.length)];
            }
            switch (type) {
                case "triangle":
                    return new _PlayerJs2['default'](this.game, this.game.width / 2, this.game.height / 2, 35, 30, _commonUtilsJs2['default'].generateRandomColor(), this.weaponFactory);
                case "square":
                    return new _SquarePlayerJs2['default'](this.game, this.game.width / 2, this.game.height / 2, 35, 30, _commonUtilsJs2['default'].generateRandomColor(), this.weaponFactory);
                case "circle":
                    return new _CirclePlayerJs2['default'](this.game, this.game.width / 2, this.game.height / 2, 35, 30, _commonUtilsJs2['default'].generateRandomColor(), this.weaponFactory);
                default:
                    return new _PlayerJs2['default'](this.game, this.game.width / 2, this.game.height / 2, 35, 30, _commonUtilsJs2['default'].generateRandomColor(), this.weaponFactory);
            }
        }
    }]);

    return PlayerFactory;
})();

exports['default'] = PlayerFactory;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL1BsYXllckZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3dCQUFtQixhQUFhOzs7OzhCQUNQLG1CQUFtQjs7Ozs4QkFDbkIsbUJBQW1COzs7OytCQUNsQixvQkFBb0I7Ozs7NkJBQzVCLG9CQUFvQjs7OztJQUVqQixhQUFhO0FBSW5CLGFBSk0sYUFBYSxDQUlsQixJQUFJLEVBQUU7OEJBSkQsYUFBYTs7YUFFOUIsWUFBWSxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7O0FBRzNDLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxhQUFhLEdBQUcsaUNBQWtCLElBQUksQ0FBQyxDQUFDO0tBQ2hEOztpQkFQZ0IsYUFBYTs7ZUFTbEIsc0JBQUMsV0FBVyxFQUFFO0FBQ3RCLGdCQUFJLElBQUksR0FBRyxXQUFXLENBQUM7QUFDdkIsZ0JBQUksQ0FBQyxJQUFJLEVBQUU7QUFDUCxvQkFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2xGO0FBQ0Qsb0JBQVEsSUFBSTtBQUNSLHFCQUFLLFVBQVU7QUFDWCwyQkFBTywwQkFBVyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSwyQkFBTSxtQkFBbUIsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUFBLEFBQ3JJLHFCQUFLLFFBQVE7QUFDVCwyQkFBTyxnQ0FBaUIsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsMkJBQU0sbUJBQW1CLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFBQSxBQUMzSSxxQkFBSyxRQUFRO0FBQ1QsMkJBQU8sZ0NBQWlCLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLDJCQUFNLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQUEsQUFDM0k7QUFDSSwyQkFBTywwQkFBVyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSwyQkFBTSxtQkFBbUIsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUFBLGFBQ3hJO1NBQ0o7OztXQXhCZ0IsYUFBYTs7O3FCQUFiLGFBQWEiLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3ByZWZhYnMvUGxheWVyRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IFNxdWFyZVBsYXllciBmcm9tICcuL1NxdWFyZVBsYXllci5qcyc7XG5pbXBvcnQgQ2lyY2xlUGxheWVyIGZyb20gJy4vQ2lyY2xlUGxheWVyLmpzJztcbmltcG9ydCBXZWFwb25GYWN0b3J5IGZyb20gJy4vV2VhcG9uRmFjdG9yeS5qcyc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vY29tbW9uL1V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyRmFjdG9yeSB7XG5cbiAgICBfcGxheWVyVHlwZXMgPSBbJ3RyaWFuZ2xlJywgJ3NxdWFyZScsICdjaXJjbGUnXTtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy53ZWFwb25GYWN0b3J5ID0gbmV3IFdlYXBvbkZhY3RvcnkoZ2FtZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyKGRlZmF1bHRUeXBlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZGVmYXVsdFR5cGU7XG4gICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgdHlwZSA9IHRoaXMuX3BsYXllclR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX3BsYXllclR5cGVzLmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIodGhpcy5nYW1lLCB0aGlzLmdhbWUud2lkdGggLyAyLCB0aGlzLmdhbWUuaGVpZ2h0IC8gMiwgMzUsIDMwLCBVdGlscy5nZW5lcmF0ZVJhbmRvbUNvbG9yKCksIHRoaXMud2VhcG9uRmFjdG9yeSk7XG4gICAgICAgICAgICBjYXNlIFwic3F1YXJlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcXVhcmVQbGF5ZXIodGhpcy5nYW1lLCB0aGlzLmdhbWUud2lkdGggLyAyLCB0aGlzLmdhbWUuaGVpZ2h0IC8gMiwgMzUsIDMwLCBVdGlscy5nZW5lcmF0ZVJhbmRvbUNvbG9yKCksIHRoaXMud2VhcG9uRmFjdG9yeSk7XG4gICAgICAgICAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDaXJjbGVQbGF5ZXIodGhpcy5nYW1lLCB0aGlzLmdhbWUud2lkdGggLyAyLCB0aGlzLmdhbWUuaGVpZ2h0IC8gMiwgMzUsIDMwLCBVdGlscy5nZW5lcmF0ZVJhbmRvbUNvbG9yKCksIHRoaXMud2VhcG9uRmFjdG9yeSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUGxheWVyKHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndpZHRoIC8gMiwgdGhpcy5nYW1lLmhlaWdodCAvIDIsIDM1LCAzMCwgVXRpbHMuZ2VuZXJhdGVSYW5kb21Db2xvcigpLCB0aGlzLndlYXBvbkZhY3RvcnkpO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19
},{"../common/Utils.js":3,"./CirclePlayer.js":4,"./Player.js":6,"./SquarePlayer.js":8,"./WeaponFactory.js":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _PlayerJs = require('./Player.js');

var _PlayerJs2 = _interopRequireDefault(_PlayerJs);

var _commonCanvasHelperJs = require('../common/CanvasHelper.js');

var _commonCanvasHelperJs2 = _interopRequireDefault(_commonCanvasHelperJs);

var _texturesPlayersSquareplayerJson = require('../textures/players/squareplayer.json');

var _texturesPlayersSquareplayerJson2 = _interopRequireDefault(_texturesPlayersSquareplayerJson);

var SquarePlayer = (function (_Player) {
    _inherits(SquarePlayer, _Player);

    function SquarePlayer() {
        _classCallCheck(this, SquarePlayer);

        _get(Object.getPrototypeOf(SquarePlayer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(SquarePlayer, [{
        key: 'draw',
        value: function draw() {
            new _commonCanvasHelperJs2['default'](this.canvas, _texturesPlayersSquareplayerJson2['default']).drawTexture();
        }
    }]);

    return SquarePlayer;
})(_PlayerJs2['default']);

exports['default'] = SquarePlayer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL1NxdWFyZVBsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFtQixhQUFhOzs7O29DQUNQLDJCQUEyQjs7OzsrQ0FDN0IsdUNBQXVDOzs7O0lBRXpDLFlBQVk7Y0FBWixZQUFZOzthQUFaLFlBQVk7OEJBQVosWUFBWTs7bUNBQVosWUFBWTs7O2lCQUFaLFlBQVk7O2VBRXpCLGdCQUFHO0FBQ0gsa0RBQWlCLElBQUksQ0FBQyxNQUFNLCtDQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUQ7OztXQUpnQixZQUFZOzs7cUJBQVosWUFBWSIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvcHJlZmFicy9TcXVhcmVQbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBDYW52YXNIZWxwZXIgZnJvbSAnLi4vY29tbW9uL0NhbnZhc0hlbHBlci5qcyc7XG5pbXBvcnQgcGxheWVySnNvbiBmcm9tICcuLi90ZXh0dXJlcy9wbGF5ZXJzL3NxdWFyZXBsYXllci5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3F1YXJlUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcblxuICAgIGRyYXcoKSB7XG4gICAgICAgIG5ldyBDYW52YXNIZWxwZXIodGhpcy5jYW52YXMscGxheWVySnNvbikuZHJhd1RleHR1cmUoKTtcbiAgICB9XG5cbn0iXX0=
},{"../common/CanvasHelper.js":2,"../textures/players/squareplayer.json":17,"./Player.js":6}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _commonUtilsJs = require('../common/Utils.js');

var _commonUtilsJs2 = _interopRequireDefault(_commonUtilsJs);

var _commonCanvasHelperJs = require('../common/CanvasHelper.js');

var _commonCanvasHelperJs2 = _interopRequireDefault(_commonCanvasHelperJs);

var _texturesWeaponsWeaponJson = require('../textures/weapons/weapon.json');

var _texturesWeaponsWeaponJson2 = _interopRequireDefault(_texturesWeaponsWeaponJson);

var Weapon = (function () {
    function Weapon(game) {
        _classCallCheck(this, Weapon);

        this.game = game;
        this.createBullet();
        this.createWeapon();
    }

    _createClass(Weapon, [{
        key: 'createBullet',
        value: function createBullet() {
            this.bmd = this.game.make.bitmapData(12, 12);
            new _commonCanvasHelperJs2['default'](this.bmd, _texturesWeaponsWeaponJson2['default']).drawTexture();
        }
    }, {
        key: 'createWeapon',
        value: function createWeapon() {
            this.weapon = this.game.add.weapon(30, this.bmd);

            //  The bullet will be automatically killed when it leaves the world bounds
            this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

            //  The speed at which the bullet is fired
            this.weapon.bulletSpeed = 400;

            //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
            this.weapon.fireRate = 60;

            //  Add a variance to the bullet speed by +- this value
            this.weapon.bulletSpeedVariance = 200;
        }
    }, {
        key: 'trackSprite',
        value: function trackSprite(sprite, x, y, rotation) {
            this.weapon.trackSprite(sprite, x, y, rotation);
        }
    }, {
        key: 'fire',
        value: function fire() {
            this.weapon.fire();
        }
    }]);

    return Weapon;
})();

exports['default'] = Weapon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL1dlYXBvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7NkJBQWtCLG9CQUFvQjs7OztvQ0FDYiwyQkFBMkI7Ozs7eUNBQzdCLGlDQUFpQzs7OztJQUVuQyxNQUFNO0FBRVosYUFGTSxNQUFNLENBRVgsSUFBSSxFQUFFOzhCQUZELE1BQU07O0FBR25CLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQixZQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDdkI7O2lCQU5nQixNQUFNOztlQVNYLHdCQUFHO0FBQ1gsZ0JBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QyxrREFBaUIsSUFBSSxDQUFDLEdBQUcseUNBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2RDs7O2VBR1csd0JBQUU7QUFDVixnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O0FBR2pELGdCQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDOzs7QUFHN0QsZ0JBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQzs7O0FBRzlCLGdCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7OztBQUcxQixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7U0FDekM7OztlQUdVLHFCQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRTtBQUNoQyxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkQ7OztlQUdHLGdCQUFHO0FBQ0gsZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7OztXQXZDZ0IsTUFBTTs7O3FCQUFOLE1BQU0iLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3ByZWZhYnMvV2VhcG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gJy4uL2NvbW1vbi9VdGlscy5qcyc7XG5pbXBvcnQgQ2FudmFzSGVscGVyIGZyb20gJy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnO1xuaW1wb3J0IHdlYXBvbkpzb24gZnJvbSAnLi4vdGV4dHVyZXMvd2VhcG9ucy93ZWFwb24uanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXBvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlV2VhcG9uKCk7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVCdWxsZXQoKSB7XG4gICAgICAgIHRoaXMuYm1kID0gdGhpcy5nYW1lLm1ha2UuYml0bWFwRGF0YSgxMiwgMTIpO1xuICAgICAgICBuZXcgQ2FudmFzSGVscGVyKHRoaXMuYm1kLHdlYXBvbkpzb24pLmRyYXdUZXh0dXJlKCk7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVXZWFwb24oKXtcbiAgICAgICAgdGhpcy53ZWFwb24gPSB0aGlzLmdhbWUuYWRkLndlYXBvbigzMCwgdGhpcy5ibWQpO1xuXG4gICAgICAgIC8vICBUaGUgYnVsbGV0IHdpbGwgYmUgYXV0b21hdGljYWxseSBraWxsZWQgd2hlbiBpdCBsZWF2ZXMgdGhlIHdvcmxkIGJvdW5kc1xuICAgICAgICB0aGlzLndlYXBvbi5idWxsZXRLaWxsVHlwZSA9IFBoYXNlci5XZWFwb24uS0lMTF9XT1JMRF9CT1VORFM7XG5cbiAgICAgICAgLy8gIFRoZSBzcGVlZCBhdCB3aGljaCB0aGUgYnVsbGV0IGlzIGZpcmVkXG4gICAgICAgIHRoaXMud2VhcG9uLmJ1bGxldFNwZWVkID0gNDAwO1xuXG4gICAgICAgIC8vICBTcGVlZC11cCB0aGUgcmF0ZSBvZiBmaXJlLCBhbGxvd2luZyB0aGVtIHRvIHNob290IDEgYnVsbGV0IGV2ZXJ5IDYwbXNcbiAgICAgICAgdGhpcy53ZWFwb24uZmlyZVJhdGUgPSA2MDtcblxuICAgICAgICAvLyAgQWRkIGEgdmFyaWFuY2UgdG8gdGhlIGJ1bGxldCBzcGVlZCBieSArLSB0aGlzIHZhbHVlXG4gICAgICAgIHRoaXMud2VhcG9uLmJ1bGxldFNwZWVkVmFyaWFuY2UgPSAyMDA7XG4gICAgfVxuXG5cbiAgICB0cmFja1Nwcml0ZShzcHJpdGUsIHgsIHksIHJvdGF0aW9uKSB7XG4gICAgICAgIHRoaXMud2VhcG9uLnRyYWNrU3ByaXRlKHNwcml0ZSwgeCwgeSwgcm90YXRpb24pO1xuICAgIH1cblxuXG4gICAgZmlyZSgpIHtcbiAgICAgICAgdGhpcy53ZWFwb24uZmlyZSgpO1xuICAgIH1cblxufSJdfQ==
},{"../common/CanvasHelper.js":2,"../common/Utils.js":3,"../textures/weapons/weapon.json":19}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _WeaponJs = require('./Weapon.js');

var _WeaponJs2 = _interopRequireDefault(_WeaponJs);

var _DirtWeaponJs = require('./DirtWeapon.js');

var _DirtWeaponJs2 = _interopRequireDefault(_DirtWeaponJs);

var WeaponFactory = (function () {
    function WeaponFactory(game) {
        _classCallCheck(this, WeaponFactory);

        this.weapon_type = ['basic', 'dirt'];

        this.game = game;
    }

    _createClass(WeaponFactory, [{
        key: 'createWeapon',
        value: function createWeapon(type) {
            switch (type) {
                case "basic":
                    return new _WeaponJs2['default'](this.game);
                case "dirt":
                    return new _DirtWeaponJs2['default'](this.game);
                default:
                    return new _WeaponJs2['default'](this.game);
            }
        }
    }]);

    return WeaponFactory;
})();

exports['default'] = WeaponFactory;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL1dlYXBvbkZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3dCQUFtQixhQUFhOzs7OzRCQUNULGlCQUFpQjs7OztJQUVuQixhQUFhO0FBSW5CLGFBSk0sYUFBYSxDQUlsQixJQUFJLEVBQUU7OEJBSkQsYUFBYTs7YUFFOUIsV0FBVyxHQUFHLENBQUMsT0FBTyxFQUFDLE1BQU0sQ0FBQzs7QUFHMUIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDcEI7O2lCQU5nQixhQUFhOztlQVNsQixzQkFBQyxJQUFJLEVBQUU7QUFDZixvQkFBTyxJQUFJO0FBQ1AscUJBQUssT0FBTztBQUNULDJCQUFPLDBCQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUFBLEFBQ2hDLHFCQUFLLE1BQU07QUFDUiwyQkFBTyw4QkFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFBQSxBQUNwQztBQUNHLDJCQUFPLDBCQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUFBLGFBQ25DO1NBQ0o7OztXQWxCZ0IsYUFBYTs7O3FCQUFiLGFBQWEiLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3ByZWZhYnMvV2VhcG9uRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWFwb24gZnJvbSAnLi9XZWFwb24uanMnO1xuaW1wb3J0IERpcnRXZWFwb24gZnJvbSAnLi9EaXJ0V2VhcG9uLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uRmFjdG9yeSB7XG5cbiAgICB3ZWFwb25fdHlwZSA9IFsnYmFzaWMnLCdkaXJ0J107XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVXZWFwb24odHlwZSkge1xuICAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICAgICBjYXNlIFwiYmFzaWNcIiA6IFxuICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWFwb24odGhpcy5nYW1lKTtcbiAgICAgICAgICAgIGNhc2UgXCJkaXJ0XCIgOiBcbiAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGlydFdlYXBvbih0aGlzLmdhbWUpO1xuICAgICAgICAgICAgZGVmYXVsdCA6IFxuICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXZWFwb24odGhpcy5nYW1lKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbn0iXX0=
},{"./DirtWeapon.js":5,"./Weapon.js":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Boot = (function () {
    function Boot() {
        _classCallCheck(this, Boot);
    }

    _createClass(Boot, [{
        key: 'preload',
        value: function preload() {
            this.load.image('preloader', 'assets/images/loading_bar.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.input.maxPointers = 1;
            this.game.state.start('preload');
        }
    }]);

    return Boot;
})();

exports['default'] = Boot;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zdGF0ZXMvQm9vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCLElBQUk7YUFBSixJQUFJOzhCQUFKLElBQUk7OztpQkFBSixJQUFJOztlQUNkLG1CQUFHO0FBQ04sZ0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1NBQ2pFOzs7ZUFFSyxrQkFBRztBQUNMLGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEM7OztXQVJnQixJQUFJOzs7cUJBQUosSUFBSSIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvc3RhdGVzL0Jvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb290IHtcbiAgICBwcmVsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlcicsICdhc3NldHMvaW1hZ2VzL2xvYWRpbmdfYmFyLnBuZycpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdwcmVsb2FkJyk7XG4gICAgfVxufSJdfQ==
},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonUtilsJs = require('../common/Utils.js');

var _commonUtilsJs2 = _interopRequireDefault(_commonUtilsJs);

var _prefabsPlayerFactoryJs = require('../prefabs/PlayerFactory.js');

var _prefabsPlayerFactoryJs2 = _interopRequireDefault(_prefabsPlayerFactoryJs);

var Game = (function (_Phaser$State) {
    _inherits(Game, _Phaser$State);

    function Game() {
        _classCallCheck(this, Game);

        _get(Object.getPrototypeOf(Game.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Game, [{
        key: 'create',
        value: function create() {
            //stage
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.stage.backgroundColor = '#282626';
            //factories
            this.playerFactory = new _prefabsPlayerFactoryJs2['default'](this.game);
            //player
            this.player = this.playerFactory.createPlayer();
            this.game.add.existing(this.player);
        }
    }, {
        key: 'update',
        value: function update() {}
    }]);

    return Game;
})(Phaser.State);

exports['default'] = Game;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zdGF0ZXMvR2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzZCQUFrQixvQkFBb0I7Ozs7c0NBQ1osNkJBQTZCOzs7O0lBRWxDLElBQUk7Y0FBSixJQUFJOzthQUFKLElBQUk7OEJBQUosSUFBSTs7bUNBQUosSUFBSTs7O2lCQUFKLElBQUk7O2VBRWYsa0JBQUc7O0FBRUwsZ0JBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JELGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDOztBQUU1QyxnQkFBSSxDQUFDLGFBQWEsR0FBRyx3Q0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsRCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ2hELGdCQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDOzs7ZUFHSyxrQkFBRyxFQUVSOzs7V0FoQmdCLElBQUk7R0FBUyxNQUFNLENBQUMsS0FBSzs7cUJBQXpCLElBQUkiLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3N0YXRlcy9HYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gJy4uL2NvbW1vbi9VdGlscy5qcyc7XG5pbXBvcnQgUGxheWVyRmFjdG9yeSBmcm9tICcuLi9wcmVmYWJzL1BsYXllckZhY3RvcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgLy9zdGFnZVxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMyODI2MjYnO1xuICAgICAgICAvL2ZhY3Rvcmllc1xuICAgICAgICB0aGlzLnBsYXllckZhY3RvcnkgPSBuZXcgUGxheWVyRmFjdG9yeSh0aGlzLmdhbWUpO1xuICAgICAgICAvL3BsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyRmFjdG9yeS5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLnBsYXllcik7XG4gICAgfVxuXG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICB9XG5cbn0iXX0=
},{"../common/Utils.js":3,"../prefabs/PlayerFactory.js":7}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Preload = (function () {
    function Preload() {
        _classCallCheck(this, Preload);

        this.asset = null;
        this.ready = false;
    }

    _createClass(Preload, [{
        key: 'preload',
        value: function preload() {}
    }, {
        key: 'create',
        value: function create() {
            this.game.stage.backgroundColor = '#282626';
            this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
            this.asset.anchor.setTo(0.5, 0.5);
            this.asset.scale.setTo(0.3, 0.3);

            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.load.setPreloadSprite(this.asset);

            this.load.image('play', 'assets/images/play.png');

            //start load
            this.load.start();
        }
    }, {
        key: 'update',
        value: function update() {

            if (this.ready) {
                this.game.state.start('startScreen');
            }
        }
    }, {
        key: 'onLoadComplete',
        value: function onLoadComplete() {
            this.ready = true;
        }
    }]);

    return Preload;
})();

exports['default'] = Preload;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zdGF0ZXMvUHJlbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCLE9BQU87QUFFYixhQUZNLE9BQU8sR0FFVjs4QkFGRyxPQUFPOztBQUdwQixZQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7aUJBTGdCLE9BQU87O2VBT2pCLG1CQUFHLEVBQ1Q7OztlQUVLLGtCQUFHO0FBQ0wsZ0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFDNUMsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNyRixnQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsQyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7QUFFakMsZ0JBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVELGdCQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFdkMsZ0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyx3QkFBd0IsQ0FBQyxDQUFDOzs7QUFHakQsZ0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7OztlQUVLLGtCQUFHOztBQUVMLGdCQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDWixvQkFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3hDO1NBRUo7OztlQUVhLDBCQUFHO0FBQ2IsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ3JCOzs7V0FuQ2dCLE9BQU87OztxQkFBUCxPQUFPIiwiZmlsZSI6IkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zdGF0ZXMvUHJlbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXNzZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJlbG9hZCgpIHtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MjYyNic7XG4gICAgICAgIHRoaXMuYXNzZXQgPSB0aGlzLmFkZC5zcHJpdGUodGhpcy5nYW1lLndpZHRoIC8gMiwgdGhpcy5nYW1lLmhlaWdodCAvIDIsICdwcmVsb2FkZXInKTtcbiAgICAgICAgdGhpcy5hc3NldC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgICAgICB0aGlzLmFzc2V0LnNjYWxlLnNldFRvKDAuMywgMC4zKTtcblxuICAgICAgICB0aGlzLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5sb2FkLnNldFByZWxvYWRTcHJpdGUodGhpcy5hc3NldCk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwbGF5JywnYXNzZXRzL2ltYWdlcy9wbGF5LnBuZycpO1xuXG4gICAgICAgIC8vc3RhcnQgbG9hZFxuICAgICAgICB0aGlzLmxvYWQuc3RhcnQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnc3RhcnRTY3JlZW4nKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25Mb2FkQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgIH1cbn0iXX0=
},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var StartScreen = (function () {
    function StartScreen() {
        _classCallCheck(this, StartScreen);
    }

    _createClass(StartScreen, [{
        key: 'create',
        value: function create() {
            this.game.stage.backgroundColor = '#282626';
            this.play = this.add.sprite(this.game.width / 2, this.game.height / 2, 'play');
            this.play.anchor.setTo(0.5, 0.5);
            this.play.scale.setTo(0.3, 0.3);
            this.play.inputEnabled = true;
            this.play.events.onInputDown.add(this.startPlay, this);
            this.play.events.onInputOver.add(this.mouseOver, this);
            this.play.events.onInputOut.add(this.mouseOut, this);
        }
    }, {
        key: 'startPlay',
        value: function startPlay() {
            this.state.start('game');
        }
    }, {
        key: 'mouseOver',
        value: function mouseOver() {
            this.game.canvas.style.cursor = 'pointer';
        }
    }, {
        key: 'mouseOut',
        value: function mouseOut() {
            this.game.canvas.style.cursor = 'default';
        }
    }]);

    return StartScreen;
})();

exports['default'] = StartScreen;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zdGF0ZXMvU3RhcnRTY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQixXQUFXO2FBQVgsV0FBVzs4QkFBWCxXQUFXOzs7aUJBQVgsV0FBVzs7ZUFDdEIsa0JBQUc7QUFDTCxnQkFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztBQUM1QyxnQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9FLGdCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLGdCQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDOUIsZ0JBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2RCxnQkFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZELGdCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEQ7OztlQUVRLHFCQUFHO0FBQ1IsZ0JBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCOzs7ZUFFUSxxQkFBRztBQUNSLGdCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUM3Qzs7O2VBRU8sb0JBQUc7QUFDUCxnQkFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDN0M7OztXQXRCZ0IsV0FBVzs7O3FCQUFYLFdBQVciLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3N0YXRlcy9TdGFydFNjcmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIHtcbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MjYyNic7XG4gICAgICAgIHRoaXMucGxheSA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud2lkdGggLyAyLCB0aGlzLmdhbWUuaGVpZ2h0IC8gMiwgJ3BsYXknKTtcbiAgICAgICAgdGhpcy5wbGF5LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIHRoaXMucGxheS5zY2FsZS5zZXRUbygwLjMsIDAuMyk7XG4gICAgICAgIHRoaXMucGxheS5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYXkuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLnN0YXJ0UGxheSwgdGhpcyk7XG4gICAgICAgIHRoaXMucGxheS5ldmVudHMub25JbnB1dE92ZXIuYWRkKHRoaXMubW91c2VPdmVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wbGF5LmV2ZW50cy5vbklucHV0T3V0LmFkZCh0aGlzLm1vdXNlT3V0LCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydFBsYXkoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcbiAgICB9XG5cbiAgICBtb3VzZU92ZXIoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIH1cblxuICAgIG1vdXNlT3V0KCkge1xuICAgICAgICB0aGlzLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICB9XG5cbn0gIl19
},{}],15:[function(require,module,exports){
module.exports={
    "head": {
        "style": "stroke",
        "ctxProp" : {
            "lineWith" : "2"
        },
        "draw": [
            {
                "drawType": "move",
                "x": "${canvas.height}",
                "y": "${canvas.height/2}"
            },
            {
                "drawType": "line",
                "x": "${canvas.width}",
                "y": "${canvas.height/2}"
            }
        ]
    },
    "body": {
        "style": "fill",
        "draw": [
            {
                "drawType": "move",
                "x": "0",
                "y": "0"
            },
            {
                "drawType": "line",
                "x": "${canvas.height}",
                "y": "${canvas.height/2}"
            },
            {
                "drawType": "line",
                "x": "0",
                "y": "${canvas.height}"
            }
        ]
    }
}
},{}],16:[function(require,module,exports){
module.exports={
    "head": {
        "style": "stroke",
        "ctxProp" : {
            "lineWith" : "2"
        },
        "draw": [
            {
                "drawType": "move",
                "x": "${canvas.height}",
                "y": "${canvas.height/2}"
            },
            {
                "drawType": "line",
                "x": "${canvas.width}",
                "y": "${canvas.height/2}"
            }
        ]
    },
    "body": {
        "style": "fill",
        "draw": [
            {
                "drawType": "arc",
                "x": "15",
                "y": "15",
                "radius" : "14",
                "arc" : "${2 * Math.PI}"
            },
        ]
    }
}
},{}],17:[function(require,module,exports){
module.exports={
    "head": {
        "style": "stroke",
        "ctxProp" : {
            "lineWith" : "2"
        },
        "draw": [
            {
                "drawType": "move",
                "x": "${canvas.height}",
                "y": "${canvas.height/2}"
            },
            {
                "drawType": "line",
                "x": "${canvas.width}",
                "y": "${canvas.height/2}"
            }
        ]
    },
    "body": {
        "style": "fill",
        "draw": [
            {
                "drawType": "move",
                "x": "0",
                "y": "0"
            },
            {
                "drawType": "line",
                "x": "${canvas.height}",
                "y": "0"
            },
            {
                "drawType": "line",
                "x": "${canvas.height}",
                "y": "${canvas.height}"
            },
            {
                "drawType": "line",
                "x": "0",
                "y": "${canvas.height}"
            }
        ]
    }
}
},{}],18:[function(require,module,exports){
module.exports={
    "body": {
        "style": "fill",
        "draw": [
            {
                "drawType": "move",
                "x": "0",
                "y": "0"
            },
            {
                "drawType": "line",
                "x": "12",
                "y": "6"
            },
            {
                "drawType": "line",
                "x": "0",
                "y": "12"
            }
        ]
    }
}
},{}],19:[function(require,module,exports){
module.exports={
    "body": {
        "style": "fill",
        "draw": [
            {
                "drawType": "arc",
                "x": "6",
                "y": "6",
                "radius" : "6",
                "arc" : "${2 * Math.PI}"
            }
        ]
    }
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvY29tbW9uL0NhbnZhc0hlbHBlci5qcyIsInNyYy9jb21tb24vVXRpbHMuanMiLCJzcmMvcHJlZmFicy9DaXJjbGVQbGF5ZXIuanMiLCJzcmMvcHJlZmFicy9EaXJ0V2VhcG9uLmpzIiwic3JjL3ByZWZhYnMvUGxheWVyLmpzIiwic3JjL3ByZWZhYnMvUGxheWVyRmFjdG9yeS5qcyIsInNyYy9wcmVmYWJzL1NxdWFyZVBsYXllci5qcyIsInNyYy9wcmVmYWJzL1dlYXBvbi5qcyIsInNyYy9wcmVmYWJzL1dlYXBvbkZhY3RvcnkuanMiLCJzcmMvc3RhdGVzL0Jvb3QuanMiLCJzcmMvc3RhdGVzL0dhbWUuanMiLCJzcmMvc3RhdGVzL1ByZWxvYWQuanMiLCJzcmMvc3RhdGVzL1N0YXJ0U2NyZWVuLmpzIiwic3JjL3RleHR1cmVzL3BsYXllcnMvUGxheWVyLmpzb24iLCJzcmMvdGV4dHVyZXMvcGxheWVycy9jaXJjbGVwbGF5ZXIuanNvbiIsInNyYy90ZXh0dXJlcy9wbGF5ZXJzL3NxdWFyZXBsYXllci5qc29uIiwic3JjL3RleHR1cmVzL3dlYXBvbnMvZGlydHdlYXBvbi5qc29uIiwic3JjL3RleHR1cmVzL3dlYXBvbnMvd2VhcG9uLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9zdGF0ZXNCb290SnMgPSByZXF1aXJlKFwiLi9zdGF0ZXMvQm9vdC5qc1wiKTtcblxudmFyIF9zdGF0ZXNCb290SnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVzQm9vdEpzKTtcblxudmFyIF9zdGF0ZXNQcmVsb2FkSnMgPSByZXF1aXJlKFwiLi9zdGF0ZXMvUHJlbG9hZC5qc1wiKTtcblxudmFyIF9zdGF0ZXNQcmVsb2FkSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVzUHJlbG9hZEpzKTtcblxudmFyIF9zdGF0ZXNTdGFydFNjcmVlbkpzID0gcmVxdWlyZShcIi4vc3RhdGVzL1N0YXJ0U2NyZWVuLmpzXCIpO1xuXG52YXIgX3N0YXRlc1N0YXJ0U2NyZWVuSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVzU3RhcnRTY3JlZW5Kcyk7XG5cbnZhciBfc3RhdGVzR2FtZUpzID0gcmVxdWlyZShcIi4vc3RhdGVzL0dhbWUuanNcIik7XG5cbnZhciBfc3RhdGVzR2FtZUpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlc0dhbWVKcyk7XG5cbnZhciBnYW1lO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICBnYW1lID0gbmV3IFBoYXNlci5HYW1lKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgUGhhc2VyLkFVVE8sICdnYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgIGdhbWUuc3RhdGUuYWRkKCdib290JywgX3N0YXRlc0Jvb3RKczJbXCJkZWZhdWx0XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGF0ZS5hZGQoJ3ByZWxvYWQnLCBfc3RhdGVzUHJlbG9hZEpzMltcImRlZmF1bHRcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXRlLmFkZCgnc3RhcnRTY3JlZW4nLCBfc3RhdGVzU3RhcnRTY3JlZW5KczJbXCJkZWZhdWx0XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBfc3RhdGVzR2FtZUpzMltcImRlZmF1bHRcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5aGNIQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzMFFrRkZhVUlzYTBKQlFXdENPenM3T3l0Q1FVTm1MSEZDUVVGeFFqczdPenR0UTBGRGFrSXNlVUpCUVhsQ096czdPelJDUVVOb1F5eHJRa0ZCYTBJN096czdRVUZNYmtNc1NVRkJTU3hKUVVGSkxFTkJRVU03TzBGQlQxUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhaUVVGWk8wRkJRekZDTERKQ1FVRkpMRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRWxCUVVrc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eFhRVUZYTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRM1JHTEUxQlFVMHNRMEZCUXl4WFFVRlhMRWxCUVVrc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eFpRVUZaTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRM3BHTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRE5VTXNNa0pCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNORUpCUVUwc1EwRkJRenRCUVVNMVFpd3lRa0ZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5d3JRa0ZCVXl4RFFVRkRPMEZCUTJ4RExESkNRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhoUVVGaExHMURRVUZoTEVOQlFVTTdRVUZETVVNc01rSkJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc05FSkJRVTBzUTBGQlF6dEJRVU0xUWl3eVFrRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1EwRkRNVUlzUTBGQlF5SXNJbVpwYkdVaU9pSkVPaTloY1hWaEwyZGxiM2RoY2k5emNtTXZZWEJ3TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lkbUZ5SUdkaGJXVTdYRzVjYm1sdGNHOXlkQ0JDYjI5MElHWnliMjBnWENJdUwzTjBZWFJsY3k5Q2IyOTBMbXB6WENJN1hHNXBiWEJ2Y25RZ1VISmxiRzloWkNCbWNtOXRJRndpTGk5emRHRjBaWE12VUhKbGJHOWhaQzVxYzF3aU8xeHVhVzF3YjNKMElGTjBZWEowVTJOeVpXVnVJR1p5YjIwZ1hDSXVMM04wWVhSbGN5OVRkR0Z5ZEZOamNtVmxiaTVxYzF3aU8xeHVhVzF3YjNKMElFZGhiV1VnWm5KdmJTQmNJaTR2YzNSaGRHVnpMMGRoYldVdWFuTmNJanRjYmx4dWQybHVaRzkzTG05dWJHOWhaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnWjJGdFpTQTlJRzVsZHlCUWFHRnpaWEl1UjJGdFpTaDNhVzVrYjNjdWFXNXVaWEpYYVdSMGFDQjhmQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVZMnhwWlc1MFYybGtkR2dnZkh3Z1pHOWpkVzFsYm5RdVltOWtlUzVqYkdsbGJuUlhhV1IwYUN3Z1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2QybHVaRzkzTG1sdWJtVnlTR1ZwWjJoMElIeDhJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNWpiR2xsYm5SSVpXbG5hSFFnZkh3Z1pHOWpkVzFsYm5RdVltOWtlUzVqYkdsbGJuUklaV2xuYUhRc0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGQm9ZWE5sY2k1QlZWUlBMQ0FuWjJGdFpTY3BPMXh1SUNCbllXMWxMbk4wWVhSbExtRmtaQ2duWW05dmRDY3NRbTl2ZENrN1hHNGdJR2RoYldVdWMzUmhkR1V1WVdSa0tDZHdjbVZzYjJGa0p5eFFjbVZzYjJGa0tUdGNiaUFnWjJGdFpTNXpkR0YwWlM1aFpHUW9KM04wWVhKMFUyTnlaV1Z1Snl4VGRHRnlkRk5qY21WbGJpazdYRzRnSUdkaGJXVXVjM1JoZEdVdVlXUmtLQ2RuWVcxbEp5eEhZVzFsS1R0Y2JpQWdaMkZ0WlM1emRHRjBaUzV6ZEdGeWRDZ25ZbTl2ZENjcE8xeHVmVHRjYmlKZGZRPT0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfVXRpbHNKcyA9IHJlcXVpcmUoJy4vVXRpbHMuanMnKTtcblxudmFyIF9VdGlsc0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1V0aWxzSnMpO1xuXG52YXIgQ2FudmFzSGVscGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYW52YXNIZWxwZXIoY2FudmFzLCBqc29uLCBjb2xvclNldCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FudmFzSGVscGVyKTtcblxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy50ZXh0dXJlID0ganNvbjtcbiAgICAgICAgdGhpcy5jb2xvclNldCA9IGNvbG9yU2V0O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDYW52YXNIZWxwZXIsIFt7XG4gICAgICAgIGtleTogJ2RyYXdUZXh0dXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXdUZXh0dXJlKCkge1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUN0eFByb3AodGhpcy50ZXh0dXJlW2tleV0uY3R4UHJvcCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnRleHR1cmVba2V5XS5kcmF3KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gdGhpcy50ZXh0dXJlW2tleV0uZHJhd1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLnBhcnNlRXhwcmVzcyhwYXJ0LngpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMucGFyc2VFeHByZXNzKHBhcnQueSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LmRyYXdUeXBlID09ICdtb3ZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQuZHJhd1R5cGUgPT0gJ2xpbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydC5kcmF3VHlwZSA9PSAnYXJjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl1cyA9IHRoaXMucGFyc2VFeHByZXNzKHBhcnQucmFkaXVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmMgPSB0aGlzLnBhcnNlRXhwcmVzcyhwYXJ0LmFyYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBhcmMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlW2tleV0uc3R5bGUgPT0gJ3N0cm9rZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmdldENvbG9yKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50ZXh0dXJlW2tleV0uc3R5bGUgPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ2V0Q29sb3Ioa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlQ3R4UHJvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDdHhQcm9wKGN0eFByb3ApIHtcbiAgICAgICAgICAgIGlmIChjdHhQcm9wKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiBjdHhQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4W2tdID0gY3R4UHJvcFtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldENvbG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbG9yKGtleSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sb3JTZXQgJiYgdGhpcy5jb2xvclNldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JTZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfVXRpbHNKczJbJ2RlZmF1bHQnXS5nZW5lcmF0ZVJhbmRvbUNvbG9yKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3BhcnNlRXhwcmVzcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZUV4cHJlc3MocG9zKSB7XG4gICAgICAgICAgICBpZiAoaXNOYU4ocG9zKSAmJiAvXFwkXFx7LipcXH0vLnRlc3QocG9zKSkge1xuICAgICAgICAgICAgICAgIHBvcyA9IHBvcy5yZXBsYWNlKC9jYW52YXMuaGVpZ2h0L2dpLCB0aGlzLmNhbnZhcy5oZWlnaHQpLnJlcGxhY2UoL2NhbnZhcy53aWR0aC9naSwgdGhpcy5jYW52YXMud2lkdGgpO1xuICAgICAgICAgICAgICAgIHBvcyA9IHBvcy5zdWJzdHJpbmcoMiwgcG9zLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIHBvcyA9IGV2YWwocG9zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDYW52YXNIZWxwZXI7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDYW52YXNIZWxwZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OWpiMjF0YjI0dlEyRnVkbUZ6U0dWc2NHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3p0MVFrRkJhMElzV1VGQldUczdPenRKUVVWVUxGbEJRVms3UVVGRmJFSXNZVUZHVFN4WlFVRlpMRU5CUldwQ0xFMUJRVTBzUlVGQlJTeEpRVUZKTEVWQlFVVXNVVUZCVVN4RlFVRkZPemhDUVVadVFpeFpRVUZaT3p0QlFVZDZRaXhaUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0QlFVTnlRaXhaUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTndRaXhaUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0TFFVTTFRanM3YVVKQlRtZENMRmxCUVZrN08yVkJVV3hDTEhWQ1FVRkhPMEZCUTFZc1owSkJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03UVVGRE0wSXNaMEpCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdRVUZEY2tJc2FVSkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVNeFFpeHZRa0ZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJRemxETEhGQ1FVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRk8wRkJRMnhETEhkQ1FVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU55UXl4M1FrRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGJFTXNkMEpCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMnhETEhkQ1FVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzVFVGQlRTeEZRVUZGTzBGQlEzcENMRFJDUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03Y1VKQlEzcENMRTFCUTBrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEUxQlFVMHNSVUZCUlR0QlFVTTVRaXcwUWtGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzNGQ1FVTjZRaXhOUVVOSkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4TFFVRkxMRVZCUVVVN1FVRkROMElzTkVKQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUXpWRExEUkNRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjBReXcwUWtGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dHhRa0ZETjBNN2FVSkJRMG83UVVGRFJDeHZRa0ZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dEJRVU55UWl4dlFrRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hSUVVGUkxFVkJRVVU3UVVGRGNrTXNkMEpCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE1VTXNkMEpCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdhVUpCUTNKQ0xFMUJRMGtzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeE5RVUZOTEVWQlFVVTdRVUZEZUVNc2QwSkJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZUVNc2QwSkJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2FVSkJRMjVDTzJGQlEwbzdVMEZEU2pzN08yVkJSMWtzZFVKQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTI1Q0xHZENRVUZKTEU5QlFVOHNSVUZCUlR0QlFVTlVMSEZDUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTEU5QlFVOHNSVUZCUlR0QlFVTnVRaXgzUWtGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUXpWQ08yRkJRMG83VTBGRFNqczdPMlZCU1U4c2EwSkJRVU1zUjBGQlJ5eEZRVUZGTzBGQlExWXNaMEpCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRM0pETEhWQ1FVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZETjBJN1FVRkRSQ3h0UWtGQlR5eHhRa0ZCVFN4dFFrRkJiVUlzUlVGQlJTeERRVUZETzFOQlEzUkRPenM3WlVGSFZ5eHpRa0ZCUXl4SFFVRkhMRVZCUVVVN1FVRkRaQ3huUWtGQlNTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTndReXh0UWtGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRCUVVOMFJ5eHRRa0ZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRrTXNiVUpCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEYUVJc2RVSkJRVThzUjBGQlJ5eERRVUZETzJGQlEyUTdRVUZEUkN4dFFrRkJUeXhIUVVGSExFTkJRVUU3VTBGRFlqczdPMWRCY0VWblFpeFpRVUZaT3pzN2NVSkJRVm9zV1VGQldTSXNJbVpwYkdVaU9pSkVPaTloY1hWaEwyZGxiM2RoY2k5emNtTXZZMjl0Ylc5dUwwTmhiblpoYzBobGJIQmxjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCVmRHbHNjeUJtY205dElDY3VMMVYwYVd4ekxtcHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdRMkZ1ZG1GelNHVnNjR1Z5SUh0Y2JseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHTmhiblpoY3l3Z2FuTnZiaXdnWTI5c2IzSlRaWFFwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqWVc1MllYTWdQU0JqWVc1MllYTTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRHVjRkSFZ5WlNBOUlHcHpiMjQ3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMjlzYjNKVFpYUWdQU0JqYjJ4dmNsTmxkRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmtjbUYzVkdWNGRIVnlaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqZEhnZ1BTQjBhR2x6TG1OaGJuWmhjeTVqZEhnN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WTNSNExtSmxaMmx1VUdGMGFDZ3BPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJyWlhrZ2FXNGdkR2hwY3k1MFpYaDBkWEpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuVndaR0YwWlVOMGVGQnliM0FvZEdocGN5NTBaWGgwZFhKbFcydGxlVjB1WTNSNFVISnZjQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBJR2x1SUhSb2FYTXVkR1Y0ZEhWeVpWdHJaWGxkTG1SeVlYY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2NHRnlkQ0E5SUhSb2FYTXVkR1Y0ZEhWeVpWdHJaWGxkTG1SeVlYZGJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIZ2dQU0IwYUdsekxuQmhjbk5sUlhod2NtVnpjeWh3WVhKMExuZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCNUlEMGdkR2hwY3k1d1lYSnpaVVY0Y0hKbGMzTW9jR0Z5ZEM1NUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0dGeWRDNWtjbUYzVkhsd1pTQTlQU0FuYlc5MlpTY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqZEhndWJXOTJaVlJ2S0hnc0lIa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsYkhObElHbG1JQ2h3WVhKMExtUnlZWGRVZVhCbElEMDlJQ2RzYVc1bEp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU4wZUM1c2FXNWxWRzhvZUN3Z2VTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLSEJoY25RdVpISmhkMVI1Y0dVZ1BUMGdKMkZ5WXljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlISmhaR2wxY3lBOUlIUm9hWE11Y0dGeWMyVkZlSEJ5WlhOektIQmhjblF1Y21Ga2FYVnpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR0Z5WXlBOUlIUm9hWE11Y0dGeWMyVkZlSEJ5WlhOektIQmhjblF1WVhKaktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWpkSGd1WVhKaktIZ3NJSGtzSUhKaFpHbDFjeXdnTUN3Z1lYSmpMQ0JtWVd4elpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWpkSGd1WTJ4dmMyVlFZWFJvS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTUwWlhoMGRYSmxXMnRsZVYwdWMzUjViR1VnUFQwZ0ozTjBjbTlyWlNjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OMGVDNXpkSEp2YTJWVGRIbHNaU0E5SUhSb2FYTXVaMlYwUTI5c2IzSW9hMlY1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU4wZUM1emRISnZhMlVvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNjMlVnYVdZZ0tIUm9hWE11ZEdWNGRIVnlaVnRyWlhsZExuTjBlV3hsSUQwOUlDZG1hV3hzSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTNSNExtWnBiR3hUZEhsc1pTQTlJSFJvYVhNdVoyVjBRMjlzYjNJb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTjBlQzVtYVd4c0tDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNibHh1SUNBZ0lIVndaR0YwWlVOMGVGQnliM0FvWTNSNFVISnZjQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9ZM1I0VUhKdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2F5QnBiaUJqZEhoUWNtOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWpkSGhiYTEwZ1BTQmpkSGhRY205d1cydGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzVjYmx4dUlDQWdJR2RsZEVOdmJHOXlLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWpiMnh2Y2xObGRDQW1KaUIwYUdsekxtTnZiRzl5VTJWMFcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1OdmJHOXlVMlYwVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRlYwYVd4ekxtZGxibVZ5WVhSbFVtRnVaRzl0UTI5c2IzSW9LVHRjYmlBZ0lDQjlYRzVjYmx4dUlDQWdJSEJoY25ObFJYaHdjbVZ6Y3lod2IzTXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHpUbUZPS0hCdmN5a2dKaVlnTDF4Y0pGeGNleTRxWEZ4OUx5NTBaWE4wS0hCdmN5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnZjeUE5SUhCdmN5NXlaWEJzWVdObEtDOWpZVzUyWVhNdWFHVnBaMmgwTDJkcExDQjBhR2x6TG1OaGJuWmhjeTVvWldsbmFIUXBMbkpsY0d4aFkyVW9MMk5oYm5aaGN5NTNhV1IwYUM5bmFTd2dkR2hwY3k1allXNTJZWE11ZDJsa2RHZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NHOXpJRDBnY0c5ekxuTjFZbk4wY21sdVp5Z3lMQ0J3YjNNdWJHVnVaM1JvSUMwZ01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2IzTWdQU0JsZG1Gc0tIQnZjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2NHOXpPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ3YjNOY2JpQWdJQ0I5WEc1Y2JuMGlYWDA9IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFV0aWxzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVdGlscygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFV0aWxzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVXRpbHMsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ2dlbmVyYXRlUmFuZG9tQ29sb3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Db2xvcigpIHtcbiAgICAgICAgICAgIHZhciBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gJyMnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVXRpbHM7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBVdGlscztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5amIyMXRiMjR2VlhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRKUVVGeFFpeExRVUZMTzJGQlFVd3NTMEZCU3pzNFFrRkJUQ3hMUVVGTE96czdhVUpCUVV3c1MwRkJTenM3WlVGRFNTd3JRa0ZCUnp0QlFVTjZRaXhuUWtGQlNTeFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03UVVGRGFrTXNaMEpCUVVrc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU5vUWl4cFFrRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU40UWl4eFFrRkJTeXhKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNCRU8wRkJRMFFzYlVKQlFVOHNTMEZCU3l4RFFVRkRPMU5CUTJoQ096czdWMEZTWjBJc1MwRkJTenM3TzNGQ1FVRk1MRXRCUVVzaUxDSm1hV3hsSWpvaVJEb3ZZWEYxWVM5blpXOTNZWEl2YzNKakwyTnZiVzF2Ymk5VmRHbHNjeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRlYwYVd4eklIdGNiaUFnSUNCemRHRjBhV01nWjJWdVpYSmhkR1ZTWVc1a2IyMURiMnh2Y2lncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUd4bGRIUmxjbk1nUFNBbk1ERXlNelExTmpjNE9VRkNRMFJGUmljN1hHNGdJQ0FnSUNBZ0lIWmhjaUJqYjJ4dmNpQTlJQ2NqSnp0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQTJPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlJQ3M5SUd4bGRIUmxjbk5iVFdGMGFDNW1iRzl2Y2loTllYUm9MbkpoYm1SdmJTZ3BJQ29nTVRZcFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMjlzYjNJN1hHNGdJQ0FnZlZ4dWZTSmRmUT09IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfUGxheWVySnMgPSByZXF1aXJlKCcuL1BsYXllci5qcycpO1xuXG52YXIgX1BsYXllckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BsYXllckpzKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25DYW52YXNIZWxwZXJKcyk7XG5cbnZhciBfdGV4dHVyZXNQbGF5ZXJzQ2lyY2xlcGxheWVySnNvbiA9IHJlcXVpcmUoJy4uL3RleHR1cmVzL3BsYXllcnMvY2lyY2xlcGxheWVyLmpzb24nKTtcblxudmFyIF90ZXh0dXJlc1BsYXllcnNDaXJjbGVwbGF5ZXJKc29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RleHR1cmVzUGxheWVyc0NpcmNsZXBsYXllckpzb24pO1xuXG52YXIgQ2lyY2xlUGxheWVyID0gKGZ1bmN0aW9uIChfUGxheWVyKSB7XG4gICAgX2luaGVyaXRzKENpcmNsZVBsYXllciwgX1BsYXllcik7XG5cbiAgICBmdW5jdGlvbiBDaXJjbGVQbGF5ZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaXJjbGVQbGF5ZXIpO1xuXG4gICAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKENpcmNsZVBsYXllci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDaXJjbGVQbGF5ZXIsIFt7XG4gICAgICAgIGtleTogJ2RyYXcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgICAgIG5ldyBfY29tbW9uQ2FudmFzSGVscGVySnMyWydkZWZhdWx0J10odGhpcy5jYW52YXMsIF90ZXh0dXJlc1BsYXllcnNDaXJjbGVwbGF5ZXJKc29uMlsnZGVmYXVsdCddKS5kcmF3VGV4dHVyZSgpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENpcmNsZVBsYXllcjtcbn0pKF9QbGF5ZXJKczJbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENpcmNsZVBsYXllcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5d2NtVm1ZV0p6TDBOcGNtTnNaVkJzWVhsbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN08zZENRVUZ0UWl4aFFVRmhPenM3TzI5RFFVTlFMREpDUVVFeVFqczdPenNyUTBGRE4wSXNkVU5CUVhWRE96czdPMGxCUlhwRExGbEJRVms3WTBGQldpeFpRVUZaT3p0aFFVRmFMRmxCUVZrN09FSkJRVm9zV1VGQldUczdiVU5CUVZvc1dVRkJXVHM3TzJsQ1FVRmFMRmxCUVZrN08yVkJSWHBDTEdkQ1FVRkhPMEZCUTBnc2EwUkJRV2xDTEVsQlFVa3NRMEZCUXl4TlFVRk5MQ3REUVVGWkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVMEZETVVRN096dFhRVXBuUWl4WlFVRlpPenM3Y1VKQlFWb3NXVUZCV1NJc0ltWnBiR1VpT2lKRU9pOWhjWFZoTDJkbGIzZGhjaTl6Y21NdmNISmxabUZpY3k5RGFYSmpiR1ZRYkdGNVpYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVUd4aGVXVnlJR1p5YjIwZ0p5NHZVR3hoZVdWeUxtcHpKenRjYm1sdGNHOXlkQ0JEWVc1MllYTklaV3h3WlhJZ1puSnZiU0FuTGk0dlkyOXRiVzl1TDBOaGJuWmhjMGhsYkhCbGNpNXFjeWM3WEc1cGJYQnZjblFnY0d4aGVXVnlTbk52YmlCbWNtOXRJQ2N1TGk5MFpYaDBkWEpsY3k5d2JHRjVaWEp6TDJOcGNtTnNaWEJzWVhsbGNpNXFjMjl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUTJseVkyeGxVR3hoZVdWeUlHVjRkR1Z1WkhNZ1VHeGhlV1Z5SUh0Y2JseHVJQ0FnSUdSeVlYY29LU0I3WEc0Z0lDQWdJQ0FnSUc1bGR5QkRZVzUyWVhOSVpXeHdaWElvZEdocGN5NWpZVzUyWVhNc2NHeGhlV1Z5U25OdmJpa3VaSEpoZDFSbGVIUjFjbVVvS1R0Y2JpQWdJQ0I5WEc1Y2JuMGlYWDA9IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfV2VhcG9uSnMgPSByZXF1aXJlKCcuL1dlYXBvbi5qcycpO1xuXG52YXIgX1dlYXBvbkpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1dlYXBvbkpzKTtcblxudmFyIF9jb21tb25VdGlsc0pzID0gcmVxdWlyZSgnLi4vY29tbW9uL1V0aWxzLmpzJyk7XG5cbnZhciBfY29tbW9uVXRpbHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25VdGlsc0pzKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25DYW52YXNIZWxwZXJKcyk7XG5cbnZhciBfdGV4dHVyZXNXZWFwb25zRGlydHdlYXBvbkpzb24gPSByZXF1aXJlKCcuLi90ZXh0dXJlcy93ZWFwb25zL2RpcnR3ZWFwb24uanNvbicpO1xuXG52YXIgX3RleHR1cmVzV2VhcG9uc0RpcnR3ZWFwb25Kc29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RleHR1cmVzV2VhcG9uc0RpcnR3ZWFwb25Kc29uKTtcblxudmFyIERpcnRXZWFwb24gPSAoZnVuY3Rpb24gKF9XZWFwb24pIHtcbiAgICBfaW5oZXJpdHMoRGlydFdlYXBvbiwgX1dlYXBvbik7XG5cbiAgICBmdW5jdGlvbiBEaXJ0V2VhcG9uKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlydFdlYXBvbik7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGlydFdlYXBvbi5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEaXJ0V2VhcG9uLCBbe1xuICAgICAgICBrZXk6ICdjcmVhdGVCdWxsZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQnVsbGV0KCkge1xuICAgICAgICAgICAgdGhpcy5ibWQgPSB0aGlzLmdhbWUubWFrZS5iaXRtYXBEYXRhKDEyLCAxMik7XG4gICAgICAgICAgICBuZXcgX2NvbW1vbkNhbnZhc0hlbHBlckpzMlsnZGVmYXVsdCddKHRoaXMuYm1kLCBfdGV4dHVyZXNXZWFwb25zRGlydHdlYXBvbkpzb24yWydkZWZhdWx0J10pLmRyYXdUZXh0dXJlKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRGlydFdlYXBvbjtcbn0pKF9XZWFwb25KczJbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERpcnRXZWFwb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwwUnBjblJYWldGd2IyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096dDNRa0ZCYlVJc1lVRkJZVHM3T3pzMlFrRkRaQ3h2UWtGQmIwSTdPenM3YjBOQlEySXNNa0pCUVRKQ096czdPelpEUVVNM1FpeHhRMEZCY1VNN096czdTVUZGZGtNc1ZVRkJWVHRqUVVGV0xGVkJRVlU3TzJGQlFWWXNWVUZCVlRzNFFrRkJWaXhWUVVGVk96dHRRMEZCVml4VlFVRlZPenM3YVVKQlFWWXNWVUZCVlRzN1pVRkZaaXgzUWtGQlJ6dEJRVU5ZTEdkQ1FVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETjBNc2EwUkJRV2xDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRFpEUVVGWkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVMEZEZGtRN096dFhRVXhuUWl4VlFVRlZPenM3Y1VKQlFWWXNWVUZCVlNJc0ltWnBiR1VpT2lKRU9pOWhjWFZoTDJkbGIzZGhjaTl6Y21NdmNISmxabUZpY3k5RWFYSjBWMlZoY0c5dUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRmRsWVhCdmJpQm1jbTl0SUNjdUwxZGxZWEJ2Ymk1cWN5YzdYRzVwYlhCdmNuUWdWWFJwYkhNZ1puSnZiU0FuTGk0dlkyOXRiVzl1TDFWMGFXeHpMbXB6Snp0Y2JtbHRjRzl5ZENCRFlXNTJZWE5JWld4d1pYSWdabkp2YlNBbkxpNHZZMjl0Ylc5dUwwTmhiblpoYzBobGJIQmxjaTVxY3ljN1hHNXBiWEJ2Y25RZ2QyVmhjRzl1U25OdmJpQm1jbTl0SUNjdUxpOTBaWGgwZFhKbGN5OTNaV0Z3YjI1ekwyUnBjblIzWldGd2IyNHVhbk52YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVScGNuUlhaV0Z3YjI0Z1pYaDBaVzVrY3lCWFpXRndiMjU3WEc1Y2JpQWdJQ0JqY21WaGRHVkNkV3hzWlhRb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVltMWtJRDBnZEdocGN5NW5ZVzFsTG0xaGEyVXVZbWwwYldGd1JHRjBZU2d4TWl3Z01USXBPMXh1SUNBZ0lDQWdJQ0J1WlhjZ1EyRnVkbUZ6U0dWc2NHVnlLSFJvYVhNdVltMWtMSGRsWVhCdmJrcHpiMjRwTG1SeVlYZFVaWGgwZFhKbEtDazdYRzRnSUNBZ2ZWeHVYRzU5SWwxOSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX2NvbW1vbkNhbnZhc0hlbHBlckpzID0gcmVxdWlyZSgnLi4vY29tbW9uL0NhbnZhc0hlbHBlci5qcycpO1xuXG52YXIgX2NvbW1vbkNhbnZhc0hlbHBlckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1vbkNhbnZhc0hlbHBlckpzKTtcblxudmFyIF90ZXh0dXJlc1BsYXllcnNQbGF5ZXJKc29uID0gcmVxdWlyZSgnLi4vdGV4dHVyZXMvcGxheWVycy9QbGF5ZXIuanNvbicpO1xuXG52YXIgX3RleHR1cmVzUGxheWVyc1BsYXllckpzb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGV4dHVyZXNQbGF5ZXJzUGxheWVySnNvbik7XG5cbnZhciBQbGF5ZXIgPSAoZnVuY3Rpb24gKF9QaGFzZXIkU3ByaXRlKSB7XG4gICAgX2luaGVyaXRzKFBsYXllciwgX1BoYXNlciRTcHJpdGUpO1xuXG4gICAgZnVuY3Rpb24gUGxheWVyKGdhbWUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCB3ZWFwb25GYWN0b3J5KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQbGF5ZXIpO1xuXG4gICAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKFBsYXllci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIGdhbWUsIHgsIHksIGdhbWUubWFrZS5iaXRtYXBEYXRhKHdpZHRoLCBoZWlnaHQpKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmtleTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuXG4gICAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSAzMDA7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAtOTA7XG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICB0aGlzLmJvZHkuZHJhZy5zZXQoNjApO1xuXG4gICAgICAgIHRoaXMud2VhcG9uRmFjdG9yeSA9IHdlYXBvbkZhY3Rvcnk7XG4gICAgICAgIHRoaXMuY3JlYXRlV2VhcG9uKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFBsYXllciwgW3tcbiAgICAgICAga2V5OiAnZHJhdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICAgICAgbmV3IF9jb21tb25DYW52YXNIZWxwZXJKczJbJ2RlZmF1bHQnXSh0aGlzLmNhbnZhcywgX3RleHR1cmVzUGxheWVyc1BsYXllckpzb24yWydkZWZhdWx0J10pLmRyYXdUZXh0dXJlKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IDA7XG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XG4gICAgICAgICAgICB0aGlzLmJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLkxFRlQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IC0yMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlJJR0hUKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAyMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuVVApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlKHRoaXMuYW5nbGUsIDMwMCwgdGhpcy5ib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuRE9XTikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUudmVsb2NpdHlGcm9tQW5nbGUodGhpcy5hbmdsZSwgMzAwLCB0aGlzLmJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5maXJlQnV0dG9uLmlzRG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMud2VhcG9uLmZpcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlV2VhcG9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVdlYXBvbigpIHtcbiAgICAgICAgICAgIHRoaXMud2VhcG9uID0gdGhpcy53ZWFwb25GYWN0b3J5LmNyZWF0ZVdlYXBvbignZGlydCcpO1xuXG4gICAgICAgICAgICB0aGlzLndlYXBvbi50cmFja1Nwcml0ZSh0aGlzLCB0aGlzLndpZHRoIC8gMiArIDUsIDAsIHRydWUpO1xuXG4gICAgICAgICAgICB0aGlzLmZpcmVCdXR0b24gPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlDb2RlLlNQQUNFQkFSKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQbGF5ZXI7XG59KShQaGFzZXIuU3ByaXRlKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGxheWVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl3Y21WbVlXSnpMMUJzWVhsbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN08yOURRVUY1UWl3eVFrRkJNa0k3T3pzN2VVTkJRemRDTEdsRFFVRnBRenM3T3p0SlFVVnVReXhOUVVGTk8yTkJRVTRzVFVGQlRUczdRVUZGV2l4aFFVWk5MRTFCUVUwc1EwRkZXQ3hKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeGhRVUZoTEVWQlFVVTdPRUpCUmpWRExFMUJRVTA3TzBGQlIyNUNMRzFEUVVoaExFMUJRVTBzTmtOQlIySXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTzBGQlEzWkVMRmxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0QlFVTjJRaXhaUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXpzN1FVRkZia0lzV1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPenRCUVVWYUxGbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4RFFVRkRPMEZCUTJwQ0xGbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNN1FVRkRha0lzV1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBGQlF6VkNMRmxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTjBSQ3haUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU53UXl4WlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN08wRkJSWFpDTEZsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1lVRkJZU3hEUVVGRE8wRkJRMjVETEZsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRenRMUVVOMlFqczdhVUpCYkVKblFpeE5RVUZOT3p0bFFYRkNia0lzWjBKQlFVYzdRVUZEU0N4clJFRkJhVUlzU1VGQlNTeERRVUZETEUxQlFVMHNlVU5CUVZrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFRRVU14UkRzN08yVkJSVXNzYTBKQlFVYzdRVUZEVEN4blFrRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVONlFpeG5Ra0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjZRaXhuUWtGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVU1UWl4blFrRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1FVRkRka1FzYjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETzJGQlEzQkRMRTFCUTBrc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkROMFFzYjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFZEJRVWNzUTBGQlF6dGhRVU51UXp0QlFVTkVMR2RDUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSVHRCUVVOeVJDeHZRa0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdZVUZEYmtZc1RVRkRTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRCUVVNMVJDeHZRa0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdZVUZEYmtZN08wRkJSVVFzWjBKQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRGVFSXNiMEpCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdZVUZEZEVJN1UwRkRTanM3TzJWQlJWY3NkMEpCUVVjN1FVRkRXQ3huUWtGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXpzN1FVRkZkRVFzWjBKQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPenRCUVVVelJDeG5Ra0ZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1UwRkRPVVU3T3p0WFFYUkVaMElzVFVGQlRUdEhRVUZUTEUxQlFVMHNRMEZCUXl4TlFVRk5PenR4UWtGQk5VSXNUVUZCVFNJc0ltWnBiR1VpT2lKRU9pOWhjWFZoTDJkbGIzZGhjaTl6Y21NdmNISmxabUZpY3k5UWJHRjVaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1EyRnVkbUZ6U0dWc2NHVnlJR1p5YjIwZ0p5NHVMMk52YlcxdmJpOURZVzUyWVhOSVpXeHdaWEl1YW5Nbk8xeHVhVzF3YjNKMElIQnNZWGxsY2twemIyNGdabkp2YlNBbkxpNHZkR1Y0ZEhWeVpYTXZjR3hoZVdWeWN5OVFiR0Y1WlhJdWFuTnZiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJzWVhsbGNpQmxlSFJsYm1SeklGQm9ZWE5sY2k1VGNISnBkR1VnZTF4dVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb1oyRnRaU3dnZUN3Z2VTd2dkMmxrZEdnc0lHaGxhV2RvZEN3Z1kyOXNiM0lzSUhkbFlYQnZia1poWTNSdmNua3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9aMkZ0WlN3Z2VDd2dlU3dnWjJGdFpTNXRZV3RsTG1KcGRHMWhjRVJoZEdFb2QybGtkR2dzSUdobGFXZG9kQ2twTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbU5oYm5aaGN5QTlJSFJvYVhNdWEyVjVPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTnZiRzl5SUQwZ1kyOXNiM0k3WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCMGFHbHpMbVJ5WVhjb0tUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTndaV1ZrSUQwZ016QXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtRnVaMnhsSUQwZ0xUa3dPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtRnVZMmh2Y2k1elpYUlVieWd3TGpVc0lEQXVOU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1d2FIbHphV056TG1WdVlXSnNaU2gwYUdsekxDQlFhR0Z6WlhJdVVHaDVjMmxqY3k1QlVrTkJSRVVwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUp2WkhrdVkyOXNiR2xrWlZkdmNteGtRbTkxYm1SeklEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxtUnlZV2N1YzJWMEtEWXdLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbmRsWVhCdmJrWmhZM1J2Y25rZ1BTQjNaV0Z3YjI1R1lXTjBiM0o1TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbU55WldGMFpWZGxZWEJ2YmlncE8xeHVJQ0FnSUgxY2JseHVYRzRnSUNBZ1pISmhkeWdwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNJRU5oYm5aaGMwaGxiSEJsY2loMGFHbHpMbU5oYm5aaGN5eHdiR0Y1WlhKS2MyOXVLUzVrY21GM1ZHVjRkSFZ5WlNncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYjJSNUxuWmxiRzlqYVhSNUxuZ2dQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUp2WkhrdWRtVnNiMk5wZEhrdWVTQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1aGJtZDFiR0Z5Vm1Wc2IyTnBkSGtnUFNBd08xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWRoYldVdWFXNXdkWFF1YTJWNVltOWhjbVF1YVhORWIzZHVLRkJvWVhObGNpNUxaWGxpYjJGeVpDNU1SVVpVS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG1GdVozVnNZWEpXWld4dlkybDBlU0E5SUMweU1EQTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWld4elpTQnBaaUFvZEdocGN5NW5ZVzFsTG1sdWNIVjBMbXRsZVdKdllYSmtMbWx6Ukc5M2JpaFFhR0Z6WlhJdVMyVjVZbTloY21RdVVrbEhTRlFwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1WVc1bmRXeGhjbFpsYkc5amFYUjVJRDBnTWpBd08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWRoYldVdWFXNXdkWFF1YTJWNVltOWhjbVF1YVhORWIzZHVLRkJvWVhObGNpNUxaWGxpYjJGeVpDNVZVQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbUZ5WTJGa1pTNTJaV3h2WTJsMGVVWnliMjFCYm1kc1pTaDBhR2x6TG1GdVoyeGxMQ0F6TURBc0lIUm9hWE11WW05a2VTNTJaV3h2WTJsMGVTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWld4elpTQnBaaUFvZEdocGN5NW5ZVzFsTG1sdWNIVjBMbXRsZVdKdllYSmtMbWx6Ukc5M2JpaFFhR0Z6WlhJdVMyVjVZbTloY21RdVJFOVhUaWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbUZ5WTJGa1pTNTJaV3h2WTJsMGVVWnliMjFCYm1kc1pTaDBhR2x6TG1GdVoyeGxMQ0F6TURBc0lIUm9hWE11WW05a2VTNTJaV3h2WTJsMGVTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1bWFYSmxRblYwZEc5dUxtbHpSRzkzYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTNaV0Z3YjI0dVptbHlaU2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTNKbFlYUmxWMlZoY0c5dUtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuZGxZWEJ2YmlBOUlIUm9hWE11ZDJWaGNHOXVSbUZqZEc5eWVTNWpjbVZoZEdWWFpXRndiMjRvSjJScGNuUW5LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbmRsWVhCdmJpNTBjbUZqYTFOd2NtbDBaU2gwYUdsekxDQjBhR2x6TG5kcFpIUm9JQzhnTWlBcklEVXNJREFzSUhSeWRXVXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVabWx5WlVKMWRIUnZiaUE5SUhSb2FYTXVaMkZ0WlM1cGJuQjFkQzVyWlhsaWIyRnlaQzVoWkdSTFpYa29VR2hoYzJWeUxrdGxlVU52WkdVdVUxQkJRMFZDUVZJcE8xeHVJQ0FnSUgxY2JseHVmU0pkZlE9PSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9QbGF5ZXJKcyA9IHJlcXVpcmUoJy4vUGxheWVyLmpzJyk7XG5cbnZhciBfUGxheWVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGxheWVySnMpO1xuXG52YXIgX1NxdWFyZVBsYXllckpzID0gcmVxdWlyZSgnLi9TcXVhcmVQbGF5ZXIuanMnKTtcblxudmFyIF9TcXVhcmVQbGF5ZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TcXVhcmVQbGF5ZXJKcyk7XG5cbnZhciBfQ2lyY2xlUGxheWVySnMgPSByZXF1aXJlKCcuL0NpcmNsZVBsYXllci5qcycpO1xuXG52YXIgX0NpcmNsZVBsYXllckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NpcmNsZVBsYXllckpzKTtcblxudmFyIF9XZWFwb25GYWN0b3J5SnMgPSByZXF1aXJlKCcuL1dlYXBvbkZhY3RvcnkuanMnKTtcblxudmFyIF9XZWFwb25GYWN0b3J5SnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfV2VhcG9uRmFjdG9yeUpzKTtcblxudmFyIF9jb21tb25VdGlsc0pzID0gcmVxdWlyZSgnLi4vY29tbW9uL1V0aWxzLmpzJyk7XG5cbnZhciBfY29tbW9uVXRpbHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25VdGlsc0pzKTtcblxudmFyIFBsYXllckZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllckZhY3RvcnkoZ2FtZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGxheWVyRmFjdG9yeSk7XG5cbiAgICAgICAgdGhpcy5fcGxheWVyVHlwZXMgPSBbJ3RyaWFuZ2xlJywgJ3NxdWFyZScsICdjaXJjbGUnXTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLndlYXBvbkZhY3RvcnkgPSBuZXcgX1dlYXBvbkZhY3RvcnlKczJbJ2RlZmF1bHQnXShnYW1lKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUGxheWVyRmFjdG9yeSwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlUGxheWVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcihkZWZhdWx0VHlwZSkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBkZWZhdWx0VHlwZTtcbiAgICAgICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0aGlzLl9wbGF5ZXJUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9wbGF5ZXJUeXBlcy5sZW5ndGgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IF9QbGF5ZXJKczJbJ2RlZmF1bHQnXSh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53aWR0aCAvIDIsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLCAzNSwgMzAsIF9jb21tb25VdGlsc0pzMlsnZGVmYXVsdCddLmdlbmVyYXRlUmFuZG9tQ29sb3IoKSwgdGhpcy53ZWFwb25GYWN0b3J5KTtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3F1YXJlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgX1NxdWFyZVBsYXllckpzMlsnZGVmYXVsdCddKHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndpZHRoIC8gMiwgdGhpcy5nYW1lLmhlaWdodCAvIDIsIDM1LCAzMCwgX2NvbW1vblV0aWxzSnMyWydkZWZhdWx0J10uZ2VuZXJhdGVSYW5kb21Db2xvcigpLCB0aGlzLndlYXBvbkZhY3RvcnkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfQ2lyY2xlUGxheWVySnMyWydkZWZhdWx0J10odGhpcy5nYW1lLCB0aGlzLmdhbWUud2lkdGggLyAyLCB0aGlzLmdhbWUuaGVpZ2h0IC8gMiwgMzUsIDMwLCBfY29tbW9uVXRpbHNKczJbJ2RlZmF1bHQnXS5nZW5lcmF0ZVJhbmRvbUNvbG9yKCksIHRoaXMud2VhcG9uRmFjdG9yeSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfUGxheWVySnMyWydkZWZhdWx0J10odGhpcy5nYW1lLCB0aGlzLmdhbWUud2lkdGggLyAyLCB0aGlzLmdhbWUuaGVpZ2h0IC8gMiwgMzUsIDMwLCBfY29tbW9uVXRpbHNKczJbJ2RlZmF1bHQnXS5nZW5lcmF0ZVJhbmRvbUNvbG9yKCksIHRoaXMud2VhcG9uRmFjdG9yeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUGxheWVyRmFjdG9yeTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBsYXllckZhY3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwxQnNZWGxsY2taaFkzUnZjbmt1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN08zZENRVUZ0UWl4aFFVRmhPenM3T3poQ1FVTlFMRzFDUVVGdFFqczdPenM0UWtGRGJrSXNiVUpCUVcxQ096czdPeXRDUVVOc1FpeHZRa0ZCYjBJN096czdOa0pCUXpWQ0xHOUNRVUZ2UWpzN096dEpRVVZxUWl4aFFVRmhPMEZCU1c1Q0xHRkJTazBzWVVGQllTeERRVWxzUWl4SlFVRkpMRVZCUVVVN09FSkJTa1FzWVVGQllUczdZVUZGT1VJc1dVRkJXU3hIUVVGSExFTkJRVU1zVlVGQlZTeEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNN08wRkJSek5ETEZsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRMnBDTEZsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc2FVTkJRV3RDTEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTJoRU96dHBRa0ZRWjBJc1lVRkJZVHM3WlVGVGJFSXNjMEpCUVVNc1YwRkJWeXhGUVVGRk8wRkJRM1JDTEdkQ1FVRkpMRWxCUVVrc1IwRkJSeXhYUVVGWExFTkJRVU03UVVGRGRrSXNaMEpCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRFVDeHZRa0ZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnhHTzBGQlEwUXNiMEpCUVZFc1NVRkJTVHRCUVVOU0xIRkNRVUZMTEZWQlFWVTdRVUZEV0N3eVFrRkJUeXd3UWtGQlZ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3d5UWtGQlRTeHRRa0ZCYlVJc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0QlFVRkJMRUZCUTNKSkxIRkNRVUZMTEZGQlFWRTdRVUZEVkN3eVFrRkJUeXhuUTBGQmFVSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzTWtKQlFVMHNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1FVRkJRU3hCUVVNelNTeHhRa0ZCU3l4UlFVRlJPMEZCUTFRc01rSkJRVThzWjBOQlFXbENMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTERKQ1FVRk5MRzFDUVVGdFFpeEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8wRkJRVUVzUVVGRE0wazdRVUZEU1N3eVFrRkJUeXd3UWtGQlZ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3d5UWtGQlRTeHRRa0ZCYlVJc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0QlFVRkJMR0ZCUTNoSk8xTkJRMG83T3p0WFFYaENaMElzWVVGQllUczdPM0ZDUVVGaUxHRkJRV0VpTENKbWFXeGxJam9pUkRvdllYRjFZUzluWlc5M1lYSXZjM0pqTDNCeVpXWmhZbk12VUd4aGVXVnlSbUZqZEc5eWVTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JRYkdGNVpYSWdabkp2YlNBbkxpOVFiR0Y1WlhJdWFuTW5PMXh1YVcxd2IzSjBJRk54ZFdGeVpWQnNZWGxsY2lCbWNtOXRJQ2N1TDFOeGRXRnlaVkJzWVhsbGNpNXFjeWM3WEc1cGJYQnZjblFnUTJseVkyeGxVR3hoZVdWeUlHWnliMjBnSnk0dlEybHlZMnhsVUd4aGVXVnlMbXB6Snp0Y2JtbHRjRzl5ZENCWFpXRndiMjVHWVdOMGIzSjVJR1p5YjIwZ0p5NHZWMlZoY0c5dVJtRmpkRzl5ZVM1cWN5YzdYRzVwYlhCdmNuUWdWWFJwYkhNZ1puSnZiU0FuTGk0dlkyOXRiVzl1TDFWMGFXeHpMbXB6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUd4aGVXVnlSbUZqZEc5eWVTQjdYRzVjYmlBZ0lDQmZjR3hoZVdWeVZIbHdaWE1nUFNCYkozUnlhV0Z1WjJ4bEp5d2dKM054ZFdGeVpTY3NJQ2RqYVhKamJHVW5YVHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0dkaGJXVXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsSUQwZ1oyRnRaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTNaV0Z3YjI1R1lXTjBiM0o1SUQwZ2JtVjNJRmRsWVhCdmJrWmhZM1J2Y25rb1oyRnRaU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZM0psWVhSbFVHeGhlV1Z5S0dSbFptRjFiSFJVZVhCbEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCMGVYQmxJRDBnWkdWbVlYVnNkRlI1Y0dVN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doZEhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaU0E5SUhSb2FYTXVYM0JzWVhsbGNsUjVjR1Z6VzAxaGRHZ3VabXh2YjNJb1RXRjBhQzV5WVc1a2IyMG9LU0FxSUhSb2FYTXVYM0JzWVhsbGNsUjVjR1Z6TG14bGJtZDBhQ2xkTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lITjNhWFJqYUNBb2RIbHdaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNCY0luUnlhV0Z1WjJ4bFhDSTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJRYkdGNVpYSW9kR2hwY3k1bllXMWxMQ0IwYUdsekxtZGhiV1V1ZDJsa2RHZ2dMeUF5TENCMGFHbHpMbWRoYldVdWFHVnBaMmgwSUM4Z01pd2dNelVzSURNd0xDQlZkR2xzY3k1blpXNWxjbUYwWlZKaGJtUnZiVU52Ykc5eUtDa3NJSFJvYVhNdWQyVmhjRzl1Um1GamRHOXllU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUZ3aWMzRjFZWEpsWENJNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1bGR5QlRjWFZoY21WUWJHRjVaWElvZEdocGN5NW5ZVzFsTENCMGFHbHpMbWRoYldVdWQybGtkR2dnTHlBeUxDQjBhR2x6TG1kaGJXVXVhR1ZwWjJoMElDOGdNaXdnTXpVc0lETXdMQ0JWZEdsc2N5NW5aVzVsY21GMFpWSmhibVJ2YlVOdmJHOXlLQ2tzSUhSb2FYTXVkMlZoY0c5dVJtRmpkRzl5ZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElGd2lZMmx5WTJ4bFhDSTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJEYVhKamJHVlFiR0Y1WlhJb2RHaHBjeTVuWVcxbExDQjBhR2x6TG1kaGJXVXVkMmxrZEdnZ0x5QXlMQ0IwYUdsekxtZGhiV1V1YUdWcFoyaDBJQzhnTWl3Z016VXNJRE13TENCVmRHbHNjeTVuWlc1bGNtRjBaVkpoYm1SdmJVTnZiRzl5S0Nrc0lIUm9hWE11ZDJWaGNHOXVSbUZqZEc5eWVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VHeGhlV1Z5S0hSb2FYTXVaMkZ0WlN3Z2RHaHBjeTVuWVcxbExuZHBaSFJvSUM4Z01pd2dkR2hwY3k1bllXMWxMbWhsYVdkb2RDQXZJRElzSURNMUxDQXpNQ3dnVlhScGJITXVaMlZ1WlhKaGRHVlNZVzVrYjIxRGIyeHZjaWdwTENCMGFHbHpMbmRsWVhCdmJrWmhZM1J2Y25rcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzU5SWwxOSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX1BsYXllckpzID0gcmVxdWlyZSgnLi9QbGF5ZXIuanMnKTtcblxudmFyIF9QbGF5ZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QbGF5ZXJKcyk7XG5cbnZhciBfY29tbW9uQ2FudmFzSGVscGVySnMgPSByZXF1aXJlKCcuLi9jb21tb24vQ2FudmFzSGVscGVyLmpzJyk7XG5cbnZhciBfY29tbW9uQ2FudmFzSGVscGVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tbW9uQ2FudmFzSGVscGVySnMpO1xuXG52YXIgX3RleHR1cmVzUGxheWVyc1NxdWFyZXBsYXllckpzb24gPSByZXF1aXJlKCcuLi90ZXh0dXJlcy9wbGF5ZXJzL3NxdWFyZXBsYXllci5qc29uJyk7XG5cbnZhciBfdGV4dHVyZXNQbGF5ZXJzU3F1YXJlcGxheWVySnNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXh0dXJlc1BsYXllcnNTcXVhcmVwbGF5ZXJKc29uKTtcblxudmFyIFNxdWFyZVBsYXllciA9IChmdW5jdGlvbiAoX1BsYXllcikge1xuICAgIF9pbmhlcml0cyhTcXVhcmVQbGF5ZXIsIF9QbGF5ZXIpO1xuXG4gICAgZnVuY3Rpb24gU3F1YXJlUGxheWVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3F1YXJlUGxheWVyKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihTcXVhcmVQbGF5ZXIucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3F1YXJlUGxheWVyLCBbe1xuICAgICAgICBrZXk6ICdkcmF3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICBuZXcgX2NvbW1vbkNhbnZhc0hlbHBlckpzMlsnZGVmYXVsdCddKHRoaXMuY2FudmFzLCBfdGV4dHVyZXNQbGF5ZXJzU3F1YXJlcGxheWVySnNvbjJbJ2RlZmF1bHQnXSkuZHJhd1RleHR1cmUoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTcXVhcmVQbGF5ZXI7XG59KShfUGxheWVySnMyWydkZWZhdWx0J10pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTcXVhcmVQbGF5ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwxTnhkV0Z5WlZCc1lYbGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPM2RDUVVGdFFpeGhRVUZoT3pzN08yOURRVU5RTERKQ1FVRXlRanM3T3pzclEwRkROMElzZFVOQlFYVkRPenM3TzBsQlJYcERMRmxCUVZrN1kwRkJXaXhaUVVGWk96dGhRVUZhTEZsQlFWazdPRUpCUVZvc1dVRkJXVHM3YlVOQlFWb3NXVUZCV1RzN08ybENRVUZhTEZsQlFWazdPMlZCUlhwQ0xHZENRVUZITzBGQlEwZ3NhMFJCUVdsQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEN0RFFVRlpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VTBGRE1VUTdPenRYUVVwblFpeFpRVUZaT3pzN2NVSkJRVm9zV1VGQldTSXNJbVpwYkdVaU9pSkVPaTloY1hWaEwyZGxiM2RoY2k5emNtTXZjSEpsWm1GaWN5OVRjWFZoY21WUWJHRjVaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VHeGhlV1Z5SUdaeWIyMGdKeTR2VUd4aGVXVnlMbXB6Snp0Y2JtbHRjRzl5ZENCRFlXNTJZWE5JWld4d1pYSWdabkp2YlNBbkxpNHZZMjl0Ylc5dUwwTmhiblpoYzBobGJIQmxjaTVxY3ljN1hHNXBiWEJ2Y25RZ2NHeGhlV1Z5U25OdmJpQm1jbTl0SUNjdUxpOTBaWGgwZFhKbGN5OXdiR0Y1WlhKekwzTnhkV0Z5WlhCc1lYbGxjaTVxYzI5dUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1UzRjFZWEpsVUd4aGVXVnlJR1Y0ZEdWdVpITWdVR3hoZVdWeUlIdGNibHh1SUNBZ0lHUnlZWGNvS1NCN1hHNGdJQ0FnSUNBZ0lHNWxkeUJEWVc1MllYTklaV3h3WlhJb2RHaHBjeTVqWVc1MllYTXNjR3hoZVdWeVNuTnZiaWt1WkhKaGQxUmxlSFIxY21Vb0tUdGNiaUFnSUNCOVhHNWNibjBpWFgwPSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9jb21tb25VdGlsc0pzID0gcmVxdWlyZSgnLi4vY29tbW9uL1V0aWxzLmpzJyk7XG5cbnZhciBfY29tbW9uVXRpbHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25VdGlsc0pzKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25DYW52YXNIZWxwZXJKcyk7XG5cbnZhciBfdGV4dHVyZXNXZWFwb25zV2VhcG9uSnNvbiA9IHJlcXVpcmUoJy4uL3RleHR1cmVzL3dlYXBvbnMvd2VhcG9uLmpzb24nKTtcblxudmFyIF90ZXh0dXJlc1dlYXBvbnNXZWFwb25Kc29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RleHR1cmVzV2VhcG9uc1dlYXBvbkpzb24pO1xuXG52YXIgV2VhcG9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWFwb24oZ2FtZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2VhcG9uKTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVdlYXBvbigpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXZWFwb24sIFt7XG4gICAgICAgIGtleTogJ2NyZWF0ZUJ1bGxldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWxsZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmJtZCA9IHRoaXMuZ2FtZS5tYWtlLmJpdG1hcERhdGEoMTIsIDEyKTtcbiAgICAgICAgICAgIG5ldyBfY29tbW9uQ2FudmFzSGVscGVySnMyWydkZWZhdWx0J10odGhpcy5ibWQsIF90ZXh0dXJlc1dlYXBvbnNXZWFwb25Kc29uMlsnZGVmYXVsdCddKS5kcmF3VGV4dHVyZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjcmVhdGVXZWFwb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlV2VhcG9uKCkge1xuICAgICAgICAgICAgdGhpcy53ZWFwb24gPSB0aGlzLmdhbWUuYWRkLndlYXBvbigzMCwgdGhpcy5ibWQpO1xuXG4gICAgICAgICAgICAvLyAgVGhlIGJ1bGxldCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkga2lsbGVkIHdoZW4gaXQgbGVhdmVzIHRoZSB3b3JsZCBib3VuZHNcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLmJ1bGxldEtpbGxUeXBlID0gUGhhc2VyLldlYXBvbi5LSUxMX1dPUkxEX0JPVU5EUztcblxuICAgICAgICAgICAgLy8gIFRoZSBzcGVlZCBhdCB3aGljaCB0aGUgYnVsbGV0IGlzIGZpcmVkXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5idWxsZXRTcGVlZCA9IDQwMDtcblxuICAgICAgICAgICAgLy8gIFNwZWVkLXVwIHRoZSByYXRlIG9mIGZpcmUsIGFsbG93aW5nIHRoZW0gdG8gc2hvb3QgMSBidWxsZXQgZXZlcnkgNjBtc1xuICAgICAgICAgICAgdGhpcy53ZWFwb24uZmlyZVJhdGUgPSA2MDtcblxuICAgICAgICAgICAgLy8gIEFkZCBhIHZhcmlhbmNlIHRvIHRoZSBidWxsZXQgc3BlZWQgYnkgKy0gdGhpcyB2YWx1ZVxuICAgICAgICAgICAgdGhpcy53ZWFwb24uYnVsbGV0U3BlZWRWYXJpYW5jZSA9IDIwMDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndHJhY2tTcHJpdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdHJhY2tTcHJpdGUoc3ByaXRlLCB4LCB5LCByb3RhdGlvbikge1xuICAgICAgICAgICAgdGhpcy53ZWFwb24udHJhY2tTcHJpdGUoc3ByaXRlLCB4LCB5LCByb3RhdGlvbik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2ZpcmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmlyZSgpIHtcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLmZpcmUoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXZWFwb247XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBXZWFwb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwxZGxZWEJ2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdOa0pCUVd0Q0xHOUNRVUZ2UWpzN096dHZRMEZEWWl3eVFrRkJNa0k3T3pzN2VVTkJRemRDTEdsRFFVRnBRenM3T3p0SlFVVnVReXhOUVVGTk8wRkJSVm9zWVVGR1RTeE5RVUZOTEVOQlJWZ3NTVUZCU1N4RlFVRkZPemhDUVVaRUxFMUJRVTA3TzBGQlIyNUNMRmxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEycENMRmxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dEJRVU53UWl4WlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03UzBGRGRrSTdPMmxDUVU1blFpeE5RVUZOT3p0bFFWTllMSGRDUVVGSE8wRkJRMWdzWjBKQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU0zUXl4clJFRkJhVUlzU1VGQlNTeERRVUZETEVkQlFVY3NlVU5CUVZrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFRRVU4yUkRzN08yVkJSMWNzZDBKQlFVVTdRVUZEVml4blFrRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3TzBGQlIycEVMR2RDUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRPenM3UVVGSE4wUXNaMEpCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVkQlFVY3NRMEZCUXpzN08wRkJSemxDTEdkQ1FVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdPenRCUVVjeFFpeG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXh0UWtGQmJVSXNSMEZCUnl4SFFVRkhMRU5CUVVNN1UwRkRla003T3p0bFFVZFZMSEZDUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRkZCUVZFc1JVRkJSVHRCUVVOb1F5eG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VTBGRGJrUTdPenRsUVVkSExHZENRVUZITzBGQlEwZ3NaMEpCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVMEZEZEVJN096dFhRWFpEWjBJc1RVRkJUVHM3TzNGQ1FVRk9MRTFCUVUwaUxDSm1hV3hsSWpvaVJEb3ZZWEYxWVM5blpXOTNZWEl2YzNKakwzQnlaV1poWW5NdlYyVmhjRzl1TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGVjBhV3h6SUdaeWIyMGdKeTR1TDJOdmJXMXZiaTlWZEdsc2N5NXFjeWM3WEc1cGJYQnZjblFnUTJGdWRtRnpTR1ZzY0dWeUlHWnliMjBnSnk0dUwyTnZiVzF2Ymk5RFlXNTJZWE5JWld4d1pYSXVhbk1uTzF4dWFXMXdiM0owSUhkbFlYQnZia3B6YjI0Z1puSnZiU0FuTGk0dmRHVjRkSFZ5WlhNdmQyVmhjRzl1Y3k5M1pXRndiMjR1YW5OdmJpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGZGxZWEJ2YmlCN1hHNWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaG5ZVzFsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTQTlJR2RoYldVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WTNKbFlYUmxRblZzYkdWMEtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkzSmxZWFJsVjJWaGNHOXVLQ2s3WEc0Z0lDQWdmVnh1WEc1Y2JpQWdJQ0JqY21WaGRHVkNkV3hzWlhRb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVltMWtJRDBnZEdocGN5NW5ZVzFsTG0xaGEyVXVZbWwwYldGd1JHRjBZU2d4TWl3Z01USXBPMXh1SUNBZ0lDQWdJQ0J1WlhjZ1EyRnVkbUZ6U0dWc2NHVnlLSFJvYVhNdVltMWtMSGRsWVhCdmJrcHpiMjRwTG1SeVlYZFVaWGgwZFhKbEtDazdYRzRnSUNBZ2ZWeHVYRzVjYmlBZ0lDQmpjbVZoZEdWWFpXRndiMjRvS1h0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUzWldGd2IyNGdQU0IwYUdsekxtZGhiV1V1WVdSa0xuZGxZWEJ2Ymlnek1Dd2dkR2hwY3k1aWJXUXBPMXh1WEc0Z0lDQWdJQ0FnSUM4dklDQlVhR1VnWW5Wc2JHVjBJSGRwYkd3Z1ltVWdZWFYwYjIxaGRHbGpZV3hzZVNCcmFXeHNaV1FnZDJobGJpQnBkQ0JzWldGMlpYTWdkR2hsSUhkdmNteGtJR0p2ZFc1a2MxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5kbFlYQnZiaTVpZFd4c1pYUkxhV3hzVkhsd1pTQTlJRkJvWVhObGNpNVhaV0Z3YjI0dVMwbE1URjlYVDFKTVJGOUNUMVZPUkZNN1hHNWNiaUFnSUNBZ0lDQWdMeThnSUZSb1pTQnpjR1ZsWkNCaGRDQjNhR2xqYUNCMGFHVWdZblZzYkdWMElHbHpJR1pwY21Wa1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZDJWaGNHOXVMbUoxYkd4bGRGTndaV1ZrSUQwZ05EQXdPMXh1WEc0Z0lDQWdJQ0FnSUM4dklDQlRjR1ZsWkMxMWNDQjBhR1VnY21GMFpTQnZaaUJtYVhKbExDQmhiR3h2ZDJsdVp5QjBhR1Z0SUhSdklITm9iMjkwSURFZ1luVnNiR1YwSUdWMlpYSjVJRFl3YlhOY2JpQWdJQ0FnSUNBZ2RHaHBjeTUzWldGd2IyNHVabWx5WlZKaGRHVWdQU0EyTUR0Y2JseHVJQ0FnSUNBZ0lDQXZMeUFnUVdSa0lHRWdkbUZ5YVdGdVkyVWdkRzhnZEdobElHSjFiR3hsZENCemNHVmxaQ0JpZVNBckxTQjBhR2x6SUhaaGJIVmxYRzRnSUNBZ0lDQWdJSFJvYVhNdWQyVmhjRzl1TG1KMWJHeGxkRk53WldWa1ZtRnlhV0Z1WTJVZ1BTQXlNREE3WEc0Z0lDQWdmVnh1WEc1Y2JpQWdJQ0IwY21GamExTndjbWwwWlNoemNISnBkR1VzSUhnc0lIa3NJSEp2ZEdGMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkMlZoY0c5dUxuUnlZV05yVTNCeWFYUmxLSE53Y21sMFpTd2dlQ3dnZVN3Z2NtOTBZWFJwYjI0cE8xeHVJQ0FnSUgxY2JseHVYRzRnSUNBZ1ptbHlaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUzWldGd2IyNHVabWx5WlNncE8xeHVJQ0FnSUgxY2JseHVmU0pkZlE9PSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9XZWFwb25KcyA9IHJlcXVpcmUoJy4vV2VhcG9uLmpzJyk7XG5cbnZhciBfV2VhcG9uSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfV2VhcG9uSnMpO1xuXG52YXIgX0RpcnRXZWFwb25KcyA9IHJlcXVpcmUoJy4vRGlydFdlYXBvbi5qcycpO1xuXG52YXIgX0RpcnRXZWFwb25KczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXJ0V2VhcG9uSnMpO1xuXG52YXIgV2VhcG9uRmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2VhcG9uRmFjdG9yeShnYW1lKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXZWFwb25GYWN0b3J5KTtcblxuICAgICAgICB0aGlzLndlYXBvbl90eXBlID0gWydiYXNpYycsICdkaXJ0J107XG5cbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV2VhcG9uRmFjdG9yeSwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlV2VhcG9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVdlYXBvbih0eXBlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmFzaWNcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfV2VhcG9uSnMyWydkZWZhdWx0J10odGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGlydFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IF9EaXJ0V2VhcG9uSnMyWydkZWZhdWx0J10odGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IF9XZWFwb25KczJbJ2RlZmF1bHQnXSh0aGlzLmdhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdlYXBvbkZhY3Rvcnk7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBXZWFwb25GYWN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl3Y21WbVlXSnpMMWRsWVhCdmJrWmhZM1J2Y25rdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPM2RDUVVGdFFpeGhRVUZoT3pzN096UkNRVU5VTEdsQ1FVRnBRanM3T3p0SlFVVnVRaXhoUVVGaE8wRkJTVzVDTEdGQlNrMHNZVUZCWVN4RFFVbHNRaXhKUVVGSkxFVkJRVVU3T0VKQlNrUXNZVUZCWVRzN1lVRkZPVUlzVjBGQlZ5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkRMRTFCUVUwc1EwRkJRenM3UVVGSE1VSXNXVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03UzBGRGNFSTdPMmxDUVU1blFpeGhRVUZoT3p0bFFWTnNRaXh6UWtGQlF5eEpRVUZKTEVWQlFVVTdRVUZEWml4dlFrRkJUeXhKUVVGSk8wRkJRMUFzY1VKQlFVc3NUMEZCVHp0QlFVTlVMREpDUVVGUExEQkNRVUZYTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVGQkxFRkJRMmhETEhGQ1FVRkxMRTFCUVUwN1FVRkRVaXd5UWtGQlR5dzRRa0ZCWlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGQlFTeEJRVU53UXp0QlFVTkhMREpDUVVGUExEQkNRVUZYTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVGQkxHRkJRMjVETzFOQlEwbzdPenRYUVd4Q1owSXNZVUZCWVRzN08zRkNRVUZpTEdGQlFXRWlMQ0ptYVd4bElqb2lSRG92WVhGMVlTOW5aVzkzWVhJdmMzSmpMM0J5WldaaFluTXZWMlZoY0c5dVJtRmpkRzl5ZVM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlhaV0Z3YjI0Z1puSnZiU0FuTGk5WFpXRndiMjR1YW5Nbk8xeHVhVzF3YjNKMElFUnBjblJYWldGd2IyNGdabkp2YlNBbkxpOUVhWEowVjJWaGNHOXVMbXB6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVjJWaGNHOXVSbUZqZEc5eWVTQjdYRzVjYmlBZ0lDQjNaV0Z3YjI1ZmRIbHdaU0E5SUZzblltRnphV01uTENka2FYSjBKMTA3WEc1Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lobllXMWxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlNBOUlHZGhiV1U3WEc0Z0lDQWdmVnh1WEc1Y2JpQWdJQ0JqY21WaGRHVlhaV0Z3YjI0b2RIbHdaU2tnZTF4dUlDQWdJQ0FnSUNCemQybDBZMmdvZEhsd1pTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRndpWW1GemFXTmNJaUE2SUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZHlCWFpXRndiMjRvZEdocGN5NW5ZVzFsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ1hDSmthWEowWENJZ09pQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dSR2x5ZEZkbFlYQnZiaWgwYUdsekxtZGhiV1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZtWVhWc2RDQTZJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJYWldGd2IyNG9kR2hwY3k1bllXMWxLVHRjYmlBZ0lDQWdJQ0FnZlNCY2JpQWdJQ0I5WEc1Y2JuMGlYWDA9IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEJvb3QgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvb3QoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb290KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQm9vdCwgW3tcbiAgICAgICAga2V5OiAncHJlbG9hZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVsb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwcmVsb2FkZXInLCAnYXNzZXRzL2ltYWdlcy9sb2FkaW5nX2Jhci5wbmcnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5tYXhQb2ludGVycyA9IDE7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWQnKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCb290O1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQm9vdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5emRHRjBaWE12UW05dmRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMGxCUVhGQ0xFbEJRVWs3WVVGQlNpeEpRVUZKT3poQ1FVRktMRWxCUVVrN096dHBRa0ZCU2l4SlFVRkpPenRsUVVOa0xHMUNRVUZITzBGQlEwNHNaMEpCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN3clFrRkJLMElzUTBGQlF5eERRVUZETzFOQlEycEZPenM3WlVGRlN5eHJRa0ZCUnp0QlFVTk1MR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRMmhETEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1UwRkRjRU03T3p0WFFWSm5RaXhKUVVGSk96czdjVUpCUVVvc1NVRkJTU0lzSW1acGJHVWlPaUpFT2k5aGNYVmhMMmRsYjNkaGNpOXpjbU12YzNSaGRHVnpMMEp2YjNRdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCQ2IyOTBJSHRjYmlBZ0lDQndjbVZzYjJGa0tDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YVcxaFoyVW9KM0J5Wld4dllXUmxjaWNzSUNkaGMzTmxkSE12YVcxaFoyVnpMMnh2WVdScGJtZGZZbUZ5TG5CdVp5Y3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnlaV0YwWlNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbWx1Y0hWMExtMWhlRkJ2YVc1MFpYSnpJRDBnTVR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZWFJsTG5OMFlYSjBLQ2R3Y21Wc2IyRmtKeWs3WEc0Z0lDQWdmVnh1ZlNKZGZRPT0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9jb21tb25VdGlsc0pzID0gcmVxdWlyZSgnLi4vY29tbW9uL1V0aWxzLmpzJyk7XG5cbnZhciBfY29tbW9uVXRpbHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25VdGlsc0pzKTtcblxudmFyIF9wcmVmYWJzUGxheWVyRmFjdG9yeUpzID0gcmVxdWlyZSgnLi4vcHJlZmFicy9QbGF5ZXJGYWN0b3J5LmpzJyk7XG5cbnZhciBfcHJlZmFic1BsYXllckZhY3RvcnlKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmYWJzUGxheWVyRmFjdG9yeUpzKTtcblxudmFyIEdhbWUgPSAoZnVuY3Rpb24gKF9QaGFzZXIkU3RhdGUpIHtcbiAgICBfaW5oZXJpdHMoR2FtZSwgX1BoYXNlciRTdGF0ZSk7XG5cbiAgICBmdW5jdGlvbiBHYW1lKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FtZSk7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoR2FtZS5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhHYW1lLCBbe1xuICAgICAgICBrZXk6ICdjcmVhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgICAgICAgLy9zdGFnZVxuICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MjYyNic7XG4gICAgICAgICAgICAvL2ZhY3Rvcmllc1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJGYWN0b3J5ID0gbmV3IF9wcmVmYWJzUGxheWVyRmFjdG9yeUpzMlsnZGVmYXVsdCddKHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAvL3BsYXllclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllckZhY3RvcnkuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMucGxheWVyKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEdhbWU7XG59KShQaGFzZXIuU3RhdGUpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBHYW1lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl6ZEdGMFpYTXZSMkZ0WlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3paQ1FVRnJRaXh2UWtGQmIwSTdPenM3YzBOQlExb3NOa0pCUVRaQ096czdPMGxCUld4RExFbEJRVWs3WTBGQlNpeEpRVUZKT3p0aFFVRktMRWxCUVVrN09FSkJRVW9zU1VGQlNUczdiVU5CUVVvc1NVRkJTVHM3TzJsQ1FVRktMRWxCUVVrN08yVkJSV1lzYTBKQlFVYzdPMEZCUlV3c1owSkJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTNKRUxHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhsUVVGbExFZEJRVWNzVTBGQlV5eERRVUZET3p0QlFVVTFReXhuUWtGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4M1EwRkJhMElzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPenRCUVVWc1JDeG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMEZCUTJoRUxHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUTNaRE96czdaVUZIU3l4clFrRkJSeXhGUVVWU096czdWMEZvUW1kQ0xFbEJRVWs3UjBGQlV5eE5RVUZOTEVOQlFVTXNTMEZCU3pzN2NVSkJRWHBDTEVsQlFVa2lMQ0ptYVd4bElqb2lSRG92WVhGMVlTOW5aVzkzWVhJdmMzSmpMM04wWVhSbGN5OUhZVzFsTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGVjBhV3h6SUdaeWIyMGdKeTR1TDJOdmJXMXZiaTlWZEdsc2N5NXFjeWM3WEc1cGJYQnZjblFnVUd4aGVXVnlSbUZqZEc5eWVTQm1jbTl0SUNjdUxpOXdjbVZtWVdKekwxQnNZWGxsY2taaFkzUnZjbmt1YW5Nbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCSFlXMWxJR1Y0ZEdWdVpITWdVR2hoYzJWeUxsTjBZWFJsSUh0Y2JseHVJQ0FnSUdOeVpXRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ0x5OXpkR0ZuWlZ4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWNHaDVjMmxqY3k1emRHRnlkRk41YzNSbGJTaFFhR0Z6WlhJdVVHaDVjMmxqY3k1QlVrTkJSRVVwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdWMzUmhaMlV1WW1GamEyZHliM1Z1WkVOdmJHOXlJRDBnSnlNeU9ESTJNalluTzF4dUlDQWdJQ0FnSUNBdkwyWmhZM1J2Y21sbGMxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbGxja1poWTNSdmNua2dQU0J1WlhjZ1VHeGhlV1Z5Um1GamRHOXllU2gwYUdsekxtZGhiV1VwTzF4dUlDQWdJQ0FnSUNBdkwzQnNZWGxsY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkJzWVhsbGNpQTlJSFJvYVhNdWNHeGhlV1Z5Um1GamRHOXllUzVqY21WaGRHVlFiR0Y1WlhJb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbUZrWkM1bGVHbHpkR2x1WnloMGFHbHpMbkJzWVhsbGNpazdYRzRnSUNBZ2ZWeHVYRzVjYmlBZ0lDQjFjR1JoZEdVb0tTQjdYRzVjYmlBZ0lDQjlYRzVjYm4waVhYMD0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgUHJlbG9hZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJlbG9hZCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZWxvYWQpO1xuXG4gICAgICAgIHRoaXMuYXNzZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFByZWxvYWQsIFt7XG4gICAgICAgIGtleTogJ3ByZWxvYWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlbG9hZCgpIHt9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjcmVhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMjgyNjI2JztcbiAgICAgICAgICAgIHRoaXMuYXNzZXQgPSB0aGlzLmFkZC5zcHJpdGUodGhpcy5nYW1lLndpZHRoIC8gMiwgdGhpcy5nYW1lLmhlaWdodCAvIDIsICdwcmVsb2FkZXInKTtcbiAgICAgICAgICAgIHRoaXMuYXNzZXQuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICAgICAgICAgIHRoaXMuYXNzZXQuc2NhbGUuc2V0VG8oMC4zLCAwLjMpO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMuYXNzZXQpO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BsYXknLCAnYXNzZXRzL2ltYWdlcy9wbGF5LnBuZycpO1xuXG4gICAgICAgICAgICAvL3N0YXJ0IGxvYWRcbiAgICAgICAgICAgIHRoaXMubG9hZC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1cGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnc3RhcnRTY3JlZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25Mb2FkQ29tcGxldGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Mb2FkQ29tcGxldGUoKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQcmVsb2FkO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUHJlbG9hZDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5emRHRjBaWE12VUhKbGJHOWhaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzBsQlFYRkNMRTlCUVU4N1FVRkZZaXhoUVVaTkxFOUJRVThzUjBGRlZqczRRa0ZHUnl4UFFVRlBPenRCUVVkd1FpeFpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOc1FpeFpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRMUVVOMFFqczdhVUpCVEdkQ0xFOUJRVTg3TzJWQlQycENMRzFDUVVGSExFVkJRMVE3T3p0bFFVVkxMR3RDUVVGSE8wRkJRMHdzWjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHVkJRV1VzUjBGQlJ5eFRRVUZUTEVOQlFVTTdRVUZETlVNc1owSkJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dEJRVU55Uml4blFrRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5zUXl4blFrRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZGYWtNc1owSkJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUXpWRUxHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3UVVGRmRrTXNaMEpCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUXl4M1FrRkJkMElzUTBGQlF5eERRVUZET3pzN1FVRkhha1FzWjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VTBGRGNrSTdPenRsUVVWTExHdENRVUZIT3p0QlFVVk1MR2RDUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZEV2l4dlFrRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8yRkJRM2hETzFOQlJVbzdPenRsUVVWaExEQkNRVUZITzBGQlEySXNaMEpCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzFOQlEzSkNPenM3VjBGdVEyZENMRTlCUVU4N096dHhRa0ZCVUN4UFFVRlBJaXdpWm1sc1pTSTZJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl6ZEdGMFpYTXZVSEpsYkc5aFpDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnlaV3h2WVdRZ2UxeHVYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZWE56WlhRZ1BTQnVkV3hzTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkpsWVdSNUlEMGdabUZzYzJVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY0hKbGJHOWhaQ2dwSUh0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqY21WaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1emRHRm5aUzVpWVdOclozSnZkVzVrUTI5c2IzSWdQU0FuSXpJNE1qWXlOaWM3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZWE56WlhRZ1BTQjBhR2x6TG1Ga1pDNXpjSEpwZEdVb2RHaHBjeTVuWVcxbExuZHBaSFJvSUM4Z01pd2dkR2hwY3k1bllXMWxMbWhsYVdkb2RDQXZJRElzSUNkd2NtVnNiMkZrWlhJbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aGMzTmxkQzVoYm1Ob2IzSXVjMlYwVkc4b01DNDFMQ0F3TGpVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1GemMyVjBMbk5qWVd4bExuTmxkRlJ2S0RBdU15d2dNQzR6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXViMjVNYjJGa1EyOXRjR3hsZEdVdVlXUmtUMjVqWlNoMGFHbHpMbTl1VEc5aFpFTnZiWEJzWlhSbExDQjBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xuTmxkRkJ5Wld4dllXUlRjSEpwZEdVb2RHaHBjeTVoYzNObGRDazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrTG1sdFlXZGxLQ2R3YkdGNUp5d25ZWE56WlhSekwybHRZV2RsY3k5d2JHRjVMbkJ1WnljcE8xeHVYRzRnSUNBZ0lDQWdJQzh2YzNSaGNuUWdiRzloWkZ4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WVdRdWMzUmhjblFvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IxY0dSaGRHVW9LU0I3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNtVmhaSGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV6ZEdGMFpTNXpkR0Z5ZENnbmMzUmhjblJUWTNKbFpXNG5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYjI1TWIyRmtRMjl0Y0d4bGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjbVZoWkhrZ1BTQjBjblZsTzF4dUlDQWdJSDFjYm4waVhYMD0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgU3RhcnRTY3JlZW4gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YXJ0U2NyZWVuKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhcnRTY3JlZW4pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTdGFydFNjcmVlbiwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MjYyNic7XG4gICAgICAgICAgICB0aGlzLnBsYXkgPSB0aGlzLmFkZC5zcHJpdGUodGhpcy5nYW1lLndpZHRoIC8gMiwgdGhpcy5nYW1lLmhlaWdodCAvIDIsICdwbGF5Jyk7XG4gICAgICAgICAgICB0aGlzLnBsYXkuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICAgICAgICAgIHRoaXMucGxheS5zY2FsZS5zZXRUbygwLjMsIDAuMyk7XG4gICAgICAgICAgICB0aGlzLnBsYXkuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGxheS5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuc3RhcnRQbGF5LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGxheS5ldmVudHMub25JbnB1dE92ZXIuYWRkKHRoaXMubW91c2VPdmVyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGxheS5ldmVudHMub25JbnB1dE91dC5hZGQodGhpcy5tb3VzZU91dCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0YXJ0UGxheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydFBsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21vdXNlT3ZlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VzZU92ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbW91c2VPdXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbW91c2VPdXQoKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdGFydFNjcmVlbjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0YXJ0U2NyZWVuO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl6ZEdGMFpYTXZVM1JoY25SVFkzSmxaVzR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0SlFVRnhRaXhYUVVGWE8yRkJRVmdzVjBGQlZ6czRRa0ZCV0N4WFFVRlhPenM3YVVKQlFWZ3NWMEZCVnpzN1pVRkRkRUlzYTBKQlFVYzdRVUZEVEN4blFrRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNaVUZCWlN4SFFVRkhMRk5CUVZNc1EwRkJRenRCUVVNMVF5eG5Ra0ZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUXk5RkxHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJwRExHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJoRExHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRE9VSXNaMEpCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTjJSQ3huUWtGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRM1pFTEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEZUVRN096dGxRVVZSTEhGQ1FVRkhPMEZCUTFJc1owSkJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRelZDT3pzN1pVRkZVU3h4UWtGQlJ6dEJRVU5TTEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVNM1F6czdPMlZCUlU4c2IwSkJRVWM3UVVGRFVDeG5Ra0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4VFFVRlRMRU5CUVVNN1UwRkROME03T3p0WFFYUkNaMElzVjBGQlZ6czdPM0ZDUVVGWUxGZEJRVmNpTENKbWFXeGxJam9pUkRvdllYRjFZUzluWlc5M1lYSXZjM0pqTDNOMFlYUmxjeTlUZEdGeWRGTmpjbVZsYmk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZOMFlYSjBVMk55WldWdUlIdGNiaUFnSUNCamNtVmhkR1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXpkR0ZuWlM1aVlXTnJaM0p2ZFc1a1EyOXNiM0lnUFNBbkl6STRNall5TmljN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVTQTlJSFJvYVhNdVlXUmtMbk53Y21sMFpTaDBhR2x6TG1kaGJXVXVkMmxrZEdnZ0x5QXlMQ0IwYUdsekxtZGhiV1V1YUdWcFoyaDBJQzhnTWl3Z0ozQnNZWGtuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNUxtRnVZMmh2Y2k1elpYUlVieWd3TGpVc0lEQXVOU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVM1elkyRnNaUzV6WlhSVWJ5Z3dMak1zSURBdU15azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlUzVwYm5CMWRFVnVZV0pzWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJzWVhrdVpYWmxiblJ6TG05dVNXNXdkWFJFYjNkdUxtRmtaQ2gwYUdsekxuTjBZWEowVUd4aGVTd2dkR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVTNWxkbVZ1ZEhNdWIyNUpibkIxZEU5MlpYSXVZV1JrS0hSb2FYTXViVzkxYzJWUGRtVnlMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVMbVYyWlc1MGN5NXZia2x1Y0hWMFQzVjBMbUZrWkNoMGFHbHpMbTF2ZFhObFQzVjBMQ0IwYUdsektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRnlkRkJzWVhrb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1V1YzNSaGNuUW9KMmRoYldVbktUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdGIzVnpaVTkyWlhJb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzVqWVc1MllYTXVjM1I1YkdVdVkzVnljMjl5SUQwZ0ozQnZhVzUwWlhJbk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUcxdmRYTmxUM1YwS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVZMkZ1ZG1GekxuTjBlV3hsTG1OMWNuTnZjaUE5SUNka1pXWmhkV3gwSnp0Y2JpQWdJQ0I5WEc1Y2JuMGdJbDE5IiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiaGVhZFwiOiB7XG4gICAgICAgIFwic3R5bGVcIjogXCJzdHJva2VcIixcbiAgICAgICAgXCJjdHhQcm9wXCIgOiB7XG4gICAgICAgICAgICBcImxpbmVXaXRoXCIgOiBcIjJcIlxuICAgICAgICB9LFxuICAgICAgICBcImRyYXdcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMuaGVpZ2h0fVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMud2lkdGh9XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiJHtjYW52YXMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCJib2R5XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiBcImZpbGxcIixcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIke2NhbnZhcy5oZWlnaHR9XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiJHtjYW52YXMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiJHtjYW52YXMuaGVpZ2h0fVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiaGVhZFwiOiB7XG4gICAgICAgIFwic3R5bGVcIjogXCJzdHJva2VcIixcbiAgICAgICAgXCJjdHhQcm9wXCIgOiB7XG4gICAgICAgICAgICBcImxpbmVXaXRoXCIgOiBcIjJcIlxuICAgICAgICB9LFxuICAgICAgICBcImRyYXdcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMuaGVpZ2h0fVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMud2lkdGh9XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiJHtjYW52YXMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCJib2R5XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiBcImZpbGxcIixcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwiYXJjXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiMTVcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIxNVwiLFxuICAgICAgICAgICAgICAgIFwicmFkaXVzXCIgOiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgXCJhcmNcIiA6IFwiJHsyICogTWF0aC5QSX1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJoZWFkXCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiBcInN0cm9rZVwiLFxuICAgICAgICBcImN0eFByb3BcIiA6IHtcbiAgICAgICAgICAgIFwibGluZVdpdGhcIiA6IFwiMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZHJhd1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcIm1vdmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIke2NhbnZhcy5oZWlnaHR9XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiJHtjYW52YXMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIke2NhbnZhcy53aWR0aH1cIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIke2NhbnZhcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICBcImJvZHlcIjoge1xuICAgICAgICBcInN0eWxlXCI6IFwiZmlsbFwiLFxuICAgICAgICBcImRyYXdcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiMFwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIjBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIiR7Y2FudmFzLmhlaWdodH1cIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIke2NhbnZhcy5oZWlnaHR9XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiJHtjYW52YXMuaGVpZ2h0fVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiMFwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodH1cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImJvZHlcIjoge1xuICAgICAgICBcInN0eWxlXCI6IFwiZmlsbFwiLFxuICAgICAgICBcImRyYXdcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiMFwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIjBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiNlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiMFwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIjEyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJib2R5XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiBcImZpbGxcIixcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwiYXJjXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiNlwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIjZcIixcbiAgICAgICAgICAgICAgICBcInJhZGl1c1wiIDogXCI2XCIsXG4gICAgICAgICAgICAgICAgXCJhcmNcIiA6IFwiJHsyICogTWF0aC5QSX1cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufSJdfQ==
