const mix = require('laravel-mix');
const del = require('del');

mix.postCss('src/css/file-1.css', 'public_html/assets/css/')
   .sass('src/css/file-2.scss', 'public_html/assets/css/')
   .combine([
       'public_html/assets/css/file-1.css',
       'public_html/assets/css/file-2.css'
   ], 'public_html/assets/css/combined.css').then(function(){
    del('public_html/assets/css/file-1.css');
    del('public_html/assets/css/file-2.css');
});