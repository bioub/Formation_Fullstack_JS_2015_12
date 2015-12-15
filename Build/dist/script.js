(function($) {
    'use strict';

    setInterval(function() {
        var now = new Date();
        $('#horloge').html(now.toTimeString());
    }, 1000);
}(jQuery));

