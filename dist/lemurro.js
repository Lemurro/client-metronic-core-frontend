/*!
 * Bootstrap Confirmation (v4.1.0)
 * @copyright 2013 Nimit Suwannagate <ethaizone@hotmail.com>
 * @copyright 2014-2018 Damien "Mistic" Sorel <contact@git.strangeplanet.fr>
 * @licence Apache License, Version 2.0
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery'), require('bootstrap')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'bootstrap'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  if (typeof $.fn.popover === 'undefined' || $.fn.popover.Constructor.VERSION.split('.').shift() !== '4') {
    throw new Error('Bootstrap Confirmation 4 requires Bootstrap Popover 4');
  }

  var Popover = $.fn.popover.Constructor;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'confirmation';
  var VERSION = '4.1.0';
  var DATA_KEY = "bs." + NAME;
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var BTN_CLASS_BASE = 'h-100 d-flex align-items-center';
  var BTN_CLASS_DEFAULT = 'btn btn-sm';

  var DefaultType = _objectSpread({}, Popover.DefaultType, {
    singleton: 'boolean',
    popout: 'boolean',
    copyAttributes: '(string|array)',
    onConfirm: 'function',
    onCancel: 'function',
    btnOkClass: 'string',
    btnOkLabel: 'string',
    btnOkIconClass: 'string',
    btnOkIconContent: 'string',
    btnCancelClass: 'string',
    btnCancelLabel: 'string',
    btnCancelIconClass: 'string',
    btnCancelIconContent: 'string',
    buttons: 'array'
  });

  var Default = _objectSpread({}, Popover.Default, {
    _attributes: {},
    _selector: null,
    placement: 'top',
    title: 'Are you sure?',
    trigger: 'click',
    confirmationEvent: undefined,
    content: '',
    singleton: false,
    popout: false,
    copyAttributes: 'href target',
    onConfirm: $.noop,
    onCancel: $.noop,
    btnOkClass: BTN_CLASS_DEFAULT + " btn-primary",
    btnOkLabel: 'Yes',
    btnOkIconClass: '',
    btnOkIconContent: '',
    btnCancelClass: BTN_CLASS_DEFAULT + " btn-secondary",
    btnCancelLabel: 'No',
    btnCancelIconClass: '',
    btnCancelIconContent: '',
    buttons: [],
    // @formatter:off
    template: "\n<div class=\"popover confirmation\">\n  <div class=\"arrow\"></div>\n  <h3 class=\"popover-header\"></h3>\n  <div class=\"popover-body\">\n    <p class=\"confirmation-content\"></p>\n    <div class=\"confirmation-buttons text-center\">\n      <div class=\"btn-group\"></div>\n    </div>\n  </div>\n</div>" // @formatter:on

  });

  if (Default.whiteList) {
    Default.whiteList['*'].push('data-apply', 'data-dismiss');
  }

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TITLE: '.popover-header',
    CONTENT: '.confirmation-content',
    BUTTONS: '.confirmation-buttons .btn-group'
  };
  var Keymap = {
    13: 'Enter',
    27: 'Escape',
    39: 'ArrowRight',
    40: 'ArrowDown'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY,
    CONFIRMED: "confirmed" + EVENT_KEY,
    CANCELED: "canceled" + EVENT_KEY,
    KEYUP: "keyup" + EVENT_KEY
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
  // keep track of the last openned confirmation for keyboard navigation

  var activeConfirmation;

  var Confirmation =
  /*#__PURE__*/
  function (_Popover) {
    _inheritsLoose(Confirmation, _Popover);

    _createClass(Confirmation, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      } // Constructor

    }]);

    function Confirmation(element, config) {
      var _this;

      _this = _Popover.call(this, element, config) || this;

      if ((_this.config.popout || _this.config.singleton) && !_this.config.rootSelector) {
        throw new Error('The rootSelector option is required to use popout and singleton features since jQuery 3.');
      } // keep trace of selectors


      _this._isDelegate = false;

      if (config.selector) {
        // container of buttons
        config._selector = config.rootSelector + " " + config.selector;
        _this.config._selector = config._selector;
      } else if (config._selector) {
        // children of container
        _this.config._selector = config._selector;
        _this._isDelegate = true;
      } else {
        // standalone
        _this.config._selector = config.rootSelector;
      }

      if (_this.config.confirmationEvent === undefined) {
        _this.config.confirmationEvent = _this.config.trigger;
      }

      if (!_this.config.selector) {
        _this._copyAttributes();
      }

      _this._setConfirmationListeners();

      return _this;
    } // Overrides


    var _proto = Confirmation.prototype;

    _proto.isWithContent = function isWithContent() {
      return true;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
      $tip.find(Selector.CONTENT).toggle(!!content);

      if (content) {
        this.setElementContent($tip.find(Selector.CONTENT), content);
      }

      if (this.config.buttons.length > 0) {
        this._setButtons($tip, this.config.buttons);
      } else {
        this._setStandardButtons($tip);
      }

      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);

      this._setupKeyupEvent();
    };

    _proto.dispose = function dispose() {
      $('body').off(Event.CLICK + "." + this.uid);
      this.eventBody = false;

      this._cleanKeyupEvent();

      _Popover.prototype.dispose.call(this);
    };

    _proto.hide = function hide(callback) {
      this._cleanKeyupEvent();

      _Popover.prototype.hide.call(this, callback);
    } // Private

    /**
     * Copy the value of `copyAttributes` on the config object
     * @private
     */
    ;

    _proto._copyAttributes = function _copyAttributes() {
      var _this2 = this;

      this.config._attributes = {};

      if (this.config.copyAttributes) {
        if (typeof this.config.copyAttributes === 'string') {
          this.config.copyAttributes = this.config.copyAttributes.split(' ');
        }
      } else {
        this.config.copyAttributes = [];
      }

      this.config.copyAttributes.forEach(function (attr) {
        _this2.config._attributes[attr] = $(_this2.element).attr(attr);
      });
    }
    /**
     * Custom event listeners for popouts and singletons
     * @private
     */
    ;

    _proto._setConfirmationListeners = function _setConfirmationListeners() {
      var self = this;

      if (!this.config.selector) {
        // cancel original event
        $(this.element).on(this.config.trigger, function (e, ack) {
          if (!ack) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
          }
        }); // manage singleton

        $(this.element).on(Event.SHOWN, function () {
          if (self.config.singleton) {
            // close all other popover already initialized
            $(self.config._selector).not($(this)).filter(function () {
              return $(this).data(DATA_KEY) !== undefined;
            }).confirmation('hide');
          }
        });
      } else {
        // cancel original event
        $(this.element).on(this.config.trigger, this.config.selector, function (e, ack) {
          if (!ack) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
          }
        });
      }

      if (!this._isDelegate) {
        // manage popout
        this.eventBody = false;
        this.uid = this.element.id || Confirmation.getUID(NAME + "_group");
        $(this.element).on(Event.SHOWN, function () {
          if (self.config.popout && !self.eventBody) {
            self.eventBody = $('body').on(Event.CLICK + "." + self.uid, function (e) {
              if ($(self.config._selector).is(e.target) || $(self.config._selector).has(e.target).length > 0) {
                return;
              } // close all popover already initialized


              $(self.config._selector).filter(function () {
                return $(this).data(DATA_KEY) !== undefined;
              }).confirmation('hide');
              $('body').off(Event.CLICK + "." + self.uid);
              self.eventBody = false;
            });
          }
        });
      }
    }
    /**
     * Init the standard ok/cancel buttons
     * @param $tip
     * @private
     */
    ;

    _proto._setStandardButtons = function _setStandardButtons($tip) {
      var buttons = [{
        class: this.config.btnOkClass,
        label: this.config.btnOkLabel,
        iconClass: this.config.btnOkIconClass,
        iconContent: this.config.btnOkIconContent,
        attr: this.config._attributes
      }, {
        class: this.config.btnCancelClass,
        label: this.config.btnCancelLabel,
        iconClass: this.config.btnCancelIconClass,
        iconContent: this.config.btnCancelIconContent,
        cancel: true
      }];

      this._setButtons($tip, buttons);
    }
    /**
     * Init the buttons
     * @param $tip
     * @param buttons
     * @private
     */
    ;

    _proto._setButtons = function _setButtons($tip, buttons) {
      var self = this;
      var $group = $tip.find(Selector.BUTTONS).empty();
      buttons.forEach(function (button) {
        var btn = $('<a href="#"></a>').addClass(BTN_CLASS_BASE).addClass(button.class || BTN_CLASS_DEFAULT + " btn-secondary").html(button.label || '').attr(button.attr || {});

        if (button.iconClass || button.iconContent) {
          btn.prepend($('<i></i>').addClass(button.iconClass || '').text(button.iconContent || ''));
        }

        btn.one('click', function (e) {
          if ($(this).attr('href') === '#') {
            e.preventDefault();
          }

          if (button.onClick) {
            button.onClick.call($(self.element));
          }

          if (button.cancel) {
            self.config.onCancel.call(self.element, button.value);
            $(self.element).trigger(Event.CANCELED, [button.value]);
          } else {
            self.config.onConfirm.call(self.element, button.value);
            $(self.element).trigger(Event.CONFIRMED, [button.value]);
            $(self.element).trigger(self.config.confirmationEvent, [true]);
          }

          self.hide();
        });
        $group.append(btn);
      });
    }
    /**
     * Install the keyboatd event handler
     * @private
     */
    ;

    _proto._setupKeyupEvent = function _setupKeyupEvent() {
      activeConfirmation = this;
      $(window).off(Event.KEYUP).on(Event.KEYUP, this._onKeyup.bind(this));
    }
    /**
     * Remove the keyboard event handler
     * @private
     */
    ;

    _proto._cleanKeyupEvent = function _cleanKeyupEvent() {
      if (activeConfirmation === this) {
        activeConfirmation = undefined;
        $(window).off(Event.KEYUP);
      }
    }
    /**
     * Event handler for keyboard navigation
     * @param event
     * @private
     */
    ;

    _proto._onKeyup = function _onKeyup(event) {
      if (!this.tip) {
        this._cleanKeyupEvent();

        return;
      }

      var $tip = $(this.getTipElement());
      var key = event.key || Keymap[event.keyCode || event.which];
      var $group = $tip.find(Selector.BUTTONS);
      var $active = $group.find('.active');
      var $next;

      switch (key) {
        case 'Escape':
          this.hide();
          break;

        case 'ArrowRight':
          if ($active.length && $active.next().length) {
            $next = $active.next();
          } else {
            $next = $group.children().first();
          }

          $active.removeClass('active');
          $next.addClass('active').focus();
          break;

        case 'ArrowLeft':
          if ($active.length && $active.prev().length) {
            $next = $active.prev();
          } else {
            $next = $group.children().last();
          }

          $active.removeClass('active');
          $next.addClass('active').focus();
          break;

        default:
          break;
      }
    } // Static

    /**
     * Generates an uui, copied from Bootrap's utils
     * @param {string} prefix
     * @returns {string}
     */
    ;

    Confirmation.getUID = function getUID(prefix) {
      var uid = prefix;

      do {
        // eslint-disable-next-line no-bitwise
        uid += ~~(Math.random() * 1000000); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(uid));

      return uid;
    };

    Confirmation._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : {};

        _config.rootSelector = $(this).selector || _config.rootSelector; // this.selector removed in jQuery > 3

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Confirmation(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    return Confirmation;
  }(Popover);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME] = Confirmation._jQueryInterface;
  $.fn[NAME].Constructor = Confirmation;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Confirmation._jQueryInterface;
  };

}));
//# sourceMappingURL=bootstrap-confirmation.js.map

