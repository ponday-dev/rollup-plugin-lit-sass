# @ponday/rollup-plugin-svg

Rollup plugin to import SVG files on JavaScript / TypeScript

## Installation

```
npm install --save-dev @ponday/rollup-plugin-svg
```

## Usage

Import and add this plugin to `plugins` option.

```javascript
import svg from '@ponday/rollup-plugin-svg';

export default {
  entry: 'src/input.js',
  dest: 'dist/output.js',
  plugins: [
    svg()
  ]
};
```

### Options

You can use following options.

#### format

value: `text` or `base64` (default: `text`)

Import format. SVG files will format to base64 before import if you specify `base64`.

## License

MIT
