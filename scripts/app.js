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
},{"./states/Boot.js":14,"./states/Game.js":15,"./states/Preload.js":16,"./states/StartScreen.js":17}],2:[function(require,module,exports){
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

var _commonCanvasHelperJs = require('../../common/CanvasHelper.js');

var _commonCanvasHelperJs2 = _interopRequireDefault(_commonCanvasHelperJs);

var _texturesPlayersCircleplayerJson = require('../../textures/players/circleplayer.json');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3BsYXllcnMvQ2lyY2xlUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQW1CLGFBQWE7Ozs7b0NBQ1AsOEJBQThCOzs7OytDQUNoQywwQ0FBMEM7Ozs7SUFFNUMsWUFBWTtjQUFaLFlBQVk7O2FBQVosWUFBWTs4QkFBWixZQUFZOzttQ0FBWixZQUFZOzs7aUJBQVosWUFBWTs7ZUFFekIsZ0JBQUc7QUFDSCxrREFBaUIsSUFBSSxDQUFDLE1BQU0sK0NBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxRDs7O1dBSmdCLFlBQVk7OztxQkFBWixZQUFZIiwiZmlsZSI6IkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3BsYXllcnMvQ2lyY2xlUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgQ2FudmFzSGVscGVyIGZyb20gJy4uLy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnO1xuaW1wb3J0IHBsYXllckpzb24gZnJvbSAnLi4vLi4vdGV4dHVyZXMvcGxheWVycy9jaXJjbGVwbGF5ZXIuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZVBsYXllciBleHRlbmRzIFBsYXllciB7XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBuZXcgQ2FudmFzSGVscGVyKHRoaXMuY2FudmFzLHBsYXllckpzb24pLmRyYXdUZXh0dXJlKCk7XG4gICAgfVxuXG59Il19
},{"../../common/CanvasHelper.js":2,"../../textures/players/circleplayer.json":19,"./Player.js":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCanvasHelperJs = require('../../common/CanvasHelper.js');

var _commonCanvasHelperJs2 = _interopRequireDefault(_commonCanvasHelperJs);

var _texturesPlayersPlayerJson = require('../../textures/players/Player.json');

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

            this.pushState();
        }
    }, {
        key: 'pushState',
        value: function pushState() {
            this.game.geowar.socketHandler.push({ name: "player", id: this.game.geowar.playerId, x: this.x, y: this.y, canvas: this.canvas.canvas });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3BsYXllcnMvUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQXlCLDhCQUE4Qjs7Ozt5Q0FDaEMsb0NBQW9DOzs7O0lBRXRDLE1BQU07Y0FBTixNQUFNOztBQUVaLGFBRk0sTUFBTSxDQUVYLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTs4QkFGNUMsTUFBTTs7QUFHbkIsbUNBSGEsTUFBTSw2Q0FHYixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUU7QUFDdkQsWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztBQUVuQixZQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRVosWUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDakIsWUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUNqQixZQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDNUIsWUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELFlBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLFlBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFdkIsWUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsWUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3ZCOztpQkFsQmdCLE1BQU07O2VBcUJuQixnQkFBRztBQUNILGtEQUFpQixJQUFJLENBQUMsTUFBTSx5Q0FBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNEOzs7ZUFFSyxrQkFBRztBQUNMLGdCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7O0FBRTlCLGdCQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN2RCxvQkFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDcEMsTUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM3RCxvQkFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO2FBQ25DO0FBQ0QsZ0JBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3JELG9CQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuRixNQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzVELG9CQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuRjs7QUFFRCxnQkFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUN4QixvQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0Qjs7QUFFRCxnQkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCOzs7ZUFHUSxxQkFBRztBQUNSLGdCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDL0k7OztlQUdXLHdCQUFHO0FBQ1gsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRXRELGdCQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFM0QsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlFOzs7V0E5RGdCLE1BQU07R0FBUyxNQUFNLENBQUMsTUFBTTs7cUJBQTVCLE1BQU0iLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3ByZWZhYnMvcGxheWVycy9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzSGVscGVyIGZyb20gJy4uLy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnO1xuaW1wb3J0IHBsYXllckpzb24gZnJvbSAnLi4vLi4vdGV4dHVyZXMvcGxheWVycy9QbGF5ZXIuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIHdlYXBvbkZhY3RvcnkpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgZ2FtZS5tYWtlLmJpdG1hcERhdGEod2lkdGgsIGhlaWdodCkpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMua2V5O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG5cbiAgICAgICAgdGhpcy5kcmF3KCk7XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IDMwMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IC05MDtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUodGhpcywgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICAgICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9keS5kcmFnLnNldCg2MCk7XG5cbiAgICAgICAgdGhpcy53ZWFwb25GYWN0b3J5ID0gd2VhcG9uRmFjdG9yeTtcbiAgICAgICAgdGhpcy5jcmVhdGVXZWFwb24oKTtcbiAgICB9XG5cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIG5ldyBDYW52YXNIZWxwZXIodGhpcy5jYW52YXMsIHBsYXllckpzb24pLmRyYXdUZXh0dXJlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IDA7XG4gICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgdGhpcy5ib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLkxFRlQpKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHkuYW5ndWxhclZlbG9jaXR5ID0gLTIwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5SSUdIVCkpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAyMDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlVQKSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlKHRoaXMuYW5nbGUsIDMwMCwgdGhpcy5ib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5ET1dOKSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlKHRoaXMuYW5nbGUsIDMwMCwgdGhpcy5ib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpcmVCdXR0b24uaXNEb3duKSB7XG4gICAgICAgICAgICB0aGlzLndlYXBvbi5maXJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgIH1cblxuXG4gICAgcHVzaFN0YXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUuZ2Vvd2FyLnNvY2tldEhhbmRsZXIucHVzaCh7IG5hbWU6IFwicGxheWVyXCIsIGlkOiB0aGlzLmdhbWUuZ2Vvd2FyLnBsYXllcklkLCB4IDogdGhpcy54LCB5IDogdGhpcy55LCBjYW52YXMgOiB0aGlzLmNhbnZhcy5jYW52YXMgfSk7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVXZWFwb24oKSB7XG4gICAgICAgIHRoaXMud2VhcG9uID0gdGhpcy53ZWFwb25GYWN0b3J5LmNyZWF0ZVdlYXBvbignZGlydCcpO1xuXG4gICAgICAgIHRoaXMud2VhcG9uLnRyYWNrU3ByaXRlKHRoaXMsIHRoaXMud2lkdGggLyAyICsgNSwgMCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5maXJlQnV0dG9uID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Q29kZS5TUEFDRUJBUik7XG4gICAgfVxuXG59Il19
},{"../../common/CanvasHelper.js":2,"../../textures/players/Player.json":18}],6:[function(require,module,exports){
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

var _weaponsWeaponFactoryJs = require('../weapons/WeaponFactory.js');

var _weaponsWeaponFactoryJs2 = _interopRequireDefault(_weaponsWeaponFactoryJs);

var _commonUtilsJs = require('../../common/Utils.js');

var _commonUtilsJs2 = _interopRequireDefault(_commonUtilsJs);

var PlayerFactory = (function () {
    function PlayerFactory(game) {
        _classCallCheck(this, PlayerFactory);

        this._playerTypes = ['triangle', 'square', 'circle'];

        this.game = game;
        this.weaponFactory = new _weaponsWeaponFactoryJs2['default'](game);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3BsYXllcnMvUGxheWVyRmFjdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7d0JBQW1CLGFBQWE7Ozs7OEJBQ1AsbUJBQW1COzs7OzhCQUNuQixtQkFBbUI7Ozs7c0NBQ2xCLDZCQUE2Qjs7Ozs2QkFDckMsdUJBQXVCOzs7O0lBRXBCLGFBQWE7QUFJbkIsYUFKTSxhQUFhLENBSWxCLElBQUksRUFBRTs4QkFKRCxhQUFhOzthQUU5QixZQUFZLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQzs7QUFHM0MsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLGFBQWEsR0FBRyx3Q0FBa0IsSUFBSSxDQUFDLENBQUM7S0FDaEQ7O2lCQVBnQixhQUFhOztlQVNsQixzQkFBQyxXQUFXLEVBQUU7QUFDdEIsZ0JBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQztBQUN2QixnQkFBSSxDQUFDLElBQUksRUFBRTtBQUNQLG9CQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbEY7QUFDRCxvQkFBUSxJQUFJO0FBQ1IscUJBQUssVUFBVTtBQUNYLDJCQUFPLDBCQUFXLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLDJCQUFNLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQUEsQUFDckkscUJBQUssUUFBUTtBQUNULDJCQUFPLGdDQUFpQixJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSwyQkFBTSxtQkFBbUIsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUFBLEFBQzNJLHFCQUFLLFFBQVE7QUFDVCwyQkFBTyxnQ0FBaUIsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsMkJBQU0sbUJBQW1CLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFBQSxBQUMzSTtBQUNJLDJCQUFPLDBCQUFXLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLDJCQUFNLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQUEsYUFDeEk7U0FDSjs7O1dBeEJnQixhQUFhOzs7cUJBQWIsYUFBYSIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvcHJlZmFicy9wbGF5ZXJzL1BsYXllckZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBTcXVhcmVQbGF5ZXIgZnJvbSAnLi9TcXVhcmVQbGF5ZXIuanMnO1xuaW1wb3J0IENpcmNsZVBsYXllciBmcm9tICcuL0NpcmNsZVBsYXllci5qcyc7XG5pbXBvcnQgV2VhcG9uRmFjdG9yeSBmcm9tICcuLi93ZWFwb25zL1dlYXBvbkZhY3RvcnkuanMnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL2NvbW1vbi9VdGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckZhY3Rvcnkge1xuXG4gICAgX3BsYXllclR5cGVzID0gWyd0cmlhbmdsZScsICdzcXVhcmUnLCAnY2lyY2xlJ107XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMud2VhcG9uRmFjdG9yeSA9IG5ldyBXZWFwb25GYWN0b3J5KGdhbWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZVBsYXllcihkZWZhdWx0VHlwZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGRlZmF1bHRUeXBlO1xuICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLl9wbGF5ZXJUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9wbGF5ZXJUeXBlcy5sZW5ndGgpXTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUGxheWVyKHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndpZHRoIC8gMiwgdGhpcy5nYW1lLmhlaWdodCAvIDIsIDM1LCAzMCwgVXRpbHMuZ2VuZXJhdGVSYW5kb21Db2xvcigpLCB0aGlzLndlYXBvbkZhY3RvcnkpO1xuICAgICAgICAgICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3F1YXJlUGxheWVyKHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndpZHRoIC8gMiwgdGhpcy5nYW1lLmhlaWdodCAvIDIsIDM1LCAzMCwgVXRpbHMuZ2VuZXJhdGVSYW5kb21Db2xvcigpLCB0aGlzLndlYXBvbkZhY3RvcnkpO1xuICAgICAgICAgICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2lyY2xlUGxheWVyKHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndpZHRoIC8gMiwgdGhpcy5nYW1lLmhlaWdodCAvIDIsIDM1LCAzMCwgVXRpbHMuZ2VuZXJhdGVSYW5kb21Db2xvcigpLCB0aGlzLndlYXBvbkZhY3RvcnkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBsYXllcih0aGlzLmdhbWUsIHRoaXMuZ2FtZS53aWR0aCAvIDIsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLCAzNSwgMzAsIFV0aWxzLmdlbmVyYXRlUmFuZG9tQ29sb3IoKSwgdGhpcy53ZWFwb25GYWN0b3J5KTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==
},{"../../common/Utils.js":3,"../weapons/WeaponFactory.js":10,"./CirclePlayer.js":4,"./Player.js":5,"./SquarePlayer.js":7}],7:[function(require,module,exports){
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

var _commonCanvasHelperJs = require('../../common/CanvasHelper.js');

var _commonCanvasHelperJs2 = _interopRequireDefault(_commonCanvasHelperJs);

var _texturesPlayersSquareplayerJson = require('../../textures/players/squareplayer.json');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3BsYXllcnMvU3F1YXJlUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQW1CLGFBQWE7Ozs7b0NBQ1AsOEJBQThCOzs7OytDQUNoQywwQ0FBMEM7Ozs7SUFFNUMsWUFBWTtjQUFaLFlBQVk7O2FBQVosWUFBWTs4QkFBWixZQUFZOzttQ0FBWixZQUFZOzs7aUJBQVosWUFBWTs7ZUFFekIsZ0JBQUc7QUFDSCxrREFBaUIsSUFBSSxDQUFDLE1BQU0sK0NBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxRDs7O1dBSmdCLFlBQVk7OztxQkFBWixZQUFZIiwiZmlsZSI6IkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3BsYXllcnMvU3F1YXJlUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgQ2FudmFzSGVscGVyIGZyb20gJy4uLy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnO1xuaW1wb3J0IHBsYXllckpzb24gZnJvbSAnLi4vLi4vdGV4dHVyZXMvcGxheWVycy9zcXVhcmVwbGF5ZXIuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNxdWFyZVBsYXllciBleHRlbmRzIFBsYXllciB7XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBuZXcgQ2FudmFzSGVscGVyKHRoaXMuY2FudmFzLHBsYXllckpzb24pLmRyYXdUZXh0dXJlKCk7XG4gICAgfVxuXG59Il19
},{"../../common/CanvasHelper.js":2,"../../textures/players/squareplayer.json":20,"./Player.js":5}],8:[function(require,module,exports){
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

var _commonUtilsJs = require('../../common/Utils.js');

var _commonUtilsJs2 = _interopRequireDefault(_commonUtilsJs);

var _commonCanvasHelperJs = require('../../common/CanvasHelper.js');

var _commonCanvasHelperJs2 = _interopRequireDefault(_commonCanvasHelperJs);

var _texturesWeaponsDirtweaponJson = require('../../textures/weapons/dirtweapon.json');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3dlYXBvbnMvRGlydFdlYXBvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFtQixhQUFhOzs7OzZCQUNkLHVCQUF1Qjs7OztvQ0FDaEIsOEJBQThCOzs7OzZDQUNoQyx3Q0FBd0M7Ozs7SUFFMUMsVUFBVTtjQUFWLFVBQVU7O2FBQVYsVUFBVTs4QkFBVixVQUFVOzttQ0FBVixVQUFVOzs7aUJBQVYsVUFBVTs7ZUFFZix3QkFBRztBQUNYLGdCQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0Msa0RBQWlCLElBQUksQ0FBQyxHQUFHLDZDQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkQ7OztXQUxnQixVQUFVOzs7cUJBQVYsVUFBVSIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvcHJlZmFicy93ZWFwb25zL0RpcnRXZWFwb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VhcG9uIGZyb20gJy4vV2VhcG9uLmpzJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi9jb21tb24vVXRpbHMuanMnO1xuaW1wb3J0IENhbnZhc0hlbHBlciBmcm9tICcuLi8uLi9jb21tb24vQ2FudmFzSGVscGVyLmpzJztcbmltcG9ydCB3ZWFwb25Kc29uIGZyb20gJy4uLy4uL3RleHR1cmVzL3dlYXBvbnMvZGlydHdlYXBvbi5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlydFdlYXBvbiBleHRlbmRzIFdlYXBvbntcblxuICAgIGNyZWF0ZUJ1bGxldCgpIHtcbiAgICAgICAgdGhpcy5ibWQgPSB0aGlzLmdhbWUubWFrZS5iaXRtYXBEYXRhKDEyLCAxMik7XG4gICAgICAgIG5ldyBDYW52YXNIZWxwZXIodGhpcy5ibWQsd2VhcG9uSnNvbikuZHJhd1RleHR1cmUoKTtcbiAgICB9XG5cbn0iXX0=
},{"../../common/CanvasHelper.js":2,"../../common/Utils.js":3,"../../textures/weapons/dirtweapon.json":21,"./Weapon.js":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _commonUtilsJs = require('../../common/Utils.js');

var _commonUtilsJs2 = _interopRequireDefault(_commonUtilsJs);

var _commonCanvasHelperJs = require('../../common/CanvasHelper.js');

var _commonCanvasHelperJs2 = _interopRequireDefault(_commonCanvasHelperJs);

var _texturesWeaponsWeaponJson = require('../../textures/weapons/weapon.json');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3dlYXBvbnMvV2VhcG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs2QkFBa0IsdUJBQXVCOzs7O29DQUNoQiw4QkFBOEI7Ozs7eUNBQ2hDLG9DQUFvQzs7OztJQUV0QyxNQUFNO0FBRVosYUFGTSxNQUFNLENBRVgsSUFBSSxFQUFFOzhCQUZELE1BQU07O0FBR25CLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQixZQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDdkI7O2lCQU5nQixNQUFNOztlQVNYLHdCQUFHO0FBQ1gsZ0JBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QyxrREFBaUIsSUFBSSxDQUFDLEdBQUcseUNBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2RDs7O2VBR1csd0JBQUU7QUFDVixnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O0FBR2pELGdCQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDOzs7QUFHN0QsZ0JBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQzs7O0FBRzlCLGdCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7OztBQUcxQixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7U0FDekM7OztlQUdVLHFCQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRTtBQUNoQyxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkQ7OztlQUdHLGdCQUFHO0FBQ0gsZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7OztXQXZDZ0IsTUFBTTs7O3FCQUFOLE1BQU0iLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3ByZWZhYnMvd2VhcG9ucy9XZWFwb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vY29tbW9uL1V0aWxzLmpzJztcbmltcG9ydCBDYW52YXNIZWxwZXIgZnJvbSAnLi4vLi4vY29tbW9uL0NhbnZhc0hlbHBlci5qcyc7XG5pbXBvcnQgd2VhcG9uSnNvbiBmcm9tICcuLi8uLi90ZXh0dXJlcy93ZWFwb25zL3dlYXBvbi5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVXZWFwb24oKTtcbiAgICB9XG5cblxuICAgIGNyZWF0ZUJ1bGxldCgpIHtcbiAgICAgICAgdGhpcy5ibWQgPSB0aGlzLmdhbWUubWFrZS5iaXRtYXBEYXRhKDEyLCAxMik7XG4gICAgICAgIG5ldyBDYW52YXNIZWxwZXIodGhpcy5ibWQsd2VhcG9uSnNvbikuZHJhd1RleHR1cmUoKTtcbiAgICB9XG5cblxuICAgIGNyZWF0ZVdlYXBvbigpe1xuICAgICAgICB0aGlzLndlYXBvbiA9IHRoaXMuZ2FtZS5hZGQud2VhcG9uKDMwLCB0aGlzLmJtZCk7XG5cbiAgICAgICAgLy8gIFRoZSBidWxsZXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGtpbGxlZCB3aGVuIGl0IGxlYXZlcyB0aGUgd29ybGQgYm91bmRzXG4gICAgICAgIHRoaXMud2VhcG9uLmJ1bGxldEtpbGxUeXBlID0gUGhhc2VyLldlYXBvbi5LSUxMX1dPUkxEX0JPVU5EUztcblxuICAgICAgICAvLyAgVGhlIHNwZWVkIGF0IHdoaWNoIHRoZSBidWxsZXQgaXMgZmlyZWRcbiAgICAgICAgdGhpcy53ZWFwb24uYnVsbGV0U3BlZWQgPSA0MDA7XG5cbiAgICAgICAgLy8gIFNwZWVkLXVwIHRoZSByYXRlIG9mIGZpcmUsIGFsbG93aW5nIHRoZW0gdG8gc2hvb3QgMSBidWxsZXQgZXZlcnkgNjBtc1xuICAgICAgICB0aGlzLndlYXBvbi5maXJlUmF0ZSA9IDYwO1xuXG4gICAgICAgIC8vICBBZGQgYSB2YXJpYW5jZSB0byB0aGUgYnVsbGV0IHNwZWVkIGJ5ICstIHRoaXMgdmFsdWVcbiAgICAgICAgdGhpcy53ZWFwb24uYnVsbGV0U3BlZWRWYXJpYW5jZSA9IDIwMDtcbiAgICB9XG5cblxuICAgIHRyYWNrU3ByaXRlKHNwcml0ZSwgeCwgeSwgcm90YXRpb24pIHtcbiAgICAgICAgdGhpcy53ZWFwb24udHJhY2tTcHJpdGUoc3ByaXRlLCB4LCB5LCByb3RhdGlvbik7XG4gICAgfVxuXG5cbiAgICBmaXJlKCkge1xuICAgICAgICB0aGlzLndlYXBvbi5maXJlKCk7XG4gICAgfVxuXG59Il19
},{"../../common/CanvasHelper.js":2,"../../common/Utils.js":3,"../../textures/weapons/weapon.json":22}],10:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3dlYXBvbnMvV2VhcG9uRmFjdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7d0JBQW1CLGFBQWE7Ozs7NEJBQ1QsaUJBQWlCOzs7O0lBRW5CLGFBQWE7QUFJbkIsYUFKTSxhQUFhLENBSWxCLElBQUksRUFBRTs4QkFKRCxhQUFhOzthQUU5QixXQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDOztBQUcxQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNwQjs7aUJBTmdCLGFBQWE7O2VBU2xCLHNCQUFDLElBQUksRUFBRTtBQUNmLG9CQUFPLElBQUk7QUFDUCxxQkFBSyxPQUFPO0FBQ1QsMkJBQU8sMEJBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQUEsQUFDaEMscUJBQUssTUFBTTtBQUNSLDJCQUFPLDhCQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUFBLEFBQ3BDO0FBQ0csMkJBQU8sMEJBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQUEsYUFDbkM7U0FDSjs7O1dBbEJnQixhQUFhOzs7cUJBQWIsYUFBYSIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvcHJlZmFicy93ZWFwb25zL1dlYXBvbkZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VhcG9uIGZyb20gJy4vV2VhcG9uLmpzJztcbmltcG9ydCBEaXJ0V2VhcG9uIGZyb20gJy4vRGlydFdlYXBvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXBvbkZhY3Rvcnkge1xuXG4gICAgd2VhcG9uX3R5cGUgPSBbJ2Jhc2ljJywnZGlydCddO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cblxuXG4gICAgY3JlYXRlV2VhcG9uKHR5cGUpIHtcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgICAgY2FzZSBcImJhc2ljXCIgOiBcbiAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2VhcG9uKHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICBjYXNlIFwiZGlydFwiIDogXG4gICAgICAgICAgICAgICByZXR1cm4gbmV3IERpcnRXZWFwb24odGhpcy5nYW1lKTtcbiAgICAgICAgICAgIGRlZmF1bHQgOiBcbiAgICAgICAgICAgICAgIHJldHVybiBuZXcgV2VhcG9uKHRoaXMuZ2FtZSk7XG4gICAgICAgIH0gXG4gICAgfVxuXG59Il19
},{"./DirtWeapon.js":8,"./Weapon.js":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ConnectedHandler = (function () {
   function ConnectedHandler(game) {
      _classCallCheck(this, ConnectedHandler);

      this.game = game;
   }

   _createClass(ConnectedHandler, [{
      key: 'handle',
      value: function handle(data) {
         this.game.geowar.socketReady = true;
         this.game.geowar.playerId = data.id;
         console.log('playerId = ' + this.game.geowar.playerId);
      }
   }]);

   return ConnectedHandler;
})();

exports['default'] = ConnectedHandler;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zb2NrZXQvQ29ubmVjdGVkSGFuZGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCLGdCQUFnQjtBQUVwQixZQUZJLGdCQUFnQixDQUVuQixJQUFJLEVBQUM7NEJBRkYsZ0JBQWdCOztBQUc1QixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQjs7Z0JBSmMsZ0JBQWdCOzthQU16QixnQkFBQyxJQUFJLEVBQUM7QUFDVCxhQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLGFBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3BDLGdCQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUN6RDs7O1VBVmMsZ0JBQWdCOzs7cUJBQWhCLGdCQUFnQiIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvc29ja2V0L0Nvbm5lY3RlZEhhbmRsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0ZWRIYW5kbGVye1xuXG4gICAgICBjb25zdHJ1Y3RvcihnYW1lKXtcbiAgICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICB9ICBcblxuICAgICAgaGFuZGxlKGRhdGEpe1xuICAgICAgICAgdGhpcy5nYW1lLmdlb3dhci5zb2NrZXRSZWFkeSA9IHRydWU7XG4gICAgICAgICB0aGlzLmdhbWUuZ2Vvd2FyLnBsYXllcklkID0gZGF0YS5pZDtcbiAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJJZCA9ICcgKyB0aGlzLmdhbWUuZ2Vvd2FyLnBsYXllcklkKTsgXG4gICAgICB9XG4gICAgICAgXG59Il19
},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerMoveHandler = (function () {
      function PlayerMoveHandler(game) {
            _classCallCheck(this, PlayerMoveHandler);

            this.game = game;
      }

      _createClass(PlayerMoveHandler, [{
            key: "handle",
            value: function handle(data) {
                  if (!this.game.geowar.peerPlayers) {
                        this.game.geowar.peerPlayers = {};
                  } else if (this.game.geowar.peerPlayers[data.id]) {
                        this.game.geowar.peerPlayers[data.id].destroy();
                        delete this.game.geowar.peerPlayers[data.id];
                  }
                  var bmd = this.game.make.bitmapData(35, 30);
                  bmd.canvas = data.canvas;
                  var sprite = this.game.add.sprite(data.x, data.y, bmd);
                  this.game.geowar.peerPlayers[data.id] = sprite;
            }
      }]);

      return PlayerMoveHandler;
})();

exports["default"] = PlayerMoveHandler;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zb2NrZXQvUGxheWVyTW92ZUhhbmRsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQixpQkFBaUI7QUFFckIsZUFGSSxpQkFBaUIsQ0FFcEIsSUFBSSxFQUFFO2tDQUZILGlCQUFpQjs7QUFHMUIsZ0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO09BQ3RCOzttQkFKYyxpQkFBaUI7O21CQU0xQixnQkFBQyxJQUFJLEVBQUU7QUFDUCxzQkFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtBQUM3Qiw0QkFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzttQkFDdkMsTUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDMUMsNEJBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDaEQsK0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzttQkFDbEQ7QUFDRCxzQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM1QyxxQkFBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLHNCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELHNCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUNwRDs7O2FBbEJjLGlCQUFpQjs7O3FCQUFqQixpQkFBaUIiLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3NvY2tldC9QbGF5ZXJNb3ZlSGFuZGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllck1vdmVIYW5kbGVyIHtcblxuICAgICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlKGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lLmdlb3dhci5wZWVyUGxheWVycykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdlb3dhci5wZWVyUGxheWVycyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLmdlb3dhci5wZWVyUGxheWVyc1tkYXRhLmlkXSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdlb3dhci5wZWVyUGxheWVyc1tkYXRhLmlkXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nYW1lLmdlb3dhci5wZWVyUGxheWVyc1tkYXRhLmlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBibWQgPSB0aGlzLmdhbWUubWFrZS5iaXRtYXBEYXRhKDM1LCAzMCk7XG4gICAgICAgICAgICBibWQuY2FudmFzID0gZGF0YS5jYW52YXM7XG4gICAgICAgICAgICB2YXIgc3ByaXRlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoZGF0YS54LCBkYXRhLnksIGJtZCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuZ2Vvd2FyLnBlZXJQbGF5ZXJzW2RhdGEuaWRdID0gc3ByaXRlO1xuICAgICAgfVxuXG59Il19
},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ConnectedHandlerJs = require('./ConnectedHandler.js');

var _ConnectedHandlerJs2 = _interopRequireDefault(_ConnectedHandlerJs);

var _PlayerMoveHandlerJs = require('./PlayerMoveHandler.js');

var _PlayerMoveHandlerJs2 = _interopRequireDefault(_PlayerMoveHandlerJs);

var SocketHandler = (function () {
    function SocketHandler(sio, game) {
        _classCallCheck(this, SocketHandler);

        this.sio = sio;
        this.game = game;
        var that = this;
        this.initHandlers(this.game);
        this.sio.on('pull', function (data) {
            that.update(data, that);
        });
    }

    _createClass(SocketHandler, [{
        key: 'push',
        value: function push(data) {
            if (this.game.geowar.socketReady) {
                this.sio.emit('push', data);
            }
        }
    }, {
        key: 'update',
        value: function update(data, that) {
            if (data.name) {
                this.handlers[data.name].handle(data);
            }
        }
    }, {
        key: 'initHandlers',
        value: function initHandlers(game) {
            this.handlers = {};
            this.handlers.connected = new _ConnectedHandlerJs2['default'](game);
            this.handlers.player = new _PlayerMoveHandlerJs2['default'](game);
        }
    }]);

    return SocketHandler;
})();

exports['default'] = SocketHandler;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zb2NrZXQvU29ja2V0SGFuZGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7a0NBQTZCLHVCQUF1Qjs7OzttQ0FDdEIsd0JBQXdCOzs7O0lBRWpDLGFBQWE7QUFDbkIsYUFETSxhQUFhLENBQ2xCLEdBQUcsRUFBRSxJQUFJLEVBQUU7OEJBRE4sYUFBYTs7QUFFMUIsWUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsWUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsWUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQ2hDLGdCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzQixDQUFDLENBQUM7S0FDTjs7aUJBVGdCLGFBQWE7O2VBVzFCLGNBQUMsSUFBSSxFQUFFO0FBQ1AsZ0JBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQzlCLG9CQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDL0I7U0FDSjs7O2VBRUssZ0JBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNmLGdCQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDWCxvQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pDO1NBQ0o7OztlQUdXLHNCQUFDLElBQUksRUFBRTtBQUNmLGdCQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsb0NBQXFCLElBQUksQ0FBQyxDQUFDO0FBQ3JELGdCQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxxQ0FBc0IsSUFBSSxDQUFDLENBQUM7U0FDdEQ7OztXQTVCZ0IsYUFBYTs7O3FCQUFiLGFBQWEiLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3NvY2tldC9Tb2NrZXRIYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbm5lY3RlZEhhbmRsZXIgZnJvbSAnLi9Db25uZWN0ZWRIYW5kbGVyLmpzJztcbmltcG9ydCBQbGF5ZXJNb3ZlSGFuZGxlciBmcm9tICcuL1BsYXllck1vdmVIYW5kbGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja2V0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3Ioc2lvLCBnYW1lKSB7XG4gICAgICAgIHRoaXMuc2lvID0gc2lvO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5pdEhhbmRsZXJzKHRoaXMuZ2FtZSk7XG4gICAgICAgIHRoaXMuc2lvLm9uKCdwdWxsJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHRoYXQudXBkYXRlKGRhdGEsIHRoYXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nZW93YXIuc29ja2V0UmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMuc2lvLmVtaXQoJ3B1c2gnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShkYXRhLCB0aGF0KSB7XG4gICAgICAgIGlmIChkYXRhLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbZGF0YS5uYW1lXS5oYW5kbGUoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGluaXRIYW5kbGVycyhnYW1lKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQgPSBuZXcgQ29ubmVjdGVkSGFuZGxlcihnYW1lKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wbGF5ZXIgPSBuZXcgUGxheWVyTW92ZUhhbmRsZXIoZ2FtZSk7XG4gICAgfVxufSJdfQ==
},{"./ConnectedHandler.js":11,"./PlayerMoveHandler.js":12}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _socketSocketHandlerJs = require("../socket/SocketHandler.js");

