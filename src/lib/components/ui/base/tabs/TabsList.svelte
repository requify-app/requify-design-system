<script lang="ts">
	import { Tabs as BitsTabs } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'inline-flex h-12 items-center justify-center gap-0.5 rounded-lg bg-gray-50 border border-gray-200 py-0.5 text-gray-600 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400';
</script>

<BitsTabs.List class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</BitsTabs.List>
