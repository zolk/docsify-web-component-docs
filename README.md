[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# docsify-web-component-docs

A Docsify plugin for displaying documentation for Custom Elements (Web Components).

## Requirements

You must provide a [Custom Elements Manifest (CEM)](https://github.com/webcomponents/custom-elements-manifest)
file for this plugin to function. You can generate one for your project by
incorporating the [CEM Analyzer](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/)
into your build process.

Refer to [Docsify Breeze](https://github.com/zolk/docsify-breeze)
for a fully integrated example:

- CEM Analyzer config: [custom-elements-manifest.config.js](https://github.com/zolk/docsify-breeze/blob/main/custom-elements-manifest.config.js)
- ESBuild script that runs `cem analyze` as part of the build process: [build.js](https://github.com/zolk/docsify-breeze/blob/main/scripts/build.js)
- Documentation example for a component: [button.ts](https://github.com/zolk/docsify-breeze/blob/main/src/components/button/button.ts)

This project supports an additional `status` field, which is not part of the
default CEM specification. Refer to the aforementioned config example for
including this field in your CEM file.

## Usage

### Setup & Installation

```html
<script>
  window.$docsify = {
    // ... (your existing Docsify config)
    componentDocs: {
      manifestPath: "/dist/custom-elements.json",
    },
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify-web-component-docs@1/dist/web-component-docs.min.js"></script>
```

Default styles, which you can override or replace with your own:

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-web-component-docs@1/dist/web-component-docs.min.css"
/>
```

### Available Tags for Displaying Documentation

Include the following tags in your Markdown file to display component
documentation information:

```md
# Button

[component-status:ds-button]

[component-description:ds-button]

## API Documentation

[component-metadata:ds-button]
```

💡 **Protip:** If your filename matches the name of your component (e.g., `ds-button.md`)
then you can exclude the component name in the tag (e.g., just `[component-status]`).

#### [component-description:ds-button]

The description of your component, as provided in the first line of your
component's documentation block:

```js
/**
 * This is the description of a component.
 *
 * [...]
 */
@customElement("ds-button")
export default class DsButton extends LitElement {
  ...
}
```

#### [component-status:ds-button]

The status of your component, as provided in your documentation's component
block:

```js
/**
 * This is the description of a component.
 *
 * @status ready
 *
 * [...]
 */
@customElement("ds-button")
export default class DsButton extends LitElement {
  ...
}
```

This field requires a [custom tag in your CEM config](https://github.com/zolk/docsify-breeze/blob/main/custom-elements-manifest.config.js), as noted in Requirements. The default styles for this plugin support
"draft", "ready", and "deprecated", but you can provide any desired value to
this field and style it as desired.

#### [component-metadata:ds-button]

Complete metadata tables for slots, properties, events, methods, CSS parts, and
CSS custom properties.

## Options

### componentDocs.manifestPath

- Type: `String`
- Default: `undefined`

**Required.** The path to your
[Custom Elements Manifest](https://github.com/webcomponents/custom-elements-manifest)
file (see requirements).

### componentDocs.prefix

- Type: `String`
- Default: `undefined`

An optional standardized prefix used by all your components. For example, `ds`
if all your components are named such as `ds-button` and `ds-card`. Setting
this feature will allow you to exclude the prefix when specifying the component
name in tags.

## Live Example

You can see this plugin in use as part of **Docsify Breeze** ([Live example](https://docsify-breeze.vercel.app/components/button), [GitHub project](https://github.com/zolk/docsify-breeze)).

## Local Demo

You can test this project locally in a demo Docsify installation.

First, clone this repo:

```
git clone https://github.com/zolk/docsify-web-component-docs.git
```

Then install dependencies (you'll need
[Node](https://nodejs.org/en/download/package-manager/) installed and the
`docsify` command available):

```
npm install -g docsify-cli
npm install
```

Finally, boot the local dev server:

```
npm start
```

By default, the server will boot at http://localhost:3000.

## Acknowledgements

This plugin was inspired by and builds upon work done for the [Shoelace](https://shoelace.style)
component library documentation by [Cory LaViska](https://twitter.com/claviska).

## License

This project was created by [Kevin Zolkiewicz](http://zolk.com) and is licensed
under an [MIT License](./LICENSE).

<br><br><br>

<p align="center"><a href="https://8thlight.com"><img src="./8l.png" height="75" alt="" /></a><br><i>This project is supported by <a href="https://8thlight.com">8th Light</a>.</i></p>
