$(document).ready(function() {
    $('#accordion').accordionza({
        autoPlay: false,
    });
});

$('.panel-toggle').on('click', function() {
    $(this).toggleClass('expanded');

    var panel = $(this).parent().parent();

    if (panel.hasClass('expanded')) {
        panel.find('.panel-content').slideUp('fast', function() {
            panel.removeClass('expanded');  
        });
    } else {
        panel.find('.panel-content').slideDown('fast', function() {
            panel.addClass('expanded');
        });
    }
});