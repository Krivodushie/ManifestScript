/*
Кетваровская библиотека костюмов – совершенно бесплатно.
Работает до безобразия просто:
1. Из заранее вставленной raw ссылки на вообще любой CSS-ник и берём текстовое содержимое
2. Создаём в HTML head тег <style> с этим содержимым
*/

  if (globals["costumeLibrary"]) {
    (function() {
  const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/COSTUMES/catwarScript_Costumes.css?raw=true';
  $.ajax({
    url: githubUrl,
    dataType: 'text',
    success: function(data) {
      $('head').append('<style>' + data + '</style>');
    }});})();
    if (globals["watermarkCostumes"]) {
        (function() {
  const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/COSTUMES/catwarScript_CostumesW.css?raw=true';
  $.ajax({
    url: githubUrl,
    dataType: 'text',
    success: function(data) {
      $('head').append('<style>' + data + '</style>');
    }});})();}

    if (globals["clLakeUniverse"]) {
        (function() { // ОБЫЧНЫЕ КОСТЮМЫ ОЗЁРКА
            const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/OV/costumes.css?raw=true';
            $.ajax({
                url: githubUrl,
                dataType: 'text',
                success: function(data) {
                    $('head').append('<style>' + data + '</style>');
                }});})();
        if (globals["clMemeCostumes"]) {
            (function() { // МЕМНЫЕ КОСТЮМЫ ОЗЁРКА
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/OV/costumesMEME.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
            if (globals["watermarkCostumes"]) {
                (function() { // ВАТЕРМАРКИ ДЛЯ МЕМНЫХ КОСТЮМОВ ОЗЁРКА
                    const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/OV/watermarkMEME.css?raw=true';
                    $.ajax({
                        url: githubUrl,
                        dataType: 'text',
                        success: function(data) {
                            $('head').append('<style>' + data + '</style>');
                        }});})();
            }
        }
        if (globals["watermarkCostumes"]) {
            (function() { // ВАТЕРМАРКИ ДЛЯ КОСТЮМОВ ОЗЁРКА
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/OV/watermark.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
        }
    }
    if (globals["clSeaUniverse"]) {
        (function() { // ОБЫЧНЫЕ КОСТЮМЫ МОРСКАЯ
            const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/MV/costumes.css?raw=true';
            $.ajax({
                url: githubUrl,
                dataType: 'text',
                success: function(data) {
                    $('head').append('<style>' + data + '</style>');
                }});})();
        if (globals["clMemeCostumes"]) {
            (function() { // МЕМНЫЕ КОСТЮМЫ МОРСКАЯ
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/MV/costumesMEME.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
            if (globals["watermarkCostumes"]) {
                (function() { // ВАТЕРМАРКИ ДЛЯ МЕМНЫХ КОСТЮМОВ МОРСКАЯ
                    const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/MV/watermarkMEME.css?raw=true';
                    $.ajax({
                        url: githubUrl,
                        dataType: 'text',
                        success: function(data) {
                            $('head').append('<style>' + data + '</style>');
                        }});})();
            }
        }
        if (globals["watermarkCostumes"]) {
            (function() { // ВАТЕРМАРКИ ДЛЯ КОСТЮМОВ МОРСКАЯ
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/MV/watermark.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
        }
    }
    if (globals["clCreatorUniverse"]) {
        (function() { // ОБЫЧНЫЕ КОСТЮМЫ ТВОРЦЫ
            const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/VT/costumes.css?raw=true';
            $.ajax({
                url: githubUrl,
                dataType: 'text',
                success: function(data) {
                    $('head').append('<style>' + data + '</style>');
                }});})();
        if (globals["clMemeCostumes"]) {
            (function() { // МЕМНЫЕ КОСТЮМЫ ТВОРЦЫ
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/VT/costumesMEME.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
            if (globals["watermarkCostumes"]) {
                (function() { // ВАТЕРМАРКИ ДЛЯ МЕМНЫХ КОСТЮМОВ ТВОРЦЫ
                    const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/VT/watermarkMEME.css?raw=true';
                    $.ajax({
                        url: githubUrl,
                        dataType: 'text',
                        success: function(data) {
                            $('head').append('<style>' + data + '</style>');
                        }});})();
            }
        }
        if (globals["watermarkCostumes"]) {
            (function() { // ВАТЕРМАРКИ ДЛЯ КОСТЮМОВ ТВОРЦЫ
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/VT/watermark.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
        }
    }
  }

    (function() {
        const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/MERO/costumes.css?raw=true';
        $.ajax({
            url: githubUrl,
            dataType: 'text',
            success: function(data) {
                $('head').append('<style>' + data + '</style>');
            }});})();

  if (globals.clRemoveAllTongues) {
    $('head').append(`<style>div[style*=tongue]{display: none;}</style>`)
  }
  if (globals.clRemoveAllCostumes) {
    $('head').append(`<style>div[style*=costume]{display: none;}</style>`)
  }
