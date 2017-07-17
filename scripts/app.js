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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3BsYXllcnMvUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQXlCLDhCQUE4Qjs7Ozt5Q0FDaEMsb0NBQW9DOzs7O0lBRXRDLE1BQU07Y0FBTixNQUFNOztBQUVaLGFBRk0sTUFBTSxDQUVYLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTs4QkFGNUMsTUFBTTs7QUFHbkIsbUNBSGEsTUFBTSw2Q0FHYixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUU7QUFDdkQsWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztBQUVuQixZQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRVosWUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDakIsWUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUNqQixZQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDNUIsWUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELFlBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLFlBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFdkIsWUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsWUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3ZCOztpQkFsQmdCLE1BQU07O2VBcUJuQixnQkFBRztBQUNILGtEQUFpQixJQUFJLENBQUMsTUFBTSx5Q0FBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFEOzs7ZUFFSyxrQkFBRztBQUNMLGdCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7O0FBRTlCLGdCQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN2RCxvQkFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDcEMsTUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM3RCxvQkFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO2FBQ25DO0FBQ0QsZ0JBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3JELG9CQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuRixNQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzVELG9CQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuRjs7QUFFRCxnQkFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUN4QixvQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QjtTQUNKOzs7ZUFFVyx3QkFBRztBQUNYLGdCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUV0RCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRTNELGdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5RTs7O1dBdERnQixNQUFNO0dBQVMsTUFBTSxDQUFDLE1BQU07O3FCQUE1QixNQUFNIiwiZmlsZSI6IkQ6L2FxdWEvZ2Vvd2FyL3NyYy9wcmVmYWJzL3BsYXllcnMvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhc0hlbHBlciBmcm9tICcuLi8uLi9jb21tb24vQ2FudmFzSGVscGVyLmpzJztcbmltcG9ydCBwbGF5ZXJKc29uIGZyb20gJy4uLy4uL3RleHR1cmVzL3BsYXllcnMvUGxheWVyLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCB3ZWFwb25GYWN0b3J5KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGdhbWUubWFrZS5iaXRtYXBEYXRhKHdpZHRoLCBoZWlnaHQpKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmtleTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kcmF3KCk7XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IDMwMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IC05MDtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUodGhpcywgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICAgICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIHRoaXMuYm9keS5kcmFnLnNldCg2MCk7XG5cbiAgICAgICAgdGhpcy53ZWFwb25GYWN0b3J5ID0gd2VhcG9uRmFjdG9yeTtcbiAgICAgICAgdGhpcy5jcmVhdGVXZWFwb24oKTtcbiAgICB9XG5cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIG5ldyBDYW52YXNIZWxwZXIodGhpcy5jYW52YXMscGxheWVySnNvbikuZHJhd1RleHR1cmUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICB0aGlzLmJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMDtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuTEVGVCkpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAtMjAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlJJR0hUKSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDIwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuVVApKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUudmVsb2NpdHlGcm9tQW5nbGUodGhpcy5hbmdsZSwgMzAwLCB0aGlzLmJvZHkudmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLkRPV04pKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUudmVsb2NpdHlGcm9tQW5nbGUodGhpcy5hbmdsZSwgMzAwLCB0aGlzLmJvZHkudmVsb2NpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyZUJ1dHRvbi5pc0Rvd24pIHtcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLmZpcmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVdlYXBvbigpIHtcbiAgICAgICAgdGhpcy53ZWFwb24gPSB0aGlzLndlYXBvbkZhY3RvcnkuY3JlYXRlV2VhcG9uKCdkaXJ0Jyk7XG5cbiAgICAgICAgdGhpcy53ZWFwb24udHJhY2tTcHJpdGUodGhpcywgdGhpcy53aWR0aCAvIDIgKyA1LCAwLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmZpcmVCdXR0b24gPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlDb2RlLlNQQUNFQkFSKTtcbiAgICB9XG5cbn0iXX0=
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
'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PlayerMoveHandler = (function () {
   function PlayerMoveHandler(game) {
      _classCallCheck(this, PlayerMoveHandler);

      this.game = game;
   }

   _createClass(PlayerMoveHandler, [{
      key: 'handle',
      value: function handle(data) {
         var playerId = data.id;
         var x = data.x;
         var y = data.y;
         console.log('playerId = ' + playerId + ' move x = ' + x + ' y = ' + y);
      }
   }]);

   return PlayerMoveHandler;
})();

exports['default'] = PlayerMoveHandler;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zb2NrZXQvUGxheWVyTW92ZUhhbmRsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQixpQkFBaUI7QUFFckIsWUFGSSxpQkFBaUIsQ0FFcEIsSUFBSSxFQUFDOzRCQUZGLGlCQUFpQjs7QUFHN0IsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkI7O2dCQUpjLGlCQUFpQjs7YUFNMUIsZ0JBQUMsSUFBSSxFQUFDO0FBQ1QsYUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN2QixhQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2YsYUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNmLGdCQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxRQUFRLEdBQUcsWUFBWSxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7T0FDekU7OztVQVhjLGlCQUFpQjs7O3FCQUFqQixpQkFBaUIiLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3NvY2tldC9QbGF5ZXJNb3ZlSGFuZGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllck1vdmVIYW5kbGVye1xuXG4gICAgICBjb25zdHJ1Y3RvcihnYW1lKXtcbiAgICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICB9ICBcblxuICAgICAgaGFuZGxlKGRhdGEpe1xuICAgICAgICAgdmFyIHBsYXllcklkID0gZGF0YS5pZDtcbiAgICAgICAgIHZhciB4ID0gZGF0YS54O1xuICAgICAgICAgdmFyIHkgPSBkYXRhLnk7XG4gICAgICAgICBjb25zb2xlLmxvZygncGxheWVySWQgPSAnICsgcGxheWVySWQgKyAnIG1vdmUgeCA9ICcgKyB4ICsgJyB5ID0gJyArIHkpOyBcbiAgICAgIH1cbiAgICAgICBcbn0iXX0=
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
            this.handlers.move = new _PlayerMoveHandlerJs2['default'](game);
        }
    }]);

    return SocketHandler;
})();

exports['default'] = SocketHandler;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zb2NrZXQvU29ja2V0SGFuZGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7a0NBQTZCLHVCQUF1Qjs7OzttQ0FDdEIsd0JBQXdCOzs7O0lBRWpDLGFBQWE7QUFDbkIsYUFETSxhQUFhLENBQ2xCLEdBQUcsRUFBRSxJQUFJLEVBQUU7OEJBRE4sYUFBYTs7QUFFMUIsWUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsWUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsWUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQ2hDLGdCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzQixDQUFDLENBQUM7S0FDTjs7aUJBVGdCLGFBQWE7O2VBVzFCLGNBQUMsSUFBSSxFQUFFO0FBQ1AsZ0JBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQzlCLG9CQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDL0I7U0FDSjs7O2VBRUssZ0JBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNmLGdCQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDWCxvQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pDO1NBQ0o7OztlQUdXLHNCQUFDLElBQUksRUFBRTtBQUNmLGdCQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsb0NBQXFCLElBQUksQ0FBQyxDQUFDO0FBQ3JELGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxxQ0FBc0IsSUFBSSxDQUFDLENBQUM7U0FDcEQ7OztXQTVCZ0IsYUFBYTs7O3FCQUFiLGFBQWEiLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3NvY2tldC9Tb2NrZXRIYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbm5lY3RlZEhhbmRsZXIgZnJvbSAnLi9Db25uZWN0ZWRIYW5kbGVyLmpzJztcbmltcG9ydCBQbGF5ZXJNb3ZlSGFuZGxlciBmcm9tICcuL1BsYXllck1vdmVIYW5kbGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ja2V0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3Ioc2lvLCBnYW1lKSB7XG4gICAgICAgIHRoaXMuc2lvID0gc2lvO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5pdEhhbmRsZXJzKHRoaXMuZ2FtZSk7XG4gICAgICAgIHRoaXMuc2lvLm9uKCdwdWxsJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHRoYXQudXBkYXRlKGRhdGEsIHRoYXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nZW93YXIuc29ja2V0UmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMuc2lvLmVtaXQoJ3B1c2gnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShkYXRhLCB0aGF0KSB7XG4gICAgICAgIGlmIChkYXRhLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbZGF0YS5uYW1lXS5oYW5kbGUoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGluaXRIYW5kbGVycyhnYW1lKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQgPSBuZXcgQ29ubmVjdGVkSGFuZGxlcihnYW1lKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5tb3ZlID0gbmV3IFBsYXllck1vdmVIYW5kbGVyKGdhbWUpO1xuICAgIH1cbn0iXX0=
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
        value: function update() {
            this.game.geowar.socketHandler.push({ name: "move", id: this.game.geowar.playerId, x: this.player.x, y: this.player.y });
        }
    }]);

    return Game;
})(Phaser.State);

