import $ from 'jquery';

'use strict';

setInterval(() => {
    let now = new Date();
    $('#horloge').html(now.toTimeString());
}, 1000);