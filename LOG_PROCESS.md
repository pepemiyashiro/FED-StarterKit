## First Steps
Creation of the file structure, as per discussion. 
We are trying to mix ITCSS pattern for SCSS architecture with a file structure by components. The idea is to have a easy way to track errors and an faster process to find the components and its styles/html/js in the same folder, giving the responsability to the automation process to put them together...
Because of those needs, we think the mix with Gulp 4 and Webpack 3 can help us. Let's see...

References used for this part:
* https://css-tricks.com/combine-webpack-gulp-4/
* https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/

Also we will use Github integrated with Slack to follow the collaborative process.

## Adding tasks
Following the [guide to combine webpack and gulp](https://css-tricks.com/combine-webpack-gulp-4/), we have setted up the tasks.
We are also using Javascript ES6 for the tasks configuration. We think that will make easy to create a base configuration along the tasks.
