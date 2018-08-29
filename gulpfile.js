const exec = require('child_process').exec;
const gulp = require('gulp');
gulp.task('default',async ()=>{
    exec("npm run build")
  });
