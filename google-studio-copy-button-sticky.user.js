// ==UserScript==
// @name         Google studio copy button sticky
// @namespace    http://tampermonkey.net/
// @version      2025-08-08
// @description  try to take over the world!
// @author       You
// @match        https://aistudio.google.com/u/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    (function addStyle() {
    if (!document.querySelector('#matContentStyle')) {
        const style = document.createElement('style');
        style.id = 'matContentStyle';
        style.textContent = `
span.mat-content {
    position: fixed;
    top: 142px;
    background: #522d2d4f;
    height: fit-content;
    right: 461px;
}
        `;
        document.head.appendChild(style);
    }
    setTimeout(addStyle, 10000);
})();
})();