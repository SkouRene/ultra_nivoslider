/* Open link in a new window using jQuery  */

$(document).ready(function () {
    $('a[rel="external"]').click(function () {
        window.open($(this).attr('href'));
        return false;
    });
});

/* Enabling tooltip */

$(function () {
    $("ul.thumbnails li a").tooltip({
        placement: 'left',
        live: true
    });
});
