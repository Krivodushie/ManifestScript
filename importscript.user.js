// ==UserScript==
// @name         Импортер настроек
// @version      1.0
// @description  Импортирует настройки для этой помойки. Крем соси
// @author       2024 ScriptTeam
// @match        *://catwar.net/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const importWindow = document.createElement('div');
  importWindow.innerHTML = `
    <textarea id="localStorageData"></textarea>
    <button id="pasteButton">Вставить</button>
  `;
  document.body.insertBefore(importWindow, document.body.firstChild);

  document.getElementById('pasteButton').addEventListener('click', function() {
    const textArea = document.getElementById('localStorageData');
    const data = textArea.value.split('\n');

    data.forEach(line => {
      const [key, value] = line.split(':');
      localStorage.setItem(key, value);
    });

    alert('Данные успешно импортированы!');
  });
})();
