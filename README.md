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

## How to publish a new version to npm
Releases of [`@b12/metronome`](https://www.npmjs.com/package/@b12/metronome) are published by the `Publish Package` workflow (`.github/workflows/publish.yml`), which authenticates to the registry through npm [trusted publishing](https://docs.npmjs.com/trusted-publishers). There is no npm token to pass around, and publishing from a laptop is not part of the process.

Keep in mind that the package ships source rather than a bundle: nothing is built during publish, and `.npmignore` decides what ends up in the tarball. Whatever is committed to `main` is what consumers get.

#### Releasing
1. Bump `version` in `package.json` and merge it to `main`;
2. Optionally preview the tarball — this only packs and prints the file list, it never uploads:

```bash
$ npm publish --dry-run
```

3. Trigger the release, either by tagging the commit on `main`:

```bash
$ git tag v1.1.36
$ git push origin v1.1.36
```

or by starting the workflow by hand: **Actions → Publish Package → Run workflow → `main`**. Both paths publish the version found in `package.json`, so the tag and that field must agree;

4. Watch the run in the Actions tab, then confirm the version landed with `npm view @b12/metronome version`.

::**Warning!** Merging to `main` does not publish anything on its own. The `push` trigger is filtered to `v*` tags, so only a tag push or a manual run releases.::

#### If a release fails
Re-running the failed job of a tag-triggered run will not pick up a fix. For tag events GitHub reads the workflow file as of the tag, so the re-run keeps using the same file that just failed. Fix the problem on `main` and use **Run workflow** on `main` instead — that leaves the tag untouched. Moving the tag with `git tag -f` and a force push also works, but it is the blunter option.

The registry rejects re-publishing a version that already exists with a `403`, so retrying a release cannot overwrite what is already out there.

#### Toolchain requirements
Trusted publishing needs npm `>=11.5.1`, which is what `engines.npm` pins and why the workflow runs on Node 24 — that line bundles npm 11.16.0. Node 20 and Node 22 never shipped an npm past 10.9.x, so do not move the release to an older LTS; it would break registry authentication. Both the workflow and the `publish-dry-run` job assert this floor before publishing, so an inadequate npm fails with a clear message instead of an opaque OIDC error. That dry-run job runs on every pull request, which is where toolchain drift should surface — not mid-release.

## How can I test my changes in an internal repository without publishing?
#### Note: If you're using docker, then you should do this outside of docker.
You can do it in five steps:

1. In the `metronome` repository link metronome in yarn with command `yarn link`;
2. In the `metronome` repository run `yarn install --production`;
3. In your internal repository (`crowdsurfing/product`) use your linked version with command `yarn link @b12/metronome`;
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
