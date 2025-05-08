import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
			manifest: {
				name: 'Quench Beverages Limited',
				short_name: 'Quench Beverages',
				description:
					'Official site of Quench Beverages Limited - premium beverages made for Naija.',
				theme_color: '#091300',
				background_color: '#ffffff',
				icons: [
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: '/apple-touch-icon.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				],
				start_url: '/',
				display: 'standalone',
				scope: '/',
				orientation: 'portrait'
			}
		})
	],
	server: {
		allowedHosts: ['devserver-main--qbl.netlify.app', 'localhost', 'https://devserver-main--qbl.netlify.app/'],
	}
});
