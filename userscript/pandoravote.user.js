// ==UserScript==
// @name        pandraup
// @namespace   https://github.com/poochin
// @include     /^http://[^.]+\.pandoravote\.net/(up(\d+)?/)?index\.php\?id=/
// @version     1.0.3
// @description ダウンロードへ飛びます
// 
// @author      poochin
// @license     MIT
// @updated     2012-06-16
// ==/UserScript==

(function PageLinkOnDashboard() {
    'use strict';

    main();

    function $$(selector) {
        return Array.apply(0, document.querySelectorAll(selector));
    }

    function main() {
        var link =
            $$('a')
                .reduce(function(l, r) {
                    if (l.textContent.indexOf('ダウンロード') >= 0) {
                        return l;
                    }
                    return r;
                });
        location.assign(link.href);
    }
})()

