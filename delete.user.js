// ==UserScript==
// @name         Та самая кнопка
// @version      69.69
// @description  Удаляет CatWar. Крем уже сама знает что делать 
// @author       2024 ScriptTeam 
// @match        *://catwar.net/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const buttonPressed = localStorage.getItem('catWarButton');

  if (buttonPressed) {
    $('body').html('CatWar удалён. Теперь идите и потрогайте траву');
  } else {
    const button = $('<button>').text('Удалить CatWar');
    button.css({
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '1000',
      backgroundColor: 'red',
      color: 'white',
      padding: '20px 40px',
      fontSize: '24px',
      cursor: 'pointer',
    });
    
    $('body').css('filter', 'brightness(0.5)');

    button.click(function() {
      $('body').html('CatWar удалён. Теперь идите и потрогайте траву');
      $('body').css('filter', 'brightness(1)');
      localStorage.setItem('catWarButton', 'true');
    });

    $(document).click(function(e) {
      if (!$(e.target).is(button)) {
        button.remove();
        $('body').css('filter', 'brightness(1)');
      }
    });

    $('body').append(button);
  }
})();
