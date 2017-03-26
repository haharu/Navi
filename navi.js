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

var __cov_TQmIMzOMjs0NZOLj8vhQSw = (Function('return this'))();
if (!__cov_TQmIMzOMjs0NZOLj8vhQSw.__coverage__) { __cov_TQmIMzOMjs0NZOLj8vhQSw.__coverage__ = {}; }
__cov_TQmIMzOMjs0NZOLj8vhQSw = __cov_TQmIMzOMjs0NZOLj8vhQSw.__coverage__;
if (!(__cov_TQmIMzOMjs0NZOLj8vhQSw['/Users/haharu/www/navi/lib/.interal/env.js'])) {
   __cov_TQmIMzOMjs0NZOLj8vhQSw['/Users/haharu/www/navi/lib/.interal/env.js'] = {"path":"/Users/haharu/www/navi/lib/.interal/env.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"_class","line":11,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":31}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":7,"column":2}},"2":{"start":{"line":9,"column":0},"end":{"line":9,"column":16}},"3":{"start":{"line":11,"column":0},"end":{"line":25,"column":2}},"4":{"start":{"line":12,"column":4},"end":{"line":12,"column":46}},"5":{"start":{"line":14,"column":4},"end":{"line":24,"column":5}},"6":{"start":{"line":15,"column":8},"end":{"line":15,"column":27}},"7":{"start":{"line":16,"column":8},"end":{"line":16,"column":35}},"8":{"start":{"line":17,"column":11},"end":{"line":24,"column":5}},"9":{"start":{"line":18,"column":8},"end":{"line":18,"column":25}},"10":{"start":{"line":19,"column":8},"end":{"line":19,"column":31}},"11":{"start":{"line":21,"column":8},"end":{"line":21,"column":78}},"12":{"start":{"line":22,"column":8},"end":{"line":22,"column":25}},"13":{"start":{"line":23,"column":8},"end":{"line":23,"column":34}}},"branchMap":{"1":{"line":14,"type":"if","locations":[{"start":{"line":14,"column":4},"end":{"line":14,"column":4}},{"start":{"line":14,"column":4},"end":{"line":14,"column":4}}]},"2":{"line":17,"type":"if","locations":[{"start":{"line":17,"column":11},"end":{"line":17,"column":11}},{"start":{"line":17,"column":11},"end":{"line":17,"column":11}}]}}};
}
__cov_TQmIMzOMjs0NZOLj8vhQSw = __cov_TQmIMzOMjs0NZOLj8vhQSw['/Users/haharu/www/navi/lib/.interal/env.js'];
__cov_TQmIMzOMjs0NZOLj8vhQSw.s['1']++;var AGENT={browser:'BROWSER',server:'SERVER',bot:'BOT'};__cov_TQmIMzOMjs0NZOLj8vhQSw.s['2']++;var ROOT=undefined;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['3']++;var _class=function _class(){__cov_TQmIMzOMjs0NZOLj8vhQSw.f['1']++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['4']++;classCallCheck(this,_class);__cov_TQmIMzOMjs0NZOLj8vhQSw.s['5']++;if(typeof window!=='undefined'){__cov_TQmIMzOMjs0NZOLj8vhQSw.b['1'][0]++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['6']++;this.root=window;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['7']++;this.agent=AGENT.browser;}else{__cov_TQmIMzOMjs0NZOLj8vhQSw.b['1'][1]++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['8']++;if(typeof self!=='undefined'){__cov_TQmIMzOMjs0NZOLj8vhQSw.b['2'][0]++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['9']++;this.root=self;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['10']++;this.agent=AGENT.bot;}else{__cov_TQmIMzOMjs0NZOLj8vhQSw.b['2'][1]++;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['11']++;console.warn('Using browser-only version in non-browser environment');__cov_TQmIMzOMjs0NZOLj8vhQSw.s['12']++;this.root=ROOT;__cov_TQmIMzOMjs0NZOLj8vhQSw.s['13']++;this.agent=AGENT.server;}}};

var __cov_Mtn7HrMG40HXHp5Vczdxeg = (Function('return this'))();
if (!__cov_Mtn7HrMG40HXHp5Vczdxeg.__coverage__) { __cov_Mtn7HrMG40HXHp5Vczdxeg.__coverage__ = {}; }
__cov_Mtn7HrMG40HXHp5Vczdxeg = __cov_Mtn7HrMG40HXHp5Vczdxeg.__coverage__;
if (!(__cov_Mtn7HrMG40HXHp5Vczdxeg['/Users/haharu/www/navi/lib/index.js'])) {
   __cov_Mtn7HrMG40HXHp5Vczdxeg['/Users/haharu/www/navi/lib/index.js'] = {"path":"/Users/haharu/www/navi/lib/index.js","s":{},"b":{},"f":{},"fnMap":{},"statementMap":{},"branchMap":{}};
}
__cov_Mtn7HrMG40HXHp5Vczdxeg = __cov_Mtn7HrMG40HXHp5Vczdxeg['/Users/haharu/www/navi/lib/index.js'];

return _class;

})));
//# sourceMappingURL=navi.js.map
