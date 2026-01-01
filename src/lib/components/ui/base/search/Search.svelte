<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { Search as SearchIcon } from '@lucide/svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

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
