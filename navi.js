(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Navi = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var __cov_TQmIMzOMjs0NZOLj8vhQSw = (Function('return this'))();
if (!__cov_TQmIMzOMjs0NZOLj8vhQSw.__coverage__) { __cov_TQmIMzOMjs0NZOLj8vhQSw.__coverage__ = {}; }
__cov_TQmIMzOMjs0NZOLj8vhQSw = __cov_TQmIMzOMjs0NZOLj8vhQSw.__coverage__;
if (!(__cov_TQmIMzOMjs0NZOLj8vhQSw['/Users/haharu/www/navi/lib/.interal/env.js'])) {
   __cov_TQmIMzOMjs0NZOLj8vhQSw['/Users/haharu/www/navi/lib/.interal/env.js'] = {"path":"/Users/haharu/www/navi/lib/.interal/env.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"Env","line":11,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":25}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":7,"column":2}},"2":{"start":{"line":9,"column":0},"end":{"line":9,"column":16}},"3":{"start":{"line":11,"column":0},"end":{"line":29,"column":2}},"4":{"start":{"line":12,"column":4},"end":{"line":12,"column":43}},"5":{"start":{"line":14,"column":4},"end":{"line":28,"column":5}},"6":{"start":{"line":15,"column":8},"end":{"line":15,"column":27}},"7":{"start":{"line":16,"column":8},"end":{"line":16,"column":35}},"8":{"start":{"line":17,"column":11},"end":{"line":28,"column":5}},"9":{"start":{"line":18,"column":8},"end":{"line":18,"column":78}},"10":{"start":{"line":19,"column":8},"end":{"line":19,"column":27}},"11":{"start":{"line":20,"column":8},"end":{"line":20,"column":34}},"12":{"start":{"line":21,"column":11},"end":{"line":28,"column":5}},"13":{"start":{"line":22,"column":8},"end":{"line":22,"column":25}},"14":{"start":{"line":23,"column":8},"end":{"line":23,"column":31}},"15":{"start":{"line":25,"column":8},"end":{"line":25,"column":78}},"16":{"start":{"line":26,"column":8},"end":{"line":26,"column":25}},"17":{"start":{"line":27,"column":8},"end":{"line":27,"column":34}}},"branchMap":{"1":{"line":14,"type":"if","locations":[{"start":{"line":14,"column":4},"end":{"line":14,"column":4}},{"start":{"line":14,"column":4},"end":{"line":14,"column":4}}]},"2":{"line":17,"type":"if","locations":[{"start":{"line":17,"column":11},"end":{"line":17,"column":11}},{"start":{"line":17,"column":11},"end":{"line":17,"column":11}}]},"3":{"line":21,"type":"if","locations":[{"start":{"line":21,"column":11},"end":{"line":21,"column":11}},{"start":{"line":21,"column":11},"end":{"line":21,"column":11}}]}}};
}
__cov_TQmIMzOMjs0NZOLj8vhQSw = __cov_TQmIMzOMjs0NZOLj8vhQSw['/Users/haharu/www/navi/lib/.interal/env.js'];
__cov_TQmIMzOMjs0NZOLj8vhQSw.s['1']++;var AGENT={browser:'BROWSER',server:'SERVER',bot:'BOT'};__cov_TQmIMzOMjs0NZOLj8vhQSw.s['2']++;var ROOT=undefined;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['3']++;var Env=function Env(){__cov_TQmIMzOMjs0NZOLj8vhQSw.f['1']++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['4']++;classCallCheck(this,Env);__cov_TQmIMzOMjs0NZOLj8vhQSw.s['5']++;if(typeof window!=='undefined'){__cov_TQmIMzOMjs0NZOLj8vhQSw.b['1'][0]++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['6']++;this.root=window;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['7']++;this.agent=AGENT.browser;}else{__cov_TQmIMzOMjs0NZOLj8vhQSw.b['1'][1]++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['8']++;if(typeof global!=='undefined'){__cov_TQmIMzOMjs0NZOLj8vhQSw.b['2'][0]++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['9']++;console.warn('Using browser-only version in non-browser environment');__cov_TQmIMzOMjs0NZOLj8vhQSw.s['10']++;this.root=global;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['11']++;this.agent=AGENT.server;}else{__cov_TQmIMzOMjs0NZOLj8vhQSw.b['2'][1]++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['12']++;if(typeof self!=='undefined'){__cov_TQmIMzOMjs0NZOLj8vhQSw.b['3'][0]++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['13']++;this.root=self;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['14']++;this.agent=AGENT.bot;}else{__cov_TQmIMzOMjs0NZOLj8vhQSw.b['3'][1]++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['15']++;console.warn('Using browser-only version in non-browser environment');__cov_TQmIMzOMjs0NZOLj8vhQSw.s['16']++;this.root=ROOT;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['17']++;this.agent=AGENT.server;}}}};

var __cov_Mtn7HrMG40HXHp5Vczdxeg = (Function('return this'))();
if (!__cov_Mtn7HrMG40HXHp5Vczdxeg.__coverage__) { __cov_Mtn7HrMG40HXHp5Vczdxeg.__coverage__ = {}; }
__cov_Mtn7HrMG40HXHp5Vczdxeg = __cov_Mtn7HrMG40HXHp5Vczdxeg.__coverage__;
if (!(__cov_Mtn7HrMG40HXHp5Vczdxeg['/Users/haharu/www/navi/lib/index.js'])) {
   __cov_Mtn7HrMG40HXHp5Vczdxeg['/Users/haharu/www/navi/lib/index.js'] = {"path":"/Users/haharu/www/navi/lib/index.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":5,"loc":{"start":{"line":5,"column":11},"end":{"line":5,"column":27}}},"2":{"name":"Navi","line":8,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":24}}},"3":{"name":"isHistoryEnable","line":15,"loc":{"start":{"line":15,"column":15},"end":{"line":15,"column":42}}},"4":{"name":"currentUrl","line":22,"loc":{"start":{"line":22,"column":15},"end":{"line":22,"column":37}}},"5":{"name":"pushState","line":29,"loc":{"start":{"line":29,"column":15},"end":{"line":29,"column":39}}},"6":{"name":"replaceState","line":38,"loc":{"start":{"line":38,"column":15},"end":{"line":38,"column":42}}}},"statementMap":{"1":{"start":{"line":5,"column":0},"end":{"line":47,"column":7}},"2":{"start":{"line":6,"column":4},"end":{"line":6,"column":38}},"3":{"start":{"line":8,"column":4},"end":{"line":11,"column":5}},"4":{"start":{"line":9,"column":8},"end":{"line":9,"column":48}},"5":{"start":{"line":10,"column":8},"end":{"line":10,"column":126}},"6":{"start":{"line":13,"column":4},"end":{"line":45,"column":8}},"7":{"start":{"line":16,"column":12},"end":{"line":16,"column":44}},"8":{"start":{"line":18,"column":12},"end":{"line":18,"column":42}},"9":{"start":{"line":23,"column":12},"end":{"line":23,"column":46}},"10":{"start":{"line":25,"column":12},"end":{"line":25,"column":33}},"11":{"start":{"line":30,"column":12},"end":{"line":34,"column":13}},"12":{"start":{"line":31,"column":16},"end":{"line":31,"column":48}},"13":{"start":{"line":33,"column":16},"end":{"line":33,"column":51}},"14":{"start":{"line":39,"column":12},"end":{"line":43,"column":13}},"15":{"start":{"line":40,"column":16},"end":{"line":40,"column":48}},"16":{"start":{"line":42,"column":16},"end":{"line":42,"column":54}},"17":{"start":{"line":46,"column":4},"end":{"line":46,"column":16}}},"branchMap":{"1":{"line":10,"type":"binary-expr","locations":[{"start":{"line":10,"column":61},"end":{"line":10,"column":75}},{"start":{"line":10,"column":79},"end":{"line":10,"column":106}}]},"2":{"line":30,"type":"if","locations":[{"start":{"line":30,"column":12},"end":{"line":30,"column":12}},{"start":{"line":30,"column":12},"end":{"line":30,"column":12}}]},"3":{"line":39,"type":"if","locations":[{"start":{"line":39,"column":12},"end":{"line":39,"column":12}},{"start":{"line":39,"column":12},"end":{"line":39,"column":12}}]}}};
}
__cov_Mtn7HrMG40HXHp5Vczdxeg = __cov_Mtn7HrMG40HXHp5Vczdxeg['/Users/haharu/www/navi/lib/index.js'];
__cov_Mtn7HrMG40HXHp5Vczdxeg.s['1']++;var Navi=function(_Env){__cov_Mtn7HrMG40HXHp5Vczdxeg.f['1']++;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['2']++;inherits(Navi,_Env);function Navi(opts){__cov_Mtn7HrMG40HXHp5Vczdxeg.f['2']++;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['4']++;classCallCheck(this,Navi);__cov_Mtn7HrMG40HXHp5Vczdxeg.s['5']++;return possibleConstructorReturn(this,((__cov_Mtn7HrMG40HXHp5Vczdxeg.b['1'][0]++,Navi.__proto__)||(__cov_Mtn7HrMG40HXHp5Vczdxeg.b['1'][1]++,Object.getPrototypeOf(Navi))).call(this,opts));}__cov_Mtn7HrMG40HXHp5Vczdxeg.s['6']++;createClass(Navi,[{key:'isHistoryEnable',value:function isHistoryEnable(){__cov_Mtn7HrMG40HXHp5Vczdxeg.f['3']++;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['7']++;var history=this.root.history;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['8']++;return typeof history!=null;}},{key:'currentUrl',value:function currentUrl(){__cov_Mtn7HrMG40HXHp5Vczdxeg.f['4']++;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['9']++;var location=this.root.location;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['10']++;return location.href;}},{key:'pushState',value:function pushState(url){__cov_Mtn7HrMG40HXHp5Vczdxeg.f['5']++;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['11']++;if(this.isHistoryEnable){__cov_Mtn7HrMG40HXHp5Vczdxeg.b['2'][0]++;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['12']++;var history=this.root.history;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['13']++;history.pushState(null,null,url);}else{__cov_Mtn7HrMG40HXHp5Vczdxeg.b['2'][1]++;}}},{key:'replaceState',value:function replaceState(url){__cov_Mtn7HrMG40HXHp5Vczdxeg.f['6']++;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['14']++;if(this.isHistoryEnable){__cov_Mtn7HrMG40HXHp5Vczdxeg.b['3'][0]++;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['15']++;var history=this.root.history;__cov_Mtn7HrMG40HXHp5Vczdxeg.s['16']++;history.replaceState(null,null,url);}else{__cov_Mtn7HrMG40HXHp5Vczdxeg.b['3'][1]++;}}}]);__cov_Mtn7HrMG40HXHp5Vczdxeg.s['17']++;return Navi;}(Env);var index = new Navi();

return index;

})));
//# sourceMappingURL=navi.js.map
