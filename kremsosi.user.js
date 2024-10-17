// ==UserScript==
// @name        Крем соси
// @namespace   kremsosi
// @match       https://vk.com/im*
// @grant       none
// @version     1.1
// @license     MIT
// @downloadURL -
// @updateURL   -
// @author      ScriptTeam (17.10.2024)
// @description Крем соси
// @require     https://github.com/CatWarScript/CatWarScript/raw/main/jquery.min.js
// ==/UserScript==
'use strict'
$(document).ready(function() {
  const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList' || mutation.type === 'characterData') {
      mutation.target.querySelectorAll('.im-mess--text.wall_module._im_log_body').forEach(element => {
        element.textContent = 'Крем соси';
      });
      mutation.target.querySelectorAll('.im-page-pinned--content').forEach(element => {
        element.textContent = 'Крем соси';
      });
      mutation.target.querySelectorAll('.nim-dialog--inner-text').forEach(element => {
        element.textContent = 'Крем соси';
      });
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
});
})
