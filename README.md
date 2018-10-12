# TEMPLATE START PROJECT

Start Project with browserify (optional) and separate gulp tasks.

## How To start?

Clone this repo.
Run `npm install` for install all dependencies.

## Development server

Run `gulp` for a dev server. Navigate to `http://localhost:3000/`.
The app will automatically reload if you change any source files.
Dev build will create after every files change.

## Build

Run `gulp build` to build the project for production. The build artifacts will be stored in the `docs/` (or your configured folder in ./gulp/config.js) directory.

## Configure

You may configure your own folders and entry points in `./gulp/config.js`.
Also you may choose browserify bundling or simple concat js modules. Just uncomment/comment nesessary task in `./gulp/task/js.js`.
