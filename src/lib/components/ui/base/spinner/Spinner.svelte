<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '4' | '6' | '8' | '10' | '12' | '16' | string;
		class?: string;
	}

	let { size: sizeProp = 'md', class: className }: Props = $props();

	const sizes: Record<string, string> = {
		xs: 'h-3 w-3',
		sm: 'h-4 w-4',
		md: 'h-6 w-6',
		lg: 'h-8 w-8',
		xl: 'h-12 w-12',
		// Numeric sizes (Tailwind units)
		'4': 'h-4 w-4',
		'6': 'h-6 w-6',
		'8': 'h-8 w-8',
		'10': 'h-10 w-10',
		'12': 'h-12 w-12',
		'16': 'h-16 w-16'
	};

	// If size is a known value, use it; otherwise use it directly as a class (e.g., custom Tailwind class)
	const sizeClass = $derived(sizes[sizeProp] ?? sizeProp);
	const computedClass = $derived(cn('animate-spin', sizeClass, className));
</script>

<svg
	class={computedClass}
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	aria-label="Loading">
	<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
	<path
		class="opacity-75"
		fill="currentColor"
		d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
	</path>
</svg>
