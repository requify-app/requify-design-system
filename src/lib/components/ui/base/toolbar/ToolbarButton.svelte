<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		size?: 'xs' | 'sm' | 'md' | 'lg';
		children?: Snippet;
		class?: string;
	}

	let { size = 'sm', children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'inline-flex items-center justify-center rounded transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500';

	const sizes = {
		xs: 'h-6 w-6 p-1',
		sm: 'h-8 w-8 p-1.5',
		md: 'h-10 w-10 p-2',
		lg: 'h-11 w-11 p-2.5'
	};

	const computedClass = $derived(cn(baseStyles, sizes[size], className));
</script>

<button type="button" class={computedClass} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</button>
