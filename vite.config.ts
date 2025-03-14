import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';

const terserOptions = {
	compress: {
		drop_debugger: false,
	},
};

export default defineConfig({
	build: {
		lib: {
			entry: './src/index.ts',
			name: 'callforwards',
			fileName: (format) => `callforwards.${format}.js`
		},
		sourcemap: true,
		rollupOptions: {
			output: [
				{ // ESM
					format: 'es',
					dir: 'dist/esm',
					entryFileNames: '[name].js',
					preserveModules: true,
					freeze: false,
				},
			],
			plugins: [
				resolve({ preferBuiltins: true }),
				json(),
				typescript({
					tsconfig: './tsconfig.json',
				}),
				terser(terserOptions),
				visualizer({
					filename: 'bundle-stats.html',
					sourcemap: false,
					// template: 'sunburst'
					gzipSize: true,
					brotliSize: true,
				}),
			],
		},
	},
	resolve: {
		alias: {
			callforwards: './src/index',
		},
	},
});
