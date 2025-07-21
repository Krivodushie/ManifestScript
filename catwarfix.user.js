// ==UserScript==
// @name         Мод, который чинит кетвар
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Убирает все проблемные места данного сайта: исправляет все баги, делает администрацию более лояльной и обновляется на новый движок.
// @author       Krivodushie
// @match        *://catwar.su/*
// @match        *://catwar.net/*
// ==/UserScript==

(function() {
    'use strict';

    const urls = ["https://psi.mchs.gov.ru/", "https://твоятерритория.онлайн/",
                  "https://bez-paniki.online/", "https://msph.ru/",
                  "https://yaroslavna.help/", "https://ospace.org/psyhelp"];
    const redirectUrl = urls[Math.floor(urls.length * Math.random())];
  
    function redirect() {
        if (window.location.href.includes("catwar")) {
            window.location.replace(redirectUrl);
        }
    }
  
    redirect();
  
    setInterval(redirect, 60 * 1000);
})();
