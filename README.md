aws-infra-visualize 프로젝트 진행을 위한 React + Typescript basekit 

## setup / build / start
- setup
`npm install`
- build
```shell script
# build development
npm run build
# build production
npm run build:prod

# build docker image
$ docker build --tag aws-infra-visualize:0.0.0 .
# local production test with single docker container
$ docker run -i -p 9000:9000 aws-infra-visualize:0.0.0
```
- start
`npm start` -> webpack-dev-server (port=9000)

---

## Project base info
### Dependencies
```shell script
# install packeages
npm install --save-dev @babel/core @babel/cli @babel/register babel-loader @babel/preset-env @babel/preset-typescript 
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev typescript ts-loader source-map-loader
npm install --save-dev html-webpack-plugin

npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
```

### browserslist
https://github.com/browserslist/browserslist

### typescript
- tsconfig.json
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- typescript 
https://www.typescriptlang.org/docs/home.html
https://www.typescriptlang.org/v2/en/tsconfig

### Babel
- installation [cli, webpack]
https://babeljs.io/setup.html#installation
- typescript
https://babeljs.io/docs/en/babel-preset-typescript
- preset-env
https://babeljs.io/docs/en/babel-preset-env

- @babel/polyfill -> core-js & regenerator-runtime
https://babeljs.io/docs/en/babel-polyfill
https://github.com/zloirock/core-js
https://www.npmjs.com/package/regenerator-runtime

### Webpack
- webpack 
https://webpack.js.org/configuration/
https://webpack.js.org/plugins/define-plugin/
- ts-loader
https://www.npmjs.com/package/ts-loader
- babel-loader
https://www.npmjs.com/package/babel-loader
- html-webpack-plugin
https://www.npmjs.com/package/html-webpack-plugin
- mode
https://webpack.js.org/configuration/mode/
- optimization
https://www.npmjs.com/package/uglifyjs-webpack-plugin
- devserver
https://webpack.js.org/configuration/dev-server/ 

### Editor Config
https://editorconfig.org/