!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.bowser=n():t.bowser=n()}(this,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=129)}([function(t,n,e){var r=e(1),i=e(7),o=e(14),u=e(11),a=e(19),c=function(t,n,e){var s,f,l,h,d=t&c.F,p=t&c.G,v=t&c.S,g=t&c.P,y=t&c.B,m=p?r:v?r[n]||(r[n]={}):(r[n]||{}).prototype,b=p?i:i[n]||(i[n]={}),S=b.prototype||(b.prototype={});for(s in p&&(e=n),e)l=((f=!d&&m&&void 0!==m[s])?m:e)[s],h=y&&f?a(l,r):g&&"function"==typeof l?a(Function.call,l):l,m&&u(m,s,l,t&c.U),b[s]!=l&&o(b,s,h),g&&S[s]!=l&&(S[s]=l)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(50)("wks"),i=e(31),o=e(1).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,n,e){var r=e(21),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(2)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(3),i=e(96),o=e(28),u=Object.defineProperty;n.f=e(8)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(26);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(1),i=e(14),o=e(13),u=e(31)("src"),a=e(134),c=(""+a).split("toString");e(7).inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,e,a){var s="function"==typeof e;s&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(s&&(o(e,u)||i(e,u,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:a?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||a.call(this)}))},function(t,n,e){var r=e(0),i=e(2),o=e(26),u=/"/g,a=function(t,n,e,r){var i=String(o(t)),a="<"+n;return""!==e&&(a+=" "+e+'="'+String(r).replace(u,"&quot;")+'"'),a+">"+i+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(a),r(r.P+r.F*i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",e)}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(9),i=e(30);t.exports=e(8)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(46),i=e(26);t.exports=function(t){return r(i(t))}},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},function(t,n,e){"use strict";n.__esModule=!0,n.default=void 0;var r=e(18),i=function(){function t(){}return t.getFirstMatch=function(t,n){var e=n.match(t);return e&&e.length>0&&e[1]||""},t.getSecondMatch=function(t,n){var e=n.match(t);return e&&e.length>1&&e[2]||""},t.matchAndReturnConst=function(t,n,e){if(t.test(n))return e},t.getWindowsVersionName=function(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},t.getMacOSVersionName=function(t){var n=t.split(".").splice(0,2).map((function(t){return parseInt(t,10)||0}));if(n.push(0),10===n[0])switch(n[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},t.getAndroidVersionName=function(t){var n=t.split(".").splice(0,2).map((function(t){return parseInt(t,10)||0}));if(n.push(0),!(1===n[0]&&n[1]<5))return 1===n[0]&&n[1]<6?"Cupcake":1===n[0]&&n[1]>=6?"Donut":2===n[0]&&n[1]<2?"Eclair":2===n[0]&&2===n[1]?"Froyo":2===n[0]&&n[1]>2?"Gingerbread":3===n[0]?"Honeycomb":4===n[0]&&n[1]<1?"Ice Cream Sandwich":4===n[0]&&n[1]<4?"Jelly Bean":4===n[0]&&n[1]>=4?"KitKat":5===n[0]?"Lollipop":6===n[0]?"Marshmallow":7===n[0]?"Nougat":8===n[0]?"Oreo":9===n[0]?"Pie":void 0},t.getVersionPrecision=function(t){return t.split(".").length},t.compareVersions=function(n,e,r){void 0===r&&(r=!1);var i=t.getVersionPrecision(n),o=t.getVersionPrecision(e),u=Math.max(i,o),a=0,c=t.map([n,e],(function(n){var e=u-t.getVersionPrecision(n),r=n+new Array(e+1).join(".0");return t.map(r.split("."),(function(t){return new Array(20-t.length).join("0")+t})).reverse()}));for(r&&(a=u-Math.min(i,o)),u-=1;u>=a;){if(c[0][u]>c[1][u])return 1;if(c[0][u]===c[1][u]){if(u===a)return 0;u-=1}else if(c[0][u]<c[1][u])return-1}},t.map=function(t,n){var e,r=[];if(Array.prototype.map)return Array.prototype.map.call(t,n);for(e=0;e<t.length;e+=1)r.push(n(t[e]));return r},t.find=function(t,n){var e,r;if(Array.prototype.find)return Array.prototype.find.call(t,n);for(e=0,r=t.length;e<r;e+=1){var i=t[e];if(n(i,e))return i}},t.assign=function(t){for(var n,e,r=t,i=arguments.length,o=new Array(i>1?i-1:0),u=1;u<i;u++)o[u-1]=arguments[u];if(Object.assign)return Object.assign.apply(Object,[t].concat(o));var a=function(){var t=o[n];"object"==typeof t&&null!==t&&Object.keys(t).forEach((function(n){r[n]=t[n]}))};for(n=0,e=o.length;n<e;n+=1)a();return t},t.getBrowserAlias=function(t){return r.BROWSER_ALIASES_MAP[t]},t.getBrowserTypeByAlias=function(t){return r.BROWSER_MAP[t]||""},t}();n.default=i,t.exports=n.default},function(t,n,e){"use strict";n.__esModule=!0,n.ENGINE_MAP=n.OS_MAP=n.PLATFORMS_MAP=n.BROWSER_MAP=n.BROWSER_ALIASES_MAP=void 0;n.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};n.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};n.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};n.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};n.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},function(t,n,e){var r=e(20);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(47),i=e(30),o=e(15),u=e(28),a=e(13),c=e(96),s=Object.getOwnPropertyDescriptor;n.f=e(8)?s:function(t,n){if(t=o(t),n=u(n,!0),c)try{return s(t,n)}catch(t){}if(a(t,n))return i(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(0),i=e(7),o=e(2);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*o((function(){e(1)})),"Object",u)}},function(t,n,e){var r=e(19),i=e(46),o=e(10),u=e(6),a=e(112);t.exports=function(t,n){var e=1==t,c=2==t,s=3==t,f=4==t,l=6==t,h=5==t||l,d=n||a;return function(n,a,p){for(var v,g,y=o(n),m=i(y),b=r(a,p,3),S=u(m.length),w=0,_=e?d(n,S):c?d(n,0):void 0;S>w;w++)if((h||w in m)&&(g=b(v=m[w],w,y),t))if(e)_[w]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return w;case 2:_.push(v)}else if(f)return!1;return l?-1:s||f?f:_}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";if(e(8)){var r=e(32),i=e(1),o=e(2),u=e(0),a=e(61),c=e(86),s=e(19),f=e(44),l=e(30),h=e(14),d=e(45),p=e(21),v=e(6),g=e(123),y=e(34),m=e(28),b=e(13),S=e(48),w=e(4),_=e(10),M=e(78),x=e(35),P=e(37),O=e(36).f,F=e(80),A=e(31),E=e(5),N=e(24),R=e(51),k=e(49),T=e(82),I=e(42),j=e(54),L=e(43),B=e(81),C=e(114),W=e(9),V=e(22),G=W.f,D=V.f,U=i.RangeError,z=i.TypeError,q=i.Uint8Array,K=Array.prototype,Y=c.ArrayBuffer,Q=c.DataView,H=N(0),J=N(2),X=N(3),Z=N(4),$=N(5),tt=N(6),nt=R(!0),et=R(!1),rt=T.values,it=T.keys,ot=T.entries,ut=K.lastIndexOf,at=K.reduce,ct=K.reduceRight,st=K.join,ft=K.sort,lt=K.slice,ht=K.toString,dt=K.toLocaleString,pt=E("iterator"),vt=E("toStringTag"),gt=A("typed_constructor"),yt=A("def_constructor"),mt=a.CONSTR,bt=a.TYPED,St=a.VIEW,wt=N(1,(function(t,n){return Ot(k(t,t[yt]),n)})),_t=o((function(){return 1===new q(new Uint16Array([1]).buffer)[0]})),Mt=!!q&&!!q.prototype.set&&o((function(){new q(1).set({})})),xt=function(t,n){var e=p(t);if(e<0||e%n)throw U("Wrong offset!");return e},Pt=function(t){if(w(t)&&bt in t)return t;throw z(t+" is not a typed array!")},Ot=function(t,n){if(!(w(t)&&gt in t))throw z("It is not a typed array constructor!");return new t(n)},Ft=function(t,n){return At(k(t,t[yt]),n)},At=function(t,n){for(var e=0,r=n.length,i=Ot(t,r);r>e;)i[e]=n[e++];return i},Et=function(t,n,e){G(t,n,{get:function(){return this._d[e]}})},Nt=function(t){var n,e,r,i,o,u,a=_(t),c=arguments.length,f=c>1?arguments[1]:void 0,l=void 0!==f,h=F(a);if(null!=h&&!M(h)){for(u=h.call(a),r=[],n=0;!(o=u.next()).done;n++)r.push(o.value);a=r}for(l&&c>2&&(f=s(f,arguments[2],2)),n=0,e=v(a.length),i=Ot(this,e);e>n;n++)i[n]=l?f(a[n],n):a[n];return i},Rt=function(){for(var t=0,n=arguments.length,e=Ot(this,n);n>t;)e[t]=arguments[t++];return e},kt=!!q&&o((function(){dt.call(new q(1))})),Tt=function(){return dt.apply(kt?lt.call(Pt(this)):Pt(this),arguments)},It={copyWithin:function(t,n){return C.call(Pt(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return Z(Pt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return B.apply(Pt(this),arguments)},filter:function(t){return Ft(this,J(Pt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return $(Pt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){H(Pt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return et(Pt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return nt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return st.apply(Pt(this),arguments)},lastIndexOf:function(t){return ut.apply(Pt(this),arguments)},map:function(t){return wt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return at.apply(Pt(this),arguments)},reduceRight:function(t){return ct.apply(Pt(this),arguments)},reverse:function(){for(var t,n=Pt(this).length,e=Math.floor(n/2),r=0;r<e;)t=this[r],this[r++]=this[--n],this[n]=t;return this},some:function(t){return X(Pt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ft.call(Pt(this),t)},subarray:function(t,n){var e=Pt(this),r=e.length,i=y(t,r);return new(k(e,e[yt]))(e.buffer,e.byteOffset+i*e.BYTES_PER_ELEMENT,v((void 0===n?r:y(n,r))-i))}},jt=function(t,n){return Ft(this,lt.call(Pt(this),t,n))},Lt=function(t){Pt(this);var n=xt(arguments[1],1),e=this.length,r=_(t),i=v(r.length),o=0;if(i+n>e)throw U("Wrong length!");for(;o<i;)this[n+o]=r[o++]},Bt={entries:function(){return ot.call(Pt(this))},keys:function(){return it.call(Pt(this))},values:function(){return rt.call(Pt(this))}},Ct=function(t,n){return w(t)&&t[bt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Wt=function(t,n){return Ct(t,n=m(n,!0))?l(2,t[n]):D(t,n)},Vt=function(t,n,e){return!(Ct(t,n=m(n,!0))&&w(e)&&b(e,"value"))||b(e,"get")||b(e,"set")||e.configurable||b(e,"writable")&&!e.writable||b(e,"enumerable")&&!e.enumerable?G(t,n,e):(t[n]=e.value,t)};mt||(V.f=Wt,W.f=Vt),u(u.S+u.F*!mt,"Object",{getOwnPropertyDescriptor:Wt,defineProperty:Vt}),o((function(){ht.call({})}))&&(ht=dt=function(){return st.call(this)});var Gt=d({},It);d(Gt,Bt),h(Gt,pt,Bt.values),d(Gt,{slice:jt,set:Lt,constructor:function(){},toString:ht,toLocaleString:Tt}),Et(Gt,"buffer","b"),Et(Gt,"byteOffset","o"),Et(Gt,"byteLength","l"),Et(Gt,"length","e"),G(Gt,vt,{get:function(){return this[bt]}}),t.exports=function(t,n,e,c){var s=t+((c=!!c)?"Clamped":"")+"Array",l="get"+t,d="set"+t,p=i[s],y=p||{},m=p&&P(p),b=!p||!a.ABV,_={},M=p&&p.prototype,F=function(t,e){G(t,e,{get:function(){return function(t,e){var r=t._d;return r.v[l](e*n+r.o,_t)}(this,e)},set:function(t){return function(t,e,r){var i=t._d;c&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[d](e*n+i.o,r,_t)}(this,e,t)},enumerable:!0})};b?(p=e((function(t,e,r,i){f(t,p,s,"_d");var o,u,a,c,l=0,d=0;if(w(e)){if(!(e instanceof Y||"ArrayBuffer"==(c=S(e))||"SharedArrayBuffer"==c))return bt in e?At(p,e):Nt.call(p,e);o=e,d=xt(r,n);var y=e.byteLength;if(void 0===i){if(y%n)throw U("Wrong length!");if((u=y-d)<0)throw U("Wrong length!")}else if((u=v(i)*n)+d>y)throw U("Wrong length!");a=u/n}else a=g(e),o=new Y(u=a*n);for(h(t,"_d",{b:o,o:d,l:u,e:a,v:new Q(o)});l<a;)F(t,l++)})),M=p.prototype=x(Gt),h(M,"constructor",p)):o((function(){p(1)}))&&o((function(){new p(-1)}))&&j((function(t){new p,new p(null),new p(1.5),new p(t)}),!0)||(p=e((function(t,e,r,i){var o;return f(t,p,s),w(e)?e instanceof Y||"ArrayBuffer"==(o=S(e))||"SharedArrayBuffer"==o?void 0!==i?new y(e,xt(r,n),i):void 0!==r?new y(e,xt(r,n)):new y(e):bt in e?At(p,e):Nt.call(p,e):new y(g(e))})),H(m!==Function.prototype?O(y).concat(O(m)):O(y),(function(t){t in p||h(p,t,y[t])})),p.prototype=M,r||(M.constructor=p));var A=M[pt],E=!!A&&("values"==A.name||null==A.name),N=Bt.values;h(p,gt,!0),h(M,bt,s),h(M,St,!0),h(M,yt,p),(c?new p(1)[vt]==s:vt in M)||G(M,vt,{get:function(){return s}}),_[s]=p,u(u.G+u.W+u.F*(p!=y),_),u(u.S,s,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o((function(){y.of.call(p,1)})),s,{from:Nt,of:Rt}),"BYTES_PER_ELEMENT"in M||h(M,"BYTES_PER_ELEMENT",n),u(u.P,s,It),L(s),u(u.P+u.F*Mt,s,{set:Lt}),u(u.P+u.F*!E,s,Bt),r||M.toString==ht||(M.toString=ht),u(u.P+u.F*o((function(){new p(1).slice()})),s,{slice:jt}),u(u.P+u.F*(o((function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()}))||!o((function(){M.toLocaleString.call([1,2])}))),s,{toLocaleString:Tt}),I[s]=E?A:N,r||E||h(M,pt,N)}}else t.exports=function(){}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(31)("meta"),i=e(4),o=e(13),u=e(9).f,a=0,c=Object.isExtensible||function(){return!0},s=!e(2)((function(){return c(Object.preventExtensions({}))})),f=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!n)return"E";f(t)}return t[r].i},getWeak:function(t,n){if(!o(t,r)){if(!c(t))return!0;if(!n)return!1;f(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&c(t)&&!o(t,r)&&f(t),t}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(98),i=e(65);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){var r=e(21),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(3),i=e(99),o=e(65),u=e(64)("IE_PROTO"),a=function(){},c=function(){var t,n=e(62)("iframe"),r=o.length;for(n.style.display="none",e(66).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(a.prototype=r(t),e=new a,a.prototype=null,e[u]=t):e=c(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(98),i=e(65).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,n,e){var r=e(13),i=e(10),o=e(64)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(5)("unscopables"),i=Array.prototype;null==i[r]&&e(14)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,e){var r=e(9).f,i=e(13),o=e(5)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n,e){var r=e(0),i=e(26),o=e(2),u=e(68),a="["+u+"]",c=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),f=function(t,n,e){var i={},a=o((function(){return!!u[t]()||"​"!="​"[t]()})),c=i[t]=a?n(l):u[t];e&&(i[e]=c),r(r.P+r.F*a,"String",i)},l=f.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(c,"")),2&n&&(t=t.replace(s,"")),t};t.exports=f},function(t,n){t.exports={}},function(t,n,e){"use strict";var r=e(1),i=e(9),o=e(8),u=e(5)("species");t.exports=function(t){var n=r[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(11);t.exports=function(t,n,e){for(var i in n)r(t,i,n[i],e);return t}},function(t,n,e){var r=e(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(25),i=e(5)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(3),i=e(20),o=e(5)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[o])?n:i(e)}},function(t,n,e){var r=e(7),i=e(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(32)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(15),i=e(6),o=e(34);t.exports=function(t){return function(n,e,u){var a,c=r(n),s=i(c.length),f=o(u,s);if(t&&e!=e){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(25);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(5)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:e=!0}},o[r]=function(){return u},t(o)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(3);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(48),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},function(t,n,e){"use strict";e(116);var r=e(11),i=e(14),o=e(2),u=e(26),a=e(5),c=e(83),s=a("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var h=a(t),d=!o((function(){var n={};return n[h]=function(){return 7},7!=""[t](n)})),p=d?!o((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[s]=function(){return e}),e[h](""),!n})):void 0;if(!d||!p||"replace"===t&&!f||"split"===t&&!l){var v=/./[h],g=e(u,h,""[t],(function(t,n,e,r,i){return n.exec===c?d&&!i?{done:!0,value:v.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),y=g[0],m=g[1];r(String.prototype,t,y),i(RegExp.prototype,h,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}}},function(t,n,e){var r=e(19),i=e(111),o=e(78),u=e(3),a=e(6),c=e(80),s={},f={};(n=t.exports=function(t,n,e,l,h){var d,p,v,g,y=h?function(){return t}:c(t),m=r(e,l,n?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(d=a(t.length);d>b;b++)if((g=n?m(u(p=t[b])[0],p[1]):m(t[b]))===s||g===f)return g}else for(v=y.call(t);!(p=v.next()).done;)if((g=i(v,m,p.value,n))===s||g===f)return g}).BREAK=s,n.RETURN=f},function(t,n,e){var r=e(1).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){"use strict";var r=e(1),i=e(0),o=e(11),u=e(45),a=e(29),c=e(58),s=e(44),f=e(4),l=e(2),h=e(54),d=e(40),p=e(69);t.exports=function(t,n,e,v,g,y){var m=r[t],b=m,S=g?"set":"add",w=b&&b.prototype,_={},M=function(t){var n=w[t];o(w,t,"delete"==t?function(t){return!(y&&!f(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!f(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!f(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof b&&(y||w.forEach&&!l((function(){(new b).entries().next()})))){var x=new b,P=x[S](y?{}:-0,1)!=x,O=l((function(){x.has(1)})),F=h((function(t){new b(t)})),A=!y&&l((function(){for(var t=new b,n=5;n--;)t[S](n,n);return!t.has(-0)}));F||((b=n((function(n,e){s(n,b,t);var r=p(new m,n,b);return null!=e&&c(e,g,r[S],r),r}))).prototype=w,w.constructor=b),(O||A)&&(M("delete"),M("has"),g&&M("get")),(A||P)&&M(S),y&&w.clear&&delete w.clear}else b=v.getConstructor(n,t,g,S),u(b.prototype,e),a.NEED=!0;return d(b,t),_[t]=b,i(i.G+i.W+i.F*(b!=m),_),y||v.setStrong(b,t,g),b}},function(t,n,e){for(var r,i=e(1),o=e(14),u=e(31),a=u("typed_array"),c=u("view"),s=!(!i.ArrayBuffer||!i.DataView),f=s,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(r=i[h[l++]])?(o(r.prototype,a,!0),o(r.prototype,c,!0)):f=!1;t.exports={ABV:s,CONSTR:f,TYPED:a,VIEW:c}},function(t,n,e){var r=e(4),i=e(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){n.f=e(5)},function(t,n,e){var r=e(50)("keys"),i=e(31);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(4),i=e(3),o=function(t,n){if(i(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(19)(Function.call,e(22).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,e){var r=e(4),i=e(67).set;t.exports=function(t,n,e){var o,u=n.constructor;return u!==e&&"function"==typeof u&&(o=u.prototype)!==e.prototype&&r(o)&&i&&i(t,o),t}},function(t,n,e){"use strict";var r=e(21),i=e(26);t.exports=function(t){var n=String(i(this)),e="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(e+=n);return e}},function(t,n){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var e=Math.expm1;t.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},function(t,n,e){var r=e(21),i=e(26);t.exports=function(t){return function(n,e){var o,u,a=String(i(n)),c=r(e),s=a.length;return c<0||c>=s?t?"":void 0:(o=a.charCodeAt(c))<55296||o>56319||c+1===s||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):o:t?a.slice(c,c+2):u-56320+(o-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(32),i=e(0),o=e(11),u=e(14),a=e(42),c=e(110),s=e(40),f=e(37),l=e(5)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,p,v,g,y){c(e,n,p);var m,b,S,w=function(t){if(!h&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},_=n+" Iterator",M="values"==v,x=!1,P=t.prototype,O=P[l]||P["@@iterator"]||v&&P[v],F=O||w(v),A=v?M?w("entries"):F:void 0,E="Array"==n&&P.entries||O;if(E&&(S=f(E.call(new t)))!==Object.prototype&&S.next&&(s(S,_,!0),r||"function"==typeof S[l]||u(S,l,d)),M&&O&&"values"!==O.name&&(x=!0,F=function(){return O.call(this)}),r&&!y||!h&&!x&&P[l]||u(P,l,F),a[n]=F,a[_]=d,v)if(m={values:M?F:w("values"),keys:g?F:w("keys"),entries:A},y)for(b in m)b in P||o(P,b,m[b]);else i(i.P+i.F*(h||x),n,m);return m}},function(t,n,e){var r=e(76),i=e(26);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(t))}},function(t,n,e){var r=e(4),i=e(25),o=e(5)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},function(t,n,e){var r=e(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,e){var r=e(42),i=e(5)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,n,e){"use strict";var r=e(9),i=e(30);t.exports=function(t,n,e){n in t?r.f(t,n,i(0,e)):t[n]=e}},function(t,n,e){var r=e(48),i=e(5)("iterator"),o=e(42);t.exports=e(7).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){"use strict";var r=e(10),i=e(34),o=e(6);t.exports=function(t){for(var n=r(this),e=o(n.length),u=arguments.length,a=i(u>1?arguments[1]:void 0,e),c=u>2?arguments[2]:void 0,s=void 0===c?e:i(c,e);s>a;)n[a++]=t;return n}},function(t,n,e){"use strict";var r=e(38),i=e(115),o=e(42),u=e(15);t.exports=e(74)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,n,e){"use strict";var r,i,o=e(55),u=RegExp.prototype.exec,a=String.prototype.replace,c=u,s=(r=/a/,i=/b*/g,u.call(r,"a"),u.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(c=function(t){var n,e,r,i,c=this;return f&&(e=new RegExp("^"+c.source+"$(?!\\s)",o.call(c))),s&&(n=c.lastIndex),r=u.call(c,t),s&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),f&&r&&r.length>1&&a.call(r[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=c},function(t,n,e){"use strict";var r=e(73)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r,i,o,u=e(19),a=e(104),c=e(66),s=e(62),f=e(1),l=f.process,h=f.setImmediate,d=f.clearImmediate,p=f.MessageChannel,v=f.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},b=function(t){m.call(t.data)};h&&d||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++g]=function(){a("function"==typeof t?t:Function(t),n)},r(g),g},d=function(t){delete y[t]},"process"==e(25)(l)?r=function(t){l.nextTick(u(m,t,1))}:v&&v.now?r=function(t){v.now(u(m,t,1))}:p?(o=(i=new p).port2,i.port1.onmessage=b,r=u(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in s("script")?function(t){c.appendChild(s("script")).onreadystatechange=function(){c.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:h,clear:d}},function(t,n,e){"use strict";var r=e(1),i=e(8),o=e(32),u=e(61),a=e(14),c=e(45),s=e(2),f=e(44),l=e(21),h=e(6),d=e(123),p=e(36).f,v=e(9).f,g=e(81),y=e(40),m="prototype",b="Wrong index!",S=r.ArrayBuffer,w=r.DataView,_=r.Math,M=r.RangeError,x=r.Infinity,P=S,O=_.abs,F=_.pow,A=_.floor,E=_.log,N=_.LN2,R=i?"_b":"buffer",k=i?"_l":"byteLength",T=i?"_o":"byteOffset";function I(t,n,e){var r,i,o,u=new Array(e),a=8*e-n-1,c=(1<<a)-1,s=c>>1,f=23===n?F(2,-24)-F(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=O(t))!=t||t===x?(i=t!=t?1:0,r=c):(r=A(E(t)/N),t*(o=F(2,-r))<1&&(r--,o*=2),(t+=r+s>=1?f/o:f*F(2,1-s))*o>=2&&(r++,o/=2),r+s>=c?(i=0,r=c):r+s>=1?(i=(t*o-1)*F(2,n),r+=s):(i=t*F(2,s-1)*F(2,n),r=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(r=r<<n|i,a+=n;a>0;u[l++]=255&r,r/=256,a-=8);return u[--l]|=128*h,u}function j(t,n,e){var r,i=8*e-n-1,o=(1<<i)-1,u=o>>1,a=i-7,c=e-1,s=t[c--],f=127&s;for(s>>=7;a>0;f=256*f+t[c],c--,a-=8);for(r=f&(1<<-a)-1,f>>=-a,a+=n;a>0;r=256*r+t[c],c--,a-=8);if(0===f)f=1-u;else{if(f===o)return r?NaN:s?-x:x;r+=F(2,n),f-=u}return(s?-1:1)*r*F(2,f-n)}function L(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function B(t){return[255&t]}function C(t){return[255&t,t>>8&255]}function W(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function V(t){return I(t,52,8)}function G(t){return I(t,23,4)}function D(t,n,e){v(t[m],n,{get:function(){return this[e]}})}function U(t,n,e,r){var i=d(+e);if(i+n>t[k])throw M(b);var o=t[R]._b,u=i+t[T],a=o.slice(u,u+n);return r?a:a.reverse()}function z(t,n,e,r,i,o){var u=d(+e);if(u+n>t[k])throw M(b);for(var a=t[R]._b,c=u+t[T],s=r(+i),f=0;f<n;f++)a[c+f]=s[o?f:n-f-1]}if(u.ABV){if(!s((function(){S(1)}))||!s((function(){new S(-1)}))||s((function(){return new S,new S(1.5),new S(NaN),"ArrayBuffer"!=S.name}))){for(var q,K=(S=function(t){return f(this,S),new P(d(t))})[m]=P[m],Y=p(P),Q=0;Y.length>Q;)(q=Y[Q++])in S||a(S,q,P[q]);o||(K.constructor=S)}var H=new w(new S(2)),J=w[m].setInt8;H.setInt8(0,2147483648),H.setInt8(1,2147483649),!H.getInt8(0)&&H.getInt8(1)||c(w[m],{setInt8:function(t,n){J.call(this,t,n<<24>>24)},setUint8:function(t,n){J.call(this,t,n<<24>>24)}},!0)}else S=function(t){f(this,S,"ArrayBuffer");var n=d(t);this._b=g.call(new Array(n),0),this[k]=n},w=function(t,n,e){f(this,w,"DataView"),f(t,S,"DataView");var r=t[k],i=l(n);if(i<0||i>r)throw M("Wrong offset!");if(i+(e=void 0===e?r-i:h(e))>r)throw M("Wrong length!");this[R]=t,this[T]=i,this[k]=e},i&&(D(S,"byteLength","_l"),D(w,"buffer","_b"),D(w,"byteLength","_l"),D(w,"byteOffset","_o")),c(w[m],{getInt8:function(t){return U(this,1,t)[0]<<24>>24},getUint8:function(t){return U(this,1,t)[0]},getInt16:function(t){var n=U(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=U(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return L(U(this,4,t,arguments[1]))},getUint32:function(t){return L(U(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return j(U(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return j(U(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){z(this,1,t,B,n)},setUint8:function(t,n){z(this,1,t,B,n)},setInt16:function(t,n){z(this,2,t,C,n,arguments[2])},setUint16:function(t,n){z(this,2,t,C,n,arguments[2])},setInt32:function(t,n){z(this,4,t,W,n,arguments[2])},setUint32:function(t,n){z(this,4,t,W,n,arguments[2])},setFloat32:function(t,n){z(this,4,t,G,n,arguments[2])},setFloat64:function(t,n){z(this,8,t,V,n,arguments[2])}});y(S,"ArrayBuffer"),y(w,"DataView"),a(w[m],u.VIEW,!0),n.ArrayBuffer=S,n.DataView=w},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(128)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){"use strict";n.__esModule=!0,n.default=void 0;var r,i=(r=e(91))&&r.__esModule?r:{default:r},o=e(18);function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){}var n,e,r;return t.getParser=function(t,n){if(void 0===n&&(n=!1),"string"!=typeof t)throw new Error("UserAgent should be a string");return new i.default(t,n)},t.parse=function(t){return new i.default(t).getResult()},n=t,r=[{key:"BROWSER_MAP",get:function(){return o.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return o.ENGINE_MAP}},{key:"OS_MAP",get:function(){return o.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return o.PLATFORMS_MAP}}],(e=null)&&u(n.prototype,e),r&&u(n,r),t}();n.default=a,t.exports=n.default},function(t,n,e){"use strict";n.__esModule=!0,n.default=void 0;var r=c(e(92)),i=c(e(93)),o=c(e(94)),u=c(e(95)),a=c(e(17));function c(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(t,n){if(void 0===n&&(n=!1),null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==n&&this.parse()}var n=t.prototype;return n.getUA=function(){return this._ua},n.test=function(t){return t.test(this._ua)},n.parseBrowser=function(){var t=this;this.parsedResult.browser={};var n=a.default.find(r.default,(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some((function(n){return t.test(n)}));throw new Error("Browser's test function is not valid")}));return n&&(this.parsedResult.browser=n.describe(this.getUA())),this.parsedResult.browser},n.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},n.getBrowserName=function(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},n.getBrowserVersion=function(){return this.getBrowser().version},n.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},n.parseOS=function(){var t=this;this.parsedResult.os={};var n=a.default.find(i.default,(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some((function(n){return t.test(n)}));throw new Error("Browser's test function is not valid")}));return n&&(this.parsedResult.os=n.describe(this.getUA())),this.parsedResult.os},n.getOSName=function(t){var n=this.getOS().name;return t?String(n).toLowerCase()||"":n||""},n.getOSVersion=function(){return this.getOS().version},n.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},n.getPlatformType=function(t){void 0===t&&(t=!1);var n=this.getPlatform().type;return t?String(n).toLowerCase()||"":n||""},n.parsePlatform=function(){var t=this;this.parsedResult.platform={};var n=a.default.find(o.default,(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some((function(n){return t.test(n)}));throw new Error("Browser's test function is not valid")}));return n&&(this.parsedResult.platform=n.describe(this.getUA())),this.parsedResult.platform},n.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},n.getEngineName=function(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},n.parseEngine=function(){var t=this;this.parsedResult.engine={};var n=a.default.find(u.default,(function(n){if("function"==typeof n.test)return n.test(t);if(n.test instanceof Array)return n.test.some((function(n){return t.test(n)}));throw new Error("Browser's test function is not valid")}));return n&&(this.parsedResult.engine=n.describe(this.getUA())),this.parsedResult.engine},n.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},n.getResult=function(){return a.default.assign({},this.parsedResult)},n.satisfies=function(t){var n=this,e={},r=0,i={},o=0;if(Object.keys(t).forEach((function(n){var u=t[n];"string"==typeof u?(i[n]=u,o+=1):"object"==typeof u&&(e[n]=u,r+=1)})),r>0){var u=Object.keys(e),c=a.default.find(u,(function(t){return n.isOS(t)}));if(c){var s=this.satisfies(e[c]);if(void 0!==s)return s}var f=a.default.find(u,(function(t){return n.isPlatform(t)}));if(f){var l=this.satisfies(e[f]);if(void 0!==l)return l}}if(o>0){var h=Object.keys(i),d=a.default.find(h,(function(t){return n.isBrowser(t,!0)}));if(void 0!==d)return this.compareVersion(i[d])}},n.isBrowser=function(t,n){void 0===n&&(n=!1);var e=this.getBrowserName().toLowerCase(),r=t.toLowerCase(),i=a.default.getBrowserTypeByAlias(r);return n&&i&&(r=i.toLowerCase()),r===e},n.compareVersion=function(t){var n=[0],e=t,r=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===t[0]||"<"===t[0]?(e=t.substr(1),"="===t[1]?(r=!0,e=t.substr(2)):n=[],">"===t[0]?n.push(1):n.push(-1)):"="===t[0]?e=t.substr(1):"~"===t[0]&&(r=!0,e=t.substr(1)),n.indexOf(a.default.compareVersions(i,e,r))>-1},n.isOS=function(t){return this.getOSName(!0)===String(t).toLowerCase()},n.isPlatform=function(t){return this.getPlatformType(!0)===String(t).toLowerCase()},n.isEngine=function(t){return this.getEngineName(!0)===String(t).toLowerCase()},n.is=function(t){return this.isBrowser(t)||this.isOS(t)||this.isPlatform(t)},n.some=function(t){var n=this;return void 0===t&&(t=[]),t.some((function(t){return n.is(t)}))},t}();n.default=s,t.exports=n.default},function(t,n,e){"use strict";n.__esModule=!0,n.default=void 0;var r,i=(r=e(17))&&r.__esModule?r:{default:r};var o=/version\/(\d+(\.?_?\d+)+)/i,u=[{test:[/googlebot/i],describe:function(t){var n={name:"Googlebot"},e=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/opera/i],describe:function(t){var n={name:"Opera"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/opr\/|opios/i],describe:function(t){var n={name:"Opera"},e=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/SamsungBrowser/i],describe:function(t){var n={name:"Samsung Internet for Android"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/Whale/i],describe:function(t){var n={name:"NAVER Whale Browser"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/MZBrowser/i],describe:function(t){var n={name:"MZ Browser"},e=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/focus/i],describe:function(t){var n={name:"Focus"},e=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/swing/i],describe:function(t){var n={name:"Swing"},e=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/coast/i],describe:function(t){var n={name:"Opera Coast"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(t){var n={name:"Opera Touch"},e=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/yabrowser/i],describe:function(t){var n={name:"Yandex Browser"},e=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/ucbrowser/i],describe:function(t){var n={name:"UC Browser"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/Maxthon|mxios/i],describe:function(t){var n={name:"Maxthon"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/epiphany/i],describe:function(t){var n={name:"Epiphany"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/puffin/i],describe:function(t){var n={name:"Puffin"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/sleipnir/i],describe:function(t){var n={name:"Sleipnir"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/k-meleon/i],describe:function(t){var n={name:"K-Meleon"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/micromessenger/i],describe:function(t){var n={name:"WeChat"},e=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/qqbrowser/i],describe:function(t){var n={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},e=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/msie|trident/i],describe:function(t){var n={name:"Internet Explorer"},e=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/\sedg\//i],describe:function(t){var n={name:"Microsoft Edge"},e=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/edg([ea]|ios)/i],describe:function(t){var n={name:"Microsoft Edge"},e=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/vivaldi/i],describe:function(t){var n={name:"Vivaldi"},e=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/seamonkey/i],describe:function(t){var n={name:"SeaMonkey"},e=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/sailfish/i],describe:function(t){var n={name:"Sailfish"},e=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return e&&(n.version=e),n}},{test:[/silk/i],describe:function(t){var n={name:"Amazon Silk"},e=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/phantom/i],describe:function(t){var n={name:"PhantomJS"},e=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/slimerjs/i],describe:function(t){var n={name:"SlimerJS"},e=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(t){var n={name:"BlackBerry"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/(web|hpw)[o0]s/i],describe:function(t){var n={name:"WebOS Browser"},e=i.default.getFirstMatch(o,t)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/bada/i],describe:function(t){var n={name:"Bada"},e=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/tizen/i],describe:function(t){var n={name:"Tizen"},e=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/qupzilla/i],describe:function(t){var n={name:"QupZilla"},e=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/firefox|iceweasel|fxios/i],describe:function(t){var n={name:"Firefox"},e=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/electron/i],describe:function(t){var n={name:"Electron"},e=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/chromium/i],describe:function(t){var n={name:"Chromium"},e=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/chrome|crios|crmo/i],describe:function(t){var n={name:"Chrome"},e=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/GSA/i],describe:function(t){var n={name:"Google Search"},e=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:function(t){var n=!t.test(/like android/i),e=t.test(/android/i);return n&&e},describe:function(t){var n={name:"Android Browser"},e=i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/playstation 4/i],describe:function(t){var n={name:"PlayStation 4"},e=i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/safari|applewebkit/i],describe:function(t){var n={name:"Safari"},e=i.default.getFirstMatch(o,t);return e&&(n.version=e),n}},{test:[/.*/i],describe:function(t){var n=-1!==t.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(n,t),version:i.default.getSecondMatch(n,t)}}}];n.default=u,t.exports=n.default},function(t,n,e){"use strict";n.__esModule=!0,n.default=void 0;var r,i=(r=e(17))&&r.__esModule?r:{default:r},o=e(18);var u=[{test:[/Roku\/DVP/],describe:function(t){var n=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:o.OS_MAP.Roku,version:n}}},{test:[/windows phone/i],describe:function(t){var n=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.WindowsPhone,version:n}}},{test:[/windows /i],describe:function(t){var n=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),e=i.default.getWindowsVersionName(n);return{name:o.OS_MAP.Windows,version:n,versionName:e}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(t){var n={name:o.OS_MAP.iOS},e=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return e&&(n.version=e),n}},{test:[/macintosh/i],describe:function(t){var n=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),e=i.default.getMacOSVersionName(n),r={name:o.OS_MAP.MacOS,version:n};return e&&(r.versionName=e),r}},{test:[/(ipod|iphone|ipad)/i],describe:function(t){var n=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:o.OS_MAP.iOS,version:n}}},{test:function(t){var n=!t.test(/like android/i),e=t.test(/android/i);return n&&e},describe:function(t){var n=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),e=i.default.getAndroidVersionName(n),r={name:o.OS_MAP.Android,version:n};return e&&(r.versionName=e),r}},{test:[/(web|hpw)[o0]s/i],describe:function(t){var n=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),e={name:o.OS_MAP.WebOS};return n&&n.length&&(e.version=n),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(t){var n=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||i.default.getFirstMatch(/\bbb(\d+)/i,t);return{name:o.OS_MAP.BlackBerry,version:n}}},{test:[/bada/i],describe:function(t){var n=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.Bada,version:n}}},{test:[/tizen/i],describe:function(t){var n=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.Tizen,version:n}}},{test:[/linux/i],describe:function(){return{name:o.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:o.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(t){var n=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.PlayStation4,version:n}}}];n.default=u,t.exports=n.default},function(t,n,e){"use strict";n.__esModule=!0,n.default=void 0;var r,i=(r=e(17))&&r.__esModule?r:{default:r},o=e(18);var u=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(t){var n=i.default.getFirstMatch(/(can-l01)/i,t)&&"Nova",e={type:o.PLATFORMS_MAP.mobile,vendor:"Huawei"};return n&&(e.model=n),e}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(t){var n=t.test(/ipod|iphone/i),e=t.test(/like (ipod|iphone)/i);return n&&!e},describe:function(t){var n=i.default.getFirstMatch(/(ipod|iphone)/i,t);return{type:o.PLATFORMS_MAP.mobile,vendor:"Apple",model:n}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(t){return"blackberry"===t.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(t){return"bada"===t.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(t){return"windows phone"===t.getBrowserName()},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(t){var n=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&n>=3},describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(t){return"android"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(t){return"macos"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(t){return"windows"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(t){return"linux"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(t){return"playstation 4"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}},{test:function(t){return"roku"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}}];n.default=u,t.exports=n.default},function(t,n,e){"use strict";n.__esModule=!0,n.default=void 0;var r,i=(r=e(17))&&r.__esModule?r:{default:r},o=e(18);var u=[{test:function(t){return"microsoft edge"===t.getBrowserName(!0)},describe:function(t){if(/\sedg\//i.test(t))return{name:o.ENGINE_MAP.Blink};var n=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:o.ENGINE_MAP.EdgeHTML,version:n}}},{test:[/trident/i],describe:function(t){var n={name:o.ENGINE_MAP.Trident},e=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:function(t){return t.test(/presto/i)},describe:function(t){var n={name:o.ENGINE_MAP.Presto},e=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:function(t){var n=t.test(/gecko/i),e=t.test(/like gecko/i);return n&&!e},describe:function(t){var n={name:o.ENGINE_MAP.Gecko},e=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:o.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(t){var n={name:o.ENGINE_MAP.WebKit},e=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return e&&(n.version=e),n}}];n.default=u,t.exports=n.default},function(t,n,e){t.exports=!e(8)&&!e(2)((function(){return 7!=Object.defineProperty(e(62)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(1),i=e(7),o=e(32),u=e(63),a=e(9).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||a(n,t,{value:u.f(t)})}},function(t,n,e){var r=e(13),i=e(15),o=e(51)(!1),u=e(64)("IE_PROTO");t.exports=function(t,n){var e,a=i(t),c=0,s=[];for(e in a)e!=u&&r(a,e)&&s.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~o(s,e)||s.push(e));return s}},function(t,n,e){var r=e(9),i=e(3),o=e(33);t.exports=e(8)?Object.defineProperties:function(t,n){i(t);for(var e,u=o(n),a=u.length,c=0;a>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(15),i=e(36).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(r(t))}},function(t,n,e){"use strict";var r=e(8),i=e(33),o=e(52),u=e(47),a=e(10),c=e(46),s=Object.assign;t.exports=!s||e(2)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=r}))?function(t,n){for(var e=a(t),s=arguments.length,f=1,l=o.f,h=u.f;s>f;)for(var d,p=c(arguments[f++]),v=l?i(p).concat(l(p)):i(p),g=v.length,y=0;g>y;)d=v[y++],r&&!h.call(p,d)||(e[d]=p[d]);return e}:s},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,e){"use strict";var r=e(20),i=e(4),o=e(104),u=[].slice,a={},c=function(t,n,e){if(!(n in a)){for(var r=[],i=0;i<n;i++)r[i]="a["+i+"]";a[n]=Function("F,a","return new F("+r.join(",")+")")}return a[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=u.call(arguments,1),a=function(){var r=e.concat(u.call(arguments));return this instanceof a?c(n,r.length,r):o(n,r,t)};return i(n.prototype)&&(a.prototype=n.prototype),a}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(1).parseInt,i=e(41).trim,o=e(68),u=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,n){var e=i(String(t),3);return r(e,n>>>0||(u.test(e)?16:10))}:r},function(t,n,e){var r=e(1).parseFloat,i=e(41).trim;t.exports=1/r(e(68)+"-0")!=-1/0?function(t){var n=i(String(t),3),e=r(n);return 0===e&&"-"==n.charAt(0)?-0:e}:r},function(t,n,e){var r=e(25);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(n);return+t}},function(t,n,e){var r=e(4),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,n){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,e){"use strict";var r=e(35),i=e(30),o=e(40),u={};e(14)(u,e(5)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:i(1,e)}),o(t,n+" Iterator")}},function(t,n,e){var r=e(3);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},function(t,n,e){var r=e(224);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(20),i=e(10),o=e(46),u=e(6);t.exports=function(t,n,e,a,c){r(n);var s=i(t),f=o(s),l=u(s.length),h=c?l-1:0,d=c?-1:1;if(e<2)for(;;){if(h in f){a=f[h],h+=d;break}if(h+=d,c?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;c?h>=0:l>h;h+=d)h in f&&(a=n(a,f[h],h,s));return a}},function(t,n,e){"use strict";var r=e(10),i=e(34),o=e(6);t.exports=[].copyWithin||function(t,n){var e=r(this),u=o(e.length),a=i(t,u),c=i(n,u),s=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===s?u:i(s,u))-c,u-a),l=1;for(c<a&&a<c+f&&(l=-1,c+=f-1,a+=f-1);f-- >0;)c in e?e[a]=e[c]:delete e[a],a+=l,c+=l;return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r=e(83);e(0)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,n,e){e(8)&&"g"!=/./g.flags&&e(9).f(RegExp.prototype,"flags",{configurable:!0,get:e(55)})},function(t,n,e){"use strict";var r,i,o,u,a=e(32),c=e(1),s=e(19),f=e(48),l=e(0),h=e(4),d=e(20),p=e(44),v=e(58),g=e(49),y=e(85).set,m=e(244)(),b=e(119),S=e(245),w=e(59),_=e(120),M=c.TypeError,x=c.process,P=x&&x.versions,O=P&&P.v8||"",F=c.Promise,A="process"==f(x),E=function(){},N=i=b.f,R=!!function(){try{var t=F.resolve(1),n=(t.constructor={})[e(5)("species")]=function(t){t(E,E)};return(A||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof n&&0!==O.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),k=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},T=function(t,n){if(!t._n){t._n=!0;var e=t._c;m((function(){for(var r=t._v,i=1==t._s,o=0,u=function(n){var e,o,u,a=i?n.ok:n.fail,c=n.resolve,s=n.reject,f=n.domain;try{a?(i||(2==t._h&&L(t),t._h=1),!0===a?e=r:(f&&f.enter(),e=a(r),f&&(f.exit(),u=!0)),e===n.promise?s(M("Promise-chain cycle")):(o=k(e))?o.call(e,c,s):c(e)):s(r)}catch(t){f&&!u&&f.exit(),s(t)}};e.length>o;)u(e[o++]);t._c=[],t._n=!1,n&&!t._h&&I(t)}))}},I=function(t){y.call(c,(function(){var n,e,r,i=t._v,o=j(t);if(o&&(n=S((function(){A?x.emit("unhandledRejection",i,t):(e=c.onunhandledrejection)?e({promise:t,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)})),t._h=A||j(t)?2:1),t._a=void 0,o&&n.e)throw n.v}))},j=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){y.call(c,(function(){var n;A?x.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})}))},B=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),T(n,!0))},C=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw M("Promise can't be resolved itself");(n=k(t))?m((function(){var r={_w:e,_d:!1};try{n.call(t,s(C,r,1),s(B,r,1))}catch(t){B.call(r,t)}})):(e._v=t,e._s=1,T(e,!1))}catch(t){B.call({_w:e,_d:!1},t)}}};R||(F=function(t){p(this,F,"Promise","_h"),d(t),r.call(this);try{t(s(C,this,1),s(B,this,1))}catch(t){B.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(45)(F.prototype,{then:function(t,n){var e=N(g(this,F));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=A?x.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&T(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=s(C,t,1),this.reject=s(B,t,1)},b.f=N=function(t){return t===F||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!R,{Promise:F}),e(40)(F,"Promise"),e(43)("Promise"),u=e(7).Promise,l(l.S+l.F*!R,"Promise",{reject:function(t){var n=N(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(a||!R),"Promise",{resolve:function(t){return _(a&&this===u?F:this,t)}}),l(l.S+l.F*!(R&&e(54)((function(t){F.all(t).catch(E)}))),"Promise",{all:function(t){var n=this,e=N(n),r=e.resolve,i=e.reject,o=S((function(){var e=[],o=0,u=1;v(t,!1,(function(t){var a=o++,c=!1;e.push(void 0),u++,n.resolve(t).then((function(t){c||(c=!0,e[a]=t,--u||r(e))}),i)})),--u||r(e)}));return o.e&&i(o.v),e.promise},race:function(t){var n=this,e=N(n),r=e.reject,i=S((function(){v(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return i.e&&r(i.v),e.promise}})},function(t,n,e){"use strict";var r=e(20);function i(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new i(t)}},function(t,n,e){var r=e(3),i=e(4),o=e(119);t.exports=function(t,n){if(r(t),i(n)&&n.constructor===t)return n;var e=o.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){"use strict";var r=e(9).f,i=e(35),o=e(45),u=e(19),a=e(44),c=e(58),s=e(74),f=e(115),l=e(43),h=e(8),d=e(29).fastKey,p=e(39),v=h?"_s":"size",g=function(t,n){var e,r=d(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,s){var f=t((function(t,r){a(t,f,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[v]=0,null!=r&&c(r,e,t[s],t)}));return o(f.prototype,{clear:function(){for(var t=p(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var e=p(this,n),r=g(e,t);if(r){var i=r.n,o=r.p;delete e._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),e._f==r&&(e._f=i),e._l==r&&(e._l=o),e[v]--}return!!r},forEach:function(t){p(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!g(p(this,n),t)}}),h&&r(f.prototype,"size",{get:function(){return p(this,n)[v]}}),f},def:function(t,n,e){var r,i,o=g(t,n);return o?o.v=e:(t._l=o={i:i=d(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[v]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,n,e){s(t,n,(function(t,e){this._t=p(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))}),e?"entries":"values",!e,!0),l(n)}}},function(t,n,e){"use strict";var r=e(45),i=e(29).getWeak,o=e(3),u=e(4),a=e(44),c=e(58),s=e(24),f=e(13),l=e(39),h=s(5),d=s(6),p=0,v=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},y=function(t,n){return h(t.a,(function(t){return t[0]===n}))};g.prototype={get:function(t){var n=y(this,t);if(n)return n[1]},has:function(t){return!!y(this,t)},set:function(t,n){var e=y(this,t);e?e[1]=n:this.a.push([t,n])},delete:function(t){var n=d(this.a,(function(n){return n[0]===t}));return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,o){var s=t((function(t,r){a(t,s,n,"_i"),t._t=n,t._i=p++,t._l=void 0,null!=r&&c(r,e,t[o],t)}));return r(s.prototype,{delete:function(t){if(!u(t))return!1;var e=i(t);return!0===e?v(l(this,n)).delete(t):e&&f(e,this._i)&&delete e[this._i]},has:function(t){if(!u(t))return!1;var e=i(t);return!0===e?v(l(this,n)).has(t):e&&f(e,this._i)}}),s},def:function(t,n,e){var r=i(o(n),!0);return!0===r?v(t).set(n,e):r[t._i]=e,t},ufstore:v}},function(t,n,e){var r=e(21),i=e(6);t.exports=function(t){if(void 0===t)return 0;var n=r(t),e=i(n);if(n!==e)throw RangeError("Wrong length!");return e}},function(t,n,e){var r=e(36),i=e(52),o=e(3),u=e(1).Reflect;t.exports=u&&u.ownKeys||function(t){var n=r.f(o(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(6),i=e(70),o=e(26);t.exports=function(t,n,e,u){var a=String(o(t)),c=a.length,s=void 0===e?" ":String(e),f=r(n);if(f<=c||""==s)return a;var l=f-c,h=i.call(s,Math.ceil(l/s.length));return h.length>l&&(h=h.slice(0,l)),u?h+a:a+h}},function(t,n,e){var r=e(8),i=e(33),o=e(15),u=e(47).f;t.exports=function(t){return function(n){for(var e,a=o(n),c=i(a),s=c.length,f=0,l=[];s>f;)e=c[f++],r&&!u.call(a,e)||l.push(t?[e,a[e]]:a[e]);return l}}},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){e(130),t.exports=e(90)},function(t,n,e){"use strict";e(131);var r,i=(r=e(303))&&r.__esModule?r:{default:r};i.default._babelPolyfill&&"undefined"!=typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),i.default._babelPolyfill=!0},function(t,n,e){"use strict";e(132),e(275),e(277),e(280),e(282),e(284),e(286),e(288),e(290),e(292),e(294),e(296),e(298),e(302)},function(t,n,e){e(133),e(136),e(137),e(138),e(139),e(140),e(141),e(142),e(143),e(144),e(145),e(146),e(147),e(148),e(149),e(150),e(151),e(152),e(153),e(154),e(155),e(156),e(157),e(158),e(159),e(160),e(161),e(162),e(163),e(164),e(165),e(166),e(167),e(168),e(169),e(170),e(171),e(172),e(173),e(174),e(175),e(176),e(177),e(179),e(180),e(181),e(182),e(183),e(184),e(185),e(186),e(187),e(188),e(189),e(190),e(191),e(192),e(193),e(194),e(195),e(196),e(197),e(198),e(199),e(200),e(201),e(202),e(203),e(204),e(205),e(206),e(207),e(208),e(209),e(210),e(211),e(212),e(214),e(215),e(217),e(218),e(219),e(220),e(221),e(222),e(223),e(225),e(226),e(227),e(228),e(229),e(230),e(231),e(232),e(233),e(234),e(235),e(236),e(237),e(82),e(238),e(116),e(239),e(117),e(240),e(241),e(242),e(243),e(118),e(246),e(247),e(248),e(249),e(250),e(251),e(252),e(253),e(254),e(255),e(256),e(257),e(258),e(259),e(260),e(261),e(262),e(263),e(264),e(265),e(266),e(267),e(268),e(269),e(270),e(271),e(272),e(273),e(274),t.exports=e(7)},function(t,n,e){"use strict";var r=e(1),i=e(13),o=e(8),u=e(0),a=e(11),c=e(29).KEY,s=e(2),f=e(50),l=e(40),h=e(31),d=e(5),p=e(63),v=e(97),g=e(135),y=e(53),m=e(3),b=e(4),S=e(10),w=e(15),_=e(28),M=e(30),x=e(35),P=e(100),O=e(22),F=e(52),A=e(9),E=e(33),N=O.f,R=A.f,k=P.f,T=r.Symbol,I=r.JSON,j=I&&I.stringify,L=d("_hidden"),B=d("toPrimitive"),C={}.propertyIsEnumerable,W=f("symbol-registry"),V=f("symbols"),G=f("op-symbols"),D=Object.prototype,U="function"==typeof T&&!!F.f,z=r.QObject,q=!z||!z.prototype||!z.prototype.findChild,K=o&&s((function(){return 7!=x(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=N(D,n);r&&delete D[n],R(t,n,e),r&&t!==D&&R(D,n,r)}:R,Y=function(t){var n=V[t]=x(T.prototype);return n._k=t,n},Q=U&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},H=function(t,n,e){return t===D&&H(G,n,e),m(t),n=_(n,!0),m(e),i(V,n)?(e.enumerable?(i(t,L)&&t[L][n]&&(t[L][n]=!1),e=x(e,{enumerable:M(0,!1)})):(i(t,L)||R(t,L,M(1,{})),t[L][n]=!0),K(t,n,e)):R(t,n,e)},J=function(t,n){m(t);for(var e,r=g(n=w(n)),i=0,o=r.length;o>i;)H(t,e=r[i++],n[e]);return t},X=function(t){var n=C.call(this,t=_(t,!0));return!(this===D&&i(V,t)&&!i(G,t))&&(!(n||!i(this,t)||!i(V,t)||i(this,L)&&this[L][t])||n)},Z=function(t,n){if(t=w(t),n=_(n,!0),t!==D||!i(V,n)||i(G,n)){var e=N(t,n);return!e||!i(V,n)||i(t,L)&&t[L][n]||(e.enumerable=!0),e}},$=function(t){for(var n,e=k(w(t)),r=[],o=0;e.length>o;)i(V,n=e[o++])||n==L||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===D,r=k(e?G:w(t)),o=[],u=0;r.length>u;)!i(V,n=r[u++])||e&&!i(D,n)||o.push(V[n]);return o};U||(a((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(e){this===D&&n.call(G,e),i(this,L)&&i(this[L],t)&&(this[L][t]=!1),K(this,t,M(1,e))};return o&&q&&K(D,t,{configurable:!0,set:n}),Y(t)}).prototype,"toString",(function(){return this._k})),O.f=Z,A.f=H,e(36).f=P.f=$,e(47).f=X,F.f=tt,o&&!e(32)&&a(D,"propertyIsEnumerable",X,!0),p.f=function(t){return Y(d(t))}),u(u.G+u.W+u.F*!U,{Symbol:T});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)d(nt[et++]);for(var rt=E(d.store),it=0;rt.length>it;)v(rt[it++]);u(u.S+u.F*!U,"Symbol",{for:function(t){return i(W,t+="")?W[t]:W[t]=T(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var n in W)if(W[n]===t)return n},useSetter:function(){q=!0},useSimple:function(){q=!1}}),u(u.S+u.F*!U,"Object",{create:function(t,n){return void 0===n?x(t):J(x(t),n)},defineProperty:H,defineProperties:J,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var ot=s((function(){F.f(1)}));u(u.S+u.F*ot,"Object",{getOwnPropertySymbols:function(t){return F.f(S(t))}}),I&&u(u.S+u.F*(!U||s((function(){var t=T();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))}))),"JSON",{stringify:function(t){for(var n,e,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(e=n=r[1],(b(n)||void 0!==t)&&!Q(t))return y(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!Q(n))return n}),r[1]=n,j.apply(I,r)}}),T.prototype[B]||e(14)(T.prototype,B,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){t.exports=e(50)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(33),i=e(52),o=e(47);t.exports=function(t){var n=r(t),e=i.f;if(e)for(var u,a=e(t),c=o.f,s=0;a.length>s;)c.call(t,u=a[s++])&&n.push(u);return n}},function(t,n,e){var r=e(0);r(r.S,"Object",{create:e(35)})},function(t,n,e){var r=e(0);r(r.S+r.F*!e(8),"Object",{defineProperty:e(9).f})},function(t,n,e){var r=e(0);r(r.S+r.F*!e(8),"Object",{defineProperties:e(99)})},function(t,n,e){var r=e(15),i=e(22).f;e(23)("getOwnPropertyDescriptor",(function(){return function(t,n){return i(r(t),n)}}))},function(t,n,e){var r=e(10),i=e(37);e(23)("getPrototypeOf",(function(){return function(t){return i(r(t))}}))},function(t,n,e){var r=e(10),i=e(33);e(23)("keys",(function(){return function(t){return i(r(t))}}))},function(t,n,e){e(23)("getOwnPropertyNames",(function(){return e(100).f}))},function(t,n,e){var r=e(4),i=e(29).onFreeze;e(23)("freeze",(function(t){return function(n){return t&&r(n)?t(i(n)):n}}))},function(t,n,e){var r=e(4),i=e(29).onFreeze;e(23)("seal",(function(t){return function(n){return t&&r(n)?t(i(n)):n}}))},function(t,n,e){var r=e(4),i=e(29).onFreeze;e(23)("preventExtensions",(function(t){return function(n){return t&&r(n)?t(i(n)):n}}))},function(t,n,e){var r=e(4);e(23)("isFrozen",(function(t){return function(n){return!r(n)||!!t&&t(n)}}))},function(t,n,e){var r=e(4);e(23)("isSealed",(function(t){return function(n){return!r(n)||!!t&&t(n)}}))},function(t,n,e){var r=e(4);e(23)("isExtensible",(function(t){return function(n){return!!r(n)&&(!t||t(n))}}))},function(t,n,e){var r=e(0);r(r.S+r.F,"Object",{assign:e(101)})},function(t,n,e){var r=e(0);r(r.S,"Object",{is:e(102)})},function(t,n,e){var r=e(0);r(r.S,"Object",{setPrototypeOf:e(67).set})},function(t,n,e){"use strict";var r=e(48),i={};i[e(5)("toStringTag")]="z",i+""!="[object z]"&&e(11)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,n,e){var r=e(0);r(r.P,"Function",{bind:e(103)})},function(t,n,e){var r=e(9).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||e(8)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,e){"use strict";var r=e(4),i=e(37),o=e(5)("hasInstance"),u=Function.prototype;o in u||e(9).f(u,o,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,e){var r=e(0),i=e(105);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,n,e){var r=e(0),i=e(106);r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},function(t,n,e){"use strict";var r=e(1),i=e(13),o=e(25),u=e(69),a=e(28),c=e(2),s=e(36).f,f=e(22).f,l=e(9).f,h=e(41).trim,d=r.Number,p=d,v=d.prototype,g="Number"==o(e(35)(v)),y="trim"in String.prototype,m=function(t){var n=a(t,!1);if("string"==typeof n&&n.length>2){var e,r,i,o=(n=y?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+n}for(var u,c=n.slice(2),s=0,f=c.length;s<f;s++)if((u=c.charCodeAt(s))<48||u>i)return NaN;return parseInt(c,r)}}return+n};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof d&&(g?c((function(){v.valueOf.call(e)})):"Number"!=o(e))?u(new p(m(n)),e,d):m(n)};for(var b,S=e(8)?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;S.length>w;w++)i(p,b=S[w])&&!i(d,b)&&l(d,b,f(p,b));d.prototype=v,v.constructor=d,e(11)(r,"Number",d)}},function(t,n,e){"use strict";var r=e(0),i=e(21),o=e(107),u=e(70),a=1..toFixed,c=Math.floor,s=[0,0,0,0,0,0],f="Number.toFixed: incorrect invocation!",l=function(t,n){for(var e=-1,r=n;++e<6;)r+=t*s[e],s[e]=r%1e7,r=c(r/1e7)},h=function(t){for(var n=6,e=0;--n>=0;)e+=s[n],s[n]=c(e/t),e=e%t*1e7},d=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==s[t]){var e=String(s[t]);n=""===n?e:n+u.call("0",7-e.length)+e}return n},p=function(t,n,e){return 0===n?e:n%2==1?p(t,n-1,e*t):p(t*t,n/2,e)};r(r.P+r.F*(!!a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!e(2)((function(){a.call({})}))),"Number",{toFixed:function(t){var n,e,r,a,c=o(this,f),s=i(t),v="",g="0";if(s<0||s>20)throw RangeError(f);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(c*p(2,69,1))-69)<0?c*p(2,-n,1):c/p(2,n,1),e*=4503599627370496,(n=52-n)>0){for(l(0,e),r=s;r>=7;)l(1e7,0),r-=7;for(l(p(10,r,1),0),r=n-1;r>=23;)h(1<<23),r-=23;h(1<<r),l(1,1),h(2),g=d()}else l(0,e),l(1<<-n,0),g=d()+u.call("0",s);return g=s>0?v+((a=g.length)<=s?"0."+u.call("0",s-a)+g:g.slice(0,a-s)+"."+g.slice(a-s)):v+g}})},function(t,n,e){"use strict";var r=e(0),i=e(2),o=e(107),u=1..toPrecision;r(r.P+r.F*(i((function(){return"1"!==u.call(1,void 0)}))||!i((function(){u.call({})}))),"Number",{toPrecision:function(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},function(t,n,e){var r=e(0);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,e){var r=e(0),i=e(1).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,n,e){var r=e(0);r(r.S,"Number",{isInteger:e(108)})},function(t,n,e){var r=e(0);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,e){var r=e(0),i=e(108),o=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,e){var r=e(0);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,e){var r=e(0);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,e){var r=e(0),i=e(106);r(r.S+r.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,e){var r=e(0),i=e(105);r(r.S+r.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,e){var r=e(0),i=e(109),o=Math.sqrt,u=Math.acosh;r(r.S+r.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,e){var r=e(0),i=Math.asinh;r(r.S+r.F*!(i&&1/i(0)>0),"Math",{asinh:function t(n){return isFinite(n=+n)&&0!=n?n<0?-t(-n):Math.log(n+Math.sqrt(n*n+1)):n}})},function(t,n,e){var r=e(0),i=Math.atanh;r(r.S+r.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,e){var r=e(0),i=e(71);r(r.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,e){var r=e(0);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,e){var r=e(0),i=Math.exp;r(r.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,n,e){var r=e(0),i=e(72);r(r.S+r.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,e){var r=e(0);r(r.S,"Math",{fround:e(178)})},function(t,n,e){var r=e(71),i=Math.pow,o=i(2,-52),u=i(2,-23),a=i(2,127)*(2-u),c=i(2,-126);t.exports=Math.fround||function(t){var n,e,i=Math.abs(t),s=r(t);return i<c?s*(i/c/u+1/o-1/o)*c*u:(e=(n=(1+u/o)*i)-(n-i))>a||e!=e?s*(1/0):s*e}},function(t,n,e){var r=e(0),i=Math.abs;r(r.S,"Math",{hypot:function(t,n){for(var e,r,o=0,u=0,a=arguments.length,c=0;u<a;)c<(e=i(arguments[u++]))?(o=o*(r=c/e)*r+1,c=e):o+=e>0?(r=e/c)*r:e;return c===1/0?1/0:c*Math.sqrt(o)}})},function(t,n,e){var r=e(0),i=Math.imul;r(r.S+r.F*e(2)((function(){return-5!=i(4294967295,5)||2!=i.length})),"Math",{imul:function(t,n){var e=+t,r=+n,i=65535&e,o=65535&r;return 0|i*o+((65535&e>>>16)*o+i*(65535&r>>>16)<<16>>>0)}})},function(t,n,e){var r=e(0);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,n,e){var r=e(0);r(r.S,"Math",{log1p:e(109)})},function(t,n,e){var r=e(0);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,n,e){var r=e(0);r(r.S,"Math",{sign:e(71)})},function(t,n,e){var r=e(0),i=e(72),o=Math.exp;r(r.S+r.F*e(2)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,e){var r=e(0),i=e(72),o=Math.exp;r(r.S,"Math",{tanh:function(t){var n=i(t=+t),e=i(-t);return n==1/0?1:e==1/0?-1:(n-e)/(o(t)+o(-t))}})},function(t,n,e){var r=e(0);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,e){var r=e(0),i=e(34),o=String.fromCharCode,u=String.fromCodePoint;r(r.S+r.F*(!!u&&1!=u.length),"String",{fromCodePoint:function(t){for(var n,e=[],r=arguments.length,u=0;r>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");e.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return e.join("")}})},function(t,n,e){var r=e(0),i=e(15),o=e(6);r(r.S,"String",{raw:function(t){for(var n=i(t.raw),e=o(n.length),r=arguments.length,u=[],a=0;e>a;)u.push(String(n[a++])),a<r&&u.push(String(arguments[a]));return u.join("")}})},function(t,n,e){"use strict";e(41)("trim",(function(t){return function(){return t(this,3)}}))},function(t,n,e){"use strict";var r=e(73)(!0);e(74)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n,e){"use strict";var r=e(0),i=e(73)(!1);r(r.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,n,e){"use strict";var r=e(0),i=e(6),o=e(75),u="".endsWith;r(r.P+r.F*e(77)("endsWith"),"String",{endsWith:function(t){var n=o(this,t,"endsWith"),e=arguments.length>1?arguments[1]:void 0,r=i(n.length),a=void 0===e?r:Math.min(i(e),r),c=String(t);return u?u.call(n,c,a):n.slice(a-c.length,a)===c}})},function(t,n,e){"use strict";var r=e(0),i=e(75);r(r.P+r.F*e(77)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(0);r(r.P,"String",{repeat:e(70)})},function(t,n,e){"use strict";var r=e(0),i=e(6),o=e(75),u="".startsWith;r(r.P+r.F*e(77)("startsWith"),"String",{startsWith:function(t){var n=o(this,t,"startsWith"),e=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return u?u.call(n,r,e):n.slice(e,e+r.length)===r}})},function(t,n,e){"use strict";e(12)("anchor",(function(t){return function(n){return t(this,"a","name",n)}}))},function(t,n,e){"use strict";e(12)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,n,e){"use strict";e(12)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,n,e){"use strict";e(12)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,n,e){"use strict";e(12)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,n,e){"use strict";e(12)("fontcolor",(function(t){return function(n){return t(this,"font","color",n)}}))},function(t,n,e){"use strict";e(12)("fontsize",(function(t){return function(n){return t(this,"font","size",n)}}))},function(t,n,e){"use strict";e(12)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,n,e){"use strict";e(12)("link",(function(t){return function(n){return t(this,"a","href",n)}}))},function(t,n,e){"use strict";e(12)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,n,e){"use strict";e(12)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,n,e){"use strict";e(12)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,n,e){"use strict";e(12)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,n,e){var r=e(0);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,e){"use strict";var r=e(0),i=e(10),o=e(28);r(r.P+r.F*e(2)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var n=i(this),e=o(n);return"number"!=typeof e||isFinite(e)?n.toISOString():null}})},function(t,n,e){var r=e(0),i=e(213);r(r.P+r.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,e){"use strict";var r=e(2),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),e=t.getUTCMilliseconds(),r=n<0?"-":n>9999?"+":"";return r+("00000"+Math.abs(n)).slice(r?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(e>99?e:"0"+u(e))+"Z"}:o},function(t,n,e){var r=Date.prototype,i=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&e(11)(r,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,n,e){var r=e(5)("toPrimitive"),i=Date.prototype;r in i||e(14)(i,r,e(216))},function(t,n,e){"use strict";var r=e(3),i=e(28);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(r(this),"number"!=t)}},function(t,n,e){var r=e(0);r(r.S,"Array",{isArray:e(53)})},function(t,n,e){"use strict";var r=e(19),i=e(0),o=e(10),u=e(111),a=e(78),c=e(6),s=e(79),f=e(80);i(i.S+i.F*!e(54)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,i,l,h=o(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,g=void 0!==v,y=0,m=f(h);if(g&&(v=r(v,p>2?arguments[2]:void 0,2)),null==m||d==Array&&a(m))for(e=new d(n=c(h.length));n>y;y++)s(e,y,g?v(h[y],y):h[y]);else for(l=m.call(h),e=new d;!(i=l.next()).done;y++)s(e,y,g?u(l,v,[i.value,y],!0):i.value);return e.length=y,e}})},function(t,n,e){"use strict";var r=e(0),i=e(79);r(r.S+r.F*e(2)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,n=arguments.length,e=new("function"==typeof this?this:Array)(n);n>t;)i(e,t,arguments[t++]);return e.length=n,e}})},function(t,n,e){"use strict";var r=e(0),i=e(15),o=[].join;r(r.P+r.F*(e(46)!=Object||!e(16)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,n,e){"use strict";var r=e(0),i=e(66),o=e(25),u=e(34),a=e(6),c=[].slice;r(r.P+r.F*e(2)((function(){i&&c.call(i)})),"Array",{slice:function(t,n){var e=a(this.length),r=o(this);if(n=void 0===n?e:n,"Array"==r)return c.call(this,t,n);for(var i=u(t,e),s=u(n,e),f=a(s-i),l=new Array(f),h=0;h<f;h++)l[h]="String"==r?this.charAt(i+h):this[i+h];return l}})},function(t,n,e){"use strict";var r=e(0),i=e(20),o=e(10),u=e(2),a=[].sort,c=[1,2,3];r(r.P+r.F*(u((function(){c.sort(void 0)}))||!u((function(){c.sort(null)}))||!e(16)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},function(t,n,e){"use strict";var r=e(0),i=e(24)(0),o=e(16)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,n,e){var r=e(4),i=e(53),o=e(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){"use strict";var r=e(0),i=e(24)(1);r(r.P+r.F*!e(16)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(24)(2);r(r.P+r.F*!e(16)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(24)(3);r(r.P+r.F*!e(16)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(24)(4);r(r.P+r.F*!e(16)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(113);r(r.P+r.F*!e(16)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,e){"use strict";var r=e(0),i=e(113);r(r.P+r.F*!e(16)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,e){"use strict";var r=e(0),i=e(51)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(u||!e(16)(o)),"Array",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(15),o=e(21),u=e(6),a=[].lastIndexOf,c=!!a&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!e(16)(a)),"Array",{lastIndexOf:function(t){if(c)return a.apply(this,arguments)||0;var n=i(this),e=u(n.length),r=e-1;for(arguments.length>1&&(r=Math.min(r,o(arguments[1]))),r<0&&(r=e+r);r>=0;r--)if(r in n&&n[r]===t)return r||0;return-1}})},function(t,n,e){var r=e(0);r(r.P,"Array",{copyWithin:e(114)}),e(38)("copyWithin")},function(t,n,e){var r=e(0);r(r.P,"Array",{fill:e(81)}),e(38)("fill")},function(t,n,e){"use strict";var r=e(0),i=e(24)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(38)("find")},function(t,n,e){"use strict";var r=e(0),i=e(24)(6),o="findIndex",u=!0;o in[]&&Array(1)[o]((function(){u=!1})),r(r.P+r.F*u,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(38)(o)},function(t,n,e){e(43)("Array")},function(t,n,e){var r=e(1),i=e(69),o=e(9).f,u=e(36).f,a=e(76),c=e(55),s=r.RegExp,f=s,l=s.prototype,h=/a/g,d=/a/g,p=new s(h)!==h;if(e(8)&&(!p||e(2)((function(){return d[e(5)("match")]=!1,s(h)!=h||s(d)==d||"/a/i"!=s(h,"i")})))){s=function(t,n){var e=this instanceof s,r=a(t),o=void 0===n;return!e&&r&&t.constructor===s&&o?t:i(p?new f(r&&!o?t.source:t,n):f((r=t instanceof s)?t.source:t,r&&o?c.call(t):n),e?this:l,s)};for(var v=function(t){t in s||o(s,t,{configurable:!0,get:function(){return f[t]},set:function(n){f[t]=n}})},g=u(f),y=0;g.length>y;)v(g[y++]);l.constructor=s,s.prototype=l,e(11)(r,"RegExp",s)}e(43)("RegExp")},function(t,n,e){"use strict";e(117);var r=e(3),i=e(55),o=e(8),u=/./.toString,a=function(t){e(11)(RegExp.prototype,"toString",t,!0)};e(2)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?a((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=u.name&&a((function(){return u.call(this)}))},function(t,n,e){"use strict";var r=e(3),i=e(6),o=e(84),u=e(56);e(57)("match",1,(function(t,n,e,a){return[function(e){var r=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=a(e,t,this);if(n.done)return n.value;var c=r(t),s=String(this);if(!c.global)return u(c,s);var f=c.unicode;c.lastIndex=0;for(var l,h=[],d=0;null!==(l=u(c,s));){var p=String(l[0]);h[d]=p,""===p&&(c.lastIndex=o(s,i(c.lastIndex),f)),d++}return 0===d?null:h}]}))},function(t,n,e){"use strict";var r=e(3),i=e(10),o=e(6),u=e(21),a=e(84),c=e(56),s=Math.max,f=Math.min,l=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;e(57)("replace",2,(function(t,n,e,p){return[function(r,i){var o=t(this),u=null==r?void 0:r[n];return void 0!==u?u.call(r,o,i):e.call(String(o),r,i)},function(t,n){var i=p(e,t,this,n);if(i.done)return i.value;var l=r(t),h=String(this),d="function"==typeof n;d||(n=String(n));var g=l.global;if(g){var y=l.unicode;l.lastIndex=0}for(var m=[];;){var b=c(l,h);if(null===b)break;if(m.push(b),!g)break;""===String(b[0])&&(l.lastIndex=a(h,o(l.lastIndex),y))}for(var S,w="",_=0,M=0;M<m.length;M++){b=m[M];for(var x=String(b[0]),P=s(f(u(b.index),h.length),0),O=[],F=1;F<b.length;F++)O.push(void 0===(S=b[F])?S:String(S));var A=b.groups;if(d){var E=[x].concat(O,P,h);void 0!==A&&E.push(A);var N=String(n.apply(void 0,E))}else N=v(x,h,P,O,A,n);P>=_&&(w+=h.slice(_,P)+N,_=P+x.length)}return w+h.slice(_)}];function v(t,n,r,o,u,a){var c=r+t.length,s=o.length,f=d;return void 0!==u&&(u=i(u),f=h),e.call(a,f,(function(e,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":a=u[i.slice(1,-1)];break;default:var f=+i;if(0===f)return e;if(f>s){var h=l(f/10);return 0===h?e:h<=s?void 0===o[h-1]?i.charAt(1):o[h-1]+i.charAt(1):e}a=o[f-1]}return void 0===a?"":a}))}}))},function(t,n,e){"use strict";var r=e(3),i=e(102),o=e(56);e(57)("search",1,(function(t,n,e,u){return[function(e){var r=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=u(e,t,this);if(n.done)return n.value;var a=r(t),c=String(this),s=a.lastIndex;i(s,0)||(a.lastIndex=0);var f=o(a,c);return i(a.lastIndex,s)||(a.lastIndex=s),null===f?-1:f.index}]}))},function(t,n,e){"use strict";var r=e(76),i=e(3),o=e(49),u=e(84),a=e(6),c=e(56),s=e(83),f=e(2),l=Math.min,h=[].push,d=!f((function(){RegExp(4294967295,"y")}));e(57)("split",2,(function(t,n,e,f){var p;return p="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);for(var o,u,a,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,d=void 0===n?4294967295:n>>>0,p=new RegExp(t.source,f+"g");(o=s.call(p,i))&&!((u=p.lastIndex)>l&&(c.push(i.slice(l,o.index)),o.length>1&&o.index<i.length&&h.apply(c,o.slice(1)),a=o[0].length,l=u,c.length>=d));)p.lastIndex===o.index&&p.lastIndex++;return l===i.length?!a&&p.test("")||c.push(""):c.push(i.slice(l)),c.length>d?c.slice(0,d):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i,r):p.call(String(i),e,r)},function(t,n){var r=f(p,t,this,n,p!==e);if(r.done)return r.value;var s=i(t),h=String(this),v=o(s,RegExp),g=s.unicode,y=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(d?"y":"g"),m=new v(d?s:"^(?:"+s.source+")",y),b=void 0===n?4294967295:n>>>0;if(0===b)return[];if(0===h.length)return null===c(m,h)?[h]:[];for(var S=0,w=0,_=[];w<h.length;){m.lastIndex=d?w:0;var M,x=c(m,d?h:h.slice(w));if(null===x||(M=l(a(m.lastIndex+(d?0:w)),h.length))===S)w=u(h,w,g);else{if(_.push(h.slice(S,w)),_.length===b)return _;for(var P=1;P<=x.length-1;P++)if(_.push(x[P]),_.length===b)return _;w=S=M}}return _.push(h.slice(S)),_}]}))},function(t,n,e){var r=e(1),i=e(85).set,o=r.MutationObserver||r.WebKitMutationObserver,u=r.process,a=r.Promise,c="process"==e(25)(u);t.exports=function(){var t,n,e,s=function(){var r,i;for(c&&(r=u.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(c)e=function(){u.nextTick(s)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);e=function(){f.then(s)}}else e=function(){i.call(r,s)};else{var l=!0,h=document.createTextNode("");new o(s).observe(h,{characterData:!0}),e=function(){h.data=l=!l}}return function(r){var i={fn:r,next:void 0};n&&(n.next=i),t||(t=i,e()),n=i}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){"use strict";var r=e(121),i=e(39);t.exports=e(60)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(i(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(i(this,"Map"),0===t?0:t,n)}},r,!0)},function(t,n,e){"use strict";var r=e(121),i=e(39);t.exports=e(60)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},function(t,n,e){"use strict";var r,i=e(1),o=e(24)(0),u=e(11),a=e(29),c=e(101),s=e(122),f=e(4),l=e(39),h=e(39),d=!i.ActiveXObject&&"ActiveXObject"in i,p=a.getWeak,v=Object.isExtensible,g=s.ufstore,y=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},m={get:function(t){if(f(t)){var n=p(t);return!0===n?g(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return s.def(l(this,"WeakMap"),t,n)}},b=t.exports=e(60)("WeakMap",y,m,s,!0,!0);h&&d&&(c((r=s.getConstructor(y,"WeakMap")).prototype,m),a.NEED=!0,o(["delete","has","get","set"],(function(t){var n=b.prototype,e=n[t];u(n,t,(function(n,i){if(f(n)&&!v(n)){this._f||(this._f=new r);var o=this._f[t](n,i);return"set"==t?this:o}return e.call(this,n,i)}))})))},function(t,n,e){"use strict";var r=e(122),i=e(39);e(60)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"WeakSet"),t,!0)}},r,!1,!0)},function(t,n,e){"use strict";var r=e(0),i=e(61),o=e(86),u=e(3),a=e(34),c=e(6),s=e(4),f=e(1).ArrayBuffer,l=e(49),h=o.ArrayBuffer,d=o.DataView,p=i.ABV&&f.isView,v=h.prototype.slice,g=i.VIEW;r(r.G+r.W+r.F*(f!==h),{ArrayBuffer:h}),r(r.S+r.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return p&&p(t)||s(t)&&g in t}}),r(r.P+r.U+r.F*e(2)((function(){return!new h(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,n){if(void 0!==v&&void 0===n)return v.call(u(this),t);for(var e=u(this).byteLength,r=a(t,e),i=a(void 0===n?e:n,e),o=new(l(this,h))(c(i-r)),s=new d(this),f=new d(o),p=0;r<i;)f.setUint8(p++,s.getUint8(r++));return o}}),e(43)("ArrayBuffer")},function(t,n,e){var r=e(0);r(r.G+r.W+r.F*!e(61).ABV,{DataView:e(86).DataView})},function(t,n,e){e(27)("Int8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(27)("Uint8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(27)("Uint8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}),!0)},function(t,n,e){e(27)("Int16",2,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(27)("Uint16",2,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(27)("Int32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(27)("Uint32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(27)("Float32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(27)("Float64",8,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){var r=e(0),i=e(20),o=e(3),u=(e(1).Reflect||{}).apply,a=Function.apply;r(r.S+r.F*!e(2)((function(){u((function(){}))})),"Reflect",{apply:function(t,n,e){var r=i(t),c=o(e);return u?u(r,n,c):a.call(r,n,c)}})},function(t,n,e){var r=e(0),i=e(35),o=e(20),u=e(3),a=e(4),c=e(2),s=e(103),f=(e(1).Reflect||{}).construct,l=c((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),h=!c((function(){f((function(){}))}));r(r.S+r.F*(l||h),"Reflect",{construct:function(t,n){o(t),u(n);var e=arguments.length<3?t:o(arguments[2]);if(h&&!l)return f(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(s.apply(t,r))}var c=e.prototype,d=i(a(c)?c:Object.prototype),p=Function.apply.call(t,d,n);return a(p)?p:d}})},function(t,n,e){var r=e(9),i=e(0),o=e(3),u=e(28);i(i.S+i.F*e(2)((function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,n,e){o(t),n=u(n,!0),o(e);try{return r.f(t,n,e),!0}catch(t){return!1}}})},function(t,n,e){var r=e(0),i=e(22).f,o=e(3);r(r.S,"Reflect",{deleteProperty:function(t,n){var e=i(o(t),n);return!(e&&!e.configurable)&&delete t[n]}})},function(t,n,e){"use strict";var r=e(0),i=e(3),o=function(t){this._t=i(t),this._i=0;var n,e=this._k=[];for(n in t)e.push(n)};e(110)(o,"Object",(function(){var t,n=this._k;do{if(this._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}})),r(r.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,n,e){var r=e(22),i=e(37),o=e(13),u=e(0),a=e(4),c=e(3);u(u.S,"Reflect",{get:function t(n,e){var u,s,f=arguments.length<3?n:arguments[2];return c(n)===f?n[e]:(u=r.f(n,e))?o(u,"value")?u.value:void 0!==u.get?u.get.call(f):void 0:a(s=i(n))?t(s,e,f):void 0}})},function(t,n,e){var r=e(22),i=e(0),o=e(3);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return r.f(o(t),n)}})},function(t,n,e){var r=e(0),i=e(37),o=e(3);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,n,e){var r=e(0);r(r.S,"Reflect",{has:function(t,n){return n in t}})},function(t,n,e){var r=e(0),i=e(3),o=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,n,e){var r=e(0);r(r.S,"Reflect",{ownKeys:e(124)})},function(t,n,e){var r=e(0),i=e(3),o=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,n,e){var r=e(9),i=e(22),o=e(37),u=e(13),a=e(0),c=e(30),s=e(3),f=e(4);a(a.S,"Reflect",{set:function t(n,e,a){var l,h,d=arguments.length<4?n:arguments[3],p=i.f(s(n),e);if(!p){if(f(h=o(n)))return t(h,e,a,d);p=c(0)}if(u(p,"value")){if(!1===p.writable||!f(d))return!1;if(l=i.f(d,e)){if(l.get||l.set||!1===l.writable)return!1;l.value=a,r.f(d,e,l)}else r.f(d,e,c(0,a));return!0}return void 0!==p.set&&(p.set.call(d,a),!0)}})},function(t,n,e){var r=e(0),i=e(67);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},function(t,n,e){e(276),t.exports=e(7).Array.includes},function(t,n,e){"use strict";var r=e(0),i=e(51)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(38)("includes")},function(t,n,e){e(278),t.exports=e(7).Array.flatMap},function(t,n,e){"use strict";var r=e(0),i=e(279),o=e(10),u=e(6),a=e(20),c=e(112);r(r.P,"Array",{flatMap:function(t){var n,e,r=o(this);return a(t),n=u(r.length),e=c(r,0),i(e,r,r,n,0,1,t,arguments[1]),e}}),e(38)("flatMap")},function(t,n,e){"use strict";var r=e(53),i=e(4),o=e(6),u=e(19),a=e(5)("isConcatSpreadable");t.exports=function t(n,e,c,s,f,l,h,d){for(var p,v,g=f,y=0,m=!!h&&u(h,d,3);y<s;){if(y in c){if(p=m?m(c[y],y,e):c[y],v=!1,i(p)&&(v=void 0!==(v=p[a])?!!v:r(p)),v&&l>0)g=t(n,e,p,o(p.length),g,l-1)-1;else{if(g>=9007199254740991)throw TypeError();n[g]=p}g++}y++}return g}},function(t,n,e){e(281),t.exports=e(7).String.padStart},function(t,n,e){"use strict";var r=e(0),i=e(125),o=e(59),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*u,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,n,e){e(283),t.exports=e(7).String.padEnd},function(t,n,e){"use strict";var r=e(0),i=e(125),o=e(59),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*u,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,n,e){e(285),t.exports=e(7).String.trimLeft},function(t,n,e){"use strict";e(41)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,n,e){e(287),t.exports=e(7).String.trimRight},function(t,n,e){"use strict";e(41)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,n,e){e(289),t.exports=e(63).f("asyncIterator")},function(t,n,e){e(97)("asyncIterator")},function(t,n,e){e(291),t.exports=e(7).Object.getOwnPropertyDescriptors},function(t,n,e){var r=e(0),i=e(124),o=e(15),u=e(22),a=e(79);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,e,r=o(t),c=u.f,s=i(r),f={},l=0;s.length>l;)void 0!==(e=c(r,n=s[l++]))&&a(f,n,e);return f}})},function(t,n,e){e(293),t.exports=e(7).Object.values},function(t,n,e){var r=e(0),i=e(126)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},function(t,n,e){e(295),t.exports=e(7).Object.entries},function(t,n,e){var r=e(0),i=e(126)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},function(t,n,e){"use strict";e(118),e(297),t.exports=e(7).Promise.finally},function(t,n,e){"use strict";var r=e(0),i=e(7),o=e(1),u=e(49),a=e(120);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,i.Promise||o.Promise),e="function"==typeof t;return this.then(e?function(e){return a(n,t()).then((function(){return e}))}:t,e?function(e){return a(n,t()).then((function(){throw e}))}:t)}})},function(t,n,e){e(299),e(300),e(301),t.exports=e(7)},function(t,n,e){var r=e(1),i=e(0),o=e(59),u=[].slice,a=/MSIE .\./.test(o),c=function(t){return function(n,e){var r=arguments.length>2,i=!!r&&u.call(arguments,2);return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,e)}};i(i.G+i.B+i.F*a,{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},function(t,n,e){var r=e(0),i=e(85);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,e){for(var r=e(82),i=e(33),o=e(11),u=e(1),a=e(14),c=e(42),s=e(5),f=s("iterator"),l=s("toStringTag"),h=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(d),v=0;v<p.length;v++){var g,y=p[v],m=d[y],b=u[y],S=b&&b.prototype;if(S&&(S[f]||a(S,f,h),S[l]||a(S,l,y),c[y]=h,m))for(g in r)S[g]||o(S,g,r[g],!0)}},function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,n,e,r){var i=n&&n.prototype instanceof v?n:v,o=Object.create(i.prototype),u=new F(r||[]);return o._invoke=function(t,n,e){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return E()}for(e.method=i,e.arg=o;;){var u=e.delegate;if(u){var a=x(u,e);if(a){if(a===p)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var c=s(t,n,e);if("normal"===c.type){if(r=e.done?d:l,c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=d,e.method="throw",e.arg=c.arg)}}}(t,e,u),o}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",l="suspendedYield",h="executing",d="completed",p={};function v(){}function g(){}function y(){}var m={};m[o]=function(){return this};var b=Object.getPrototypeOf,S=b&&b(b(A([])));S&&S!==e&&r.call(S,o)&&(m=S);var w=y.prototype=v.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function M(t){var n;this._invoke=function(e,i){function o(){return new Promise((function(n,o){!function n(e,i,o,u){var a=s(t[e],t,i);if("throw"!==a.type){var c=a.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then((function(t){n("next",t,o,u)}),(function(t){n("throw",t,o,u)})):Promise.resolve(f).then((function(t){c.value=t,o(c)}),(function(t){return n("throw",t,o,u)}))}u(a.arg)}(e,i,n,o)}))}return n=n?n.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=s(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,u=function e(){for(;++i<t.length;)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return u.next=u}}return{next:E}}function E(){return{value:n,done:!0}}return g.prototype=w.constructor=y,y.constructor=g,y[a]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(M.prototype),M.prototype[u]=function(){return this},t.AsyncIterator=M,t.async=function(n,e,r,i){var o=new M(c(n,e,r,i));return t.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(w),w[a]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=A,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(r,i){return a.type="throw",a.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return i("end");if(u.tryLoc<=this.prev){var c=r.call(u,"catchLoc"),s=r.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc)return i(u.catchLoc,!0);if(this.prev<u.finallyLoc)return i(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return i(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return i(u.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;O(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,n,e){e(304),t.exports=e(127).global},function(t,n,e){var r=e(305);r(r.G,{global:e(87)})},function(t,n,e){var r=e(87),i=e(127),o=e(306),u=e(308),a=e(315),c=function(t,n,e){var s,f,l,h=t&c.F,d=t&c.G,p=t&c.S,v=t&c.P,g=t&c.B,y=t&c.W,m=d?i:i[n]||(i[n]={}),b=m.prototype,S=d?r:p?r[n]:(r[n]||{}).prototype;for(s in d&&(e=n),e)(f=!h&&S&&void 0!==S[s])&&a(m,s)||(l=f?S[s]:e[s],m[s]=d&&"function"!=typeof S[s]?e[s]:g&&f?o(l,r):y&&S[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[s]=l,t&c.R&&b&&!b[s]&&u(b,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(307);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(309),i=e(314);t.exports=e(89)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(310),i=e(311),o=e(313),u=Object.defineProperty;n.f=e(89)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(88);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(89)&&!e(128)((function(){return 7!=Object.defineProperty(e(312)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(88),i=e(87).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){var r=e(88);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}}])}));
(function () {
    if (!window.hasOwnProperty('isEmpty')) window.isEmpty = isEmpty;
    if (!window.hasOwnProperty('notEmpty')) window.notEmpty = notEmpty;

    /**
     * Javascript empty value checker
     *
     * @param {null|undefined|number|string|object|array|function|boolean} value
     *
     * @return {boolean}
     *
     * @version 07.02.2019
     * @author  DimNS <atomcms@ya.ru>
     */
    function isEmpty(value) {
        if (value === null) {
            return true;
        }

        var type = typeof (value);

        switch (type) {
            case 'undefined':
                return true;

            case 'number':
                return isNaN(value);

            case 'string':
                return value.trim() === '';

            case 'object':
                var countKeys = Object.keys(value).length;
                return countKeys < 1;

            case 'function':
            case 'boolean':
                return false;

            default:
                console.log('Unknown value type: "' + type + '"', 'isEmpty.js');
                return false;
        }
    }

    /**
     * Javascript not empty value checker
     *
     * @param {null|undefined|number|string|object|array|function|boolean} value
     *
     * @return {boolean}
     *
     * @version 15.07.2019
     * @author  DimNS <atomcms@ya.ru>
     */
    function notEmpty(value) {
        return !isEmpty(value);
    }
})();
(function () {
    if (!window.hasOwnProperty('LightAjax')) window.LightAjax = LightAjax;

    // db      d888888b  d888b  db   db d888888b  .d8b.     d88b  .d8b.  db    db
    // 88        `88'   88' Y8b 88   88 `~~88~~' d8' `8b    `8P' d8' `8b `8b  d8'
    // 88         88    88      88ooo88    88    88ooo88     88  88ooo88  `8bd8'
    // 88         88    88  ooo 88~~~88    88    88~~~88     88  88~~~88  .dPYb.
    // 88booo.   .88.   88. ~8~ 88   88    88    88   88 db. 88  88   88 .8P  Y8.
    // Y88888P Y888888P  Y888P  YP   YP    YP    YP   YP Y8888P  YP   YP YP    YP
    //
    //

    /**
     * Фасад для ajax-методов get и post, со встроенным прелоадером
     *
     * @param {object} options Параметры
     *
     * @version 21.04.2020
     * @author  DimNS <atomcms@ya.ru>
     */
    function LightAjax(options) {
        if (typeof options === 'object' && options !== null) {
            if (!options.hasOwnProperty('ajax')) {
                options.ajax = {};
            }

            if (!options.hasOwnProperty('settings')) {
                options.settings = {};
            }
        } else {
            options = {
                ajax    : {},
                settings: {}
            };
        }

        // Настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
        LightAjax.prototype._optionsDefault = Object.assign({
            crossDomain: true,
            timeout    : 20000,
            dataType   : 'json',
            cache      : false
        }, options.ajax);

        var settings = Object.assign({
            classColor   : '',
            callbackAlert: function (title, message) {
                alert(message, title);
            }
        }, options.settings);

        LightAjax.prototype._callbackAlert = settings.callbackAlert;

        // Создаем html-код
        if (jQuery('#js-lightajax-preloader').length === 0) {
            jQuery('body').append(
                '<div id="js-lightajax-overlay" class="lightajax__overlay"></div>' +
                '<div id="js-lightajax-preloader" class="lightajax__preloader">' +
                '<div class="lightajax__loader ' + settings.classColor + '"></div>' +
                '</div>'
            );
        }
    }

    // d8888b. d8888b. d88888b db       .d88b.   .d8b.  d8888b. d88888b d8888b.
    // 88  `8D 88  `8D 88'     88      .8P  Y8. d8' `8b 88  `8D 88'     88  `8D
    // 88oodD' 88oobY' 88ooooo 88      88    88 88ooo88 88   88 88ooooo 88oobY'
    // 88~~~   88`8b   88~~~~~ 88      88    88 88~~~88 88   88 88~~~~~ 88`8b
    // 88      88 `88. 88.     88booo. `8b  d8' 88   88 88  .8D 88.     88 `88.
    // 88      88   YD Y88888P Y88888P  `Y88P'  YP   YP Y8888D' Y88888P 88   YD
    //
    //

    /**
     * Показать \ Скрыть окно ожидания ответа AJAX
     *
     * @param {string} action Действие (show|hide)
     *
     * @version 29.05.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype.preloader = function (action) {
        if (action === 'show') {
            jQuery('#js-lightajax-overlay, #js-lightajax-preloader').show();
        } else if (action === 'hide') {
            jQuery('#js-lightajax-overlay, #js-lightajax-preloader').hide();
        }
    };

    //  d888b  d88888b d888888b
    // 88' Y8b 88'     `~~88~~'
    // 88      88ooooo    88
    // 88  ooo 88~~~~~    88
    // 88. ~8~ 88.        88
    //  Y888P  Y88888P    YP
    //
    //

    /**
     * Выполнить запрос get
     *
     * @param {boolean}  preloader Показывать прелоадер ожидания
     * @param {string}   url       Адрес запроса
     * @param {object}   data      Объект параметров для запроса
     * @param {function} success   Действие при успешном завершении
     * @param {object}   options   Переопределение настроек по умолчанию
     *
     * @version 10.10.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype.get = function (preloader, url, data, success, options) {
        LightAjax.prototype._query('GET', preloader, url, data, success, options);
    };

    // d8888b.  .d88b.  .d8888. d888888b
    // 88  `8D .8P  Y8. 88'  YP `~~88~~'
    // 88oodD' 88    88 `8bo.      88
    // 88~~~   88    88   `Y8b.    88
    // 88      `8b  d8' db   8D    88
    // 88       `Y88P'  `8888Y'    YP
    //
    //

    /**
     * Выполнить запрос post
     *
     * @param {boolean}  preloader Показывать прелоадер ожидания
     * @param {string}   url       Адрес запроса
     * @param {object}   data      Объект параметров для запроса
     * @param {function} success   Действие при успешном завершении
     * @param {object}   options   Переопределение настроек по умолчанию
     *
     * @version 10.10.2019
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype.post = function (preloader, url, data, success, options) {
        LightAjax.prototype._query('POST', preloader, url, data, success, options);
    };

    //          .d88b.  db    db d88888b d8888b. db    db
    //         .8P  Y8. 88    88 88'     88  `8D `8b  d8'
    //         88    88 88    88 88ooooo 88oobY'  `8bd8'
    //         88    88 88    88 88~~~~~ 88`8b      88
    //         `8P  d8' 88b  d88 88.     88 `88.    88
    // C88888D  `Y88'Y8 ~Y8888P' Y88888P 88   YD    YP
    //
    //

    /**
     * Выполнить запрос
     *
     * @param {string}   type      Тип запроса (GET|POST)
     * @param {boolean}  preloader Показывать прелоадер ожидания
     * @param {string}   url       Адрес запроса
     * @param {object}   data      Объект параметров для запроса
     * @param {function} success   Действие при успешном завершении
     * @param {object}   options   Переопределение настроек по умолчанию
     *
     * @version 21.04.2020
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype._query = function (type, preloader, url, data, success, options) {
        if (preloader) {
            LightAjax.prototype.preloader('show');
        }

        if (typeof options !== 'object') {
            options = {};
        }

        var settings = Object.assign({}, LightAjax.prototype._optionsDefault, {
            method : type,
            data   : data,
            success: success,
            error  : function (xhr, status) {
                if (preloader) {
                    LightAjax.prototype.preloader('hide');
                }

                LightAjax.prototype._error(status);
            }
        }, options);

        jQuery.ajax(url, settings);
    };

    //         d88888b d8888b. d8888b.  .d88b.  d8888b.
    //         88'     88  `8D 88  `8D .8P  Y8. 88  `8D
    //         88ooooo 88oobY' 88oobY' 88    88 88oobY'
    //         88~~~~~ 88`8b   88`8b   88    88 88`8b
    //         88.     88 `88. 88 `88. `8b  d8' 88 `88.
    // C88888D Y88888P 88   YD 88   YD  `Y88P'  88   YD
    //
    //

    /**
     * Показать ошибку выполнения AJAX
     *
     * @param {string} status Код ошибки
     *
     * @version 20.03.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    LightAjax.prototype._error = function (status) {
        var message = 'Неизвестная ошибка (' + status + ')';

        switch (status) {
            case 'timeout'    :
                message = 'Время ожидания истекло';
                break;

            case 'parsererror':
                message = 'Ошибка парсера';
                break;

            case 'abort'      :
                message = 'Запрос был отменён';
                break;

            case 'error'      :
                message = 'Произошла ошибка сервера';
                break;
        }

        LightAjax.prototype._callbackAlert('Произошла ошибка', message);
    };
})();
(function ($) {
    /**
     * Плагин для фильтрации строк таблиц путем ввода символов в поле фильтра
     *
     * @param {object} options Параметры
     *
     * @version 26.11.2018
     * @author  DimNS <atomcms@ya.ru>
     */
    $.fn.TableFilter = function (options) {
        if (typeof(options) === 'undefined') {
            options = {};
        }

        /**
         * Настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
         *
         * @type {object}
         */
        var settings = Object.assign({
            afterFilter: null
        }, options);

        // Поддерживаем цепочки вызовов
        return this.each(function () {
            $(this).keyup(function () {
                var value = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

                $($(this).attr('data-tablefilter')).find('tbody tr').show().filter(function () {
                    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                    return !~text.indexOf(value);
                }).hide();

                if (typeof(settings.afterFilter) === 'function') {
                    settings.afterFilter();
                }
            });
        });
    };
})(jQuery);
/*!
    localForage -- Offline Storage, Improved
    Version 1.8.1
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.localforage = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb || !idb.open) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback returns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = req.onblocked = function (err) {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(err);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Navigo = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isPushStateAvailable() {
  return !!(typeof window !== 'undefined' && window.history && window.history.pushState);
}

function Navigo(r, useHash, hash) {
  this.root = null;
  this._routes = [];
  this._useHash = useHash;
  this._hash = typeof hash === 'undefined' ? '#' : hash;
  this._paused = false;
  this._destroyed = false;
  this._lastRouteResolved = null;
  this._notFoundHandler = null;
  this._defaultHandler = null;
  this._usePushState = !useHash && isPushStateAvailable();
  this._onLocationChange = this._onLocationChange.bind(this);
  this._genericHooks = null;
  this._historyAPIUpdateMethod = 'pushState';

  if (r) {
    this.root = useHash ? r.replace(/\/$/, '/' + this._hash) : r.replace(/\/$/, '');
  } else if (useHash) {
    this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, '/' + this._hash);
  }

  this._listen();
  this.updatePageLinks();
}

function clean(s) {
  if (s instanceof RegExp) return s;
  return s.replace(/\/+$/, '').replace(/^\/+/, '^/');
}

function regExpResultToParams(match, names) {
  if (names.length === 0) return null;
  if (!match) return null;
  return match.slice(1, match.length).reduce(function (params, value, index) {
    if (params === null) params = {};
    params[names[index]] = decodeURIComponent(value);
    return params;
  }, null);
}

function replaceDynamicURLParts(route) {
  var paramNames = [],
      regexp;

  if (route instanceof RegExp) {
    regexp = route;
  } else {
    regexp = new RegExp(route.replace(Navigo.PARAMETER_REGEXP, function (full, dots, name) {
      paramNames.push(name);
      return Navigo.REPLACE_VARIABLE_REGEXP;
    }).replace(Navigo.WILDCARD_REGEXP, Navigo.REPLACE_WILDCARD) + Navigo.FOLLOWED_BY_SLASH_REGEXP, Navigo.MATCH_REGEXP_FLAGS);
  }
  return { regexp: regexp, paramNames: paramNames };
}

function getUrlDepth(url) {
  return url.replace(/\/$/, '').split('/').length;
}

function compareUrlDepth(urlA, urlB) {
  return getUrlDepth(urlB) - getUrlDepth(urlA);
}

function findMatchedRoutes(url) {
  var routes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return routes.map(function (route) {
    var _replaceDynamicURLPar = replaceDynamicURLParts(clean(route.route)),
        regexp = _replaceDynamicURLPar.regexp,
        paramNames = _replaceDynamicURLPar.paramNames;

    var match = url.replace(/^\/+/, '/').match(regexp);
    var params = regExpResultToParams(match, paramNames);

    return match ? { match: match, route: route, params: params } : false;
  }).filter(function (m) {
    return m;
  });
}

function match(url, routes) {
  return findMatchedRoutes(url, routes)[0] || false;
}

function root(url, routes) {
  var matched = routes.map(function (route) {
    return route.route === '' || route.route === '*' ? url : url.split(new RegExp(route.route + '($|\/)'))[0];
  });
  var fallbackURL = clean(url);

  if (matched.length > 1) {
    return matched.reduce(function (result, url) {
      if (result.length > url.length) result = url;
      return result;
    }, matched[0]);
  } else if (matched.length === 1) {
    return matched[0];
  }
  return fallbackURL;
}

function isHashChangeAPIAvailable() {
  return typeof window !== 'undefined' && 'onhashchange' in window;
}

function extractGETParameters(url) {
  return url.split(/\?(.*)?$/).slice(1).join('');
}

function getOnlyURL(url, useHash, hash) {
  var onlyURL = url,
      split;
  var cleanGETParam = function cleanGETParam(str) {
    return str.split(/\?(.*)?$/)[0];
  };

  if (typeof hash === 'undefined') {
    // To preserve BC
    hash = '#';
  }

  if (isPushStateAvailable() && !useHash) {
    onlyURL = cleanGETParam(url).split(hash)[0];
  } else {
    split = url.split(hash);
    onlyURL = split.length > 1 ? cleanGETParam(split[1]) : cleanGETParam(split[0]);
  }

  return onlyURL;
}

function manageHooks(handler, hooks, params) {
  if (hooks && (typeof hooks === 'undefined' ? 'undefined' : _typeof(hooks)) === 'object') {
    if (hooks.before) {
      hooks.before(function () {
        var shouldRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (!shouldRoute) return;
        handler();
        hooks.after && hooks.after(params);
      }, params);
      return;
    } else if (hooks.after) {
      handler();
      hooks.after && hooks.after(params);
      return;
    }
  }
  handler();
}

function isHashedRoot(url, useHash, hash) {
  if (isPushStateAvailable() && !useHash) {
    return false;
  }

  if (!url.match(hash)) {
    return false;
  }

  var split = url.split(hash);

  return split.length < 2 || split[1] === '';
}

Navigo.prototype = {
  helpers: {
    match: match,
    root: root,
    clean: clean,
    getOnlyURL: getOnlyURL
  },
  navigate: function navigate(path, absolute) {
    var to;

    path = path || '';
    if (this._usePushState) {
      to = (!absolute ? this._getRoot() + '/' : '') + path.replace(/^\/+/, '/');
      to = to.replace(/([^:])(\/{2,})/g, '$1/');
      history[this._historyAPIUpdateMethod]({}, '', to);
      this.resolve();
    } else if (typeof window !== 'undefined') {
      path = path.replace(new RegExp('^' + this._hash), '');
      window.location.href = window.location.href.replace(/#$/, '').replace(new RegExp(this._hash + '.*$'), '') + this._hash + path;
    }
    return this;
  },
  on: function on() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'function') {
      this._defaultHandler = { handler: args[0], hooks: args[1] };
    } else if (args.length >= 2) {
      if (args[0] === '/') {
        var func = args[1];

        if (_typeof(args[1]) === 'object') {
          func = args[1].uses;
        }

        this._defaultHandler = { handler: func, hooks: args[2] };
      } else {
        this._add(args[0], args[1], args[2]);
      }
    } else if (_typeof(args[0]) === 'object') {
      var orderedRoutes = Object.keys(args[0]).sort(compareUrlDepth);

      orderedRoutes.forEach(function (route) {
        _this.on(route, args[0][route]);
      });
    }
    return this;
  },
  off: function off(handler) {
    if (this._defaultHandler !== null && handler === this._defaultHandler.handler) {
      this._defaultHandler = null;
    } else if (this._notFoundHandler !== null && handler === this._notFoundHandler.handler) {
      this._notFoundHandler = null;
    }
    this._routes = this._routes.reduce(function (result, r) {
      if (r.handler !== handler) result.push(r);
      return result;
    }, []);
    return this;
  },
  notFound: function notFound(handler, hooks) {
    this._notFoundHandler = { handler: handler, hooks: hooks };
    return this;
  },
  resolve: function resolve(current) {
    var _this2 = this;

    var handler, m;
    var url = (current || this._cLoc()).replace(this._getRoot(), '');

    if (this._useHash) {
      url = url.replace(new RegExp('^\/' + this._hash), '/');
    }

    var GETParameters = extractGETParameters(current || this._cLoc());
    var onlyURL = getOnlyURL(url, this._useHash, this._hash);

    if (this._paused) return false;

    if (this._lastRouteResolved && onlyURL === this._lastRouteResolved.url && GETParameters === this._lastRouteResolved.query) {
      if (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already) {
        this._lastRouteResolved.hooks.already(this._lastRouteResolved.params);
      }
      return false;
    }

    m = match(onlyURL, this._routes);

    if (m) {
      this._callLeave();
      this._lastRouteResolved = {
        url: onlyURL,
        query: GETParameters,
        hooks: m.route.hooks,
        params: m.params,
        name: m.route.name
      };
      handler = m.route.handler;
      manageHooks(function () {
        manageHooks(function () {
          m.route.route instanceof RegExp ? handler.apply(undefined, m.match.slice(1, m.match.length)) : handler(m.params, GETParameters);
        }, m.route.hooks, m.params, _this2._genericHooks);
      }, this._genericHooks, m.params);
      return m;
    } else if (this._defaultHandler && (onlyURL === '' || onlyURL === '/' || onlyURL === this._hash || isHashedRoot(onlyURL, this._useHash, this._hash))) {
      manageHooks(function () {
        manageHooks(function () {
          _this2._callLeave();
          _this2._lastRouteResolved = { url: onlyURL, query: GETParameters, hooks: _this2._defaultHandler.hooks };
          _this2._defaultHandler.handler(GETParameters);
        }, _this2._defaultHandler.hooks);
      }, this._genericHooks);
      return true;
    } else if (this._notFoundHandler) {
      manageHooks(function () {
        manageHooks(function () {
          _this2._callLeave();
          _this2._lastRouteResolved = { url: onlyURL, query: GETParameters, hooks: _this2._notFoundHandler.hooks };
          _this2._notFoundHandler.handler(GETParameters);
        }, _this2._notFoundHandler.hooks);
      }, this._genericHooks);
    }
    return false;
  },
  destroy: function destroy() {
    this._routes = [];
    this._destroyed = true;
    this._lastRouteResolved = null;
    this._genericHooks = null;
    clearTimeout(this._listeningInterval);
    if (typeof window !== 'undefined') {
      window.removeEventListener('popstate', this._onLocationChange);
      window.removeEventListener('hashchange', this._onLocationChange);
    }
  },
  updatePageLinks: function updatePageLinks() {
    var self = this;

    if (typeof document === 'undefined') return;

    this._findLinks().forEach(function (link) {
      if (!link.hasListenerAttached) {
        link.addEventListener('click', function (e) {
          if ((e.ctrlKey || e.metaKey) && e.target.tagName.toLowerCase() == 'a') {
            return false;
          }
          var location = self.getLinkPath(link);

          if (!self._destroyed) {
            e.preventDefault();
            self.navigate(location.replace(/\/+$/, '').replace(/^\/+/, '/'));
          }
        });
        link.hasListenerAttached = true;
      }
    });
  },
  generate: function generate(name) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var result = this._routes.reduce(function (result, route) {
      var key;

      if (route.name === name) {
        result = route.route;
        for (key in data) {
          result = result.toString().replace(':' + key, data[key]);
        }
      }
      return result;
    }, '');

    return this._useHash ? this._hash + result : result;
  },
  link: function link(path) {
    return this._getRoot() + path;
  },
  pause: function pause() {
    var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this._paused = status;
    if (status) {
      this._historyAPIUpdateMethod = 'replaceState';
    } else {
      this._historyAPIUpdateMethod = 'pushState';
    }
  },
  resume: function resume() {
    this.pause(false);
  },
  historyAPIUpdateMethod: function historyAPIUpdateMethod(value) {
    if (typeof value === 'undefined') return this._historyAPIUpdateMethod;
    this._historyAPIUpdateMethod = value;
    return value;
  },
  disableIfAPINotAvailable: function disableIfAPINotAvailable() {
    if (!isPushStateAvailable()) {
      this.destroy();
    }
  },
  lastRouteResolved: function lastRouteResolved() {
    return this._lastRouteResolved;
  },
  getLinkPath: function getLinkPath(link) {
    return link.getAttribute('href');
  },
  hooks: function hooks(_hooks) {
    this._genericHooks = _hooks;
  },

  _add: function _add(route) {
    var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var hooks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (typeof route === 'string') {
      route = encodeURI(route);
    }
    this._routes.push((typeof handler === 'undefined' ? 'undefined' : _typeof(handler)) === 'object' ? {
      route: route,
      handler: handler.uses,
      name: handler.as,
      hooks: hooks || handler.hooks
    } : { route: route, handler: handler, hooks: hooks });

    return this._add;
  },
  _getRoot: function _getRoot() {
    if (this.root !== null) return this.root;
    this.root = root(this._cLoc().split('?')[0], this._routes);
    return this.root;
  },
  _listen: function _listen() {
    var _this3 = this;

    if (this._usePushState) {
      window.addEventListener('popstate', this._onLocationChange);
    } else if (isHashChangeAPIAvailable()) {
      window.addEventListener('hashchange', this._onLocationChange);
    } else {
      var cached = this._cLoc(),
          current = void 0,
          _check = void 0;

      _check = function check() {
        current = _this3._cLoc();
        if (cached !== current) {
          cached = current;
          _this3.resolve();
        }
        _this3._listeningInterval = setTimeout(_check, 200);
      };
      _check();
    }
  },
  _cLoc: function _cLoc() {
    if (typeof window !== 'undefined') {
      if (typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__ !== 'undefined') {
        return window.__NAVIGO_WINDOW_LOCATION_MOCK__;
      }
      return clean(window.location.href);
    }
    return '';
  },
  _findLinks: function _findLinks() {
    return [].slice.call(document.querySelectorAll('[data-navigo]'));
  },
  _onLocationChange: function _onLocationChange() {
    this.resolve();
  },
  _callLeave: function _callLeave() {
    var lastRouteResolved = this._lastRouteResolved;

    if (lastRouteResolved && lastRouteResolved.hooks && lastRouteResolved.hooks.leave) {
      lastRouteResolved.hooks.leave(lastRouteResolved.params);
    }
  }
};

Navigo.PARAMETER_REGEXP = /([:*])(\w+)/g;
Navigo.WILDCARD_REGEXP = /\*/g;
Navigo.REPLACE_VARIABLE_REGEXP = '([^\/]+)';
Navigo.REPLACE_WILDCARD = '(?:.*)';
Navigo.FOLLOWED_BY_SLASH_REGEXP = '(?:\/$|$)';
Navigo.MATCH_REGEXP_FLAGS = '';

return Navigo;

})));

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;n.define("select2/i18n/ru",[],function(){function n(n,e,r,u){return n%10<5&&n%10>0&&n%100<5||n%100>20?n%10>1?r:e:u}return{errorLoading:function(){return"Невозможно загрузить результаты"},inputTooLong:function(e){var r=e.input.length-e.maximum,u="Пожалуйста, введите на "+r+" символ";return u+=n(r,"","a","ов"),u+=" меньше"},inputTooShort:function(e){var r=e.minimum-e.input.length,u="Пожалуйста, введите ещё хотя бы "+r+" символ";return u+=n(r,"","a","ов")},loadingMore:function(){return"Загрузка данных…"},maximumSelected:function(e){var r="Вы можете выбрать не более "+e.maximum+" элемент";return r+=n(e.maximum,"","a","ов")},noResults:function(){return"Совпадений не найдено"},searching:function(){return"Поиск…"},removeAllItems:function(){return"Удалить все элементы"}}}),n.define,n.require}();
/**
 * Simple Ajax Uploader
 * Version 2.6.7
 * https://github.com/LPology/Simple-Ajax-Uploader
 *
 * Copyright 2012-2019 LPology, LLC
 * Released under the MIT license
 */

;(function( global, factory ) {
    /*globals define, module */
    if ( typeof define === 'function' && define.amd ) {
        define( function() {
            return factory( global );
        });

    } else if ( typeof module === 'object' && module.exports ) {
        module.exports = factory( global );

    } else {
        global.ss = factory( global );
    }

}( typeof window !== 'undefined' ? window : this, function( window ) {

var ss = window.ss || {},

    // ss.trim()
    rLWhitespace = /^\s+/,
    rTWhitespace = /\s+$/,

    // ss.getUID
    uidReplace = /[xy]/g,

    // ss.getFilename()
    rPath = /.*(\/|\\)/,

    // ss.getExt()
    rExt = /.*[.]/,

    // ss.hasClass()
    rHasClass = /[\t\r\n]/g,

    // Check for Safari -- it doesn't like multi file uploading. At all.
    // http://stackoverflow.com/a/9851769/1091949
    isSafari = Object.prototype.toString.call( window.HTMLElement ).indexOf( 'Constructor' ) > 0,

    // Detect IE7-9
    isIE7to9 = ( navigator.userAgent.indexOf('MSIE') !== -1 &&
                 navigator.userAgent.indexOf('MSIE 1') === -1 ),

    isIE7 = ( navigator.userAgent.indexOf('MSIE 7') !== -1 ),

    // Check whether XHR uploads are supported
    input = document.createElement( 'input' ),

    XhrOk;

input.type = 'file';

XhrOk = ( 'multiple' in input &&
          typeof File !== 'undefined' &&
          typeof ( new XMLHttpRequest() ).upload !== 'undefined' );


/**
* Converts object to query string
*/
ss.obj2string = function( obj, prefix ) {
    "use strict";

    var str = [];

    for ( var prop in obj ) {
        if ( obj.hasOwnProperty( prop ) ) {
            var k = prefix ? prefix + '[' + prop + ']' : prop, v = obj[prop];
            str.push( typeof v === 'object' ?
                        ss.obj2string( v, k ) :
                        encodeURIComponent( k ) + '=' + encodeURIComponent( v ) );
        }
    }

    return str.join( '&' );
};

/**
* Copies all missing properties from second object to first object
*/
ss.extendObj = function( first, second ) {
    "use strict";

    for ( var prop in second ) {
        if ( second.hasOwnProperty( prop ) ) {
            first[prop] = second[prop];
        }
    }
};

ss.addEvent = function( elem, type, fn ) {
    "use strict";

    if ( elem.addEventListener ) {
        elem.addEventListener( type, fn, false );

    } else {
        elem.attachEvent( 'on' + type, fn );
    }
    return function() {
        ss.removeEvent( elem, type, fn );
    };
};

ss.removeEvent = document.removeEventListener ?
    function( elem, type, fn ) {
        if ( elem.removeEventListener ) {
            elem.removeEventListener( type, fn, false );
        }
    } :
    function( elem, type, fn ) {
        var name = 'on' + type;

        if ( typeof elem[ name ] === 'undefined' ) {
            elem[ name ] = null;
        }

        elem.detachEvent( name, fn );
    };

ss.newXHR = function() {
    "use strict";

    if ( typeof XMLHttpRequest !== 'undefined' ) {
        return new window.XMLHttpRequest();

    } else if ( window.ActiveXObject ) {
        try {
            return new window.ActiveXObject( 'Microsoft.XMLHTTP' );
        } catch ( err ) {
            return false;
        }
    }
};

ss.encodeUTF8 = function( str ) {
    "use strict";
    /*jshint nonstandard:true*/
    return unescape( encodeURIComponent( str ) );
};

ss.getIFrame = function() {
    "use strict";

    var id = ss.getUID(),
        iframe;

    // IE7 can only create an iframe this way, all others are the other way
    if ( isIE7 ) {
        iframe = document.createElement('<iframe src="javascript:false;" name="' + id + '">');

    } else {
        iframe = document.createElement('iframe');
        /*jshint scripturl:true*/
        iframe.src = 'javascript:false;';
        iframe.name = id;
    }

    iframe.style.display = 'none';
    iframe.id = id;
    return iframe;
};

ss.getForm = function( opts ) {
    "use strict";

    var form = document.createElement('form');

    form.encoding = 'multipart/form-data'; // IE
    form.enctype = 'multipart/form-data';
    form.style.display = 'none';

    for ( var prop in opts ) {
        if ( opts.hasOwnProperty( prop ) ) {
            form[prop] = opts[prop];
        }
    }

    return form;
};

ss.getHidden = function( name, value ) {
    "use strict";

    var input = document.createElement( 'input' );

    input.type = 'hidden';
    input.name = name;
    input.value = value;
    return input;
};

/**
* Parses a JSON string and returns a Javascript object
* Borrowed from www.jquery.com
*/
ss.parseJSON = function( data ) {
    "use strict";
    /*jshint evil:true*/

    if ( !data ) {
        return false;
    }

    data = ss.trim( data + '' );

    if ( window.JSON && window.JSON.parse ) {
        try {
            // Support: Android 2.3
            // Workaround failure to string-cast null input
            return window.JSON.parse( data + '' );
        } catch ( err ) {
            return false;
        }
    }

    var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,
        depth = null,
        requireNonComma;

    // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
    // after removing valid tokens
    return data && !ss.trim( data.replace( rvalidtokens, function( token, comma, open, close ) {

        // Force termination if we see a misplaced comma
        if ( requireNonComma && comma ) {
            depth = 0;
        }

        // Perform no more replacements after returning to outermost depth
        if ( depth === 0 ) {
            return token;
        }

        // Commas must not follow "[", "{", or ","
        requireNonComma = open || comma;

        // Determine new depth
        // array/object open ("[" or "{"): depth += true - false (increment)
        // array/object close ("]" or "}"): depth += false - true (decrement)
        // other cases ("," or primitive): depth += true - true (numeric cast)
        depth += !close - !open;

        // Remove this token
        return '';
    }) ) ?
        ( Function( 'return ' + data ) )() :
        false;
};

ss.getBox = function( elem ) {
    "use strict";

    var box,
        docElem,
        top = 0,
        left = 0;

    if ( elem.getBoundingClientRect ) {
        box = elem.getBoundingClientRect();
        docElem = document.documentElement;
        top = box.top + ( window.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 );
        left = box.left + ( window.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 );

    } else {
        do {
            left += elem.offsetLeft;
            top += elem.offsetTop;
        } while ( ( elem = elem.offsetParent ) );
    }

    return {
        top: Math.round( top ),
        left: Math.round( left )
    };
};

/**
* Helper that takes object literal
* and add all properties to element.style
* @param {Element} el
* @param {Object} styles
*/
ss.addStyles = function( elem, styles ) {
    "use strict";

    for ( var name in styles ) {
        if ( styles.hasOwnProperty( name ) ) {
            elem.style[name] = styles[name];
        }
    }
};

/**
* Function places an absolutely positioned
* element on top of the specified element
* copying position and dimensions.
*/
ss.copyLayout = function( from, to ) {
    "use strict";

    var box = ss.getBox( from );

    ss.addStyles( to, {
        position: 'absolute',
        display: 'block',
        left : box.left + 'px',
        top : box.top + 'px',
        width : from.offsetWidth + 'px',
        height : from.offsetHeight + 'px'
    });
};

/**
* Generates unique ID
* Complies with RFC 4122 version 4
* http://stackoverflow.com/a/2117523/1091949
* ID begins with letter "a" to be safe for HTML elem ID/name attr (can't start w/ number)
*/
ss.getUID = function() {
    "use strict";

    /*jshint bitwise: false*/
    return 'axxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(uidReplace, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
};

/**
* Removes white space from left and right of string
* Uses native String.trim if available
* Adapted from www.jquery.com
*/
var trim = "".trim;

ss.trim = trim && !trim.call("\uFEFF\xA0") ?
    function( text ) {
        return text === null ?
            "" :
            trim.call( text );
    } :
    function( text ) {
        return text === null ?
            "" :
            text.toString().replace( rLWhitespace, '' ).replace( rTWhitespace, '' );
    };

var arr = [];

ss.indexOf = arr.indexOf ?
    function( array, elem ) {
        return array.indexOf( elem );
    } :
    function( array, elem ) {
        for ( var i = 0, len = array.length; i < len; i++ ) {
            if ( array[i] === elem ) {
                return i;
            }
        }
        return -1;
    };

/**
* Removes an element from an array
*/
ss.arrayDelete = function( array, elem ) {
    var index = ss.indexOf( array, elem );

    if ( index > -1 ) {
        array.splice( index, 1 );
    }
};

/**
* Extract file name from path
*/
ss.getFilename = function( path ) {
    "use strict";
    return path.replace( rPath, '' );
};

/**
* Get file extension
*/
ss.getExt = function( file ) {
    "use strict";
    return ( -1 !== file.indexOf( '.' ) ) ? file.replace( rExt, '' ) : '';
};

/**
* Checks whether an element is visible
*/
ss.isVisible = function( elem ) {
    "use strict";

    if ( !elem ) {
        return false;
    }

    if ( elem.nodeType !== 1 || elem == document.body ) {
        elem = null;
        return true;
    }

    if ( elem.parentNode &&
        ( elem.offsetWidth > 0 ||
         elem.offsetHeight > 0 ||
         ss.getStyle( elem, 'display' ).toLowerCase() != 'none' ) )
    {
        return ss.isVisible( elem.parentNode );
    }

    elem = null;
    return false;
};

ss.getStyle = function( elem, style ) {
    "use strict";

    if ( window.getComputedStyle ) {
        var cs = elem.ownerDocument.defaultView.getComputedStyle( elem, null );
        return cs.getPropertyValue( style );

    } else if ( elem.currentStyle && elem.currentStyle[ style ] ) {
        return elem.currentStyle[ style ];
    }
};

/**
* Accepts a form element and returns an object with key/value pairs for the form fields
*/
ss.getFormObj = function( form ) {
    "use strict";

    var elems = form.elements,
        ignore = ['button', 'submit', 'image', 'reset'],
        inputs = {},
        obj;

    for ( var i = 0, len = elems.length; i < len; i++ ) {
        obj = {};

        if ( elems[ i ].name && !elems[ i ].disabled && ss.indexOf( ignore, elems[ i ].type ) === -1 ) {
            if ( (elems[ i ].type == 'checkbox' || elems[ i ].type == 'radio') &&
                 !elems[ i ].checked )
            {
                continue;
            }

            obj[ elems[ i ].name ] = ss.val( elems[ i ] );
            ss.extendObj( inputs, obj );
        }
    }

    return inputs;
};

/**
* Accepts a form input element and returns its value
*/
ss.val = function( elem ) {
    "use strict";

    if ( !elem ) {
        return;
    }

    if ( elem.nodeName.toUpperCase() == 'SELECT' ) {
        var options = elem.options,
            index = elem.selectedIndex,
            one = elem.type === 'select-one' || index < 0,
            values = one ? null : [],
            value;

        for ( var i = 0, len = options.length; i < len; i++ ) {
            if ( ( options[ i ].selected || i === index ) && !options[ i ].disabled ) {
                value = !options[ i ].value ? options[ i ].text : options[ i ].value;

                if ( one ) {
                    return value;
                }

                values.push( value );
            }
        }

        return values;

    } else {
        return elem.value;
    }
};

/**
* Check whether element has a particular CSS class
* Parts borrowed from www.jquery.com
*/
ss.hasClass = function( elem, name ) {
    "use strict";

    if ( !elem || !name ) {
        return false;
    }

    return ( ' ' + elem.className + ' ' ).replace( rHasClass, ' ' ).indexOf( ' ' + name + ' ' ) >= 0;
};

/**
* Adds CSS class to an element
*/
ss.addClass = function( elem, name ) {
    "use strict";

    if ( !elem || !name ) {
        return false;
    }

    if ( !ss.hasClass( elem, name ) ) {
        elem.className += ' ' + name;
    }
};

/**
* Removes CSS class from an element
*/
ss.removeClass = (function() {
    "use strict";

    var c = {}; //cache regexps for performance

    return function( e, name ) {
        if ( !e || !name ) {
            return false;
        }

        if ( !c[name] ) {
            c[name] = new RegExp('(?:^|\\s)' + name + '(?!\\S)');
        }

        e.className = e.className.replace( c[name], '' );
    };
})();

/**
* Nulls out event handlers to prevent memory leaks in IE6/IE7
* http://javascript.crockford.com/memory/leak.html
* @param {Element} d
* @return void
*/
ss.purge = function( d ) {
    "use strict";

    var a = d.attributes, i, l, n;

    if ( a ) {
        for ( i = a.length - 1; i >= 0; i -= 1 ) {
            n = a[i].name;

            if ( typeof d[n] === 'function' ) {
                d[n] = null;
            }
        }
    }

    a = d.childNodes;

    if ( a ) {
        l = a.length;
        for ( i = 0; i < l; i += 1 ) {
            ss.purge( d.childNodes[i] );
        }
    }
};

/**
* Removes element from the DOM
*/
ss.remove = function( elem ) {
    "use strict";

    if ( elem && elem.parentNode ) {
        // null out event handlers for IE
        ss.purge( elem );
        elem.parentNode.removeChild( elem );
    }
    elem = null;
};

/**
* Accepts either a jQuery object, a string containing an element ID, or an element,
* verifies that it exists, and returns the element.
* @param {Mixed} elem
* @return {Element}
*/
ss.verifyElem = function( elem ) {
    "use strict";
    /*globals jQuery */

    if ( typeof jQuery !== 'undefined' && elem instanceof jQuery ) {
        elem = elem[0];

    } else if ( typeof elem === 'string' ) {
        if ( elem.charAt( 0 ) == '#' ) {
            elem = elem.substr( 1 );
        }
        elem = document.getElementById( elem );
    }

    if ( !elem || elem.nodeType !== 1 ) {
        return false;
    }

    if ( elem.nodeName.toUpperCase() == 'A' ) {
        elem.style.cursor = 'pointer';

        ss.addEvent( elem, 'click', function( e ) {
            if ( e && e.preventDefault ) {
                e.preventDefault();

            } else if ( window.event ) {
                window.event.returnValue = false;
            }
        });
    }

    return elem;
};

ss._options = {};

ss.uploadSetup = function( options ) {
    "use strict";
    ss.extendObj( ss._options, options );
};

ss.SimpleUpload = function( options ) {
    "use strict";

    this._opts = {
        button: '',
        url: '',
        dropzone: '',
        dragClass: '',
        form: '',
        overrideSubmit: true,
        cors: false,
        withCredentials: false,
        progressUrl: false,
        sessionProgressUrl: false,
        nginxProgressUrl: false,
        multiple: false, // allow multiple, concurrent file uploads
        multipleSelect: false, // allow multiple file selection
        maxUploads: 3,
        queue: true,
        checkProgressInterval: 500,
        keyParamName: 'APC_UPLOAD_PROGRESS',
        sessionProgressName: 'PHP_SESSION_UPLOAD_PROGRESS',
        nginxProgressHeader: 'X-Progress-ID',
        customProgressHeaders: {},
        corsInputName: 'XHR_CORS_TARGETORIGIN',
        allowedExtensions: [],
        accept: '',
        maxSize: false,
        name: '',
        data: {},
        noParams: true,
        autoSubmit: true,
        multipart: true,
        method: 'POST',
        responseType: '',
        debug: false,
        hoverClass: '',
        focusClass: '',
        disabledClass: '',
        customHeaders: {},
        encodeHeaders: true,
        autoCalibrate: true,
        onBlankSubmit: function() {},
        onAbort: function( filename, uploadBtn, size ) {},
        onChange: function( filename, extension, uploadBtn, size, file ) {},
        onSubmit: function( filename, extension, uploadBtn, size ) {},
        onProgress: function( pct ) {},
        onUpdateFileSize: function( filesize ) {},
        onComplete: function( filename, response, uploadBtn, size ) {},
        onDone: function( filename, status, textStatus, response, uploadBtn, size ) {},
        onAllDone: function() {},
        onExtError: function( filename, extension ) {},
        onSizeError: function( filename, fileSize, uploadBtn ) {},
        onError: function( filename, type, status, statusText, response, uploadBtn, size ) {},
        startXHR: function( filename, fileSize, uploadBtn ) {},
        endXHR: function( filename, fileSize, uploadBtn ) {},
        startNonXHR: function( filename, uploadBtn ) {},
        endNonXHR: function( filename, uploadBtn ) {}
    };

    ss.extendObj( this._opts, ss._options ); // Include any setup options
    ss.extendObj( this._opts, options ); // Then add options for this instance

    // An array of objects, each containing two items: a file and a reference
    // to the button which triggered the upload: { file: uploadFile, btn: button }
    this._queue = [];

    this._active = 0;
    this._disabled = false; // if disabled, clicking on button won't do anything
    this._maxFails = 10; // max allowed failed progress updates requests in iframe mode
    this._progKeys = {}; // contains the currently active upload ID progress keys
    this._sizeFlags = {}; // Cache progress keys after setting sizeBox for fewer trips to the DOM
    this._btns = [];

    this.addButton( this._opts.button );

    delete this._opts.button;
    this._opts.button = options = null;

    if ( this._opts.multiple === false ) {
        this._opts.maxUploads = 1;
    }

    if ( this._opts.dropzone !== '' ) {
        this.addDZ( this._opts.dropzone );
    }

    if ( this._opts.dropzone === '' && this._btns.length < 1 ) {
        throw new Error( "Invalid upload button. Make sure the element you're passing exists." );
    }

    if ( this._opts.form !== '' ) {
        this.setForm( this._opts.form );
    }

    this._createInput();
    this._manDisabled = false;
    this.enable( true );
};

ss.SimpleUpload.prototype = {

    destroy: function() {
        "use strict";

        // # of upload buttons
        var i = this._btns.length;

        // Put upload buttons back to the way we found them
        while ( i-- ) {
            // Remove event listener
            if ( this._btns[i].off ) {
                this._btns[i].off();
            }

            // Remove any lingering classes
            ss.removeClass( this._btns[i], this._opts.hoverClass );
            ss.removeClass( this._btns[i], this._opts.focusClass );
            ss.removeClass( this._btns[i], this._opts.disabledClass );

            // In case we disabled it
            this._btns[i].disabled = false;
        }

        this._killInput();

        // Set a flag to be checked in _last()
        this._destroy = true;
    },

    /**
    * Send data to browser console if debug is set to true
    */
    log: function( str ) {
        "use strict";

        if ( this._opts && this._opts.debug && window.console && window.console.log ) {
            window.console.log( '[Uploader] ' + str );
        }
    },

    /**
    * Replaces user data
    * Note that all previously set data is entirely removed and replaced
    */
    setData: function( data ) {
        "use strict";
        this._opts.data = data;
    },

    /**
    * Set or change uploader options
    * @param {Object} options
    */
    setOptions: function( options ) {
        "use strict";
        ss.extendObj( this._opts, options );
    },

    /**
    * Designate an element as an upload button
    */
    addButton: function( button ) {
        var btn;

        // An array of buttons was passed
        if ( button instanceof Array ) {

            for ( var i = 0, len = button.length; i < len; i++ ) {
                btn = ss.verifyElem( button[i] );

                if ( btn !== false ) {
                    this._btns.push( this.rerouteClicks( btn ) );

                } else {
                    this.log( 'Button with array index ' + i + ' is invalid' );
                }
            }

        // A single button was passed
        } else {
            btn = ss.verifyElem( button );

            if ( btn !== false ) {
                this._btns.push( this.rerouteClicks( btn ) );
            }
        }
    },

    /**
    * Designate an element as a drop zone
    */
    addDZ: function( dropzone ) {
        if ( !XhrOk ) {
            return;
        }

        dropzone = ss.verifyElem( dropzone );

        if ( !dropzone ) {
            this.log( 'Invalid or nonexistent element passed for drop zone' );
        } else {
            this.addDropZone( dropzone );
        }
    },

    /**
    * Designate an element as a progress bar
    * The CSS width % of the element will be updated as the upload progresses
    */
    setProgressBar: function( elem ) {
        "use strict";
        this._progBar = ss.verifyElem( elem );
    },

    /**
    * Designate an element to receive a string containing progress % during upload
    * Note: Uses innerHTML, so any existing child elements will be wiped out
    */
    setPctBox: function( elem ) {
        "use strict";
        this._pctBox = ss.verifyElem( elem );
    },

    /**
    * Designate an element to receive a string containing file size at start of upload
    * Note: Uses innerHTML, so any existing child elements will be wiped out
    */
    setFileSizeBox: function( elem ) {
        "use strict";
        this._sizeBox = ss.verifyElem( elem );
    },

    /**
    * Designate an element to be removed from DOM when upload is completed
    * Useful for removing progress bar, file size, etc. after upload
    */
    setProgressContainer: function( elem ) {
        "use strict";
        this._progBox = ss.verifyElem( elem );
    },

    /**
    * Designate an element to serve as the upload abort button
    */
    setAbortBtn: function( elem, remove ) {
        "use strict";

        this._abortBtn = ss.verifyElem( elem );
        this._removeAbort = false;

        if ( remove ) {
            this._removeAbort = true;
        }
    },

    setForm: function( form ) {
        "use strict";

        this._form = ss.verifyElem( form );

        if ( !this._form || this._form.nodeName.toUpperCase() != 'FORM' ) {
            this.log( 'Invalid or nonexistent element passed for form' );

        } else {
            var self = this;
            this._opts.autoSubmit = false;

            if ( this._opts.overrideSubmit ) {
                ss.addEvent( this._form, 'submit', function( e ) {
                    if ( e.preventDefault ) {
                        e.preventDefault();

                    } else if ( window.event ) {
                        window.event.returnValue = false;
                    }

                    if ( self._validateForm() ) {
                        self.submit();
                    }
                });

                this._form.submit = function() {
                    if ( self._validateForm() ) {
                        self.submit();
                    }
                };
            }
        }
    },

    /**
    * Returns number of files currently in queue
    */
    getQueueSize: function() {
        "use strict";
        return this._queue.length;
    },

    /**
    * Remove current file from upload queue, reset props, cycle to next upload
    */
    removeCurrent: function( id ) {
        "use strict";

        if ( id ) {
            var i = this._queue.length;

            while ( i-- ) {
                if ( this._queue[i].id === id ) {
                    this._queue.splice( i, 1 );
                    break;
                }
            }

        } else {
            this._queue.splice( 0, 1 );
        }

        this._cycleQueue();
    },

    /**
    * Clears Queue so only most recent select file is uploaded
    */
    clearQueue: function() {
        "use strict";
        this._queue.length = 0;
    },

    /**
    * Disables upload functionality
    */
    disable: function( _self ) {
        "use strict";

        var i = this._btns.length,
            nodeName;

        // _self is always true when disable() is called internally
        this._manDisabled = !_self || this._manDisabled === true ? true : false;
        this._disabled = true;

        while ( i-- ) {
            nodeName = this._btns[i].nodeName.toUpperCase();

            if ( nodeName == 'INPUT' || nodeName == 'BUTTON' ) {
                this._btns[i].disabled = true;
            }

            if ( this._opts.disabledClass !== '' ) {
                ss.addClass( this._btns[i], this._opts.disabledClass );
            }
        }

        // Hide file input
        if ( this._input && this._input.parentNode ) {
            this._input.parentNode.style.visibility = 'hidden';
        }
    },

    /**
    * Enables upload functionality
    */
    enable: function( _self ) {
        "use strict";

        // _self will always be true when enable() is called internally
        if ( !_self ) {
            this._manDisabled = false;
        }

        // Don't enable uploader if it was manually disabled
        if ( this._manDisabled === true ) {
            return;
        }

        var i = this._btns.length;

        this._disabled = false;

        while ( i-- ) {
            ss.removeClass( this._btns[i], this._opts.disabledClass );
            this._btns[i].disabled = false;
        }
    },

    /**
     * Updates invisible button position
     */
    updatePosition: function( btn ) {
        "use strict";

        btn = !btn ? this._btns[0] : btn;

        if ( btn && this._input && this._input.parentNode ) {
            ss.copyLayout( btn, this._input.parentNode );
        }

        btn = null;
    },

    rerouteClicks: function( elem ) {
        "use strict";

        var self = this,
            detachOver,
            detachClick;

        detachOver = ss.addEvent( elem, 'mouseover', function() {
            if ( self._disabled ) {
                return;
            }

            if ( !self._input ) {
                self._createInput();
            }

            self._overBtn = elem;
            ss.copyLayout( elem, self._input.parentNode );
            self._input.parentNode.style.visibility = 'visible';
        });

        // Support keyboard interaction
        detachClick = ss.addEvent( elem, 'click', function( e ) {
            if ( e && e.preventDefault ) {
                e.preventDefault();
            }

            if ( self._disabled ) {
                return;
            }

            if ( !self._input ) {
                self._createInput();
            }

            self._overBtn = elem;

            if ( !isIE7to9 ) {
                self._input.click();
            }
        });

        // ss.addEvent() returns a function to detach, which
        // allows us to call elem.off() to remove mouseover listener
        elem.off = function() {
            detachOver();
            detachClick();
        };

        if ( self._opts.autoCalibrate && !ss.isVisible( elem ) ) {
            self.log('Upload button not visible');

            var interval = function() {
                if ( ss.isVisible( elem ) ) {
                    self.log('Upload button now visible');

                    window.setTimeout(function() {
                        self.updatePosition( elem );

                        if ( self._btns.length === 1 ) {
                            self._input.parentNode.style.visibility = 'hidden';
                        }
                    }, 200);

                } else {
                    window.setTimeout( interval, 500 );
                }
            };

            window.setTimeout( interval, 500 );
        }

        return elem;
    },

    /**
    * Validates input and directs to either XHR method or iFrame method
    */
    submit: function( _, auto ) {
        "use strict";

        if ( !auto && this._queue.length < 1 ) {
            this._opts.onBlankSubmit.call( this );
            return;
        }

        if ( this._disabled ||
            this._active >= this._opts.maxUploads ||
            this._queue.length < 1 )
        {
            return;
        }

        if ( !this._checkFile( this._queue[0] ) ) {
            return;
        }

        // User returned false to cancel upload
        if ( false === this._opts.onSubmit.call( this, this._queue[0].name, this._queue[0].ext, this._queue[0].btn, this._queue[0].size ) ) {
            this.removeCurrent( this._queue[0].id );
            return;
        }

        // Increment the active upload counter
        this._active++;

        // Disable uploading if multiple file uploads are not enabled
        // or if queue is disabled and we've reached max uploads
        if ( this._opts.multiple === false ||
            this._opts.queue === false && this._active >= this._opts.maxUploads )
        {
            this.disable( true );
        }

        this._initUpload( this._queue[0] );
    }

};

ss.IframeUpload = {

    _detachEvents: {},

    _detach: function( id ) {
        if ( this._detachEvents[ id ] ) {
            this._detachEvents[ id ]();
            delete this._detachEvents[ id ];
        }
    },

    /**
    * Accepts a URI string and returns the hostname
    */
    _getHost: function( uri ) {
        var a = document.createElement( 'a' );

        a.href = uri;

        if ( a.hostname ) {
            return a.hostname.toLowerCase();
        }
        return uri;
    },

    _addFiles: function( file ) {
        var filename = ss.getFilename( file.value ),
            ext = ss.getExt( filename );

        if ( false === this._opts.onChange.call( this, filename, ext, this._overBtn, undefined, file ) ) {
            return false;
        }

        this._queue.push({
            id: ss.getUID(),
            file: file,
            name: filename,
            ext: ext,
            btn: this._overBtn,
            size: null
        });

        return true;
    },

    /**
    * Handles uploading with iFrame
    */
    _uploadIframe: function( fileObj, progBox, sizeBox, progBar, pctBox, abortBtn, removeAbort ) {
        "use strict";

        var self = this,
            opts = this._opts,
            key = ss.getUID(),
            iframe = ss.getIFrame(),
            form,
            url,
            msgLoaded = false,
            iframeLoaded = false,
            cancel;

        if ( opts.noParams === true ) {
            url = opts.url;

        } else {
            // If we're using Nginx Upload Progress Module, append upload key to the URL
            // Also, preserve query string if there is one
            url = !opts.nginxProgressUrl ?
                    opts.url :
                    url + ( ( url.indexOf( '?' ) > -1 ) ? '&' : '?' ) +
                          encodeURIComponent( opts.nginxProgressHeader ) + '=' + encodeURIComponent( key );
        }

        form = ss.getForm({
            action: url,
            target: iframe.name,
            method: opts.method
        });

        opts.onProgress.call( this, 0 );

        if ( pctBox ) {
            pctBox.innerHTML = '0%';
        }

        if ( progBar ) {
            progBar.style.width = '0%';
        }

        // For CORS, add a listener for the "message" event, which will be
        // triggered by the Javascript snippet in the server response
        if ( opts.cors ) {
            var msgId = ss.getUID();

            self._detachEvents[ msgId ] = ss.addEvent( window, 'message', function( event ) {
                // Make sure event.origin matches the upload URL
                if ( self._getHost( event.origin ) != self._getHost( opts.url ) ) {
                    self.log('Non-matching origin: ' + event.origin);
                    return;
                }

                msgLoaded = true;
                self._detach( msgId );
                opts.endNonXHR.call( self, fileObj.name, fileObj.btn );
                self._finish( fileObj,  '', '', event.data, sizeBox, progBox, pctBox, abortBtn, removeAbort );
            });
        }

        self._detachEvents[ iframe.id ] = ss.addEvent( iframe, 'load', function() {
            self._detach( iframe.id );

            if ( opts.sessionProgressUrl ) {
                form.appendChild( ss.getHidden( opts.sessionProgressName, key ) );
            }

            // PHP APC upload progress key field must come before the file field
            else if ( opts.progressUrl ) {
                form.appendChild( ss.getHidden( opts.keyParamName, key ) );
            }

            if ( self._form ) {
                ss.extendObj( opts.data, ss.getFormObj( self._form ) );
            }

            // Get additional data after startNonXHR() in case setData() was called prior to submitting
            for ( var prop in opts.data ) {
                if ( opts.data.hasOwnProperty( prop ) ) {
                    form.appendChild( ss.getHidden( prop, opts.data[prop] ) );
                }
            }

            // Add a field (default name: "XHR_CORS_TRARGETORIGIN") to tell server this is a CORS request
            // Value of the field is targetOrigin parameter of postMessage(message, targetOrigin)
            if ( opts.cors ) {
                form.appendChild( ss.getHidden( opts.corsInputName, window.location.href ) );
            }

            form.appendChild( fileObj.file );

            self._detachEvents[ fileObj.id ] = ss.addEvent( iframe, 'load', function() {
                if ( !iframe || !iframe.parentNode || iframeLoaded ) {
                    return;
                }

                self._detach( fileObj.id );
                iframeLoaded = true;

                delete self._progKeys[ key ];
                delete self._sizeFlags[ key ];

                if ( abortBtn ) {
                    ss.removeEvent( abortBtn, 'click', cancel );
                }

                // After a CORS response, we wait briefly for the "message" event to finish,
                // during which time the msgLoaded var will be set to true, signalling success.
                // If iframe loads without "message" event, we assume there was an error
                if ( opts.cors ) {
                    window.setTimeout(function() {
                        ss.remove( iframe );

                        // If msgLoaded has not been set to true after "message" event fires, we
                        // infer that an error must have occurred and respond accordingly
                        if ( !msgLoaded ) {
                            self._errorFinish( fileObj, '', '', false, 'error', progBox, sizeBox, pctBox, abortBtn, removeAbort );
                        }

                        opts = key = iframe = sizeBox = progBox = pctBox = abortBtn = removeAbort = null;
                    }, 600);
                }

                // Non-CORS upload
                else {
                    try {
                        var doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document,
                            response = doc.body.innerHTML;

                        ss.remove( iframe );
                        iframe = null;

                        opts.endNonXHR.call( self, fileObj.name, fileObj.btn );

                        // No way to get status and statusText for an iframe so return empty strings
                        self._finish( fileObj, '', '', response, sizeBox, progBox, pctBox, abortBtn, removeAbort );

                    } catch ( e ) {
                        self._errorFinish( fileObj, '', e.message, false, 'error', progBox, sizeBox, pctBox, abortBtn, removeAbort );
                    }

                    opts = key = sizeBox = progBox = pctBox = null;
                }
            });// end load

            if ( abortBtn ) {
                cancel = function() {
                    ss.removeEvent( abortBtn, 'click', cancel );

                    delete self._progKeys[key];
                    delete self._sizeFlags[key];

                    if ( iframe ) {
                        iframeLoaded = true;
                        self._detach( fileObj.id );

                        try {
                            if ( iframe.contentWindow.document.execCommand ) {
                                iframe.contentWindow.document.execCommand('Stop');
                            }
                        } catch( err ) {}

                        try {
                            iframe.src = 'javascript'.concat(':false;');
                        } catch( err ) {}

                        window.setTimeout(function() {
                            ss.remove( iframe );
                            iframe = null;
                        }, 1);
                    }

                    self.log('Upload aborted');
                    opts.onAbort.call( self, fileObj.name, fileObj.btn, fileObj.size );
                    self._last( sizeBox, progBox, pctBox, abortBtn, removeAbort, fileObj, 'abort' );
                };

                ss.addEvent( abortBtn, 'click', cancel );
            }

            self.log( 'Commencing upload using iframe' );
            form.submit();

            // Remove form and begin next upload
            window.setTimeout(function() {
                ss.remove( form );
                form = null;
                self.removeCurrent( fileObj.id );
            }, 1);

            if ( self._hasProgUrl ) {
                // Add progress key to active key array
                self._progKeys[key] = 1;

                window.setTimeout( function() {
                    self._getProg( key, progBar, sizeBox, pctBox, 1 );
                    progBar = sizeBox = pctBox = null;
                }, 600 );
            }

        });// end load

        document.body.appendChild( form );
        document.body.appendChild( iframe );
    },

    /**
    * Retrieves upload progress updates from the server
    * (For fallback upload progress support)
    */
    _getProg: function( key, progBar, sizeBox, pctBox, counter ) {
        "use strict";
        /*jshint sub:true*/

        var self = this,
            opts = this._opts,
            time = new Date().getTime(),
            xhr,
            url,
            callback;

        if ( !key || !opts ) {
            return;
        }

        // Nginx Upload Progress Module
        if ( opts.nginxProgressUrl ) {
            url = opts.nginxProgressUrl + '?' +
                  encodeURIComponent( opts.nginxProgressHeader ) + '=' + encodeURIComponent( key ) +
                  '&_=' + time;
        }

        else if ( opts.sessionProgressUrl ) {
            url = opts.sessionProgressUrl;
        }

        // PHP APC upload progress
        else if ( opts.progressUrl ) {
            url = opts.progressUrl +
            '?progresskey=' + encodeURIComponent( key ) +
            '&_=' + time;
        }

        callback = function() {
            var response,
                size,
                pct,
                status,
                statusText;

            try {
                // XDR doesn't have readyState so we just assume that it finished correctly
                if ( callback && ( opts.cors || xhr.readyState === 4 ) ) {
                    callback = undefined;
                    xhr.onreadystatechange = function() {};

                    try {
                        statusText = xhr.statusText;
                        status = xhr.status;
                    } catch( e ) {
                        statusText = '';
                        status = '';
                    }

                    // XDR also doesn't have status, so just assume that everything is fine
                    if ( opts.cors || ( status >= 200 && status < 300 ) ) {
                        response = ss.parseJSON( xhr.responseText );

                        if ( response === false ) {
                            self.log( 'Error parsing progress response (expecting JSON)' );
                            return;
                        }

                        // Handle response if using Nginx Upload Progress Module
                        if ( opts.nginxProgressUrl ) {

                            if ( response.state == 'uploading' ) {
                                size = parseInt( response.size, 10 );
                                if ( size > 0 ) {
                                    pct = Math.round( ( parseInt( response.received, 10 ) / size ) * 100 );
                                    size = Math.round( size / 1024 ); // convert to kilobytes
                                }

                            } else if ( response.state == 'done' ) {
                                pct = 100;

                            } else if ( response.state == 'error' ) {
                                self.log( 'Error requesting upload progress: ' + response.status );
                                return;
                            }
                        }

                        // Handle response if using PHP APC
                        else if ( opts.sessionProgressUrl || opts.progressUrl ) {
                            if ( response.success === true ) {
                                size = parseInt( response.size, 10 );
                                pct = parseInt( response.pct, 10 );
                            }
                        }

                        // Update progress bar width
                        if ( pct ) {
                            if ( pctBox ) {
                                pctBox.innerHTML = pct + '%';
                            }

                            if ( progBar ) {
                                progBar.style.width = pct + '%';
                            }

                            opts.onProgress.call( self, pct );
                        }

                        if ( size && !self._sizeFlags[key] ) {
                            if ( sizeBox ) {
                                sizeBox.innerHTML = size + 'K';
                            }

                            self._sizeFlags[key] = 1;
                            opts.onUpdateFileSize.call( self, size );
                        }

                        // Stop attempting progress checks if we keep failing
                        if ( !pct &&
                             !size &&
                             counter >= self._maxFails )
                        {
                            counter++;
                            self.log( 'Failed progress request limit reached. Count: ' + counter );
                            return;
                        }

                        // Begin countdown until next progress update check
                        if ( pct < 100 && self._progKeys[key] ) {
                            window.setTimeout( function() {
                                self._getProg( key, progBar, sizeBox, pctBox, counter );

                                key = progBar = sizeBox = pctBox = counter = null;
                            }, opts.checkProgressInterval );
                        }

                        // We didn't get a 2xx status so don't continue sending requests
                    } else {
                        delete self._progKeys[key];
                        self.log( 'Error requesting upload progress: ' + status + ' ' + statusText );
                    }

                    xhr = size = pct = status = statusText = response = null;
                }

            } catch( e ) {
                self.log( 'Error requesting upload progress: ' + e.message );
            }
        };

        // CORS requests in IE8 and IE9 must use XDomainRequest
        if ( opts.cors && !opts.sessionProgressUrl ) {

            if ( window.XDomainRequest ) {
                xhr = new window.XDomainRequest();
                xhr.open( 'GET', url, true );
                xhr.onprogress = xhr.ontimeout = function() {};
                xhr.onload = callback;

                xhr.onerror = function() {
                    delete self._progKeys[key];
                    key = null;
                    self.log('Error requesting upload progress');
                };

                // IE7 or some other dinosaur -- just give up
            } else {
                return;
            }

        } else {
            var method = !opts.sessionProgressUrl ? 'GET' : 'POST',
                headers = {},
                params;

            xhr = ss.newXHR();
            xhr.onreadystatechange = callback;
            xhr.open( method, url, true );

            // PHP session progress updates must be a POST request
            if ( opts.sessionProgressUrl ) {
                params = encodeURIComponent( opts.sessionProgressName ) + '=' + encodeURIComponent( key );
                headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }

            // Set the upload progress header for Nginx
            if ( opts.nginxProgressUrl ) {
                headers[opts.nginxProgressHeader] = key;
            }

            headers['X-Requested-With'] = 'XMLHttpRequest';
            headers['Accept'] = 'application/json, text/javascript, */*; q=0.01';

            ss.extendObj( headers, opts.customProgressHeaders );

            for ( var i in headers ) {
                if ( headers.hasOwnProperty( i ) ) {
                    if ( opts.encodeHeaders ) {
                        xhr.setRequestHeader( i, ss.encodeUTF8( headers[ i ] + '' ) );

                    } else {
                        xhr.setRequestHeader( i, headers[ i ] + '' );
                    }
                }
            }

           xhr.send( ( opts.sessionProgressUrl &&  params ) || null );
        }
    },

    _initUpload: function( fileObj ) {
        if ( false === this._opts.startNonXHR.call( this, fileObj.name, fileObj.btn ) ) {

            if ( this._disabled ) {
                this.enable( true );
            }

            this._active--;
            return;
        }

        this._hasProgUrl = ( this._opts.progressUrl ||
                             this._opts.sessionProgressUrl ||
                             this._opts.nginxProgressUrl ) ?
                             true : false;

        this._uploadIframe( fileObj, this._progBox, this._sizeBox, this._progBar, this._pctBox, this._abortBtn, this._removeAbort );

        fileObj = this._progBox = this._sizeBox = this._progBar = this._pctBox = this._abortBtn = this._removeAbort = null;
    }
};

ss.XhrUpload = {

    _addFiles: function( files ) {
        var total = files.length,
            filename,
            ext,
            size,
            i;

        if ( !this._opts.multiple ) {
            total = 1;
        }

        for ( i = 0; i < total; i++ ) {
            filename = ss.getFilename( files[i].name );
            ext = ss.getExt( filename );
            size = Math.round( files[i].size / 1024 );

            if ( false === this._opts.onChange.call( this, filename, ext, this._overBtn, size, files[i] ) ) {
                return false;
            }

            this._queue.push({
                id: ss.getUID(),
                file: files[i],
                name: filename,
                ext: ext,
                btn: this._overBtn,
                size: size
            });
        }

        return true;
    },

    /**
    * Handles uploading with XHR
    */
    _uploadXhr: function( fileObj, url, params, headers, sizeBox, progBar, progBox, pctBox, abortBtn, removeAbort ) {
        "use strict";

        var self = this,
            opts = this._opts,
            xhr = ss.newXHR(),
            callback,
            cancel;

        // Inject file size into size box
        if ( sizeBox ) {
            sizeBox.innerHTML = fileObj.size + 'K';
        }

        // Begin progress bars at 0%
        if ( pctBox ) {
            pctBox.innerHTML = '0%';
        }

        if ( progBar ) {
            progBar.style.width = '0%';
        }

        // Borrows heavily from jQuery ajax transport
        callback = function( _, isAbort ) {
            var statusText;

            try {
                // Was never called and is aborted or complete
                if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
                    callback = undefined;
                    xhr.onreadystatechange = function() {};

                    // If it's an abort
                    if ( isAbort ) {
                        // Abort it manually if needed
                        if ( xhr.readyState !== 4 ) {
                            xhr.abort();
                        }

                        opts.onAbort.call( self, fileObj.name, fileObj.btn, fileObj.size );
                        self._last( sizeBox, progBox, pctBox, abortBtn, removeAbort, fileObj, 'abort' );

                    } else {
                        if ( abortBtn ) {
                            ss.removeEvent( abortBtn, 'click', cancel );
                        }

                        try {
                            statusText = xhr.statusText;
                        } catch( e ) {
                            // We normalize with Webkit giving an empty statusText
                            statusText = '';
                        }

                        if ( xhr.status >= 200 && xhr.status < 300 ) {
                            opts.endXHR.call( self, fileObj.name, fileObj.size, fileObj.btn );
                            self._finish( fileObj, xhr.status, statusText, xhr.responseText, sizeBox, progBox, pctBox, abortBtn, removeAbort );

                            // We didn't get a 2xx status so throw an error
                        } else {
                            self._errorFinish( fileObj, xhr.status, statusText, xhr.responseText, 'error', progBox, sizeBox, pctBox, abortBtn, removeAbort );
                        }
                    }
                }

            }
            catch ( e ) {
                if ( !isAbort ) {
                    self._errorFinish( fileObj, -1, e.message, false, 'error', progBox, sizeBox, pctBox, abortBtn, removeAbort );
                }
            }
        };

        if ( abortBtn ) {
            cancel = function() {
                ss.removeEvent( abortBtn, 'click', cancel );

                if ( callback ) {
                    callback( undefined, true );
                }
            };

            ss.addEvent( abortBtn, 'click', cancel );
        }

        xhr.onreadystatechange = callback;
        xhr.open( opts.method.toUpperCase(), url, true );
        xhr.withCredentials = !!opts.withCredentials;

        ss.extendObj( headers, opts.customHeaders );

        for ( var i in headers ) {
            if ( headers.hasOwnProperty( i ) ) {
                if ( opts.encodeHeaders ) {
                    xhr.setRequestHeader( i, ss.encodeUTF8( headers[ i ] + '' ) );

                } else {
                    xhr.setRequestHeader( i, headers[ i ] + '' );
                }
            }
        }

        ss.addEvent( xhr.upload, 'progress', function( event ) {
            if ( event.lengthComputable ) {
                var pct = Math.round( event.loaded / event.total * 100 );

                opts.onProgress.call( self, pct );

                if ( pctBox ) {
                    pctBox.innerHTML = pct + '%';
                }

                if ( progBar ) {
                    progBar.style.width = pct + '%';
                }
            }
        });

        opts.onProgress.call( this, 0 );

        if ( opts.multipart === true ) {
            var formData = new FormData();

            var hasFile = false;

            for ( var prop in params ) {
                if ( params.hasOwnProperty( prop ) ) {
                    if ( prop === opts.name && opts.noParams === true && !self._form ) {
                        hasFile = true;
                    }
                    formData.append( prop, params[prop] );
                }
            }

            if ( !hasFile ) {
                formData.append( opts.name, fileObj.file );
            }

            this.log( 'Commencing upload using multipart form' );
            xhr.send( formData );

        } else {
            this.log( 'Commencing upload using binary stream' );
            xhr.send( fileObj.file );
        }

        // Remove file from upload queue and begin next upload
        this.removeCurrent( fileObj.id );
    },

    _initUpload: function( fileObj ) {
        "use strict";
        /*jshint sub:true*/

        var params = {},
            headers = {},
            url;

        // Call the startXHR() callback and stop upload if it returns false
        // We call it before _uploadXhr() in case setProgressBar, setPctBox, etc., is called
        if ( false === this._opts.startXHR.call( this, fileObj.name, fileObj.size, fileObj.btn ) ) {

            if ( this._disabled ) {
                this.enable( true );
            }

            this._active--;
            return;
        }

        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['X-File-Name'] = ss.encodeUTF8( fileObj.name );

        if ( this._opts.responseType.toLowerCase() == 'json' ) {
            headers['Accept'] = 'application/json, text/javascript, */*; q=0.01';
        }

        if ( !this._opts.multipart ) {
            headers['Content-Type'] = 'application/octet-stream';
        }

        if ( this._form ) {
            ss.extendObj( params, ss.getFormObj( this._form ) );
        }

        // We get the any additional data here after startXHR()
        ss.extendObj( params, this._opts.data );

        // Build query string while preserving any existing parameters
        url = this._opts.noParams === true ?
                this._opts.url :
                this._opts.url + ( ( this._opts.url.indexOf( '?' ) > -1 ) ? '&' : '?' ) + ss.obj2string( params );

        this._uploadXhr( fileObj, url, params, headers, this._sizeBox, this._progBar, this._progBox, this._pctBox, this._abortBtn, this._removeAbort );

        this._sizeBox = this._progBar = this._progBox = this._pctBox = this._abortBtn = this._removeAbort = null;
    }

};

ss.DragAndDrop = {

    _dragFileCheck: function( e ) {
        if ( e.dataTransfer.types ) {
            for ( var i = 0; i < e.dataTransfer.types.length; i++ ) {
                if ( e.dataTransfer.types[i] == 'Files' ) {
                    return true;
                }
            }
        }

        return false;
    },

    addDropZone: function( elem ) {
        var self = this,
            collection = [];

        ss.addStyles( elem, {
            'zIndex': 16777271
        });

        elem.ondragenter = function( e ) {
            e.stopPropagation();
            e.preventDefault();

            if ( !self._dragFileCheck( e ) ) {
                return false;
            }

            if ( collection.length === 0 ) {
                ss.addClass( this, self._opts.dragClass );
            }

            if ( ss.indexOf( collection, e.target ) === -1 ) {
                collection.push( e.target );
            }

            return false;
        };

        elem.ondragover = function( e ) {
            e.stopPropagation();
            e.preventDefault();

            if ( self._dragFileCheck( e ) ) {
                e.dataTransfer.dropEffect = 'copy';
            }

            return false;
        };

        elem.ondragend = function() {
            ss.removeClass( this, self._opts.dragClass );
            return false;
        };

        elem.ondragleave = function( e ) {
            ss.arrayDelete( collection, e.target );

            if ( collection.length === 0 ) {
                ss.removeClass( this, self._opts.dragClass );
            }

            return false;
        };

        elem.ondrop = function( e ) {
            e.stopPropagation();
            e.preventDefault();

            ss.arrayDelete( collection, e.target );

            if ( collection.length === 0 ) {
                ss.removeClass( this, self._opts.dragClass );
            }

            if ( !self._dragFileCheck( e ) ) {
                return;
            }

            if ( false !== self._addFiles( e.dataTransfer.files ) ) {
                self._cycleQueue();
            }
        };
    }
};

ss.extendObj( ss.SimpleUpload.prototype, {

    _createInput: function() {
        "use strict";

        var self = this,
            div = document.createElement( 'div' );

        this._input = document.createElement( 'input' );
        this._input.type = 'file';
        this._input.name = this._opts.name;

        // Don't allow multiple file selection in Safari -- it has a nasty bug
        // http://stackoverflow.com/q/7231054/1091949
        if ( XhrOk && !isSafari && this._opts.multipleSelect ) {
            this._input.multiple = true;
        }

        // Check support for file input accept attribute
        if ( 'accept' in this._input && this._opts.accept !== '' ) {
            this._input.accept = this._opts.accept;
        }

        ss.addStyles( div, {
            'display' : 'none',
            'position' : 'relative',
            'visibility' : 'hidden',
            'overflow' : 'hidden',
            'margin' : 0,
            'padding' : 0,
            'opacity' : 0,
            'direction' : 'ltr',
            'zIndex': 16777270
        });

        if ( div.style.opacity !== '0' ) {
            div.style.filter = 'alpha(opacity=0)';
        }

        ss.addStyles( this._input, {
            'position' : 'absolute',
            'right' : 0,
            'margin' : 0,
            'padding' : 0,
            'fontSize' : '480px',
            'fontFamily' : 'sans-serif',
            'cursor' : 'pointer',
            'height' : '100%',
            'zIndex': 16777270
        });

        this._input.turnOff = ss.addEvent( this._input, 'change', function() {
            if ( !self._input || self._input.value === '' ) {
                return;
            }

            if ( false === self._addFiles( XhrOk ? self._input.files : self._input ) ) {
                return;
            }

            ss.removeClass( self._overBtn, self._opts.hoverClass );
            ss.removeClass( self._overBtn, self._opts.focusClass );

            self._killInput();

            // Then create a new file input
            self._createInput();

            // Submit if autoSubmit option is true
            if ( self._opts.autoSubmit ) {
                self.submit();
            }
        });

        if ( self._opts.hoverClass !== '' ) {
            div.mouseOverOff = ss.addEvent( div, 'mouseover', function() {
                ss.addClass( self._overBtn, self._opts.hoverClass );
            });
        }

        div.mouseOutOff = ss.addEvent( div, 'mouseout', function() {
            self._input.parentNode.style.visibility = 'hidden';

            if ( self._opts.hoverClass !== '' ) {
                ss.removeClass( self._overBtn, self._opts.hoverClass );
                ss.removeClass( self._overBtn, self._opts.focusClass );
            }
        });

        if ( self._opts.focusClass !== '' ) {
            this._input.focusOff = ss.addEvent( this._input, 'focus', function() {
                ss.addClass( self._overBtn, self._opts.focusClass );
            });

            this._input.blurOff = ss.addEvent( this._input, 'blur', function() {
                ss.removeClass( self._overBtn, self._opts.focusClass );
            });
        }

        div.appendChild( this._input );
        document.body.appendChild( div );
        div = null;
    },

    /**
    * Final cleanup function after upload ends
    */
    _last: function( sizeBox, progBox, pctBox, abortBtn, removeAbort, fileObj, textStatus, status, response ) {
        "use strict";

        if ( sizeBox ) {
           sizeBox.innerHTML = '';
        }

        if ( pctBox ) {
            pctBox.innerHTML = '';
        }

        if ( abortBtn && removeAbort ) {
            ss.remove( abortBtn );
        }

        if ( progBox ) {
            ss.remove( progBox );
        }

        // Decrement the active upload counter
        this._active--;

        sizeBox = progBox = pctBox = abortBtn = removeAbort = null;

        if ( this._disabled ) {
            this.enable( true );
        }

        // Burn it all down if destroy() was called
        // We have to do it here after everything is finished to avoid any errors
        if ( this._destroy &&
             this._queue.length === 0 &&
             this._active === 0 )
        {
            for ( var prop in this ) {
                if ( this.hasOwnProperty( prop ) ) {
                    delete this[ prop ];
                }
            }

        // Otherwise just go to the next upload as usual
        } else {
            this._opts.onDone.call( this, fileObj.name, status, textStatus, response, fileObj.btn, fileObj.size );

            this._cycleQueue();

            if ( this._queue.length === 0 && this._active === 0 ) {
                this._opts.onAllDone.call( this );
            }
        }

        fileObj = textStatus = status = response = null;
    },

    /**
    * Completes upload request if an error is detected
    */
    _errorFinish: function( fileObj, status, statusText, response, errorType, progBox, sizeBox, pctBox, abortBtn, removeAbort ) {
        "use strict";

        this.log( 'Upload failed: ' + status + ' ' + statusText );
        this._opts.onError.call( this, fileObj.name, errorType, status, statusText, response, fileObj.btn, fileObj.size );
        this._last( sizeBox, progBox, pctBox, abortBtn, removeAbort, fileObj, 'error', status, response );

        statusText = errorType = sizeBox = progBox = pctBox = abortBtn = removeAbort = null;
    },

    /**
    * Completes upload request if the transfer was successful
    */
    _finish: function( fileObj, status, statusText, response, sizeBox, progBox, pctBox, abortBtn, removeAbort ) {
        "use strict";

        this.log( 'Server response: ' + response );

        if ( this._opts.responseType.toLowerCase() == 'json' ) {
            response = ss.parseJSON( response );

            if ( response === false ) {
                this._errorFinish( fileObj, status, statusText, false, 'parseerror', progBox, sizeBox, abortBtn, removeAbort );
                return;
            }
        }

        this._opts.onComplete.call( this, fileObj.name, response, fileObj.btn, fileObj.size );
        this._last( sizeBox, progBox, pctBox, abortBtn, removeAbort, fileObj, 'success', status, response );
        statusText = sizeBox = progBox = pctBox = abortBtn = removeAbort = null;
    },

    /**
    * Verifies that file is allowed
    * Checks file extension and file size if limits are set
    */
    _checkFile: function( fileObj ) {
        "use strict";

        var extOk = false,
            i = this._opts.allowedExtensions.length;

        // Only file extension if allowedExtensions is set
        if ( i > 0 ) {
            while ( i-- ) {
                if ( this._opts.allowedExtensions[i].toLowerCase() == fileObj.ext.toLowerCase() ) {
                    extOk = true;
                    break;
                }
            }

            if ( !extOk ) {
                this.removeCurrent( fileObj.id );
                this.log( 'File extension not permitted' );
                this._opts.onExtError.call( this, fileObj.name, fileObj.ext );
                return false;
            }
        }

        if ( fileObj.size &&
            this._opts.maxSize !== false &&
            fileObj.size > this._opts.maxSize )
        {
            this.removeCurrent( fileObj.id );
            this.log( fileObj.name + ' exceeds ' + this._opts.maxSize + 'K limit' );
            this._opts.onSizeError.call( this, fileObj.name, fileObj.size, fileObj.btn );
            return false;
        }

        fileObj = null;

        return true;
    },

    _killInput: function() {
        "use strict";

        if ( !this._input ) {
            return;
        }

        if ( this._input.turnOff ) {
            this._input.turnOff();
        }

        if ( this._input.focusOff ) {
            this._input.focusOff();
        }

        if ( this._input.blurOff ) {
            this._input.blurOff();
        }

        if ( this._input.parentNode.mouseOverOff ) {
            this._input.parentNode.mouseOverOff();
        }

        ss.remove( this._input.parentNode );
        delete this._input;
        this._input = null;
    },

    /**
    * Enables uploader and submits next file for upload
    */
    _cycleQueue: function() {
        "use strict";

        if ( this._queue.length > 0 && this._opts.autoSubmit ) {
            this.submit( undefined, true );
        }
    },

    _validateForm: function() {
        "use strict";

        if ( this._form.checkValidity && !this._form.checkValidity() ) {
            return false;

        } else {
            return true;
        }
    }

});

if ( XhrOk ) {
    ss.extendObj( ss.SimpleUpload.prototype, ss.XhrUpload );

} else {
    ss.extendObj( ss.SimpleUpload.prototype, ss.IframeUpload );
}

ss.extendObj( ss.SimpleUpload.prototype, ss.DragAndDrop );

return ss;

}));


/**
 * Template7 1.4.2
 * Mobile-first HTML template engine
 * 
 * http://www.idangero.us/template7/
 * 
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: June 14, 2019
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Template7 = factory());
}(this, function () { 'use strict';

  var t7ctx;
  if (typeof window !== 'undefined') {
    t7ctx = window;
  } else if (typeof global !== 'undefined') {
    t7ctx = global;
  } else {
    t7ctx = undefined;
  }

  var Template7Context = t7ctx;

  var Template7Utils = {
    quoteSingleRexExp: new RegExp('\'', 'g'),
    quoteDoubleRexExp: new RegExp('"', 'g'),
    isFunction: function isFunction(func) {
      return typeof func === 'function';
    },
    escape: function escape(string) {
      if ( string === void 0 ) string = '';

      return string
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },
    helperToSlices: function helperToSlices(string) {
      var quoteDoubleRexExp = Template7Utils.quoteDoubleRexExp;
      var quoteSingleRexExp = Template7Utils.quoteSingleRexExp;
      var helperParts = string.replace(/[{}#}]/g, '').trim().split(' ');
      var slices = [];
      var shiftIndex;
      var i;
      var j;
      for (i = 0; i < helperParts.length; i += 1) {
        var part = helperParts[i];
        var blockQuoteRegExp = (void 0);
        var openingQuote = (void 0);
        if (i === 0) { slices.push(part); }
        else if (part.indexOf('"') === 0 || part.indexOf('\'') === 0) {
          blockQuoteRegExp = part.indexOf('"') === 0 ? quoteDoubleRexExp : quoteSingleRexExp;
          openingQuote = part.indexOf('"') === 0 ? '"' : '\'';
          // Plain String
          if (part.match(blockQuoteRegExp).length === 2) {
            // One word string
            slices.push(part);
          } else {
            // Find closed Index
            shiftIndex = 0;
            for (j = i + 1; j < helperParts.length; j += 1) {
              part += " " + (helperParts[j]);
              if (helperParts[j].indexOf(openingQuote) >= 0) {
                shiftIndex = j;
                slices.push(part);
                break;
              }
            }
            if (shiftIndex) { i = shiftIndex; }
          }
        } else if (part.indexOf('=') > 0) {
          // Hash
          var hashParts = part.split('=');
          var hashName = hashParts[0];
          var hashContent = hashParts[1];
          if (!blockQuoteRegExp) {
            blockQuoteRegExp = hashContent.indexOf('"') === 0 ? quoteDoubleRexExp : quoteSingleRexExp;
            openingQuote = hashContent.indexOf('"') === 0 ? '"' : '\'';
          }
          if (hashContent.match(blockQuoteRegExp).length !== 2) {
            shiftIndex = 0;
            for (j = i + 1; j < helperParts.length; j += 1) {
              hashContent += " " + (helperParts[j]);
              if (helperParts[j].indexOf(openingQuote) >= 0) {
                shiftIndex = j;
                break;
              }
            }
            if (shiftIndex) { i = shiftIndex; }
          }
          var hash = [hashName, hashContent.replace(blockQuoteRegExp, '')];
          slices.push(hash);
        } else {
          // Plain variable
          slices.push(part);
        }
      }
      return slices;
    },
    stringToBlocks: function stringToBlocks(string) {
      var blocks = [];
      var i;
      var j;
      if (!string) { return []; }
      var stringBlocks = string.split(/({{[^{^}]*}})/);
      for (i = 0; i < stringBlocks.length; i += 1) {
        var block = stringBlocks[i];
        if (block === '') { continue; }
        if (block.indexOf('{{') < 0) {
          blocks.push({
            type: 'plain',
            content: block,
          });
        } else {
          if (block.indexOf('{/') >= 0) {
            continue;
          }
          block = block
            .replace(/{{([#/])*([ ])*/, '{{$1')
            .replace(/([ ])*}}/, '}}');
          if (block.indexOf('{#') < 0 && block.indexOf(' ') < 0 && block.indexOf('else') < 0) {
            // Simple variable
            blocks.push({
              type: 'variable',
              contextName: block.replace(/[{}]/g, ''),
            });
            continue;
          }
          // Helpers
          var helperSlices = Template7Utils.helperToSlices(block);
          var helperName = helperSlices[0];
          var isPartial = helperName === '>';
          var helperContext = [];
          var helperHash = {};
          for (j = 1; j < helperSlices.length; j += 1) {
            var slice = helperSlices[j];
            if (Array.isArray(slice)) {
              // Hash
              helperHash[slice[0]] = slice[1] === 'false' ? false : slice[1];
            } else {
              helperContext.push(slice);
            }
          }

          if (block.indexOf('{#') >= 0) {
            // Condition/Helper
            var helperContent = '';
            var elseContent = '';
            var toSkip = 0;
            var shiftIndex = (void 0);
            var foundClosed = false;
            var foundElse = false;
            var depth = 0;
            for (j = i + 1; j < stringBlocks.length; j += 1) {
              if (stringBlocks[j].indexOf('{{#') >= 0) {
                depth += 1;
              }
              if (stringBlocks[j].indexOf('{{/') >= 0) {
                depth -= 1;
              }
              if (stringBlocks[j].indexOf(("{{#" + helperName)) >= 0) {
                helperContent += stringBlocks[j];
                if (foundElse) { elseContent += stringBlocks[j]; }
                toSkip += 1;
              } else if (stringBlocks[j].indexOf(("{{/" + helperName)) >= 0) {
                if (toSkip > 0) {
                  toSkip -= 1;
                  helperContent += stringBlocks[j];
                  if (foundElse) { elseContent += stringBlocks[j]; }
                } else {
                  shiftIndex = j;
                  foundClosed = true;
                  break;
                }
              } else if (stringBlocks[j].indexOf('else') >= 0 && depth === 0) {
                foundElse = true;
              } else {
                if (!foundElse) { helperContent += stringBlocks[j]; }
                if (foundElse) { elseContent += stringBlocks[j]; }
              }
            }
            if (foundClosed) {
              if (shiftIndex) { i = shiftIndex; }
              if (helperName === 'raw') {
                blocks.push({
                  type: 'plain',
                  content: helperContent,
                });
              } else {
                blocks.push({
                  type: 'helper',
                  helperName: helperName,
                  contextName: helperContext,
                  content: helperContent,
                  inverseContent: elseContent,
                  hash: helperHash,
                });
              }
            }
          } else if (block.indexOf(' ') > 0) {
            if (isPartial) {
              helperName = '_partial';
              if (helperContext[0]) {
                if (helperContext[0].indexOf('[') === 0) { helperContext[0] = helperContext[0].replace(/[[\]]/g, ''); }
                else { helperContext[0] = "\"" + (helperContext[0].replace(/"|'/g, '')) + "\""; }
              }
            }
            blocks.push({
              type: 'helper',
              helperName: helperName,
              contextName: helperContext,
              hash: helperHash,
            });
          }
        }
      }
      return blocks;
    },
    parseJsVariable: function parseJsVariable(expression, replace, object) {
      return expression.split(/([+ \-*/^()&=|<>!%:?])/g).reduce(function (arr, part) {
        if (!part) {
          return arr;
        }
        if (part.indexOf(replace) < 0) {
          arr.push(part);
          return arr;
        }
        if (!object) {
          arr.push(JSON.stringify(''));
          return arr;
        }

        var variable = object;
        if (part.indexOf((replace + ".")) >= 0) {
          part.split((replace + "."))[1].split('.').forEach(function (partName) {
            if (partName in variable) { variable = variable[partName]; }
            else { variable = undefined; }
          });
        }
        if (
          (typeof variable === 'string')
          || Array.isArray(variable)
          || (variable.constructor && variable.constructor === Object)
        ) {
          variable = JSON.stringify(variable);
        }
        if (variable === undefined) { variable = 'undefined'; }

        arr.push(variable);
        return arr;
      }, []).join('');

    },
    parseJsParents: function parseJsParents(expression, parents) {
      return expression.split(/([+ \-*^()&=|<>!%:?])/g).reduce(function (arr, part) {
        if (!part) {
          return arr;
        }

        if (part.indexOf('../') < 0) {
          arr.push(part);
          return arr;
        }

        if (!parents || parents.length === 0) {
          arr.push(JSON.stringify(''));
          return arr;
        }

        var levelsUp = part.split('../').length - 1;
        var parentData = levelsUp > parents.length ? parents[parents.length - 1] : parents[levelsUp - 1];

        var variable = parentData;
        var parentPart = part.replace(/..\//g, '');
        parentPart.split('.').forEach(function (partName) {
          if (typeof variable[partName] !== 'undefined') { variable = variable[partName]; }
          else { variable = 'undefined'; }
        });
        if (variable === false || variable === true) {
          arr.push(JSON.stringify(variable));
          return arr;
        }
        if (variable === null || variable === 'undefined') {
          arr.push(JSON.stringify(''));
          return arr;
        }
        arr.push(JSON.stringify(variable));
        return arr;
      }, []).join('');
    },
    getCompileVar: function getCompileVar(name, ctx, data) {
      if ( data === void 0 ) data = 'data_1';

      var variable = ctx;
      var parts;
      var levelsUp = 0;
      var newDepth;
      if (name.indexOf('../') === 0) {
        levelsUp = name.split('../').length - 1;
        newDepth = variable.split('_')[1] - levelsUp;
        variable = "ctx_" + (newDepth >= 1 ? newDepth : 1);
        parts = name.split('../')[levelsUp].split('.');
      } else if (name.indexOf('@global') === 0) {
        variable = 'Template7.global';
        parts = name.split('@global.')[1].split('.');
      } else if (name.indexOf('@root') === 0) {
        variable = 'root';
        parts = name.split('@root.')[1].split('.');
      } else {
        parts = name.split('.');
      }
      for (var i = 0; i < parts.length; i += 1) {
        var part = parts[i];
        if (part.indexOf('@') === 0) {
          var dataLevel = data.split('_')[1];
          if (levelsUp > 0) {
            dataLevel = newDepth;
          }
          if (i > 0) {
            variable += "[(data_" + dataLevel + " && data_" + dataLevel + "." + (part.replace('@', '')) + ")]";
          } else {
            variable = "(data_" + dataLevel + " && data_" + dataLevel + "." + (part.replace('@', '')) + ")";
          }
        } else if (Number.isFinite ? Number.isFinite(part) : Template7Context.isFinite(part)) {
          variable += "[" + part + "]";
        } else if (part === 'this' || part.indexOf('this.') >= 0 || part.indexOf('this[') >= 0 || part.indexOf('this(') >= 0) {
          variable = part.replace('this', ctx);
        } else {
          variable += "." + part;
        }
      }
      return variable;
    },
    getCompiledArguments: function getCompiledArguments(contextArray, ctx, data) {
      var arr = [];
      for (var i = 0; i < contextArray.length; i += 1) {
        if (/^['"]/.test(contextArray[i])) { arr.push(contextArray[i]); }
        else if (/^(true|false|\d+)$/.test(contextArray[i])) { arr.push(contextArray[i]); }
        else {
          arr.push(Template7Utils.getCompileVar(contextArray[i], ctx, data));
        }
      }

      return arr.join(', ');
    },
  };

  /* eslint no-eval: "off" */

  var Template7Helpers = {
    _partial: function _partial(partialName, options) {
      var ctx = this;
      var p = Template7Class.partials[partialName];
      if (!p || (p && !p.template)) { return ''; }
      if (!p.compiled) {
        p.compiled = new Template7Class(p.template).compile();
      }
      Object.keys(options.hash).forEach(function (hashName) {
        ctx[hashName] = options.hash[hashName];
      });
      return p.compiled(ctx, options.data, options.root);
    },
    escape: function escape(context) {
      if (typeof context === 'undefined' || context === null) { return ''; }
      if (typeof context !== 'string') {
        throw new Error('Template7: Passed context to "escape" helper should be a string');
      }
      return Template7Utils.escape(context);
    },
    if: function if$1(context, options) {
      var ctx = context;
      if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
      if (ctx) {
        return options.fn(this, options.data);
      }

      return options.inverse(this, options.data);
    },
    unless: function unless(context, options) {
      var ctx = context;
      if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
      if (!ctx) {
        return options.fn(this, options.data);
      }

      return options.inverse(this, options.data);
    },
    each: function each(context, options) {
      var ctx = context;
      var ret = '';
      var i = 0;
      if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
      if (Array.isArray(ctx)) {
        if (options.hash.reverse) {
          ctx = ctx.reverse();
        }
        for (i = 0; i < ctx.length; i += 1) {
          ret += options.fn(ctx[i], { first: i === 0, last: i === ctx.length - 1, index: i });
        }
        if (options.hash.reverse) {
          ctx = ctx.reverse();
        }
      } else {
        // eslint-disable-next-line
        for (var key in ctx) {
          i += 1;
          ret += options.fn(ctx[key], { key: key });
        }
      }
      if (i > 0) { return ret; }
      return options.inverse(this);
    },
    with: function with$1(context, options) {
      var ctx = context;
      if (Template7Utils.isFunction(ctx)) { ctx = context.call(this); }
      return options.fn(ctx);
    },
    join: function join(context, options) {
      var ctx = context;
      if (Template7Utils.isFunction(ctx)) { ctx = ctx.call(this); }
      return ctx.join(options.hash.delimiter || options.hash.delimeter);
    },
    js: function js(expression, options) {
      var data = options.data;
      var func;
      var execute = expression;
      ('index first last key').split(' ').forEach(function (prop) {
        if (typeof data[prop] !== 'undefined') {
          var re1 = new RegExp(("this.@" + prop), 'g');
          var re2 = new RegExp(("@" + prop), 'g');
          execute = execute
            .replace(re1, JSON.stringify(data[prop]))
            .replace(re2, JSON.stringify(data[prop]));
        }
      });
      if (options.root && execute.indexOf('@root') >= 0) {
        execute = Template7Utils.parseJsVariable(execute, '@root', options.root);
      }
      if (execute.indexOf('@global') >= 0) {
        execute = Template7Utils.parseJsVariable(execute, '@global', Template7Context.Template7.global);
      }
      if (execute.indexOf('../') >= 0) {
        execute = Template7Utils.parseJsParents(execute, options.parents);
      }
      if (execute.indexOf('return') >= 0) {
        func = "(function(){" + execute + "})";
      } else {
        func = "(function(){return (" + execute + ")})";
      }
      return eval(func).call(this);
    },
    js_if: function js_if(expression, options) {
      var data = options.data;
      var func;
      var execute = expression;
      ('index first last key').split(' ').forEach(function (prop) {
        if (typeof data[prop] !== 'undefined') {
          var re1 = new RegExp(("this.@" + prop), 'g');
          var re2 = new RegExp(("@" + prop), 'g');
          execute = execute
            .replace(re1, JSON.stringify(data[prop]))
            .replace(re2, JSON.stringify(data[prop]));
        }
      });
      if (options.root && execute.indexOf('@root') >= 0) {
        execute = Template7Utils.parseJsVariable(execute, '@root', options.root);
      }
      if (execute.indexOf('@global') >= 0) {
        execute = Template7Utils.parseJsVariable(execute, '@global', Template7Context.Template7.global);
      }
      if (execute.indexOf('../') >= 0) {
        execute = Template7Utils.parseJsParents(execute, options.parents);
      }
      if (execute.indexOf('return') >= 0) {
        func = "(function(){" + execute + "})";
      } else {
        func = "(function(){return (" + execute + ")})";
      }
      var condition = eval(func).call(this);
      if (condition) {
        return options.fn(this, options.data);
      }

      return options.inverse(this, options.data);
    },
  };
  Template7Helpers.js_compare = Template7Helpers.js_if;

  var Template7Options = {};
  var Template7Partials = {};

  var Template7Class = function Template7Class(template) {
    var t = this;
    t.template = template;
  };

  var staticAccessors = { options: { configurable: true },partials: { configurable: true },helpers: { configurable: true } };
  Template7Class.prototype.compile = function compile (template, depth) {
      if ( template === void 0 ) template = this.template;
      if ( depth === void 0 ) depth = 1;

    var t = this;
    if (t.compiled) { return t.compiled; }

    if (typeof template !== 'string') {
      throw new Error('Template7: Template must be a string');
    }
    var stringToBlocks = Template7Utils.stringToBlocks;
      var getCompileVar = Template7Utils.getCompileVar;
      var getCompiledArguments = Template7Utils.getCompiledArguments;

    var blocks = stringToBlocks(template);
    var ctx = "ctx_" + depth;
    var data = "data_" + depth;
    if (blocks.length === 0) {
      return function empty() { return ''; };
    }

    function getCompileFn(block, newDepth) {
      if (block.content) { return t.compile(block.content, newDepth); }
      return function empty() { return ''; };
    }
    function getCompileInverse(block, newDepth) {
      if (block.inverseContent) { return t.compile(block.inverseContent, newDepth); }
      return function empty() { return ''; };
    }

    var resultString = '';
    if (depth === 1) {
      resultString += "(function (" + ctx + ", " + data + ", root) {\n";
    } else {
      resultString += "(function (" + ctx + ", " + data + ") {\n";
    }
    if (depth === 1) {
      resultString += 'function isArray(arr){return Array.isArray(arr);}\n';
      resultString += 'function isFunction(func){return (typeof func === \'function\');}\n';
      resultString += 'function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n';
      resultString += 'root = root || ctx_1 || {};\n';
    }
    resultString += 'var r = \'\';\n';
    var i;
    for (i = 0; i < blocks.length; i += 1) {
      var block = blocks[i];
      // Plain block
      if (block.type === 'plain') {
        // eslint-disable-next-line
        resultString += "r +='" + ((block.content).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/'/g, '\\' + '\'')) + "';";
        continue;
      }
      var variable = (void 0);
      var compiledArguments = (void 0);
      // Variable block
      if (block.type === 'variable') {
        variable = getCompileVar(block.contextName, ctx, data);
        resultString += "r += c(" + variable + ", " + ctx + ");";
      }
      // Helpers block
      if (block.type === 'helper') {
        var parents = (void 0);
        if (ctx !== 'ctx_1') {
          var level = ctx.split('_')[1];
          var parentsString = "ctx_" + (level - 1);
          for (var j = level - 2; j >= 1; j -= 1) {
            parentsString += ", ctx_" + j;
          }
          parents = "[" + parentsString + "]";
        } else {
          parents = "[" + ctx + "]";
        }
        var dynamicHelper = (void 0);
        if (block.helperName.indexOf('[') === 0) {
          block.helperName = getCompileVar(block.helperName.replace(/[[\]]/g, ''), ctx, data);
          dynamicHelper = true;
        }
        if (dynamicHelper || block.helperName in Template7Helpers) {
          compiledArguments = getCompiledArguments(block.contextName, ctx, data);
          resultString += "r += (Template7Helpers" + (dynamicHelper ? ("[" + (block.helperName) + "]") : ("." + (block.helperName))) + ").call(" + ctx + ", " + (compiledArguments && ((compiledArguments + ", "))) + "{hash:" + (JSON.stringify(block.hash)) + ", data: " + data + " || {}, fn: " + (getCompileFn(block, depth + 1)) + ", inverse: " + (getCompileInverse(block, depth + 1)) + ", root: root, parents: " + parents + "});";
        } else if (block.contextName.length > 0) {
          throw new Error(("Template7: Missing helper: \"" + (block.helperName) + "\""));
        } else {
          variable = getCompileVar(block.helperName, ctx, data);
          resultString += "if (" + variable + ") {";
          resultString += "if (isArray(" + variable + ")) {";
          resultString += "r += (Template7Helpers.each).call(" + ctx + ", " + variable + ", {hash:" + (JSON.stringify(block.hash)) + ", data: " + data + " || {}, fn: " + (getCompileFn(block, depth + 1)) + ", inverse: " + (getCompileInverse(block, depth + 1)) + ", root: root, parents: " + parents + "});";
          resultString += '}else {';
          resultString += "r += (Template7Helpers.with).call(" + ctx + ", " + variable + ", {hash:" + (JSON.stringify(block.hash)) + ", data: " + data + " || {}, fn: " + (getCompileFn(block, depth + 1)) + ", inverse: " + (getCompileInverse(block, depth + 1)) + ", root: root, parents: " + parents + "});";
          resultString += '}}';
        }
      }
    }
    resultString += '\nreturn r;})';

    if (depth === 1) {
      // eslint-disable-next-line
      t.compiled = eval(resultString);
      return t.compiled;
    }
    return resultString;
  };
  staticAccessors.options.get = function () {
    return Template7Options;
  };
  staticAccessors.partials.get = function () {
    return Template7Partials;
  };
  staticAccessors.helpers.get = function () {
    return Template7Helpers;
  };

  Object.defineProperties( Template7Class, staticAccessors );

  function Template7() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var template = args[0];
    var data = args[1];
    if (args.length === 2) {
      var instance = new Template7Class(template);
      var rendered = instance.compile()(data);
      instance = null;
      return (rendered);
    }
    return new Template7Class(template);
  }
  Template7.registerHelper = function registerHelper(name, fn) {
    Template7Class.helpers[name] = fn;
  };
  Template7.unregisterHelper = function unregisterHelper(name) {
    Template7Class.helpers[name] = undefined;
    delete Template7Class.helpers[name];
  };
  Template7.registerPartial = function registerPartial(name, template) {
    Template7Class.partials[name] = { template: template };
  };
  Template7.unregisterPartial = function unregisterPartial(name) {
    if (Template7Class.partials[name]) {
      Template7Class.partials[name] = undefined;
      delete Template7Class.partials[name];
    }
  };
  Template7.compile = function compile(template, options) {
    var instance = new Template7Class(template, options);
    return instance.compile();
  };

  Template7.options = Template7Class.options;
  Template7.helpers = Template7Class.helpers;
  Template7.partials = Template7Class.partials;

  return Template7;

}));
//# sourceMappingURL=template7.js.map

/**
 * Загрузочный скрипт приложения
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
var lemurro = {};
/**
 * Запуск ядра
 *
 * @version 27.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.start = function () {
    // Инициализация роутера
    lemurro.router = new Navigo(location.protocol + '//' + location.host, app.config.router.useHash, app.config.router.hash);

    // Подключаем маршруты
    lemurro.router.on(app.routes.pages);

    // Маршрут не найден
    lemurro.router.notFound(app.routes.notFound);

    // Подключаем хуки
    lemurro.router.hooks({
        after: function () {
            if (app.started) {
                lemurro._loadPage();
            } else {
                lemurro.init();
            }
        }
    });

    // Запускаем роутер
    lemurro.router.resolve();
};
/**
 * Инициализация ядра
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 07.08.2020
 */
lemurro.init = function () {
    /**
     * ИД сессии
     *
     * @type {string}
     */
    lemurro.sessionID = '';

    /**
     * Информация о пользователе
     *
     * @type {object}
     */
    lemurro.userinfo = {};

    /**
     * Инициализируем плагин LightAjax
     *
     * @type {LightAjax}
     */
    lemurro.lightajax = new LightAjax({
        settings: {
            callbackAlert: function (title, message) {
                swal(title, message, 'error');
            }
        },
        ajax    : {
            beforeSend: function (xhr, settings) {
                if (!/^(HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
                    xhr.setRequestHeader('X-SESSION-ID', lemurro.sessionID);
                    xhr.setRequestHeader('X-UTC-OFFSET', moment().utcOffset());
                }
            }
        }
    });

    // Определяем настройки по умолчанию для Select2
    $.fn.select2.defaults.set('language', 'ru');
    $.fn.select2.defaults.set('placeholder', 'Выберите из списка');

    // Ловим js-ошибки
    //lemurro._bindJSerrors();

    // Инициализируем форму входа
    lemurro._initAuthForm();

    // Подключим Template7 хелперы
    lemurro._t7helperDecimal();
    lemurro._t7helperLocalTime();

    // Достанем из локального хранилища ИД сессии, если есть
    localforage.getItem('sessionID', function (err, value) {
        lemurro.sessionID = value;
        lemurro.auth.check();
    });

    // Достанем из локального хранилища ИД прошлой сессии, если есть
    localforage.getItem('lastSessionID', function (err, value) {
        if (value !== null) {
            $('#js-user-return').removeClass('d-none');
        }
    });
};
/**
 * Применим код общий для разделов и справочников
 *
 * @version 10.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindForAll = function () {
    // Обновление ссылок маршрутизатора
    lemurro.router.updatePageLinks();

    lemurro._bindInputmask();
    lemurro._bindSelect2();
    lemurro._bindTableFilter();

    lemurro._showElementsByRoles();
};
/**
 * Подключим Inputmask
 *
 * @version 11.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindInputmask = function () {
    $('#js-page').find('.js-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': element.attr('data-mask')
        }).mask(element);
    });
};
/**
 * Событие отправки javascript-ошибки при возникновении
 *
 * @version 21.02.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindJSerrors = function () {
    /**
     * Отправка javascript-ошибки
     *
     * @param {string} msg
     * @param {string} file
     * @param {string} line
     * @param {string} col
     * @param {string} err
     *
     * @version 15.11.2018
     * @author  Дмитрий Щербаков <atomcms@ya.ru>
     */
    function sendError(msg, file, line, col, err) {
        var errString = 'JSON not found';
        if (window.JSON) {
            errString = JSON.stringify(err);
        }

        if (typeof(msg) === 'object') {
            file      = msg.filename;
            line      = msg.lineno;
            col       = msg.colno;
            errString = msg.error.stack;
            msg       = msg.message;
        }

        new Image().src = pathServerAPI + 'jserrors?msg=' + encodeURIComponent(msg) + '&file=' + encodeURIComponent(file) + '&line=' + encodeURIComponent(line) + '&col=' + encodeURIComponent(col) + '&err=' + encodeURIComponent(errString);
    }

    if (window.addEventListener) {
        window.addEventListener('error', sendError, false);
    } else if (window.attachEvent) {
        window.attachEvent('onerror', sendError);
    } else {
        window.onerror = sendError;
    }
};
/**
 * Подключим Select2
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 17.01.2020
 */
lemurro._bindSelect2 = function () {
    $('#js-page').find('.js-select2').each(function () {
        $(this).select2();
    });
};
/**
 * Подключим jQuery.TableFilter
 *
 * @version 27.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._bindTableFilter = function () {
    $('#js-page').find('.tablefilter').TableFilter();
};
/**
 * Инициируем форму входа
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 17.01.2020
 */
lemurro._initAuthForm = function () {
    var authForm  = $('#js-auth');
    var getForm   = $('#js-auth__get-form');
    var checkForm = $('#js-auth__check-form');

    var authType = app.config.auth.type;
    if (!app.config.auth.strings.hasOwnProperty(authType)) {
        authType = 'mixed';
    }

    var strings = app.config.auth.strings[authType];

    getForm.find('.js-auth__auth-id').html(strings.getForm.inputLabel);
    checkForm.find('.js-auth__auth-code').html(strings.checkForm.inputLabel);
    checkForm.find('.js-auth__repeat').html(strings.checkForm.repeatMessage);

    getForm.find('input[name="auth_id"]')
        .on('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();

                lemurro.auth.getCode();
            }
        })
        .addClass(strings.getForm.inputClass);

    checkForm.find('input[name="auth_code"]')
        .on('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();

                lemurro.auth.checkCode();
            }
        });

    authForm.find('.js-code-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '9999'
        }).mask(element);
    });

    authForm.find('.js-phone-mask').each(function () {
        var element = $(this);

        Inputmask({
            'mask': '+7 (999) 999-99-99'
        }).mask(element);
    });
};
/**
 * Определим загруженную страницу и запустим ее init() если он есть
 *
 * @version 24.04.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._loadPage = function () {
    var pageFile = location.protocol + '//' + location.host + '/' + app.page.name + '.html';

    document.title = app.page.title + ' | ' + app.config.title;

    // Сбросим активность со всех ссылок
    $('header').find('.js-link').each(function () {
        var link = $(this);

        link.removeClass(link.attr('data-active-class'));
    });

    $('#js-page').load(pageFile, function () {
        // Установим активность ссылок с определенным классом
        $('header').find('.js-link__' + app.page.name).each(function () {
            var link = $(this);

            link.addClass(link.attr('data-active-class'));
        });

        lemurro._bindForAll();

        if (!isEmpty(app.page.onLoad)) {
            app.page.onLoad();
        }
    });
};
/**
 * Покажем скрытые элементы в зависимости от прав доступа
 *
 * @version 10.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._showElementsByRoles = function () {
    var body = $('body');

    // Если пользователь админ, включим все возможности
    if (lemurro.userinfo.admin) {
        body.find('.js-role').removeClass('d-none');
    } else {
        for (var pageID in lemurro.userinfo.roles) {
            if (lemurro.userinfo.roles.hasOwnProperty(pageID)) {
                for (var i in lemurro.userinfo.roles[pageID]) {
                    if (lemurro.userinfo.roles[pageID].hasOwnProperty(i)) {
                        var access = lemurro.userinfo.roles[pageID][i];

                        body.find('.js-role__' + pageID + '--' + access).removeClass('d-none');
                    }
                }
            }
        }
    }
};
/**
 * Хелпер для Template7: lemurrodecimal (lemurro.helper.decimal)
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._t7helperDecimal = function () {
    Template7.registerHelper('lemurrodecimal', function (value, precision) {
        return lemurro.helper.decimal(value, precision);
    });
};
/**
 * Хелпер для Template7: lemurrolocaltime (lemurro.helper.localTime)
 *
 * @version 12.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._t7helperLocalTime = function () {
    Template7.registerHelper('lemurrolocaltime', function (datetime, format) {
        return lemurro.helper.localTime(datetime, format);
    });
};
/**
 * Покажем форму входа
 *
 * @version 29.11.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.authScreen = function (action) {
    var modal = $('#js-auth');

    if (action === 'show') {
        document.title = app.config.title;

        $('#js-auth__get-form').show();
        $('#js-auth__check-form').hide();

        modal.find('input[type="text"]').val('');

        modal.modal({
            backdrop: 'static',
            keyboard: false
        });
    } else {
        modal.modal('hide');
    }
};
/**
 * Проверка на наличие ошибки
 *
 * @param {array} result Массив ответа
 *
 * @return {boolean}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.hasErrors = function (result) {
    if (result.hasOwnProperty('errors')) {
        return true;
    }

    return false;
};

/**
 * Отображение ошибок
 *
 * @param {array} errors Массив ошибок
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.showErrors = function (errors) {
    if (errors.length === 1 && errors[0].status === '401 Unauthorized') {
        lemurro.authScreen('show');
    } else if (errors.length === 1 && errors[0].status === '403 Forbidden') {
        var redirect = true;

        if (errors[0].hasOwnProperty('meta') && errors[0].meta.hasOwnProperty('redirect')) {
            redirect = errors[0].meta.redirect;
        }

        if (redirect) {
            lemurro.router.navigate('/403');
        } else {
            lemurro._showError(errors[0].code, errors[0].title);
        }
    } else {
        for (var i in errors) {
            lemurro._showError(errors[i].code, errors[i].title);
        }
    }
};

/**
 * Покажем ошибку
 *
 * @param {string} errCode  Код ошибки
 * @param {string} errTitle Текст ошибки
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro._showError = function (errCode, errTitle) {
    var title = 'Неизвестная ошибка';
    var code  = 'error';

    switch (errCode) {
        case 'danger':
            code  = 'error';
            title = 'Критическая ошибка';
            break;

        case 'warning':
            code  = 'warning';
            title = 'Внимание!';
            break;

        case 'info':
            code  = 'info';
            title = 'Информация';
            break;
    }

    swal(title, errTitle, code);
};
/**
 * Проверка сессии при запуске приложения
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
lemurro.auth = {};

/**
 * ИД таймера
 *
 * @type {int|null}
 */
