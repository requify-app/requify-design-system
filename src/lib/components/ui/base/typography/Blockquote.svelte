<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import type { HTMLQuoteAttributes } from 'svelte/elements';

	interface Props extends HTMLQuoteAttributes {
		children?: Snippet;
		border?: boolean;
		bg?: boolean;
		italic?: boolean;
		class?: string;
	}

	let {
		children,
		border = false,
		bg = false,
		italic = true,
		class: className,
		...restProps
	}: Props = $props();

	const baseStyles = 'text-gray-900 dark:text-white';
	const borderStyles = $derived(
		border ? 'border-l-4 border-gray-300 pl-4 dark:border-gray-700' : ''
	);
	const bgStyles = $derived(bg ? 'bg-gray-50 p-4 dark:bg-gray-800' : '');
	const italicStyles = $derived(italic ? 'italic' : '');
</script>

<blockquote class={cn(baseStyles, borderStyles, bgStyles, italicStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</blockquote>