var _socketSocketHandlerJs2 = _interopRequireDefault(_socketSocketHandlerJs);

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
            this.game.geowar = {}; //namespace
            this.game.geowar.socketHandler = new _socketSocketHandlerJs2['default'](io('http://localhost:3000'), this.game);
            this.game.input.maxPointers = 1;
            this.game.state.start('preload');
        }
    }]);

    return Boot;
})();

exports['default'] = Boot;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zdGF0ZXMvQm9vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7cUNBQTBCLDRCQUE0Qjs7OztJQUVqQyxJQUFJO2FBQUosSUFBSTs4QkFBSixJQUFJOzs7aUJBQUosSUFBSTs7ZUFDZCxtQkFBRztBQUNOLGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsK0JBQStCLENBQUMsQ0FBQztTQUNqRTs7O2VBRUssa0JBQUc7QUFDTCxnQkFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGdCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsdUNBQWtCLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzRixnQkFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNoQyxnQkFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDOzs7V0FWZ0IsSUFBSTs7O3FCQUFKLElBQUkiLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3N0YXRlcy9Cb290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvY2tldEhhbmRsZXIgZnJvbSBcIi4uL3NvY2tldC9Tb2NrZXRIYW5kbGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3Qge1xuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncHJlbG9hZGVyJywgJ2Fzc2V0cy9pbWFnZXMvbG9hZGluZ19iYXIucG5nJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUuZ2Vvd2FyID0ge307IC8vbmFtZXNwYWNlXG4gICAgICAgIHRoaXMuZ2FtZS5nZW93YXIuc29ja2V0SGFuZGxlciA9IG5ldyBTb2NrZXRIYW5kbGVyKGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKSwgdGhpcy5nYW1lKTtcbiAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdwcmVsb2FkJyk7XG4gICAgfVxufSJdfQ==
},{"../socket/SocketHandler.js":13}],15:[function(require,module,exports){
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

var _prefabsPlayersPlayerFactoryJs = require('../prefabs/players/PlayerFactory.js');

var _prefabsPlayersPlayerFactoryJs2 = _interopRequireDefault(_prefabsPlayersPlayerFactoryJs);

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
            this.playerFactory = new _prefabsPlayersPlayerFactoryJs2['default'](this.game);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zdGF0ZXMvR2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzZCQUFrQixvQkFBb0I7Ozs7NkNBQ1oscUNBQXFDOzs7O0lBRTFDLElBQUk7Y0FBSixJQUFJOzthQUFKLElBQUk7OEJBQUosSUFBSTs7bUNBQUosSUFBSTs7O2lCQUFKLElBQUk7O2VBRWYsa0JBQUc7O0FBRUwsZ0JBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JELGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDOztBQUU1QyxnQkFBSSxDQUFDLGFBQWEsR0FBRywrQ0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsRCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ2hELGdCQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDOzs7ZUFHSyxrQkFBRyxFQUNSOzs7V0FmZ0IsSUFBSTtHQUFTLE1BQU0sQ0FBQyxLQUFLOztxQkFBekIsSUFBSSIsImZpbGUiOiJEOi9hcXVhL2dlb3dhci9zcmMvc3RhdGVzL0dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSAnLi4vY29tbW9uL1V0aWxzLmpzJztcbmltcG9ydCBQbGF5ZXJGYWN0b3J5IGZyb20gJy4uL3ByZWZhYnMvcGxheWVycy9QbGF5ZXJGYWN0b3J5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIC8vc3RhZ2VcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMjgyNjI2JztcbiAgICAgICAgLy9mYWN0b3JpZXNcbiAgICAgICAgdGhpcy5wbGF5ZXJGYWN0b3J5ID0gbmV3IFBsYXllckZhY3RvcnkodGhpcy5nYW1lKTtcbiAgICAgICAgLy9wbGF5ZXJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllckZhY3RvcnkuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5wbGF5ZXIpO1xuICAgIH1cblxuXG4gICAgdXBkYXRlKCkge1xuICAgIH1cblxufSJdfQ==
},{"../common/Utils.js":3,"../prefabs/players/PlayerFactory.js":6}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
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
},{}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvY29tbW9uL0NhbnZhc0hlbHBlci5qcyIsInNyYy9jb21tb24vVXRpbHMuanMiLCJzcmMvcHJlZmFicy9wbGF5ZXJzL0NpcmNsZVBsYXllci5qcyIsInNyYy9wcmVmYWJzL3BsYXllcnMvUGxheWVyLmpzIiwic3JjL3ByZWZhYnMvcGxheWVycy9QbGF5ZXJGYWN0b3J5LmpzIiwic3JjL3ByZWZhYnMvcGxheWVycy9TcXVhcmVQbGF5ZXIuanMiLCJzcmMvcHJlZmFicy93ZWFwb25zL0RpcnRXZWFwb24uanMiLCJzcmMvcHJlZmFicy93ZWFwb25zL1dlYXBvbi5qcyIsInNyYy9wcmVmYWJzL3dlYXBvbnMvV2VhcG9uRmFjdG9yeS5qcyIsInNyYy9zb2NrZXQvQ29ubmVjdGVkSGFuZGxlci5qcyIsInNyYy9zb2NrZXQvUGxheWVyTW92ZUhhbmRsZXIuanMiLCJzcmMvc29ja2V0L1NvY2tldEhhbmRsZXIuanMiLCJzcmMvc3RhdGVzL0Jvb3QuanMiLCJzcmMvc3RhdGVzL0dhbWUuanMiLCJzcmMvc3RhdGVzL1ByZWxvYWQuanMiLCJzcmMvc3RhdGVzL1N0YXJ0U2NyZWVuLmpzIiwic3JjL3RleHR1cmVzL3BsYXllcnMvUGxheWVyLmpzb24iLCJzcmMvdGV4dHVyZXMvcGxheWVycy9jaXJjbGVwbGF5ZXIuanNvbiIsInNyYy90ZXh0dXJlcy9wbGF5ZXJzL3NxdWFyZXBsYXllci5qc29uIiwic3JjL3RleHR1cmVzL3dlYXBvbnMvZGlydHdlYXBvbi5qc29uIiwic3JjL3RleHR1cmVzL3dlYXBvbnMvd2VhcG9uLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3N0YXRlc0Jvb3RKcyA9IHJlcXVpcmUoXCIuL3N0YXRlcy9Cb290LmpzXCIpO1xuXG52YXIgX3N0YXRlc0Jvb3RKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZXNCb290SnMpO1xuXG52YXIgX3N0YXRlc1ByZWxvYWRKcyA9IHJlcXVpcmUoXCIuL3N0YXRlcy9QcmVsb2FkLmpzXCIpO1xuXG52YXIgX3N0YXRlc1ByZWxvYWRKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZXNQcmVsb2FkSnMpO1xuXG52YXIgX3N0YXRlc1N0YXJ0U2NyZWVuSnMgPSByZXF1aXJlKFwiLi9zdGF0ZXMvU3RhcnRTY3JlZW4uanNcIik7XG5cbnZhciBfc3RhdGVzU3RhcnRTY3JlZW5KczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZXNTdGFydFNjcmVlbkpzKTtcblxudmFyIF9zdGF0ZXNHYW1lSnMgPSByZXF1aXJlKFwiLi9zdGF0ZXMvR2FtZS5qc1wiKTtcblxudmFyIF9zdGF0ZXNHYW1lSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVzR2FtZUpzKTtcblxudmFyIGdhbWU7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBQaGFzZXIuQVVUTywgJ2dhbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGF0ZS5hZGQoJ2Jvb3QnLCBfc3RhdGVzQm9vdEpzMltcImRlZmF1bHRcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXRlLmFkZCgncHJlbG9hZCcsIF9zdGF0ZXNQcmVsb2FkSnMyW1wiZGVmYXVsdFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgIGdhbWUuc3RhdGUuYWRkKCdzdGFydFNjcmVlbicsIF9zdGF0ZXNTdGFydFNjcmVlbkpzMltcImRlZmF1bHRcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXRlLmFkZCgnZ2FtZScsIF9zdGF0ZXNHYW1lSnMyW1wiZGVmYXVsdFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgIGdhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTloY0hBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenMwUWtGRmFVSXNhMEpCUVd0Q096czdPeXRDUVVObUxIRkNRVUZ4UWpzN096dHRRMEZEYWtJc2VVSkJRWGxDT3pzN096UkNRVU5vUXl4clFrRkJhMEk3T3pzN1FVRk1ia01zU1VGQlNTeEpRVUZKTEVOQlFVTTdPMEZCVDFRc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFpRVUZaTzBGQlF6RkNMREpDUVVGSkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFbEJRVWtzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4WFFVRlhMRWxCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlEzUkdMRTFCUVUwc1EwRkJReXhYUVVGWExFbEJRVWtzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4WlFVRlpMRWxCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlEzcEdMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETlVNc01rSkJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc05FSkJRVTBzUTBGQlF6dEJRVU0xUWl3eVFrRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl3clFrRkJVeXhEUVVGRE8wRkJRMnhETERKQ1FVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eGhRVUZoTEcxRFFVRmhMRU5CUVVNN1FVRkRNVU1zTWtKQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzTkVKQlFVMHNRMEZCUXp0QlFVTTFRaXd5UWtGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03UTBGRE1VSXNRMEZCUXlJc0ltWnBiR1VpT2lKRU9pOWhjWFZoTDJkbGIzZGhjaTl6Y21NdllYQndMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWRtRnlJR2RoYldVN1hHNWNibWx0Y0c5eWRDQkNiMjkwSUdaeWIyMGdYQ0l1TDNOMFlYUmxjeTlDYjI5MExtcHpYQ0k3WEc1cGJYQnZjblFnVUhKbGJHOWhaQ0JtY205dElGd2lMaTl6ZEdGMFpYTXZVSEpsYkc5aFpDNXFjMXdpTzF4dWFXMXdiM0owSUZOMFlYSjBVMk55WldWdUlHWnliMjBnWENJdUwzTjBZWFJsY3k5VGRHRnlkRk5qY21WbGJpNXFjMXdpTzF4dWFXMXdiM0owSUVkaGJXVWdabkp2YlNCY0lpNHZjM1JoZEdWekwwZGhiV1V1YW5OY0lqdGNibHh1ZDJsdVpHOTNMbTl1Ykc5aFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdaMkZ0WlNBOUlHNWxkeUJRYUdGelpYSXVSMkZ0WlNoM2FXNWtiM2N1YVc1dVpYSlhhV1IwYUNCOGZDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdVkyeHBaVzUwVjJsa2RHZ2dmSHdnWkc5amRXMWxiblF1WW05a2VTNWpiR2xsYm5SWGFXUjBhQ3dnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZDJsdVpHOTNMbWx1Ym1WeVNHVnBaMmgwSUh4OElHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1amJHbGxiblJJWldsbmFIUWdmSHdnWkc5amRXMWxiblF1WW05a2VTNWpiR2xsYm5SSVpXbG5hSFFzSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZCb1lYTmxjaTVCVlZSUExDQW5aMkZ0WlNjcE8xeHVJQ0JuWVcxbExuTjBZWFJsTG1Ga1pDZ25ZbTl2ZENjc1FtOXZkQ2s3WEc0Z0lHZGhiV1V1YzNSaGRHVXVZV1JrS0Nkd2NtVnNiMkZrSnl4UWNtVnNiMkZrS1R0Y2JpQWdaMkZ0WlM1emRHRjBaUzVoWkdRb0ozTjBZWEowVTJOeVpXVnVKeXhUZEdGeWRGTmpjbVZsYmlrN1hHNGdJR2RoYldVdWMzUmhkR1V1WVdSa0tDZG5ZVzFsSnl4SFlXMWxLVHRjYmlBZ1oyRnRaUzV6ZEdGMFpTNXpkR0Z5ZENnblltOXZkQ2NwTzF4dWZUdGNiaUpkZlE9PSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9VdGlsc0pzID0gcmVxdWlyZSgnLi9VdGlscy5qcycpO1xuXG52YXIgX1V0aWxzSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXRpbHNKcyk7XG5cbnZhciBDYW52YXNIZWxwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhbnZhc0hlbHBlcihjYW52YXMsIGpzb24sIGNvbG9yU2V0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW52YXNIZWxwZXIpO1xuXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnRleHR1cmUgPSBqc29uO1xuICAgICAgICB0aGlzLmNvbG9yU2V0ID0gY29sb3JTZXQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhbnZhc0hlbHBlciwgW3tcbiAgICAgICAga2V5OiAnZHJhd1RleHR1cmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhd1RleHR1cmUoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMudGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ3R4UHJvcCh0aGlzLnRleHR1cmVba2V5XS5jdHhQcm9wKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMudGV4dHVyZVtrZXldLmRyYXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSB0aGlzLnRleHR1cmVba2V5XS5kcmF3W2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMucGFyc2VFeHByZXNzKHBhcnQueCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5wYXJzZUV4cHJlc3MocGFydC55KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQuZHJhd1R5cGUgPT0gJ21vdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydC5kcmF3VHlwZSA9PSAnbGluZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0LmRyYXdUeXBlID09ICdhcmMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXVzID0gdGhpcy5wYXJzZUV4cHJlc3MocGFydC5yYWRpdXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyYyA9IHRoaXMucGFyc2VFeHByZXNzKHBhcnQuYXJjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIGFyYywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHR1cmVba2V5XS5zdHlsZSA9PSAnc3Ryb2tlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuZ2V0Q29sb3Ioa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRleHR1cmVba2V5XS5zdHlsZSA9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5nZXRDb2xvcihrZXkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1cGRhdGVDdHhQcm9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUN0eFByb3AoY3R4UHJvcCkge1xuICAgICAgICAgICAgaWYgKGN0eFByb3ApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIGN0eFByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHhba10gPSBjdHhQcm9wW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q29sb3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29sb3Ioa2V5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvclNldCAmJiB0aGlzLmNvbG9yU2V0W2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xvclNldFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9VdGlsc0pzMlsnZGVmYXVsdCddLmdlbmVyYXRlUmFuZG9tQ29sb3IoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncGFyc2VFeHByZXNzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlRXhwcmVzcyhwb3MpIHtcbiAgICAgICAgICAgIGlmIChpc05hTihwb3MpICYmIC9cXCRcXHsuKlxcfS8udGVzdChwb3MpKSB7XG4gICAgICAgICAgICAgICAgcG9zID0gcG9zLnJlcGxhY2UoL2NhbnZhcy5oZWlnaHQvZ2ksIHRoaXMuY2FudmFzLmhlaWdodCkucmVwbGFjZSgvY2FudmFzLndpZHRoL2dpLCB0aGlzLmNhbnZhcy53aWR0aCk7XG4gICAgICAgICAgICAgICAgcG9zID0gcG9zLnN1YnN0cmluZygyLCBwb3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgcG9zID0gZXZhbChwb3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhbnZhc0hlbHBlcjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENhbnZhc0hlbHBlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5amIyMXRiMjR2UTJGdWRtRnpTR1ZzY0dWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenQxUWtGQmEwSXNXVUZCV1RzN096dEpRVVZVTEZsQlFWazdRVUZGYkVJc1lVRkdUU3haUVVGWkxFTkJSV3BDTEUxQlFVMHNSVUZCUlN4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRk96aENRVVp1UWl4WlFVRlpPenRCUVVkNlFpeFpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRCUVVOeVFpeFpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOd1FpeFpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRMUVVNMVFqczdhVUpCVG1kQ0xGbEJRVms3TzJWQlVXeENMSFZDUVVGSE8wRkJRMVlzWjBKQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdRVUZETTBJc1owSkJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1FVRkRja0lzYVVKQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdEJRVU14UWl4dlFrRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBGQlF6bERMSEZDUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTzBGQlEyeERMSGRDUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnlReXgzUWtGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYkVNc2QwSkJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEyeERMSGRDUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NUVUZCVFN4RlFVRkZPMEZCUTNwQ0xEUkNRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdjVUpCUTNwQ0xFMUJRMGtzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRTFCUVUwc1JVRkJSVHRCUVVNNVFpdzBRa0ZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPM0ZDUVVONlFpeE5RVU5KTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hMUVVGTExFVkJRVVU3UVVGRE4wSXNORUpCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRelZETERSQ1FVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMFF5dzBRa0ZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0eFFrRkROME03YVVKQlEwbzdRVUZEUkN4dlFrRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0QlFVTnlRaXh2UWtGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeFJRVUZSTEVWQlFVVTdRVUZEY2tNc2QwSkJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETVVNc2QwSkJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN2FVSkJRM0pDTEUxQlEwa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4TlFVRk5MRVZCUVVVN1FVRkRlRU1zZDBKQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRlRU1zZDBKQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03YVVKQlEyNUNPMkZCUTBvN1UwRkRTanM3TzJWQlIxa3NkVUpCUVVNc1QwRkJUeXhGUVVGRk8wRkJRMjVDTEdkQ1FVRkpMRTlCUVU4c1JVRkJSVHRCUVVOVUxIRkNRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRTlCUVU4c1JVRkJSVHRCUVVOdVFpeDNRa0ZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRelZDTzJGQlEwbzdVMEZEU2pzN08yVkJTVThzYTBKQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTFZc1owSkJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzSkRMSFZDUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkROMEk3UVVGRFJDeHRRa0ZCVHl4eFFrRkJUU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMU5CUTNSRE96czdaVUZIVnl4elFrRkJReXhIUVVGSExFVkJRVVU3UVVGRFpDeG5Ra0ZCU1N4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOd1F5eHRRa0ZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU4wUnl4dFFrRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEZGtNc2JVSkJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRhRUlzZFVKQlFVOHNSMEZCUnl4RFFVRkRPMkZCUTJRN1FVRkRSQ3h0UWtGQlR5eEhRVUZITEVOQlFVRTdVMEZEWWpzN08xZEJjRVZuUWl4WlFVRlpPenM3Y1VKQlFWb3NXVUZCV1NJc0ltWnBiR1VpT2lKRU9pOWhjWFZoTDJkbGIzZGhjaTl6Y21NdlkyOXRiVzl1TDBOaGJuWmhjMGhsYkhCbGNpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JWZEdsc2N5Qm1jbTl0SUNjdUwxVjBhV3h6TG1wekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1EyRnVkbUZ6U0dWc2NHVnlJSHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0dOaGJuWmhjeXdnYW5OdmJpd2dZMjlzYjNKVFpYUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpZVzUyWVhNZ1BTQmpZVzUyWVhNN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEdWNGRIVnlaU0E5SUdwemIyNDdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyOXNiM0pUWlhRZ1BTQmpiMnh2Y2xObGREdGNiaUFnSUNCOVhHNWNiaUFnSUNCa2NtRjNWR1Y0ZEhWeVpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpkSGdnUFNCMGFHbHpMbU5oYm5aaGN5NWpkSGc3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZM1I0TG1KbFoybHVVR0YwYUNncE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnJaWGtnYVc0Z2RHaHBjeTUwWlhoMGRYSmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5Wd1pHRjBaVU4wZUZCeWIzQW9kR2hwY3k1MFpYaDBkWEpsVzJ0bGVWMHVZM1I0VUhKdmNDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCcElHbHVJSFJvYVhNdWRHVjRkSFZ5WlZ0clpYbGRMbVJ5WVhjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnY0dGeWRDQTlJSFJvYVhNdWRHVjRkSFZ5WlZ0clpYbGRMbVJ5WVhkYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhnZ1BTQjBhR2x6TG5CaGNuTmxSWGh3Y21WemN5aHdZWEowTG5ncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUI1SUQwZ2RHaHBjeTV3WVhKelpVVjRjSEpsYzNNb2NHRnlkQzU1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jR0Z5ZEM1a2NtRjNWSGx3WlNBOVBTQW5iVzkyWlNjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWpkSGd1Ylc5MlpWUnZLSGdzSUhrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxiSE5sSUdsbUlDaHdZWEowTG1SeVlYZFVlWEJsSUQwOUlDZHNhVzVsSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTjBlQzVzYVc1bFZHOG9lQ3dnZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnNjMlVnYVdZZ0tIQmhjblF1WkhKaGQxUjVjR1VnUFQwZ0oyRnlZeWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhKaFpHbDFjeUE5SUhSb2FYTXVjR0Z5YzJWRmVIQnlaWE56S0hCaGNuUXVjbUZrYVhWektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHRnlZeUE5SUhSb2FYTXVjR0Z5YzJWRmVIQnlaWE56S0hCaGNuUXVZWEpqS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amRIZ3VZWEpqS0hnc0lIa3NJSEpoWkdsMWN5d2dNQ3dnWVhKakxDQm1ZV3h6WlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amRIZ3VZMnh2YzJWUVlYUm9LQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NTBaWGgwZFhKbFcydGxlVjB1YzNSNWJHVWdQVDBnSjNOMGNtOXJaU2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU4wZUM1emRISnZhMlZUZEhsc1pTQTlJSFJvYVhNdVoyVjBRMjlzYjNJb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTjBlQzV6ZEhKdmEyVW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUdWc2MyVWdhV1lnS0hSb2FYTXVkR1Y0ZEhWeVpWdHJaWGxkTG5OMGVXeGxJRDA5SUNkbWFXeHNKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZM1I0TG1acGJHeFRkSGxzWlNBOUlIUm9hWE11WjJWMFEyOXNiM0lvYTJWNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OMGVDNW1hV3hzS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JseHVJQ0FnSUhWd1pHRjBaVU4wZUZCeWIzQW9ZM1I0VUhKdmNDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1kzUjRVSEp2Y0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYXlCcGJpQmpkSGhRY205d0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amRIaGJhMTBnUFNCamRIaFFjbTl3VzJ0ZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNWNibHh1SUNBZ0lHZGxkRU52Ykc5eUtHdGxlU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1amIyeHZjbE5sZENBbUppQjBhR2x6TG1OdmJHOXlVMlYwVzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU52Ykc5eVUyVjBXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGVjBhV3h6TG1kbGJtVnlZWFJsVW1GdVpHOXRRMjlzYjNJb0tUdGNiaUFnSUNCOVhHNWNibHh1SUNBZ0lIQmhjbk5sUlhod2NtVnpjeWh3YjNNcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dselRtRk9LSEJ2Y3lrZ0ppWWdMMXhjSkZ4Y2V5NHFYRng5THk1MFpYTjBLSEJ2Y3lrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCdmN5QTlJSEJ2Y3k1eVpYQnNZV05sS0M5allXNTJZWE11YUdWcFoyaDBMMmRwTENCMGFHbHpMbU5oYm5aaGN5NW9aV2xuYUhRcExuSmxjR3hoWTJVb0wyTmhiblpoY3k1M2FXUjBhQzluYVN3Z2RHaHBjeTVqWVc1MllYTXVkMmxrZEdncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY0c5eklEMGdjRzl6TG5OMVluTjBjbWx1WnlneUxDQndiM011YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3YjNNZ1BTQmxkbUZzS0hCdmN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnY0c5ek8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQndiM05jYmlBZ0lDQjlYRzVjYm4waVhYMD0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgVXRpbHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFV0aWxzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXRpbHMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhVdGlscywgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnZ2VuZXJhdGVSYW5kb21Db2xvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUNvbG9yKCkge1xuICAgICAgICAgICAgdmFyIGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSAnIyc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2xvcjtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBVdGlscztcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFV0aWxzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTlqYjIxdGIyNHZWWFJwYkhNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dEpRVUZ4UWl4TFFVRkxPMkZCUVV3c1MwRkJTenM0UWtGQlRDeExRVUZMT3pzN2FVSkJRVXdzUzBGQlN6czdaVUZEU1N3clFrRkJSenRCUVVONlFpeG5Ra0ZCU1N4UFFVRlBMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdRVUZEYWtNc1owSkJRVWtzUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTm9RaXhwUWtGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTjRRaXh4UWtGQlN5eEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM0JFTzBGQlEwUXNiVUpCUVU4c1MwRkJTeXhEUVVGRE8xTkJRMmhDT3pzN1YwRlNaMElzUzBGQlN6czdPM0ZDUVVGTUxFdEJRVXNpTENKbWFXeGxJam9pUkRvdllYRjFZUzluWlc5M1lYSXZjM0pqTDJOdmJXMXZiaTlWZEdsc2N5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGVjBhV3h6SUh0Y2JpQWdJQ0J6ZEdGMGFXTWdaMlZ1WlhKaGRHVlNZVzVrYjIxRGIyeHZjaWdwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR3hsZEhSbGNuTWdQU0FuTURFeU16UTFOamM0T1VGQ1EwUkZSaWM3WEc0Z0lDQWdJQ0FnSUhaaGNpQmpiMnh2Y2lBOUlDY2pKenRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENBMk95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eUlDczlJR3hsZEhSbGNuTmJUV0YwYUM1bWJHOXZjaWhOWVhSb0xuSmhibVJ2YlNncElDb2dNVFlwWFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXNiM0k3WEc0Z0lDQWdmVnh1ZlNKZGZRPT0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9QbGF5ZXJKcyA9IHJlcXVpcmUoJy4vUGxheWVyLmpzJyk7XG5cbnZhciBfUGxheWVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGxheWVySnMpO1xuXG52YXIgX2NvbW1vbkNhbnZhc0hlbHBlckpzID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL0NhbnZhc0hlbHBlci5qcycpO1xuXG52YXIgX2NvbW1vbkNhbnZhc0hlbHBlckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1vbkNhbnZhc0hlbHBlckpzKTtcblxudmFyIF90ZXh0dXJlc1BsYXllcnNDaXJjbGVwbGF5ZXJKc29uID0gcmVxdWlyZSgnLi4vLi4vdGV4dHVyZXMvcGxheWVycy9jaXJjbGVwbGF5ZXIuanNvbicpO1xuXG52YXIgX3RleHR1cmVzUGxheWVyc0NpcmNsZXBsYXllckpzb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGV4dHVyZXNQbGF5ZXJzQ2lyY2xlcGxheWVySnNvbik7XG5cbnZhciBDaXJjbGVQbGF5ZXIgPSAoZnVuY3Rpb24gKF9QbGF5ZXIpIHtcbiAgICBfaW5oZXJpdHMoQ2lyY2xlUGxheWVyLCBfUGxheWVyKTtcblxuICAgIGZ1bmN0aW9uIENpcmNsZVBsYXllcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENpcmNsZVBsYXllcik7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2lyY2xlUGxheWVyLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENpcmNsZVBsYXllciwgW3tcbiAgICAgICAga2V5OiAnZHJhdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICAgICAgbmV3IF9jb21tb25DYW52YXNIZWxwZXJKczJbJ2RlZmF1bHQnXSh0aGlzLmNhbnZhcywgX3RleHR1cmVzUGxheWVyc0NpcmNsZXBsYXllckpzb24yWydkZWZhdWx0J10pLmRyYXdUZXh0dXJlKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2lyY2xlUGxheWVyO1xufSkoX1BsYXllckpzMlsnZGVmYXVsdCddKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ2lyY2xlUGxheWVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl3Y21WbVlXSnpMM0JzWVhsbGNuTXZRMmx5WTJ4bFVHeGhlV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3ZDBKQlFXMUNMR0ZCUVdFN096czdiME5CUTFBc09FSkJRVGhDT3pzN095dERRVU5vUXl3d1EwRkJNRU03T3pzN1NVRkZOVU1zV1VGQldUdGpRVUZhTEZsQlFWazdPMkZCUVZvc1dVRkJXVHM0UWtGQldpeFpRVUZaT3p0dFEwRkJXaXhaUVVGWk96czdhVUpCUVZvc1dVRkJXVHM3WlVGRmVrSXNaMEpCUVVjN1FVRkRTQ3hyUkVGQmFVSXNTVUZCU1N4RFFVRkRMRTFCUVUwc0swTkJRVmtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0VFFVTXhSRHM3TzFkQlNtZENMRmxCUVZrN096dHhRa0ZCV2l4WlFVRlpJaXdpWm1sc1pTSTZJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl3Y21WbVlXSnpMM0JzWVhsbGNuTXZRMmx5WTJ4bFVHeGhlV1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGQnNZWGxsY2lCbWNtOXRJQ2N1TDFCc1lYbGxjaTVxY3ljN1hHNXBiWEJ2Y25RZ1EyRnVkbUZ6U0dWc2NHVnlJR1p5YjIwZ0p5NHVMeTR1TDJOdmJXMXZiaTlEWVc1MllYTklaV3h3WlhJdWFuTW5PMXh1YVcxd2IzSjBJSEJzWVhsbGNrcHpiMjRnWm5KdmJTQW5MaTR2TGk0dmRHVjRkSFZ5WlhNdmNHeGhlV1Z5Y3k5amFYSmpiR1Z3YkdGNVpYSXVhbk52YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVOcGNtTnNaVkJzWVhsbGNpQmxlSFJsYm1SeklGQnNZWGxsY2lCN1hHNWNiaUFnSUNCa2NtRjNLQ2tnZTF4dUlDQWdJQ0FnSUNCdVpYY2dRMkZ1ZG1GelNHVnNjR1Z5S0hSb2FYTXVZMkZ1ZG1GekxIQnNZWGxsY2twemIyNHBMbVJ5WVhkVVpYaDBkWEpsS0NrN1hHNGdJQ0FnZlZ4dVhHNTlJbDE5IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfY29tbW9uQ2FudmFzSGVscGVySnMgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vQ2FudmFzSGVscGVyLmpzJyk7XG5cbnZhciBfY29tbW9uQ2FudmFzSGVscGVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tbW9uQ2FudmFzSGVscGVySnMpO1xuXG52YXIgX3RleHR1cmVzUGxheWVyc1BsYXllckpzb24gPSByZXF1aXJlKCcuLi8uLi90ZXh0dXJlcy9wbGF5ZXJzL1BsYXllci5qc29uJyk7XG5cbnZhciBfdGV4dHVyZXNQbGF5ZXJzUGxheWVySnNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXh0dXJlc1BsYXllcnNQbGF5ZXJKc29uKTtcblxudmFyIFBsYXllciA9IChmdW5jdGlvbiAoX1BoYXNlciRTcHJpdGUpIHtcbiAgICBfaW5oZXJpdHMoUGxheWVyLCBfUGhhc2VyJFNwcml0ZSk7XG5cbiAgICBmdW5jdGlvbiBQbGF5ZXIoZ2FtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IsIHdlYXBvbkZhY3RvcnkpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsYXllcik7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoUGxheWVyLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgZ2FtZSwgeCwgeSwgZ2FtZS5tYWtlLmJpdG1hcERhdGEod2lkdGgsIGhlaWdodCkpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMua2V5O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG5cbiAgICAgICAgdGhpcy5kcmF3KCk7XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IDMwMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IC05MDtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUodGhpcywgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICAgICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9keS5kcmFnLnNldCg2MCk7XG5cbiAgICAgICAgdGhpcy53ZWFwb25GYWN0b3J5ID0gd2VhcG9uRmFjdG9yeTtcbiAgICAgICAgdGhpcy5jcmVhdGVXZWFwb24oKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUGxheWVyLCBbe1xuICAgICAgICBrZXk6ICdkcmF3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICBuZXcgX2NvbW1vbkNhbnZhc0hlbHBlckpzMlsnZGVmYXVsdCddKHRoaXMuY2FudmFzLCBfdGV4dHVyZXNQbGF5ZXJzUGxheWVySnNvbjJbJ2RlZmF1bHQnXSkuZHJhd1RleHR1cmUoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgICAgIHRoaXMuYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAwO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuTEVGVCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkuYW5ndWxhclZlbG9jaXR5ID0gLTIwMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuUklHSFQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDIwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5VUCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUudmVsb2NpdHlGcm9tQW5nbGUodGhpcy5hbmdsZSwgMzAwLCB0aGlzLmJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5ET1dOKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS52ZWxvY2l0eUZyb21BbmdsZSh0aGlzLmFuZ2xlLCAzMDAsIHRoaXMuYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpcmVCdXR0b24uaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53ZWFwb24uZmlyZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwdXNoU3RhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaFN0YXRlKCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmdlb3dhci5zb2NrZXRIYW5kbGVyLnB1c2goeyBuYW1lOiBcInBsYXllclwiLCBpZDogdGhpcy5nYW1lLmdlb3dhci5wbGF5ZXJJZCwgeDogdGhpcy54LCB5OiB0aGlzLnksIGNhbnZhczogdGhpcy5jYW52YXMuY2FudmFzIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjcmVhdGVXZWFwb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlV2VhcG9uKCkge1xuICAgICAgICAgICAgdGhpcy53ZWFwb24gPSB0aGlzLndlYXBvbkZhY3RvcnkuY3JlYXRlV2VhcG9uKCdkaXJ0Jyk7XG5cbiAgICAgICAgICAgIHRoaXMud2VhcG9uLnRyYWNrU3ByaXRlKHRoaXMsIHRoaXMud2lkdGggLyAyICsgNSwgMCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZmlyZUJ1dHRvbiA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleUNvZGUuU1BBQ0VCQVIpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBsYXllcjtcbn0pKFBoYXNlci5TcHJpdGUpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQbGF5ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwzQnNZWGxsY25NdlVHeGhlV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3YjBOQlFYbENMRGhDUVVFNFFqczdPenQ1UTBGRGFFTXNiME5CUVc5RE96czdPMGxCUlhSRExFMUJRVTA3WTBGQlRpeE5RVUZOT3p0QlFVVmFMR0ZCUmswc1RVRkJUU3hEUVVWWUxFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVVzUzBGQlN5eEZRVUZGTEdGQlFXRXNSVUZCUlRzNFFrRkdOVU1zVFVGQlRUczdRVUZIYmtJc2JVTkJTR0VzVFVGQlRTdzJRMEZIWWl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVTdRVUZEZGtRc1dVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMEZCUTNaQ0xGbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPenRCUVVWdVFpeFpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN08wRkJSVm9zV1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNN1FVRkRha0lzV1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJRenRCUVVOcVFpeFpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETlVJc1dVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTNSRUxGbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEzQkRMRmxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenM3UVVGRmRrSXNXVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhoUVVGaExFTkJRVU03UVVGRGJrTXNXVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8wdEJRM1pDT3p0cFFrRnNRbWRDTEUxQlFVMDdPMlZCY1VKdVFpeG5Ra0ZCUnp0QlFVTklMR3RFUVVGcFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4NVEwRkJZU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFOQlF6TkVPenM3WlVGRlN5eHJRa0ZCUnp0QlFVTk1MR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM3BDTEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNwQ0xHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJUbENMR2RDUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRCUVVOMlJDeHZRa0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTTdZVUZEY0VNc1RVRkRTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVNM1JDeHZRa0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzUjBGQlJ5eERRVUZETzJGQlEyNURPMEZCUTBRc1owSkJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRk8wRkJRM0pFTEc5Q1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTnVSaXhOUVVOSkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8wRkJRelZFTEc5Q1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTnVSanM3UVVGRlJDeG5Ra0ZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU40UWl4dlFrRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0aFFVTjBRanM3UVVGRlJDeG5Ra0ZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xTkJRM0JDT3pzN1pVRkhVU3h4UWtGQlJ6dEJRVU5TTEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxGRkJRVkVzUlVGQlJTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRMMGs3T3p0bFFVZFhMSGRDUVVGSE8wRkJRMWdzWjBKQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN08wRkJSWFJFTEdkQ1FVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenM3UVVGRk0wUXNaMEpCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xTkJRemxGT3pzN1YwRTVSR2RDTEUxQlFVMDdSMEZCVXl4TlFVRk5MRU5CUVVNc1RVRkJUVHM3Y1VKQlFUVkNMRTFCUVUwaUxDSm1hV3hsSWpvaVJEb3ZZWEYxWVM5blpXOTNZWEl2YzNKakwzQnlaV1poWW5NdmNHeGhlV1Z5Y3k5UWJHRjVaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1EyRnVkbUZ6U0dWc2NHVnlJR1p5YjIwZ0p5NHVMeTR1TDJOdmJXMXZiaTlEWVc1MllYTklaV3h3WlhJdWFuTW5PMXh1YVcxd2IzSjBJSEJzWVhsbGNrcHpiMjRnWm5KdmJTQW5MaTR2TGk0dmRHVjRkSFZ5WlhNdmNHeGhlV1Z5Y3k5UWJHRjVaWEl1YW5OdmJpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnNZWGxsY2lCbGVIUmxibVJ6SUZCb1lYTmxjaTVUY0hKcGRHVWdlMXh1WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvWjJGdFpTd2dlQ3dnZVN3Z2QybGtkR2dzSUdobGFXZG9kQ3dnWTI5c2IzSXNJSGRsWVhCdmJrWmhZM1J2Y25rcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb1oyRnRaU3dnZUN3Z2VTd2daMkZ0WlM1dFlXdGxMbUpwZEcxaGNFUmhkR0VvZDJsa2RHZ3NJR2hsYVdkb2RDa3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTmhiblpoY3lBOUlIUm9hWE11YTJWNU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJHOXlJRDBnWTI5c2IzSTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWtjbUYzS0NrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emNHVmxaQ0E5SURNd01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtZHNaU0E5SUMwNU1EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtTm9iM0l1YzJWMFZHOG9NQzQxTENBd0xqVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Y0doNWMybGpjeTVsYm1GaWJHVW9kR2hwY3l3Z1VHaGhjMlZ5TGxCb2VYTnBZM011UVZKRFFVUkZLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG1OdmJHeHBaR1ZYYjNKc1pFSnZkVzVrY3lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1a2NtRm5Mbk5sZENnMk1DazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NTNaV0Z3YjI1R1lXTjBiM0o1SUQwZ2QyVmhjRzl1Um1GamRHOXllVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpjbVZoZEdWWFpXRndiMjRvS1R0Y2JpQWdJQ0I5WEc1Y2JseHVJQ0FnSUdSeVlYY29LU0I3WEc0Z0lDQWdJQ0FnSUc1bGR5QkRZVzUyWVhOSVpXeHdaWElvZEdocGN5NWpZVzUyWVhNc0lIQnNZWGxsY2twemIyNHBMbVJ5WVhkVVpYaDBkWEpsS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZFhCa1lYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUp2WkhrdWRtVnNiMk5wZEhrdWVDQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1MlpXeHZZMmwwZVM1NUlEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG1GdVozVnNZWEpXWld4dlkybDBlU0E5SURBN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaMkZ0WlM1cGJuQjFkQzVyWlhsaWIyRnlaQzVwYzBSdmQyNG9VR2hoYzJWeUxrdGxlV0p2WVhKa0xreEZSbFFwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1WVc1bmRXeGhjbFpsYkc5amFYUjVJRDBnTFRJd01EdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElHbG1JQ2gwYUdsekxtZGhiV1V1YVc1d2RYUXVhMlY1WW05aGNtUXVhWE5FYjNkdUtGQm9ZWE5sY2k1TFpYbGliMkZ5WkM1U1NVZElWQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzVoYm1kMWJHRnlWbVZzYjJOcGRIa2dQU0F5TURBN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaMkZ0WlM1cGJuQjFkQzVyWlhsaWIyRnlaQzVwYzBSdmQyNG9VR2hoYzJWeUxrdGxlV0p2WVhKa0xsVlFLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVZWEpqWVdSbExuWmxiRzlqYVhSNVJuSnZiVUZ1WjJ4bEtIUm9hWE11WVc1bmJHVXNJRE13TUN3Z2RHaHBjeTVpYjJSNUxuWmxiRzlqYVhSNUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElHbG1JQ2gwYUdsekxtZGhiV1V1YVc1d2RYUXVhMlY1WW05aGNtUXVhWE5FYjNkdUtGQm9ZWE5sY2k1TFpYbGliMkZ5WkM1RVQxZE9LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVZWEpqWVdSbExuWmxiRzlqYVhSNVJuSnZiVUZ1WjJ4bEtIUm9hWE11WVc1bmJHVXNJRE13TUN3Z2RHaHBjeTVpYjJSNUxuWmxiRzlqYVhSNUtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1acGNtVkNkWFIwYjI0dWFYTkViM2R1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuZGxZWEJ2Ymk1bWFYSmxLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CMWMyaFRkR0YwWlNncE8xeHVJQ0FnSUgxY2JseHVYRzRnSUNBZ2NIVnphRk4wWVhSbEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1WjJWdmQyRnlMbk52WTJ0bGRFaGhibVJzWlhJdWNIVnphQ2g3SUc1aGJXVTZJRndpY0d4aGVXVnlYQ0lzSUdsa09pQjBhR2x6TG1kaGJXVXVaMlZ2ZDJGeUxuQnNZWGxsY2tsa0xDQjRJRG9nZEdocGN5NTRMQ0I1SURvZ2RHaHBjeTU1TENCallXNTJZWE1nT2lCMGFHbHpMbU5oYm5aaGN5NWpZVzUyWVhNZ2ZTazdYRzRnSUNBZ2ZWeHVYRzVjYmlBZ0lDQmpjbVZoZEdWWFpXRndiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZDJWaGNHOXVJRDBnZEdocGN5NTNaV0Z3YjI1R1lXTjBiM0o1TG1OeVpXRjBaVmRsWVhCdmJpZ25aR2x5ZENjcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWQyVmhjRzl1TG5SeVlXTnJVM0J5YVhSbEtIUm9hWE1zSUhSb2FYTXVkMmxrZEdnZ0x5QXlJQ3NnTlN3Z01Dd2dkSEoxWlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bWFYSmxRblYwZEc5dUlEMGdkR2hwY3k1bllXMWxMbWx1Y0hWMExtdGxlV0p2WVhKa0xtRmtaRXRsZVNoUWFHRnpaWEl1UzJWNVEyOWtaUzVUVUVGRFJVSkJVaWs3WEc0Z0lDQWdmVnh1WEc1OUlsMTkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfUGxheWVySnMgPSByZXF1aXJlKCcuL1BsYXllci5qcycpO1xuXG52YXIgX1BsYXllckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BsYXllckpzKTtcblxudmFyIF9TcXVhcmVQbGF5ZXJKcyA9IHJlcXVpcmUoJy4vU3F1YXJlUGxheWVyLmpzJyk7XG5cbnZhciBfU3F1YXJlUGxheWVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3F1YXJlUGxheWVySnMpO1xuXG52YXIgX0NpcmNsZVBsYXllckpzID0gcmVxdWlyZSgnLi9DaXJjbGVQbGF5ZXIuanMnKTtcblxudmFyIF9DaXJjbGVQbGF5ZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DaXJjbGVQbGF5ZXJKcyk7XG5cbnZhciBfd2VhcG9uc1dlYXBvbkZhY3RvcnlKcyA9IHJlcXVpcmUoJy4uL3dlYXBvbnMvV2VhcG9uRmFjdG9yeS5qcycpO1xuXG52YXIgX3dlYXBvbnNXZWFwb25GYWN0b3J5SnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2VhcG9uc1dlYXBvbkZhY3RvcnlKcyk7XG5cbnZhciBfY29tbW9uVXRpbHNKcyA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9VdGlscy5qcycpO1xuXG52YXIgX2NvbW1vblV0aWxzSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tbW9uVXRpbHNKcyk7XG5cbnZhciBQbGF5ZXJGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXJGYWN0b3J5KGdhbWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsYXllckZhY3RvcnkpO1xuXG4gICAgICAgIHRoaXMuX3BsYXllclR5cGVzID0gWyd0cmlhbmdsZScsICdzcXVhcmUnLCAnY2lyY2xlJ107XG5cbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy53ZWFwb25GYWN0b3J5ID0gbmV3IF93ZWFwb25zV2VhcG9uRmFjdG9yeUpzMlsnZGVmYXVsdCddKGdhbWUpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQbGF5ZXJGYWN0b3J5LCBbe1xuICAgICAgICBrZXk6ICdjcmVhdGVQbGF5ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUGxheWVyKGRlZmF1bHRUeXBlKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGRlZmF1bHRUeXBlO1xuICAgICAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHRoaXMuX3BsYXllclR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX3BsYXllclR5cGVzLmxlbmd0aCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgX1BsYXllckpzMlsnZGVmYXVsdCddKHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndpZHRoIC8gMiwgdGhpcy5nYW1lLmhlaWdodCAvIDIsIDM1LCAzMCwgX2NvbW1vblV0aWxzSnMyWydkZWZhdWx0J10uZ2VuZXJhdGVSYW5kb21Db2xvcigpLCB0aGlzLndlYXBvbkZhY3RvcnkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfU3F1YXJlUGxheWVySnMyWydkZWZhdWx0J10odGhpcy5nYW1lLCB0aGlzLmdhbWUud2lkdGggLyAyLCB0aGlzLmdhbWUuaGVpZ2h0IC8gMiwgMzUsIDMwLCBfY29tbW9uVXRpbHNKczJbJ2RlZmF1bHQnXS5nZW5lcmF0ZVJhbmRvbUNvbG9yKCksIHRoaXMud2VhcG9uRmFjdG9yeSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IF9DaXJjbGVQbGF5ZXJKczJbJ2RlZmF1bHQnXSh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53aWR0aCAvIDIsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLCAzNSwgMzAsIF9jb21tb25VdGlsc0pzMlsnZGVmYXVsdCddLmdlbmVyYXRlUmFuZG9tQ29sb3IoKSwgdGhpcy53ZWFwb25GYWN0b3J5KTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IF9QbGF5ZXJKczJbJ2RlZmF1bHQnXSh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53aWR0aCAvIDIsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLCAzNSwgMzAsIF9jb21tb25VdGlsc0pzMlsnZGVmYXVsdCddLmdlbmVyYXRlUmFuZG9tQ29sb3IoKSwgdGhpcy53ZWFwb25GYWN0b3J5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQbGF5ZXJGYWN0b3J5O1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUGxheWVyRmFjdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5d2NtVm1ZV0p6TDNCc1lYbGxjbk12VUd4aGVXVnlSbUZqZEc5eWVTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3ZDBKQlFXMUNMR0ZCUVdFN096czdPRUpCUTFBc2JVSkJRVzFDT3pzN096aENRVU51UWl4dFFrRkJiVUk3T3pzN2MwTkJRMnhDTERaQ1FVRTJRanM3T3pzMlFrRkRja01zZFVKQlFYVkNPenM3TzBsQlJYQkNMR0ZCUVdFN1FVRkpia0lzWVVGS1RTeGhRVUZoTEVOQlNXeENMRWxCUVVrc1JVRkJSVHM0UWtGS1JDeGhRVUZoT3p0aFFVVTVRaXhaUVVGWkxFZEJRVWNzUTBGQlF5eFZRVUZWTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJRenM3UVVGSE0wTXNXVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGFrSXNXVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXgzUTBGQmEwSXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRhRVE3TzJsQ1FWQm5RaXhoUVVGaE96dGxRVk5zUWl4elFrRkJReXhYUVVGWExFVkJRVVU3UVVGRGRFSXNaMEpCUVVrc1NVRkJTU3hIUVVGSExGZEJRVmNzUTBGQlF6dEJRVU4yUWl4blFrRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJUdEJRVU5RTEc5Q1FVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGJFWTdRVUZEUkN4dlFrRkJVU3hKUVVGSk8wRkJRMUlzY1VKQlFVc3NWVUZCVlR0QlFVTllMREpDUVVGUExEQkNRVUZYTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxESkNRVUZOTEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMEZCUVVFc1FVRkRja2tzY1VKQlFVc3NVVUZCVVR0QlFVTlVMREpDUVVGUExHZERRVUZwUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTd3lRa0ZCVFN4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRCUVVGQkxFRkJRek5KTEhGQ1FVRkxMRkZCUVZFN1FVRkRWQ3d5UWtGQlR5eG5RMEZCYVVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNNa0pCUVUwc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03UVVGQlFTeEJRVU16U1R0QlFVTkpMREpDUVVGUExEQkNRVUZYTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxESkNRVUZOTEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMEZCUVVFc1lVRkRlRWs3VTBGRFNqczdPMWRCZUVKblFpeGhRVUZoT3pzN2NVSkJRV0lzWVVGQllTSXNJbVpwYkdVaU9pSkVPaTloY1hWaEwyZGxiM2RoY2k5emNtTXZjSEpsWm1GaWN5OXdiR0Y1WlhKekwxQnNZWGxsY2taaFkzUnZjbmt1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VHeGhlV1Z5SUdaeWIyMGdKeTR2VUd4aGVXVnlMbXB6Snp0Y2JtbHRjRzl5ZENCVGNYVmhjbVZRYkdGNVpYSWdabkp2YlNBbkxpOVRjWFZoY21WUWJHRjVaWEl1YW5Nbk8xeHVhVzF3YjNKMElFTnBjbU5zWlZCc1lYbGxjaUJtY205dElDY3VMME5wY21Oc1pWQnNZWGxsY2k1cWN5YzdYRzVwYlhCdmNuUWdWMlZoY0c5dVJtRmpkRzl5ZVNCbWNtOXRJQ2N1TGk5M1pXRndiMjV6TDFkbFlYQnZia1poWTNSdmNua3Vhbk1uTzF4dWFXMXdiM0owSUZWMGFXeHpJR1p5YjIwZ0p5NHVMeTR1TDJOdmJXMXZiaTlWZEdsc2N5NXFjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJzWVhsbGNrWmhZM1J2Y25rZ2UxeHVYRzRnSUNBZ1gzQnNZWGxsY2xSNWNHVnpJRDBnV3lkMGNtbGhibWRzWlNjc0lDZHpjWFZoY21VbkxDQW5ZMmx5WTJ4bEoxMDdYRzVjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhuWVcxbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaU0E5SUdkaGJXVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWQyVmhjRzl1Um1GamRHOXllU0E5SUc1bGR5QlhaV0Z3YjI1R1lXTjBiM0o1S0dkaGJXVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnlaV0YwWlZCc1lYbGxjaWhrWldaaGRXeDBWSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZEhsd1pTQTlJR1JsWm1GMWJIUlVlWEJsTzF4dUlDQWdJQ0FnSUNCcFppQW9JWFI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSNWNHVWdQU0IwYUdsekxsOXdiR0Y1WlhKVWVYQmxjMXROWVhSb0xtWnNiMjl5S0UxaGRHZ3VjbUZ1Wkc5dEtDa2dLaUIwYUdsekxsOXdiR0Y1WlhKVWVYQmxjeTVzWlc1bmRHZ3BYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCemQybDBZMmdnS0hSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnWENKMGNtbGhibWRzWlZ3aU9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dVR3hoZVdWeUtIUm9hWE11WjJGdFpTd2dkR2hwY3k1bllXMWxMbmRwWkhSb0lDOGdNaXdnZEdocGN5NW5ZVzFsTG1obGFXZG9kQ0F2SURJc0lETTFMQ0F6TUN3Z1ZYUnBiSE11WjJWdVpYSmhkR1ZTWVc1a2IyMURiMnh2Y2lncExDQjBhR2x6TG5kbFlYQnZia1poWTNSdmNua3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0JjSW5OeGRXRnlaVndpT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1UzRjFZWEpsVUd4aGVXVnlLSFJvYVhNdVoyRnRaU3dnZEdocGN5NW5ZVzFsTG5kcFpIUm9JQzhnTWl3Z2RHaHBjeTVuWVcxbExtaGxhV2RvZENBdklESXNJRE0xTENBek1Dd2dWWFJwYkhNdVoyVnVaWEpoZEdWU1lXNWtiMjFEYjJ4dmNpZ3BMQ0IwYUdsekxuZGxZWEJ2YmtaaFkzUnZjbmtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNCY0ltTnBjbU5zWlZ3aU9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dRMmx5WTJ4bFVHeGhlV1Z5S0hSb2FYTXVaMkZ0WlN3Z2RHaHBjeTVuWVcxbExuZHBaSFJvSUM4Z01pd2dkR2hwY3k1bllXMWxMbWhsYVdkb2RDQXZJRElzSURNMUxDQXpNQ3dnVlhScGJITXVaMlZ1WlhKaGRHVlNZVzVrYjIxRGIyeHZjaWdwTENCMGFHbHpMbmRsWVhCdmJrWmhZM1J2Y25rcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWbVlYVnNkRHBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUZCc1lYbGxjaWgwYUdsekxtZGhiV1VzSUhSb2FYTXVaMkZ0WlM1M2FXUjBhQ0F2SURJc0lIUm9hWE11WjJGdFpTNW9aV2xuYUhRZ0x5QXlMQ0F6TlN3Z016QXNJRlYwYVd4ekxtZGxibVZ5WVhSbFVtRnVaRzl0UTI5c2IzSW9LU3dnZEdocGN5NTNaV0Z3YjI1R1lXTjBiM0o1S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVmU0pkZlE9PSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX1BsYXllckpzID0gcmVxdWlyZSgnLi9QbGF5ZXIuanMnKTtcblxudmFyIF9QbGF5ZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QbGF5ZXJKcyk7XG5cbnZhciBfY29tbW9uQ2FudmFzSGVscGVySnMgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vQ2FudmFzSGVscGVyLmpzJyk7XG5cbnZhciBfY29tbW9uQ2FudmFzSGVscGVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tbW9uQ2FudmFzSGVscGVySnMpO1xuXG52YXIgX3RleHR1cmVzUGxheWVyc1NxdWFyZXBsYXllckpzb24gPSByZXF1aXJlKCcuLi8uLi90ZXh0dXJlcy9wbGF5ZXJzL3NxdWFyZXBsYXllci5qc29uJyk7XG5cbnZhciBfdGV4dHVyZXNQbGF5ZXJzU3F1YXJlcGxheWVySnNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXh0dXJlc1BsYXllcnNTcXVhcmVwbGF5ZXJKc29uKTtcblxudmFyIFNxdWFyZVBsYXllciA9IChmdW5jdGlvbiAoX1BsYXllcikge1xuICAgIF9pbmhlcml0cyhTcXVhcmVQbGF5ZXIsIF9QbGF5ZXIpO1xuXG4gICAgZnVuY3Rpb24gU3F1YXJlUGxheWVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3F1YXJlUGxheWVyKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihTcXVhcmVQbGF5ZXIucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3F1YXJlUGxheWVyLCBbe1xuICAgICAgICBrZXk6ICdkcmF3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICBuZXcgX2NvbW1vbkNhbnZhc0hlbHBlckpzMlsnZGVmYXVsdCddKHRoaXMuY2FudmFzLCBfdGV4dHVyZXNQbGF5ZXJzU3F1YXJlcGxheWVySnNvbjJbJ2RlZmF1bHQnXSkuZHJhd1RleHR1cmUoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTcXVhcmVQbGF5ZXI7XG59KShfUGxheWVySnMyWydkZWZhdWx0J10pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTcXVhcmVQbGF5ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwzQnNZWGxsY25NdlUzRjFZWEpsVUd4aGVXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdkMEpCUVcxQ0xHRkJRV0U3T3pzN2IwTkJRMUFzT0VKQlFUaENPenM3T3l0RFFVTm9ReXd3UTBGQk1FTTdPenM3U1VGRk5VTXNXVUZCV1R0alFVRmFMRmxCUVZrN08yRkJRVm9zV1VGQldUczRRa0ZCV2l4WlFVRlpPenR0UTBGQldpeFpRVUZaT3pzN2FVSkJRVm9zV1VGQldUczdaVUZGZWtJc1owSkJRVWM3UVVGRFNDeHJSRUZCYVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzSzBOQlFWa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRUUVVNeFJEczdPMWRCU21kQ0xGbEJRVms3T3p0eFFrRkJXaXhaUVVGWklpd2labWxzWlNJNklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwzQnNZWGxsY25NdlUzRjFZWEpsVUd4aGVXVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZCc1lYbGxjaUJtY205dElDY3VMMUJzWVhsbGNpNXFjeWM3WEc1cGJYQnZjblFnUTJGdWRtRnpTR1ZzY0dWeUlHWnliMjBnSnk0dUx5NHVMMk52YlcxdmJpOURZVzUyWVhOSVpXeHdaWEl1YW5Nbk8xeHVhVzF3YjNKMElIQnNZWGxsY2twemIyNGdabkp2YlNBbkxpNHZMaTR2ZEdWNGRIVnlaWE12Y0d4aGVXVnljeTl6Y1hWaGNtVndiR0Y1WlhJdWFuTnZiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRk54ZFdGeVpWQnNZWGxsY2lCbGVIUmxibVJ6SUZCc1lYbGxjaUI3WEc1Y2JpQWdJQ0JrY21GM0tDa2dlMXh1SUNBZ0lDQWdJQ0J1WlhjZ1EyRnVkbUZ6U0dWc2NHVnlLSFJvYVhNdVkyRnVkbUZ6TEhCc1lYbGxja3B6YjI0cExtUnlZWGRVWlhoMGRYSmxLQ2s3WEc0Z0lDQWdmVnh1WEc1OUlsMTkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9XZWFwb25KcyA9IHJlcXVpcmUoJy4vV2VhcG9uLmpzJyk7XG5cbnZhciBfV2VhcG9uSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfV2VhcG9uSnMpO1xuXG52YXIgX2NvbW1vblV0aWxzSnMgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vVXRpbHMuanMnKTtcblxudmFyIF9jb21tb25VdGlsc0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1vblV0aWxzSnMpO1xuXG52YXIgX2NvbW1vbkNhbnZhc0hlbHBlckpzID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL0NhbnZhc0hlbHBlci5qcycpO1xuXG52YXIgX2NvbW1vbkNhbnZhc0hlbHBlckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1vbkNhbnZhc0hlbHBlckpzKTtcblxudmFyIF90ZXh0dXJlc1dlYXBvbnNEaXJ0d2VhcG9uSnNvbiA9IHJlcXVpcmUoJy4uLy4uL3RleHR1cmVzL3dlYXBvbnMvZGlydHdlYXBvbi5qc29uJyk7XG5cbnZhciBfdGV4dHVyZXNXZWFwb25zRGlydHdlYXBvbkpzb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGV4dHVyZXNXZWFwb25zRGlydHdlYXBvbkpzb24pO1xuXG52YXIgRGlydFdlYXBvbiA9IChmdW5jdGlvbiAoX1dlYXBvbikge1xuICAgIF9pbmhlcml0cyhEaXJ0V2VhcG9uLCBfV2VhcG9uKTtcblxuICAgIGZ1bmN0aW9uIERpcnRXZWFwb24oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaXJ0V2VhcG9uKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihEaXJ0V2VhcG9uLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERpcnRXZWFwb24sIFt7XG4gICAgICAgIGtleTogJ2NyZWF0ZUJ1bGxldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWxsZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmJtZCA9IHRoaXMuZ2FtZS5tYWtlLmJpdG1hcERhdGEoMTIsIDEyKTtcbiAgICAgICAgICAgIG5ldyBfY29tbW9uQ2FudmFzSGVscGVySnMyWydkZWZhdWx0J10odGhpcy5ibWQsIF90ZXh0dXJlc1dlYXBvbnNEaXJ0d2VhcG9uSnNvbjJbJ2RlZmF1bHQnXSkuZHJhd1RleHR1cmUoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEaXJ0V2VhcG9uO1xufSkoX1dlYXBvbkpzMlsnZGVmYXVsdCddKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRGlydFdlYXBvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5d2NtVm1ZV0p6TDNkbFlYQnZibk12UkdseWRGZGxZWEJ2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3TzNkQ1FVRnRRaXhoUVVGaE96czdPelpDUVVOa0xIVkNRVUYxUWpzN096dHZRMEZEYUVJc09FSkJRVGhDT3pzN096WkRRVU5vUXl4M1EwRkJkME03T3pzN1NVRkZNVU1zVlVGQlZUdGpRVUZXTEZWQlFWVTdPMkZCUVZZc1ZVRkJWVHM0UWtGQlZpeFZRVUZWT3p0dFEwRkJWaXhWUVVGVk96czdhVUpCUVZZc1ZVRkJWVHM3WlVGRlppeDNRa0ZCUnp0QlFVTllMR2RDUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkROME1zYTBSQlFXbENMRWxCUVVrc1EwRkJReXhIUVVGSExEWkRRVUZaTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1UwRkRka1E3T3p0WFFVeG5RaXhWUVVGVk96czdjVUpCUVZZc1ZVRkJWU0lzSW1acGJHVWlPaUpFT2k5aGNYVmhMMmRsYjNkaGNpOXpjbU12Y0hKbFptRmljeTkzWldGd2IyNXpMMFJwY25SWFpXRndiMjR1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1YyVmhjRzl1SUdaeWIyMGdKeTR2VjJWaGNHOXVMbXB6Snp0Y2JtbHRjRzl5ZENCVmRHbHNjeUJtY205dElDY3VMaTh1TGk5amIyMXRiMjR2VlhScGJITXVhbk1uTzF4dWFXMXdiM0owSUVOaGJuWmhjMGhsYkhCbGNpQm1jbTl0SUNjdUxpOHVMaTlqYjIxdGIyNHZRMkZ1ZG1GelNHVnNjR1Z5TG1wekp6dGNibWx0Y0c5eWRDQjNaV0Z3YjI1S2MyOXVJR1p5YjIwZ0p5NHVMeTR1TDNSbGVIUjFjbVZ6TDNkbFlYQnZibk12WkdseWRIZGxZWEJ2Ymk1cWMyOXVKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdSR2x5ZEZkbFlYQnZiaUJsZUhSbGJtUnpJRmRsWVhCdmJudGNibHh1SUNBZ0lHTnlaV0YwWlVKMWJHeGxkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYldRZ1BTQjBhR2x6TG1kaGJXVXViV0ZyWlM1aWFYUnRZWEJFWVhSaEtERXlMQ0F4TWlrN1hHNGdJQ0FnSUNBZ0lHNWxkeUJEWVc1MllYTklaV3h3WlhJb2RHaHBjeTVpYldRc2QyVmhjRzl1U25OdmJpa3VaSEpoZDFSbGVIUjFjbVVvS1R0Y2JpQWdJQ0I5WEc1Y2JuMGlYWDA9IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2NvbW1vblV0aWxzSnMgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vVXRpbHMuanMnKTtcblxudmFyIF9jb21tb25VdGlsc0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1vblV0aWxzSnMpO1xuXG52YXIgX2NvbW1vbkNhbnZhc0hlbHBlckpzID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL0NhbnZhc0hlbHBlci5qcycpO1xuXG52YXIgX2NvbW1vbkNhbnZhc0hlbHBlckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1vbkNhbnZhc0hlbHBlckpzKTtcblxudmFyIF90ZXh0dXJlc1dlYXBvbnNXZWFwb25Kc29uID0gcmVxdWlyZSgnLi4vLi4vdGV4dHVyZXMvd2VhcG9ucy93ZWFwb24uanNvbicpO1xuXG52YXIgX3RleHR1cmVzV2VhcG9uc1dlYXBvbkpzb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGV4dHVyZXNXZWFwb25zV2VhcG9uSnNvbik7XG5cbnZhciBXZWFwb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdlYXBvbihnYW1lKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXZWFwb24pO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlV2VhcG9uKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdlYXBvbiwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlQnVsbGV0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUJ1bGxldCgpIHtcbiAgICAgICAgICAgIHRoaXMuYm1kID0gdGhpcy5nYW1lLm1ha2UuYml0bWFwRGF0YSgxMiwgMTIpO1xuICAgICAgICAgICAgbmV3IF9jb21tb25DYW52YXNIZWxwZXJKczJbJ2RlZmF1bHQnXSh0aGlzLmJtZCwgX3RleHR1cmVzV2VhcG9uc1dlYXBvbkpzb24yWydkZWZhdWx0J10pLmRyYXdUZXh0dXJlKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZVdlYXBvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVXZWFwb24oKSB7XG4gICAgICAgICAgICB0aGlzLndlYXBvbiA9IHRoaXMuZ2FtZS5hZGQud2VhcG9uKDMwLCB0aGlzLmJtZCk7XG5cbiAgICAgICAgICAgIC8vICBUaGUgYnVsbGV0IHdpbGwgYmUgYXV0b21hdGljYWxseSBraWxsZWQgd2hlbiBpdCBsZWF2ZXMgdGhlIHdvcmxkIGJvdW5kc1xuICAgICAgICAgICAgdGhpcy53ZWFwb24uYnVsbGV0S2lsbFR5cGUgPSBQaGFzZXIuV2VhcG9uLktJTExfV09STERfQk9VTkRTO1xuXG4gICAgICAgICAgICAvLyAgVGhlIHNwZWVkIGF0IHdoaWNoIHRoZSBidWxsZXQgaXMgZmlyZWRcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLmJ1bGxldFNwZWVkID0gNDAwO1xuXG4gICAgICAgICAgICAvLyAgU3BlZWQtdXAgdGhlIHJhdGUgb2YgZmlyZSwgYWxsb3dpbmcgdGhlbSB0byBzaG9vdCAxIGJ1bGxldCBldmVyeSA2MG1zXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5maXJlUmF0ZSA9IDYwO1xuXG4gICAgICAgICAgICAvLyAgQWRkIGEgdmFyaWFuY2UgdG8gdGhlIGJ1bGxldCBzcGVlZCBieSArLSB0aGlzIHZhbHVlXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5idWxsZXRTcGVlZFZhcmlhbmNlID0gMjAwO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0cmFja1Nwcml0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFja1Nwcml0ZShzcHJpdGUsIHgsIHksIHJvdGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLndlYXBvbi50cmFja1Nwcml0ZShzcHJpdGUsIHgsIHksIHJvdGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZmlyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaXJlKCkge1xuICAgICAgICAgICAgdGhpcy53ZWFwb24uZmlyZSgpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdlYXBvbjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFdlYXBvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5d2NtVm1ZV0p6TDNkbFlYQnZibk12VjJWaGNHOXVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzMlFrRkJhMElzZFVKQlFYVkNPenM3TzI5RFFVTm9RaXc0UWtGQk9FSTdPenM3ZVVOQlEyaERMRzlEUVVGdlF6czdPenRKUVVWMFF5eE5RVUZOTzBGQlJWb3NZVUZHVFN4TlFVRk5MRU5CUlZnc1NVRkJTU3hGUVVGRk96aENRVVpFTEUxQlFVMDdPMEZCUjI1Q0xGbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTJwQ0xGbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0QlFVTndRaXhaUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdTMEZEZGtJN08ybENRVTVuUWl4TlFVRk5PenRsUVZOWUxIZENRVUZITzBGQlExZ3NaMEpCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTTNReXhyUkVGQmFVSXNTVUZCU1N4RFFVRkRMRWRCUVVjc2VVTkJRVmtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0VFFVTjJSRHM3TzJWQlIxY3NkMEpCUVVVN1FVRkRWaXhuUWtGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6czdPMEZCUjJwRUxHZENRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMR05CUVdNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhEUVVGRE96czdRVUZITjBRc1owSkJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4SFFVRkhMRWRCUVVjc1EwRkJRenM3TzBGQlJ6bENMR2RDUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN096dEJRVWN4UWl4blFrRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eHRRa0ZCYlVJc1IwRkJSeXhIUVVGSExFTkJRVU03VTBGRGVrTTdPenRsUVVkVkxIRkNRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJUdEJRVU5vUXl4blFrRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVMEZEYmtRN096dGxRVWRITEdkQ1FVRkhPMEZCUTBnc1owSkJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1UwRkRkRUk3T3p0WFFYWkRaMElzVFVGQlRUczdPM0ZDUVVGT0xFMUJRVTBpTENKbWFXeGxJam9pUkRvdllYRjFZUzluWlc5M1lYSXZjM0pqTDNCeVpXWmhZbk12ZDJWaGNHOXVjeTlYWldGd2IyNHVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVlhScGJITWdabkp2YlNBbkxpNHZMaTR2WTI5dGJXOXVMMVYwYVd4ekxtcHpKenRjYm1sdGNHOXlkQ0JEWVc1MllYTklaV3h3WlhJZ1puSnZiU0FuTGk0dkxpNHZZMjl0Ylc5dUwwTmhiblpoYzBobGJIQmxjaTVxY3ljN1hHNXBiWEJ2Y25RZ2QyVmhjRzl1U25OdmJpQm1jbTl0SUNjdUxpOHVMaTkwWlhoMGRYSmxjeTkzWldGd2IyNXpMM2RsWVhCdmJpNXFjMjl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVjJWaGNHOXVJSHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0dkaGJXVXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsSUQwZ1oyRnRaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpjbVZoZEdWQ2RXeHNaWFFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqY21WaGRHVlhaV0Z3YjI0b0tUdGNiaUFnSUNCOVhHNWNibHh1SUNBZ0lHTnlaV0YwWlVKMWJHeGxkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYldRZ1BTQjBhR2x6TG1kaGJXVXViV0ZyWlM1aWFYUnRZWEJFWVhSaEtERXlMQ0F4TWlrN1hHNGdJQ0FnSUNBZ0lHNWxkeUJEWVc1MllYTklaV3h3WlhJb2RHaHBjeTVpYldRc2QyVmhjRzl1U25OdmJpa3VaSEpoZDFSbGVIUjFjbVVvS1R0Y2JpQWdJQ0I5WEc1Y2JseHVJQ0FnSUdOeVpXRjBaVmRsWVhCdmJpZ3BlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuZGxZWEJ2YmlBOUlIUm9hWE11WjJGdFpTNWhaR1F1ZDJWaGNHOXVLRE13TENCMGFHbHpMbUp0WkNrN1hHNWNiaUFnSUNBZ0lDQWdMeThnSUZSb1pTQmlkV3hzWlhRZ2QybHNiQ0JpWlNCaGRYUnZiV0YwYVdOaGJHeDVJR3RwYkd4bFpDQjNhR1Z1SUdsMElHeGxZWFpsY3lCMGFHVWdkMjl5YkdRZ1ltOTFibVJ6WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkMlZoY0c5dUxtSjFiR3hsZEV0cGJHeFVlWEJsSUQwZ1VHaGhjMlZ5TGxkbFlYQnZiaTVMU1V4TVgxZFBVa3hFWDBKUFZVNUVVenRjYmx4dUlDQWdJQ0FnSUNBdkx5QWdWR2hsSUhOd1pXVmtJR0YwSUhkb2FXTm9JSFJvWlNCaWRXeHNaWFFnYVhNZ1ptbHlaV1JjYmlBZ0lDQWdJQ0FnZEdocGN5NTNaV0Z3YjI0dVluVnNiR1YwVTNCbFpXUWdQU0EwTURBN1hHNWNiaUFnSUNBZ0lDQWdMeThnSUZOd1pXVmtMWFZ3SUhSb1pTQnlZWFJsSUc5bUlHWnBjbVVzSUdGc2JHOTNhVzVuSUhSb1pXMGdkRzhnYzJodmIzUWdNU0JpZFd4c1pYUWdaWFpsY25rZ05qQnRjMXh1SUNBZ0lDQWdJQ0IwYUdsekxuZGxZWEJ2Ymk1bWFYSmxVbUYwWlNBOUlEWXdPMXh1WEc0Z0lDQWdJQ0FnSUM4dklDQkJaR1FnWVNCMllYSnBZVzVqWlNCMGJ5QjBhR1VnWW5Wc2JHVjBJSE53WldWa0lHSjVJQ3N0SUhSb2FYTWdkbUZzZFdWY2JpQWdJQ0FnSUNBZ2RHaHBjeTUzWldGd2IyNHVZblZzYkdWMFUzQmxaV1JXWVhKcFlXNWpaU0E5SURJd01EdGNiaUFnSUNCOVhHNWNibHh1SUNBZ0lIUnlZV05yVTNCeWFYUmxLSE53Y21sMFpTd2dlQ3dnZVN3Z2NtOTBZWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1M1pXRndiMjR1ZEhKaFkydFRjSEpwZEdVb2MzQnlhWFJsTENCNExDQjVMQ0J5YjNSaGRHbHZiaWs3WEc0Z0lDQWdmVnh1WEc1Y2JpQWdJQ0JtYVhKbEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuZGxZWEJ2Ymk1bWFYSmxLQ2s3WEc0Z0lDQWdmVnh1WEc1OUlsMTkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfV2VhcG9uSnMgPSByZXF1aXJlKCcuL1dlYXBvbi5qcycpO1xuXG52YXIgX1dlYXBvbkpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1dlYXBvbkpzKTtcblxudmFyIF9EaXJ0V2VhcG9uSnMgPSByZXF1aXJlKCcuL0RpcnRXZWFwb24uanMnKTtcblxudmFyIF9EaXJ0V2VhcG9uSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlydFdlYXBvbkpzKTtcblxudmFyIFdlYXBvbkZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdlYXBvbkZhY3RvcnkoZ2FtZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2VhcG9uRmFjdG9yeSk7XG5cbiAgICAgICAgdGhpcy53ZWFwb25fdHlwZSA9IFsnYmFzaWMnLCAnZGlydCddO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdlYXBvbkZhY3RvcnksIFt7XG4gICAgICAgIGtleTogJ2NyZWF0ZVdlYXBvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVXZWFwb24odHlwZSkge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJhc2ljXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgX1dlYXBvbkpzMlsnZGVmYXVsdCddKHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRpcnRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfRGlydFdlYXBvbkpzMlsnZGVmYXVsdCddKHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfV2VhcG9uSnMyWydkZWZhdWx0J10odGhpcy5nYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXZWFwb25GYWN0b3J5O1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gV2VhcG9uRmFjdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5d2NtVm1ZV0p6TDNkbFlYQnZibk12VjJWaGNHOXVSbUZqZEc5eWVTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3ZDBKQlFXMUNMR0ZCUVdFN096czdORUpCUTFRc2FVSkJRV2xDT3pzN08wbEJSVzVDTEdGQlFXRTdRVUZKYmtJc1lVRktUU3hoUVVGaExFTkJTV3hDTEVsQlFVa3NSVUZCUlRzNFFrRktSQ3hoUVVGaE96dGhRVVU1UWl4WFFVRlhMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVU1zVFVGQlRTeERRVUZET3p0QlFVY3hRaXhaUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0TFFVTndRanM3YVVKQlRtZENMR0ZCUVdFN08yVkJVMnhDTEhOQ1FVRkRMRWxCUVVrc1JVRkJSVHRCUVVObUxHOUNRVUZQTEVsQlFVazdRVUZEVUN4eFFrRkJTeXhQUVVGUE8wRkJRMVFzTWtKQlFVOHNNRUpCUVZjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlFVRXNRVUZEYUVNc2NVSkJRVXNzVFVGQlRUdEJRVU5TTERKQ1FVRlBMRGhDUVVGbExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVRkJMRUZCUTNCRE8wRkJRMGNzTWtKQlFVOHNNRUpCUVZjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlFVRXNZVUZEYmtNN1UwRkRTanM3TzFkQmJFSm5RaXhoUVVGaE96czdjVUpCUVdJc1lVRkJZU0lzSW1acGJHVWlPaUpFT2k5aGNYVmhMMmRsYjNkaGNpOXpjbU12Y0hKbFptRmljeTkzWldGd2IyNXpMMWRsWVhCdmJrWmhZM1J2Y25rdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdWMlZoY0c5dUlHWnliMjBnSnk0dlYyVmhjRzl1TG1wekp6dGNibWx0Y0c5eWRDQkVhWEowVjJWaGNHOXVJR1p5YjIwZ0p5NHZSR2x5ZEZkbFlYQnZiaTVxY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZkbFlYQnZia1poWTNSdmNua2dlMXh1WEc0Z0lDQWdkMlZoY0c5dVgzUjVjR1VnUFNCYkoySmhjMmxqSnl3blpHbHlkQ2RkTzF4dVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb1oyRnRaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVZ1BTQm5ZVzFsTzF4dUlDQWdJSDFjYmx4dVhHNGdJQ0FnWTNKbFlYUmxWMlZoY0c5dUtIUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ2MzZHBkR05vS0hSNWNHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0JjSW1KaGMybGpYQ0lnT2lCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1YyVmhjRzl1S0hSb2FYTXVaMkZ0WlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElGd2laR2x5ZEZ3aUlEb2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtVjNJRVJwY25SWFpXRndiMjRvZEdocGN5NW5ZVzFsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUWdPaUJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnVjJWaGNHOXVLSFJvYVhNdVoyRnRaU2s3WEc0Z0lDQWdJQ0FnSUgwZ1hHNGdJQ0FnZlZ4dVhHNTlJbDE5IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgQ29ubmVjdGVkSGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICBmdW5jdGlvbiBDb25uZWN0ZWRIYW5kbGVyKGdhbWUpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0ZWRIYW5kbGVyKTtcblxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgIH1cblxuICAgX2NyZWF0ZUNsYXNzKENvbm5lY3RlZEhhbmRsZXIsIFt7XG4gICAgICBrZXk6ICdoYW5kbGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZShkYXRhKSB7XG4gICAgICAgICB0aGlzLmdhbWUuZ2Vvd2FyLnNvY2tldFJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgIHRoaXMuZ2FtZS5nZW93YXIucGxheWVySWQgPSBkYXRhLmlkO1xuICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllcklkID0gJyArIHRoaXMuZ2FtZS5nZW93YXIucGxheWVySWQpO1xuICAgICAgfVxuICAgfV0pO1xuXG4gICByZXR1cm4gQ29ubmVjdGVkSGFuZGxlcjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbm5lY3RlZEhhbmRsZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXpiMk5yWlhRdlEyOXVibVZqZEdWa1NHRnVaR3hsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08wbEJRWEZDTEdkQ1FVRm5RanRCUVVWd1FpeFpRVVpKTEdkQ1FVRm5RaXhEUVVWdVFpeEpRVUZKTEVWQlFVTTdORUpCUmtZc1owSkJRV2RDT3p0QlFVYzFRaXhWUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVTnVRanM3WjBKQlNtTXNaMEpCUVdkQ096dGhRVTE2UWl4blFrRkJReXhKUVVGSkxFVkJRVU03UVVGRFZDeGhRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEzQkRMR0ZCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8wRkJRM0JETEdkQ1FVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFBRVU42UkRzN08xVkJWbU1zWjBKQlFXZENPenM3Y1VKQlFXaENMR2RDUVVGblFpSXNJbVpwYkdVaU9pSkVPaTloY1hWaEwyZGxiM2RoY2k5emNtTXZjMjlqYTJWMEwwTnZibTVsWTNSbFpFaGhibVJzWlhJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCRGIyNXVaV04wWldSSVlXNWtiR1Z5ZTF4dVhHNGdJQ0FnSUNCamIyNXpkSEoxWTNSdmNpaG5ZVzFsS1h0Y2JpQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTQTlJR2RoYldVN1hHNGdJQ0FnSUNCOUlDQmNibHh1SUNBZ0lDQWdhR0Z1Wkd4bEtHUmhkR0VwZTF4dUlDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExtZGxiM2RoY2k1emIyTnJaWFJTWldGa2VTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVaMlZ2ZDJGeUxuQnNZWGxsY2tsa0lEMGdaR0YwWVM1cFpEdGNiaUFnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0Nkd2JHRjVaWEpKWkNBOUlDY2dLeUIwYUdsekxtZGhiV1V1WjJWdmQyRnlMbkJzWVhsbGNrbGtLVHNnWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnWEc1OUlsMTkiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFBsYXllck1vdmVIYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIFBsYXllck1vdmVIYW5kbGVyKGdhbWUpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQbGF5ZXJNb3ZlSGFuZGxlcik7XG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhQbGF5ZXJNb3ZlSGFuZGxlciwgW3tcbiAgICAgICAgICAgIGtleTogXCJoYW5kbGVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGUoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWUuZ2Vvd2FyLnBlZXJQbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZ2Vvd2FyLnBlZXJQbGF5ZXJzID0ge307XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZS5nZW93YXIucGVlclBsYXllcnNbZGF0YS5pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5nZW93YXIucGVlclBsYXllcnNbZGF0YS5pZF0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZ2FtZS5nZW93YXIucGVlclBsYXllcnNbZGF0YS5pZF07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgYm1kID0gdGhpcy5nYW1lLm1ha2UuYml0bWFwRGF0YSgzNSwgMzApO1xuICAgICAgICAgICAgICAgICAgYm1kLmNhbnZhcyA9IGRhdGEuY2FudmFzO1xuICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKGRhdGEueCwgZGF0YS55LCBibWQpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdlb3dhci5wZWVyUGxheWVyc1tkYXRhLmlkXSA9IHNwcml0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIFBsYXllck1vdmVIYW5kbGVyO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQbGF5ZXJNb3ZlSGFuZGxlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl6YjJOclpYUXZVR3hoZVdWeVRXOTJaVWhoYm1Sc1pYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRKUVVGeFFpeHBRa0ZCYVVJN1FVRkZja0lzWlVGR1NTeHBRa0ZCYVVJc1EwRkZjRUlzU1VGQlNTeEZRVUZGTzJ0RFFVWklMR2xDUVVGcFFqczdRVUZITVVJc1owSkJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMDlCUTNSQ096dHRRa0ZLWXl4cFFrRkJhVUk3TzIxQ1FVMHhRaXhuUWtGQlF5eEpRVUZKTEVWQlFVVTdRVUZEVUN4elFrRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1JVRkJSVHRCUVVNM1FpdzBRa0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVWQlFVVXNRMEZCUXp0dFFrRkRka01zVFVGRFNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1FVRkRNVU1zTkVKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03UVVGRGFFUXNLMEpCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dHRRa0ZEYkVRN1FVRkRSQ3h6UWtGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVNMVF5eHhRa0ZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBGQlEzcENMSE5DUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzWkVMSE5DUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXp0aFFVTndSRHM3TzJGQmJFSmpMR2xDUVVGcFFqczdPM0ZDUVVGcVFpeHBRa0ZCYVVJaUxDSm1hV3hsSWpvaVJEb3ZZWEYxWVM5blpXOTNZWEl2YzNKakwzTnZZMnRsZEM5UWJHRjVaWEpOYjNabFNHRnVaR3hsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCc1lYbGxjazF2ZG1WSVlXNWtiR1Z5SUh0Y2JseHVJQ0FnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9aMkZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsSUQwZ1oyRnRaVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYUdGdVpHeGxLR1JoZEdFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1bllXMWxMbWRsYjNkaGNpNXdaV1Z5VUd4aGVXVnljeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExtZGxiM2RoY2k1d1pXVnlVR3hoZVdWeWN5QTlJSHQ5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0JwWmlBb2RHaHBjeTVuWVcxbExtZGxiM2RoY2k1d1pXVnlVR3hoZVdWeWMxdGtZWFJoTG1sa1hTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG1kbGIzZGhjaTV3WldWeVVHeGhlV1Z5YzF0a1lYUmhMbWxrWFM1a1pYTjBjbTk1S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVuWVcxbExtZGxiM2RoY2k1d1pXVnlVR3hoZVdWeWMxdGtZWFJoTG1sa1hUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCaWJXUWdQU0IwYUdsekxtZGhiV1V1YldGclpTNWlhWFJ0WVhCRVlYUmhLRE0xTENBek1DazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWJXUXVZMkZ1ZG1GeklEMGdaR0YwWVM1allXNTJZWE03WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYzNCeWFYUmxJRDBnZEdocGN5NW5ZVzFsTG1Ga1pDNXpjSEpwZEdVb1pHRjBZUzU0TENCa1lYUmhMbmtzSUdKdFpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdVoyVnZkMkZ5TG5CbFpYSlFiR0Y1WlhKelcyUmhkR0V1YVdSZElEMGdjM0J5YVhSbE8xeHVJQ0FnSUNBZ2ZWeHVYRzU5SWwxOSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9Db25uZWN0ZWRIYW5kbGVySnMgPSByZXF1aXJlKCcuL0Nvbm5lY3RlZEhhbmRsZXIuanMnKTtcblxudmFyIF9Db25uZWN0ZWRIYW5kbGVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29ubmVjdGVkSGFuZGxlckpzKTtcblxudmFyIF9QbGF5ZXJNb3ZlSGFuZGxlckpzID0gcmVxdWlyZSgnLi9QbGF5ZXJNb3ZlSGFuZGxlci5qcycpO1xuXG52YXIgX1BsYXllck1vdmVIYW5kbGVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGxheWVyTW92ZUhhbmRsZXJKcyk7XG5cbnZhciBTb2NrZXRIYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTb2NrZXRIYW5kbGVyKHNpbywgZ2FtZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SGFuZGxlcik7XG5cbiAgICAgICAgdGhpcy5zaW8gPSBzaW87XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5pbml0SGFuZGxlcnModGhpcy5nYW1lKTtcbiAgICAgICAgdGhpcy5zaW8ub24oJ3B1bGwnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdGhhdC51cGRhdGUoZGF0YSwgdGhhdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTb2NrZXRIYW5kbGVyLCBbe1xuICAgICAgICBrZXk6ICdwdXNoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2goZGF0YSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5nZW93YXIuc29ja2V0UmVhZHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpby5lbWl0KCdwdXNoJywgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoZGF0YSwgdGhhdCkge1xuICAgICAgICAgICAgaWYgKGRhdGEubmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbZGF0YS5uYW1lXS5oYW5kbGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2luaXRIYW5kbGVycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0SGFuZGxlcnMoZ2FtZSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQgPSBuZXcgX0Nvbm5lY3RlZEhhbmRsZXJKczJbJ2RlZmF1bHQnXShnYW1lKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMucGxheWVyID0gbmV3IF9QbGF5ZXJNb3ZlSGFuZGxlckpzMlsnZGVmYXVsdCddKGdhbWUpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNvY2tldEhhbmRsZXI7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTb2NrZXRIYW5kbGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl6YjJOclpYUXZVMjlqYTJWMFNHRnVaR3hsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdhME5CUVRaQ0xIVkNRVUYxUWpzN096dHRRMEZEZEVJc2QwSkJRWGRDT3pzN08wbEJSV3BETEdGQlFXRTdRVUZEYmtJc1lVRkVUU3hoUVVGaExFTkJRMnhDTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVN09FSkJSRTRzWVVGQllUczdRVUZGTVVJc1dVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdRVUZEWml4WlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU5xUWl4WlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGFFSXNXVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETjBJc1dVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RlFVRkZMRlZCUVZVc1NVRkJTU3hGUVVGRk8wRkJRMmhETEdkQ1FVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTXpRaXhEUVVGRExFTkJRVU03UzBGRFRqczdhVUpCVkdkQ0xHRkJRV0U3TzJWQlZ6RkNMR05CUVVNc1NVRkJTU3hGUVVGRk8wRkJRMUFzWjBKQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzBGQlF6bENMRzlDUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGREwwSTdVMEZEU2pzN08yVkJSVXNzWjBKQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSVHRCUVVObUxHZENRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVN1FVRkRXQ3h2UWtGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUTNwRE8xTkJRMG83T3p0bFFVZFhMSE5DUVVGRExFbEJRVWtzUlVGQlJUdEJRVU5tTEdkQ1FVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU51UWl4blFrRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVkQlFVY3NiME5CUVhGQ0xFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEzSkVMR2RDUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4eFEwRkJjMElzU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEZEVRN096dFhRVFZDWjBJc1lVRkJZVHM3TzNGQ1FVRmlMR0ZCUVdFaUxDSm1hV3hsSWpvaVJEb3ZZWEYxWVM5blpXOTNZWEl2YzNKakwzTnZZMnRsZEM5VGIyTnJaWFJJWVc1a2JHVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVOdmJtNWxZM1JsWkVoaGJtUnNaWElnWm5KdmJTQW5MaTlEYjI1dVpXTjBaV1JJWVc1a2JHVnlMbXB6Snp0Y2JtbHRjRzl5ZENCUWJHRjVaWEpOYjNabFNHRnVaR3hsY2lCbWNtOXRJQ2N1TDFCc1lYbGxjazF2ZG1WSVlXNWtiR1Z5TG1wekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1UyOWphMlYwU0dGdVpHeGxjaUI3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvYzJsdkxDQm5ZVzFsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJsdklEMGdjMmx2TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVZ1BTQm5ZVzFsTzF4dUlDQWdJQ0FnSUNCMllYSWdkR2hoZENBOUlIUm9hWE03WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzVwZEVoaGJtUnNaWEp6S0hSb2FYTXVaMkZ0WlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJsdkxtOXVLQ2R3ZFd4c0p5d2dablZ1WTNScGIyNGdLR1JoZEdFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb1lYUXVkWEJrWVhSbEtHUmhkR0VzSUhSb1lYUXBPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J3ZFhOb0tHUmhkR0VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVoyRnRaUzVuWlc5M1lYSXVjMjlqYTJWMFVtVmhaSGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMybHZMbVZ0YVhRb0ozQjFjMmduTENCa1lYUmhLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSFZ3WkdGMFpTaGtZWFJoTENCMGFHRjBLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGtZWFJoTG01aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YUdGdVpHeGxjbk5iWkdGMFlTNXVZVzFsWFM1b1lXNWtiR1VvWkdGMFlTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmx4dUlDQWdJR2x1YVhSSVlXNWtiR1Z5Y3lobllXMWxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhR0Z1Wkd4bGNuTWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWVc1a2JHVnljeTVqYjI1dVpXTjBaV1FnUFNCdVpYY2dRMjl1Ym1WamRHVmtTR0Z1Wkd4bGNpaG5ZVzFsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWVc1a2JHVnljeTV3YkdGNVpYSWdQU0J1WlhjZ1VHeGhlV1Z5VFc5MlpVaGhibVJzWlhJb1oyRnRaU2s3WEc0Z0lDQWdmVnh1ZlNKZGZRPT0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfc29ja2V0U29ja2V0SGFuZGxlckpzID0gcmVxdWlyZShcIi4uL3NvY2tldC9Tb2NrZXRIYW5kbGVyLmpzXCIpO1xuXG52YXIgX3NvY2tldFNvY2tldEhhbmRsZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zb2NrZXRTb2NrZXRIYW5kbGVySnMpO1xuXG52YXIgQm9vdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9vdCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvb3QpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCb290LCBbe1xuICAgICAgICBrZXk6ICdwcmVsb2FkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlcicsICdhc3NldHMvaW1hZ2VzL2xvYWRpbmdfYmFyLnBuZycpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjcmVhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmdlb3dhciA9IHt9OyAvL25hbWVzcGFjZVxuICAgICAgICAgICAgdGhpcy5nYW1lLmdlb3dhci5zb2NrZXRIYW5kbGVyID0gbmV3IF9zb2NrZXRTb2NrZXRIYW5kbGVySnMyWydkZWZhdWx0J10oaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpLCB0aGlzLmdhbWUpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgncHJlbG9hZCcpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJvb3Q7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBCb290O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl6ZEdGMFpYTXZRbTl2ZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdjVU5CUVRCQ0xEUkNRVUUwUWpzN096dEpRVVZxUXl4SlFVRkpPMkZCUVVvc1NVRkJTVHM0UWtGQlNpeEpRVUZKT3pzN2FVSkJRVW9zU1VGQlNUczdaVUZEWkN4dFFrRkJSenRCUVVOT0xHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFVkJRVVVzSzBKQlFTdENMRU5CUVVNc1EwRkJRenRUUVVOcVJUczdPMlZCUlVzc2EwSkJRVWM3UVVGRFRDeG5Ra0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzUkNMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4aFFVRmhMRWRCUVVjc2RVTkJRV3RDTEVWQlFVVXNRMEZCUXl4MVFrRkJkVUlzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVNelJpeG5Ra0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTm9ReXhuUWtGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFOQlEzQkRPenM3VjBGV1owSXNTVUZCU1RzN08zRkNRVUZLTEVsQlFVa2lMQ0ptYVd4bElqb2lSRG92WVhGMVlTOW5aVzkzWVhJdmMzSmpMM04wWVhSbGN5OUNiMjkwTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGTnZZMnRsZEVoaGJtUnNaWElnWm5KdmJTQmNJaTR1TDNOdlkydGxkQzlUYjJOclpYUklZVzVrYkdWeUxtcHpYQ0k3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRUp2YjNRZ2UxeHVJQ0FnSUhCeVpXeHZZV1FvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5aFpDNXBiV0ZuWlNnbmNISmxiRzloWkdWeUp5d2dKMkZ6YzJWMGN5OXBiV0ZuWlhNdmJHOWhaR2x1WjE5aVlYSXVjRzVuSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTNKbFlYUmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdVoyVnZkMkZ5SUQwZ2UzMDdJQzh2Ym1GdFpYTndZV05sWEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1blpXOTNZWEl1YzI5amEyVjBTR0Z1Wkd4bGNpQTlJRzVsZHlCVGIyTnJaWFJJWVc1a2JHVnlLR2x2S0Nkb2RIUndPaTh2Ykc5allXeG9iM04wT2pNd01EQW5LU3dnZEdocGN5NW5ZVzFsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExtbHVjSFYwTG0xaGVGQnZhVzUwWlhKeklEMGdNVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5ZVzFsTG5OMFlYUmxMbk4wWVhKMEtDZHdjbVZzYjJGa0p5azdYRzRnSUNBZ2ZWeHVmU0pkZlE9PSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX2NvbW1vblV0aWxzSnMgPSByZXF1aXJlKCcuLi9jb21tb24vVXRpbHMuanMnKTtcblxudmFyIF9jb21tb25VdGlsc0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1vblV0aWxzSnMpO1xuXG52YXIgX3ByZWZhYnNQbGF5ZXJzUGxheWVyRmFjdG9yeUpzID0gcmVxdWlyZSgnLi4vcHJlZmFicy9wbGF5ZXJzL1BsYXllckZhY3RvcnkuanMnKTtcblxudmFyIF9wcmVmYWJzUGxheWVyc1BsYXllckZhY3RvcnlKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmYWJzUGxheWVyc1BsYXllckZhY3RvcnlKcyk7XG5cbnZhciBHYW1lID0gKGZ1bmN0aW9uIChfUGhhc2VyJFN0YXRlKSB7XG4gICAgX2luaGVyaXRzKEdhbWUsIF9QaGFzZXIkU3RhdGUpO1xuXG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdhbWUpO1xuXG4gICAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKEdhbWUucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoR2FtZSwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgIC8vc3RhZ2VcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMyODI2MjYnO1xuICAgICAgICAgICAgLy9mYWN0b3JpZXNcbiAgICAgICAgICAgIHRoaXMucGxheWVyRmFjdG9yeSA9IG5ldyBfcHJlZmFic1BsYXllcnNQbGF5ZXJGYWN0b3J5SnMyWydkZWZhdWx0J10odGhpcy5nYW1lKTtcbiAgICAgICAgICAgIC8vcGxheWVyXG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyRmFjdG9yeS5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5wbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1cGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge31cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gR2FtZTtcbn0pKFBoYXNlci5TdGF0ZSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEdhbWU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXpkR0YwWlhNdlIyRnRaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPelpDUVVGclFpeHZRa0ZCYjBJN096czdOa05CUTFvc2NVTkJRWEZET3pzN08wbEJSVEZETEVsQlFVazdZMEZCU2l4SlFVRkpPenRoUVVGS0xFbEJRVWs3T0VKQlFVb3NTVUZCU1RzN2JVTkJRVW9zU1VGQlNUczdPMmxDUVVGS0xFbEJRVWs3TzJWQlJXWXNhMEpCUVVjN08wRkJSVXdzWjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM0pFTEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eGxRVUZsTEVkQlFVY3NVMEZCVXl4RFFVRkRPenRCUVVVMVF5eG5Ra0ZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXdyUTBGQmEwSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE96dEJRVVZzUkN4blFrRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8wRkJRMmhFTEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRM1pET3pzN1pVRkhTeXhyUWtGQlJ5eEZRVU5TT3pzN1YwRm1aMElzU1VGQlNUdEhRVUZUTEUxQlFVMHNRMEZCUXl4TFFVRkxPenR4UWtGQmVrSXNTVUZCU1NJc0ltWnBiR1VpT2lKRU9pOWhjWFZoTDJkbGIzZGhjaTl6Y21NdmMzUmhkR1Z6TDBkaGJXVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVlhScGJITWdabkp2YlNBbkxpNHZZMjl0Ylc5dUwxVjBhV3h6TG1wekp6dGNibWx0Y0c5eWRDQlFiR0Y1WlhKR1lXTjBiM0o1SUdaeWIyMGdKeTR1TDNCeVpXWmhZbk12Y0d4aGVXVnljeTlRYkdGNVpYSkdZV04wYjNKNUxtcHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdSMkZ0WlNCbGVIUmxibVJ6SUZCb1lYTmxjaTVUZEdGMFpTQjdYRzVjYmlBZ0lDQmpjbVZoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJQzh2YzNSaFoyVmNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbkJvZVhOcFkzTXVjM1JoY25SVGVYTjBaVzBvVUdoaGMyVnlMbEJvZVhOcFkzTXVRVkpEUVVSRktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbk4wWVdkbExtSmhZMnRuY205MWJtUkRiMnh2Y2lBOUlDY2pNamd5TmpJMkp6dGNiaUFnSUNBZ0lDQWdMeTltWVdOMGIzSnBaWE5jYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1WlhKR1lXTjBiM0o1SUQwZ2JtVjNJRkJzWVhsbGNrWmhZM1J2Y25rb2RHaHBjeTVuWVcxbEtUdGNiaUFnSUNBZ0lDQWdMeTl3YkdGNVpYSmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVaWElnUFNCMGFHbHpMbkJzWVhsbGNrWmhZM1J2Y25rdVkzSmxZWFJsVUd4aGVXVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1aFpHUXVaWGhwYzNScGJtY29kR2hwY3k1d2JHRjVaWElwTzF4dUlDQWdJSDFjYmx4dVhHNGdJQ0FnZFhCa1lYUmxLQ2tnZTF4dUlDQWdJSDFjYmx4dWZTSmRmUT09IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFByZWxvYWQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByZWxvYWQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmVsb2FkKTtcblxuICAgICAgICB0aGlzLmFzc2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQcmVsb2FkLCBbe1xuICAgICAgICBrZXk6ICdwcmVsb2FkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZWxvYWQoKSB7fVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MjYyNic7XG4gICAgICAgICAgICB0aGlzLmFzc2V0ID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53aWR0aCAvIDIsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLCAncHJlbG9hZGVyJyk7XG4gICAgICAgICAgICB0aGlzLmFzc2V0LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgICAgICB0aGlzLmFzc2V0LnNjYWxlLnNldFRvKDAuMywgMC4zKTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5vbkxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmFzc2V0KTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwbGF5JywgJ2Fzc2V0cy9pbWFnZXMvcGxheS5wbmcnKTtcblxuICAgICAgICAgICAgLy9zdGFydCBsb2FkXG4gICAgICAgICAgICB0aGlzLmxvYWQuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3N0YXJ0U2NyZWVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uTG9hZENvbXBsZXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTG9hZENvbXBsZXRlKCkge1xuICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUHJlbG9hZDtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFByZWxvYWQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXpkR0YwWlhNdlVISmxiRzloWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08wbEJRWEZDTEU5QlFVODdRVUZGWWl4aFFVWk5MRTlCUVU4c1IwRkZWanM0UWtGR1J5eFBRVUZQT3p0QlFVZHdRaXhaUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnNRaXhaUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0TFFVTjBRanM3YVVKQlRHZENMRTlCUVU4N08yVkJUMnBDTEcxQ1FVRkhMRVZCUTFRN096dGxRVVZMTEd0Q1FVRkhPMEZCUTB3c1owSkJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR1ZCUVdVc1IwRkJSeXhUUVVGVExFTkJRVU03UVVGRE5VTXNaMEpCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRCUVVOeVJpeG5Ra0ZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOc1F5eG5Ra0ZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRmFrTXNaMEpCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlF6VkVMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXpzN1FVRkZka01zWjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlF5eDNRa0ZCZDBJc1EwRkJReXhEUVVGRE96czdRVUZIYWtRc1owSkJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1UwRkRja0k3T3p0bFFVVkxMR3RDUVVGSE96dEJRVVZNTEdkQ1FVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3UVVGRFdpeHZRa0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMkZCUTNoRE8xTkJSVW83T3p0bFFVVmhMREJDUVVGSE8wRkJRMklzWjBKQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8xTkJRM0pDT3pzN1YwRnVRMmRDTEU5QlFVODdPenR4UWtGQlVDeFBRVUZQSWl3aVptbHNaU0k2SWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5emRHRjBaWE12VUhKbGJHOWhaQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ5Wld4dllXUWdlMXh1WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVhOelpYUWdQU0J1ZFd4c08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5KbFlXUjVJRDBnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NISmxiRzloWkNncElIdGNiaUFnSUNCOVhHNWNiaUFnSUNCamNtVmhkR1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXpkR0ZuWlM1aVlXTnJaM0p2ZFc1a1EyOXNiM0lnUFNBbkl6STRNall5TmljN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVhOelpYUWdQU0IwYUdsekxtRmtaQzV6Y0hKcGRHVW9kR2hwY3k1bllXMWxMbmRwWkhSb0lDOGdNaXdnZEdocGN5NW5ZVzFsTG1obGFXZG9kQ0F2SURJc0lDZHdjbVZzYjJGa1pYSW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhjM05sZEM1aGJtTm9iM0l1YzJWMFZHOG9NQzQxTENBd0xqVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtRnpjMlYwTG5OallXeGxMbk5sZEZSdktEQXVNeXdnTUM0ektUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YjI1TWIyRmtRMjl0Y0d4bGRHVXVZV1JrVDI1alpTaDBhR2x6TG05dVRHOWhaRU52YlhCc1pYUmxMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbk5sZEZCeVpXeHZZV1JUY0hKcGRHVW9kR2hwY3k1aGMzTmxkQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtbHRZV2RsS0Nkd2JHRjVKeXduWVhOelpYUnpMMmx0WVdkbGN5OXdiR0Y1TG5CdVp5Y3BPMXh1WEc0Z0lDQWdJQ0FnSUM4dmMzUmhjblFnYkc5aFpGeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVjM1JoY25Rb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMWNHUmhkR1VvS1NCN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjbVZoWkhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1emRHRjBaUzV6ZEdGeWRDZ25jM1JoY25SVFkzSmxaVzRuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IyNU1iMkZrUTI5dGNHeGxkR1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y21WaFpIa2dQU0IwY25WbE8xeHVJQ0FnSUgxY2JuMGlYWDA9IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFN0YXJ0U2NyZWVuID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGFydFNjcmVlbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXJ0U2NyZWVuKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RhcnRTY3JlZW4sIFt7XG4gICAgICAgIGtleTogJ2NyZWF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMyODI2MjYnO1xuICAgICAgICAgICAgdGhpcy5wbGF5ID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53aWR0aCAvIDIsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLCAncGxheScpO1xuICAgICAgICAgICAgdGhpcy5wbGF5LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgICAgICB0aGlzLnBsYXkuc2NhbGUuc2V0VG8oMC4zLCAwLjMpO1xuICAgICAgICAgICAgdGhpcy5wbGF5LmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBsYXkuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLnN0YXJ0UGxheSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBsYXkuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCh0aGlzLm1vdXNlT3ZlciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBsYXkuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKHRoaXMubW91c2VPdXQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdGFydFBsYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRQbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdtb3VzZU92ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbW91c2VPdmVyKCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21vdXNlT3V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1vdXNlT3V0KCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3RhcnRTY3JlZW47XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTdGFydFNjcmVlbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5emRHRjBaWE12VTNSaGNuUlRZM0psWlc0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dEpRVUZ4UWl4WFFVRlhPMkZCUVZnc1YwRkJWenM0UWtGQldDeFhRVUZYT3pzN2FVSkJRVmdzVjBGQlZ6czdaVUZEZEVJc2EwSkJRVWM3UVVGRFRDeG5Ra0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeEhRVUZITEZOQlFWTXNRMEZCUXp0QlFVTTFReXhuUWtGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBGQlF5OUZMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEycERMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEyaERMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRPVUlzWjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU4yUkN4blFrRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNaRUxHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRGVFUTdPenRsUVVWUkxIRkNRVUZITzBGQlExSXNaMEpCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUXpWQ096czdaVUZGVVN4eFFrRkJSenRCUVVOU0xHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTTNRenM3TzJWQlJVOHNiMEpCUVVjN1FVRkRVQ3huUWtGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVMEZETjBNN096dFhRWFJDWjBJc1YwRkJWenM3TzNGQ1FVRllMRmRCUVZjaUxDSm1hV3hsSWpvaVJEb3ZZWEYxWVM5blpXOTNZWEl2YzNKakwzTjBZWFJsY3k5VGRHRnlkRk5qY21WbGJpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGTjBZWEowVTJOeVpXVnVJSHRjYmlBZ0lDQmpjbVZoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV6ZEdGblpTNWlZV05yWjNKdmRXNWtRMjlzYjNJZ1BTQW5Jekk0TWpZeU5pYzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlU0E5SUhSb2FYTXVZV1JrTG5Od2NtbDBaU2gwYUdsekxtZGhiV1V1ZDJsa2RHZ2dMeUF5TENCMGFHbHpMbWRoYldVdWFHVnBaMmgwSUM4Z01pd2dKM0JzWVhrbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVMbUZ1WTJodmNpNXpaWFJVYnlnd0xqVXNJREF1TlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVTNXpZMkZzWlM1elpYUlVieWd3TGpNc0lEQXVNeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVM1cGJuQjFkRVZ1WVdKc1pXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYa3VaWFpsYm5SekxtOXVTVzV3ZFhSRWIzZHVMbUZrWkNoMGFHbHpMbk4wWVhKMFVHeGhlU3dnZEdocGN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlUzVsZG1WdWRITXViMjVKYm5CMWRFOTJaWEl1WVdSa0tIUm9hWE11Ylc5MWMyVlBkbVZ5TENCMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1TG1WMlpXNTBjeTV2YmtsdWNIVjBUM1YwTG1Ga1pDaDBhR2x6TG0xdmRYTmxUM1YwTENCMGFHbHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZEZCc1lYa29LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdWMzUmhjblFvSjJkaGJXVW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnRiM1Z6WlU5MlpYSW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1allXNTJZWE11YzNSNWJHVXVZM1Z5YzI5eUlEMGdKM0J2YVc1MFpYSW5PMXh1SUNBZ0lIMWNibHh1SUNBZ0lHMXZkWE5sVDNWMEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1WTJGdWRtRnpMbk4wZVd4bExtTjFjbk52Y2lBOUlDZGtaV1poZFd4MEp6dGNiaUFnSUNCOVhHNWNibjBnSWwxOSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImhlYWRcIjoge1xuICAgICAgICBcInN0eWxlXCI6IFwic3Ryb2tlXCIsXG4gICAgICAgIFwiY3R4UHJvcFwiIDoge1xuICAgICAgICAgICAgXCJsaW5lV2l0aFwiIDogXCIyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIiR7Y2FudmFzLmhlaWdodH1cIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIke2NhbnZhcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIiR7Y2FudmFzLndpZHRofVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiYm9keVwiOiB7XG4gICAgICAgIFwic3R5bGVcIjogXCJmaWxsXCIsXG4gICAgICAgIFwiZHJhd1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcIm1vdmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMuaGVpZ2h0fVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiMFwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodH1cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImhlYWRcIjoge1xuICAgICAgICBcInN0eWxlXCI6IFwic3Ryb2tlXCIsXG4gICAgICAgIFwiY3R4UHJvcFwiIDoge1xuICAgICAgICAgICAgXCJsaW5lV2l0aFwiIDogXCIyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIiR7Y2FudmFzLmhlaWdodH1cIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIke2NhbnZhcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIiR7Y2FudmFzLndpZHRofVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiYm9keVwiOiB7XG4gICAgICAgIFwic3R5bGVcIjogXCJmaWxsXCIsXG4gICAgICAgIFwiZHJhd1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImFyY1wiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiMTVcIixcbiAgICAgICAgICAgICAgICBcInJhZGl1c1wiIDogXCIxNFwiLFxuICAgICAgICAgICAgICAgIFwiYXJjXCIgOiBcIiR7MiAqIE1hdGguUEl9XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiaGVhZFwiOiB7XG4gICAgICAgIFwic3R5bGVcIjogXCJzdHJva2VcIixcbiAgICAgICAgXCJjdHhQcm9wXCIgOiB7XG4gICAgICAgICAgICBcImxpbmVXaXRoXCIgOiBcIjJcIlxuICAgICAgICB9LFxuICAgICAgICBcImRyYXdcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMuaGVpZ2h0fVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMud2lkdGh9XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiJHtjYW52YXMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCJib2R5XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiBcImZpbGxcIixcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIke2NhbnZhcy5oZWlnaHR9XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMuaGVpZ2h0fVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodH1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIke2NhbnZhcy5oZWlnaHR9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJib2R5XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiBcImZpbGxcIixcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIxMlwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIjZcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIxMlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiYm9keVwiOiB7XG4gICAgICAgIFwic3R5bGVcIjogXCJmaWxsXCIsXG4gICAgICAgIFwiZHJhd1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImFyY1wiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjZcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCI2XCIsXG4gICAgICAgICAgICAgICAgXCJyYWRpdXNcIiA6IFwiNlwiLFxuICAgICAgICAgICAgICAgIFwiYXJjXCIgOiBcIiR7MiAqIE1hdGguUEl9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbn0iXX0=