lemurro.auth._timerID = null;

/**
 * Получим информацию о пользователе
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.auth._getUser = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'user', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.userinfo = result.data;
            lemurro.auth._success();
        }
    });
};

/**
 * Запуск таймера
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth._runTimer = function () {
    if (lemurro.auth._timerID !== null) {
        clearInterval(lemurro.auth._timerID);
    }

    lemurro.auth._timerID = setInterval(function () {
        var formCode  = $('#js-auth__check-form');
        var elemTimer = formCode.find('.js-timer__count');
        var count     = parseInt(elemTimer.text(), 10);

        if (count > 0) {
            elemTimer.text(--count);
        } else {
            clearInterval(lemurro.auth._timerID);
            formCode.find('.js-timer').hide();
            formCode.find('.js-resend').show();
        }
    }, 1000);
};
/**
 * Проверка сессии и загрузка данных о пользователе прошли успешно
 *
 * @version 10.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth._success = function () {
    // Установим идентификатор пользователя в верхнем меню
    $('.js-user__auth-id').text(lemurro.userinfo.auth_id);

    // Приложение успешно стартовало
    app.started = true;

    // Скрываем более ненужный оверлей прелоадера
    $('#js-preloader-overlay').hide();

    // Запустим инициализацию приложения и передадим callback для выполнения
    app.init(lemurro._loadPage);
};
/**
 * Проверка сессии
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.auth.check = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'auth/check', {}, function (result) {
        if (lemurro.hasErrors(result)) {
            lemurro.lightajax.preloader('hide');

            lemurro.showErrors(result.errors);
        } else {
            lemurro.auth._getUser();
        }
    });
};

/**
 * Проверка введенного кода
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.auth.checkCode = function () {
    var authID = $('#js-auth__get-form').find('input[name="auth_id"]').val();
    var authCode = $('#js-auth__check-form').find('input[name="auth_code"]').val();

    if (isEmpty(authID)) {
        swal('Внимание!', 'Необходимо указать логин', 'warning');

        return;
    }

    if (isEmpty(authCode)) {
        swal('Внимание!', 'Необходимо указать код для входа', 'warning');

        return;
    }

    var browser = bowser.getParser(window.navigator.userAgent);
    var geoip = {};
    var waiterCount = 1;

    jQuery.ajax('https://api.sypexgeo.net', {
        method: 'GET',
        data: {},
        success: function (result) {
            geoip = result;
        },
        complete: function () {
            waiterCount = 0;
        },
        error: function () {},
    });

    var waiter = setInterval(function () {
        if (waiterCount === 0) {
            clearInterval(waiter);

            console.log(geoip);

            lemurro.lightajax.post(
                true,
                pathServerAPI + 'auth/code',
                {
                    auth_id: authID,
                    auth_code: authCode,
                    device_info: {
                        uuid: 'WebApp',
                        platform: browser.parsedResult.os.name,
                        version: browser.parsedResult.os.version,
                        manufacturer: browser.parsedResult.browser.name,
                        model: browser.parsedResult.browser.version,
                    },
                    geoip: geoip,
                },
                function (result) {
                    lemurro.lightajax.preloader('hide');

                    if (lemurro.hasErrors(result)) {
                        $('#js-auth__check-form').find('input[name="auth_code"]').val('');

                        lemurro.showErrors(result.errors);
                    } else {
                        localforage.setItem('sessionID', result.data.session, function () {
                            lemurro.sessionID = result.data.session;
                            lemurro.authScreen('hide');
                            lemurro.auth.check();
                        });
                    }
                }
            );
        }
    }, 500);
};

/**
 * Получение кода
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.auth.getCode = function () {
    var authID = $('#js-auth__get-form').find('input[name="auth_id"]').val();

    if (isEmpty(authID)) {
        swal('Внимание!', 'Необходимо указать логин', 'warning');

        return;
    }

    lemurro.lightajax.get(
        true,
        pathServerAPI + 'auth/code',
        {
            auth_id: authID,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                if (result.data.hasOwnProperty('message')) {
                    console.log(result.data.message, 'AuthCode');
                }

                var formCode = $('#js-auth__check-form');

                formCode.find('.js-timer').show();
                formCode.find('.js-timer__count').text('60');
                formCode.find('.js-resend').hide();

                lemurro.auth._runTimer();

                $('#js-auth__get-form').hide();
                formCode.show();
            }
        }
    );
};

/**
 * Сброс сессии
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.auth.logout = function () {
    lemurro.helper.showConfirm('Выход', 'Вы действительно хотите выйти из системы?', 'Да', 'Нет', null, null, function () {
        $('.js-user-data').html('<i class="fas fa-spinner fa-pulse"></i>');
        localforage.clear();
        lemurro.sessionID = '';
        lemurro.authScreen('show');
    }, null);
};
/**
 * Хелперы
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
lemurro.helper = {};
/**
 * Очистка формы
 *
 * @param {object} container jQuery-объект контейнера
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.clearFields = function (container) {
    container.find('input[type="text"],input[type="password"],input[type="email"],input[type="number"],input[type="tel"],input[type="url"],input[type="date"],input[type="time"]')
        .val('');

    container.find('textarea').val('');

    container.find('select').each(function () {
        $(this).val(null).trigger('change');
    });

    container.find('input[type="checkbox"]').each(function () {
        $(this).prop('checked', false);
    });

    container.find('input[type="radio"]').each(function () {
        $(this).prop('checked', false);
    });
};
/**
 * Очистка строки для решения проблемы утечки памяти
 *
 * @url https://habr.com/ru/post/449368/
 *
 * @param {string} str Строка для очистки
 *
 * @version 29.04.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.clearString = function (str) {
    return str.length < 13 ? str : str.split('').join('');
};
/**
 * Преобразование строки в дробное число
 *
 * @param {string|number} value     Строка с дробным числом или число
 * @param {number}        precision Точность результата (по умолчанию: 2)
 *
 * @return {number}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 27.04.2020
 */
