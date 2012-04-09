/// <reference path="jquery-1.7.1-vsdoc.js" />
/* Nivo extended settings
*  by René Skou 
*  Juhlsen.com 2012 
*  Script gets setting parameters dynamically from umbraco 
*  razor script: NivoImageSlider.cshtml.
*/
$(document).ready(function () {

    var nivoSliderId = $('#nivoSliderId').val();
    var nivoWidth = $('#nivoWidth').val();
    var nivoHeight = $('#nivoHeight').val();
    var nivoThemeUrl = $('#nivoTheme').val();
    var nivoEffects = $('#nivoEffects').val();
    var nivoCaptionPosition = $('#nivoCaptionPosition').val();
    var nivoCaptionColor = '#' + $('#nivoCaptionColor').val();
    var nivoCaptionOpacity = $('#nivoCaptionOpacity').val();
    var nivoSlices = $('#nivoSlices').val();
    var nivoBoxCols = $('#nivoBoxCols').val();
    var nivoBoxRows = $('#nivoBoxRows').val();
    var nivoAnimSpeed = $('#nivoAnimSpeed').val();
    var nivoPauseTime = $('#nivoPauseTime').val();
    var nivoStartSlide = $('#nivoStartSlide').val();
    var nivoDirNav = $('#nivoDirNav').val();
    var nivoDirNavHide = $('#nivoDirNavHide').val();
    var nivoControlNav = $('#nivoControlNav').val();
    var nivoPauseOnHover = $('#nivoPauseOnHover').val();
    var nivoMaualAdvance = $('#nivoMaualAdvance').val();
    var nivoPrevText = $('#nivoPrevText').val();
    var nivoNextText = $('#nivoNextText').val();
    var nivoRandomStart = $('#nivoRandomStart').val();
    var nivoDefaultFont = $('#nivoDefaultFont').val();
    var nivoDefaultFontSize = $('#nivoDefaultFontSize').val();
    var nivoDefaultFontColor = '#' + $('#nivoDefaultFontColor').val();
    var nivoLinkFont = $('#nivoLinkFont').val();
    var nivoLinkFontSize = $('#nivoLinkFontSize').val();
    var nivoLinkFontColor = '#' + $('#nivoLinkFontColor').val();
    var nivoH1Font = $('#nivoH1Font').val();
    var nivoH2Font = $('#nivoH2Font').val();
    var nivoH3Font = $('#nivoH3Font').val();
    
    $('head').prepend('<link rel="stylesheet" href="' + nivoThemeUrl + '" type="text/css">');
    $('head').append('<link rel="stylesheet" href="' + nivoCaptionPosition + '" type="text/css">');
    $('.nivoSlider').css('width', nivoWidth);
    $('.nivoSlider').css('height', nivoHeight);
    $('#sliderFrame p').css('font-family', 'nivoDefaultFont,Arial, sans-serif');
    $('#sliderFrame p').css('font-size', 'nivoDefaultFotSize');
    $('#sliderFrame p').css('color', 'nivoDefaultFontColor');
    $('#sliderFrame a').css('font-family', 'nivoLinkFont,Arial, sans-serif');
    $('#sliderFrame a').css('font-size', 'nivoLinkFontSize');
    $('#sliderFrame a').css('color', 'nivoLinkFontColor');
    $('#sliderFrame h1').css('font-family', 'nivoH1Font');
    $('#sliderFrame h2').css('font-family', 'nivoH2Font');
    $('#sliderFrame h3').css('font-family', 'nivoH3Font');

    $('#' + nivoSliderId).nivoSlider({
        effect: nivoEffects, // Specify sets like: 'fold,fade,sliceDown'
        slices: nivoSlices, // For slice animations
        boxCols: nivoBoxCols, // For box animations
        boxRows: nivoBoxRows, // For box animations
        animSpeed: nivoAnimSpeed, // Slide transition speed
        pauseTime: nivoPauseTime, // How long each slide will show
        startSlide: nivoStartSlide, // Set starting Slide (0 index)
        directionNav: isActive(nivoDirNav), // Next & Prev navigation
        directionNavHide: isActive(nivoDirNavHide), // Only show on hover
        controlNav: isActive(nivoControlNav), // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        controlNavThumbsFromRel: false, // Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', // Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
        keyboardNav: true, // Use left & right arrows
        pauseOnHover: isActive(nivoPauseOnHover), // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        captionOpacity: nivoCaptionOpacity, // Universal caption opacity
        prevText: nivoPrevText, // Prev directionNav text
        nextText: nivoNextText, // Next directionNav text
        randomStart: isActive(nivoRandomStart), // Start on a random slide
        beforeChange: function () { }, // Triggers before a slide transition
        afterChange: function () { }, // Triggers after a slide transition
        slideshowEnd: function () { }, // Triggers after all slides have been shown
        lastSlide: function () { }, // Triggers when last slide is shown
        afterLoad: function () { }, // Triggers when slider has loaded
        captionColor: nivoCaptionColor
    });
});
function isActive(value) {
    if (value == "false") {
        return false;
    } else {
    return true;
    }
};