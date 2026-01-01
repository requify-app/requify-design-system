<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		color?: 'default' | 'success' | 'error' | 'warning';
	}

	let { children, class: className, color = 'default', ...restProps }: Props = $props();

	const colors = {
		default: 'text-gray-500 dark:text-gray-400',
		success: 'text-green-600 dark:text-green-400',
		error: 'text-red-600 dark:text-red-400',
		warning: 'text-yellow-600 dark:text-yellow-400'
	};

	const baseStyles = 'mt-1 text-sm';
</script>

<p class={cn(baseStyles, colors[color], className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</p>