lemurro.helper.decimal = function (value, precision) {
    if (isEmpty(value)) {
        return 0;
    }

    if (typeof precision !== 'number' || isNaN(precision)) {
        precision = 2;
    }

    if (typeof value !== 'number') {
        value = value.replace(/ /g, '');
        value = value.replace(/,/g, '.');

        value = parseFloat(value);

        if (isNaN(value)) {
            return 0;
        }
    }

    if (precision === -1) {
        return value;
    }

    return parseFloat(value.toFixed(precision));
};
/**
 * Подключим BootstrapConfirmation
 *
 * @param {JQuery} container
 * @param {Object} options
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 31.10.2019
 */
lemurro.helper.initBootstrapConfirmation = function (container, options) {
    if (typeof (options) === 'undefined') {
        options = {};
    }

    var settings = Object.assign({
        title         : 'Вы уверены?',
        singleton     : true,
        popout        : true,
        rootSelector  : '[data-toggle=confirmation]',
        btnOkLabel    : 'Да',
        btnOkClass    : 'btn btn-sm btn-success',
        btnCancelLabel: 'Нет',
        btnCancelClass: 'btn btn-sm btn-danger'
    }, options);

    container.find(settings.rootSelector).confirmation(settings);
};
/**
 * Проверка пользователя на наличие прав
 *
 * @param {string}   page            Раздел
 * @param {string}   access          Право доступа
 * @param {function} callbackSuccess Функция вызова при успешном получении данных
 * @param {function} callbackFail    Функция вызова при провале
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.helper.isRole = function (page, access, callbackSuccess, callbackFail) {
    var _timer = setInterval(function () {
        if (lemurro.hasOwnProperty('userinfo')) {
            clearInterval(_timer);

            if (lemurro.userinfo.admin) {
                if (typeof callbackSuccess === 'function') {
                    callbackSuccess();
                }
            } else {
                var fail = true;

                if (lemurro.userinfo.roles.hasOwnProperty(page)) {
                    var i;

                    for (i in lemurro.userinfo.roles[page]) {
                        if (lemurro.userinfo.roles[page][i] === access) {
                            fail = false;

                            if (typeof callbackSuccess === 'function') {
                                callbackSuccess();
                            }
                        }
                    }
                }

                if (fail && typeof callbackFail === 'function') {
                    callbackFail();
                }
            }
        }
    }, 500);
};
/**
 * Преобразование серверного времени в локальное и возврат строки указанного формата
 *
 * @param {string} datetime Дата и время в формате "ГГГГ-ММ-ДД ЧЧ:ММ:СС"
 * @param {string} format   Возвращаемый формат (Moment.js)
 *
 * @version 13.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.localTime = function (datetime, format) {
    if (isEmpty(datetime) || isEmpty(format)) {
        return datetime;
    } else {
        return moment.utc(datetime).local().format(format);
    }
};
/**
 * Покажем подтверждение
 *
 * @param {string}   title              Заголовок
 * @param {string}   content            HTML-Содержимое
 * @param {string}   confirmButtonText  Текст кнопки "OK"
 * @param {string}   cancelButtonText   Текст кнопки "Cancel"
 * @param {function} callbackOpen       Функция при открытии формы
 * @param {function} callbackPreConfirm Функция перед вызовом callbackConfirm
 * @param {function} callbackConfirm    Функция при нажатии confirmButton
 * @param {function} callbackCancel     Функция при нажатии cancelButton
 *
 * @version 09.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.helper.showConfirm = function (title, content, confirmButtonText, cancelButtonText, callbackOpen, callbackPreConfirm, callbackConfirm, callbackCancel) {
    swal({
        title             : title,
        html              : content,
        type              : 'question',
        buttonsStyling    : false,
        focusConfirm      : false,
        allowOutsideClick : false,
        allowEscapeKey    : false,
        allowEnterKey     : false,
        showCancelButton  : true,
        confirmButtonText : confirmButtonText,
        cancelButtonText  : cancelButtonText,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass : 'btn btn-danger',
        onOpen            : callbackOpen,
        preConfirm        : callbackPreConfirm
    }).then(function (result) {
        if (result.value) {
            if (typeof callbackConfirm === 'function') {
                callbackConfirm();
            }
        } else {
            if (typeof callbackCancel === 'function') {
                callbackCancel();
            }
        }
    });
};
/**
 * Операции с табами
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
lemurro.tabs = {};
/**
 * Покажем указанный таб
 *
 * @param {string} tabID Идентификатор нужного таба
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 29.08.2020
 */
