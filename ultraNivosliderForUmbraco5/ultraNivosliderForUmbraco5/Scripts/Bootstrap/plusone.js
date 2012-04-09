/* Replace Twitter/Facebook/G+ scripts with one Modernizr.load call https://gist.github.com/1402295 */

Modernizr.load([
    {
        load: '//apis.google.com/js/plusone.js',
        complete: function () {
            window.___gcfg = { lang: $('.g-plusone').attr('data-lang') };
        }
    }
]);
