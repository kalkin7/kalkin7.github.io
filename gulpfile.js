var gulp = require('gulp');
var penthouse = require('penthouse');
var fs = require('fs');
var cleanCSS = require('clean-css');
var minifyCss = require('gulp-minify-css');

gulp.task('penthouse', function() {
    penthouse({
        url : 'http://localhost:4000/index.html',
        css : '_site/css/site-ti.min.css',
        width: 800, // viewport width
        height: 600 // viewport height
    }, function(err, criticalCss) {
        console.log(criticalCss);
        console.log(err);
		var clean = new cleanCSS().minify(criticalCss);
        fs.writeFile('_includes/critical-css.html', criticalCss); // Write the contents to a jekyll include
    });
});