lemurro.tabs.showTab = function (tabID) {
    var tabsLinks    = $('#js-tabs__links');
    var tabsContents = $('#js-tabs__contents');

    tabsLinks.find('.nav-link').removeClass('active show');
    tabsContents.children('.tab-pane').removeClass('active show');

    tabsLinks.find('a[data-target="#' + tabID + '"]').addClass('active show');
    tabsContents.find('#' + tabID).addClass('active show');
};
/**
 * Скрыть\Показать вторую вкладку
 *
 * @param {string} action Действие (show|hide)
 *
 * @version 26.10.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.tabs.tabInsertEdit = function (action) {
    var tabsLinks    = $('#js-tabs__links');
    var tabsContents = $('#js-tabs__contents');

    if (action === 'show') {
        tabsLinks.find('a[data-target="#tab-form"]').parent().show();
        tabsContents.find('#tab-form').addClass('active show');
        lemurro.tabs.showTab('tab-form');
    } else {
        tabsLinks.find('a[data-target="#tab-form"]').parent().hide();
        tabsContents.find('#tab-form').removeClass('active show');
        lemurro.tabs.showTab('tab-list');
    }
};
/**
 * Операции со справочниками
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
lemurro.guide = {};
/**
 * Инициализация
 *
 * @param {string} pageName Суффикс файла html: guide_[pageName].html
 * @param {string} jsClass  js-класс справочника
 *
 * @version 06.12.2018
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide.init = function (pageName, jsClass) {
    /**
     * Имя справочника
     *
     * @type {string}
     */
    lemurro.guide._name = pageName;

    /**
     * Класс справочника
     *
     * @type {string}
     */
    lemurro.guide._class = jsClass;

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.guide._templates = {};

    // Загрузим справочник
    lemurro.guide._load();
};
/**
 * Список элементов справочника
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.guide._getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'guide/' + lemurro.guide._name, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            $('#js-guide__loader').hide();

            if (result.data.count === 0) {
                $('#js-guide__empty').show();
            } else {
                var container = $('#js-guide__items');
                var html = '';

                for (var i in result.data.items) {
                    if (result.data.items.hasOwnProperty(i)) {
                        html += lemurro.guide._templates.item(result.data.items[i]);
                    }
                }

                container.html(html);
                $('#js-guide__list').show();

                lemurro.helper.initBootstrapConfirmation(container, null);
            }

            if (
                !isEmpty(lemurro.guide._class) &&
                window.hasOwnProperty(lemurro.guide._class) &&
                window[lemurro.guide._class].hasOwnProperty('init')
            ) {
                window[lemurro.guide._class].init();
            }
        }
    });
};

/**
 * Загрузка справочника
 *
 * @version 24.04.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.guide._load = function () {
    var page     = $('#js-page');
    var pageFile = location.protocol + '//' + location.host + '/guide_' + lemurro.guide._name + '.html';

    page.find('.js-guide__title').html(app.page.title);

    // Сбросим активность со всех ссылок
    page.find('.js-guide-link').each(function () {
        var link = $(this);

        link.removeClass(link.attr('data-active-class'));
    });

    page.find('.js-guide__content').load(pageFile, function () {
        // Установим активность ссылок с определенным классом
        page.find('.js-guide-link__' + lemurro.guide._name).each(function () {
            var link = $(this);

            link.addClass(link.attr('data-active-class'));
        });

        // Скомпилируем шаблоны
        lemurro.guide._templates = {
            item: Template7.compile($('#js-tpl-guide__item').html())
        };

        lemurro._bindForAll();

        // Получим данные справочника
        lemurro.guide._getData();
    });
};
/**
 * Редактирование записи
 *
 * @param {integer}  id       ИД записи
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.guide.edit = function (id, callback) {
    lemurro.lightajax.get(true, pathServerAPI + 'guide/' + lemurro.guide._name + '/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-guide-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование записи');

            $('#js-guide__button-insert').hide();
            $('#js-guide__button-save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            lemurro.tabs.tabInsertEdit('show');

            if (typeof callback === 'function') {
                callback(result);
            }
        }
    });
};

/**
 * Добавление записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.guide.insert = function (data, callback) {
    lemurro.lightajax.post(
        true,
        pathServerAPI + 'guide/' + lemurro.guide._name,
        {
            data: data,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                if (typeof callback === 'function') {
                    callback(result);
                } else {
                    var container = $('#js-guide__items');
                    container.prepend(lemurro.guide._templates.item(result.data));

                    var row = container.find('tr[data-item-id="' + result.data.id + '"]');
                    lemurro.helper.initBootstrapConfirmation(row, null);

                    $('#js-guide__empty').hide();
                    $('#js-guide__list').show();

                    lemurro.tabs.tabInsertEdit('hide');
                }
            }
        }
    );
};

/**
 * Удаление записи
 *
 * @param {integer}  id       ИД записи
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.guide.remove = function (id, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'guide/' + lemurro.guide._name + '/' + id + '/remove', {}, function (
        result
    ) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            if (typeof callback === 'function') {
                callback(result);
            } else {
                var container = $('#js-guide__items');

                container.find('tr[data-item-id="' + result.data.id + '"]').remove();

                if (container.find('tr').length === 0) {
                    $('#js-guide__empty').show();
                    $('#js-guide__list').hide();
                }

                swal('Выполнено', 'Запись успешно удалена', 'success');
            }
        }
    });
};

/**
 * Изменение записи
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.guide.save = function (data, callback) {
    lemurro.lightajax.post(
        true,
        pathServerAPI + 'guide/' + lemurro.guide._name + '/' + data.id,
        {
            data: data,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                if (typeof callback === 'function') {
                    callback(result);
                } else {
                    var newRecord = $(lemurro.guide._templates.item(result.data));
                    var row = $('#js-guide__items').find('tr[data-item-id="' + result.data.id + '"]');

                    row.html(newRecord.html());

                    lemurro.helper.initBootstrapConfirmation(row, null);

                    lemurro.tabs.tabInsertEdit('hide');

                    swal('Выполнено', 'Запись успешно изменена', 'success');
                }
            }
        }
    );
};

/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.guide.showInsertForm = function (callback) {
    var container = $('#js-guide-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление записи');
    lemurro.helper.clearFields(container);

    $('#js-guide__button-insert').show();
    $('#js-guide__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    lemurro.tabs.tabInsertEdit('show');

    if (typeof callback === 'function') {
        callback();
    }
};
/**
 * Работа с пользователями
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
lemurro.users = {};
/**
 * Инициализация
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.init = function () {
    lemurro.users._t7helperAccessSets();

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.users._templates = {
        roles          : Template7.compile($('#js-tpl-user__roles').html()),
        accessSetsItem : Template7.compile($('#js-tpl-access-sets__item').html()),
        accessSetsRoles: Template7.compile($('#js-tpl-access-sets__roles').html())
    };

    lemurro.users._initRoles();
    users.init();
    lemurro.accessSets.getData();
};
/**
 * Нарисуем форму выбора прав доступа
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 30.10.2019
 */
