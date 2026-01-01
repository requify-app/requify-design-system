<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		color?: 'default' | 'blue' | 'green' | 'red' | 'yellow' | 'purple';
		onclick?: (event: MouseEvent) => void;
	}

	let { children, class: className, color = 'default', onclick, ...restProps }: Props = $props();

	const baseStyles =
		'border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors';
	const bgStyles = 'bg-white dark:bg-gray-800';
</script>

<tr class={cn(baseStyles, bgStyles, className)} {onclick} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</tr>
