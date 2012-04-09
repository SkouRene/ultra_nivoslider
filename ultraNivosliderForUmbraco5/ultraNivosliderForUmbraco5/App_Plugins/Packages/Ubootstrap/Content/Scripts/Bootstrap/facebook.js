/* Replace Twitter/Facebook/G+ scripts with one Modernizr.load call https://gist.github.com/1402295 Must set attribute data-lang */

Modernizr.load([
    {
        test: document.getElementById('facebook-jssdk'),
        nope: '//connect.facebook.net/' + $('#fb-root').attr('data-lang') + '/all.js#xfbml=1'
    }
]);