lemurro.users._initRoles = function () {
    var container        = $('#js-user__roles');
    var userRoles        = app.config.userRoles;
    var groupedListRoles = {};

    for (var keyList in userRoles.list) {
        if (userRoles.list.hasOwnProperty(keyList)) {
            var role   = userRoles.list[keyList];
            var access = [];
            var group  = role.title.replace(/"/g, '');

            // Создаем группу, если её нет
            if (!groupedListRoles.hasOwnProperty(group)) {
                groupedListRoles[group] = [];
            }

            for (var keyAccess in role.access) {
                if (role.access.hasOwnProperty(keyAccess)) {
                    var code = role.access[keyAccess];
                    var name = (userRoles.guideAccess.hasOwnProperty(code) ? userRoles.guideAccess[code] : '!unknown');

                    // Группируем права доступа по разделам
                    groupedListRoles[group].push({
                        roleName  : role.name,
                        accessCode: code,
                        accessName: name.replace(/"/g, '')
                    });

                    access.push({
                        code: code,
                        name: name
                    });
                }
            }

            container.append(lemurro.users._templates.roles({
                roleName : role.name,
                roleTitle: role.title,
                access   : access
            }));
        }
    }

    lemurro.users._setFilterListRoles(groupedListRoles);

    $('#js-access-sets__roles').html(container.html());
};
/**
 * Наполним список прав доступа для фильтра
 *
 * @param {object} groupedListRoles
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 30.10.2019
 */
lemurro.users._setFilterListRoles = function (groupedListRoles) {
    var html    = '';
    var ordered = {};

    // Сортируем по группам
    Object.keys(groupedListRoles).sort().forEach(function (key) {
        ordered[key] = groupedListRoles[key];
    });

    function compare(a, b) {
        var genreA = a.accessName.toUpperCase();
        var genreB = b.accessName.toUpperCase();

        var comparison = 0;

        if (genreA > genreB) {
            comparison = 1;
        } else if (genreA < genreB) {
            comparison = -1;
        }

        return comparison;
    }

    for (var groupName in ordered) {
        if (ordered.hasOwnProperty(groupName)) {
            var items = ordered[groupName];

            html += '<optgroup label="' + groupName + '">';

            // Сортируем элементы внутри групп
            items.sort(compare);

            for (var j in items) {
                if (items.hasOwnProperty(j)) {
                    html += '<option value="' + items[j].roleName + '|' + items[j].accessCode + '">' + groupName + ': ' + items[j].accessName + '</option>';
                }
            }

            html += '</optgroup>';
        }
    }

    $('#js-page').find('.js-filter').find('select[name="lemurro_roles"]')
        .append(html);
};
/**
 * Зарегистрируем Template7-хелпер: lemurroaccesssets
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users._t7helperAccessSets = function () {
    Template7.registerHelper('lemurroaccesssets', function (roles) {
        var data = [];

        var titles = {};
        for (var i in app.config.userRoles.list) {
            if (app.config.userRoles.list.hasOwnProperty(i)) {
                var role = app.config.userRoles.list[i];

                titles[role.name] = role.title;
            }
        }

        for (var name in roles) {
            if (roles.hasOwnProperty(name)) {
                var access    = roles[name];
                var arrAccess = [];

                for (var k in access) {
                    if (access.hasOwnProperty(k) && app.config.userRoles.guideAccess.hasOwnProperty(access[k])) {
                        arrAccess.push(app.config.userRoles.guideAccess[access[k]]);
                    }
                }

                data.push({
                    title : (titles.hasOwnProperty(name) ? titles[name] : '!неизвестно>>' + name),
                    access: arrAccess
                });
            }
        }

        return lemurro.users._templates.accessSetsRoles(data);
    });
};
/**
 * Применим фильтр
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.applyFilter = function () {
    var page = $('#js-page');
    var data = {};

    page.find('.js-filter')
        .find('.js-filter__element')
        .each(function () {
            var input = $(this);
            var name = input.attr('name');

            data[name] = input.val();
        });

    page.find('.js-message__default').hide();
    page.find('.js-message__notfound').hide();

    lemurro.lightajax.post(
        true,
        pathServerAPI + 'users/filter',
        {
            data: data,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                lemurro.users.showData(result.data);

                if (result.data.count === 0) {
                    page.find('.js-message__notfound').show();
                }
            }
        }
    );
};

/**
 * Очистка фильтра
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 27.09.2019
 */
lemurro.users.clearFilter = function () {
    var filter = $('#js-page').find('.js-filter');

    filter.find('select').val('all').trigger('change');
    filter.find('input[type="text"]').val('');
};
/**
 * Редактирование
 *
 * @param {string}   id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.edit = function (id, callback) {
    lemurro.lightajax.get(true, pathServerAPI + 'users/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-user-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование пользователя');

            if (id === '1') {
                container.find('.js-user-id-1').prop('disabled', true);

                swal('Внимание!', 'У данного пользователя некоторые поля запрещены к изменению', 'warning');
            } else {
                container.find('.js-user-id-1').prop('disabled', false);
            }

            $('#js-user__access-sets').find('select').val(null);

            $('#js-user__button-insert').hide();
            $('#js-user__button-save').show();

            $('#js-tab-form-button').html('<i class="fas fa-pencil-alt"></i> Редактировать');

            lemurro.tabs.tabInsertEdit('show');

            if (typeof callback === 'function') {
                callback(result);
            }
        }
    });
};

/**
 * Список пользователей
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'users', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.users.showData(result.data);

            localforage.getItem('lastSessionID', function (err, value) {
                if (value !== null) {
                    $('#js-users__items').find('.js-login-by-user').hide();
                }
            });
        }
    });
};

/**
 * Получение отмеченных ролей пользователя
 *
 * @param {JQuery} form Элемент формы
 *
 * @return {object}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 18.10.2019
 */
lemurro.users.getRoles = function (form) {
    var roles = {};

    form.find('.js-role:checked').each(function () {
        var elem = $(this);
        var role = elem.attr('data-role');

        if (role === 'admin') {
            roles.admin = true;
        } else {
            if (!roles.hasOwnProperty(role)) {
                roles[role] = [];
            }

            roles[role].push(elem.attr('data-access'));
        }
    });

    if (roles.hasOwnProperty('admin')) {
        roles = {admin: true};
    }

    return roles;
};
/**
 * Добавление
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.insert = function (data, callback) {
    lemurro.lightajax.post(
        true,
        pathServerAPI + 'users',
        {
            data: data,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                if (typeof callback === 'function') {
                    callback(result);
                }
            }
        }
    );
};

/**
 * Заблокировать пользователя
 *
 * @param {string}   id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.lock = function (id, callback) {
    if (id === '1') {
        swal('Внимание!', 'Блокировка пользователя с id=1 запрещена', 'warning');
    } else {
        lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/lock', {}, function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                var newRecord = $(users.templates.item(result.data));
                var row = $('#js-users__items').find('tr[data-item-id="' + result.data.id + '"]');

                row.html(newRecord.html());

                lemurro.helper.initBootstrapConfirmation(row, null);

                if (typeof callback === 'function') {
                    callback(result);
                }
            }
        });
    }
};

/**
 * Вход под указанным пользователем
 *
 * @param {string} id ИД пользователя
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.loginByUser = function (id) {
    if (id === '1') {
        swal('Внимание!', 'Входить под пользователем с id=1 запрещено', 'warning');
    } else {
        lemurro.lightajax.post(
            true,
            pathServerAPI + 'users/login_by_user',
            {
                user_id: id,
            },
            function (result) {
                lemurro.lightajax.preloader('hide');

                if (lemurro.hasErrors(result)) {
                    lemurro.showErrors(result.errors);
                } else {
                    localforage.setItem('lastSessionID', lemurro.sessionID, function () {
                        localforage.setItem('sessionID', result.data.session, function () {
                            location.replace(location.origin);
                        });
                    });
                }
            }
        );
    }
};

/**
 * Удаление
 *
 * @param {string}   id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.remove = function (id, callback) {
    if (id === '1') {
        swal('Внимание!', 'Пользователь с id=1 не может быть удалён', 'warning');
    } else {
        lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/remove', {}, function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                if (typeof callback === 'function') {
                    callback(result);
                }
            }
        });
    }
};

/**
 * Вернуться обратно
 *
 * @version 09.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.users.return = function () {
    localforage.getItem('lastSessionID', function (err, value) {
        var lastSessionID = value;

        if (lastSessionID === null) {
            swal('Ошибка', 'Прошлая сессия отсутствует', 'error');

            return;
        }

        swal({
            title            : 'Вернуться обратно?',
            html             : '',
            type             : 'warning',
            showCancelButton : true,
            confirmButtonText: 'Да',
            cancelButtonText : 'Нет'
        }).then(function (result) {
            if (result.value) {
                localforage.removeItem('lastSessionID', function () {
                    localforage.setItem('sessionID', lastSessionID, function () {
                        location.reload();
                    });
                });
            }
        });
    });
};
/**
 * Изменение
 *
 * @param {object}   data     Объект с данными
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.save = function (data, callback) {
    lemurro.lightajax.post(
        true,
        pathServerAPI + 'users/' + data.id,
        {
            data: data,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                if (typeof callback === 'function') {
                    callback(result);
                }
            }
        }
    );
};

/**
 * Установка ролей пользователя (отметка checkbox)
 *
 * @param {JQuery} form  Элемент формы
 * @param {object} roles Список ролей пользователя
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 18.10.2019
 */
lemurro.users.setRoles = function (form, roles) {
    form.find('.js-role').prop('checked', false);

    for (var role in roles) {
        if (role === 'admin') {
            form.find('.js-role[data-role="admin"]').prop('checked', true);
        } else {
            for (var i in roles[role]) {
                if (roles[role].hasOwnProperty(i)) {
                    form.find('.js-role[data-role="' + role + '"][data-access="' + roles[role][i] + '"]')
                        .prop('checked', true);
                }
            }
        }
    }
};
/**
 * Отобразим список пользователей
 *
 * @param {Object} data
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 17.04.2020
 */
lemurro.users.showData = function (data) {
    var container = $('#js-users__items');
    var html = '';

    for (var i in data.items) {
        if (data.items.hasOwnProperty(i)) {
            html += users.templates.item(data.items[i]);
        }
    }

    container.html(html);

    lemurro.helper.initBootstrapConfirmation(container, null);

    if (users.hasOwnProperty('afterShowData') && notEmpty(users.afterShowData)) {
        users.afterShowData(data);
    }
};

/**
 * Покажем форму добавления
 *
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.users.showInsertForm = function (callback) {
    var container = $('#js-user-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление пользователя');
    lemurro.helper.clearFields(container);

    container.find('.js-user-id-1').prop('disabled', false);

    $('#js-user__access-sets').find('select').val(null);

    $('#js-user__button-insert').show();
    $('#js-user__button-save').hide();

    $('#js-tab-form-button').html('<i class="fas fa-plus"></i> Добавить');

    lemurro.tabs.tabInsertEdit('show');

    if (typeof callback === 'function') {
        callback();
    }
};
/**
 * Покажем \ Скроем фильтр
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 27.09.2019
 */
lemurro.users.toggleFilter = function () {
    var page = $('#js-page');

    var iconAngle = page.find('.js-filter__angle');
    var filter    = page.find('.js-filter');
    var visible   = filter.attr('data-visible');

    if (visible === '0') {
        filter.attr('data-visible', '1').show();

        iconAngle.removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
        filter.attr('data-visible', '0').hide();

        iconAngle.removeClass('fa-angle-up').addClass('fa-angle-down');
    }
};
/**
 * Разблокировать пользователя
 *
 * @param {string}   id       ИД пользователя
 * @param {function} callback Функция обратного вызова
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.users.unlock = function (id, callback) {
    lemurro.lightajax.post(true, pathServerAPI + 'users/' + id + '/unlock', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            var newRecord = $(users.templates.item(result.data));
            var row = $('#js-users__items').find('tr[data-item-id="' + result.data.id + '"]');

            row.html(newRecord.html());

            lemurro.helper.initBootstrapConfirmation(row, null);

            if (typeof callback === 'function') {
                callback(result);
            }
        }
    });
};

/**
 * Работа с наборами прав доступа
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
lemurro.accessSets = {};
/**
 * Собрать выпадающий список наборов прав доступа
 *
 * @return {object}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 * @version 21.01.2020
 */
lemurro.accessSets._buildSelect = function () {
    var containerSelect = $('#js-user__access-sets');
    var htmlSelect      = '';

    $('#js-access-sets__items').find('tr').each(function () {
        var item = $(this);

        var id   = item.attr('data-item-id');
        var name = item.find('.name').text();

        htmlSelect += '<option value="' + id + '">' + name + '</option>';
    });

    containerSelect.find('select').html(htmlSelect);

    if (notEmpty(htmlSelect)) {
        containerSelect.show();
    } else {
        containerSelect.hide();
    }
};
/**
 * Сбор данных формы
 *
 * @return {object}
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.accessSets._collectData = function () {
    var form = $('#js-access-sets-form');

    if (form.valid()) {
        return {
            id   : form.attr('data-id'),
            name : form.find('input[name="name"]').val(),
            roles: lemurro.users.getRoles(form)
        };
    } else {
        swal('Внимание!', 'Заполните все поля, помеченные красным', 'warning');

        return {};
    }
};
/**
 * Применим выбранный набор
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.accessSets.apply = function () {
    var select = $('#js-user__access-sets').find('select');
    var id = select.val();

    if (!isEmpty(id)) {
        lemurro.lightajax.get(true, pathServerAPI + 'access_sets/' + id, {}, function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                lemurro.users.setRoles($('#js-user-form'), result.data.roles);

                select.val(null);

                swal('Выполнено', 'Успешно применён набор "' + result.data.name + '"', 'success');
            }
        });
    }
};

/**
 * Скроем форму
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.accessSets.closeForm = function () {
    $('#js-access-sets-form').hide();
    $('#js-access-sets__button-add').show();
};
/**
 * Редактирование
 *
 * @param {string} id ИД набора
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.accessSets.edit = function (id) {
    lemurro.lightajax.get(true, pathServerAPI + 'access_sets/' + id, {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            var container = $('#js-access-sets-form');

            container.attr('data-id', id);
            container.find('.js-title').text('Редактирование набора');
            container.find('input[name="name"]').val(result.data.name);

            $('#js-access-sets__button-insert').hide();
            $('#js-access-sets__button-save').show();
            $('#js-access-sets__button-add').hide();

            lemurro.users.setRoles(container, result.data.roles);

            container.show();
        }
    });
};

/**
 * Список
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.accessSets.getData = function () {
    lemurro.lightajax.get(false, pathServerAPI + 'access_sets', {}, function (result) {
        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            var containerItems = $('#js-access-sets__items');
            var htmlItems = '';

            for (var i in result.data.items) {
                if (result.data.items.hasOwnProperty(i)) {
                    var item = result.data.items[i];

                    htmlItems += lemurro.users._templates.accessSetsItem(item);
                }
            }

            containerItems.html(htmlItems);

            lemurro.helper.initBootstrapConfirmation(containerItems, null);
            lemurro.accessSets._buildSelect();
        }
    });
};

/**
 * Добавление
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.accessSets.insert = function () {
    var data = lemurro.accessSets._collectData();

    if (Object.keys(data).length > 0) {
        lemurro.lightajax.post(
            true,
            pathServerAPI + 'access_sets',
            {
                data: data,
            },
            function (result) {
                lemurro.lightajax.preloader('hide');

                if (lemurro.hasErrors(result)) {
                    lemurro.showErrors(result.errors);
                } else {
                    var container = $('#js-access-sets__items');
                    container.prepend(lemurro.users._templates.accessSetsItem(result.data));

                    var row = container.find('tr[data-item-id="' + result.data.id + '"]');
                    lemurro.helper.initBootstrapConfirmation(row, null);

                    lemurro.accessSets._buildSelect();

                    $('#js-access-sets-form').hide();
                    $('#js-access-sets__button-add').show();
                }
            }
        );
    }
};

/**
 * Удаление
 *
 * @param {string} id ИД набора
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.accessSets.remove = function (id) {
    lemurro.lightajax.post(true, pathServerAPI + 'access_sets/' + id + '/remove', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            $('#js-access-sets__items')
                .find('tr[data-item-id="' + result.data.id + '"]')
                .remove();

            lemurro.accessSets._buildSelect();

            swal('Выполнено', 'Запись успешно удалена', 'success');
        }
    });
};

/**
 * Изменение
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.accessSets.save = function () {
    var data = lemurro.accessSets._collectData();

    if (Object.keys(data).length > 0) {
        lemurro.lightajax.post(
            true,
            pathServerAPI + 'access_sets/' + data.id,
            {
                data: data,
            },
            function (result) {
                lemurro.lightajax.preloader('hide');

                if (lemurro.hasErrors(result)) {
                    lemurro.showErrors(result.errors);
                } else {
                    var newRecord = $(lemurro.users._templates.accessSetsItem(result.data));
                    var row = $('#js-access-sets__items').find('tr[data-item-id="' + result.data.id + '"]');

                    row.html(newRecord.html());

                    lemurro.helper.initBootstrapConfirmation(row, null);

                    lemurro.accessSets._buildSelect();

                    $('#js-access-sets-form').hide();
                    $('#js-access-sets__button-add').show();

                    swal('Выполнено', 'Запись успешно изменена', 'success');
                }
            }
        );
    }
};

/**
 * Покажем форму добавления
 *
 * @version 05.06.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.accessSets.showInsertForm = function () {
    var container = $('#js-access-sets-form');

    container.attr('data-id', '0');
    container.find('.js-title').text('Добавление набора');
    lemurro.helper.clearFields(container);

    $('#js-access-sets__button-insert').show();
    $('#js-access-sets__button-save').hide();
    $('#js-access-sets__button-add').hide();

    container.show();
};
/**
 * Просмотр ключей доступа
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
lemurro.authKeys = {};
/**
 * Список
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.authKeys.getData = function () {
    var container = $('#js-auth-keys__items');

    container.html('');

    lemurro.lightajax.get(false, pathServerAPI + 'auth/keys', {}, function (result) {
        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            if (!lemurro.authKeys.hasOwnProperty('_template')) {
                lemurro.authKeys._template = Template7.compile($('#js-tpl-auth-keys__items').html());
            }

            container.html(lemurro.authKeys._template(result.data));
        }
    });
};

/**
 * Работа с файлами
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 11.05.2020
 */
lemurro.file = {};
/**
 * Инициализация
 *
 * @param {string} classFile Селектор элемента файлов
 *
 * @version 08.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.init = function (classFile) {
    lemurro.file._config();

    /**
     * Селектор элемента файлов
     *
     * @type {string}
     */
    if (isEmpty(classFile)) {
        lemurro.file._classFile = 'js-files__file';
    } else {
        lemurro.file._classFile = classFile;
    }
};
/**
 * Настройка плагина simple-ajax-uploader
 *
 * @version 15.05.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file._config = function () {
    ss.uploadSetup({
        url           : pathServerAPI + 'file/upload',
        name          : 'uploadfile',
        hoverClass    : 'hover',
        focusClass    : 'focus',
        responseType  : 'json',
        multiple      : true,
        multipleSelect: true,
        customHeaders : {
            'X-SESSION-ID': lemurro.sessionID,
            'X-UTC-OFFSET': moment().utcOffset()
        }
    });
};
/**
 * Подключение загрузчика файлов
 *
 * @param {JQuery}   btn        jQuery-объект указывающий на кнопку к которой привязать загрузчик
 * @param {function} onComplete Функция, вызываемая после успешной загрузки файла
 * @param {object}   options    Переопределение параметров
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.file.bindUpload = function (btn, onComplete, options) {
    var btnContent = btn.html();

    // Проверка на наличие объекта
    if (isEmpty(options)) {
        options = {};
    }

    // Настройки
    var settings = $.extend(
        {
            button: btn,
            onSubmit: function () {
                btn.html('<i class="fas fa-spinner fa-pulse"></i> Загрузка...').prop('disabled', true); // change button text to "Uploading..."
            },
            onComplete: function (filename, result) {
                btn.html(btnContent).prop('disabled', false);

                if (!result) {
                    swal(
                        'Произошла ошибка',
                        'Не удалось загрузить файл "' + filename + '", попробуйте ещё раз',
                        'error'
                    );

                    return false;
                }

                if (lemurro.hasErrors(result)) {
                    lemurro.showErrors(result.errors);
                } else {
                    if (typeof onComplete === 'function') {
                        onComplete(result.data.id, 'add', filename, btn);
                    } else {
                        swal('Выполнено', 'Файл <strong>' + filename + '</strong>' + ' успешно загружен', 'success');
                    }
                }
            },
            onError: function (filename) {
                btn.html(btnContent).prop('disabled', false);

                swal('Произошла ошибка', 'Не удалось загрузить файл "' + filename + '", попробуйте ещё раз', 'error');
            },
        },
        options
    );

    new ss.SimpleUpload(settings);
};

/**
 * Скачивание файла
 *
 * @param {integer|string} fileid   ИД постоянного файла или имя временного файла
 * @param {string}         filename ИД файла
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.file.download = function (fileid, filename) {
    lemurro.lightajax.post(
        true,
        pathServerAPI + 'file/download/prepare',
        {
            fileid: fileid,
            filename: filename,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                window.open(pathServerAPI + 'file/download/run?token=' + encodeURI(result.data.token), 'Download file');
            }
        }
    );
};

/**
 * Удаление файла
 *
 * @param {integer}  fileid   ИД файла
 * @param {function} callback Функция, вызываемая после успешного удаления файла
 *
 * @version 14.01.2019
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 */
lemurro.file.remove = function (fileid, callback) {
    var elemFile = $('.' + lemurro.file._classFile + '[data-file-id="' + fileid + '"]');
    var name     = elemFile.find('.js-name').text();

    swal({
        title            : 'Удаление файла',
        html             : 'Вы хотите удалить файл "' + name + '"?',
        type             : 'warning',
        showCancelButton : true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText : 'Отмена'
    }).then(function (result) {
        if (result.value) {
            if (elemFile.attr('data-file-action') === 'add') {
                elemFile.remove();
            } else {
                elemFile.attr('data-file-action', 'remove').hide();
            }

            if (!isEmpty(callback)) {
                callback(fileid, name);
            }
        }
    });
};
/**
 * Профиль пользователя
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 24.04.2020
 */
lemurro.profile = {};

/**
 * Инициализация
 *
 * @type {Function}
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 24.04.2020
 */
lemurro.profile.init = function () {
    Template7.global = {
        sessionID: lemurro.sessionID,
    };

    /**
     * Объект для хранения шаблонов
     *
     * @type {object}
     */
    lemurro.profile.templates = {
        info: Template7.compile($('#js-tpl-profile__info').html()),
        sessions: Template7.compile($('#js-tpl-profile__sessions').html()),
    };

    lemurro.profile.getData();
};

/**
 * Получение информации о профиле пользователя
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.profile.getData = function () {
    lemurro.lightajax.get(true, pathServerAPI + 'profile', {}, function (result) {
        lemurro.lightajax.preloader('hide');

        if (lemurro.hasErrors(result)) {
            lemurro.showErrors(result.errors);
        } else {
            lemurro.profile.showData(result.data);
        }
    });
};

/**
 * Сброс выбранной сессии
 *
 * @param {String} session
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 19.06.2020
 */
lemurro.profile.resetSession = function (session) {
    lemurro.lightajax.post(
        true,
        pathServerAPI + 'profile/session/reset',
        {
            session: session,
        },
        function (result) {
            lemurro.lightajax.preloader('hide');

            if (lemurro.hasErrors(result)) {
                lemurro.showErrors(result.errors);
            } else {
                $('#js-page')
                    .find('.js-profile__sessions')
                    .find('div[data-id="' + session + '"]')
                    .remove();
            }
        }
    );
};

/**
 * Отображение информации о профиле пользователя
 *
 * @param {Object} data
 *
 * @author  Дмитрий Щербаков <atomcms@ya.ru>
 *
 * @version 24.04.2020
 */
lemurro.profile.showData = function (data) {
    var page = $('#js-page');

    page.find('.js-profile__info').html(lemurro.profile.templates.info(lemurro.userinfo));
    page.find('.js-profile__sessions').html(lemurro.profile.templates.sessions(data.sessions));

    lemurro.helper.initBootstrapConfirmation(page, null);

    if (profile.hasOwnProperty('_afterShowData') && typeof profile._afterShowData === 'function') {
        profile._afterShowData(data);
    }
};
