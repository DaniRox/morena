import { spawn } from 'child_process';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';
import url from '@rollup/plugin-image';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// Extract any component CSS into a separate file - better for performance
		css({ output: 'bundle.css' }),

		// Handle images and other assets
		url({
			// Include all files
			include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif'],
			// Limit the size of inlined files (8kb)
			limit: 8192,
			// Emit files as base64 data URIs
			publicPath: '/build/',
			fileName: '[name][extname]'
		}),

		// Resolve Node modules and dedupe Svelte
		resolve({
			browser: true,
			dedupe: ['svelte'],
			exportConditions: ['svelte']
		}),
		commonjs(),

		// If not in production, start a local server and enable live reloading
		!production && serve(),
		!production && livereload('public'),

		// Minify the code if in production
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
