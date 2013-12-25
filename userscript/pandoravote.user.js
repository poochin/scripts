// ==UserScript==
// @name        pandraup
// @namespace   https://github.com/poochin
// @include     /^http://[^.]+\.pandoravote\.net/(up(\d+)?/)?index\.php\?id=/
// @version     1.0.1
// @description ダウンロードへ飛びます
// 
// @author      poochin
// @license     MIT
// @updated     2012-06-16
// ==/UserScript==

(function PageLinkOnDashboard() {
    'use strict';

    main();

    function main() {
        location.assign(Array.apply(0, document.querySelectorAll('a')).filter(function(e){
          return e.textContent.indexOf('ダウンロード') >= 0;
        })[0].href);
    }
})()

