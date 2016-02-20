# React Grid:
A simple React based responsive grid using 2 components (the [Grid](https://github.com/ettysekhon/react-grid/blob/master/src/client/components/Grid.js) component and the [GridItem](https://github.com/ettysekhon/react-grid/blob/master/src/client/components/GridItem.js) component).

## cd into folder and run

```bash
$ npm install
$ npm run serve & open http://localhost:8082
```

## Some points on styling demonstrated here:
1. Use of attribute based selectors to style React components and it's states (see Grid.css), project is also configured to take advantage of CSS module based local classes.
2. Use of PostCSS for:
  *	[variables](https://github.com/postcss/postcss-simple-vars) - these are defined in JS (see [colors](https://github.com/ettysekhon/react-grid/blob/master/src/client/styles/colors.js) and [spacing](https://github.com/ettysekhon/react-grid/blob/master/src/client/styles/spacing.js) in [webpack.config.js](https://github.com/ettysekhon/react-grid/blob/master/webpack.config.js))
  * autoprefixer
  * mixins
  * nesting
3. Easy grid configuration, just change breakpoints and columns in [config.js](https://github.com/ettysekhon/react-grid/blob/master/src/client/config.js) and run `npm run build` this will generate the width CSS and JS files required for GridItem component.

## Further ideas:
1. Include Flexbox support.
2. Create better sample page to demonstrate all grid features.
