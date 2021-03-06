// import resolve from 'rollup-plugin-node-resolve';
import json from '@rollup/plugin-json';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import react from 'react';
import reactDom from 'react-dom';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.js',
    output: {
	file: 'public/bundle.js',
	format: 'iife', // immediately-invoked function expression — suitable for <script> tags
	sourcemap: true,
    },
    plugins: [
    json(),
	replace({'process.env.NODE_ENV': JSON.stringify('production'),}), // to fix react imports
    nodeResolve({ jsnext: true, preferBuiltins: true, browser: true }),
	commonjs({
		include:'node_modules/**',
	    namedExports: {		
		react: Object.keys(react),
		'react-dom': Object.keys(reactDom),
		'node_modules/react-is/index.js': ['isContextConsumer','isValidElementType','isFragment'],
		// 'node_modules/react/index.js': ['useContext','useLayoutEffect','useEffect','useMemo',  'createContext', 'createElement', 'Children', 'PureComponent', 'Component', 'createRef', 'Fragment', 'isValidElement', 'cloneElement', 'memo', 'useCallback', 'forwardRef', 'useState', 'useRef'],
		// 'node_modules/react-dom/index.js': ['unstable_batchedUpdates', 'findDOMNode', 'createPortal'],
		'node_modules/axios/index.js':['post','create'],
		'node_modules/prop-types/index.js': ['shape', 'instanceOf', 'node', 'object', 'string', 'func', 'bool', 'oneOfType', 'number', 'arrayOf', 'oneOf', 'any', 'elementType', 'array'],
	    },
	}),
    // nodeResolve({ jsnext: true, preferBuiltins: true, browser: true }),
    // json(),
	// json({
          // compact: true
    // }),
	postcss({
	    plugins: []
	}),

	// converts date-fns to ES modules
	//production && terser() // minify, but only in production
	babel({babelrc: false, presets: ['@babel/react']}),
    ]
};
