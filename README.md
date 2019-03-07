# @ponday/rollup-plugin-lit-sass

Rollup plugin to import '.sass' or '.scss' files on JavaScript / TypeScript

## Installation

```
npm install --save-dev @ponday/rollup-plugin-lit-sass
```

## Usage

Import and add this plugin to `plugins` option.

```javascript
import litSass from '@ponday/rollup-plugin-lit-sass';

export default {
  entry: 'src/input.js',
  dest: 'dist/output.js',
  plugins: [
    litSass()
  ]
};
```

Import sass file on JavaScript.

```javascript
import { LitElement, html, css} from 'lit-element';
// import as a function that type is (params: { css: typeof require('lit-element').css }) => CSSResult
import style from './styles.scss';

export class MyElement extends LitElement {
  static styles = style({ css });

  // other implementations...
}
```

If you want to use TypeScript, you might need type declaraiton file for sass/scss.

An example code for SCSS is following:

```typescript
declare module "*.scss" {
  import { css, CSSResult } from 'lit-element';
  const scss: (params: { css: typeof css}) => CSSResult;
  export default scss;
}
```

## License

MIT
