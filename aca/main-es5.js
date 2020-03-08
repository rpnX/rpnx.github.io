function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/active-users/active-users.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/active-users/active-users.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppActiveUsersActiveUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"active-users-container\">{{displayName}}</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"header\">\r\n    <span class=\"app-title\">CHAAAAAAT!!</span>\r\n    <app-authentication></app-authentication>\r\n</header>\r\n    <main class=\"main\">\r\n        <app-messages-box></app-messages-box>\r\n        <app-message-sending></app-message-sending>\r\n        <app-message-editing></app-message-editing>\r\n    </main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationAuthenticationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"authentication-container\">\r\n    <div *ngIf=\"isAutorized\" class=\"user-info-container\">\r\n        <img *ngIf=\"photoURL\" src=\"{{ photoURL }}\" alt=\"user-photo\" class=\"user-photo\">\r\n        <span class=\"user-display\">{{ diplayName }}</span>\r\n        <span class=\"user-name\">{{ email }}</span>\r\n    </div>\r\n    <div class=\"submenu\">\r\n      <button id=\"ga\" class=\"fa fa-google authentication-button\" (click)=\"authenticationGoogle()\">{{ isAutorized ? ' out' : ' sign in' }}</button>\r\n      <!-- <button id=\"fa\" class=\"fa fa-google-plus authentication-button\" (click)=\"authenticationFaceBook()\">{{ isAutorized ? 'out' : '' }}</button> -->\r\n\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/message-editing/message-editing.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message-editing/message-editing.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessageEditingMessageEditingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isEditing\" class=\"message-editing-container\">\r\n    <textarea appAutoFocus name=\"message\" [(ngModel)]=\"message\" id=\"message-editing-textarea\" (keypress)=\"keyPressHandler($event)\" maxlength=\"250\"></textarea>\r\n<button type=\"button\" class=\"message-editing-button\" (click)=\"clickHandler($event)\">Edit</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/message-sending/message-sending.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message-sending/message-sending.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessageSendingMessageSendingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"message-sending-container\">\r\n  <input  name=\"message\"\r\n          id=\"message-sending-input\"\r\n          [disabled]=\"!uid\"\r\n          [(ngModel)]=\"message\"\r\n          [placeholder]=\"placeholderText\"\r\n          (keypress)=\"keyPressHandler($event)\"\r\n          type=\"text\"\r\n          autofocus>\r\n  <button type=\"button\" class=\"message-sending-button\" (click)=\"clickHandler($event)\">Send</button>\r\n </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessageMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id={{message.id}} class=\"message-container\">\r\n     <div class=\"message-info-container\">\r\n        <span class=\"user-displayName\">{{ message.displayName }}</span>\r\n        <span class=\"user-email\">{{ message.email }}</span>\r\n    </div>\r\n\r\n    <span class=\"message\">{{ message.message }}\r\n      <span class=\"time-stamp\">{{ message.timeStamp}}</span>\r\n    </span>\r\n\r\n    <div class=\"message-buttons-container\">\r\n        <button type=\"button\" class=\"message-button edit-message-button\" title=\"Edit Message\" (click)=\"editMessage()\"></button>\r\n        <button type=\"button\" class=\"message-button remove-message-button\" title=\"Delet Message\" (click)=\"deleteMessage()\"></button>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages-box/messages-box.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages-box/messages-box.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesBoxMessagesBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"messages-box\">\r\n    <app-message *ngFor=\"let message of arrayOfMessages\" [message]=\"message\">\r\n    </app-message>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/active-users/active-users.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/active-users/active-users.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppActiveUsersActiveUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".active-users-container {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  top: 0;\n  left: 0;\n  width: 16%;\n  height: 87%;\n  background-color: #acb7b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZlLXVzZXJzL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcbGVhcm5cXGNoYXRcXGFuZ3VsYXItY2hhdC1hcHAvc3JjXFxhcHBcXGFjdGl2ZS11c2Vyc1xcYWN0aXZlLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY3RpdmUtdXNlcnMvYWN0aXZlLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2ZS11c2Vycy9hY3RpdmUtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLXVzZXJzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTYlO1xuICBoZWlnaHQ6IDg3JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjYjdiMztcbn0iLCIuYWN0aXZlLXVzZXJzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTYlO1xuICBoZWlnaHQ6IDg3JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjYjdiMztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/active-users/active-users.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/active-users/active-users.component.ts ***!
    \********************************************************/

  /*! exports provided: ActiveUsersComponent */

  /***/
  function srcAppActiveUsersActiveUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveUsersComponent", function () {
      return ActiveUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var ActiveUsersComponent =
    /*#__PURE__*/
    function () {
      function ActiveUsersComponent(authService) {
        _classCallCheck(this, ActiveUsersComponent);

        this.authService = authService;
        this.displayName = '';
      }

      _createClass(ActiveUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.getUser().subscribe(function (user) {
            _this.setUser(user);
          });
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          if (user.uid) {
            this.displayName = user.displayName;
          } else {
            this.displayName = '';
          }
        }
      }]);

      return ActiveUsersComponent;
    }();

    ActiveUsersComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ActiveUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-active-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./active-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/active-users/active-users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./active-users.component.scss */
      "./src/app/active-users/active-users.component.scss")).default]
    })], ActiveUsersComponent);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  position: absolute;\n  top: 0;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  max-width: 54%;\n  left: 23%;\n  right: 23%;\n  height: 9%;\n  background-color: #0f0827;\n}\n\n.header .app-title {\n  font-size: 25px;\n  color: #ffffff;\n  margin-left: 50px;\n}\n\n.main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  bottom: 0;\n}\n\napp-messages-box {\n  margin-top: 0px;\n  top: 0;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxsZWFyblxcY2hhdFxcYW5ndWxhci1jaGF0LWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDU0JTtcbiAgbGVmdDogMjMlO1xuICByaWdodDogMjMlO1xuICBoZWlnaHQ6IDklO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwODI3O1xufVxuLmhlYWRlciAuYXBwLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG59XG5hcHAtbWVzc2FnZXMtYm94IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB0b3A6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xufVxuIiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDU0JTtcbiAgbGVmdDogMjMlO1xuICByaWdodDogMjMlO1xuICBoZWlnaHQ6IDklO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwODI3O1xufVxuXG4uaGVhZGVyIC5hcHAtdGl0bGUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbn1cblxuYXBwLW1lc3NhZ2VzLWJveCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgdG9wOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/messages.service */
    "./src/app/services/messages.service.ts");
    /* harmony import */


    var _message_sending_message_sending_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./message-sending/message-sending.component */
    "./src/app/message-sending/message-sending.component.ts");
    /* harmony import */


    var _messages_box_messages_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./messages-box/messages-box.component */
    "./src/app/messages-box/messages-box.component.ts");
    /* harmony import */


    var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./authentication/authentication.component */
    "./src/app/authentication/authentication.component.ts");
    /* harmony import */


    var _message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./message/message.component */
    "./src/app/message/message.component.ts");
    /* harmony import */


    var _active_users_active_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./active-users/active-users.component */
    "./src/app/active-users/active-users.component.ts");
    /* harmony import */


    var _message_editing_message_editing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./message-editing/message-editing.component */
    "./src/app/message-editing/message-editing.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _message_sending_message_sending_component__WEBPACK_IMPORTED_MODULE_7__["MessageSendingComponent"], _messages_box_messages_box_component__WEBPACK_IMPORTED_MODULE_8__["MessagesBoxComponent"], _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticationComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"], _active_users_active_users_component__WEBPACK_IMPORTED_MODULE_11__["ActiveUsersComponent"], _message_editing_message_editing_component__WEBPACK_IMPORTED_MODULE_12__["MessageEditingComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/authentication/authentication.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/authentication/authentication.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthenticationAuthenticationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".authentication-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 50px;\n}\n\n.authentication-button {\n  margin: 5px;\n}\n\n.fa {\n  padding: 10px;\n  font-size: 20px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px;\n}\n\n.fa:hover {\n  opacity: 0.7;\n}\n\n.fa-google {\n  background: #dd4b39;\n  color: white;\n}\n\n.user-display {\n  margin: 10px;\n  color: #ffffff;\n}\n\n.authentication-container .user-info-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 30px;\n}\n\n.authentication-container .user-info-container .user-photo {\n  margin-right: 10px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #91a09c;\n}\n\n.user-photo {\n  border-radius: 50%;\n}\n\n.authentication-container .user-info-container .user-name {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxsZWFyblxcY2hhdFxcYW5ndWxhci1jaGF0LWFwcC9zcmNcXGFwcFxcYXV0aGVudGljYXRpb25cXGF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBRUUsV0FBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoZW50aWNhdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4uYXV0aGVudGljYXRpb24tYnV0dG9uIHtcblxuICBtYXJnaW46IDVweDtcbn1cbi5mYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogNXB4IDJweDtcbn1cblxuLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mYS1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xuICBjb2xvcjogd2hpdGU7XG59XG4udXNlci1kaXNwbGF5IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5hdXRoZW50aWNhdGlvbi1jb250YWluZXIgLnVzZXItaW5mby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4uYXV0aGVudGljYXRpb24tY29udGFpbmVyIC51c2VyLWluZm8tY29udGFpbmVyIC51c2VyLXBob3RvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTFhMDljO1xufVxuLnVzZXItcGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYXV0aGVudGljYXRpb24tY29udGFpbmVyIC51c2VyLWluZm8tY29udGFpbmVyIC51c2VyLW5hbWUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbiIsIi5hdXRoZW50aWNhdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5hdXRoZW50aWNhdGlvbi1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmZhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiA1cHggMnB4O1xufVxuXG4uZmE6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mYS1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyLWRpc3BsYXkge1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYXV0aGVudGljYXRpb24tY29udGFpbmVyIC51c2VyLWluZm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uYXV0aGVudGljYXRpb24tY29udGFpbmVyIC51c2VyLWluZm8tY29udGFpbmVyIC51c2VyLXBob3RvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTFhMDljO1xufVxuXG4udXNlci1waG90byB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmF1dGhlbnRpY2F0aW9uLWNvbnRhaW5lciAudXNlci1pbmZvLWNvbnRhaW5lciAudXNlci1uYW1lIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/authentication/authentication.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/authentication/authentication.component.ts ***!
    \************************************************************/

  /*! exports provided: AuthenticationComponent */

  /***/
  function srcAppAuthenticationAuthenticationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function () {
      return AuthenticationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthenticationComponent =
    /*#__PURE__*/
    function () {
      function AuthenticationComponent(authService) {
        _classCallCheck(this, AuthenticationComponent);

        this.authService = authService;
        this.isAutorized = false;
        this.email = '';
        this.photoURL = '';
        this.diplayName = '';
      }

      _createClass(AuthenticationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.authService.getUser().subscribe(function (user) {
            _this2.setUser(user);
          });
        }
      }, {
        key: "signInGoogle",
        value: function signInGoogle() {
          this.authService.signInGoogle();
        }
      }, {
        key: "signOutGoogle",
        value: function signOutGoogle() {
          this.authService.signOutGoogle();
        }
      }, {
        key: "authenticationGoogle",
        value: function authenticationGoogle() {
          if (this.isAutorized) {
            this.signOutGoogle();
          } else {
            this.signInGoogle();
          }
        }
      }, {
        key: "signInFaceBook",
        value: function signInFaceBook() {
          this.authService.signInFaceBook();
        }
      }, {
        key: "signOutFaceBook",
        value: function signOutFaceBook() {
          this.authService.signOutFaceBook();
        }
      }, {
        key: "authenticationFaceBook",
        value: function authenticationFaceBook() {
          if (this.isAutorized) {
            this.signOutGoogle();
          } else {
            this.signInFaceBook();
          }
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          if (user.email) {
            this.isAutorized = true;
            this.email = user.email;
            this.photoURL = user.photoURL;
            this.diplayName = user.displayName;
          } else {
            this.isAutorized = false;
            this.email = '';
            this.photoURL = '';
          }
        }
      }]);

      return AuthenticationComponent;
    }();

    AuthenticationComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authentication',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authentication.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authentication.component.scss */
      "./src/app/authentication/authentication.component.scss")).default]
    })], AuthenticationComponent);
    /***/
  },

  /***/
  "./src/app/message-editing/message-editing.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/message-editing/message-editing.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessageEditingMessageEditingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message-editing-container {\n  position: absolute;\n  margin: auto;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 54%;\n  height: 6%;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  left: 23%;\n  right: 23%;\n  bottom: 0;\n  z-index: 5;\n}\n\n.message-editing-container #message-editing-textarea {\n  width: 84%;\n  height: 100%;\n  padding: 10px;\n  border: none;\n  box-sizing: border-box;\n  outline: none;\n  font-size: 20px;\n  background-color: #c6c6ce;\n  border: none;\n}\n\n.message-editing-container #message-editing-textarea:focus {\n  border: 2px solid #757585;\n}\n\n.message-editing-button {\n  width: 16%;\n  height: 100%;\n  box-sizing: border-box;\n  border: none;\n  color: #40414d;\n  font-size: 19px;\n  background-color: #8d8f92;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  font-weight: bold;\n  outline: none;\n  cursor: pointer;\n}\n\n.message-editing-button:hover {\n  background-color: #75857f;\n}\n\n.message-editing-button:active {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS1lZGl0aW5nL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcbGVhcm5cXGNoYXRcXGFuZ3VsYXItY2hhdC1hcHAvc3JjXFxhcHBcXG1lc3NhZ2UtZWRpdGluZ1xcbWVzc2FnZS1lZGl0aW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXNzYWdlLWVkaXRpbmcvbWVzc2FnZS1lZGl0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlLWVkaXRpbmcvbWVzc2FnZS1lZGl0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtZWRpdGluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDU0JTtcbiAgaGVpZ2h0OiA2JTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZWZ0OiAyMyU7XG4gIHJpZ2h0OiAyMyU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogNTtcbn1cbi5tZXNzYWdlLWVkaXRpbmctY29udGFpbmVyICNtZXNzYWdlLWVkaXRpbmctdGV4dGFyZWEge1xuICB3aWR0aDogODQlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjNmNlO1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWVzc2FnZS1lZGl0aW5nLWNvbnRhaW5lciAjbWVzc2FnZS1lZGl0aW5nLXRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzc1NzU4NTtcbn1cbi5tZXNzYWdlLWVkaXRpbmctYnV0dG9uIHtcbiAgd2lkdGg6IDE2JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNDA0MTRkO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDhmOTI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZXNzYWdlLWVkaXRpbmctYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1ODU3Zjtcbn1cbi5tZXNzYWdlLWVkaXRpbmctYnV0dG9uOmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiIsIi5tZXNzYWdlLWVkaXRpbmctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1NCU7XG4gIGhlaWdodDogNiU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGVmdDogMjMlO1xuICByaWdodDogMjMlO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5tZXNzYWdlLWVkaXRpbmctY29udGFpbmVyICNtZXNzYWdlLWVkaXRpbmctdGV4dGFyZWEge1xuICB3aWR0aDogODQlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjNmNlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5tZXNzYWdlLWVkaXRpbmctY29udGFpbmVyICNtZXNzYWdlLWVkaXRpbmctdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNzU3NTg1O1xufVxuXG4ubWVzc2FnZS1lZGl0aW5nLWJ1dHRvbiB7XG4gIHdpZHRoOiAxNiU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzQwNDE0ZDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ4ZjkyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZXNzYWdlLWVkaXRpbmctYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1ODU3Zjtcbn1cblxuLm1lc3NhZ2UtZWRpdGluZy1idXR0b246YWN0aXZlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/message-editing/message-editing.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/message-editing/message-editing.component.ts ***!
    \**************************************************************/

  /*! exports provided: MessageEditingComponent */

  /***/
  function srcAppMessageEditingMessageEditingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageEditingComponent", function () {
      return MessageEditingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/messages.service */
    "./src/app/services/messages.service.ts");

    var MessageEditingComponent =
    /*#__PURE__*/
    function () {
      function MessageEditingComponent(authService, messagesService) {
        _classCallCheck(this, MessageEditingComponent);

        this.authService = authService;
        this.messagesService = messagesService;
        this.message = '';
        this.isEditing = false;
        this.email = '';
        this.emailAuthor = '';
        this.id = '';
      }

      _createClass(MessageEditingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.authService.getUser().subscribe(function (user) {
            _this3.setUser(user);
          });
          this.messagesService.getEditMessage().subscribe(function (editMessage) {
            _this3.setEditMessage(editMessage);
          });
        }
      }, {
        key: "setEditMessage",
        value: function setEditMessage(editMessage) {
          var id = editMessage.id,
              email = editMessage.email,
              message = editMessage.message;

          if (this.emailAuthor === email) {
            this.id = id;
            this.emailAuthor = email;
            this.message = message;
            this.isEditing = true;
          }
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          if (user.email) {
            this.emailAuthor = user.email;
          } else {
            this.emailAuthor = '';
          }
        }
      }, {
        key: "editMessage",
        value: function editMessage() {
          if (this.message.length) {
            this.messagesService.editMessage(this.id, this.message);
            this.isEditing = false;
          }
        }
      }, {
        key: "keyPressHandler",
        value: function keyPressHandler(event) {
          if (event.code === 'Enter' && !event.shiftKey) {
            this.editMessage();
          }
        }
      }, {
        key: "clickHandler",
        value: function clickHandler() {
          this.editMessage();
        }
      }]);

      return MessageEditingComponent;
    }();

    MessageEditingComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]
      }];
    };

    MessageEditingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-editing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-editing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/message-editing/message-editing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-editing.component.scss */
      "./src/app/message-editing/message-editing.component.scss")).default]
    })], MessageEditingComponent);
    /***/
  },

  /***/
  "./src/app/message-sending/message-sending.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/message-sending/message-sending.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessageSendingMessageSendingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message-sending-container {\n  position: absolute;\n  margin: auto;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 54%;\n  height: 6%;\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  left: 23%;\n  right: 23%;\n  bottom: 0;\n}\n.message-sending-container #message-sending-input {\n  width: 84%;\n  height: 100%;\n  padding: 10px;\n  border: none;\n  box-sizing: border-box;\n  outline: none;\n  font-size: 20px;\n  background-color: #c6c6ce;\n}\n.message-sending-container #message-sending-input:focus {\n  border: 2px solid #757585;\n}\n.message-sending-container .message-sending-button {\n  width: 16%;\n  height: 100%;\n  box-sizing: border-box;\n  border: none;\n  color: #40414d;\n  font-size: 19px;\n  background-color: #8d8f92;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  font-weight: bold;\n  outline: none;\n  cursor: pointer;\n}\n.message-sending-container .message-sending-button:hover {\n  background-color: #757585;\n}\n.message-sending-container .message-sending-button:active {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS1zZW5kaW5nL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcbGVhcm5cXGNoYXRcXGFuZ3VsYXItY2hhdC1hcHAvc3JjXFxhcHBcXG1lc3NhZ2Utc2VuZGluZ1xcbWVzc2FnZS1zZW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXNzYWdlLXNlbmRpbmcvbWVzc2FnZS1zZW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDSTtFQUNFLHlCQUFBO0FDQ047QURFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQUo7QURFSTtFQUNFLHlCQUFBO0FDQU47QURFSTtFQUNFLGVBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2Utc2VuZGluZy9tZXNzYWdlLXNlbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1zZW5kaW5nLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1NCU7XHJcbiAgaGVpZ2h0OiA2JTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogMjMlO1xyXG4gIHJpZ2h0OiAyMyU7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICAjbWVzc2FnZS1zZW5kaW5nLWlucHV0IHtcclxuICAgIHdpZHRoOiA4NCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjNmNlO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjNzU3NTg1O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWVzc2FnZS1zZW5kaW5nLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTYlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjNDA0MTRkO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhkOGY5MjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU4NTtcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWVzc2FnZS1zZW5kaW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTQlO1xuICBoZWlnaHQ6IDYlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxlZnQ6IDIzJTtcbiAgcmlnaHQ6IDIzJTtcbiAgYm90dG9tOiAwO1xufVxuLm1lc3NhZ2Utc2VuZGluZy1jb250YWluZXIgI21lc3NhZ2Utc2VuZGluZy1pbnB1dCB7XG4gIHdpZHRoOiA4NCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNmM2Y2U7XG59XG4ubWVzc2FnZS1zZW5kaW5nLWNvbnRhaW5lciAjbWVzc2FnZS1zZW5kaW5nLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzc1NzU4NTtcbn1cbi5tZXNzYWdlLXNlbmRpbmctY29udGFpbmVyIC5tZXNzYWdlLXNlbmRpbmctYnV0dG9uIHtcbiAgd2lkdGg6IDE2JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNDA0MTRkO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDhmOTI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZXNzYWdlLXNlbmRpbmctY29udGFpbmVyIC5tZXNzYWdlLXNlbmRpbmctYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU4NTtcbn1cbi5tZXNzYWdlLXNlbmRpbmctY29udGFpbmVyIC5tZXNzYWdlLXNlbmRpbmctYnV0dG9uOmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/message-sending/message-sending.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/message-sending/message-sending.component.ts ***!
    \**************************************************************/

  /*! exports provided: MessageSendingComponent */

  /***/
  function srcAppMessageSendingMessageSendingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageSendingComponent", function () {
      return MessageSendingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/messages.service */
    "./src/app/services/messages.service.ts");

    var MessageSendingComponent =
    /*#__PURE__*/
    function () {
      function MessageSendingComponent(authService, messagesService) {
        _classCallCheck(this, MessageSendingComponent);

        this.authService = authService;
        this.messagesService = messagesService;
        this.message = '';
        this.uid = '';
        this.email = '';
        this.placeholderText = 'Sign in to write messages';
        this.seding = true;
        this.displayName = '';
      }

      _createClass(MessageSendingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.authService.getUser().subscribe(function (user) {
            _this4.setUser(user);
          });
          this.messageSendingInput = document.querySelector('#message-sending-input');
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          if (this.uid && this.message && this.displayName) {
            if (this.message.trim()) {
              this.messagesService.sendMessage(this.message, this.email, this.displayName);
              this.message = '';
            }
          }
        }
      }, {
        key: "keyPressHandler",
        value: function keyPressHandler(event) {
          if (event.code === 'Enter' && !event.shiftKey) {
            this.sendMessage();
          }
        }
      }, {
        key: "clickHandler",
        value: function clickHandler() {
          this.sendMessage();
          this.messageSendingInput.focus();
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          this.uid = user.uid;
          this.email = user.email;
          this.displayName = user.displayName;

          if (user.uid) {
            this.placeholderText = 'Write you message text here';
          } else {
            this.placeholderText = 'Sign in to write messages';
          }
        }
      }]);

      return MessageSendingComponent;
    }();

    MessageSendingComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]
      }];
    };

    MessageSendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-sending',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-sending.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/message-sending/message-sending.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-sending.component.scss */
      "./src/app/message-sending/message-sending.component.scss")).default]
    })], MessageSendingComponent);
    /***/
  },

  /***/
  "./src/app/message/message.component.scss":
  /*!************************************************!*\
    !*** ./src/app/message/message.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessageMessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message-container {\n  border-radius: 10px;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  min-height: 75px;\n  width: 93%;\n  min-width: 400px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  margin-left: 30px;\n}\n\n.message-info-container {\n  box-shadow: 0px -1px 10px -2px rgba(0, 0, 0, 0.79);\n  border: 1px solid black;\n  border-radius: 10px;\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 22%;\n  min-height: 75px;\n  overflow: hidden;\n  background-color: #e4e4e4;\n}\n\n.user-displayName {\n  margin-top: 10px;\n  text-align: center;\n  padding: 5px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.user-email {\n  text-align: center;\n  color: #364645;\n  font-weight: bold;\n  overflow-wrap: break-word;\n  font-size: 14px;\n}\n\n.time-stamp {\n  position: absolute;\n  bottom: 0;\n  color: #777575;\n  font-size: 12px;\n  right: 25px;\n  margin: 2px;\n}\n\n.message {\n  box-shadow: 0px -2px 19px -2px rgba(0, 0, 0, 0.79);\n  border-radius: 10px;\n  position: relative;\n  overflow-wrap: break-word;\n  min-height: 50px;\n  width: 72%;\n  left: 22.5%;\n  background-color: #ffffff;\n  padding: 10px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  margin-left: 15px;\n}\n\n.message-container .message-buttons-container {\n  opacity: 0;\n  position: absolute;\n  width: 4%;\n  right: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.message-container .message-buttons-container:hover {\n  opacity: 1;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.message-container .message-buttons-container .message-button {\n  height: 23px;\n  width: 23px;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background-size: cover;\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n}\n\n.message-container .message-buttons-container .edit-message-button {\n  background-image: url('edit-message.svg');\n}\n\n.message-container .message-buttons-container .remove-message-button {\n  background-image: url('delet-message.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXGxlYXJuXFxjaGF0XFxhbmd1bGFyLWNoYXQtYXBwL3NyY1xcYXBwXFxtZXNzYWdlXFxtZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0RBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ01GOztBREpBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDU0Y7O0FEUEE7RUFDRSx5Q0FBQTtBQ1VGOztBRFJBO0VBQ0UsMENBQUE7QUNXRiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNzVweDtcbiAgd2lkdGg6IDkzJTtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbi5tZXNzYWdlLWluZm8tY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggMTBweCAtMnB4IHJnYmEoMCwwLDAsMC43OSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMiU7XG4gIG1pbi1oZWlnaHQ6IDc1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG59XG4udXNlci1kaXNwbGF5TmFtZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udXNlci1lbWFpbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzNjQ2NDU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGltZS1zdGFtcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogIzc3NzU3NTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICByaWdodDogMjVweDtcbiAgbWFyZ2luOiAycHhcbn1cbi5tZXNzYWdlIHtcbiAgYm94LXNoYWRvdzogMHB4IC0ycHggMTlweCAtMnB4IHJnYmEoMCwwLDAsMC43OSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgd2lkdGg6IDcyJTtcbiAgbGVmdDogMjIuNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQlO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9uIHtcbiAgaGVpZ2h0OiAyM3B4O1xuICB3aWR0aDogMjNweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIgLmVkaXQtbWVzc2FnZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2VkaXQtbWVzc2FnZS5zdmcpO1xufVxuLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5yZW1vdmUtbWVzc2FnZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2RlbGV0LW1lc3NhZ2Uuc3ZnKTtcbn1cbiIsIi5tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNzVweDtcbiAgd2lkdGg6IDkzJTtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLm1lc3NhZ2UtaW5mby1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwcHggLTFweCAxMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjc5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDIyJTtcbiAgbWluLWhlaWdodDogNzVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbn1cblxuLnVzZXItZGlzcGxheU5hbWUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udXNlci1lbWFpbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzNjQ2NDU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50aW1lLXN0YW1wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiAjNzc3NTc1O1xuICBmb250LXNpemU6IDEycHg7XG4gIHJpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDJweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBib3gtc2hhZG93OiAwcHggLTJweCAxOXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjc5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNzIlO1xuICBsZWZ0OiAyMi41JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtYnV0dG9ucy1jb250YWluZXIge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0JTtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b25zLWNvbnRhaW5lciAubWVzc2FnZS1idXR0b24ge1xuICBoZWlnaHQ6IDIzcHg7XG4gIHdpZHRoOiAyM3B4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5lZGl0LW1lc3NhZ2UtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9lZGl0LW1lc3NhZ2Uuc3ZnKTtcbn1cblxuLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWJ1dHRvbnMtY29udGFpbmVyIC5yZW1vdmUtbWVzc2FnZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2RlbGV0LW1lc3NhZ2Uuc3ZnKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/message/message.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/message/message.component.ts ***!
    \**********************************************/

  /*! exports provided: MessageComponent */

  /***/
  function srcAppMessageMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
      return MessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/messages.service */
    "./src/app/services/messages.service.ts");

    var MessageComponent =
    /*#__PURE__*/
    function () {
      function MessageComponent(messagesService) {
        _classCallCheck(this, MessageComponent);

        this.messagesService = messagesService;
      }

      _createClass(MessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editMessage",
        value: function editMessage() {
          var editableMessage = {
            id: this.message.id,
            email: this.message.email,
            message: this.message.message,
            displayName: this.message.displayName
          };
          this.messagesService.setEditableMessage(editableMessage);
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage() {
          this.messagesService.deleteMessage(this.message.id, this.message.email);
        }
      }]);

      return MessageComponent;
    }();

    MessageComponent.ctorParameters = function () {
      return [{
        type: _services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessageComponent.prototype, "message", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message.component.scss */
      "./src/app/message/message.component.scss")).default]
    })], MessageComponent);
    /***/
  },

  /***/
  "./src/app/messages-box/messages-box.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/messages-box/messages-box.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesBoxMessagesBoxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".messages-box {\n  position: absolute;\n  top: 9%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 54%;\n  left: 23%;\n  right: 23%;\n  height: 85%;\n  overflow-y: auto;\n  background-color: #bdbdbdc2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMtYm94L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcbGVhcm5cXGNoYXRcXGFuZ3VsYXItY2hhdC1hcHAvc3JjXFxhcHBcXG1lc3NhZ2VzLWJveFxcbWVzc2FnZXMtYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXNzYWdlcy1ib3gvbWVzc2FnZXMtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzLWJveC9tZXNzYWdlcy1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5tZXNzYWdlcy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDklO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNTQlO1xuICAgIGxlZnQ6IDIzJTtcbiAgICByaWdodDogMjMlO1xuICAgIGhlaWdodDogODUlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZGMyO1xuICB9XG4iLCIubWVzc2FnZXMtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDklO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTQlO1xuICBsZWZ0OiAyMyU7XG4gIHJpZ2h0OiAyMyU7XG4gIGhlaWdodDogODUlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkYzI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/messages-box/messages-box.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/messages-box/messages-box.component.ts ***!
    \********************************************************/

  /*! exports provided: MessagesBoxComponent */

  /***/
  function srcAppMessagesBoxMessagesBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesBoxComponent", function () {
      return MessagesBoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/messages.service */
    "./src/app/services/messages.service.ts");

    var MessagesBoxComponent =
    /*#__PURE__*/
    function () {
      function MessagesBoxComponent(messagesService) {
        _classCallCheck(this, MessagesBoxComponent);

        this.messagesService = messagesService;
      }

      _createClass(MessagesBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.messagesService.getArrayOfMessages().subscribe(function (arrayOfMessages) {
            _this5.setArrayOfMessages(arrayOfMessages);
          });
          this.messagesBox = document.querySelector('.messages-box');
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.messagesBox.scrollTop = this.messagesBox.scrollHeight;
        }
      }, {
        key: "setArrayOfMessages",
        value: function setArrayOfMessages(arrayOfMessages) {
          this.arrayOfMessages = arrayOfMessages;
        }
      }]);

      return MessagesBoxComponent;
    }();

    MessagesBoxComponent.ctorParameters = function () {
      return [{
        type: _services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]
      }];
    };

    MessagesBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages-box',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages-box.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages-box/messages-box.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages-box.component.scss */
      "./src/app/messages-box/messages-box.component.scss")).default]
    })], MessagesBoxComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../firebase/firebase */
    "./src/firebase/firebase.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService() {
        _classCallCheck(this, AuthService);

        this.observedUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.addAuthStateChangeHandler();
      }

      _createClass(AuthService, [{
        key: "setUser",
        value: function setUser(user) {
          this.observedUser.next(user);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.observedUser.asObservable();
        }
      }, {
        key: "signInGoogle",
        value: function signInGoogle() {
          var _this6 = this;

          _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].signInWithPopup(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["googleAuthProvider"]).then(function (result) {
            var _result$user = result.user,
                uid = _result$user.uid,
                email = _result$user.email,
                photoURL = _result$user.photoURL,
                displayName = _result$user.displayName;

            _this6.setUser({
              uid: uid,
              email: email,
              photoURL: photoURL,
              displayName: displayName
            });
          });
        }
      }, {
        key: "signInFaceBook",
        value: function signInFaceBook() {
          _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].signInWithPopup(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["faceBookAuthProvider"]).then(function (result) {
            var uid = result.user.uid;
            console.log(uid);
          });
        }
      }, {
        key: "signOutFaceBook",
        value: function signOutFaceBook() {
          _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].signOut().then(function () {});
        }
      }, {
        key: "signOutGoogle",
        value: function signOutGoogle() {
          _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].signOut().then(function () {});
        }
      }, {
        key: "addAuthStateChangeHandler",
        value: function addAuthStateChangeHandler() {
          var _this7 = this;

          _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].onAuthStateChanged(function (result) {
            if (result) {
              var uid = result.uid,
                  email = result.email,
                  photoURL = result.photoURL,
                  displayName = result.displayName;

              _this7.setUser({
                uid: uid,
                email: email,
                photoURL: photoURL,
                displayName: displayName
              });
            } else {
              _this7.setUser({
                uid: '',
                email: '',
                photoURL: '',
                displayName: ''
              });
            }
          });
        }
      }]);

      return AuthService;
    }();

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/services/messages.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/messages.service.ts ***!
    \**********************************************/

  /*! exports provided: MessagesService */

  /***/
  function srcAppServicesMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
      return MessagesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../firebase/firebase */
    "./src/firebase/firebase.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var MessagesService =
    /*#__PURE__*/
    function () {
      function MessagesService(authService) {
        var _this8 = this;

        _classCallCheck(this, MessagesService);

        this.authService = authService;
        this.observedArrayOfMessages = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.observedEditableMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authService.getUser().subscribe(function (user) {
          _this8.setUser(user);
        });
        this.getMessages();
      }

      _createClass(MessagesService, [{
        key: "setArrayOfMessages",
        value: function setArrayOfMessages(messages) {
          this.observedArrayOfMessages.next(messages);
        }
      }, {
        key: "getArrayOfMessages",
        value: function getArrayOfMessages() {
          return this.observedArrayOfMessages.asObservable();
        }
      }, {
        key: "setEditableMessage",
        value: function setEditableMessage(editableMessage) {
          this.observedEditableMessage.next(editableMessage);
        }
      }, {
        key: "getEditMessage",
        value: function getEditMessage() {
          return this.observedEditableMessage.asObservable();
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(message, email, displayName) {
          _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('messages').doc().set({
            email: email,
            message: message,
            timeStamp: this.getTimeStamp(),
            displayName: displayName
          });
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage(id, email) {
          if (this.email === email) {
            _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('messages').doc(id).delete();
          }
        }
      }, {
        key: "editMessage",
        value: function editMessage(id, message) {
          _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('messages').doc(id).update({
            message: message
          });
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          var _this9 = this;

          _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('messages').orderBy('timeStamp', 'asc').onSnapshot(function (querySnapshot) {
            var messages = [];
            querySnapshot.forEach(function (doc) {
              var message = doc.data();
              message.id = doc.id;
              messages.push(message);
            });

            _this9.setArrayOfMessages(messages);
          });
        }
      }, {
        key: "getTimeStamp",
        value: function getTimeStamp() {
          var currentDate = new Date();

          var _currentDate$toString = currentDate.toString().split(' '),
              _currentDate$toString2 = _slicedToArray(_currentDate$toString, 5),
              dayOfTheMonth = _currentDate$toString2[2],
              year = _currentDate$toString2[3],
              time = _currentDate$toString2[4];

          var month = currentDate.getMonth() + 1;

          if (month < 10) {
            return "".concat(dayOfTheMonth, ".0").concat(month, ".").concat(year, " ").concat(time);
          } else {
            return "".concat(dayOfTheMonth, ".").concat(month, ".").concat(year, " ").concat(time);
          }
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          if (user.email) {
            this.email = user.email;
            this.displayName = user.displayName;
          } else {
            this.email = '';
          }
        }
      }]);

      return MessagesService;
    }();

    MessagesService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MessagesService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/firebase/firebase.js":
  /*!**********************************!*\
    !*** ./src/firebase/firebase.js ***!
    \**********************************/

  /*! exports provided: fb, db, auth, googleAuthProvider, faceBookAuthProvider */

  /***/
  function srcFirebaseFirebaseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fb", function () {
      return fb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "db", function () {
      return db;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "auth", function () {
      return auth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "googleAuthProvider", function () {
      return googleAuthProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "faceBookAuthProvider", function () {
      return faceBookAuthProvider;
    });
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js");

    var firebaseConfig = {
      apiKey: 'AIzaSyDu_kFkxcAWB6yOl7vpT35YUz0T9RrDVd8',
      authDomain: 'chat-app-b0c1e.firebaseapp.com',
      databaseURL: 'https://chat-app-b0c1e.firebaseio.com',
      projectId: 'chat-app-b0c1e',
      storageBucket: 'chat-app-b0c1e.appspot.com',
      messagingSenderId: '838341989790',
      appId: '1:838341989790:web:0a65325a2a6bde7116328f',
      measurementId: 'G-W58R9SQNV5'
    };
    firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig);
    var fb = firebase_app__WEBPACK_IMPORTED_MODULE_0__["database"]();
    var db = firebase_app__WEBPACK_IMPORTED_MODULE_0__["firestore"]();
    var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]();
    var googleAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider();
    var faceBookAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].FacebookAuthProvider();
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Desktop\learn\chat\angular-chat-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map