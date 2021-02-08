const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js');
mix.sass('node_modules/bootstrap/scss/bootstrap.scss','public/css');
