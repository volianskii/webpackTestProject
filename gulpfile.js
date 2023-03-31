/* global require exports */
const { watch, src } = require('gulp');
const browserSync = require('browser-sync').create();

function browserSyncJob() {
  browserSync.init({
    server: 'build/'
  });

  watch('build/css/*.css', alertCSS);
  watch('build/*.html', alertHTML);
}

const alertCSS = () => {
  console.log('CSS file has been changed');

  return src('build/css/style.css')
    .pipe(browserSync.stream());
};

const alertHTML = () => {
  console.log('HTML file has been changed');

  return src('build/index.html')
    .pipe(browserSync.stream());
};

exports.server = browserSyncJob;