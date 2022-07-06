const path = require('path')

module.exports = {
  title: 'B12 Design System Style Guide',
  components: 'components/**/[A-Z]*.es6.js',
  ignore: ['**/*.test.es6.js', '**/*-test.es6.js'],
  sections: [
    {
      name: 'Introduction',
      sections: [
        {
          name: 'Documentation',
          content: 'styleguide.md'
        }
      ]
    },
    {
      name: 'Components',
      components: [
        'components/form/button/Button.es6.js',
        'components/form/checkbox/Checkbox.es6.js'
      ],
      sectionDepth: 2
    },
    {
      name: 'Layout',
      components: ['components/layout/nav-indicator/NavIndicator.es6.js'],
      sectionDepth: 2
    }
  ],
  styleguideComponents: {
    TableOfContentsRenderer: path.resolve(
      __dirname,
      'styleguide/components/DemoLayoutNav.es6.js'
    ),
    PathlineRenderer: path.resolve(
      __dirname,
      'styleguide/components/MetaData.es6.js'
    ),
    ComponentsListRenderer: path.resolve(
      __dirname,
      'styleguide/components/ComponentList.es6.js'
    ),
    SectionRenderer: path.resolve(
      __dirname,
      'styleguide/components/Section.es6.js'
    ),
    ReactComponentRenderer: path.resolve(
      __dirname,
      'styleguide/components/ReactComponent.es6.js'
    ),
    TableRenderer: path.resolve(
      __dirname,
      'styleguide/components/PropsTable.es6.js'
    )
  },
  moduleAliases: {
    '@b12/metronome': path.resolve(__dirname)
  },
  require: [path.join(__dirname, 'style/base.scss')],

  theme: {
    fontFamily: {
      base: [
        'SFUIText',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ],
      monospace: [
        'SF Mono',
        'Segoe UI Mono',
        'Roboto Mono',
        'Ubuntu Mono',
        'Menlo',
        'Courier',
        'monospace'
      ]
    }
  },
  webpackConfig: require('./webpack.config.js'),
  styles: path.join(__dirname, 'src/scss/style.scss'),
  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.es6.js')

    return `import ${name} from '@b12/metronome/${componentPath}'`
  },
  styleguideDir: './styleguide/static',
  pagePerSection: true,
  getExampleFilename (componentPath) {
    return componentPath.replace(/\.es6.js?$/, '.example.md')
  }
}
