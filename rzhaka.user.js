// ==UserScript==
// @name         Ржака
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  -
// @author       Krivodushie
// @match        *://catwar.su/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function replaceText(element) {
        if (element.nodeType === 3) {
            element.data = element.data.replace(/ржанка/gi, 'Ржака');
        } else {
            for (let i = 0; i < element.childNodes.length; i++) {
                replaceText(element.childNodes[i]);
            }
        }
    }
    replaceText(document.body);
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                replaceText(node);
            });
        });
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();