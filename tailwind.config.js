import tailwindcss from '@tailwindcss/vite';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: 'class',
	content: ['./src/**/*.{svelte,js,ts}', './node_modules/layerchart/**/*.{svelte,js}'],
	theme: {
		extend: {
			colors: {
				/* PRIMARY - Deep Slate Blue (professional, trustworthy) */
				primary: {
					50: '#f4f6fb',
					100: '#e8ecf6',
					200: '#cbd5eb',
					300: '#a1b4db',
					400: '#7088c6',
					500: '#4e68b4',
					600: '#3d5299',
					700: '#34427d',
					800: '#2f3968',
					900: '#2b3157'
				},
				/* SECONDARY - Warm Amber (action, energy) */
				secondary: {
					50: '#fef9f3',
					100: '#fdf2e6',
					200: '#fae0c1',
					300: '#f6c897',
					400: '#f0a564',
					500: '#eb8533',
					600: '#d16a1f',
					700: '#ad531a',
					800: '#8b431b',
					900: '#713819'
				},
				/* ACCENT - Vibrant Teal (success undertones) */
				accent: {
					50: '#f0fbf9',
					100: '#d6f4f0',
					200: '#ace8e0',
					300: '#78d4ca',
					400: '#45b8af',
					500: '#2c9d95',
					600: '#207d78',
					700: '#1e6562',
					800: '#1d504f',
					900: '#1c4342'
				},
				/* SUCCESS - Green (success states) */
				success: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d'
				},
				/* ERROR - Red (error states) */
				error: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d'
				},
				/* WARNING - Yellow (warning states) */
				warning: {
					50: '#fefce8',
					100: '#fef9c3',
					200: '#fef08a',
					300: '#fde047',
					400: '#facc15',
					500: '#eab308',
					600: '#ca8a04',
					700: '#a16207',
					800: '#854d0e',
					900: '#713f12'
				},
				/* INFO - Blue (informational states) */
				info: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a'
				}
			},
			borderRadius: {
				sm: '0.375rem',
				md: '0.5rem',
				lg: '0.75rem',
				xl: '1rem'
			},
			boxShadow: {
				'primary-sm':
					'0 1px 2px 0 rgb(0 0 0 / 0.06), 0 4px 12px -2px rgb(61 82 153 / 0.15), inset 0 1px 0 0 rgb(255 255 255 / 0.15)',
				'primary-md':
					'0 2px 4px 0 rgb(0 0 0 / 0.08), 0 8px 24px -4px rgb(61 82 153 / 0.25), inset 0 1px 0 0 rgb(255 255 255 / 0.2)',
				'primary-lg':
					'0 4px 8px 0 rgb(0 0 0 / 0.1), 0 16px 32px -6px rgb(61 82 153 / 0.3), inset 0 1px 0 0 rgb(255 255 255 / 0.25)'
			}
		}
	},
	plugins: [tailwindcss()]
};

export default config;
