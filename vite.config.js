import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		copy({
			targets: [
				{ src: 'static/CNAME', dest: 'build' },
			],
		}),
	],
	server: {
		port: 3000,
		host: '0.0.0.0',
	},
});
