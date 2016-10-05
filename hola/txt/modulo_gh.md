#Módulo gh-pages para gulp

El plugin gulp-gh-pages simplifica el proceso de despliegue en gh-pages. Para ello ponemos una tarea:

```javascript
    var gulp = require('gulp');
    var ghPages = require('gulp-gh-pages');

    gulp.task('deploy', function() {
      return gulp.src('./html)
        .pipe(ghPages());
    });
```