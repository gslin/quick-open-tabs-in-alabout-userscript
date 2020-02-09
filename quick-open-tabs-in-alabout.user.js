// ==UserScript==
// @name        Quick Open Tabs in Alabout
// @namespace   https://wiki.gslin.org/wiki/quick-open-tabs-alabout
// @include     http://alabout.com/*
// @version     0.20200209.0
// @grant       GM_openInTab
// @license     MIT
// ==/UserScript==

(() => {
    'use strict';

    for (let el of document.querySelectorAll('table[id^="ml_"] tr:first-child .mn')) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td></td><td><input type="button" style="font-size: 2em;" tabindex="1" value="Quick Open Tabs"/></td>';
        tr.querySelector('input').addEventListener('click', function(){
            let t = this.parentElement.parentElement.parentElement.getElementsByTagName('tr')[0];
            for (let link of t.querySelectorAll('a')) {
                GM_openInTab(link.href, true);
            };
        }, false);

        let t = el.parentElement.parentElement.parentElement;
        t.appendChild(tr);
    };
})();
