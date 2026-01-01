<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		rounded?: boolean;
	}

	let { children, class: className, rounded = false, ...restProps }: Props = $props();

	const baseStyles = 'space-y-2';
	const roundedStyles = $derived(rounded ? 'bg-gray-50 dark:bg-gray-800 rounded-xl p-4' : '');
</script>

<div class={cn(baseStyles, roundedStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</div>
