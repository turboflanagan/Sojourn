'use strict';

define([

], function() {

  var module = {
    data: '',
    tags: {}
  };

  module.load = function(name) {
    name = name || 'bullet:document';

    var raw = localStorage.getItem(name);
    if (raw) {
      var parsed = JSON.parse(raw);
      for (var key in parsed) {
        this[key] = parsed[key];
      }
    }

    if (module.data === '') {
      module.data = 'Introducing Nix – The smart-text editor that helps you get things done.\nStart typing! Nix will automatically interpret certain patterns to add formatting and functionality.\n\n\nGet Started:\nFollow these steps to start crushing tasks with Nix.\n- Create sections by ending a line with a colon.\n- Generate todos by starting a line with a hyphen.\n- Click the circle next to a todo to check it off.\n- Add tags with the hash symbol. #example\n- Color tags by hovering over them.\n- Use the map on the left to track progress and jump to sections.\n- Bookmark this page and come back later. Your document will automatically save.\n\n\nNote: Your document is saved in your browser\'s local storage, which can occasionally be wiped away.\nNix was created by Tom Giannattasio (@attasi on Twitter).';
    }

    module.name = name;
  };

  module.save = function() {
    localStorage.setItem(module.name, JSON.stringify(this));
    localStorage.setItem('bullet:backupData', this.data);
  };

  return module;

});
