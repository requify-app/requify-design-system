<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { Search as SearchIcon } from '@lucide/svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	/**
	 * Search input with built-in search icon and proper styling.
	 * Extends HTML input with search-specific defaults.
	 *
	 * @example Basic usage
	 * ```svelte
	 * <Search bind:value={searchQuery} />
	 * ```
	 *
	 * @example Small size
	 * ```svelte
	 * <Search size="sm" bind:value={quickSearch} />
	 * ```
	 *
	 * @example Large size
	 * ```svelte
	 * <Search size="lg" bind:value={advancedSearch} />
	 * ```
	 *
	 * @example Custom placeholder
	 * ```svelte
	 * <Search placeholder="Search products..." bind:value={productSearch} />
	 * ```
	 *
	 * @example With custom class
	 * ```svelte
	 * <Search class="max-w-md" bind:value={search} />
	 * ```
	 *
	 * @param {string} value - Search input value (bindable)
	 * @param {'sm' | 'md' | 'lg'} size - Input size affecting height and text size. Default: 'md'
	 * @param {string} class - Additional CSS classes to apply
	 * @param {string} placeholder - Placeholder text. Default: 'Search...'
	 *
	 * @see {@link Input} - Use Input for general text inputs without icon
	 * @see {@link Button} - Often used with search for submit buttons
	 *
	 * @accessibility
	 * - type="search" for proper search semantics
	 * - Search icon provides visual context
	 * - Keyboard focusable with proper focus ring
	 * - Proper label association (add Label component)
	 * - Placeholder text for screen readers
	 */
	interface Props extends Omit<HTMLInputAttributes, 'size'> {
		value?: string;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
	}

	let {
		value = $bindable(),
		size = 'md',
		class: className,
		placeholder = 'Search...',
		...restProps
	}: Props = $props();

	const sizes = {
		sm: 'h-8 text-sm',
		md: 'h-10 text-sm',
		lg: 'h-12 text-base'
	};

	const iconSizes = {
		sm: 'h-4 w-4',
		md: 'h-5 w-5',
		lg: 'h-6 w-6'
	};

	const baseStyles =
		'w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 pr-4 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500';
</script>

<div class="relative">
	<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
		<SearchIcon class={cn('text-gray-500 dark:text-gray-400', iconSizes[size])} />
	</div>
	<input
		type="search"
		bind:value
		{placeholder}
		class={cn(baseStyles, sizes[size], className)}
		{...restProps} />
</div>
