/*! caja-kissy 2013-08-27 */
KISSY.add("openjs/thirdparty/jquery/1.7/index",function(){function t(t){function e(){}function r(t){this.inner=n(t)}return r.prototype.add=function(){return arguments[0],this.inner.add(arguments),this},r.prototype.addClass=function(){return this.inner.addClass(arguments[0]),this},r.prototype.removeClass=function(){return this.inner.removeClass(arguments[0]),this},r.prototype.each=function(){var n=arguments[0];return this.inner.each(t.markFunction(function(t,r){n(t,e(r))})),this},t.markCtor(r),t.grantMethod(r,"addClass"),t.grantMethod(r,"removeClass"),t.grantMethod(r,"each"),function(n){return e=function(t){return n.frame.imports.tameNode___(t,!0)},{jQuery:t.tame(t.markFunction(function(){return new r(arguments[0])})),kissy:!1}}}var n=window.jQuery;return t});