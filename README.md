# Metronome
Metronome is a design system we use for developing consistent user experiences at [B12](https://www.b12.io). We recently open sourced it to allow us to use it in other open source projects, and to make the useful and reusable components more widely available to developers outside the company. 

## How to develop
Root of the repo looks like this. The main parts are: `components`  and `style` directories, they contain basic components and styles all other files are here to help you develop and test your components. `src` directory contains files to preview your components in browser, keep in mind that this directory won’t be included in npm package (to see other ignored files and directories see `.npmignore` file).

```
.
├── LICENSE
├── README.md
├── components
├── index.es6.js
├── jest
├── node_modules
├── package.json
├── src
├── style
├── third_party
├── webpack.config.js
└── yarn.lock

```

::**Warning!** By convention, all javascript files should have a `*.es6.js` file extension.::

Below are basic command you may need:

```bash
# Run demo in browser
$ yarn start

# Run tests
$ yarn test
```

If you are developing on a remote machine and want to view the demo in your browser,
* You'll probably need to edit `webpack.config.js` and change `module.exports.devServer.port` to be an available port on your machine.
* You might also need to edit `module.exports.devServer.allowedHosts` to include your hostname. The default supports `b12.io` or any subdomain (see the [documentation of host formats](https://webpack.js.org/configuration/dev-server/#devserverallowedhosts)).
* Then you can access the demo interface at `http://your-remote-server.com:{port}`.

## How can I test my changes in an internal repository without publishing?
#### Note: If you're using docker, then you should do this outside of docker.
You can do it in five steps:

1. In the `metronome` repository link metronome in yarn with command `yarn link`;
2. In the `metronome` repository run `yarn install --production`;
3. In your internal repository use your linked version with command `yarn link @b12/metronome`;
4. In your internal repository try to build product with `yarn && yarn dev`;

In case you accidentally ran the commands inside of docker and are running into permissions issues
1. In your docker env remove `node_modules` folder, also remove `build/static/build` dir;
2. On your host machine recreate `build/static/build` dir with local user permissions;
3. Go to the internal repository on your host machine and run `yarn && yarn dev`;

#### Known issues
1. Reinstall `metronome` dependencies with `--production` flag before testing your changes in an internal repository;
2. If you see a lot of unexpected `flow` errors run `yarn flow stop && yarn dev`;
3. If `yarn install --production` installs dev dependencies try npm `npm install --production` instead;

#### Steps to take if you continue to get `flow`, `webpack`, and duplicate `react` package errors
* In your `metronome` repo, run:
  1. `rm -rf node_modules`;
  2. `npm i --production`;

* Then, in the internal repository, run:
  1. `rm -rf node_modules`;
  2. `yarn`;
  3. `yarn link @b12/metronome`;
  4. `yarn flow-reboot`;
