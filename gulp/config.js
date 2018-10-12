const destPath = 'dist';

const config = {
  src: {
    root: 'src',
    sass: 'src/sass',
    css: 'src/css',
    html: 'src/html',
    js: 'src/js',
    jsEntry: 'src/js/modules/app.js',
    img: 'src/images',
    fonts: 'src/fonts',
  },
  dest: {
    root: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    img: `${destPath}/images`,
    fonts: `${destPath}/fonts`,
  },
  entry: 'index.html',
};

module.exports = config;
