import path from 'path';
import { createFilter } from 'rollup-pluginutils';
import sass from 'sass';

function template(code, options = {}) {
    const { css } = sass.renderSync({
        data: code,
        ...options,
        outputStyle: 'compressed'
    });
    const formatted = css.toString('utf-8', 0, css.length)
        .replace( /\\/g, '\\' )
        .replace( /\$\{/g, '\\${' )
        .replace( /([^\\])`/g, '$1\\`' );

    return `export default ({ css }) => {
        const extractorBody = \`return css\\\`${formatted}\\\`;\`;
        return (new Function("css", extractorBody))(css);
    };`;
}

export default function litSass(options = {}) {
    const filter = createFilter(options.include, options.exclude);

    return {
        name: 'lit-sass',
        transform(code, id) {
            if (!filter(id) || !/\.(s?c|sa)ss$/.test((path.extname(id)))) {
                return null;
            }

            return {
                code: template(code, options),
                map: { mappings: '' }
            };
        }
    }
}