exports['default'] = Game;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2FxdWEvZ2Vvd2FyL3NyYy9zdGF0ZXMvR2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzZCQUFrQixvQkFBb0I7Ozs7NkNBQ1oscUNBQXFDOzs7O0lBRTFDLElBQUk7Y0FBSixJQUFJOzthQUFKLElBQUk7OEJBQUosSUFBSTs7bUNBQUosSUFBSTs7O2lCQUFKLElBQUk7O2VBRWYsa0JBQUc7O0FBRUwsZ0JBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JELGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDOztBQUU1QyxnQkFBSSxDQUFDLGFBQWEsR0FBRywrQ0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsRCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ2hELGdCQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDOzs7ZUFHSyxrQkFBRztBQUNMLGdCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRyxFQUFFLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9IOzs7V0FoQmdCLElBQUk7R0FBUyxNQUFNLENBQUMsS0FBSzs7cUJBQXpCLElBQUkiLCJmaWxlIjoiRDovYXF1YS9nZW93YXIvc3JjL3N0YXRlcy9HYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gJy4uL2NvbW1vbi9VdGlscy5qcyc7XG5pbXBvcnQgUGxheWVyRmFjdG9yeSBmcm9tICcuLi9wcmVmYWJzL3BsYXllcnMvUGxheWVyRmFjdG9yeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICAvL3N0YWdlXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MjYyNic7XG4gICAgICAgIC8vZmFjdG9yaWVzXG4gICAgICAgIHRoaXMucGxheWVyRmFjdG9yeSA9IG5ldyBQbGF5ZXJGYWN0b3J5KHRoaXMuZ2FtZSk7XG4gICAgICAgIC8vcGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJGYWN0b3J5LmNyZWF0ZVBsYXllcigpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMucGxheWVyKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmdlb3dhci5zb2NrZXRIYW5kbGVyLnB1c2goe25hbWU6IFwibW92ZVwiICwgaWQgOiB0aGlzLmdhbWUuZ2Vvd2FyLnBsYXllcklkLCB4IDogdGhpcy5wbGF5ZXIueCwgeSA6IHRoaXMucGxheWVyLnkgfSk7XG4gICAgfVxuXG59Il19
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvY29tbW9uL0NhbnZhc0hlbHBlci5qcyIsInNyYy9jb21tb24vVXRpbHMuanMiLCJzcmMvcHJlZmFicy9wbGF5ZXJzL0NpcmNsZVBsYXllci5qcyIsInNyYy9wcmVmYWJzL3BsYXllcnMvUGxheWVyLmpzIiwic3JjL3ByZWZhYnMvcGxheWVycy9QbGF5ZXJGYWN0b3J5LmpzIiwic3JjL3ByZWZhYnMvcGxheWVycy9TcXVhcmVQbGF5ZXIuanMiLCJzcmMvcHJlZmFicy93ZWFwb25zL0RpcnRXZWFwb24uanMiLCJzcmMvcHJlZmFicy93ZWFwb25zL1dlYXBvbi5qcyIsInNyYy9wcmVmYWJzL3dlYXBvbnMvV2VhcG9uRmFjdG9yeS5qcyIsInNyYy9zb2NrZXQvQ29ubmVjdGVkSGFuZGxlci5qcyIsInNyYy9zb2NrZXQvUGxheWVyTW92ZUhhbmRsZXIuanMiLCJzcmMvc29ja2V0L1NvY2tldEhhbmRsZXIuanMiLCJzcmMvc3RhdGVzL0Jvb3QuanMiLCJzcmMvc3RhdGVzL0dhbWUuanMiLCJzcmMvc3RhdGVzL1ByZWxvYWQuanMiLCJzcmMvc3RhdGVzL1N0YXJ0U2NyZWVuLmpzIiwic3JjL3RleHR1cmVzL3BsYXllcnMvUGxheWVyLmpzb24iLCJzcmMvdGV4dHVyZXMvcGxheWVycy9jaXJjbGVwbGF5ZXIuanNvbiIsInNyYy90ZXh0dXJlcy9wbGF5ZXJzL3NxdWFyZXBsYXllci5qc29uIiwic3JjL3RleHR1cmVzL3dlYXBvbnMvZGlydHdlYXBvbi5qc29uIiwic3JjL3RleHR1cmVzL3dlYXBvbnMvd2VhcG9uLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfc3RhdGVzQm9vdEpzID0gcmVxdWlyZShcIi4vc3RhdGVzL0Jvb3QuanNcIik7XG5cbnZhciBfc3RhdGVzQm9vdEpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlc0Jvb3RKcyk7XG5cbnZhciBfc3RhdGVzUHJlbG9hZEpzID0gcmVxdWlyZShcIi4vc3RhdGVzL1ByZWxvYWQuanNcIik7XG5cbnZhciBfc3RhdGVzUHJlbG9hZEpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlc1ByZWxvYWRKcyk7XG5cbnZhciBfc3RhdGVzU3RhcnRTY3JlZW5KcyA9IHJlcXVpcmUoXCIuL3N0YXRlcy9TdGFydFNjcmVlbi5qc1wiKTtcblxudmFyIF9zdGF0ZXNTdGFydFNjcmVlbkpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlc1N0YXJ0U2NyZWVuSnMpO1xuXG52YXIgX3N0YXRlc0dhbWVKcyA9IHJlcXVpcmUoXCIuL3N0YXRlcy9HYW1lLmpzXCIpO1xuXG52YXIgX3N0YXRlc0dhbWVKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZXNHYW1lSnMpO1xuXG52YXIgZ2FtZTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIFBoYXNlci5BVVRPLCAnZ2FtZScpO1xuICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXRlLmFkZCgnYm9vdCcsIF9zdGF0ZXNCb290SnMyW1wiZGVmYXVsdFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgIGdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkJywgX3N0YXRlc1ByZWxvYWRKczJbXCJkZWZhdWx0XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGF0ZS5hZGQoJ3N0YXJ0U2NyZWVuJywgX3N0YXRlc1N0YXJ0U2NyZWVuSnMyW1wiZGVmYXVsdFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgIGdhbWUuc3RhdGUuYWRkKCdnYW1lJywgX3N0YXRlc0dhbWVKczJbXCJkZWZhdWx0XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OWhjSEF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czBRa0ZGYVVJc2EwSkJRV3RDT3pzN095dENRVU5tTEhGQ1FVRnhRanM3T3p0dFEwRkRha0lzZVVKQlFYbENPenM3T3pSQ1FVTm9ReXhyUWtGQmEwSTdPenM3UVVGTWJrTXNTVUZCU1N4SlFVRkpMRU5CUVVNN08wRkJUMVFzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4WlFVRlpPMEZCUXpGQ0xESkNRVUZKTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVsQlFVa3NVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhYUVVGWExFbEJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUTNSR0xFMUJRVTBzUTBGQlF5eFhRVUZYTEVsQlFVa3NVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhaUVVGWkxFbEJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUTNwR0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkROVU1zTWtKQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzTkVKQlFVMHNRMEZCUXp0QlFVTTFRaXd5UWtGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXdyUWtGQlV5eERRVUZETzBGQlEyeERMREpDUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4aFFVRmhMRzFEUVVGaExFTkJRVU03UVVGRE1VTXNNa0pCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNORUpCUVUwc1EwRkJRenRCUVVNMVFpd3lRa0ZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdRMEZETVVJc1EwRkJReUlzSW1acGJHVWlPaUpFT2k5aGNYVmhMMmRsYjNkaGNpOXpjbU12WVhCd0xtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpZG1GeUlHZGhiV1U3WEc1Y2JtbHRjRzl5ZENCQ2IyOTBJR1p5YjIwZ1hDSXVMM04wWVhSbGN5OUNiMjkwTG1welhDSTdYRzVwYlhCdmNuUWdVSEpsYkc5aFpDQm1jbTl0SUZ3aUxpOXpkR0YwWlhNdlVISmxiRzloWkM1cWMxd2lPMXh1YVcxd2IzSjBJRk4wWVhKMFUyTnlaV1Z1SUdaeWIyMGdYQ0l1TDNOMFlYUmxjeTlUZEdGeWRGTmpjbVZsYmk1cWMxd2lPMXh1YVcxd2IzSjBJRWRoYldVZ1puSnZiU0JjSWk0dmMzUmhkR1Z6TDBkaGJXVXVhbk5jSWp0Y2JseHVkMmx1Wkc5M0xtOXViRzloWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ1oyRnRaU0E5SUc1bGR5QlFhR0Z6WlhJdVIyRnRaU2gzYVc1a2IzY3VhVzV1WlhKWGFXUjBhQ0I4ZkNCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1WTJ4cFpXNTBWMmxrZEdnZ2ZId2daRzlqZFcxbGJuUXVZbTlrZVM1amJHbGxiblJYYVdSMGFDd2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkMmx1Wkc5M0xtbHVibVZ5U0dWcFoyaDBJSHg4SUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzVqYkdsbGJuUklaV2xuYUhRZ2ZId2daRzlqZFcxbGJuUXVZbTlrZVM1amJHbGxiblJJWldsbmFIUXNJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRkJvWVhObGNpNUJWVlJQTENBbloyRnRaU2NwTzF4dUlDQm5ZVzFsTG5OMFlYUmxMbUZrWkNnblltOXZkQ2NzUW05dmRDazdYRzRnSUdkaGJXVXVjM1JoZEdVdVlXUmtLQ2R3Y21Wc2IyRmtKeXhRY21Wc2IyRmtLVHRjYmlBZ1oyRnRaUzV6ZEdGMFpTNWhaR1FvSjNOMFlYSjBVMk55WldWdUp5eFRkR0Z5ZEZOamNtVmxiaWs3WEc0Z0lHZGhiV1V1YzNSaGRHVXVZV1JrS0NkbllXMWxKeXhIWVcxbEtUdGNiaUFnWjJGdFpTNXpkR0YwWlM1emRHRnlkQ2duWW05dmRDY3BPMXh1ZlR0Y2JpSmRmUT09IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX1V0aWxzSnMgPSByZXF1aXJlKCcuL1V0aWxzLmpzJyk7XG5cbnZhciBfVXRpbHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9VdGlsc0pzKTtcblxudmFyIENhbnZhc0hlbHBlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FudmFzSGVscGVyKGNhbnZhcywganNvbiwgY29sb3JTZXQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbnZhc0hlbHBlcik7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGpzb247XG4gICAgICAgIHRoaXMuY29sb3JTZXQgPSBjb2xvclNldDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FudmFzSGVscGVyLCBbe1xuICAgICAgICBrZXk6ICdkcmF3VGV4dHVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3VGV4dHVyZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDdHhQcm9wKHRoaXMudGV4dHVyZVtrZXldLmN0eFByb3ApO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy50ZXh0dXJlW2tleV0uZHJhdykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHRoaXMudGV4dHVyZVtrZXldLmRyYXdbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy5wYXJzZUV4cHJlc3MocGFydC54KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSB0aGlzLnBhcnNlRXhwcmVzcyhwYXJ0LnkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5kcmF3VHlwZSA9PSAnbW92ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0LmRyYXdUeXBlID09ICdsaW5lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQuZHJhd1R5cGUgPT0gJ2FyYycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpdXMgPSB0aGlzLnBhcnNlRXhwcmVzcyhwYXJ0LnJhZGl1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJjID0gdGhpcy5wYXJzZUV4cHJlc3MocGFydC5hcmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHJhZGl1cywgMCwgYXJjLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZVtrZXldLnN0eWxlID09ICdzdHJva2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5nZXRDb2xvcihrZXkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGV4dHVyZVtrZXldLnN0eWxlID09ICdmaWxsJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmdldENvbG9yKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VwZGF0ZUN0eFByb3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ3R4UHJvcChjdHhQcm9wKSB7XG4gICAgICAgICAgICBpZiAoY3R4UHJvcCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gY3R4UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eFtrXSA9IGN0eFByb3Bba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRDb2xvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb2xvcihrZXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yU2V0ICYmIHRoaXMuY29sb3JTZXRba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yU2V0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX1V0aWxzSnMyWydkZWZhdWx0J10uZ2VuZXJhdGVSYW5kb21Db2xvcigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwYXJzZUV4cHJlc3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2VFeHByZXNzKHBvcykge1xuICAgICAgICAgICAgaWYgKGlzTmFOKHBvcykgJiYgL1xcJFxcey4qXFx9Ly50ZXN0KHBvcykpIHtcbiAgICAgICAgICAgICAgICBwb3MgPSBwb3MucmVwbGFjZSgvY2FudmFzLmhlaWdodC9naSwgdGhpcy5jYW52YXMuaGVpZ2h0KS5yZXBsYWNlKC9jYW52YXMud2lkdGgvZ2ksIHRoaXMuY2FudmFzLndpZHRoKTtcbiAgICAgICAgICAgICAgICBwb3MgPSBwb3Muc3Vic3RyaW5nKDIsIHBvcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBwb3MgPSBldmFsKHBvcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2FudmFzSGVscGVyO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ2FudmFzSGVscGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTlqYjIxdGIyNHZRMkZ1ZG1GelNHVnNjR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096dDFRa0ZCYTBJc1dVRkJXVHM3T3p0SlFVVlVMRmxCUVZrN1FVRkZiRUlzWVVGR1RTeFpRVUZaTEVOQlJXcENMRTFCUVUwc1JVRkJSU3hKUVVGSkxFVkJRVVVzVVVGQlVTeEZRVUZGT3poQ1FVWnVRaXhaUVVGWk96dEJRVWQ2UWl4WlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEJRVU55UWl4WlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU53UWl4WlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF6dExRVU0xUWpzN2FVSkJUbWRDTEZsQlFWazdPMlZCVVd4Q0xIVkNRVUZITzBGQlExWXNaMEpCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1FVRkRNMElzWjBKQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03UVVGRGNrSXNhVUpCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0QlFVTXhRaXh2UWtGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUXpsRExIRkNRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZPMEZCUTJ4RExIZENRVUZKTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOeVF5eDNRa0ZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRiRU1zZDBKQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJ4RExIZENRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1RVRkJUU3hGUVVGRk8wRkJRM3BDTERSQ1FVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN2NVSkJRM3BDTEUxQlEwa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFMUJRVTBzUlVGQlJUdEJRVU01UWl3MFFrRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8zRkNRVU42UWl4TlFVTkpMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeExRVUZMTEVWQlFVVTdRVUZETjBJc05FSkJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBGQlF6VkRMRFJDUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU4wUXl3MFFrRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenR4UWtGRE4wTTdhVUpCUTBvN1FVRkRSQ3h2UWtGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRCUVVOeVFpeHZRa0ZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4UlFVRlJMRVZCUVVVN1FVRkRja01zZDBKQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRNVU1zZDBKQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03YVVKQlEzSkNMRTFCUTBrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hOUVVGTkxFVkJRVVU3UVVGRGVFTXNkMEpCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGVFTXNkMEpCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdhVUpCUTI1Q08yRkJRMG83VTBGRFNqczdPMlZCUjFrc2RVSkJRVU1zVDBGQlR5eEZRVUZGTzBGQlEyNUNMR2RDUVVGSkxFOUJRVThzUlVGQlJUdEJRVU5VTEhGQ1FVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFOUJRVThzUlVGQlJUdEJRVU51UWl4M1FrRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlF6VkNPMkZCUTBvN1UwRkRTanM3TzJWQlNVOHNhMEpCUVVNc1IwRkJSeXhGUVVGRk8wRkJRMVlzWjBKQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNKRExIVkNRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRE4wSTdRVUZEUkN4dFFrRkJUeXh4UWtGQlRTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8xTkJRM1JET3pzN1pVRkhWeXh6UWtGQlF5eEhRVUZITEVWQlFVVTdRVUZEWkN4blFrRkJTU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU53UXl4dFFrRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTjBSeXh0UWtGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRka01zYlVKQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGFFSXNkVUpCUVU4c1IwRkJSeXhEUVVGRE8yRkJRMlE3UVVGRFJDeHRRa0ZCVHl4SFFVRkhMRU5CUVVFN1UwRkRZanM3TzFkQmNFVm5RaXhaUVVGWk96czdjVUpCUVZvc1dVRkJXU0lzSW1acGJHVWlPaUpFT2k5aGNYVmhMMmRsYjNkaGNpOXpjbU12WTI5dGJXOXVMME5oYm5aaGMwaGxiSEJsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlZkR2xzY3lCbWNtOXRJQ2N1TDFWMGFXeHpMbXB6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUTJGdWRtRnpTR1ZzY0dWeUlIdGNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLR05oYm5aaGN5d2dhbk52Yml3Z1kyOXNiM0pUWlhRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1allXNTJZWE1nUFNCallXNTJZWE03WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkR1Y0ZEhWeVpTQTlJR3B6YjI0N1hHNGdJQ0FnSUNBZ0lIUm9hWE11WTI5c2IzSlRaWFFnUFNCamIyeHZjbE5sZER0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JrY21GM1ZHVjRkSFZ5WlNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amRIZ2dQU0IwYUdsekxtTmhiblpoY3k1amRIZzdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkzUjRMbUpsWjJsdVVHRjBhQ2dwTzF4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnZEdocGN5NTBaWGgwZFhKbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblZ3WkdGMFpVTjBlRkJ5YjNBb2RHaHBjeTUwWlhoMGRYSmxXMnRsZVYwdVkzUjRVSEp2Y0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUdsdUlIUm9hWE11ZEdWNGRIVnlaVnRyWlhsZExtUnlZWGNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjR0Z5ZENBOUlIUm9hWE11ZEdWNGRIVnlaVnRyWlhsZExtUnlZWGRiYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSGdnUFNCMGFHbHpMbkJoY25ObFJYaHdjbVZ6Y3lod1lYSjBMbmdwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQjVJRDBnZEdocGN5NXdZWEp6WlVWNGNISmxjM01vY0dGeWRDNTVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NHRnlkQzVrY21GM1ZIbHdaU0E5UFNBbmJXOTJaU2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amRIZ3ViVzkyWlZSdktIZ3NJSGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJR2xtSUNod1lYSjBMbVJ5WVhkVWVYQmxJRDA5SUNkc2FXNWxKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OMGVDNXNhVzVsVkc4b2VDd2dlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWc2MyVWdhV1lnS0hCaGNuUXVaSEpoZDFSNWNHVWdQVDBnSjJGeVl5Y3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSEpoWkdsMWN5QTlJSFJvYVhNdWNHRnljMlZGZUhCeVpYTnpLSEJoY25RdWNtRmthWFZ6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdGeVl5QTlJSFJvYVhNdWNHRnljMlZGZUhCeVpYTnpLSEJoY25RdVlYSmpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqZEhndVlYSmpLSGdzSUhrc0lISmhaR2wxY3l3Z01Dd2dZWEpqTENCbVlXeHpaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqZEhndVkyeHZjMlZRWVhSb0tDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1MFpYaDBkWEpsVzJ0bGVWMHVjM1I1YkdVZ1BUMGdKM04wY205clpTY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTjBlQzV6ZEhKdmEyVlRkSGxzWlNBOUlIUm9hWE11WjJWMFEyOXNiM0lvYTJWNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OMGVDNXpkSEp2YTJVb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLSFJvYVhNdWRHVjRkSFZ5WlZ0clpYbGRMbk4wZVd4bElEMDlJQ2RtYVd4c0p5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkzUjRMbVpwYkd4VGRIbHNaU0E5SUhSb2FYTXVaMlYwUTI5c2IzSW9hMlY1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU4wZUM1bWFXeHNLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmx4dUlDQWdJSFZ3WkdGMFpVTjBlRkJ5YjNBb1kzUjRVSEp2Y0NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvWTNSNFVISnZjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoMllYSWdheUJwYmlCamRIaFFjbTl3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqZEhoYmExMGdQU0JqZEhoUWNtOXdXMnRkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc1Y2JseHVJQ0FnSUdkbGRFTnZiRzl5S0d0bGVTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVqYjJ4dmNsTmxkQ0FtSmlCMGFHbHpMbU52Ykc5eVUyVjBXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtTnZiRzl5VTJWMFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZWMGFXeHpMbWRsYm1WeVlYUmxVbUZ1Wkc5dFEyOXNiM0lvS1R0Y2JpQWdJQ0I5WEc1Y2JseHVJQ0FnSUhCaGNuTmxSWGh3Y21WemN5aHdiM01wSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x6VG1GT0tIQnZjeWtnSmlZZ0wxeGNKRnhjZXk0cVhGeDlMeTUwWlhOMEtIQnZjeWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ2Y3lBOUlIQnZjeTV5WlhCc1lXTmxLQzlqWVc1MllYTXVhR1ZwWjJoMEwyZHBMQ0IwYUdsekxtTmhiblpoY3k1b1pXbG5hSFFwTG5KbGNHeGhZMlVvTDJOaGJuWmhjeTUzYVdSMGFDOW5hU3dnZEdocGN5NWpZVzUyWVhNdWQybGtkR2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjRzl6SUQwZ2NHOXpMbk4xWW5OMGNtbHVaeWd5TENCd2IzTXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndiM01nUFNCbGRtRnNLSEJ2Y3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjRzl6TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCd2IzTmNiaUFnSUNCOVhHNWNibjBpWFgwPSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBVdGlscyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXRpbHMoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVdGlscyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFV0aWxzLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdnZW5lcmF0ZVJhbmRvbUNvbG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tQ29sb3IoKSB7XG4gICAgICAgICAgICB2YXIgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcbiAgICAgICAgICAgIHZhciBjb2xvciA9ICcjJztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFV0aWxzO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVXRpbHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OWpiMjF0YjI0dlZYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0SlFVRnhRaXhMUVVGTE8yRkJRVXdzUzBGQlN6czRRa0ZCVEN4TFFVRkxPenM3YVVKQlFVd3NTMEZCU3pzN1pVRkRTU3dyUWtGQlJ6dEJRVU42UWl4blFrRkJTU3hQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1FVRkRha01zWjBKQlFVa3NTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOb1FpeHBRa0ZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVONFFpeHhRa0ZCU3l4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzQkVPMEZCUTBRc2JVSkJRVThzUzBGQlN5eERRVUZETzFOQlEyaENPenM3VjBGU1owSXNTMEZCU3pzN08zRkNRVUZNTEV0QlFVc2lMQ0ptYVd4bElqb2lSRG92WVhGMVlTOW5aVzkzWVhJdmMzSmpMMk52YlcxdmJpOVZkR2xzY3k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZWMGFXeHpJSHRjYmlBZ0lDQnpkR0YwYVdNZ1oyVnVaWEpoZEdWU1lXNWtiMjFEYjJ4dmNpZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHeGxkSFJsY25NZ1BTQW5NREV5TXpRMU5qYzRPVUZDUTBSRlJpYzdYRzRnSUNBZ0lDQWdJSFpoY2lCamIyeHZjaUE5SUNjakp6dGNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0EyT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiRzl5SUNzOUlHeGxkSFJsY25OYlRXRjBhQzVtYkc5dmNpaE5ZWFJvTG5KaGJtUnZiU2dwSUNvZ01UWXBYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTI5c2IzSTdYRzRnSUNBZ2ZWeHVmU0pkZlE9PSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gsIF94MiwgX3gzKSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94LCBwcm9wZXJ0eSA9IF94MiwgcmVjZWl2ZXIgPSBfeDM7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3ggPSBwYXJlbnQ7IF94MiA9IHByb3BlcnR5OyBfeDMgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX1BsYXllckpzID0gcmVxdWlyZSgnLi9QbGF5ZXIuanMnKTtcblxudmFyIF9QbGF5ZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QbGF5ZXJKcyk7XG5cbnZhciBfY29tbW9uQ2FudmFzSGVscGVySnMgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vQ2FudmFzSGVscGVyLmpzJyk7XG5cbnZhciBfY29tbW9uQ2FudmFzSGVscGVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tbW9uQ2FudmFzSGVscGVySnMpO1xuXG52YXIgX3RleHR1cmVzUGxheWVyc0NpcmNsZXBsYXllckpzb24gPSByZXF1aXJlKCcuLi8uLi90ZXh0dXJlcy9wbGF5ZXJzL2NpcmNsZXBsYXllci5qc29uJyk7XG5cbnZhciBfdGV4dHVyZXNQbGF5ZXJzQ2lyY2xlcGxheWVySnNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXh0dXJlc1BsYXllcnNDaXJjbGVwbGF5ZXJKc29uKTtcblxudmFyIENpcmNsZVBsYXllciA9IChmdW5jdGlvbiAoX1BsYXllcikge1xuICAgIF9pbmhlcml0cyhDaXJjbGVQbGF5ZXIsIF9QbGF5ZXIpO1xuXG4gICAgZnVuY3Rpb24gQ2lyY2xlUGxheWVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2lyY2xlUGxheWVyKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihDaXJjbGVQbGF5ZXIucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2lyY2xlUGxheWVyLCBbe1xuICAgICAgICBrZXk6ICdkcmF3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICBuZXcgX2NvbW1vbkNhbnZhc0hlbHBlckpzMlsnZGVmYXVsdCddKHRoaXMuY2FudmFzLCBfdGV4dHVyZXNQbGF5ZXJzQ2lyY2xlcGxheWVySnNvbjJbJ2RlZmF1bHQnXSkuZHJhd1RleHR1cmUoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDaXJjbGVQbGF5ZXI7XG59KShfUGxheWVySnMyWydkZWZhdWx0J10pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDaXJjbGVQbGF5ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwzQnNZWGxsY25NdlEybHlZMnhsVUd4aGVXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdkMEpCUVcxQ0xHRkJRV0U3T3pzN2IwTkJRMUFzT0VKQlFUaENPenM3T3l0RFFVTm9ReXd3UTBGQk1FTTdPenM3U1VGRk5VTXNXVUZCV1R0alFVRmFMRmxCUVZrN08yRkJRVm9zV1VGQldUczRRa0ZCV2l4WlFVRlpPenR0UTBGQldpeFpRVUZaT3pzN2FVSkJRVm9zV1VGQldUczdaVUZGZWtJc1owSkJRVWM3UVVGRFNDeHJSRUZCYVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzSzBOQlFWa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRUUVVNeFJEczdPMWRCU21kQ0xGbEJRVms3T3p0eFFrRkJXaXhaUVVGWklpd2labWxzWlNJNklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwzQnNZWGxsY25NdlEybHlZMnhsVUd4aGVXVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZCc1lYbGxjaUJtY205dElDY3VMMUJzWVhsbGNpNXFjeWM3WEc1cGJYQnZjblFnUTJGdWRtRnpTR1ZzY0dWeUlHWnliMjBnSnk0dUx5NHVMMk52YlcxdmJpOURZVzUyWVhOSVpXeHdaWEl1YW5Nbk8xeHVhVzF3YjNKMElIQnNZWGxsY2twemIyNGdabkp2YlNBbkxpNHZMaTR2ZEdWNGRIVnlaWE12Y0d4aGVXVnljeTlqYVhKamJHVndiR0Y1WlhJdWFuTnZiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRU5wY21Oc1pWQnNZWGxsY2lCbGVIUmxibVJ6SUZCc1lYbGxjaUI3WEc1Y2JpQWdJQ0JrY21GM0tDa2dlMXh1SUNBZ0lDQWdJQ0J1WlhjZ1EyRnVkbUZ6U0dWc2NHVnlLSFJvYVhNdVkyRnVkbUZ6TEhCc1lYbGxja3B6YjI0cExtUnlZWGRVWlhoMGRYSmxLQ2s3WEc0Z0lDQWdmVnh1WEc1OUlsMTkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKcyA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25DYW52YXNIZWxwZXJKcyk7XG5cbnZhciBfdGV4dHVyZXNQbGF5ZXJzUGxheWVySnNvbiA9IHJlcXVpcmUoJy4uLy4uL3RleHR1cmVzL3BsYXllcnMvUGxheWVyLmpzb24nKTtcblxudmFyIF90ZXh0dXJlc1BsYXllcnNQbGF5ZXJKc29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RleHR1cmVzUGxheWVyc1BsYXllckpzb24pO1xuXG52YXIgUGxheWVyID0gKGZ1bmN0aW9uIChfUGhhc2VyJFNwcml0ZSkge1xuICAgIF9pbmhlcml0cyhQbGF5ZXIsIF9QaGFzZXIkU3ByaXRlKTtcblxuICAgIGZ1bmN0aW9uIFBsYXllcihnYW1lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgd2VhcG9uRmFjdG9yeSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGxheWVyKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihQbGF5ZXIucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBnYW1lLCB4LCB5LCBnYW1lLm1ha2UuYml0bWFwRGF0YSh3aWR0aCwgaGVpZ2h0KSk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5rZXk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcblxuICAgICAgICB0aGlzLmRyYXcoKTtcblxuICAgICAgICB0aGlzLnNwZWVkID0gMzAwO1xuICAgICAgICB0aGlzLmFuZ2xlID0gLTkwO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ib2R5LmRyYWcuc2V0KDYwKTtcblxuICAgICAgICB0aGlzLndlYXBvbkZhY3RvcnkgPSB3ZWFwb25GYWN0b3J5O1xuICAgICAgICB0aGlzLmNyZWF0ZVdlYXBvbigpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQbGF5ZXIsIFt7XG4gICAgICAgIGtleTogJ2RyYXcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgICAgIG5ldyBfY29tbW9uQ2FudmFzSGVscGVySnMyWydkZWZhdWx0J10odGhpcy5jYW52YXMsIF90ZXh0dXJlc1BsYXllcnNQbGF5ZXJKc29uMlsnZGVmYXVsdCddKS5kcmF3VGV4dHVyZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1cGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICAgICAgdGhpcy5ib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5MRUZUKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAtMjAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5SSUdIVCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkuYW5ndWxhclZlbG9jaXR5ID0gMjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlVQKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS52ZWxvY2l0eUZyb21BbmdsZSh0aGlzLmFuZ2xlLCAzMDAsIHRoaXMuYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLkRPV04pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLnZlbG9jaXR5RnJvbUFuZ2xlKHRoaXMuYW5nbGUsIDMwMCwgdGhpcy5ib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyZUJ1dHRvbi5pc0Rvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLndlYXBvbi5maXJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZVdlYXBvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVXZWFwb24oKSB7XG4gICAgICAgICAgICB0aGlzLndlYXBvbiA9IHRoaXMud2VhcG9uRmFjdG9yeS5jcmVhdGVXZWFwb24oJ2RpcnQnKTtcblxuICAgICAgICAgICAgdGhpcy53ZWFwb24udHJhY2tTcHJpdGUodGhpcywgdGhpcy53aWR0aCAvIDIgKyA1LCAwLCB0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5maXJlQnV0dG9uID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Q29kZS5TUEFDRUJBUik7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUGxheWVyO1xufSkoUGhhc2VyLlNwcml0ZSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBsYXllcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5d2NtVm1ZV0p6TDNCc1lYbGxjbk12VUd4aGVXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdiME5CUVhsQ0xEaENRVUU0UWpzN096dDVRMEZEYUVNc2IwTkJRVzlET3pzN08wbEJSWFJETEUxQlFVMDdZMEZCVGl4TlFVRk5PenRCUVVWYUxHRkJSazBzVFVGQlRTeERRVVZZTEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVXNTMEZCU3l4RlFVRkZMR0ZCUVdFc1JVRkJSVHM0UWtGR05VTXNUVUZCVFRzN1FVRkhia0lzYlVOQlNHRXNUVUZCVFN3MlEwRkhZaXhKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVVN1FVRkRka1FzV1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8wRkJRM1pDTEZsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEJRVVZ1UWl4WlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03TzBGQlJWb3NXVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU03UVVGRGFrSXNXVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF6dEJRVU5xUWl4WlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkROVUlzV1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM1JFTEZsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTNCRExGbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6czdRVUZGZGtJc1dVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eGhRVUZoTEVOQlFVTTdRVUZEYmtNc1dVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzB0QlEzWkNPenRwUWtGc1FtZENMRTFCUVUwN08yVkJjVUp1UWl4blFrRkJSenRCUVVOSUxHdEVRVUZwUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3g1UTBGQldTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMU5CUXpGRU96czdaVUZGU3l4clFrRkJSenRCUVVOTUxHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzcENMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM3BDTEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlRsQ0xHZENRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdEJRVU4yUkN4dlFrRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNN1lVRkRjRU1zVFVGRFNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdEJRVU0zUkN4dlFrRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NSMEZCUnl4RFFVRkRPMkZCUTI1RE8wRkJRMFFzWjBKQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTzBGQlEzSkVMRzlDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRoUVVOdVJpeE5RVU5KTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlF6VkVMRzlDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRoUVVOdVJqczdRVUZGUkN4blFrRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNSVUZCUlR0QlFVTjRRaXh2UWtGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRoUVVOMFFqdFRRVU5LT3pzN1pVRkZWeXgzUWtGQlJ6dEJRVU5ZTEdkQ1FVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE96dEJRVVYwUkN4blFrRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03TzBGQlJUTkVMR2RDUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFRRVU01UlRzN08xZEJkRVJuUWl4TlFVRk5PMGRCUVZNc1RVRkJUU3hEUVVGRExFMUJRVTA3TzNGQ1FVRTFRaXhOUVVGTklpd2labWxzWlNJNklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwzQnNZWGxsY25NdlVHeGhlV1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFTmhiblpoYzBobGJIQmxjaUJtY205dElDY3VMaTh1TGk5amIyMXRiMjR2UTJGdWRtRnpTR1ZzY0dWeUxtcHpKenRjYm1sdGNHOXlkQ0J3YkdGNVpYSktjMjl1SUdaeWIyMGdKeTR1THk0dUwzUmxlSFIxY21WekwzQnNZWGxsY25NdlVHeGhlV1Z5TG1wemIyNG5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFiR0Y1WlhJZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNCeWFYUmxJSHRjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0dkaGJXVXNJSGdzSUhrc0lIZHBaSFJvTENCb1pXbG5hSFFzSUdOdmJHOXlMQ0IzWldGd2IyNUdZV04wYjNKNUtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtHZGhiV1VzSUhnc0lIa3NJR2RoYldVdWJXRnJaUzVpYVhSdFlYQkVZWFJoS0hkcFpIUm9MQ0JvWldsbmFIUXBLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpZVzUyWVhNZ1BTQjBhR2x6TG10bGVUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amIyeHZjaUE5SUdOdmJHOXlPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZEdocGN5NWtjbUYzS0NrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emNHVmxaQ0E5SURNd01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtZHNaU0E5SUMwNU1EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aGJtTm9iM0l1YzJWMFZHOG9NQzQxTENBd0xqVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1Y0doNWMybGpjeTVsYm1GaWJHVW9kR2hwY3l3Z1VHaGhjMlZ5TGxCb2VYTnBZM011UVZKRFFVUkZLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG1OdmJHeHBaR1ZYYjNKc1pFSnZkVzVrY3lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1a2NtRm5Mbk5sZENnMk1DazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NTNaV0Z3YjI1R1lXTjBiM0o1SUQwZ2QyVmhjRzl1Um1GamRHOXllVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpjbVZoZEdWWFpXRndiMjRvS1R0Y2JpQWdJQ0I5WEc1Y2JseHVJQ0FnSUdSeVlYY29LU0I3WEc0Z0lDQWdJQ0FnSUc1bGR5QkRZVzUyWVhOSVpXeHdaWElvZEdocGN5NWpZVzUyWVhNc2NHeGhlV1Z5U25OdmJpa3VaSEpoZDFSbGVIUjFjbVVvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbTlrZVM1MlpXeHZZMmwwZVM1NElEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliMlI1TG5abGJHOWphWFI1TG5rZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnZaSGt1WVc1bmRXeGhjbFpsYkc5amFYUjVJRDBnTUR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NW5ZVzFsTG1sdWNIVjBMbXRsZVdKdllYSmtMbWx6Ukc5M2JpaFFhR0Z6WlhJdVMyVjVZbTloY21RdVRFVkdWQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVltOWtlUzVoYm1kMWJHRnlWbVZzYjJOcGRIa2dQU0F0TWpBd08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLSFJvYVhNdVoyRnRaUzVwYm5CMWRDNXJaWGxpYjJGeVpDNXBjMFJ2ZDI0b1VHaGhjMlZ5TGt0bGVXSnZZWEprTGxKSlIwaFVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1aWIyUjVMbUZ1WjNWc1lYSldaV3h2WTJsMGVTQTlJREl3TUR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NW5ZVzFsTG1sdWNIVjBMbXRsZVdKdllYSmtMbWx6Ukc5M2JpaFFhR0Z6WlhJdVMyVjVZbTloY21RdVZWQXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjR2g1YzJsamN5NWhjbU5oWkdVdWRtVnNiMk5wZEhsR2NtOXRRVzVuYkdVb2RHaHBjeTVoYm1kc1pTd2dNekF3TENCMGFHbHpMbUp2WkhrdWRtVnNiMk5wZEhrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLSFJvYVhNdVoyRnRaUzVwYm5CMWRDNXJaWGxpYjJGeVpDNXBjMFJ2ZDI0b1VHaGhjMlZ5TGt0bGVXSnZZWEprTGtSUFYwNHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVjR2g1YzJsamN5NWhjbU5oWkdVdWRtVnNiMk5wZEhsR2NtOXRRVzVuYkdVb2RHaHBjeTVoYm1kc1pTd2dNekF3TENCMGFHbHpMbUp2WkhrdWRtVnNiMk5wZEhrcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Wm1seVpVSjFkSFJ2Ymk1cGMwUnZkMjRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWQyVmhjRzl1TG1acGNtVW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR055WldGMFpWZGxZWEJ2YmlncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1M1pXRndiMjRnUFNCMGFHbHpMbmRsWVhCdmJrWmhZM1J2Y25rdVkzSmxZWFJsVjJWaGNHOXVLQ2RrYVhKMEp5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NTNaV0Z3YjI0dWRISmhZMnRUY0hKcGRHVW9kR2hwY3l3Z2RHaHBjeTUzYVdSMGFDQXZJRElnS3lBMUxDQXdMQ0IwY25WbEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtWnBjbVZDZFhSMGIyNGdQU0IwYUdsekxtZGhiV1V1YVc1d2RYUXVhMlY1WW05aGNtUXVZV1JrUzJWNUtGQm9ZWE5sY2k1TFpYbERiMlJsTGxOUVFVTkZRa0ZTS1R0Y2JpQWdJQ0I5WEc1Y2JuMGlYWDA9IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX1BsYXllckpzID0gcmVxdWlyZSgnLi9QbGF5ZXIuanMnKTtcblxudmFyIF9QbGF5ZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QbGF5ZXJKcyk7XG5cbnZhciBfU3F1YXJlUGxheWVySnMgPSByZXF1aXJlKCcuL1NxdWFyZVBsYXllci5qcycpO1xuXG52YXIgX1NxdWFyZVBsYXllckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NxdWFyZVBsYXllckpzKTtcblxudmFyIF9DaXJjbGVQbGF5ZXJKcyA9IHJlcXVpcmUoJy4vQ2lyY2xlUGxheWVyLmpzJyk7XG5cbnZhciBfQ2lyY2xlUGxheWVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2lyY2xlUGxheWVySnMpO1xuXG52YXIgX3dlYXBvbnNXZWFwb25GYWN0b3J5SnMgPSByZXF1aXJlKCcuLi93ZWFwb25zL1dlYXBvbkZhY3RvcnkuanMnKTtcblxudmFyIF93ZWFwb25zV2VhcG9uRmFjdG9yeUpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dlYXBvbnNXZWFwb25GYWN0b3J5SnMpO1xuXG52YXIgX2NvbW1vblV0aWxzSnMgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vVXRpbHMuanMnKTtcblxudmFyIF9jb21tb25VdGlsc0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1vblV0aWxzSnMpO1xuXG52YXIgUGxheWVyRmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGxheWVyRmFjdG9yeShnYW1lKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQbGF5ZXJGYWN0b3J5KTtcblxuICAgICAgICB0aGlzLl9wbGF5ZXJUeXBlcyA9IFsndHJpYW5nbGUnLCAnc3F1YXJlJywgJ2NpcmNsZSddO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMud2VhcG9uRmFjdG9yeSA9IG5ldyBfd2VhcG9uc1dlYXBvbkZhY3RvcnlKczJbJ2RlZmF1bHQnXShnYW1lKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUGxheWVyRmFjdG9yeSwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlUGxheWVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcihkZWZhdWx0VHlwZSkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBkZWZhdWx0VHlwZTtcbiAgICAgICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0aGlzLl9wbGF5ZXJUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9wbGF5ZXJUeXBlcy5sZW5ndGgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IF9QbGF5ZXJKczJbJ2RlZmF1bHQnXSh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53aWR0aCAvIDIsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLCAzNSwgMzAsIF9jb21tb25VdGlsc0pzMlsnZGVmYXVsdCddLmdlbmVyYXRlUmFuZG9tQ29sb3IoKSwgdGhpcy53ZWFwb25GYWN0b3J5KTtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3F1YXJlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgX1NxdWFyZVBsYXllckpzMlsnZGVmYXVsdCddKHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndpZHRoIC8gMiwgdGhpcy5nYW1lLmhlaWdodCAvIDIsIDM1LCAzMCwgX2NvbW1vblV0aWxzSnMyWydkZWZhdWx0J10uZ2VuZXJhdGVSYW5kb21Db2xvcigpLCB0aGlzLndlYXBvbkZhY3RvcnkpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfQ2lyY2xlUGxheWVySnMyWydkZWZhdWx0J10odGhpcy5nYW1lLCB0aGlzLmdhbWUud2lkdGggLyAyLCB0aGlzLmdhbWUuaGVpZ2h0IC8gMiwgMzUsIDMwLCBfY29tbW9uVXRpbHNKczJbJ2RlZmF1bHQnXS5nZW5lcmF0ZVJhbmRvbUNvbG9yKCksIHRoaXMud2VhcG9uRmFjdG9yeSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfUGxheWVySnMyWydkZWZhdWx0J10odGhpcy5nYW1lLCB0aGlzLmdhbWUud2lkdGggLyAyLCB0aGlzLmdhbWUuaGVpZ2h0IC8gMiwgMzUsIDMwLCBfY29tbW9uVXRpbHNKczJbJ2RlZmF1bHQnXS5nZW5lcmF0ZVJhbmRvbUNvbG9yKCksIHRoaXMud2VhcG9uRmFjdG9yeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUGxheWVyRmFjdG9yeTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBsYXllckZhY3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwzQnNZWGxsY25NdlVHeGhlV1Z5Um1GamRHOXllUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN2QwSkJRVzFDTEdGQlFXRTdPenM3T0VKQlExQXNiVUpCUVcxQ096czdPemhDUVVOdVFpeHRRa0ZCYlVJN096czdjME5CUTJ4Q0xEWkNRVUUyUWpzN096czJRa0ZEY2tNc2RVSkJRWFZDT3pzN08wbEJSWEJDTEdGQlFXRTdRVUZKYmtJc1lVRktUU3hoUVVGaExFTkJTV3hDTEVsQlFVa3NSVUZCUlRzNFFrRktSQ3hoUVVGaE96dGhRVVU1UWl4WlFVRlpMRWRCUVVjc1EwRkJReXhWUVVGVkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXpzN1FVRkhNME1zV1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRha0lzV1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4M1EwRkJhMElzU1VGQlNTeERRVUZETEVOQlFVTTdTMEZEYUVRN08ybENRVkJuUWl4aFFVRmhPenRsUVZOc1FpeHpRa0ZCUXl4WFFVRlhMRVZCUVVVN1FVRkRkRUlzWjBKQlFVa3NTVUZCU1N4SFFVRkhMRmRCUVZjc1EwRkJRenRCUVVOMlFpeG5Ra0ZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSVHRCUVVOUUxHOUNRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRiRVk3UVVGRFJDeHZRa0ZCVVN4SlFVRkpPMEZCUTFJc2NVSkJRVXNzVlVGQlZUdEJRVU5ZTERKQ1FVRlBMREJDUVVGWExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMREpDUVVGTkxHMUNRVUZ0UWl4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzBGQlFVRXNRVUZEY2trc2NVSkJRVXNzVVVGQlVUdEJRVU5VTERKQ1FVRlBMR2REUVVGcFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3d5UWtGQlRTeHRRa0ZCYlVJc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0QlFVRkJMRUZCUXpOSkxIRkNRVUZMTEZGQlFWRTdRVUZEVkN3eVFrRkJUeXhuUTBGQmFVSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzTWtKQlFVMHNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1FVRkJRU3hCUVVNelNUdEJRVU5KTERKQ1FVRlBMREJDUVVGWExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMREpDUVVGTkxHMUNRVUZ0UWl4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzBGQlFVRXNZVUZEZUVrN1UwRkRTanM3TzFkQmVFSm5RaXhoUVVGaE96czdjVUpCUVdJc1lVRkJZU0lzSW1acGJHVWlPaUpFT2k5aGNYVmhMMmRsYjNkaGNpOXpjbU12Y0hKbFptRmljeTl3YkdGNVpYSnpMMUJzWVhsbGNrWmhZM1J2Y25rdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVR3hoZVdWeUlHWnliMjBnSnk0dlVHeGhlV1Z5TG1wekp6dGNibWx0Y0c5eWRDQlRjWFZoY21WUWJHRjVaWElnWm5KdmJTQW5MaTlUY1hWaGNtVlFiR0Y1WlhJdWFuTW5PMXh1YVcxd2IzSjBJRU5wY21Oc1pWQnNZWGxsY2lCbWNtOXRJQ2N1TDBOcGNtTnNaVkJzWVhsbGNpNXFjeWM3WEc1cGJYQnZjblFnVjJWaGNHOXVSbUZqZEc5eWVTQm1jbTl0SUNjdUxpOTNaV0Z3YjI1ekwxZGxZWEJ2YmtaaFkzUnZjbmt1YW5Nbk8xeHVhVzF3YjNKMElGVjBhV3h6SUdaeWIyMGdKeTR1THk0dUwyTnZiVzF2Ymk5VmRHbHNjeTVxY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCc1lYbGxja1poWTNSdmNua2dlMXh1WEc0Z0lDQWdYM0JzWVhsbGNsUjVjR1Z6SUQwZ1d5ZDBjbWxoYm1kc1pTY3NJQ2R6Y1hWaGNtVW5MQ0FuWTJseVkyeGxKMTA3WEc1Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lobllXMWxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlNBOUlHZGhiV1U3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkMlZoY0c5dVJtRmpkRzl5ZVNBOUlHNWxkeUJYWldGd2IyNUdZV04wYjNKNUtHZGhiV1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR055WldGMFpWQnNZWGxsY2loa1pXWmhkV3gwVkhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RIbHdaU0E5SUdSbFptRjFiSFJVZVhCbE8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVhSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1VnUFNCMGFHbHpMbDl3YkdGNVpYSlVlWEJsYzF0TllYUm9MbVpzYjI5eUtFMWhkR2d1Y21GdVpHOXRLQ2tnS2lCMGFHbHpMbDl3YkdGNVpYSlVlWEJsY3k1c1pXNW5kR2dwWFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tIUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ1hDSjBjbWxoYm1kc1pWd2lPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnVUd4aGVXVnlLSFJvYVhNdVoyRnRaU3dnZEdocGN5NW5ZVzFsTG5kcFpIUm9JQzhnTWl3Z2RHaHBjeTVuWVcxbExtaGxhV2RvZENBdklESXNJRE0xTENBek1Dd2dWWFJwYkhNdVoyVnVaWEpoZEdWU1lXNWtiMjFEYjJ4dmNpZ3BMQ0IwYUdsekxuZGxZWEJ2YmtaaFkzUnZjbmtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNCY0luTnhkV0Z5WlZ3aU9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dVM0YxWVhKbFVHeGhlV1Z5S0hSb2FYTXVaMkZ0WlN3Z2RHaHBjeTVuWVcxbExuZHBaSFJvSUM4Z01pd2dkR2hwY3k1bllXMWxMbWhsYVdkb2RDQXZJRElzSURNMUxDQXpNQ3dnVlhScGJITXVaMlZ1WlhKaGRHVlNZVzVrYjIxRGIyeHZjaWdwTENCMGFHbHpMbmRsWVhCdmJrWmhZM1J2Y25rcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQmNJbU5wY21Oc1pWd2lPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnUTJseVkyeGxVR3hoZVdWeUtIUm9hWE11WjJGdFpTd2dkR2hwY3k1bllXMWxMbmRwWkhSb0lDOGdNaXdnZEdocGN5NW5ZVzFsTG1obGFXZG9kQ0F2SURJc0lETTFMQ0F6TUN3Z1ZYUnBiSE11WjJWdVpYSmhkR1ZTWVc1a2IyMURiMnh2Y2lncExDQjBhR2x6TG5kbFlYQnZia1poWTNSdmNua3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVm1ZWFZzZERwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lGQnNZWGxsY2loMGFHbHpMbWRoYldVc0lIUm9hWE11WjJGdFpTNTNhV1IwYUNBdklESXNJSFJvYVhNdVoyRnRaUzVvWldsbmFIUWdMeUF5TENBek5Td2dNekFzSUZWMGFXeHpMbWRsYm1WeVlYUmxVbUZ1Wkc5dFEyOXNiM0lvS1N3Z2RHaHBjeTUzWldGd2IyNUdZV04wYjNKNUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1ZlNKZGZRPT0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9QbGF5ZXJKcyA9IHJlcXVpcmUoJy4vUGxheWVyLmpzJyk7XG5cbnZhciBfUGxheWVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGxheWVySnMpO1xuXG52YXIgX2NvbW1vbkNhbnZhc0hlbHBlckpzID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL0NhbnZhc0hlbHBlci5qcycpO1xuXG52YXIgX2NvbW1vbkNhbnZhc0hlbHBlckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1vbkNhbnZhc0hlbHBlckpzKTtcblxudmFyIF90ZXh0dXJlc1BsYXllcnNTcXVhcmVwbGF5ZXJKc29uID0gcmVxdWlyZSgnLi4vLi4vdGV4dHVyZXMvcGxheWVycy9zcXVhcmVwbGF5ZXIuanNvbicpO1xuXG52YXIgX3RleHR1cmVzUGxheWVyc1NxdWFyZXBsYXllckpzb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGV4dHVyZXNQbGF5ZXJzU3F1YXJlcGxheWVySnNvbik7XG5cbnZhciBTcXVhcmVQbGF5ZXIgPSAoZnVuY3Rpb24gKF9QbGF5ZXIpIHtcbiAgICBfaW5oZXJpdHMoU3F1YXJlUGxheWVyLCBfUGxheWVyKTtcblxuICAgIGZ1bmN0aW9uIFNxdWFyZVBsYXllcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNxdWFyZVBsYXllcik7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3F1YXJlUGxheWVyLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNxdWFyZVBsYXllciwgW3tcbiAgICAgICAga2V5OiAnZHJhdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICAgICAgbmV3IF9jb21tb25DYW52YXNIZWxwZXJKczJbJ2RlZmF1bHQnXSh0aGlzLmNhbnZhcywgX3RleHR1cmVzUGxheWVyc1NxdWFyZXBsYXllckpzb24yWydkZWZhdWx0J10pLmRyYXdUZXh0dXJlKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3F1YXJlUGxheWVyO1xufSkoX1BsYXllckpzMlsnZGVmYXVsdCddKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3F1YXJlUGxheWVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl3Y21WbVlXSnpMM0JzWVhsbGNuTXZVM0YxWVhKbFVHeGhlV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3ZDBKQlFXMUNMR0ZCUVdFN096czdiME5CUTFBc09FSkJRVGhDT3pzN095dERRVU5vUXl3d1EwRkJNRU03T3pzN1NVRkZOVU1zV1VGQldUdGpRVUZhTEZsQlFWazdPMkZCUVZvc1dVRkJXVHM0UWtGQldpeFpRVUZaT3p0dFEwRkJXaXhaUVVGWk96czdhVUpCUVZvc1dVRkJXVHM3WlVGRmVrSXNaMEpCUVVjN1FVRkRTQ3hyUkVGQmFVSXNTVUZCU1N4RFFVRkRMRTFCUVUwc0swTkJRVmtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0VFFVTXhSRHM3TzFkQlNtZENMRmxCUVZrN096dHhRa0ZCV2l4WlFVRlpJaXdpWm1sc1pTSTZJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl3Y21WbVlXSnpMM0JzWVhsbGNuTXZVM0YxWVhKbFVHeGhlV1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGQnNZWGxsY2lCbWNtOXRJQ2N1TDFCc1lYbGxjaTVxY3ljN1hHNXBiWEJ2Y25RZ1EyRnVkbUZ6U0dWc2NHVnlJR1p5YjIwZ0p5NHVMeTR1TDJOdmJXMXZiaTlEWVc1MllYTklaV3h3WlhJdWFuTW5PMXh1YVcxd2IzSjBJSEJzWVhsbGNrcHpiMjRnWm5KdmJTQW5MaTR2TGk0dmRHVjRkSFZ5WlhNdmNHeGhlV1Z5Y3k5emNYVmhjbVZ3YkdGNVpYSXVhbk52YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZOeGRXRnlaVkJzWVhsbGNpQmxlSFJsYm1SeklGQnNZWGxsY2lCN1hHNWNiaUFnSUNCa2NtRjNLQ2tnZTF4dUlDQWdJQ0FnSUNCdVpYY2dRMkZ1ZG1GelNHVnNjR1Z5S0hSb2FYTXVZMkZ1ZG1GekxIQnNZWGxsY2twemIyNHBMbVJ5WVhkVVpYaDBkWEpsS0NrN1hHNGdJQ0FnZlZ4dVhHNTlJbDE5IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfV2VhcG9uSnMgPSByZXF1aXJlKCcuL1dlYXBvbi5qcycpO1xuXG52YXIgX1dlYXBvbkpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1dlYXBvbkpzKTtcblxudmFyIF9jb21tb25VdGlsc0pzID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL1V0aWxzLmpzJyk7XG5cbnZhciBfY29tbW9uVXRpbHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25VdGlsc0pzKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKcyA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25DYW52YXNIZWxwZXJKcyk7XG5cbnZhciBfdGV4dHVyZXNXZWFwb25zRGlydHdlYXBvbkpzb24gPSByZXF1aXJlKCcuLi8uLi90ZXh0dXJlcy93ZWFwb25zL2RpcnR3ZWFwb24uanNvbicpO1xuXG52YXIgX3RleHR1cmVzV2VhcG9uc0RpcnR3ZWFwb25Kc29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RleHR1cmVzV2VhcG9uc0RpcnR3ZWFwb25Kc29uKTtcblxudmFyIERpcnRXZWFwb24gPSAoZnVuY3Rpb24gKF9XZWFwb24pIHtcbiAgICBfaW5oZXJpdHMoRGlydFdlYXBvbiwgX1dlYXBvbik7XG5cbiAgICBmdW5jdGlvbiBEaXJ0V2VhcG9uKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlydFdlYXBvbik7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGlydFdlYXBvbi5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEaXJ0V2VhcG9uLCBbe1xuICAgICAgICBrZXk6ICdjcmVhdGVCdWxsZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQnVsbGV0KCkge1xuICAgICAgICAgICAgdGhpcy5ibWQgPSB0aGlzLmdhbWUubWFrZS5iaXRtYXBEYXRhKDEyLCAxMik7XG4gICAgICAgICAgICBuZXcgX2NvbW1vbkNhbnZhc0hlbHBlckpzMlsnZGVmYXVsdCddKHRoaXMuYm1kLCBfdGV4dHVyZXNXZWFwb25zRGlydHdlYXBvbkpzb24yWydkZWZhdWx0J10pLmRyYXdUZXh0dXJlKCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRGlydFdlYXBvbjtcbn0pKF9XZWFwb25KczJbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERpcnRXZWFwb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwzZGxZWEJ2Ym5NdlJHbHlkRmRsWVhCdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN08zZENRVUZ0UWl4aFFVRmhPenM3T3paQ1FVTmtMSFZDUVVGMVFqczdPenR2UTBGRGFFSXNPRUpCUVRoQ096czdPelpEUVVOb1F5eDNRMEZCZDBNN096czdTVUZGTVVNc1ZVRkJWVHRqUVVGV0xGVkJRVlU3TzJGQlFWWXNWVUZCVlRzNFFrRkJWaXhWUVVGVk96dHRRMEZCVml4VlFVRlZPenM3YVVKQlFWWXNWVUZCVlRzN1pVRkZaaXgzUWtGQlJ6dEJRVU5ZTEdkQ1FVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETjBNc2EwUkJRV2xDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRFpEUVVGWkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVMEZEZGtRN096dFhRVXhuUWl4VlFVRlZPenM3Y1VKQlFWWXNWVUZCVlNJc0ltWnBiR1VpT2lKRU9pOWhjWFZoTDJkbGIzZGhjaTl6Y21NdmNISmxabUZpY3k5M1pXRndiMjV6TDBScGNuUlhaV0Z3YjI0dWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdWMlZoY0c5dUlHWnliMjBnSnk0dlYyVmhjRzl1TG1wekp6dGNibWx0Y0c5eWRDQlZkR2xzY3lCbWNtOXRJQ2N1TGk4dUxpOWpiMjF0YjI0dlZYUnBiSE11YW5Nbk8xeHVhVzF3YjNKMElFTmhiblpoYzBobGJIQmxjaUJtY205dElDY3VMaTh1TGk5amIyMXRiMjR2UTJGdWRtRnpTR1ZzY0dWeUxtcHpKenRjYm1sdGNHOXlkQ0IzWldGd2IyNUtjMjl1SUdaeWIyMGdKeTR1THk0dUwzUmxlSFIxY21WekwzZGxZWEJ2Ym5NdlpHbHlkSGRsWVhCdmJpNXFjMjl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUkdseWRGZGxZWEJ2YmlCbGVIUmxibVJ6SUZkbFlYQnZibnRjYmx4dUlDQWdJR055WldGMFpVSjFiR3hsZENncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWJXUWdQU0IwYUdsekxtZGhiV1V1YldGclpTNWlhWFJ0WVhCRVlYUmhLREV5TENBeE1pazdYRzRnSUNBZ0lDQWdJRzVsZHlCRFlXNTJZWE5JWld4d1pYSW9kR2hwY3k1aWJXUXNkMlZoY0c5dVNuTnZiaWt1WkhKaGQxUmxlSFIxY21Vb0tUdGNiaUFnSUNCOVhHNWNibjBpWFgwPSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9jb21tb25VdGlsc0pzID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL1V0aWxzLmpzJyk7XG5cbnZhciBfY29tbW9uVXRpbHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25VdGlsc0pzKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKcyA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9DYW52YXNIZWxwZXIuanMnKTtcblxudmFyIF9jb21tb25DYW52YXNIZWxwZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25DYW52YXNIZWxwZXJKcyk7XG5cbnZhciBfdGV4dHVyZXNXZWFwb25zV2VhcG9uSnNvbiA9IHJlcXVpcmUoJy4uLy4uL3RleHR1cmVzL3dlYXBvbnMvd2VhcG9uLmpzb24nKTtcblxudmFyIF90ZXh0dXJlc1dlYXBvbnNXZWFwb25Kc29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RleHR1cmVzV2VhcG9uc1dlYXBvbkpzb24pO1xuXG52YXIgV2VhcG9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWFwb24oZ2FtZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2VhcG9uKTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVdlYXBvbigpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXZWFwb24sIFt7XG4gICAgICAgIGtleTogJ2NyZWF0ZUJ1bGxldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWxsZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmJtZCA9IHRoaXMuZ2FtZS5tYWtlLmJpdG1hcERhdGEoMTIsIDEyKTtcbiAgICAgICAgICAgIG5ldyBfY29tbW9uQ2FudmFzSGVscGVySnMyWydkZWZhdWx0J10odGhpcy5ibWQsIF90ZXh0dXJlc1dlYXBvbnNXZWFwb25Kc29uMlsnZGVmYXVsdCddKS5kcmF3VGV4dHVyZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjcmVhdGVXZWFwb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlV2VhcG9uKCkge1xuICAgICAgICAgICAgdGhpcy53ZWFwb24gPSB0aGlzLmdhbWUuYWRkLndlYXBvbigzMCwgdGhpcy5ibWQpO1xuXG4gICAgICAgICAgICAvLyAgVGhlIGJ1bGxldCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkga2lsbGVkIHdoZW4gaXQgbGVhdmVzIHRoZSB3b3JsZCBib3VuZHNcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLmJ1bGxldEtpbGxUeXBlID0gUGhhc2VyLldlYXBvbi5LSUxMX1dPUkxEX0JPVU5EUztcblxuICAgICAgICAgICAgLy8gIFRoZSBzcGVlZCBhdCB3aGljaCB0aGUgYnVsbGV0IGlzIGZpcmVkXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5idWxsZXRTcGVlZCA9IDQwMDtcblxuICAgICAgICAgICAgLy8gIFNwZWVkLXVwIHRoZSByYXRlIG9mIGZpcmUsIGFsbG93aW5nIHRoZW0gdG8gc2hvb3QgMSBidWxsZXQgZXZlcnkgNjBtc1xuICAgICAgICAgICAgdGhpcy53ZWFwb24uZmlyZVJhdGUgPSA2MDtcblxuICAgICAgICAgICAgLy8gIEFkZCBhIHZhcmlhbmNlIHRvIHRoZSBidWxsZXQgc3BlZWQgYnkgKy0gdGhpcyB2YWx1ZVxuICAgICAgICAgICAgdGhpcy53ZWFwb24uYnVsbGV0U3BlZWRWYXJpYW5jZSA9IDIwMDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndHJhY2tTcHJpdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdHJhY2tTcHJpdGUoc3ByaXRlLCB4LCB5LCByb3RhdGlvbikge1xuICAgICAgICAgICAgdGhpcy53ZWFwb24udHJhY2tTcHJpdGUoc3ByaXRlLCB4LCB5LCByb3RhdGlvbik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2ZpcmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmlyZSgpIHtcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLmZpcmUoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXZWFwb247XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBXZWFwb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwzZGxZWEJ2Ym5NdlYyVmhjRzl1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czJRa0ZCYTBJc2RVSkJRWFZDT3pzN08yOURRVU5vUWl3NFFrRkJPRUk3T3pzN2VVTkJRMmhETEc5RFFVRnZRenM3T3p0SlFVVjBReXhOUVVGTk8wRkJSVm9zWVVGR1RTeE5RVUZOTEVOQlJWZ3NTVUZCU1N4RlFVRkZPemhDUVVaRUxFMUJRVTA3TzBGQlIyNUNMRmxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEycENMRmxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dEJRVU53UWl4WlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03UzBGRGRrSTdPMmxDUVU1blFpeE5RVUZOT3p0bFFWTllMSGRDUVVGSE8wRkJRMWdzWjBKQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU0zUXl4clJFRkJhVUlzU1VGQlNTeERRVUZETEVkQlFVY3NlVU5CUVZrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFRRVU4yUkRzN08yVkJSMWNzZDBKQlFVVTdRVUZEVml4blFrRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3TzBGQlIycEVMR2RDUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRPenM3UVVGSE4wUXNaMEpCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVkQlFVY3NRMEZCUXpzN08wRkJSemxDTEdkQ1FVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdPenRCUVVjeFFpeG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXh0UWtGQmJVSXNSMEZCUnl4SFFVRkhMRU5CUVVNN1UwRkRla003T3p0bFFVZFZMSEZDUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRkZCUVZFc1JVRkJSVHRCUVVOb1F5eG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VTBGRGJrUTdPenRsUVVkSExHZENRVUZITzBGQlEwZ3NaMEpCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVMEZEZEVJN096dFhRWFpEWjBJc1RVRkJUVHM3TzNGQ1FVRk9MRTFCUVUwaUxDSm1hV3hsSWpvaVJEb3ZZWEYxWVM5blpXOTNZWEl2YzNKakwzQnlaV1poWW5NdmQyVmhjRzl1Y3k5WFpXRndiMjR1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1ZYUnBiSE1nWm5KdmJTQW5MaTR2TGk0dlkyOXRiVzl1TDFWMGFXeHpMbXB6Snp0Y2JtbHRjRzl5ZENCRFlXNTJZWE5JWld4d1pYSWdabkp2YlNBbkxpNHZMaTR2WTI5dGJXOXVMME5oYm5aaGMwaGxiSEJsY2k1cWN5YzdYRzVwYlhCdmNuUWdkMlZoY0c5dVNuTnZiaUJtY205dElDY3VMaTh1TGk5MFpYaDBkWEpsY3k5M1pXRndiMjV6TDNkbFlYQnZiaTVxYzI5dUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1YyVmhjRzl1SUh0Y2JseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHZGhiV1VwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbElEMGdaMkZ0WlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqY21WaGRHVkNkV3hzWlhRb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amNtVmhkR1ZYWldGd2IyNG9LVHRjYmlBZ0lDQjlYRzVjYmx4dUlDQWdJR055WldGMFpVSjFiR3hsZENncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWJXUWdQU0IwYUdsekxtZGhiV1V1YldGclpTNWlhWFJ0WVhCRVlYUmhLREV5TENBeE1pazdYRzRnSUNBZ0lDQWdJRzVsZHlCRFlXNTJZWE5JWld4d1pYSW9kR2hwY3k1aWJXUXNkMlZoY0c5dVNuTnZiaWt1WkhKaGQxUmxlSFIxY21Vb0tUdGNiaUFnSUNCOVhHNWNibHh1SUNBZ0lHTnlaV0YwWlZkbFlYQnZiaWdwZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbmRsWVhCdmJpQTlJSFJvYVhNdVoyRnRaUzVoWkdRdWQyVmhjRzl1S0RNd0xDQjBhR2x6TG1KdFpDazdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z0lGUm9aU0JpZFd4c1pYUWdkMmxzYkNCaVpTQmhkWFJ2YldGMGFXTmhiR3g1SUd0cGJHeGxaQ0IzYUdWdUlHbDBJR3hsWVhabGN5QjBhR1VnZDI5eWJHUWdZbTkxYm1SelhHNGdJQ0FnSUNBZ0lIUm9hWE11ZDJWaGNHOXVMbUoxYkd4bGRFdHBiR3hVZVhCbElEMGdVR2hoYzJWeUxsZGxZWEJ2Ymk1TFNVeE1YMWRQVWt4RVgwSlBWVTVFVXp0Y2JseHVJQ0FnSUNBZ0lDQXZMeUFnVkdobElITndaV1ZrSUdGMElIZG9hV05vSUhSb1pTQmlkV3hzWlhRZ2FYTWdabWx5WldSY2JpQWdJQ0FnSUNBZ2RHaHBjeTUzWldGd2IyNHVZblZzYkdWMFUzQmxaV1FnUFNBME1EQTdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z0lGTndaV1ZrTFhWd0lIUm9aU0J5WVhSbElHOW1JR1pwY21Vc0lHRnNiRzkzYVc1bklIUm9aVzBnZEc4Z2MyaHZiM1FnTVNCaWRXeHNaWFFnWlhabGNua2dOakJ0YzF4dUlDQWdJQ0FnSUNCMGFHbHpMbmRsWVhCdmJpNW1hWEpsVW1GMFpTQTlJRFl3TzF4dVhHNGdJQ0FnSUNBZ0lDOHZJQ0JCWkdRZ1lTQjJZWEpwWVc1alpTQjBieUIwYUdVZ1luVnNiR1YwSUhOd1pXVmtJR0o1SUNzdElIUm9hWE1nZG1Gc2RXVmNiaUFnSUNBZ0lDQWdkR2hwY3k1M1pXRndiMjR1WW5Wc2JHVjBVM0JsWldSV1lYSnBZVzVqWlNBOUlESXdNRHRjYmlBZ0lDQjlYRzVjYmx4dUlDQWdJSFJ5WVdOclUzQnlhWFJsS0hOd2NtbDBaU3dnZUN3Z2VTd2djbTkwWVhScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTNaV0Z3YjI0dWRISmhZMnRUY0hKcGRHVW9jM0J5YVhSbExDQjRMQ0I1TENCeWIzUmhkR2x2YmlrN1hHNGdJQ0FnZlZ4dVhHNWNiaUFnSUNCbWFYSmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbmRsWVhCdmJpNW1hWEpsS0NrN1hHNGdJQ0FnZlZ4dVhHNTlJbDE5IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX1dlYXBvbkpzID0gcmVxdWlyZSgnLi9XZWFwb24uanMnKTtcblxudmFyIF9XZWFwb25KczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9XZWFwb25Kcyk7XG5cbnZhciBfRGlydFdlYXBvbkpzID0gcmVxdWlyZSgnLi9EaXJ0V2VhcG9uLmpzJyk7XG5cbnZhciBfRGlydFdlYXBvbkpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RpcnRXZWFwb25Kcyk7XG5cbnZhciBXZWFwb25GYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWFwb25GYWN0b3J5KGdhbWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYXBvbkZhY3RvcnkpO1xuXG4gICAgICAgIHRoaXMud2VhcG9uX3R5cGUgPSBbJ2Jhc2ljJywgJ2RpcnQnXTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXZWFwb25GYWN0b3J5LCBbe1xuICAgICAgICBrZXk6ICdjcmVhdGVXZWFwb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlV2VhcG9uKHR5cGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJiYXNpY1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IF9XZWFwb25KczJbJ2RlZmF1bHQnXSh0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkaXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgX0RpcnRXZWFwb25KczJbJ2RlZmF1bHQnXSh0aGlzLmdhbWUpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgX1dlYXBvbkpzMlsnZGVmYXVsdCddKHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV2VhcG9uRmFjdG9yeTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFdlYXBvbkZhY3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXdjbVZtWVdKekwzZGxZWEJ2Ym5NdlYyVmhjRzl1Um1GamRHOXllUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN2QwSkJRVzFDTEdGQlFXRTdPenM3TkVKQlExUXNhVUpCUVdsQ096czdPMGxCUlc1Q0xHRkJRV0U3UVVGSmJrSXNZVUZLVFN4aFFVRmhMRU5CU1d4Q0xFbEJRVWtzUlVGQlJUczRRa0ZLUkN4aFFVRmhPenRoUVVVNVFpeFhRVUZYTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVNc1RVRkJUU3hEUVVGRE96dEJRVWN4UWl4WlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dExRVU53UWpzN2FVSkJUbWRDTEdGQlFXRTdPMlZCVTJ4Q0xITkNRVUZETEVsQlFVa3NSVUZCUlR0QlFVTm1MRzlDUVVGUExFbEJRVWs3UVVGRFVDeHhRa0ZCU3l4UFFVRlBPMEZCUTFRc01rSkJRVThzTUVKQlFWY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRVUVzUVVGRGFFTXNjVUpCUVVzc1RVRkJUVHRCUVVOU0xESkNRVUZQTERoQ1FVRmxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVUZCTEVGQlEzQkRPMEZCUTBjc01rSkJRVThzTUVKQlFWY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRVUVzWVVGRGJrTTdVMEZEU2pzN08xZEJiRUpuUWl4aFFVRmhPenM3Y1VKQlFXSXNZVUZCWVNJc0ltWnBiR1VpT2lKRU9pOWhjWFZoTDJkbGIzZGhjaTl6Y21NdmNISmxabUZpY3k5M1pXRndiMjV6TDFkbFlYQnZia1poWTNSdmNua3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVjJWaGNHOXVJR1p5YjIwZ0p5NHZWMlZoY0c5dUxtcHpKenRjYm1sdGNHOXlkQ0JFYVhKMFYyVmhjRzl1SUdaeWIyMGdKeTR2UkdseWRGZGxZWEJ2Ymk1cWN5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGZGxZWEJ2YmtaaFkzUnZjbmtnZTF4dVhHNGdJQ0FnZDJWaGNHOXVYM1I1Y0dVZ1BTQmJKMkpoYzJsakp5d25aR2x5ZENkZE8xeHVYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9aMkZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVWdQU0JuWVcxbE8xeHVJQ0FnSUgxY2JseHVYRzRnSUNBZ1kzSmxZWFJsVjJWaGNHOXVLSFI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdjM2RwZEdOb0tIUjVjR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNCY0ltSmhjMmxqWENJZ09pQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dWMlZoY0c5dUtIUm9hWE11WjJGdFpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRndpWkdseWRGd2lJRG9nWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUVScGNuUlhaV0Z3YjI0b2RHaHBjeTVuWVcxbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFFnT2lCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1YyVmhjRzl1S0hSb2FYTXVaMkZ0WlNrN1hHNGdJQ0FnSUNBZ0lIMGdYRzRnSUNBZ2ZWeHVYRzU5SWwxOSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIENvbm5lY3RlZEhhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgZnVuY3Rpb24gQ29ubmVjdGVkSGFuZGxlcihnYW1lKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdGVkSGFuZGxlcik7XG5cbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICB9XG5cbiAgIF9jcmVhdGVDbGFzcyhDb25uZWN0ZWRIYW5kbGVyLCBbe1xuICAgICAga2V5OiAnaGFuZGxlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGUoZGF0YSkge1xuICAgICAgICAgdGhpcy5nYW1lLmdlb3dhci5zb2NrZXRSZWFkeSA9IHRydWU7XG4gICAgICAgICB0aGlzLmdhbWUuZ2Vvd2FyLnBsYXllcklkID0gZGF0YS5pZDtcbiAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJJZCA9ICcgKyB0aGlzLmdhbWUuZ2Vvd2FyLnBsYXllcklkKTtcbiAgICAgIH1cbiAgIH1dKTtcblxuICAgcmV0dXJuIENvbm5lY3RlZEhhbmRsZXI7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDb25uZWN0ZWRIYW5kbGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl6YjJOclpYUXZRMjl1Ym1WamRHVmtTR0Z1Wkd4bGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMGxCUVhGQ0xHZENRVUZuUWp0QlFVVndRaXhaUVVaSkxHZENRVUZuUWl4RFFVVnVRaXhKUVVGSkxFVkJRVU03TkVKQlJrWXNaMEpCUVdkQ096dEJRVWMxUWl4VlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dEpRVU51UWpzN1owSkJTbU1zWjBKQlFXZENPenRoUVUxNlFpeG5Ra0ZCUXl4SlFVRkpMRVZCUVVNN1FVRkRWQ3hoUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRM0JETEdGQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRPMEZCUTNCRExHZENRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRQUVVONlJEczdPMVZCVm1Nc1owSkJRV2RDT3pzN2NVSkJRV2hDTEdkQ1FVRm5RaUlzSW1acGJHVWlPaUpFT2k5aGNYVmhMMmRsYjNkaGNpOXpjbU12YzI5amEyVjBMME52Ym01bFkzUmxaRWhoYm1Sc1pYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkRiMjV1WldOMFpXUklZVzVrYkdWeWUxeHVYRzRnSUNBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhuWVcxbEtYdGNiaUFnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaU0E5SUdkaGJXVTdYRzRnSUNBZ0lDQjlJQ0JjYmx4dUlDQWdJQ0FnYUdGdVpHeGxLR1JoZEdFcGUxeHVJQ0FnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbWRsYjNkaGNpNXpiMk5yWlhSU1pXRmtlU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1WjJWdmQyRnlMbkJzWVhsbGNrbGtJRDBnWkdGMFlTNXBaRHRjYmlBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktDZHdiR0Y1WlhKSlpDQTlJQ2NnS3lCMGFHbHpMbWRoYldVdVoyVnZkMkZ5TG5Cc1lYbGxja2xrS1RzZ1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ1hHNTlJbDE5IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgUGxheWVyTW92ZUhhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgZnVuY3Rpb24gUGxheWVyTW92ZUhhbmRsZXIoZ2FtZSkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsYXllck1vdmVIYW5kbGVyKTtcblxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgIH1cblxuICAgX2NyZWF0ZUNsYXNzKFBsYXllck1vdmVIYW5kbGVyLCBbe1xuICAgICAga2V5OiAnaGFuZGxlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGUoZGF0YSkge1xuICAgICAgICAgdmFyIHBsYXllcklkID0gZGF0YS5pZDtcbiAgICAgICAgIHZhciB4ID0gZGF0YS54O1xuICAgICAgICAgdmFyIHkgPSBkYXRhLnk7XG4gICAgICAgICBjb25zb2xlLmxvZygncGxheWVySWQgPSAnICsgcGxheWVySWQgKyAnIG1vdmUgeCA9ICcgKyB4ICsgJyB5ID0gJyArIHkpO1xuICAgICAgfVxuICAgfV0pO1xuXG4gICByZXR1cm4gUGxheWVyTW92ZUhhbmRsZXI7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQbGF5ZXJNb3ZlSGFuZGxlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5emIyTnJaWFF2VUd4aGVXVnlUVzkyWlVoaGJtUnNaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0SlFVRnhRaXhwUWtGQmFVSTdRVUZGY2tJc1dVRkdTU3hwUWtGQmFVSXNRMEZGY0VJc1NVRkJTU3hGUVVGRE96UkNRVVpHTEdsQ1FVRnBRanM3UVVGSE4wSXNWVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03U1VGRGJrSTdPMmRDUVVwakxHbENRVUZwUWpzN1lVRk5NVUlzWjBKQlFVTXNTVUZCU1N4RlFVRkRPMEZCUTFRc1lVRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXp0QlFVTjJRaXhoUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJZc1lVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTm1MR2RDUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdGQlFXRXNSMEZCUnl4UlFVRlJMRWRCUVVjc1dVRkJXU3hIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1QwRkRla1U3T3p0VlFWaGpMR2xDUVVGcFFqczdPM0ZDUVVGcVFpeHBRa0ZCYVVJaUxDSm1hV3hsSWpvaVJEb3ZZWEYxWVM5blpXOTNZWEl2YzNKakwzTnZZMnRsZEM5UWJHRjVaWEpOYjNabFNHRnVaR3hsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCc1lYbGxjazF2ZG1WSVlXNWtiR1Z5ZTF4dVhHNGdJQ0FnSUNCamIyNXpkSEoxWTNSdmNpaG5ZVzFsS1h0Y2JpQWdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTQTlJR2RoYldVN1hHNGdJQ0FnSUNCOUlDQmNibHh1SUNBZ0lDQWdhR0Z1Wkd4bEtHUmhkR0VwZTF4dUlDQWdJQ0FnSUNBZ2RtRnlJSEJzWVhsbGNrbGtJRDBnWkdGMFlTNXBaRHRjYmlBZ0lDQWdJQ0FnSUhaaGNpQjRJRDBnWkdGMFlTNTRPMXh1SUNBZ0lDQWdJQ0FnZG1GeUlIa2dQU0JrWVhSaExuazdYRzRnSUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlnbmNHeGhlV1Z5U1dRZ1BTQW5JQ3NnY0d4aGVXVnlTV1FnS3lBbklHMXZkbVVnZUNBOUlDY2dLeUI0SUNzZ0p5QjVJRDBnSnlBcklIa3BPeUJjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0JjYm4waVhYMD0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfQ29ubmVjdGVkSGFuZGxlckpzID0gcmVxdWlyZSgnLi9Db25uZWN0ZWRIYW5kbGVyLmpzJyk7XG5cbnZhciBfQ29ubmVjdGVkSGFuZGxlckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nvbm5lY3RlZEhhbmRsZXJKcyk7XG5cbnZhciBfUGxheWVyTW92ZUhhbmRsZXJKcyA9IHJlcXVpcmUoJy4vUGxheWVyTW92ZUhhbmRsZXIuanMnKTtcblxudmFyIF9QbGF5ZXJNb3ZlSGFuZGxlckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BsYXllck1vdmVIYW5kbGVySnMpO1xuXG52YXIgU29ja2V0SGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU29ja2V0SGFuZGxlcihzaW8sIGdhbWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldEhhbmRsZXIpO1xuXG4gICAgICAgIHRoaXMuc2lvID0gc2lvO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5pdEhhbmRsZXJzKHRoaXMuZ2FtZSk7XG4gICAgICAgIHRoaXMuc2lvLm9uKCdwdWxsJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHRoYXQudXBkYXRlKGRhdGEsIHRoYXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU29ja2V0SGFuZGxlciwgW3tcbiAgICAgICAga2V5OiAncHVzaCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKGRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuZ2Vvd2FyLnNvY2tldFJlYWR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW8uZW1pdCgncHVzaCcsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1cGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKGRhdGEsIHRoYXQpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzW2RhdGEubmFtZV0uaGFuZGxlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbml0SGFuZGxlcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdEhhbmRsZXJzKGdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuY29ubmVjdGVkID0gbmV3IF9Db25uZWN0ZWRIYW5kbGVySnMyWydkZWZhdWx0J10oZ2FtZSk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLm1vdmUgPSBuZXcgX1BsYXllck1vdmVIYW5kbGVySnMyWydkZWZhdWx0J10oZ2FtZSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU29ja2V0SGFuZGxlcjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNvY2tldEhhbmRsZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXpiMk5yWlhRdlUyOWphMlYwU0dGdVpHeGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN2EwTkJRVFpDTEhWQ1FVRjFRanM3T3p0dFEwRkRkRUlzZDBKQlFYZENPenM3TzBsQlJXcERMR0ZCUVdFN1FVRkRia0lzWVVGRVRTeGhRVUZoTEVOQlEyeENMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVU3T0VKQlJFNHNZVUZCWVRzN1FVRkZNVUlzV1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNN1FVRkRaaXhaUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnFRaXhaUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEYUVJc1dVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkROMElzV1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRkxGVkJRVlVzU1VGQlNTeEZRVUZGTzBGQlEyaERMR2RDUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVNelFpeERRVUZETEVOQlFVTTdTMEZEVGpzN2FVSkJWR2RDTEdGQlFXRTdPMlZCVnpGQ0xHTkJRVU1zU1VGQlNTeEZRVUZGTzBGQlExQXNaMEpCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZPMEZCUXpsQ0xHOUNRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdZVUZETDBJN1UwRkRTanM3TzJWQlJVc3NaMEpCUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJUdEJRVU5tTEdkQ1FVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRFdDeHZRa0ZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yRkJRM3BETzFOQlEwbzdPenRsUVVkWExITkNRVUZETEVsQlFVa3NSVUZCUlR0QlFVTm1MR2RDUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnVRaXhuUWtGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRWRCUVVjc2IwTkJRWEZDTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNKRUxHZENRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1IwRkJSeXh4UTBGQmMwSXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRjRVE3T3p0WFFUVkNaMElzWVVGQllUczdPM0ZDUVVGaUxHRkJRV0VpTENKbWFXeGxJam9pUkRvdllYRjFZUzluWlc5M1lYSXZjM0pqTDNOdlkydGxkQzlUYjJOclpYUklZVzVrYkdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRU52Ym01bFkzUmxaRWhoYm1Sc1pYSWdabkp2YlNBbkxpOURiMjV1WldOMFpXUklZVzVrYkdWeUxtcHpKenRjYm1sdGNHOXlkQ0JRYkdGNVpYSk5iM1psU0dGdVpHeGxjaUJtY205dElDY3VMMUJzWVhsbGNrMXZkbVZJWVc1a2JHVnlMbXB6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVTI5amEyVjBTR0Z1Wkd4bGNpQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jMmx2TENCbllXMWxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMmx2SUQwZ2MybHZPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1VnUFNCbllXMWxPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RHaGhkQ0E5SUhSb2FYTTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXBkRWhoYm1Sc1pYSnpLSFJvYVhNdVoyRnRaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMmx2TG05dUtDZHdkV3hzSnl3Z1puVnVZM1JwYjI0Z0tHUmhkR0VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvWVhRdWRYQmtZWFJsS0dSaGRHRXNJSFJvWVhRcE8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQndkWE5vS0dSaGRHRXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WjJGdFpTNW5aVzkzWVhJdWMyOWphMlYwVW1WaFpIa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJsdkxtVnRhWFFvSjNCMWMyZ25MQ0JrWVhSaEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lIVndaR0YwWlNoa1lYUmhMQ0IwYUdGMEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoa1lYUmhMbTVoYldVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhR0Z1Wkd4bGNuTmJaR0YwWVM1dVlXMWxYUzVvWVc1a2JHVW9aR0YwWVNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNibHh1SUNBZ0lHbHVhWFJJWVc1a2JHVnljeWhuWVcxbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHRnVaR3hsY25NZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9ZVzVrYkdWeWN5NWpiMjV1WldOMFpXUWdQU0J1WlhjZ1EyOXVibVZqZEdWa1NHRnVaR3hsY2lobllXMWxLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9ZVzVrYkdWeWN5NXRiM1psSUQwZ2JtVjNJRkJzWVhsbGNrMXZkbVZJWVc1a2JHVnlLR2RoYldVcE8xeHVJQ0FnSUgxY2JuMGlYWDA9IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX3NvY2tldFNvY2tldEhhbmRsZXJKcyA9IHJlcXVpcmUoXCIuLi9zb2NrZXQvU29ja2V0SGFuZGxlci5qc1wiKTtcblxudmFyIF9zb2NrZXRTb2NrZXRIYW5kbGVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc29ja2V0U29ja2V0SGFuZGxlckpzKTtcblxudmFyIEJvb3QgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvb3QoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb290KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQm9vdCwgW3tcbiAgICAgICAga2V5OiAncHJlbG9hZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVsb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwcmVsb2FkZXInLCAnYXNzZXRzL2ltYWdlcy9sb2FkaW5nX2Jhci5wbmcnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5nZW93YXIgPSB7fTsgLy9uYW1lc3BhY2VcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5nZW93YXIuc29ja2V0SGFuZGxlciA9IG5ldyBfc29ja2V0U29ja2V0SGFuZGxlckpzMlsnZGVmYXVsdCddKGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKSwgdGhpcy5nYW1lKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5tYXhQb2ludGVycyA9IDE7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWQnKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCb290O1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQm9vdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5emRHRjBaWE12UW05dmRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3Y1VOQlFUQkNMRFJDUVVFMFFqczdPenRKUVVWcVF5eEpRVUZKTzJGQlFVb3NTVUZCU1RzNFFrRkJTaXhKUVVGSk96czdhVUpCUVVvc1NVRkJTVHM3WlVGRFpDeHRRa0ZCUnp0QlFVTk9MR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WFFVRlhMRVZCUVVVc0swSkJRU3RDTEVOQlFVTXNRMEZCUXp0VFFVTnFSVHM3TzJWQlJVc3NhMEpCUVVjN1FVRkRUQ3huUWtGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM1JDTEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eGhRVUZoTEVkQlFVY3NkVU5CUVd0Q0xFVkJRVVVzUTBGQlF5eDFRa0ZCZFVJc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTXpSaXhuUWtGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5vUXl4blFrRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xTkJRM0JET3pzN1YwRldaMElzU1VGQlNUczdPM0ZDUVVGS0xFbEJRVWtpTENKbWFXeGxJam9pUkRvdllYRjFZUzluWlc5M1lYSXZjM0pqTDNOMFlYUmxjeTlDYjI5MExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRk52WTJ0bGRFaGhibVJzWlhJZ1puSnZiU0JjSWk0dUwzTnZZMnRsZEM5VGIyTnJaWFJJWVc1a2JHVnlMbXB6WENJN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVKdmIzUWdlMXh1SUNBZ0lIQnlaV3h2WVdRb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOWhaQzVwYldGblpTZ25jSEpsYkc5aFpHVnlKeXdnSjJGemMyVjBjeTlwYldGblpYTXZiRzloWkdsdVoxOWlZWEl1Y0c1bkp5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kzSmxZWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1kaGJXVXVaMlZ2ZDJGeUlEMGdlMzA3SUM4dmJtRnRaWE53WVdObFhHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNW5aVzkzWVhJdWMyOWphMlYwU0dGdVpHeGxjaUE5SUc1bGR5QlRiMk5yWlhSSVlXNWtiR1Z5S0dsdktDZG9kSFJ3T2k4dmJHOWpZV3hvYjNOME9qTXdNREFuS1N3Z2RHaHBjeTVuWVcxbEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bllXMWxMbWx1Y0hWMExtMWhlRkJ2YVc1MFpYSnpJRDBnTVR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExuTjBZWFJsTG5OMFlYSjBLQ2R3Y21Wc2IyRmtKeWs3WEc0Z0lDQWdmVnh1ZlNKZGZRPT0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9jb21tb25VdGlsc0pzID0gcmVxdWlyZSgnLi4vY29tbW9uL1V0aWxzLmpzJyk7XG5cbnZhciBfY29tbW9uVXRpbHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb25VdGlsc0pzKTtcblxudmFyIF9wcmVmYWJzUGxheWVyc1BsYXllckZhY3RvcnlKcyA9IHJlcXVpcmUoJy4uL3ByZWZhYnMvcGxheWVycy9QbGF5ZXJGYWN0b3J5LmpzJyk7XG5cbnZhciBfcHJlZmFic1BsYXllcnNQbGF5ZXJGYWN0b3J5SnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZmFic1BsYXllcnNQbGF5ZXJGYWN0b3J5SnMpO1xuXG52YXIgR2FtZSA9IChmdW5jdGlvbiAoX1BoYXNlciRTdGF0ZSkge1xuICAgIF9pbmhlcml0cyhHYW1lLCBfUGhhc2VyJFN0YXRlKTtcblxuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHYW1lKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihHYW1lLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEdhbWUsIFt7XG4gICAgICAgIGtleTogJ2NyZWF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgICAgICAvL3N0YWdlXG4gICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMjgyNjI2JztcbiAgICAgICAgICAgIC8vZmFjdG9yaWVzXG4gICAgICAgICAgICB0aGlzLnBsYXllckZhY3RvcnkgPSBuZXcgX3ByZWZhYnNQbGF5ZXJzUGxheWVyRmFjdG9yeUpzMlsnZGVmYXVsdCddKHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAvL3BsYXllclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllckZhY3RvcnkuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMucGxheWVyKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5nZW93YXIuc29ja2V0SGFuZGxlci5wdXNoKHsgbmFtZTogXCJtb3ZlXCIsIGlkOiB0aGlzLmdhbWUuZ2Vvd2FyLnBsYXllcklkLCB4OiB0aGlzLnBsYXllci54LCB5OiB0aGlzLnBsYXllci55IH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEdhbWU7XG59KShQaGFzZXIuU3RhdGUpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBHYW1lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1E2TDJGeGRXRXZaMlZ2ZDJGeUwzTnlZeTl6ZEdGMFpYTXZSMkZ0WlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3paQ1FVRnJRaXh2UWtGQmIwSTdPenM3TmtOQlExb3NjVU5CUVhGRE96czdPMGxCUlRGRExFbEJRVWs3WTBGQlNpeEpRVUZKT3p0aFFVRktMRWxCUVVrN09FSkJRVW9zU1VGQlNUczdiVU5CUVVvc1NVRkJTVHM3TzJsQ1FVRktMRWxCUVVrN08yVkJSV1lzYTBKQlFVYzdPMEZCUlV3c1owSkJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTNKRUxHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhsUVVGbExFZEJRVWNzVTBGQlV5eERRVUZET3p0QlFVVTFReXhuUWtGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl3clEwRkJhMElzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPenRCUVVWc1JDeG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMEZCUTJoRUxHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUTNaRE96czdaVUZIU3l4clFrRkJSenRCUVVOTUxHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSeXhGUVVGRkxFVkJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJReTlJT3pzN1YwRm9RbWRDTEVsQlFVazdSMEZCVXl4TlFVRk5MRU5CUVVNc1MwRkJTenM3Y1VKQlFYcENMRWxCUVVraUxDSm1hV3hsSWpvaVJEb3ZZWEYxWVM5blpXOTNZWEl2YzNKakwzTjBZWFJsY3k5SFlXMWxMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZWMGFXeHpJR1p5YjIwZ0p5NHVMMk52YlcxdmJpOVZkR2xzY3k1cWN5YzdYRzVwYlhCdmNuUWdVR3hoZVdWeVJtRmpkRzl5ZVNCbWNtOXRJQ2N1TGk5d2NtVm1ZV0p6TDNCc1lYbGxjbk12VUd4aGVXVnlSbUZqZEc5eWVTNXFjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRWRoYldVZ1pYaDBaVzVrY3lCUWFHRnpaWEl1VTNSaGRHVWdlMXh1WEc0Z0lDQWdZM0psWVhSbEtDa2dlMXh1SUNBZ0lDQWdJQ0F2TDNOMFlXZGxYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV3YUhsemFXTnpMbk4wWVhKMFUzbHpkR1Z0S0ZCb1lYTmxjaTVRYUhsemFXTnpMa0ZTUTBGRVJTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV6ZEdGblpTNWlZV05yWjNKdmRXNWtRMjlzYjNJZ1BTQW5Jekk0TWpZeU5pYzdYRzRnSUNBZ0lDQWdJQzh2Wm1GamRHOXlhV1Z6WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVdWeVJtRmpkRzl5ZVNBOUlHNWxkeUJRYkdGNVpYSkdZV04wYjNKNUtIUm9hWE11WjJGdFpTazdYRzRnSUNBZ0lDQWdJQzh2Y0d4aGVXVnlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlV1Z5SUQwZ2RHaHBjeTV3YkdGNVpYSkdZV04wYjNKNUxtTnlaV0YwWlZCc1lYbGxjaWdwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWRoYldVdVlXUmtMbVY0YVhOMGFXNW5LSFJvYVhNdWNHeGhlV1Z5S1R0Y2JpQWdJQ0I5WEc1Y2JseHVJQ0FnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWVcxbExtZGxiM2RoY2k1emIyTnJaWFJJWVc1a2JHVnlMbkIxYzJnb2UyNWhiV1U2SUZ3aWJXOTJaVndpSUN3Z2FXUWdPaUIwYUdsekxtZGhiV1V1WjJWdmQyRnlMbkJzWVhsbGNrbGtMQ0I0SURvZ2RHaHBjeTV3YkdGNVpYSXVlQ3dnZVNBNklIUm9hWE11Y0d4aGVXVnlMbmtnZlNrN1hHNGdJQ0FnZlZ4dVhHNTlJbDE5IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFByZWxvYWQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByZWxvYWQoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmVsb2FkKTtcblxuICAgICAgICB0aGlzLmFzc2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQcmVsb2FkLCBbe1xuICAgICAgICBrZXk6ICdwcmVsb2FkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZWxvYWQoKSB7fVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MjYyNic7XG4gICAgICAgICAgICB0aGlzLmFzc2V0ID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53aWR0aCAvIDIsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLCAncHJlbG9hZGVyJyk7XG4gICAgICAgICAgICB0aGlzLmFzc2V0LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgICAgICB0aGlzLmFzc2V0LnNjYWxlLnNldFRvKDAuMywgMC4zKTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5vbkxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmFzc2V0KTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwbGF5JywgJ2Fzc2V0cy9pbWFnZXMvcGxheS5wbmcnKTtcblxuICAgICAgICAgICAgLy9zdGFydCBsb2FkXG4gICAgICAgICAgICB0aGlzLmxvYWQuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3N0YXJ0U2NyZWVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uTG9hZENvbXBsZXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTG9hZENvbXBsZXRlKCkge1xuICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUHJlbG9hZDtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFByZWxvYWQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUTZMMkZ4ZFdFdloyVnZkMkZ5TDNOeVl5OXpkR0YwWlhNdlVISmxiRzloWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08wbEJRWEZDTEU5QlFVODdRVUZGWWl4aFFVWk5MRTlCUVU4c1IwRkZWanM0UWtGR1J5eFBRVUZQT3p0QlFVZHdRaXhaUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnNRaXhaUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0TFFVTjBRanM3YVVKQlRHZENMRTlCUVU4N08yVkJUMnBDTEcxQ1FVRkhMRVZCUTFRN096dGxRVVZMTEd0Q1FVRkhPMEZCUTB3c1owSkJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR1ZCUVdVc1IwRkJSeXhUUVVGVExFTkJRVU03UVVGRE5VTXNaMEpCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRCUVVOeVJpeG5Ra0ZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOc1F5eG5Ra0ZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRmFrTXNaMEpCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlF6VkVMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXpzN1FVRkZka01zWjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlF5eDNRa0ZCZDBJc1EwRkJReXhEUVVGRE96czdRVUZIYWtRc1owSkJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1UwRkRja0k3T3p0bFFVVkxMR3RDUVVGSE96dEJRVVZNTEdkQ1FVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3UVVGRFdpeHZRa0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMkZCUTNoRE8xTkJSVW83T3p0bFFVVmhMREJDUVVGSE8wRkJRMklzWjBKQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8xTkJRM0pDT3pzN1YwRnVRMmRDTEU5QlFVODdPenR4UWtGQlVDeFBRVUZQSWl3aVptbHNaU0k2SWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5emRHRjBaWE12VUhKbGJHOWhaQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ5Wld4dllXUWdlMXh1WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVhOelpYUWdQU0J1ZFd4c08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5KbFlXUjVJRDBnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NISmxiRzloWkNncElIdGNiaUFnSUNCOVhHNWNiaUFnSUNCamNtVmhkR1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJGdFpTNXpkR0ZuWlM1aVlXTnJaM0p2ZFc1a1EyOXNiM0lnUFNBbkl6STRNall5TmljN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVhOelpYUWdQU0IwYUdsekxtRmtaQzV6Y0hKcGRHVW9kR2hwY3k1bllXMWxMbmRwWkhSb0lDOGdNaXdnZEdocGN5NW5ZVzFsTG1obGFXZG9kQ0F2SURJc0lDZHdjbVZzYjJGa1pYSW5LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhjM05sZEM1aGJtTm9iM0l1YzJWMFZHOG9NQzQxTENBd0xqVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtRnpjMlYwTG5OallXeGxMbk5sZEZSdktEQXVNeXdnTUM0ektUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxteHZZV1F1YjI1TWIyRmtRMjl0Y0d4bGRHVXVZV1JrVDI1alpTaDBhR2x6TG05dVRHOWhaRU52YlhCc1pYUmxMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyRmtMbk5sZEZCeVpXeHZZV1JUY0hKcGRHVW9kR2hwY3k1aGMzTmxkQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJGa0xtbHRZV2RsS0Nkd2JHRjVKeXduWVhOelpYUnpMMmx0WVdkbGN5OXdiR0Y1TG5CdVp5Y3BPMXh1WEc0Z0lDQWdJQ0FnSUM4dmMzUmhjblFnYkc5aFpGeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dllXUXVjM1JoY25Rb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMWNHUmhkR1VvS1NCN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjbVZoWkhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1emRHRjBaUzV6ZEdGeWRDZ25jM1JoY25SVFkzSmxaVzRuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IyNU1iMkZrUTI5dGNHeGxkR1VvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y21WaFpIa2dQU0IwY25WbE8xeHVJQ0FnSUgxY2JuMGlYWDA9IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFN0YXJ0U2NyZWVuID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGFydFNjcmVlbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXJ0U2NyZWVuKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RhcnRTY3JlZW4sIFt7XG4gICAgICAgIGtleTogJ2NyZWF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMyODI2MjYnO1xuICAgICAgICAgICAgdGhpcy5wbGF5ID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53aWR0aCAvIDIsIHRoaXMuZ2FtZS5oZWlnaHQgLyAyLCAncGxheScpO1xuICAgICAgICAgICAgdGhpcy5wbGF5LmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgICAgICB0aGlzLnBsYXkuc2NhbGUuc2V0VG8oMC4zLCAwLjMpO1xuICAgICAgICAgICAgdGhpcy5wbGF5LmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBsYXkuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLnN0YXJ0UGxheSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBsYXkuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCh0aGlzLm1vdXNlT3ZlciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBsYXkuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKHRoaXMubW91c2VPdXQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdGFydFBsYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRQbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdtb3VzZU92ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbW91c2VPdmVyKCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ21vdXNlT3V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1vdXNlT3V0KCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3RhcnRTY3JlZW47XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTdGFydFNjcmVlbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtRNkwyRnhkV0V2WjJWdmQyRnlMM055WXk5emRHRjBaWE12VTNSaGNuUlRZM0psWlc0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dEpRVUZ4UWl4WFFVRlhPMkZCUVZnc1YwRkJWenM0UWtGQldDeFhRVUZYT3pzN2FVSkJRVmdzVjBGQlZ6czdaVUZEZEVJc2EwSkJRVWM3UVVGRFRDeG5Ra0ZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeEhRVUZITEZOQlFWTXNRMEZCUXp0QlFVTTFReXhuUWtGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBGQlF5OUZMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEycERMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEyaERMR2RDUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRPVUlzWjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU4yUkN4blFrRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNaRUxHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRGVFUTdPenRsUVVWUkxIRkNRVUZITzBGQlExSXNaMEpCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUXpWQ096czdaVUZGVVN4eFFrRkJSenRCUVVOU0xHZENRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTTNRenM3TzJWQlJVOHNiMEpCUVVjN1FVRkRVQ3huUWtGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVMEZETjBNN096dFhRWFJDWjBJc1YwRkJWenM3TzNGQ1FVRllMRmRCUVZjaUxDSm1hV3hsSWpvaVJEb3ZZWEYxWVM5blpXOTNZWEl2YzNKakwzTjBZWFJsY3k5VGRHRnlkRk5qY21WbGJpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGTjBZWEowVTJOeVpXVnVJSHRjYmlBZ0lDQmpjbVZoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyRnRaUzV6ZEdGblpTNWlZV05yWjNKdmRXNWtRMjlzYjNJZ1BTQW5Jekk0TWpZeU5pYzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlU0E5SUhSb2FYTXVZV1JrTG5Od2NtbDBaU2gwYUdsekxtZGhiV1V1ZDJsa2RHZ2dMeUF5TENCMGFHbHpMbWRoYldVdWFHVnBaMmgwSUM4Z01pd2dKM0JzWVhrbktUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2JHRjVMbUZ1WTJodmNpNXpaWFJVYnlnd0xqVXNJREF1TlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVTNXpZMkZzWlM1elpYUlVieWd3TGpNc0lEQXVNeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVM1cGJuQjFkRVZ1WVdKc1pXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYa3VaWFpsYm5SekxtOXVTVzV3ZFhSRWIzZHVMbUZrWkNoMGFHbHpMbk4wWVhKMFVHeGhlU3dnZEdocGN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlUzVsZG1WdWRITXViMjVKYm5CMWRFOTJaWEl1WVdSa0tIUm9hWE11Ylc5MWMyVlBkbVZ5TENCMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiR0Y1TG1WMlpXNTBjeTV2YmtsdWNIVjBUM1YwTG1Ga1pDaDBhR2x6TG0xdmRYTmxUM1YwTENCMGFHbHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZEZCc1lYa29LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdWMzUmhjblFvSjJkaGJXVW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnRiM1Z6WlU5MlpYSW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMkZ0WlM1allXNTJZWE11YzNSNWJHVXVZM1Z5YzI5eUlEMGdKM0J2YVc1MFpYSW5PMXh1SUNBZ0lIMWNibHh1SUNBZ0lHMXZkWE5sVDNWMEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZGhiV1V1WTJGdWRtRnpMbk4wZVd4bExtTjFjbk52Y2lBOUlDZGtaV1poZFd4MEp6dGNiaUFnSUNCOVhHNWNibjBnSWwxOSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImhlYWRcIjoge1xuICAgICAgICBcInN0eWxlXCI6IFwic3Ryb2tlXCIsXG4gICAgICAgIFwiY3R4UHJvcFwiIDoge1xuICAgICAgICAgICAgXCJsaW5lV2l0aFwiIDogXCIyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIiR7Y2FudmFzLmhlaWdodH1cIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIke2NhbnZhcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIiR7Y2FudmFzLndpZHRofVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiYm9keVwiOiB7XG4gICAgICAgIFwic3R5bGVcIjogXCJmaWxsXCIsXG4gICAgICAgIFwiZHJhd1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcIm1vdmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMuaGVpZ2h0fVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiMFwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodH1cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImhlYWRcIjoge1xuICAgICAgICBcInN0eWxlXCI6IFwic3Ryb2tlXCIsXG4gICAgICAgIFwiY3R4UHJvcFwiIDoge1xuICAgICAgICAgICAgXCJsaW5lV2l0aFwiIDogXCIyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIiR7Y2FudmFzLmhlaWdodH1cIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIke2NhbnZhcy5oZWlnaHQvMn1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIiR7Y2FudmFzLndpZHRofVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiYm9keVwiOiB7XG4gICAgICAgIFwic3R5bGVcIjogXCJmaWxsXCIsXG4gICAgICAgIFwiZHJhd1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImFyY1wiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiMTVcIixcbiAgICAgICAgICAgICAgICBcInJhZGl1c1wiIDogXCIxNFwiLFxuICAgICAgICAgICAgICAgIFwiYXJjXCIgOiBcIiR7MiAqIE1hdGguUEl9XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiaGVhZFwiOiB7XG4gICAgICAgIFwic3R5bGVcIjogXCJzdHJva2VcIixcbiAgICAgICAgXCJjdHhQcm9wXCIgOiB7XG4gICAgICAgICAgICBcImxpbmVXaXRoXCIgOiBcIjJcIlxuICAgICAgICB9LFxuICAgICAgICBcImRyYXdcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMuaGVpZ2h0fVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodC8yfVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMud2lkdGh9XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiJHtjYW52YXMuaGVpZ2h0LzJ9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgXCJib2R5XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiBcImZpbGxcIixcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIke2NhbnZhcy5oZWlnaHR9XCIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IFwiMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZHJhd1R5cGVcIjogXCJsaW5lXCIsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IFwiJHtjYW52YXMuaGVpZ2h0fVwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIiR7Y2FudmFzLmhlaWdodH1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIke2NhbnZhcy5oZWlnaHR9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cz17XG4gICAgXCJib2R5XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiBcImZpbGxcIixcbiAgICAgICAgXCJkcmF3XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibW92ZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImxpbmVcIixcbiAgICAgICAgICAgICAgICBcInhcIjogXCIxMlwiLFxuICAgICAgICAgICAgICAgIFwieVwiOiBcIjZcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRyYXdUeXBlXCI6IFwibGluZVwiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjBcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCIxMlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiYm9keVwiOiB7XG4gICAgICAgIFwic3R5bGVcIjogXCJmaWxsXCIsXG4gICAgICAgIFwiZHJhd1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJkcmF3VHlwZVwiOiBcImFyY1wiLFxuICAgICAgICAgICAgICAgIFwieFwiOiBcIjZcIixcbiAgICAgICAgICAgICAgICBcInlcIjogXCI2XCIsXG4gICAgICAgICAgICAgICAgXCJyYWRpdXNcIiA6IFwiNlwiLFxuICAgICAgICAgICAgICAgIFwiYXJjXCIgOiBcIiR7MiAqIE1hdGguUEl9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbn0iXX0=
