This project demonstrates the capabilities of webpack.
The source/ folder consists of .js files. main.js is an entry point, others are modules.
Webpack is managed by webpack.config.js file - it stores settings. Main.js file is converted to main.bundle, which is stored in build/js folder.
Build folder also stores index.html file and css/ repository with style.css file.

Modules:
-slider.js is a module that brings customizable slider (noUiSlider) to the project.
-validation.js brings validation to input elements. It makes sure that the username has a certain length.
-render-html.js module renders additional html code inside of index.html file.

Run:
npm run start -> starts browsersync that creates a local server. If any html, css or js file is changed the browser is going to be reloaded.
npm run build -- --watch (in different terminal) -> starts webpack. Main.js file is converted to main.bundle and main.bundle.map files. -- --watch makes sure that these files are updated if any .js file is changed.

css-loader and style-loader packages are required for applying noUiSlider styles.
