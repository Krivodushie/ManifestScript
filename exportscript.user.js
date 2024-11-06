// ==UserScript==
// @name         Экспортер настроек
// @version      1.0
// @description  Экспортирует все настройки с этой помойки. Крем соси 
// @author       2024 ScriptTeam
// @match        *://catwar.su/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const keys = Object.keys(localStorage);
  let exportData = "";

  keys.forEach(key => {
    exportData += `${key}:${localStorage.getItem(key)}\n`;
  });

  const importWindow = document.createElement('div');
  importWindow.innerHTML = `
    <textarea id="localStorageData" readonly>${exportData}</textarea>
    <button id="copyButton">Копировать</button>
  `;
  document.body.insertBefore(importWindow, document.body.firstChild);

  document.getElementById('copyButton').addEventListener('click', function() {
    const textArea = document.getElementById('localStorageData');
    textArea.select();
    document.execCommand('copy');
    alert('Данные успешно скопированы!');
  });
})();
