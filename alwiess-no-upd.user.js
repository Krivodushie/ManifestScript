// ==UserScript==
// @name        Alwiess (no upd)
// @match       https://alwiess.github.io/*
// @grant       none
// @version     1.0
// @author      Krdshie (ScriptTeam)
// ==/UserScript==

(function() {
    'use strict';

    const confirmationMessage = 'Вы уверены, что хотите перезагрузить или закрыть страницу?';

    window.addEventListener('beforeunload', function (e) {
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
            if (!confirm(confirmationMessage)) {
                event.preventDefault();
            }
        }
    });
})();
