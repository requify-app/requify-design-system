<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		padding?: string;
		onclick?: (event: MouseEvent) => void;
	}

	let {
		children,
		class: className,
		padding = 'px-6 py-3',
		onclick,
		...restProps
	}: Props = $props();

	const baseStyles = 'font-medium text-gray-900 dark:text-white';
</script>

<th scope="col" class={cn(padding, baseStyles, className)} {onclick} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</th>
