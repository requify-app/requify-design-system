<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		padding?: string;
		colspan?: number;
	}

	let {
		children,
		class: className,
		padding = 'px-6 py-4',
		colspan,
		...restProps
	}: Props = $props();

	const baseStyles = 'text-gray-900 dark:text-white';
</script>

<td class={cn(padding, baseStyles, className)} {colspan} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</td>
